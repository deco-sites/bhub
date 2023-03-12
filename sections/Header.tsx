import Navbar from "../islands/Navbar.tsx";
import TopBar from "../islands/TopBar.tsx";

export default function Header() {
  return (
    <div className="fixed w-full z-[9999]">
      <TopBar />
      <Navbar />
    </div>
  );
}
