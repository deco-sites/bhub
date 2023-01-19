import { ProblemItem } from "../components/index.ts";
import type { Problem } from "../components/ProblemItem.tsx";

interface Problems {
  listProblems: Problem[];
}

export default function Problems({ listProblems }: Problems) {
  return (
    <div class="lg:flex justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0">
      <div class="flex lg:grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {listProblems?.map((problem) => (
          <ProblemItem {...problem} />
        ))}
      </div>
    </div>
  );
}
