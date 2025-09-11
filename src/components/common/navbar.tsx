"use client";
import { EVENT_TITLE, NAVIGATION_HEADERS } from "@/lib/constants";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Link from "next/link";
import { chevronDown } from "./icons";
import React from "react";

function QiskitLogo() {
  return <div className="text-4xl mr-5">{"⚛"}</div>;
}

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarBrand>
        <QiskitLogo />
        <p className="font-bold text-inherit">{EVENT_TITLE}</p>
      </NavbarBrand>
      {/* Small screen only */}
      <NavbarMenu className={isMenuOpen ? "flex" : "hidden"}>
        {NAVIGATION_HEADERS.flatMap(header => header.subheader ? header.subheader : [header])
          .map((header, idx) => <NavbarMenuItem key={idx}>
                <Link href={header.link ?? "#" + header.title}>
                  {header.title}
                </Link>
              </NavbarMenuItem>)}
      </NavbarMenu>
      {/* Big screen only */}
      <NavbarContent className="sm:hidden sm:flex" justify="end">
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
              <Dropdown key={idx} className="bg-background mx-3">
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
