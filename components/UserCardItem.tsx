import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface UserCard {
  imgSrc: LiveImage;
  altText: string;
  name?: string;
  position?: string;
  linkedin?: string;
}

export default function UserCardItem({
  imgSrc,
  altText,
  name,
  position,
  linkedin,
}: UserCard) {
  return (
    <div
      class={`w-[245px] flex flex-col flex-shrink-0 justify-center items-center p-8 bg-smoke rounded-3xl border-1 border-white`}>
      <div className="w-28 h-28">
        <img
          src={imgSrc}
          alt={altText}
          width="112"
          height="112"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 40vw, 20vw"
          className="w-auto max-h-full"
        />
      </div>
      <p className="text-white text-lg font-bold my-5">{name}</p>
      <p className="text-primary text-sm font-normal">{position}</p>
      {linkedin && linkedin?.length > 0 && (
        <a href={linkedin} className="mt-9">
          <svg
            width="49"
            height="50"
            viewBox="0 0 49 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.2636 20.3764H18.9622V35.9586H14.2636V20.3764ZM16.6129 12.6709C18.1232 12.6709 19.2978 13.8695 19.2978 15.4106C19.2978 16.9517 18.1232 18.1504 16.6129 18.1504C15.1026 18.3216 13.928 16.9517 13.928 15.4106C13.928 13.8695 15.1026 12.6709 16.6129 12.6709Z"
              fill="#F9F9F9"
            />
            <path
              d="M21.9829 20.3765H26.5137V22.4313C27.185 21.2327 28.6952 19.8628 31.0445 19.8628C35.911 19.8628 36.75 23.1162 36.75 27.2258V35.7874H32.0514V28.2532C32.0514 26.3696 32.0514 24.1436 29.5343 24.1436C27.0172 24.1436 26.6815 26.0272 26.6815 28.082V35.9587H21.9829V20.3765Z"
              fill="#F9F9F9"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
