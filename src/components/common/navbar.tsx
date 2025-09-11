import { EVENT_TITLE, NAVIGATION_HEADERS } from "@/lib/constants";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import Link from "next/link";

function QiskitLogo() {
  return <>{" ⚛ "}</>;
}

export default function NavigationBar() {
  
  return (
    <Navbar>
      <NavbarBrand>
        <QiskitLogo />
        <p className="font-bold text-inherit">{EVENT_TITLE}</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        {NAVIGATION_HEADERS.map((header, idx) => (
          <NavbarItem key={idx} className="hidden lg:flex">
            <Link href={header.link ?? "#" + header.title}>{header.title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
