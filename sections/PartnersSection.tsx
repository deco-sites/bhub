import Layout from "../components/Layout.tsx";

export interface Props {
  itemsPerRow?: number;
}

export default function PartnersSection({ itemsPerRow = 3 }: Props) {
  return (
    <section className="bg-black my-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl text-white font-bold text-center mb-12">
          Parceiros
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <img
            className={`w-[45%] ${
              itemsPerRow === 3 ? "lg:w-[25%]" : "lg:w-[22%]"
            }`}
            src="/calendar-news.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
