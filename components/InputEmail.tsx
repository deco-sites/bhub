export default function InputEmail() {
  return (
    <>
      <input
        type="text"
        placeholder="Seu e-mail profissional"
        className="h-9 px-3 rounded-lg border-1 border-gray-500 self-start mb-5 w-full lg:w-3/4 bg-black"
      />
      <a
        href="#"
        class="self-start inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border border-transparent bg-primary px-3 py-2 text-base font-bold text-white shadow-sm w-full lg:w-auto mb-3">
        Falar com especialista
      </a>
    </>
  );
}
