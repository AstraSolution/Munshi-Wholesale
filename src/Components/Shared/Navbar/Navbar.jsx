import TopNav from "./TopNav";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <TopNav />
      <NavItems />
    </div>
  );
}
