import Layout from "../components/Layout.tsx";
import type { Testimony } from "../components/Testimony.tsx";
import Testimonials from "../islands/Testimonials.tsx";

export interface Props {
  testimonials: Testimony[];
}

export default function TestimonialsSection({ testimonials }: Props) {
  return (
    <Layout className="px-3 lg:px-2 py-2 text-center">
      <div class="scroll-snap-x">
        <Testimonials testimonials={testimonials} />
      </div>
    </Layout>
  );
}
