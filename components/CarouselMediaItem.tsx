import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface MediaItem {
  imgSrc: LiveImage;
  altText: string;
  link: string;
  class?: string;
}

export default function CarouselMediaItem({
  imgSrc,
  altText,
  link,
  class: className,
}: MediaItem) {
  return (
    <div class={`max-w-[300px] relative flex-shrink-0 ${className}`}>
      <a href={link}>
        <div className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] 2xl:w-[286px] 2xl:h-[286px] flex justify-center items-center">
          <Image
            src={imgSrc}
            alt={altText}
            width={300}
            height={300}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 40vw, 20vw"
            class="w-auto max-h-full"
          />
        </div>
      </a>
    </div>
  );
}
