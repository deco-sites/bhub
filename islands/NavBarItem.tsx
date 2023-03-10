import { useState } from "preact/hooks";

interface Props {
  label: string;
  link?: string;
  items: {
    label: string;
    link: string;
  }[];
}

export default function NavBarItem({ label, link, items }: Props) {
  const [open, setOpen] = useState(false);

  const hasChild = !!items.length;

  return hasChild ? (
    <div class="relative cursor-pointer">
      <div
        type="button"
        class="text-white group inline-flex items-center rounded-md text-xs lg:text-base font-medium hover:text-primary focus:outline-none"
        aria-expanded="false"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
        <span>{label}</span>
        <svg
          class="text-white h-5 w-5 group-hover:text-gray-500 -rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full duration-500"></span>
      </div>

      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        class={`${
          open ? "" : "hidden"
        } absolute z-10 -ml-4 pt-3 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2`}>
        {items.map((item) => {
          return (
            <div class="overflow-hidden shadow-navbar border-b-1 border-darkGrey">
              <div class="relative grid gap-3 bg-black px-4 py-3">
                <a
                  href={item.link}
                  class="-m-3 flex items-start rounded-lg p-3">
                  <p class="text-base font-medium text-white leading-5">
                    {item.label}
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <span className="relative group">
      <a
        href={link}
        class="text-xs lg:text-base font-medium text-white hover:text-primary">
        {label}
      </a>
      <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full duration-500"></span>
    </span>
  );
}
