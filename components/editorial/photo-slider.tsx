"use client";

import { useRef, useState } from "react";

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
}: {
  photos: readonly GalleryPhoto[];
  label: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const next = Math.max(0, Math.min(photos.length - 1, current + direction));
    element.scrollTo({
      left: next * element.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <div
      className="photo-slider"
      role="region"
      aria-label={`${label} photos`}
      aria-roledescription="carousel"
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
    </div>
  );
}
