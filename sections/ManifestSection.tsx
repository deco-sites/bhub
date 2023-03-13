import Layout from "../components/Layout.tsx";

export interface Props {
  title?: string;
  link?: string;
}

export default function ManifestSection({ title, link }: Props) {
  return (
    <section className="bg-black my-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl text-white font-bold text-center mb-12 mt-24">
          {title}
        </h2>
      </div>
      <Layout>
        <iframe
          class="w-full aspect-16/10 rounded-[20px] bg-red-800"
          src={link}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen></iframe>
      </Layout>
    </section>
  );
}
