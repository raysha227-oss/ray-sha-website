import { TagList } from "./tag-list";
import { PhotoSlider, type GalleryPhoto } from "./photo-slider";

export type MosaicEntrySize = "small" | "standard" | "wide" | "tall";

type MosaicImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  focalPosition?: string;
};

type MosaicEntryProps = {
  title: string;
  label: string;
  summary: string;
  tags: readonly string[];
  size?: MosaicEntrySize;
  image?: MosaicImage;
  photos?: readonly GalleryPhoto[];
  status?: string;
  recognition?: string;
  id?: string;
};

export function MosaicEntry({
  title,
  label,
  summary,
  tags,
  size = "standard",
  image,
  photos,
  status,
  recognition,
  id,
}: MosaicEntryProps) {
  return (
    <article
      id={id}
      className={`mosaic-entry mosaic-entry-${size}${image || photos?.length ? " has-image" : ""}`}
    >
      {photos?.length ? (
        <PhotoSlider photos={photos} label={label} />
      ) : image ? (
        <figure className="mosaic-figure">
          <div className="mosaic-image-frame">
            {/* Local, metadata-stripped assets keep this component server-rendered in Vinext. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: image.focalPosition ?? "50% 50%" }}
            />
          </div>
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ) : null}
      <div className="mosaic-entry-copy">
        <div className="mosaic-entry-meta">
          <p>{label}</p>
          {status ? <span>{status}</span> : null}
        </div>
        <h2>{title}</h2>
        <p className="mosaic-summary">{summary}</p>
        {recognition ? (
          <p className="mosaic-recognition">{recognition}</p>
        ) : null}
        <TagList tags={tags} />
      </div>
    </article>
  );
}
