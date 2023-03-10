import { Plans } from "../components/index.ts";
import type { Plan } from "../components/PlanItem.tsx";

export interface Props {
  title?: string;
  description?: string;
  listPlans?: Plan[];
  observation?: string;
}

export default function PlansSection({
  title,
  description,
  listPlans,
  observation,
}: Props) {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-3 sm:px-2 py-12 sm:py-14 text-center">
        <h2 className="text-3xl text-center font-bold mb-10 text-white">
          {title}
        </h2>
        <p className="lg:w-3/4 mx-auto text-2xl mb-20 text-white">
          {description}
        </p>

        {listPlans && (
          <div className="scroll-snap-x">
            <Plans listPlans={listPlans} />
          </div>
        )}
        <p className="lg:w-3/5 mx-auto font-medium mb-10 mt-20">
          {observation}
        </p>
      </div>
    </div>
  );
}
