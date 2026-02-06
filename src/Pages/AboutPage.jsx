// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "react";
// import "./AboutPage.css";

// gsap.registerPlugin(SplitText, ScrollTrigger);

// export function AboutPage() {
//   const imageRef = useRef(null);
//   useGSAP(
//     () => {
//       document.fonts.ready.then(() => {
//         const splitHeading = SplitText.create(".about-section-child p", {
//           type: "chars, words, lines",
//         });

//         const splitAbout = SplitText.create(".about span", {
//           type: "chars",
//           linesClass: "about-span",
//         });

//         const oChar = splitAbout.chars.find(
//           (char) => char.innerText.trim().toLowerCase() === "o",
//         );

//         gsap.set(splitHeading.lines, {
//           clipPath: "inset(0% 0% 100% 0%)",
//           y: -20,
//         });

//         gsap.set(splitAbout.chars, {
//           clipPath: "inset(0% 0% 100% 0%)",
//           y: -20,
//         });

//         gsap.set(imageRef.current, {
//           scale: 1.2,
//           clipPath: "inset(0% 0% 100% 0%)",
//         });

//         gsap.to(splitHeading.lines, {
//           clipPath: "inset(0% 0% 0% 0%)",
//           y: 0,
//           duration: 0.75,
//           ease: "power1.inOut",
//           scrollTrigger: {
//             trigger: splitHeading.lines,
//             start: "top 65%",
//           },
//         });

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".about",
//             start: "top 75%",
//           },
//         });

//         tl.to(splitAbout.chars, {
//           clipPath: "inset(0% 0% 0% 0%)",
//           y: 0,
//           duration: 0.75,
//           ease: "power1.inOut",
//         })
//           .to(imageRef.current, {
//             scale: 1,
//             clipPath: "inset(0% 0% 0% 0%)",
//             ease: "power1.inOut",
//           })
//           .to(oChar, {
//             opacity: 0,
//           });
//       });
//     },
//     // { scope: imageRef },
//     [],
//   );

//   useGSAP(() => {
//     const mouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const { width, height, left, top } =
//         imageRef.current.getBoundingClientRect();

//       const x = clientX - (left + width / 2);
//       const y = clientY - (top + height / 2);

//       gsap.to(imageRef.current, { x: x, y: y, ease: "elastic.out(1, 0.3)" });
//     };

//     const mouseLeave = (e) => {
//       gsap.to(imageRef.current, { x: 0, y: 0, ease: "elastic.out(1, 0.3)" });
//     };

//     imageRef.current.addEventListener("mousemove", mouseMove);
//     imageRef.current.addEventListener("mouseleave", mouseLeave);

//     return () => {
//       imageRef.current.removeEventListener("mousemove", mouseMove);
//       imageRef.current.removeEventListener("mouseleave", mouseLeave);
//     };
//   }, []);
//   return (
//     <>
//       <div className="about-container">
//         <h1>We are Inkspire Studio</h1>

//         <div className="about-section">
//           <div className="about-section-child">
//             <p>
//               a <span>creative</span> collective made to unlock your brand's
//               potential
//             </p>
//           </div>
//           <div className="about-section-child">
//             <p>
//               Our team of designers, strategists, and innovators work together
//               to craft unique solutions that are not only beautiful but also
//               functional and impactful. From branding and UI/UX to web design
//               and digital campaigns, we bring ideas to life with precision,
//               passion, and innovation.
//             </p>
//           </div>
//         </div>
//         <div className="about">
//           <span>A</span>
//           <span>B</span>
//           <span>
//             O{" "}
//             <img
//               ref={imageRef}
//               src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67b89d9110d0a5d6615f273a_umaultAwards-p-1080.png"
//               alt=""
//             />
//           </span>
//           <span>U</span>
//           <span>T</span>
//         </div>
//       </div>
//     </>
//   );
// }

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutPage.css";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function AboutPage() {
  const aboutContainerRef = useRef(null);
  useGSAP(() => {
    let ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        const images = gsap.utils.toArray(".about-pic");

        images.forEach((img) => {
          const splitHeading = SplitText.create(".grid-content h2", {
            type: "chars, words, lines",
          });

          const splitLeftPara = SplitText.create(".grid-content-child p", {
            type: "chars, words, lines",
          });

          const splitRightList = SplitText.create(".right-content ul", {
            type: "chars, words, lines",
          });

          const splitRightPara = SplitText.create(".right-content p", {
            type: "chars, words, lines",
          });

          gsap.set(splitHeading.lines, {
            clipPath: "inset(0% 0% 100% 0%)",
            y: 20,
          });

          gsap.set(splitLeftPara.lines, {
            clipPath: "inset(0% 0% 100% 0%)",
            y: 20,
          });

          gsap.set(splitRightList.lines, {
            clipPath: "inset(0% 0% 100% 0%)",
            y: 20,
          });

          gsap.set(splitRightPara.lines, {
            clipPath: "inset(0% 0% 100% 0%)",
            y: 20,
          });

          gsap.set(img, {
            clipPath: "inset(0% 0% 100% 0%)",
            y: 20,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: aboutContainerRef.current,
              start: "top 55%",
              end: "+=300%",
            },
          });

          tl.to(splitHeading.lines, {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 1,
            ease: "power3.inOut",
          })
            .to(
              splitLeftPara.lines,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                duration: 1,
                ease: "power3.inOut",
              },
              "<",
            )
            .to(
              splitRightList.lines,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                duration: 1,
                ease: "power3.inOut",
              },
              "<",
            )
            .to(
              splitRightPara.lines,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                duration: 1,
                ease: "power3.inOut",
              },
              "<",
            )
            .to(img, {
              clipPath: "inset(0% 0% 0% 0%)",
              y: 0,
              duration: 0.5,
              ease: "power2.inOut",
            });
        });
      });
    });

    return () => ctx.revert();
  });
  return (
    <>
      <div className="about-container" ref={aboutContainerRef}>
        <h1>We are Inkspire Studio</h1>

        <div className="about-grid">
          <div className="grid-content">
            <h2>
              We are a forward- thinking creative studio with a passion for
              blending design and technology.
            </h2>

            <div className="grid-content-child">
              <p>
                Our team of innovators, designers, and developers collaborates
                with global brands to create unforgettable digital experiences.
              </p>
              <p>
                From immersive websites to interactive installations, we
                challenge the status quo to deliver work that is as functional
                as it is beautiful.
              </p>
            </div>
          </div>
          <div className="grid-middle-section">
            <div className="about-image-wrapper">
              <div className="first-image about-pic">
                <img
                  src="http://localhost:5173/src/assets/pic/hero-pic-2.jpeg"
                  alt=""
                />
              </div>
              <div className="second-image about-pic">
                <img
                  src="https://cappen.com/wp-content/uploads/2025/09/26753a1649cd851ba7d953c659aa99713a810b89b7baca09fce4b2e269273ae5.webp"
                  alt=""
                />
              </div>
              <div className="third-image about-pic">
                <img
                  src="https://cappen.com/wp-content/uploads/2025/09/ChatGPT-Image-Sep-18-2025-12_51_37-AM.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="about-image-wrapper">
              <div className="first-image about-pic">
                <img
                  src="https://cappen.com/wp-content/uploads/2025/09/ChatGPT-Image-Sep-18-2025-12_51_37-AM.webp"
                  alt=""
                />
              </div>
              <div className="second-image about-pic">
                <img
                  src="https://cappen.com/wp-content/uploads/2025/09/26753a1649cd851ba7d953c659aa99713a810b89b7baca09fce4b2e269273ae5.webp"
                  alt=""
                />
              </div>
              <div className="third-image about-pic">
                <img
                  src="http://localhost:5173/src/assets/pic/hero-pic-2.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="grid-content-right">
            <div className="right-content">
              <ul>digital experience</ul>

              <p>Product Development</p>
              <p>Websites & Platforms</p>
              <p>Mobile Applications</p>
              <p>Immersive Experience</p>
              <p>Headless E-commerce</p>
              <p>Installations & Activations</p>
            </div>

            <div className="right-content">
              <ul>Brand Strategy</ul>
              <p>Brand & Visual Identity</p>
              <p>Product Design (UX & UI)</p>
              <p>MVP Definition & Prototyping</p>
              <p>Design & Innovation Sprints</p>
              <p>Design Systems & Style Guides</p>
              <p>2D & 3D Motion Design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
