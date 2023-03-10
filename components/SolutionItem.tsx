export interface Solution {
  title: string;
  description: string;
  btnLabel: string;
  btnLink: string;
  linkLabel: string;
  linkHref: string;
}

export default function SolutionItem({
  title,
  description,
  btnLabel,
  btnLink,
  linkLabel,
  linkHref,
}: Solution) {
  return (
    <div className="min-w-[90%] sm:w-full flex flex-col justify-between items-center px-6 sm:px-8 py-7 rounded-3xl bg-smoke">
      <div>
        <h2 className="text-5xl font-bold mb-4 text-[32px] text-white">
          {title}
        </h2>
        <p className="text-sm font-normal mb-6 text-white">{description}</p>
      </div>
      <div className="flex flex-col items-center">
        <a
          href={btnLink}
          className="bg-primary text-white font-bold text-lg py-2 px-6 rounded-lg mb-2.5">
          {btnLabel}
        </a>
        <a href={linkHref} className="text-base text-white font-bold underline">
          {linkLabel}
        </a>
      </div>
    </div>
  );
}
