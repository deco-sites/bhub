import { TopBar } from "../components/index.ts";
import Navbar from "../islands/Navbar.tsx";

export default function Header() {
  return (
    <div className="fixed w-full z-[9999]">
      <TopBar />
      <Navbar />
    </div>
  );
}
