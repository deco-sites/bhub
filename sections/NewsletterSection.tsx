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
    <div className="mx-auto max-w-7xl px-3 sm:px-2 py-12 sm:pb-8 sm:pt-16">
      <div className="flex flex-col relative shadow-3xl rounded-3xl p-3.5 sm:px-16 sm:py-10 mx-0 sm:mx-5">
        <img
          className="absolute top-0 right-0 hidden sm:block"
          src="calendar-news.jpg"
          alt=""
          width={255}
          height={163}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 40vw, 20vw"
        />
        <img
          className="absolute top-0 right-0 sm:hidden block rounded-t-3xl"
          src="calendar-news-mobile.png"
          alt=""
          width={99}
          height={90}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 40vw, 20vw"
        />
        <h2 className="text-black text-lg sm:text-[40px] sm:leading-10 font-bold tracking-tighter">
          {title}
        </h2>
        <h5 className="text-3xl sm:text-5xl tracking-tighter font-extrabold sm:font-black mb-12">
          {subtitle}
        </h5>
        <p className="text-lg sm:text-2xl font-medium tracking-tighter sm:mb-6 sm:w-2/3">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row mt-6">
          <label htmlFor="" className="text-base sm:text-xl mb-5">
            *Nome
            <input
              type="text"
              name=""
              id=""
              placeholder="João da Silva"
              className="block mt-2.5 mr-4 border rounded-lg border-gray-300 py-2 px-3"
            />
          </label>
          <label htmlFor="" className="text-base sm:text-xl mb-5">
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
          className="bg-[#ff5eb5] text-white font-bold sm:text-2xl max-w-[210px] rounded-lg p-3.5 mx-auto sm:m-0"
          onClick={() => {}}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
