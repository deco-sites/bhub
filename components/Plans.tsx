import PlanItem, { Plan } from "../components/PlanItem.tsx";

interface Plans {
  listPlans: Plan[];
}

export default function Plans({ listPlans }: Plans) {
  return (
    <div class="lg:flex justify-center overflow-auto lg:overflow-visible py-5 lg:pb-0 mb-10">
      <div class="flex sm:grid sm:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-8">
        {listPlans?.map((plan) => (
          <PlanItem {...plan} />
        ))}
      </div>
    </div>
  );
}
