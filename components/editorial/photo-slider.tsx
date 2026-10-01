"use client";

import { useEffect, useRef, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  focalPosition?: string;
};

export function PhotoSlider({
  photos,
  label,
  variant = "slider",
}: {
  photos: readonly GalleryPhoto[];
  label: string;
  variant?: "slider" | "window";
}) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let previousWidth = element.clientWidth;
    const observer = new ResizeObserver(() => {
      const index = previousWidth
        ? Math.round(element.scrollLeft / previousWidth)
        : 0;
      previousWidth = element.clientWidth;
      element.scrollTo({
        left: index * element.clientWidth,
        behavior: "instant",
      });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  function select(index: number) {
    const element = track.current;
    if (!element) return;
    element.scrollTo({
      left: index * element.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const next = Math.max(
      0,
      Math.min(
        photos.length - 1,
        Math.round(element.scrollLeft / element.clientWidth) + direction,
      ),
    );
    element.scrollTo({
      left: next * element.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  if (variant === "window")
    return (
      <div
        className="photo-window"
        data-photo-count={Math.min(4, photos.length)}
        role="region"
        aria-label={`${label} photos`}
      >
        {photos.slice(0, 4).map((photo) => (
          <figure key={photo.src}>
            <a
              href={photo.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open photo: ${photo.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    );
  return (
    <div
      className="photo-slider"
      role="region"
      aria-label={`${label} photos`}
      aria-roledescription="carousel"
      data-photo-count={photos.length}
    >
      <div
        ref={track}
        className="photo-track"
        tabIndex={0}
        aria-label="Scroll or use the arrow buttons to browse photos"
        onScroll={() => {
          const element = track.current;
          if (element)
            setCurrent(Math.round(element.scrollLeft / element.clientWidth));
        }}
      >
        {photos.map((photo, index) => (
          <figure
            className="photo-slide"
            key={photo.src}
            role="group"
            aria-label={`${index + 1} of ${photos.length}`}
          >
            <div className="mosaic-image-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: photo.focalPosition ?? "50% 50%" }}
              />
            </div>
            {photo.caption && <figcaption>{photo.caption}</figcaption>}
          </figure>
        ))}
      </div>
      <div className="photo-controls">
        <span aria-live="polite" aria-atomic="true">
          {current + 1} / {photos.length}
        </span>
        <div>
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={current === 0}
            aria-label={`Previous ${label} photo`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={current === photos.length - 1}
            aria-label={`Next ${label} photo`}
          >
            →
          </button>
        </div>
      </div>
      <div className="photo-thumbnails" aria-label={`Choose a ${label} photo`}>
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => select(index)}
            aria-label={`Show ${label} photo ${index + 1}: ${photo.caption ?? photo.alt}`}
            aria-current={index === current ? "true" : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt=""
              width={photo.width}
              height={photo.height}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
