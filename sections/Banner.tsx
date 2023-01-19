import { InputEmail } from "../components/index.ts";

export default function Banner() {
  return (
    <div className="pt-28 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:w-1/2 px-4 lg:pl-3 lg:pr-12">
            <h2 className="text-[24px] leading-[28px] lg:text-[40px] lg:leading-[48px] font-black mb-5 text-center lg:text-left">
              Serviços de BPO financeiro, contabilidade e paralegal para
              empresas em crescimento e startups
            </h2>
            <p className="mb-10 font-bold lg:font-medium lg:leading-[21px] text-[13px] leading-[16px] lg:text-base text-center lg:text-left">
              Tenha mais tempo e recurso para focar no crescimento da sua
              empresa, enquanto a BHub cuida do dia a dia do seu negócio
            </p>
            <InputEmail />
          </div>
          <div className="flex justify-center items-center lg:w-1/2 relative mt-16 lg:mt-0">
            <img
              src="/frame-1.png"
              alt=""
              className="absolute top-0 left-0 lg:-left-20 max-w-[165px] lg:max-w-none"
            />
            <img src="/banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
