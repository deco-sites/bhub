import { SolutionFeatured, Solutions } from "../components/index.ts";
import type { ISolutionFeatured } from "../components/SolutionFeatured.tsx";
import type { Solution } from "../components/Solutions.tsx";

export interface Props {
  title?: string;
  solutionFeatured: ISolutionFeatured;
  listSolutions?: Solution[];
}

export default function SolutionsSection({
  title: titleSolution,
  solutionFeatured,
  listSolutions,
}: Props) {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-6xl px-3 sm:px-2 py-12 sm:py-14 bg-primary">
        <h2 className="text-white text-3xl text-center font-bold mb-10">
          {titleSolution}
        </h2>
        <SolutionFeatured {...solutionFeatured} />
        {listSolutions && (
          <div className="scroll-snap-x">
            <Solutions listSolutions={listSolutions} />
          </div>
        )}
      </div>
    </div>
  );
}
