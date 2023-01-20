import CarouselBrandsGroup, {
  PAGE_SIZE,
  setSlidePage,
  time,
} from "../components/CarouselBrandsGroup.tsx";

import { useSignal } from "@preact/signals";
import SlidePickerControls from "../components/SlidePickerControls.tsx";

export default function CarouselBrands() {
  const selected = useSignal(0);

  return (
    <>
      <div class="flex justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0">
        <CarouselBrandsGroup />
      </div>
      <div id="dots" class="justify-center py-6 hidden lg:flex">
        {Array.from({ length: Math.ceil(time.length / PAGE_SIZE) }).map(
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
