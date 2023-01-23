import { signal } from "@preact/signals";
import type { MediaItem } from "../components/CarouselMediaItem.tsx";
import CarouselMediaItem from "./CarouselMediaItem.tsx";

export const slidePage = signal(0);
export const PAGE_SIZE = 5;
export function setSlidePage(slide: number) {
  slidePage.value = slide;
}

interface CarouselMedias {
  listMedias: MediaItem[];
}

export default function CarouselMediasGroup({ listMedias }: CarouselMedias) {
  function isVisible(index: number, page: number) {
    if (page + PAGE_SIZE >= listMedias.length) {
      return (
        page - Math.abs(listMedias.length - (page + PAGE_SIZE)) <= index &&
        index < listMedias.length
      );
    }
    return page <= index && index < page + PAGE_SIZE;
  }

  return (
    <div class="flex gap-5 sm:gap-10">
      {listMedias?.map((item, index) => {
        const newItem = {
          ...item,
          class: isVisible(index, slidePage.value) ? "" : "lg:hidden",
        };

        return <CarouselMediaItem {...newItem} />;
      })}
    </div>
  );
}
