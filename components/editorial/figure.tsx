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
