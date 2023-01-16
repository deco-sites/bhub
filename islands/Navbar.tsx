import { useState } from "preact/hooks";
import { Logo } from "../components/index.ts";
import { menu } from "../data/menu.ts";
import NavBarItem from "../islands/NavBarItem.tsx";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div class="h-0 lg:h-auto lg:relative bg-white shadow-lg">
        <div class="mx-auto max-w-6xl px-3 lg:px-2 shadow-lg lg:shadow-none">
          <div class="flex items-center justify-between py-3 lg:py-5">
            <div class="flex justify-start">
              <a href="#" className="w-[120px]">
                <Logo />
              </a>
            </div>
            <div class="-my-2 -mr-2 md:hidden">
              {!openMenu ? (
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                  onClick={() => setOpenMenu(!openMenu)}>
                  <span class="sr-only">Open menu</span>

                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpenMenu(!openMenu)}>
                  <span class="sr-only">Close menu</span>

                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            <nav class="hidden md:flex flex-1 gap-x-6 justify-end">
              {menu.map((itemMenu) => (
                <NavBarItem {...itemMenu} />
              ))}
            </nav>
            <div class="hidden items-center justify-end md:flex">
              <a
                href="#"
                class="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border border-transparent bg-primary px-3 py-2 text-base font-bold text-white shadow-sm hover:bg-indigo-700">
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <div
          class={`${
            openMenu ? "left-0 transition-all" : ""
          } h-screen relative md:hidden top-0 -left-full ease-out delay-150 duration-200 `}>
          <div class="bg-white shadow-lg h-screen ">
            <div class="px-5 pt-2 pb-6">
              <div class="flex flex-col space-y-8">
                {menu.map((itemMenu) => (
                  <NavBarItem {...itemMenu} />
                ))}
                <a
                  href="#"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border border-transparent bg-primary px-3 py-2 text-base font-bold text-white shadow-sm hover:bg-indigo-700">
                  Falar com especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
