import { HeroSection } from "@/components/HeroSection";
import { UpcomingEvents } from "@/components/UpcomingEvents";

export default function Home() {
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
