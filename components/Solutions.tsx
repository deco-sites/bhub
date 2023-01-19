import SolutionItem from "../components/SolutionItem.tsx";

export interface Solution {
  title: string;
  description: string;
  btnLabel: string;
  btnLink: string;
  linkLabel: string;
  linkHref: string;
}

interface Solutions {
  listSolutions: Solution[];
}

export default function Solutions({ listSolutions }: Solutions) {
  return (
    <div class="lg:flex justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0">
      <div class="flex sm:grid sm:grid-cols-3 gap-x-4 sm:gap-x-10 gap-y-8">
        {listSolutions?.map((solution) => (
          <SolutionItem {...solution} />
        ))}
      </div>
    </div>
  );
}
