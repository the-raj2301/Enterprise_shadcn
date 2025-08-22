"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../BgThemes/mode-toggle";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog"; // Use ShadCN DialogTitle
import { NavLink } from "react-router-dom";

import logoLight from "@/assets/mantik/logo-64-wh.svg";
import logoDark from "@/assets/mantik/logo-64-bl.svg";
import logoXlLight from "@/assets/mantik/logo-xl.png";
import logoXlDark from "@/assets/mantik/logo-xl-bl.png";

// import { Separator } from "./ui/separator";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallary", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="w-auto flex items-center justify-center space-x-5">
          <img
            src={logoLight}
            alt="Mantik Enterprises"
            className="h-12 hidden md:dark:block"
          />
          <img
            src={logoDark}
            alt="Mantik Enterprises"
            className="h-12 hidden md:block dark:hidden"
          />

          {/* Vertical Separator */}
          <div className="h-12 w-px bg-neutral-900 dark:bg-neutral-200"></div>
          {/* <Separator orientation="vertical"/> */}

          <a className="text-xl font-semibold text-gray-900 dark:text-white hidden md:block">
            MANTIK ENTERPRISES
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                  isActive ? "text-orange-700 dark:text-orange-400" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="absolute md:relative left-2">
          <ModeToggle />
        </div>
        <img
          src={logoXlLight}
          alt="Mantik Enterprises"
          className="h-12 left-5 md:hidden hidden md:dark:hidden dark:block"
        />
        <img
          src={logoXlDark}
          alt="Mantik Enterprises"
          className="h-12 left-5 md:hidden dark:hidden"
        />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              {/* Accessible Title (Hidden for users, visible for screen readers) */}
              <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

              {/* Accessible Description */}
              <DialogDescription className="sr-only">
                Navigate through the website using the links below.
              </DialogDescription>

              <div className="space-y-4 mt-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={({isActive})=> `
                      block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md
                      ${isActive ? "text-orange-700 dark:text-orange-400" : ""}
                      `}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
