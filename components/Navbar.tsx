"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Who We Are", href: "#who-we-are" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Our Events", href: "#our-events" },
    { name: "Resource Hub", href: "#resource-hub" },
    { name: "Let's Collaborate", href: "#collaborate" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      href: "#",
      alt: "LinkedIn",
    },
    {
      name: "Facebook",
      icon: "/icons/facebook.svg",
      href: "#",
      alt: "Facebook",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      href: "#",
      alt: "Instagram",
    },
    { name: "YouTube", icon: "/icons/youtube.svg", href: "#", alt: "YouTube" },
  ];

  const Logo = () => (
    <div className="flex items-center">
      <Image
        src="/p23-logo.svg"
        alt="P23 Africa Logo"
        width={80}
        height={30}
        className="h-auto w-auto"
      />
    </div>
  );

  return (
    <nav className="bg-p23Green text-white py-4 px-6 md:px-12 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-14">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm leading-7 hover:text-p23Lime transition-colors whitespace-nowrap font-gt-walsheim"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-6 flex-shrink-0">
            <Button
              variant="outline"
              className="bg-transparent text-white border- border-white hover:bg-white hover:text-p23Green px-3 py-2 rounded-xl font-semibold text-xs flex items-center gap-2 ml-4 transition-colors transform hover:scale-105"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="h-5 w-5 hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation (Hamburger) */}
        <div className="md:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-p23Green/80"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-p23Green text-white w-full max-w-xs"
            >
              <nav className="flex flex-col items-start space-y-6 pt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium hover:text-p23Lime transition-colors w-full pb-2 border-b border-p23Green/50"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-8 w-full">
                  <Button
                    variant="default"
                    className="bg-p23Lime text-p23Green hover:bg-p23Lime/90 w-full py-2 rounded-xl font-semibold flex items-center justify-center gap-2"
                    onClick={() => setOpen(false)}
                  >
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-center space-x-6 mt-6 w-full">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <Image
                        src={social.icon}
                        alt={social.alt}
                        width={24}
                        height={24}
                        className="h-6 w-6 hover:opacity-80 transition-opacity"
                      />
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
