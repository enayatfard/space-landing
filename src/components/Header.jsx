import { NavLink } from "@/components/NavLink";
import Logo from "@/images/logo.png";
import Image from "next/image";
export default function Headear() {
  return (
    <div className="w-full items-center flex justify-between">
      <div>
        <Image width={200} className="fill-white" src={Logo} />
      </div>
      <div className="space-x-10">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">galleries</NavLink>
        <NavLink href="/">history</NavLink>
        <NavLink href="/">starship</NavLink>
        <NavLink href="/">mission</NavLink>
        <NavLink href="/">about</NavLink>
      </div>
    </div>
  );
}
