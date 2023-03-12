import { Stats } from "../components/index.ts";
import Layout from "../components/Layout.tsx";
import type { Stats as IStats } from "../components/StatsItem.tsx";

export interface Props {
  title: string;
  stats: IStats[];
}

export default function StatsSection({ title, stats = [] }: Props) {
  return (
    <div className="relative">
      <Layout className="px-3 sm:px-16 py-12 sm:py-24">
        <div className="flex flex-col">
          <h2 className="text-white text-3xl sm:text-[32px] leading-10 font-bold mb-10 text-center">
            {title}
          </h2>
          <div className="scroll-snap-x">
            <Stats listStats={stats} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
