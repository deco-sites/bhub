import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { InputEmail } from "../components/index.ts";
import Layout from "../components/Layout.tsx";

export interface Props {
  title: string;
  subtitle: string;
  imageBanner: LiveImage;
}

export default function Banner({ title, subtitle, imageBanner }: Props) {
  return (
    <div className="pt-48 sm:pt-32 pb-16">
      <Layout>
        <div className="flex flex-col md:flex-row justify-end relative">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:w-2/4 px-4 lg:pl-3 lg:pr-12 lg:absolute left-0 lg:top-48">
            <h2 className="text-[24px] leading-[28px] lg:text-[40px] lg:leading-[48px] font-black mb-5 text-center lg:text-left text-white">
              {title}
            </h2>
            <p className="mb-10 font-bold lg:font-medium lg:leading-7 text-[13px] leading-[16px] lg:text-[22px] text-center lg:text-left text-white">
              {subtitle}
            </p>
            <Image
              src={imageBanner}
              alt="banner"
              loading="lazy"
              decoding="async"
              width={1120}
              height={1092}
              className="lg:hidden"
              sizes="(max-width: 1120px) 40vw, 20vw"
            />

            <InputEmail />
          </div>
          <div className="-mr-[80px]">
            <Image
              src={imageBanner}
              alt="banner"
              loading="lazy"
              decoding="async"
              width={1120}
              height={1092}
              className="hidden lg:flex"
              sizes="(max-width: 1120px) 40vw, 20vw"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
