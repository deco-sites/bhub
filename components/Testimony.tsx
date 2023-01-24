import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Testimony {
  imgSrc: LiveImage;
  altText: string;
  class: string;
  name: string;
  lastName: string;
  testimony: string;
  linkLabel: string;
}

export default function Testimony({
  imgSrc,
  altText,
  name,
  lastName,
  testimony,
  linkLabel,
  class: className,
}: Testimony) {
  return (
    <div
      class={`max-w-[335px] sm:max-w-max sm:w-full min-h-[366px] sm:min-h-[540px] flex flex-col sm:flex-row relative bg-primary rounded-[32px] p-5 sm:pt-16 sm:px-12 sm:pb-12 flex-shrink-0 ${className}`}>
      <div className="flex sm:flex-col sm:justify-center items-center sm:items-start mb-6 sm:mb-0">
        <figure className="w-[60px] h-[60px] sm:w-[270px] sm:h-[270px] rounded-full mr-4 sm:mr-8">
          <Image
            src={imgSrc}
            alt={altText}
            width={500}
            height={500}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 40vw, 20vw"
            className="w-full h-full block object-cover rounded-full"
          />
        </figure>
        <caption className="text-left sm:-mt-7">
          <strong className="text-lg sm:text-[26px] leading-6 sm:leading-8 text-white block">
            {name}
          </strong>
          <span className="text-lg sm:text-[26px] leading-6 sm:leading-8 text-white block">
            {lastName}
          </span>
        </caption>
      </div>
      <div className="text-left flex items-center">
        <div>
          <p className="text-white text-lg sm:text-4xl sm:leading-[45px] sm:font-bold leading-5">
            {testimony}
          </p>
          <a
            href="#"
            className="text-white text-lg font-medium pt-6 flex items-center">
            <span>{linkLabel} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              className="ml-2">
              <path
                d="M8.03998 6.79001L2.37998 1.14001C2.28702 1.04628 2.17642 0.971884 2.05456 0.921115C1.9327 0.870346 1.80199 0.844208 1.66998 0.844208C1.53797 0.844208 1.40726 0.870346 1.28541 0.921115C1.16355 0.971884 1.05294 1.04628 0.959982 1.14001C0.773731 1.32737 0.669189 1.58082 0.669189 1.84501C0.669189 2.10919 0.773731 2.36264 0.959982 2.55001L5.90998 7.55001L0.959982 12.5C0.773731 12.6874 0.669189 12.9408 0.669189 13.205C0.669189 13.4692 0.773731 13.7226 0.959982 13.91C1.0526 14.0045 1.16304 14.0797 1.28492 14.1312C1.40679 14.1827 1.53767 14.2095 1.66998 14.21C1.80229 14.2095 1.93317 14.1827 2.05505 14.1312C2.17692 14.0797 2.28737 14.0045 2.37998 13.91L8.03998 8.26001C8.14149 8.16636 8.2225 8.05271 8.2779 7.92621C8.33331 7.79971 8.36191 7.66311 8.36191 7.52501C8.36191 7.3869 8.33331 7.2503 8.2779 7.1238C8.2225 6.9973 8.14149 6.88365 8.03998 6.79001Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
