import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Problem {
  src?: LiveImage;
  alt?: string;
  href?: string;
  title?: string;
  description?: string;
}

export default function ProblemItem({ alt, src, title, description }: Problem) {
  return (
    <div class={`w-full relative bg-white rounded-3xl flex-shrink-0`}>
      <Image
        src={src || "/image-clock.jpg"}
        alt={alt}
        width={456}
        height={123}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 40vw, 20vw"
        class="h-32 w-full rounded-t-3xl"
      />
      <div className="min-h-[230px] py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {title ||
            "Sua empresa cresceu rápido e sua contabilidade não acompanha?"}
        </h2>
        <p className="text-base leading-5 font-medium">
          {description ||
            "Unimos pessoas e tecnologia para oferecer um atendimento ágil, de qualidade e totalmente diferente de contabilidades tradicionais."}
        </p>
      </div>
    </div>
  );
}
