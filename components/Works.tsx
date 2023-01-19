import { WorkItem } from "../components/index.ts";
import type { Work } from "../components/WorkItem.tsx";

interface Works {
  listWorks?: Work[];
}

export default function Problems({ listWorks }: Works) {
  return (
    <div class="lg:flex justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0">
      <div class="flex lg:grid sm:grid-cols-3 gap-x-10 gap-y-8">
        {listWorks?.map((work) => (
          <WorkItem {...work} />
        ))}
      </div>
    </div>
  );
}
