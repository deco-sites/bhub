import { Logo } from "../components/index.ts";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-3 sm:px-2 py-12 sm:py-24">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="flex flex-col w-full md:w-1/4 pl-3 pr-12">
            <div className="mb-9 mx-auto md:mx-0">
              <Logo />
            </div>
            <p className="mb-5 font-medium text-white">
              Você foca no seu negócio, a gente cuida do resto.
            </p>
            <p className="font-medium">(11) 93945-3065</p>
            <p className="mb-5 font-medium text-white">
              Suporte: meajuda@bhub.ai
            </p>
          </div>
          <div className="flex flex-col flex-1 px-3">
            <ul className="flex flex-col md:flex-row mb-4 font-medium justify-center md:justify-start">
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                Sobre Nós
              </li>
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                Como funciona
              </li>
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                Carreira
              </li>
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                Planos e Preços
              </li>
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                Blog
              </li>
            </ul>
            <ul className="flex flex-col md:flex-row mb-4 font-medium justify-center md:justify-start">
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                FAQ
              </li>
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                Fale com a gente
              </li>
            </ul>
            <a
              href=""
              className="flex mb-4 font-medium justify-center md:justify-start text-white">
              Política de Privacidade e Proteção de Dados Pessoais
            </a>
            <ul className="flex flex-col md:flex-row mb-4 font-medium justify-center md:justify-start">
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                Termos e condições de uso | BHub
              </li>
              <li className="mr-2 hover:cursor-pointer hover:underline text-white">
                Política de Cookies | BHub
              </li>
            </ul>
          </div>

          <div className="flex">
            <div>
              <img
                src="./selo-forbes.png"
                alt=""
                height={108}
                width={95}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 40vw, 20vw"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/5 px-3">
            <div>
              <p className="text-white">Siga a BHub nas Redes Sociais</p>
              <ul className="flex justify-center md:justify-start">
                <li className="mr-4 mt-5 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none">
                    <path
                      d="M34.0001 0.666992H4.00008C2.15841 0.666992 0.666748 2.15866 0.666748 4.00032V34.0003C0.666748 35.842 2.15841 37.3337 4.00008 37.3337H20.6667V22.3337H15.6667V17.3337H20.6667V14.6487C20.6667 9.56532 23.1434 7.33366 27.3684 7.33366C29.3917 7.33366 30.4617 7.48366 30.9684 7.55199V12.3337H28.0867C26.2934 12.3337 25.6667 13.2803 25.6667 15.197V17.3337H30.9234L30.2101 22.3337H25.6667V37.3337H34.0001C35.8417 37.3337 37.3334 35.842 37.3334 34.0003V4.00032C37.3334 2.15866 35.8401 0.666992 34.0001 0.666992Z"
                      className="fill-current"
                    />
                  </svg>
                </li>
                <li className="mr-4 mt-5 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none">
                    <path
                      d="M11.3304 0.599609C5.4133 0.599609 0.600098 5.41727 0.600098 11.3359V26.6693C0.600098 32.5864 5.41776 37.3996 11.3364 37.3996H26.6698C32.5869 37.3996 37.4001 32.5819 37.4001 26.6633V11.3299C37.4001 5.41281 32.5824 0.599609 26.6638 0.599609H11.3304ZM29.7334 6.73294C30.5798 6.73294 31.2668 7.41988 31.2668 8.26628C31.2668 9.11267 30.5798 9.79961 29.7334 9.79961C28.887 9.79961 28.2001 9.11267 28.2001 8.26628C28.2001 7.41988 28.887 6.73294 29.7334 6.73294ZM19.0001 9.79961C24.0739 9.79961 28.2001 13.9258 28.2001 18.9996C28.2001 24.0734 24.0739 28.1996 19.0001 28.1996C13.9263 28.1996 9.8001 24.0734 9.8001 18.9996C9.8001 13.9258 13.9263 9.79961 19.0001 9.79961ZM19.0001 12.8663C17.3734 12.8663 15.8134 13.5125 14.6632 14.6627C13.513 15.8129 12.8668 17.3729 12.8668 18.9996C12.8668 20.6263 13.513 22.1863 14.6632 23.3365C15.8134 24.4867 17.3734 25.1329 19.0001 25.1329C20.6268 25.1329 22.1868 24.4867 23.337 23.3365C24.4872 22.1863 25.1334 20.6263 25.1334 18.9996C25.1334 17.3729 24.4872 15.8129 23.337 14.6627C22.1868 13.5125 20.6268 12.8663 19.0001 12.8663Z"
                      className="fill-current"
                    />
                  </svg>
                </li>
                <li className="mr-4 mt-5 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none">
                    <path
                      d="M34.7998 0.799805H4.1998C2.3213 0.799805 0.799805 2.3213 0.799805 4.1998V34.7998C0.799805 36.6783 2.3213 38.1998 4.1998 38.1998H34.7998C36.6783 38.1998 38.1998 36.6783 38.1998 34.7998V4.1998C38.1998 2.3213 36.6783 0.799805 34.7998 0.799805ZM12.6216 31.3998H7.6066V15.2634H12.6216V31.3998ZM10.0631 12.9565C8.44641 12.9565 7.1391 11.6458 7.1391 10.0325C7.1391 8.4192 8.44811 7.1102 10.0631 7.1102C11.6747 7.1102 12.9854 8.4209 12.9854 10.0325C12.9854 11.6458 11.6747 12.9565 10.0631 12.9565ZM31.4066 31.3998H26.395V23.5526C26.395 21.6809 26.361 19.2737 23.7889 19.2737C21.1794 19.2737 20.7782 21.312 20.7782 23.4166V31.3998H15.7666V15.2634H20.5776V17.4683H20.6456C21.3154 16.2001 22.9508 14.8622 25.3903 14.8622C30.4682 14.8622 31.4066 18.2044 31.4066 22.5496V31.3998Z"
                      className="fill-current"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-11 text-center md:text-left">
          <p className="text-gray-500 font-medium text-sm mt-2">
            COPYRIGHT © 2021 | BHUB | TODOS OS DIREITOS RESERVADOS | RUA CARDEAL
            ARCOVERDE, 2365 – 3ºANDAR | SÃO PAULO – SP – CEP: 05407-003
          </p>
          <p className="text-gray-500 font-medium text-sm mt-2">
            *BHUB NÃO EXERCE ATIVIDADES PRIVATIVAS DE ADVOGADO E INDICA, PARA
            ESSE FIM E A CRITÉRIO DO CLIENTE, PROFISSIONAIS DEVIDAMENTE
            HABILITADOS.
          </p>
          <p className="text-gray-500 font-medium text-sm mt-2">
            VARGAS, MUGLIA E FERNANDES ADVOGADOS ASSOCIADOS CNPJ:
            44.350.396/0001-72
          </p>
          <p className="text-gray-500 font-medium text-sm mt-2">
            BHUB SERVICOS E TECNOLOGIA LTDA CNPJ: 42.330.545/0001-06
          </p>
        </div>
      </div>
    </footer>
  );
}
