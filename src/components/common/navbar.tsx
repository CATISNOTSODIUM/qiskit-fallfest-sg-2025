"use client";
import { EVENT_TITLE, NAVIGATION_HEADERS } from "@/lib/constants";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Link from "next/link";
import { chevronDown } from "./icons";

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
        {NAVIGATION_HEADERS.map((header, idx) => {
          if (!header.subheader || header.subheader.length === 0) {
            return (
              <NavbarItem key={idx} className="hidden lg:flex mx-3">
                <Link href={header.link ?? "#" + header.title}>
                  {header.title}
                </Link>
              </NavbarItem>
            );
          } else {
            return (
              <Dropdown key={idx} className="bg-inherit mx-3">
                <NavbarItem className="hidden lg:flex">
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="bg-inherit text-inherit text-base"
                      endContent={chevronDown}
                      radius="sm"
                    >
                      <Link href={header.link ?? "#" + header.title}>
                        {header.title}
                      </Link>
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                    aria-label={header.title}
                    itemClasses={{
                      base: "gap-4 bg-inherit text-inherit font-sans text-sm",
                    }}
                  >
                    {header.subheader.map((subheader, id) => (
                      <DropdownItem
                        key={subheader.title + id.toString()}
                      >
                        <Link href={subheader.link ?? "#" + subheader.title}>
                          {subheader.title}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
              </Dropdown>
            );
          }
        })}
      </NavbarContent>
    </Navbar>
  );
}
