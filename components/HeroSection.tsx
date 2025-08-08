// import Image from "next/image";
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// export function HeroSection() {
//   return (
//     <section className="relative w-full overflow-hidden min-h-[700px] flex items-center py-8 md:py-16 bg-white">
//       {/* Background images  */}
//       <div className="absolute inset-0 hidden md:block bg-hero-desktop bg-cover bg-center"></div>
//       <div className="absolute inset-0 md:hidden bg-hero-mobile bg-cover bg-center"></div>
//       {/* <div className="absolute inset-0 bg-white opacity-80 mix-blend-multiply"></div> */}

//       <div
//         className="container mx-auto relative z-10 flex flex-col items-center justify-center
//                       md:flex md:flex-row md:items-center md:gap-16 px-6"
//       >
//         <div data-aos="slide-right" className="hidden md:flex justify-center items-center w-full md:w-5/12 flex-shrink-0">
//           <div className="relative w-full h-[600px]">
//             <Image
//               src="/hero-image-1.png"
//               alt="Decorative geometric shapes"
//               fill
//               style={{ objectFit: "contain" }}
//               className="w-full h-full"
//               priority
//             />
//           </div>
//         </div>

//         <div className="w-full text-center md:text-left mt- md:mt-0 relative z-20 md:w-7/12 flex-grow">
//           <h1 data-aos="slide-down" className="text-3xl lg:text-5xl font-extrabold text-p23Green leading-tight md:mt-">
//             Gaining Knowledge
//           </h1>
//           <h1 data-aos="slide-down" className="text-3xl lg:text-5xl font-light md:font-extralight text-green-900 leading-tight mb- md:mb-0">
//             Through Connection.
//           </h1>

//           <div data-aos="slide-left" className="relative w-full max-w-full mx-full md:mx-0 h-[500px] md:h-[px] mt- md:mt-0">
//             <div className="hidden md:block absolute w-full max-w-full inset-0">
//               <Image
//                 src="/hero-image-2.png"
//                 alt="Professionals smiling with quotes and dotted lines"
//                 fill
//                 style={{ objectFit: "contain" }}
//                 className="w-full h-full"
//                 priority
//               />
//             </div>

//             <div className="md:hidden absolute inset-0">
//               <Image
//                 src="/mobile-hero-image-1.png"
//                 alt="Professionals smiling with quotes and dotted lines (mobile)"
//                 fill
//                 style={{ objectFit: "contain" }}
//                 className="w-full h-full"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-48px)] h-[150px] pointer-events-none mb-6">
//         <Image
//           src="/mobile-hero-image-2.png"
//           alt="Decorative mobile geometric shapes"
//           fill
//           style={{ objectFit: "contain" }}
//           className="w-full h-full"
//           priority
//         />
//       </div>
//     </section>
//   );
// }





// import Image from "next/image";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";


// export function HeroSection() {
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);
//     return (
//         <section className="relative w-full overflow-hidden min-h-screen flex items-center py-8 md:py-16 bg-white">
//             {/* Background images  */}
//             <div className="absolute inset-0 hidden md:block bg-hero-desktop bg-cover bg-center"></div>
//             <div className="absolute inset-0 md:hidden bg-hero-mobile bg-cover bg-center"></div>
//             {/* <div className="absolute inset-0 bg-white opacity-80 mix-blend-multiply"></div> */}

//             <div
//                 className="container mx-auto relative z-10 flex flex-col items-center justify-center
//                           md:flex md:flex-row md:items-center md:gap-16 px-6"
//             >
//                 <div data-aos="slide-right" className="hidden md:flex justify-center items-center w-full md:w-5/12 flex-shrink-0">
//                     <div className="relative w-full h-[600px]">
//                         <Image
//                             src="/hero-image-1.png"
//                             alt="Decorative geometric shapes"
//                             fill
//                             style={{ objectFit: "contain" }}
//                             className="w-full h-full"
//                             priority
//                         />
//                     </div>
//                 </div>

//                 <div className="w-full text-center md:text-left mt- md:mt-0 relative z-20 md:w-7/12 flex-grow">
//                     <h1 data-aos="slide-down" className="text-3xl lg:text-5xl font-extrabold text-p23Green leading-tight md:mt-">
//                         Gaining Knowledge
//                     </h1>
//                     <h1 data-aos="slide-down" className="text-3xl lg:text-5xl font-light md:font-extralight text-green-900 leading-tight mb- md:mb-0">
//                         Through Connection.
//                     </h1>

//                     <div data-aos="slide-left" className="relative w-full max-w-full mx-full md:mx-0 h-[500px] md:h-[px] mt- md:mt-0">
//                         <div className="hidden md:block absolute w-full max-w-full inset-0">
//                             <Image
//                                 src="/hero-image-2.png"
//                                 alt="Professionals smiling with quotes and dotted lines"
//                                 fill
//                                 style={{ objectFit: "contain" }}
//                                 className="w-full h-full"
//                                 priority
//                             />
//                         </div>

//                         <div className="md:hidden absolute inset-0">
//                             <Image
//                                 src="/mobile-hero-image-1.png"
//                                 alt="Professionals smiling with quotes and dotted lines (mobile)"
//                                 fill
//                                 style={{ objectFit: "contain" }}
//                                 className="w-full h-full"
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-48px)] h-[150px] pointer-events-none mb-6">
//                 <Image
//                     src="/mobile-hero-image-2.png"
//                     alt="Decorative mobile geometric shapes"
//                     fill
//                     style={{ objectFit: "contain" }}
//                     className="w-full h-full"
//                     priority
//                 />
//             </div>
//         </section>
//     );
// }




import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export function HeroSection() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className="relative w-full overflow-hidden min-h-screen flex items-center py-8 md:py-16 bg-white">
            {/* Background images  */}
            <div className="absolute inset-0 hidden md:block bg-hero-desktop bg-cover bg-center"></div>
            <div className="absolute inset-0 md:hidden bg-hero-mobile bg-cover bg-center"></div>
            {/* <div className="absolute inset-0 bg-white opacity-80 mix-blend-multiply"></div> */}

            <div
                className="container mx-auto relative z-10 flex flex-col items-center justify-center
                          md:flex md:flex-row md:items-center md:gap-16 px-6"
            >
                <div data-aos="slide-right" className="hidden md:flex justify-center items-center w-full md:w-5/12 flex-shrink-0">
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
                    <h1 data-aos="slide-down" className="text-3xl lg:text-5xl font-extrabold text-p23Green leading-tight md:mt- md:w-full">
                        Gaining Knowledge
                    </h1>
                    <h1 data-aos="slide-down" className="text-3xl lg:text-5xl font-light md:font-extralight text-green-900 leading-tight mb- md:mb-0 md:w-full">
                        Through Connection.
                    </h1>

                    <div data-aos="slide-left" className="relative w-full max-w-full mx-full md:mx-0 h-[500px] md:h-[px] mt- md:mt-0">
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
