import Link from "next/link";
import Image from 'next/image';

import { Linkedin, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
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

  return (
    <>
      <div className="bg-white h-4 w-full" /> {/* White Section Above Footer */}
      <footer className="bg-p23Green-dark text-white py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            <div>
              <img
                src="/p23-logo-white.svg"
                alt="P23 Africa Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm font-normal text-gray-300 font-gt-walsheim">
                P23 Africa LTD is registered in the United Kingdom. Company No: 15246700
              </p>
            </div>


            <div>
              <h4 className=" text-base mb-4 font-gt-walsheim">Who We Are</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">About Us</Link></li>
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">Business Referral Network</Link></li>
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">University Partnership</Link></li>
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">The B4th Pitch</Link></li>
              </ul>
            </div>


            <div>
              <h4 className=" text-base mb-4 font-gt-walsheim">What We Do</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">Business Strategy</Link></li>
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">Market Entry</Link></li>
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">Business Research</Link></li>
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">Sales</Link></li>
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">Marketing</Link></li>
                <li><Link href="#" className="hover:text-p23Lime font-gt-walsheim text-sm font-normal">Business Audit</Link></li>
              </ul>
            </div>


            <div>
              <h4 className=" text-base mb-4 font-gt-walsheim">Contact Us</h4>
              <div className="flex space-x-4">
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


            <div>
              <h4 className="text-base font-gt-walsheim mb-4">Subscribe to get Updates</h4>
              <div className="w-full flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-[#C2E94E] bg-transparent text-sm text-white placeholder:text-gray-500 rounded-md px-4 py-2 focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[#C2E94E]"
                />
                <Button className="bg-[#C2E94E] text-[#013229] hover:bg-[#C2E94E]/90 mr-24 px- py-2 rounded-md flex items-center justify-start gap-2 font-gt-walsheim">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 text-center text-base font-normal text-white justify-self-end leading-6 opacity-100 font-georgia">
            &copy;  P23 Africa 2025 &nbsp;•&nbsp;{" "}
            <Link href="#" className="hover:text-p23Lime">Privacy Policy</Link> &nbsp;•&nbsp;{" "}
            <Link href="#" className="hover:text-p23Lime">Terms & Conditions</Link>
          </div>

        </div>
      </footer>
    </>
  );
}


