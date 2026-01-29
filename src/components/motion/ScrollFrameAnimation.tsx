"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";

interface ScrollFrameAnimationProps {
    /** Total number of frames in the sequence */
    frameCount: number;
    /** Directory path containing frames (relative to public/) */
    framePath: string;
    /** Frame file name pattern - use {index} for frame number placeholder */
    framePattern: string;
    /** Number of digits for frame index (e.g., 3 for 001, 002, etc.) */
    indexDigits?: number;
    /** Starting index for frames (default: 0) */
    startIndex?: number;
    /** Optional className for the container */
    className?: string;
    /** The target element to track scroll for. */
    targetRef: React.RefObject<HTMLElement | null>;
}

export function ScrollFrameAnimation({
    frameCount,
    framePath,
    framePattern,
    indexDigits = 3,
    startIndex = 0,
    className,
    targetRef,
}: ScrollFrameAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    // Keep track of the current frame to draw in a ref to avoid re-render cycles during scroll
    const currentFrameRef = useRef(0);
    const isDrawingRef = useRef(false);

    // Generate frame URL for a given index
    const getFrameUrl = useCallback((index: number) => {
        const frameIndex = (startIndex + index).toString().padStart(indexDigits, "0");
        const fileName = framePattern.replace("{index}", frameIndex);
        return `${framePath}/${fileName}`;
    }, [framePath, framePattern, indexDigits, startIndex]);

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    // Function to draw a specific frame to the canvas
    const drawFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imagesRef.current[frameIndex];
        if (!img || !img.complete) {
            // If the specific frame isn't loaded, try drawing the nearest loaded frame
            // or just skip to avoid blank/flicker
            return;
        }

        if (isDrawingRef.current) return;
        isDrawingRef.current = true;

        requestAnimationFrame(() => {
            const { width, height } = canvas;
            const imgRatio = img.width / img.height;
            const canvasRatio = width / height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = height;
                drawWidth = img.width * (height / img.height);
                offsetX = (width - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = width;
                drawHeight = img.height * (width / img.width);
                offsetX = 0;
                offsetY = (height - drawHeight) / 2;
            }

            // Fill with white to avoid dark background showing through clearRect
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            isDrawingRef.current = false;
        });
    }, []);

    // Update frame based on scroll
    useMotionValueEvent(scrollYProgress, "change", (value) => {
        const newFrame = Math.min(Math.floor(value * frameCount), frameCount - 1);
        const clampedFrame = Math.max(0, newFrame);

        if (clampedFrame !== currentFrameRef.current) {
            currentFrameRef.current = clampedFrame;
            drawFrame(clampedFrame);
        }
    });

    // Preload images
    useEffect(() => {
        let loaded = 0;
        const total = frameCount;

        for (let i = 0; i < total; i++) {
            const img = new Image();
            img.src = getFrameUrl(i);
            img.onload = () => {
                loaded++;
                setLoadedCount(loaded);
                imagesRef.current[i] = img;

                // Draw the first frame immediately if it's the one that just loaded
                if (i === 0 && currentFrameRef.current === 0) {
                    drawFrame(0);
                }

                if (loaded >= total) {
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded >= total) {
                    setImagesLoaded(true);
                }
            };
        }
    }, [frameCount, getFrameUrl, drawFrame]);

    // Initial draw and resize logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const updateCanvasSize = () => {
            const container = containerRef.current;
            if (!container) return;

            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;

            // Force redraw after resize
            drawFrame(currentFrameRef.current);
        };

        const resizeObserver = new ResizeObserver(() => {
            updateCanvasSize();
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        updateCanvasSize();

        return () => resizeObserver.disconnect();
    }, [drawFrame]);

    return (
        <div ref={containerRef} className={`${className} relative`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ opacity: loadedCount > 0 ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
            />


        </div>
    );
}
