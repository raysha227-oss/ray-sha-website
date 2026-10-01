import { galleries, galleryBySource } from "@/content/galleries";
import { PhotoSlider } from "./photo-slider";

type EditorialFigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  className?: string;
  priority?: boolean;
};

export function EditorialFigure({
  src,
  alt,
  width,
  height,
  caption,
  className = "",
  priority = false,
}: EditorialFigureProps) {
  const galleryKey = galleryBySource[src];
  const photos = galleryKey
    ? [...galleries[galleryKey]].sort(
        (a, b) => Number(b.src === src) - Number(a.src === src),
      )
    : [];
  if (galleryKey)
    return (
      <div className={`editorial-figure editorial-gallery ${className}`.trim()}>
        <PhotoSlider photos={photos} label={caption} />
      </div>
    );
  return (
    <figure className={`editorial-figure ${className}`.trim()}>
      <div className="figure-frame">
        {/* Local, metadata-stripped assets keep this component server-rendered in Vinext. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
