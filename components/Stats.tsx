import { StatsItem } from "../components/index.ts";
import type { Stats } from "../components/StatsItem.tsx";

interface Props {
  listStats: Stats[];
}

export default function Stats({ listStats }: Props) {
  return (
    <div class="justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0">
      <div className="flex lg:grid sm:grid-cols-2 gap-10">
        {listStats?.map((stats) => (
          <StatsItem {...stats} />
        ))}
      </div>
    </div>
  );
}
