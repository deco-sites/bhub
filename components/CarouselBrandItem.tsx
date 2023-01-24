import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Brand {
  imgSrc: LiveImage;
  altText: string;
  class?: string;
}

export default function CarouselBrandItem({
  imgSrc,
  altText,
  class: className,
}: Brand) {
  return (
    <div class={`max-w-[300px] relative flex-shrink-0 ${className}`}>
      <div className="w-[200px] h-[40px] flex justify-center items-center">
        <img
          src={imgSrc}
          alt={altText}
          width="200"
          height="35"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 40vw, 20vw"
          className="w-auto max-h-full"
        />
      </div>
    </div>
  );
}
