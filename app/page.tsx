"use client";

import { HeroSection } from "@/components/HeroSection";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { use } from "react";

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="our-events">
        <UpcomingEvents />
      </section>
    </div>
  );
}
