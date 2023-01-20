import { signal, useSignal } from "@preact/signals";
import { Testimony } from "../components/index.ts";
import SlidePickerControls from "../components/SlidePickerControls.tsx";
import type { Testimony as ITestimony } from "../components/Testimony.tsx";

export interface Testimonials {
  testimonials: ITestimony[];
}

export const slidePage = signal(0);
export const PAGE_SIZE = 1;
export function setSlidePage(slide: number) {
  slidePage.value = slide;
}

export default function Testimonials({ testimonials }: Testimonials) {
  const selected = useSignal(0);

  function isVisible(index: number, page: number) {
    if (page + PAGE_SIZE >= testimonials.length) {
      return (
        page - Math.abs(testimonials.length - (page + PAGE_SIZE)) <= index &&
        index < testimonials.length
      );
    }
    return page <= index && index < page + PAGE_SIZE;
  }

  return (
    <>
      <div class="lg:flex justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0">
        <div class="flex gap-5">
          {testimonials.map((item, index) => {
            const test = {
              ...item,
              class: isVisible(index, slidePage.value) ? "" : "lg:hidden",
            };
            return <Testimony {...test} />;
          })}
        </div>{" "}
      </div>
      <div id="dots" class="justify-center py-6 hidden lg:flex">
        {Array.from({ length: Math.ceil(testimonials.length / PAGE_SIZE) }).map(
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
