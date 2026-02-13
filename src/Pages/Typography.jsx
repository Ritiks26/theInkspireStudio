import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { ImageComp } from "./Agency";
import { useRef } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { typography } from "../constant";
import imageCompo from "../assets/pic/hero-pic-2.jpeg";
import imageCompoSecond from "../assets/pic/hero-pic-3.jpeg";
import "./Typography.css";

gsap.registerPlugin(CustomEase);

CustomEase.create("bpEase", "M0,0 C0.25,0.1 0.35,1 1,1");

export function Typography() {
  const typographyContainerRef = useRef(null);
  useGSAP(() => {
    if (window.innerWidth >= 1024) {
      const fontChild = gsap.utils.toArray(".font-child");
      fontChild.forEach((container) => {
        const fontWrapper = container.querySelectorAll(".font-wrapper");

        const wrapperText = container.querySelectorAll(".wrapper-text");

        const charEx = container.querySelectorAll(".chars-example p");

        const imageElem = container.querySelectorAll(".chars-example img");

        const wrapperContainer =
          container.querySelectorAll(".wrapper-container");

        const marqueeWrapper = container.querySelectorAll(".marquee-wrapper");

        gsap.set(wrapperText, {
          opacity: 0,
          y: 100,
        });

        gsap.set(charEx, {
          opacity: 0,
          y: 100,
        });

        gsap.set(imageElem, {
          opacity: 0,
          y: 100,
        });

        gsap.set(wrapperContainer, {
          opacity: 0,
          y: 100,
        });

        const marqueeAnim = gsap.to(marqueeWrapper, {
          xPercent: -50,
          ease: "none",
          duration: 8,
          repeat: -1,
          paused: true,
        });

        container.addEventListener("mouseenter", () => {
          gsap.to(fontWrapper, {
            height: "100%",
            ease: CustomEase.create(
              "custom",
              "M0,0 C0.064,0.964 0.353,0.913 1,1 ",
            ),
          });

          marqueeAnim.play();

          gsap.to(wrapperText, {
            opacity: 1,
            y: 0,
          });

          gsap.to(charEx, {
            opacity: 1,
            y: 0,
          });

          gsap.to(imageElem, {
            opacity: 1,
            y: 0,
          });

          gsap.to(wrapperContainer, {
            opacity: 1,
            y: 0,
          });
        });

        container.addEventListener("mouseleave", () => {
          gsap.to(fontWrapper, {
            height: "0%",
          });

          marqueeAnim.pause();

          gsap.to(wrapperText, {
            opacity: 0,
            y: 100,
          });

          gsap.to(charEx, {
            opacity: 0,
            y: 100,
          });

          gsap.to(imageElem, {
            opacity: 0,
            y: 100,
          });

          gsap.to(wrapperContainer, {
            opacity: 0,
            y: 100,
          });
        });
      });
    }

    const fontChild = gsap.utils.toArray(".font-child");

    fontChild.forEach((container, i) => {
      const fontName = container.querySelectorAll(".font-name");

      const fontWeight = container.querySelectorAll(".font-weight");

      gsap.set(fontName, {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      });

      gsap.set(fontWeight, {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: typographyContainerRef.current,
          start: "top 65%",
        },
      });

      tl.to(fontName, {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        ease: "bpEase",
        duration: 1,
      }).to(
        fontWeight,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          yPercent: 0,
          ease: "bpEase",
          duration: 1,
        },
        "<",
      );
    });
  }, []);
  return (
    <>
      <div className="typography-container" ref={typographyContainerRef}>
        <SectionHeading heading={"typography & colors"} />
        <div className="typography-child">
          <div className="fonts-container">
            {typography.map((typo) => (
              <>
                <div className="font-child">
                  <h1 className="font-name">{typo.fontName}</h1>
                  <p className="font-weight">{typo.fontWeight}</p>
                  <div className="font-wrapper">
                    <div className="marquee-wrapper">
                      <p className="wrapper-text">
                        {typo.wrapperTextAa} <ImageComp img={imageCompo} />
                      </p>

                      <div className="wrapper-container">
                        <p>{typo.wrapperContent}</p>
                      </div>

                      {/* duplicate */}

                      <p className="wrapper-text">
                        {typo.wrapperTextAa}{" "}
                        <ImageComp img={imageCompoSecond} />
                      </p>

                      <div className="wrapper-container">
                        <p>{typo.wrapperContent}</p>
                      </div>

                      {/* duplicate */}

                      <p className="wrapper-text">
                        {typo.wrapperTextAa} <ImageComp img={imageCompo} />
                      </p>

                      <div className="wrapper-container">
                        <p>{typo.wrapperContent}</p>
                      </div>

                      {/* duplicate */}

                      <p className="wrapper-text">
                        {typo.wrapperTextAa}{" "}
                        <ImageComp img={imageCompoSecond} />
                      </p>

                      <div className="wrapper-container">
                        <p>{typo.wrapperContent}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="closing-typography">
            <div className="left-side-typo">
              <p>
                Satoshi and Almarea were chosen to create a clear balance
                between character and structure. Satoshi adds personality
                through expressive, humanist forms, while Almarena provides
                clarity, consistency, and strong readability across interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
