import CarouselMedias from "../islands/CarouselMedias.tsx";

export default function CarouselMediasSection() {
  return (
    <div className="bg-primary">
      <div className="mt-16 py-24 px-0 w-11/12 mx-auto text-center">
        <h2 className="text-[32px] mb-5 font-bold text-white">Saiu na Mídia</h2>
        <p className="text-2xl font-bold mb-6 text-white">
          Veja algumas matérias sobre a BHub.
        </p>
        <div class="w-full scroll-snap-x mt-20">
          <CarouselMedias />
        </div>
      </div>
    </div>
  );
}
