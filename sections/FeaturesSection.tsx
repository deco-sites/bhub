import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { InputEmail } from "../components/index.ts";
import Layout from "../components/Layout.tsx";

export interface Props {
  title: string;
  features: string[];
  image: LiveImage;
}

export default function FeaturesSection({
  title,
  features = [],
  image,
}: Props) {
  return (
    <div className="relative">
      <Layout className="px-3 sm:px-2 py-12 sm:py-24">
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col justify-start lg:pr-20">
            <h2 className="text-white text-[32px] leading-10 font-bold mb-10">
              {title}
            </h2>
            <ul>
              {features.map((feature) => (
                <li className="text-lg mb-6 max-w-[390px]">
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      className="h-10 w-10">
                      <path
                        d="M8.49994 17.3332L0.957275 9.79055L3.78528 6.96255L8.49994 11.6759L19.8133 0.362549L22.6426 3.19055L8.49994 17.3332ZM3.78528 8.84788L2.84261 9.79055L8.49994 15.4479L20.7559 3.19055L19.8133 2.24788L8.49994 13.5625L3.78528 8.84788Z"
                        fill="#FF5EB5"
                      />
                    </svg>
                    <span className="font-medium ml-3 leading-6 text-white">
                      {feature}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <div>
              <InputEmail />
            </div>
          </div>
          <div className="flex">
            <figure className="sm:absolute right-0 top-24 w-full sm:max-w-[50%] md:w-auto">
              <Image
                src={image}
                alt="features"
                loading="lazy"
                decoding="async"
                width={782}
                height={634}
                sizes="(max-width: 640px) 40vw, 20vw"
              />
            </figure>
          </div>
        </div>
      </Layout>
    </div>
  );
}
