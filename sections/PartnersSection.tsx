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
        <h2 className="text-3xl text-white font-bold text-center mb-12 mt-24">
          Manifesto BHub
        </h2>
      </div>
      <Layout>
        <iframe
          class="w-full aspect-16/10 rounded-[20px] bg-red-800"
          src="https://www.youtube.com/embed/R27cIN1TUPA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen></iframe>
      </Layout>
    </section>
  );
}
