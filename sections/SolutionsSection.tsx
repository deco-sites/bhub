import { SolutionFeatured, Solutions } from "../components/index.ts";
import Layout from "../components/Layout.tsx";
import type { ISolutionFeatured } from "../components/SolutionFeatured.tsx";
import type { Solution } from "../components/SolutionItem.tsx";

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
    <div className="bg-black">
      <Layout className="px-3 sm:px-2 py-12 sm:py-14">
        <h2 className="text-white text-3xl text-center font-bold mb-10">
          {titleSolution}
        </h2>
        <SolutionFeatured {...solutionFeatured} />
        {listSolutions && (
          <div className="scroll-snap-x">
            <Solutions listSolutions={listSolutions} />
          </div>
        )}
      </Layout>
    </div>
  );
}
