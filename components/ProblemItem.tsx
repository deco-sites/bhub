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
    <div
      class={`w-full relative bg-smoke rounded-3xl flex-shrink-0 border-1 border-white flex items-center`}>
      <div className="min-h-[230px] p-8 lg:py-24 lg:px-20 text-center">
        <h2 className="text-2xl font-bold mb-5 text-white">
          {title ||
            "Sua empresa cresceu rápido e sua contabilidade não acompanha?"}
        </h2>
        <p className="text-sm leading-5 font-normal text-white">
          {description ||
            "Unimos pessoas e tecnologia para oferecer um atendimento ágil, de qualidade e totalmente diferente de contabilidades tradicionais."}
        </p>
      </div>
    </div>
  );
}
