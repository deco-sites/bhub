import { Problems } from "../components/index.ts";
import type { Problem } from "../components/ProblemItem.tsx";

export interface Props {
  title?: string;
  listProblems?: Problem[];
}

export default function ProblemSection({
  title,
  listProblems = [{}, {}, {}, {}],
}: Props) {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-6xl px-3 lg:px-2 py-12 lg:py-24 bg-primary">
        <h2 className="text-white text-3xl text-center font-bold mb-10">
          {title} Você com certeza já passou por algum desses problemas
        </h2>
        <div className="scroll-snap-x">
          <Problems listProblems={listProblems} />
        </div>
      </div>
    </div>
  );
}
