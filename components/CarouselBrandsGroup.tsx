import { signal } from "@preact/signals";
import CarouselBrandItem, { Brand } from "./CarouselBrandItem.tsx";

export const slidePage = signal(0);
export const PAGE_SIZE = 6;
export function setSlidePage(slide: number) {
  slidePage.value = slide;
}

export interface Props {
  brands: Brand[];
}

export default function CarouselBrandsGroup({ brands }: Props) {
  function isVisible(index: number, page: number) {
    if (page + PAGE_SIZE >= brands.length) {
      return (
        page - Math.abs(brands.length - (page + PAGE_SIZE)) <= index &&
        index < brands.length
      );
    }
    return page <= index && index < page + PAGE_SIZE;
  }

  return (
    <div class="flex gap-5 grid-cols-3">
      {brands.map((brand, index) => (
        <CarouselBrandItem
          class={isVisible(index, slidePage.value) ? "" : "lg:hidden"}
          {...brand}
        />
      ))}
    </div>
  );
}
