// import { gsap } from "gsap";
// import { CustomEase } from "gsap/CustomEase";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import SplitText from "gsap/SplitText";
// import { useRef } from "react";
// import heroPic1 from "../assets/pic/hero-pic-1.jpeg";
// import heroPic2 from "../assets/pic/hero-pic-2.jpeg";
// import heroPic3 from "../assets/pic/hero-pic-3.jpeg";
// import heroPic4 from "../assets/pic/hero-pic-4.jpeg";
// import heroPic5 from "../assets/pic/hero-pic-5.jpeg";
// import heroPic6 from "../assets/pic/hero-pic-6.jpeg";
// import "./HeroSection.css";

// gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

// export function HeroSection() {
//   const counterRef = useRef(null);
//   const hasPlayed = useRef(sessionStorage.getItem("hero"));
//   const imageWrapperRef = useRef(null);

//   CustomEase.create("hop", "0.85, 0, 0.15, 1");

//   useGSAP(() => {
//     if (hasPlayed.current) {
//       gsap.set(".hero-overlay", {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//         display: "none",
//       });

//       return;
//     }

//     hasPlayed.current = true;
//     sessionStorage.setItem("hero", "true");

//     document.fonts.ready.then(() => {
//       const counterTl = gsap.timeline({
//         onStart: () => lenis.stop(),
//         onComplete: () => lenis.start(),
//         delay: 0.5,
//       });
//       const overlayTextTl = gsap.timeline({
//         onStart: () => lenis.stop(),
//         onComplete: () => lenis.start(),
//         delay: 0.25,
//       });
//       const overlayHeadingTl = gsap.timeline({
//         onStart: () => lenis.stop(),
//         onComplete: () => lenis.start(),
//         delay: 0.25,
//       });

//       counterTl.to(counterRef.current, {
//         innerText: 100,
//         duration: 5,
//         ease: "slow(0.7,0.7,false)",
//         snap: { innerText: 1 },
//       });

//       overlayHeadingTl
//         .to(".overlay-heading", {
//           yPercent: 0,
//           duration: 1,
//           ease: "hop",
//         })
//         .to(".overlay-heading", {
//           yPercent: -30,
//           duration: 1,
//           ease: "hop",
//         })
//         .to(".overlay-heading", {
//           yPercent: -65,
//           duration: 1,
//           ease: "hop",
//         })
//         .to(".overlay-heading", {
//           yPercent: -100,
//           duration: 1,
//           ease: "hop",
//         })
//         .to(".overlay-heading", {
//           yPercent: -130,
//           duration: 1,
//           ease: "hop",
//         });

//       overlayTextTl
//         .to(".overlay-text", {
//           y: "-4rem",
//           duration: 1.25,
//           ease: "hop",
//         })
//         .to(".overlay-text", {
//           y: "-2rem",
//           duration: 1.25,
//           ease: "hop",
//         })
//         .to(".overlay-text", {
//           y: "0rem",
//           duration: 1.25,
//           ease: "hop",
//         })
//         .to(".overlay-text", {
//           y: "2rem",
//           duration: 1.25,
//           ease: "hop",
//         })
//         .to(".hero-overlay", {
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//           duration: 0.5,
//           ease: "hop",
//         })
//         .to(".hero-overlay", {
//           display: "none",
//         });
//     });
//   }, []);

//   useGSAP(() => {
//     document.fonts.ready.then(() => {
//       const splitRightText = SplitText.create(".right-hero", {
//         type: "chars, words, lines",
//         wordsClass: "split-char",
//       });

//       const splitLeftText = SplitText.create(".left-hero", {
//         type: "chars, words, lines",
//         wordsClass: "split-char",
//       });

//       const splitHeroHeading = SplitText.create(".hero-heading p", {
//         type: "chars, words, lines",
//       });

//       gsap.set(splitRightText.lines, {
//         clipPath: "inset(0% 0% 100% 0%)",
//         y: 20,
//       });

//       gsap.set(splitLeftText.lines, {
//         clipPath: "inset(0% 0% 100% 0%)",
//         y: 20,
//       });

//       gsap.set(splitHeroHeading.lines, {
//         clipPath: "inset(0% 0% 100% 0%)",
//         y: 20,
//       });

//       function playHero(delay) {
//         const images = gsap.utils.toArray(".hero-image");

//         images.forEach((img) => {
//           const heroTl = gsap.timeline({ delay: delay });

//           gsap.set(img, {
//             clipPath: "inset(0% 0% 100% 0%)",
//             y: 20,
//           });

//           img.addEventListener("mouseover", () => {
//             gsap.to(img, {
//               yPercent: -5,
//             });
//           });

//           img.addEventListener("mouseleave", () => {
//             gsap.to(img, {
//               yPercent: 0,
//               scale: 1,
//             });
//           });

//           heroTl
//             .to(splitRightText.lines, {
//               clipPath: "inset(0% 0% 0% 0%)",
//               y: 0,
//               ease: "power1.inOut",
//             })
//             .to(
//               splitLeftText.lines,
//               {
//                 clipPath: "inset(0% 0% 0% 0%)",
//                 y: 0,
//                 ease: "power1.inOut",
//               },
//               "<",
//             )
//             .to(splitHeroHeading.lines, {
//               clipPath: "inset(0% 0% 0% 0%)",
//               y: 0,
//               ease: "power1.inOut",
//             })
//             .to(img, {
//               clipPath: "inset(0% 0% 0% 0%)",
//               y: 0,
//             });
//         });
//       }
//       playHero(1);
//     });
//   });

//   return (
//     <>
//       <div className="hero-container">
//         <div className="hero-overlay">
//           <div className="counter" ref={counterRef}>
//             <h1>0</h1>
//           </div>
//           <div className="overlay-heading-container">
//             <div className="overlay-heading">
//               <p>THINK</p>
//               <p>BUILD</p>
//               <p>DEPLOY</p>
//             </div>
//           </div>
//           <div className="overlay-text-container">
//             <div className="overlay-text">
//               <p>Welcome</p>
//               <p>Designed Identity</p>
//               <p>Structure</p>
//             </div>
//           </div>
//         </div>
//         <div className="hero-section">
//           <div className="hero-content">
//             <div className="left-hero">HUMAN THINKERS</div>
//             <div className="image-wrapper" ref={imageWrapperRef}>
//               <img className="hero-image" src={heroPic1} alt="" />
//               <img className="hero-image" src={heroPic2} alt="" />
//               <img className="hero-image" src={heroPic3} alt="" />
//               <img className="hero-image" src={heroPic4} alt="" />
//               <img className="hero-image" src={heroPic5} alt="" />
//               <img className="hero-image" src={heroPic6} alt="" />
//             </div>
//             <div className="right-hero">DIGITAL MAKER</div>
//           </div>

//           <div className="hero-heading">
//             <p>WE ARE GLOBAL CREATIVE STUDIO</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import heroPic1 from "../assets/pic/hero-pic-1.jpeg";
import heroPic2 from "../assets/pic/hero-pic-2.jpeg";
import heroPic3 from "../assets/pic/hero-pic-3.jpeg";
import heroPic4 from "../assets/pic/hero-pic-4.jpeg";
import heroPic5 from "../assets/pic/hero-pic-5.jpeg";
import heroPic6 from "../assets/pic/hero-pic-6.jpeg";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export function HeroSection() {
  const counterRef = useRef(null);
  const hasPlayed = useRef(sessionStorage.getItem("hero"));
  const imageWrapperRef = useRef(null);

  CustomEase.create("hop", "0.85, 0, 0.15, 1");

  useGSAP(() => {
    let splitRightText, splitLeftText, splitHeroHeading;

    const heroSetup = () => {
      splitRightText = SplitText.create(".right-hero", {
        type: "chars, words, lines",
        wordsClass: "split-char",
      });

      splitLeftText = SplitText.create(".left-hero", {
        type: "chars, words, lines",
        wordsClass: "split-char",
      });

      splitHeroHeading = SplitText.create(".hero-heading p", {
        type: "chars, words, lines",
      });

      gsap.set(splitRightText.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        y: 20,
      });

      gsap.set(splitLeftText.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        y: 20,
      });

      gsap.set(splitHeroHeading.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        y: 20,
      });
    };

    function playHero(delay = 0) {
      const images = gsap.utils.toArray(".hero-image");

      images.forEach((img) => {
        const heroTl = gsap.timeline({ delay });

        gsap.set(img, {
          opacity: 1,
          clipPath: "inset(0% 0% 100% 0%)",
          y: 20,
        });

        img.addEventListener("mouseover", () => {
          gsap.to(img, {
            yPercent: -5,
          });
        });

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            yPercent: 0,
          });
        });

        heroTl
          .to(splitRightText.lines, {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            ease: "power1.inOut",
          })
          .to(
            splitLeftText.lines,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              y: 0,
              ease: "power1.inOut",
            },
            "<",
          )
          .to(splitHeroHeading.lines, {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            ease: "power1.inOut",
          })
          .to(img, {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            stagger: 0.8,
          });
      });
    }

    document.fonts.ready.then(() => {
      heroSetup();

      if (hasPlayed.current) {
        gsap.set(".hero-overlay", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          display: "none",
        });

        playHero(1);
        return;
      }

      hasPlayed.current = true;
      sessionStorage.setItem("hero", "true");

      const counterTl = gsap.timeline({
        onStart: () => lenis.stop(),
        onComplete: () => lenis.start(),
        delay: 0.5,
      });

      const overlayTextTl = gsap.timeline({
        onStart: () => lenis.stop(),
        onComplete: () => lenis.start(),
        delay: 0.25,
      });

      const overlayHeadingTl = gsap.timeline({
        onStart: () => lenis.stop(),
        onComplete: () => lenis.start(),
        delay: 0.25,
      });

      counterTl.to(counterRef.current, {
        innerText: 100,
        duration: 5,
        ease: "slow(0.7,0.7,false)",
        snap: { innerText: 1 },
      });

      overlayHeadingTl
        .to(".overlay-heading", {
          yPercent: 0,
          duration: 1,
          ease: "hop",
        })
        .to(".overlay-heading", {
          yPercent: -30,
          duration: 1,
          ease: "hop",
        })
        .to(".overlay-heading", {
          yPercent: -65,
          duration: 1,
          ease: "hop",
        })
        .to(".overlay-heading", {
          yPercent: -100,
          duration: 1,
          ease: "hop",
        })
        .to(".overlay-heading", {
          yPercent: -130,
          duration: 1,
          ease: "hop",
        });

      overlayTextTl
        .to(".overlay-text", {
          y: "-4rem",
          duration: 1.25,
          ease: "hop",
        })
        .to(".overlay-text", {
          y: "-2rem",
          duration: 1.25,
          ease: "hop",
        })
        .to(".overlay-text", {
          y: "0rem",
          duration: 1.25,
          ease: "hop",
        })
        .to(".overlay-text", {
          y: "2rem",
          duration: 1.25,
          ease: "hop",
        })
        .to(".hero-overlay", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
          ease: "hop",
        })
        .to(".hero-overlay", {
          display: "none",
        })
        .add(() => playHero(0));
    });
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="counter" ref={counterRef}>
            <h1>0</h1>
          </div>
          <div className="overlay-heading-container">
            <div className="overlay-heading">
              <p>THINK</p>
              <p>BUILD</p>
              <p>DEPLOY</p>
            </div>
          </div>
          <div className="overlay-text-container">
            <div className="overlay-text">
              <p>Welcome</p>
              <p>Designed Identity</p>
              <p>Structure</p>
            </div>
          </div>
        </div>
        <div className="hero-section">
          <div className="hero-content">
            <div className="left-hero">HUMAN THINKERS</div>
            <div className="image-wrapper" ref={imageWrapperRef}>
              <img className="hero-image" src={heroPic1} alt="" />
              <img className="hero-image" src={heroPic2} alt="" />
              <img className="hero-image" src={heroPic3} alt="" />
              <img className="hero-image" src={heroPic4} alt="" />
              <img className="hero-image" src={heroPic5} alt="" />
              <img className="hero-image" src={heroPic6} alt="" />
            </div>
            <div className="right-hero">DIGITAL MAKER</div>
          </div>

          <div className="hero-heading">
            <p>WE ARE GLOBAL CREATIVE STUDIO</p>
          </div>
        </div>
      </div>
    </>
  );
}
