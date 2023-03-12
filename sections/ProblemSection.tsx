import { Problems } from "../components/index.ts";
import Layout from "../components/Layout.tsx";
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
    <div className="bg-black">
      <Layout className="px-3 lg:px-16 py-12 lg:py-24">
        <h2 className="text-white text-3xl text-center font-bold mb-10">
          {title}
        </h2>
        <div className="scroll-snap-x">
          <Problems listProblems={listProblems} />
        </div>
      </Layout>
    </div>
  );
}
