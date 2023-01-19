import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface ISolutionFeatured {
  image?: LiveImage;
  alt?: string;
  title: string;
  description: string;
  btnLabel: string;
  btnLink: string;
  linkLabel: string;
  linkHref: string;
}

export default function SolutionFeatured({
  image,
  alt,
  title,
  description,
  btnLabel,
  btnLink,
  linkLabel,
  linkHref,
}: ISolutionFeatured) {
  return (
    <div className="w-full grid sm:grid-cols-2 rounded-3xl bg-white mb-10">
      <figure className="h-full w-full flex-shrink">
        <img
          src={image}
          alt={alt}
          className="h-full rounded-3xl sm:rounded-l-3xl object-cover"
        />
      </figure>
      <div className="px-6 sm:px-8 py-7 flex flex-col">
        <h2 className="text-[32px] sm:text-5xl font-bold mb-2">{title}</h2>
        <p className="text-base font-medium mb-6">{description}</p>
        <a
          href={btnLink}
          className="bg-primary text-white font-bold text-lg py-2 px-6 rounded-lg mb-2.5 max-w-sm text-center">
          {btnLabel}
        </a>
        <a
          href={linkHref}
          className="text-base text-primary font-bold underline">
          {linkLabel}
        </a>
      </div>
    </div>
  );
}
