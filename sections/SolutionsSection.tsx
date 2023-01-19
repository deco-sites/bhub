import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import FeaturedSolution from "../components/FeaturedSolution.tsx";
import Solutions from "../islands/Solutions.tsx";

export interface IFeaturedSolution {
  image?: LiveImage;
  alt?: string;
  title: string;
  description: string;
  btnLabel: string;
  btnLink: string;
  linkLabel: string;
  linkHref: string;
}

export interface Solution {
  title: string;
  description: string;
  btnLabel: string;
  btnLink: string;
  linkLabel: string;
  linkHref: string;
}

export interface Props {
  title?: string;
  featuredSolution: IFeaturedSolution;
  listSolutions?: Solution[];
}

export default function SolutionsSection({
  title: titleSolution,
  featuredSolution,
  listSolutions,
}: Props) {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-6xl px-3 sm:px-2 py-12 sm:py-14 bg-primary">
        <h2 className="text-white text-3xl text-center font-bold mb-10">
          {titleSolution}
        </h2>
        <FeaturedSolution {...featuredSolution} />
        {listSolutions && (
          <div className="scroll-snap-x">
            <Solutions listSolutions={listSolutions} />
          </div>
        )}
      </div>
    </div>
  );
}
