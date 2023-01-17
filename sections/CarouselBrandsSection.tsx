import CarouselBrands from "../islands/CarouselBrands.tsx";

export default function CarouselBrandsSection() {
  return (
    <div className="pt-8 pb-16 px-0 w-11/12 mx-auto text-center">
      <h2 className="text-[32px] mb-5 font-bold">
        As empresas mais inovadoras da América Latina já confiam na BHub
      </h2>
      <p className="text-lg font-medium mb-6">
        Mais de 400 empresas já confiam em nossas soluções
      </p>
      <div class="w-full scroll-snap-x mt-20">
        <CarouselBrands />
      </div>
    </div>
  );
}
