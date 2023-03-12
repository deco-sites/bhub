import Layout from "../components/Layout.tsx";

export interface Props {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
}

export default function StatsSection({
  title,
  subtitle,
  description,
  buttonLabel,
}: Props) {
  return (
    <Layout className="px-3 sm:px-2 py-12 sm:pb-8 sm:pt-16">
      <div className="flex flex-col relative bg-smoke border-1 border-white rounded-3xl p-3.5 sm:px-16 sm:py-10 mx-0 sm:mx-5">
        <h2 className="text-lg sm:text-[40px] sm:leading-10 font-bold tracking-tighter text-white">
          {title}
        </h2>
        <h5 className="text-3xl sm:text-5xl tracking-tighter font-extrabold sm:font-black mb-12 text-white">
          {subtitle}
        </h5>
        <p className="text-lg sm:text-2xl font-medium tracking-tighter sm:mb-6 sm:w-2/3 text-white">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row mt-6">
          <label htmlFor="" className="text-base sm:text-xl mb-5 text-white">
            *Nome
            <input
              type="text"
              name=""
              id=""
              placeholder="João da Silva"
              className="block mt-2.5 mr-4 border rounded-lg border-gray-300 py-2 px-3"
            />
          </label>
          <label htmlFor="" className="text-base sm:text-xl mb-5 text-white">
            *E-mail
            <input
              type="email"
              name=""
              id=""
              placeholder="joaodasilva@gmail.com"
              className="block mt-2.5 border rounded-lg border-gray-300 py-2 px-3"
            />
          </label>
        </div>
        <button
          className="bg-primary text-white font-bold sm:text-2xl max-w-[210px] rounded-lg p-3.5 mx-auto sm:m-0"
          onClick={() => {}}>
          {buttonLabel}
        </button>
      </div>
    </Layout>
  );
}
