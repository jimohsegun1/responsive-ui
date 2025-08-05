"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CalendarDays } from "lucide-react";

interface Event {
  id: string;
  name: string;
  description: string;
  type: "all" | "brn";
}

const events: Event[] = [
  {
    id: "1",
    name: "Upcoming Event For The Year",
    description:
      "Explore upcoming events tailored to equip, connect, and empower businesses across Africa and beyond.",
    type: "all",
  },
  {
    id: "2",
    name: "Vision & Execution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "all",
  },
  {
    id: "3",
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "all",
  },
  {
    id: "4",
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "all",
  },
  {
    id: "5",
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "all",
  },
  {
    id: "6",
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    type: "all",
  },
];



const EventCard: React.FC<{
  event: Event;
  variant?: "transparent" | "green" | "white";
  index?: number; // index prop
}> = ({ event, variant = "white", index }) => {
  const bgClass =
    variant === "transparent"
      ? "bg-transparent"
      : variant === "green"
        ? "bg-p23Green text-white"
        : "bg-white text-p23Green";
  const rotateClass = variant === "green" ? "lg:rotate-[-4deg]" : "";
  const textColor =
    variant === "green" || variant === "transparent"
      ? "text-white"
      : "text-p23Green";
  const descColor =
    variant === "green" || variant === "transparent"
      ? "text-white/80"
      : "text-gray-600";

  // a shadow class only if the index is defined and greater than 0
  const shadowClass = typeof index === "number" && index > 0 ? "shadow-2xl" : "";
  return (
    <div
      className={`rounded-2xl ${shadowClass} p-6 md:p-8 flex flex-col justify-between h-full ${bgClass} ${rotateClass}`}
    >
      <div>
        {variant !== "transparent" && (
          <CalendarDays className={`h-6 w-6 ${textColor}`} />
        )}
        <h3 className={`text-xl md:text-2xl font-bold mt-4 mb-2 ${textColor}`}>
          {event.name}
        </h3>
        <p className={`text-sm md:text- leading-5 ${descColor} font-gt-walsheim`}>
          {event.description}
        </p>
      </div>


      <div className="mt-6 flex flex-wrap gap-3">
        {variant === "transparent" ? (
          <Button
            variant="outline"
            className="rounded-xl border-2 border-p23Green text-p23Green hover:bg-p23Green hover:text-white w-full sm:w-auto"
          >
            See All Events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <>
            <div className="flex w-full gap-3"> {/* Flex container for buttons */}
              <Button
                className={`rounded-xl px-5 py-2 border-2 flex items-center gap-2 w-full sm:w-auto
            ${variant === "green"
                    ? "bg-p23Green text-white border-white hover:bg-p23Green/90"
                    : "bg-transparent text-p23Green border-p23Green hover:bg-p23Green hover:text-white"
                  }`}
              >
                Book A Seat <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className={`rounded-xl w-full sm:w-auto flex items-center justify-center gap-2 ${textColor} hover:underline`}
              >
                Event Details <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


export function UpcomingEvents() {
  const [activeTab, setActiveTab] = useState<"all" | "brn">("all");
  const filteredEvents = events.filter(
    (e) => activeTab === "all" || e.type === activeTab
  );
  return (
    <section className="relative py-16 md:py-24 bg-p23LightGray overflow-hidden">
      <div className="absolute md:block inset-0 bg-grainy mix-blend-multiply pointer-events-none" />
      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-12">
        {/* Mobile Tabs */}
        <div className="md:hidden w-full mb-8">
          <Tabs
            defaultValue="all"
            onValueChange={(value) => setActiveTab(value as "all" | "brn")}
          >
            <TabsList className="grid grid-cols-2 w-full bg-gray-200">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-p23Green data-[state=active]:text-white text-p23Green font-semibold"
              >
                All Event
              </TabsTrigger>
              <TabsTrigger
                value="brn"
                className="data-[state=active]:bg-p23Green data-[state=active]:text-white text-p23Green font-semibold"
              >
                BRN Only
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <EventCard event={events[0]} variant="transparent" />
          {filteredEvents.slice(1).map((event, idx) => {
            const variant = idx === 0 ? "green" : "white";
            return (
              <EventCard
                key={event.id}
                event={event}
                variant={variant}
                index={idx + 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
