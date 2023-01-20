import { Stats } from "../components/index.ts";
import type { Stats as IStats } from "../components/StatsItem.tsx";

export interface Props {
  title: string;
  stats: IStats[];
}

export default function StatsSection({ title, stats = [] }: Props) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-3 sm:px-2 py-12 sm:py-24">
        <div className="flex flex-col">
          <h2 className="text-black text-3xl sm:text-[32px] leading-10 font-bold mb-10 text-center">
            {title}
          </h2>
          <div className="scroll-snap-x">
            <Stats listStats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
}
