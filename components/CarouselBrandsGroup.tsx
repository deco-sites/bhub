import { signal } from "@preact/signals";
import CarouselBrandItem from "./CarouselBrandItem.tsx";

export const slidePage = signal(0);
export const PAGE_SIZE = 6;
export function setSlidePage(slide: number) {
  slidePage.value = slide;
}

export const time = [
  {
    imgSrc: "/inventa-logo.png",
    altText: "",
  },
  {
    imgSrc: "/2w.png",
    altText: "",
  },
  {
    imgSrc: "/civi.png",
    altText: "",
  },
  {
    imgSrc: "/guru.png",
    altText: "",
  },
  {
    imgSrc: "/kovi.png",
    altText: "",
  },
  {
    imgSrc: "/pippo.svg",
    altText: "",
  },
  {
    imgSrc: "/inventa-logo.png",
    altText: "",
  },
  {
    imgSrc: "/inventa-logo.png",
    altText: "",
  },
  {
    imgSrc: "/inventa-logo.png",
    altText: "",
  },
  {
    imgSrc: "/inventa-logo.png",
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

export default function CarouselBrandsGroup() {
  return (
    <div class="flex gap-5 grid-cols-3">
      {time.map((pessoa, index) => (
        <CarouselBrandItem
          class={isVisible(index, slidePage.value) ? "" : "lg:hidden"}
          {...pessoa}
        />
      ))}
    </div>
  );
}
