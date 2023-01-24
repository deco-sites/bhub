import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Work {
  image?: LiveImage;
  description?: string;
}

export default function WorkItem({ image, description }: Work) {
  return (
    <div
      class={`w-full relative bg-white rounded-3xl flex-shrink-0 mt-10 rounded-3xl shadow-lg flex flex-col justify-items-center items-center`}>
      <Image
        src={image!}
        alt=""
        width={70}
        height={70}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 40vw, 20vw"
        className="h-[70px] w-[70px]"
      />
      <p className="text-base leading-5 font-bold py-8 px-5">{description}</p>
    </div>
  );
}
