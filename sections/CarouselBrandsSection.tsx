import type { Brand } from "../components/CarouselBrandItem.tsx";
import CarouselBrands from "../islands/CarouselBrands.tsx";

export interface Props {
  title: string;
  subtitle: string;
  brands: Brand[];
}

export default function CarouselBrandsSection({
  title,
  subtitle,
  brands,
}: Props) {
  return (
    <div className="pt-8 pb-16 px-0 w-11/12 mx-auto text-center">
      <h2 className="text-[32px] mb-5 font-bold text-white">{title}</h2>
      <p className="text-lg font-medium mb-6 text-white">{subtitle}</p>
      <div class="w-full scroll-snap-x mt-20">
        <CarouselBrands brands={brands} />
      </div>
    </div>
  );
}
