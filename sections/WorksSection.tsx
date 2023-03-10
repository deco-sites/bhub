import { Works } from "../components/index.ts";
import Layout from "../components/Layout.tsx";
import type { Work } from "../components/WorkItem.tsx";

export interface Props {
  title?: string;
  subtitle?: string;
  listWorks?: Work[];
}

export default function WorksSection({
  title,
  subtitle,
  listWorks = [{}, {}, {}, {}],
}: Props) {
  return (
    <div className="bg-black">
      <Layout className="px-3 lg:px-2 py-12 lg:py-24 text-center">
        <h2 className="text-white text-3xl text-center font-bold mb-10 lg:w-3/4 mx-auto">
          {title}
        </h2>
        <p className="lg:w-3/4 mx-auto font-normal text-white">{subtitle}</p>
        <div className="scroll-snap-x">
          <Works listWorks={listWorks} />
        </div>
      </Layout>
    </div>
  );
}
