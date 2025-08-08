import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center py-8 bg-white">
      {/* Background images  */}
      <div className="absolute inset-0 hidden md:block bg-hero-desktop bg-cover bg-center"></div>
      <div className="absolute inset-0 md:hidden bg-hero-mobile bg-cover bg-center"></div>
      {/* <div className="absolute inset-0 bg-white opacity-80 mix-blend-multiply"></div> */}

      <div
        className="container mx-auto relative z-10 flex flex-col items-center justify-center
                md:flex md:flex-row md:items-center md:gap-16 px-6 -mt-8 md:-mt-16 border"
      >
        <div
          data-aos="slide-right"
          className="hidden md:flex justify-center items-center w-full md:w-5/12 flex-shrink-0"
        >
          <div className="relative w-full h-[600px]">
            <Image
              src="/hero-image-1.png"
              alt="Decorative geometric shapes"
              fill
              style={{ objectFit: "contain" }}
              className="w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="w-full text-center md:text-left mt- md:mt-0 relative z-20 md:w-7/12 flex-grow">
          <h1
            data-aos="slide-down"
            className="text-3xl lg:text-5xl font-extrabold text-p23Green leading-tight md:mt-"
          >
            Gaining Knowledge
          </h1>
          <h1
            data-aos="slide-down"
            className="text-3xl lg:text-5xl font-light md:font-extralight text-green-900 leading-tight mb- md:mb-0"
          >
            Through Connection.
          </h1>

          <div
            data-aos="slide-left"
            className="relative w-full max-w-full mx-full md:mx-0 h-[500px] md:h-[px] mt- md:mt-0"
          >
            <div className="hidden md:block absolute w-full max-w-full inset-0">
              <Image
                src="/hero-image-2.png"
                alt="Professionals smiling with quotes and dotted lines"
                fill
                style={{ objectFit: "contain" }}
                className="w-full h-full"
                priority
              />
            </div>

            <div className="md:hidden absolute inset-0">
              <Image
                src="/mobile-hero-image-1.png"
                alt="Professionals smiling with quotes and dotted lines (mobile)"
                fill
                style={{ objectFit: "contain" }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

{/*       <div
        className="container mx-auto relative z-10 flex flex-col items-center justify-center
                md:flex md:flex-row md:items-center md:gap-16 px-6 md:-mt-20"
      >
        <div
          data-aos="slide-right"
          className="hidden md:flex justify-center items-center w-full md:w-5/12 flex-shrink-0"
        >
          <div className="relative w-full h-[700px]">
            {" "}
            {/* Increased height */}
            <Image
              src="/hero-image-1.png"
              alt="Decorative geometric shapes"
              fill
              style={{ objectFit: "contain" }}
              className="w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="w-full text-center md:text-left mt- md:mt-0 relative z-20 md:w-7/12 flex-grow">

          <div className="mt-6 md:mt-20 lg:mt-32">
            <h1
              data-aos="slide-down"
              className="text-3xl lg:text-6xl font-extrabold text-p23Green leading-tight"
            >
              Gaining Knowledge
            </h1>
            <h1
              data-aos="slide-down"
              className="text-3xl lg:text-6xl font-light md:font-extralight text-green-900 leading-tight mb- md:mb-0"
            >
              Through Connection.
            </h1>
          </div>

          <div
            data-aos="slide-left"
            className="relative w-full max-w-full mx-full md:mx-0 h-[600px] md:h-[600px] mt- md:mt-0"
          >
            {" "}
            {/* Increased height */}
            <div className="hidden md:block absolute w-full max-w-full inset-0">
              <Image
                src="/hero-image-2.png"
                alt="Professionals smiling with quotes and dotted lines"
                fill
                style={{ objectFit: "contain" }}
                className="w-full h-full" // Ensures it takes full width and height
                priority
              />
            </div>
            <div className="md:hidden absolute inset-0">
              <Image
                src="/mobile-hero-image-1.png"
                alt="Professionals smiling with quotes and dotted lines (mobile)"
                fill
                style={{ objectFit: "contain" }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-48px)] h-[150px] pointer-events-none mb-6">
        <Image
          src="/mobile-hero-image-2.png"
          alt="Decorative mobile geometric shapes"
          fill
          style={{ objectFit: "contain" }}
          className="w-full h-full"
          priority
        />
      </div>
    </section>
  );
}
