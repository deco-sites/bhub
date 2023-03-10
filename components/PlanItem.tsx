export interface Plan {
  title: string;
  description: string;
  details: string[];
  price: string;
  btnLabel: string;
  btnLink: string;
  linkLabel: string;
  linkHref: string;
}

export default function PlanItem({
  title,
  description,
  details,
  price,
  btnLabel,
  btnLink,
  linkLabel,
  linkHref,
}: Plan) {
  return (
    <div className="w-full flex flex-col justify-between items-center px-6 sm:px-8 py-7 rounded-3xl bg-smoke">
      <div>
        <h2 className="font-bold mb-2 text-2xl text-white">{title}</h2>
        <p className="text-base font-bold mb-6 text-white">{description}</p>
      </div>
      <p className="text-base font-bold mb-6 flex justify-center items-center text-primary">
        Mais detalhes
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          className="ml-2">
          <path
            d="M0.790527 1.19038L8.33319 8.96875L15.8759 1.19038L14.9332 0.21825L8.33319 7.0245L1.73319 0.21825L0.790527 1.19038Z"
            fill="#3763ff"
          />
        </svg>
      </p>
      <ul className="hidden">
        {details.map((detail) => (
          <li>{detail}</li>
        ))}
      </ul>
      <p className="font-bold">*A partir de</p>
      <h4 className="font-bold text-primary text-[40px]">{price}</h4>
      <div className="flex flex-col items-center">
        <a
          href={btnLink}
          className="bg-primary text-white font-bold text-lg py-2 px-6 rounded-lg mb-2.5">
          {btnLabel}
        </a>
        <a
          href={linkHref}
          className="text-base text-primary font-bold underline">
          {linkLabel}
        </a>
      </div>
    </div>
  );
}
