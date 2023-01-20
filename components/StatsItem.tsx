export interface Stats {
  value: string;
  text: string;
}

export default function StatsItem({ value, text }: Stats) {
  return (
    <div class="w-full relative bg-white rounded-3xl flex-shrink-0 shadow-3xl">
      <div class="py-8 px-4 text-center">
        <h2 class="text-[60px] font-bold text-primary">{value}</h2>
        <p class="text-2xl leading-5 font-bold">{text}</p>
      </div>
    </div>
  );
}
