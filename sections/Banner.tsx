import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { InputEmail } from "../components/index.ts";

export interface Props {
  title: string;
  subtitle: string;
  imageBanner: LiveImage;
  imageOne: LiveImage;
  imageTwo: LiveImage;
  imageThree: LiveImage;
  imageFour: LiveImage;
}

export default function Banner({
  title,
  subtitle,
  imageBanner,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
}: Props) {
  return (
    <div className="pt-48 sm:pt-60 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:w-1/2 px-4 lg:pl-3 lg:pr-12">
            <h2 className="text-[24px] leading-[28px] lg:text-[40px] lg:leading-[48px] font-black mb-5 text-center lg:text-left">
              {title}
            </h2>
            <p className="mb-10 font-bold lg:font-medium lg:leading-[21px] text-[13px] leading-[16px] lg:text-base text-center lg:text-left">
              {subtitle}
            </p>
            <InputEmail />
          </div>
          <div className="flex justify-center items-center lg:w-1/2 relative mt-16 lg:mt-0">
            <Image
              src={imageOne}
              alt="frame"
              width={339}
              height={256}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 40vw, 20vw"
              class="absolute top-0 left-0 lg:-left-20 max-w-[165px] lg:max-w-none"
            />
            <Image
              src={imageTwo}
              alt="frame"
              width={258}
              height={182}
              loading="lazy"
              class="absolute top-0 right-0 lg:-right-20 max-w-[165px] lg:max-w-none"
            />
            <Image
              src={imageThree}
              alt="frame"
              width={254}
              height={195}
              decoding="async"
              class="absolute bottom-[15%] left-0 lg:-left-10 max-w-[165px] lg:max-w-none"
            />
            <Image
              src={imageFour}
              alt="frame"
              width={364}
              height={202}
              sizes="(max-width: 640px) 40vw, 20vw"
              class="absolute bottom-[15%] right-0 lg:-right-20 max-w-[165px] lg:max-w-none"
            />
            <Image
              src={imageBanner}
              alt="banner"
              loading="lazy"
              decoding="async"
              width={570}
              height={654}
              sizes="(max-width: 640px) 40vw, 20vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
