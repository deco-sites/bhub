export interface Stats {
  value: string;
  text: string;
}

export default function StatsItem({ value, text }: Stats) {
  return (
    <div class="w-full relative bg-smoke rounded-3xl flex-shrink-0 shadow-3xl border-1 border-white">
      <div class="py-12 px-4 text-center">
        <h2 class="text-[60px] font-bold text-primary">{value}</h2>
        <p class="text-2xl leading-5 font-bold text-white">{text}</p>
      </div>
    </div>
  );
}
