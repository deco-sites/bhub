import { signal } from "@preact/signals";
import CarouselMediaItem from "./CarouselMediaItem.tsx";

export const slidePage = signal(0);
export const PAGE_SIZE = 5;
export function setSlidePage(slide: number) {
  slidePage.value = slide;
}

export const time = [
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
  {
    imgSrc: "/logo-pegn.png",
    altText: "",
  },
];

function isVisible(index: number, page: number) {
  if (page + PAGE_SIZE >= time.length) {
    return (
      page - Math.abs(time.length - (page + PAGE_SIZE)) <= index &&
      index < time.length
    );
  }
  return page <= index && index < page + PAGE_SIZE;
}

export default function CarouselMediasGroup() {
  return (
    <div class="flex gap-5 sm:gap-10">
      {time.map((pessoa, index) => (
        <CarouselMediaItem
          class={isVisible(index, slidePage.value) ? "" : "lg:hidden"}
          {...pessoa}
        />
      ))}
    </div>
  );
}
