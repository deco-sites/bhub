import CarouselBrandsGroup, {
  PAGE_SIZE,
  setSlidePage,
} from "../components/CarouselBrandsGroup.tsx";

import { useSignal } from "@preact/signals";
import { Brand } from "../components/CarouselBrandItem.tsx";
import SlidePickerControls from "../components/SlidePickerControls.tsx";

export interface Props {
  brands: Brand[];
}

export default function CarouselBrands({ brands }: Props) {
  const selected = useSignal(0);

  return (
    <>
      <div class="flex justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0">
        <CarouselBrandsGroup brands={brands} />
      </div>
      <div id="dots" class="justify-center py-6 hidden lg:flex">
        {Array.from({ length: Math.ceil(brands.length / PAGE_SIZE) }).map(
          (_, index) => (
            <>
              <SlidePickerControls
                selected={selected.value === index}
                onClick={() => {
                  setSlidePage(index * PAGE_SIZE);
                  selected.value = index;
                }}
              />
            </>
          )
        )}
      </div>
    </>
  );
}
