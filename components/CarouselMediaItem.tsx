interface Props {
  imgSrc: string;
  altText: string;
  class: string;
}

export default function CarouselMediaItem({
  imgSrc,
  altText,
  class: className,
}: Props) {
  return (
    <div class={`max-w-[300px] relative flex-shrink-0 ${className}`}>
      <div className="w-[170px] h-[170px] sm:w-[286px] sm:h-[286px] flex justify-center items-center">
        <img
          src={imgSrc}
          alt={altText}
          width="300"
          height="300"
          className="w-auto max-h-full"
        />
      </div>
    </div>
  );
}
