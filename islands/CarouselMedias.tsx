import CarouselMediasGroup, {
  PAGE_SIZE,
  setSlidePage,
} from "../components/CarouselMediasGroup.tsx";

import { useSignal } from "@preact/signals";
import type { MediaItem } from "../components/CarouselMediaItem.tsx";
import SlidePickerControls from "../components/SlidePickerControls.tsx";

interface CarouselMedias {
  listMedias: MediaItem[];
}

export default function CarouselMedias({ listMedias }: CarouselMedias) {
  const selected = useSignal(0);

  return (
    <>
      <div class="flex justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0">
        <CarouselMediasGroup listMedias={listMedias} />
      </div>
      <div id="dots" class="justify-center py-6 hidden lg:flex">
        {Array.from({ length: Math.ceil(listMedias?.length / PAGE_SIZE) }).map(
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
