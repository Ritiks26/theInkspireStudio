import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { ImageComp } from "./Agency";
import { SectionHeading } from "../components/SectionHeading";
import { typography } from "../constant";
import imageCompo from "../assets/pic/hero-pic-2.jpeg";
import "./Typography.css";

gsap.registerPlugin(CustomEase);

export function Typography() {
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

        container.addEventListener("mouseenter", () => {
          gsap.to(fontWrapper, {
            height: "100%",
            ease: CustomEase.create(
              "custom",
              "M0,0 C0.064,0.964 0.353,0.913 1,1 ",
            ),
          });

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
  });
  return (
    <>
      <div className="typography-container">
        <SectionHeading heading={"typography & colors"} />
        <div className="typography-child">
          <div className="fonts-container">
            {typography.map((typo) => (
              <>
                <div className="font-child">
                  <h1 className="font-name">{typo.fontName}</h1>
                  <p>{typo.fontWeight}</p>
                  <div className="font-wrapper">
                    <p className="wrapper-text">{typo.wrapperText}</p>

                    <div className="chars-example">
                      <p>
                        Bb{" "}
                        <ImageComp
                          img={
                            "https://images.unsplash.com/photo-1499428665502-503f6c608263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxkYXJrfGVufDB8fDB8fHww"
                          }
                        />
                      </p>
                    </div>
                    <div className="chars-example">
                      <p>01</p>
                    </div>
                    <div className="chars-example">
                      <p>23</p>
                    </div>
                    <div className="chars-example">
                      <p>45</p>
                    </div>
                    <div className="chars-example">
                      <p>67</p>
                    </div>
                    <div className="chars-example">
                      <p>89</p>
                    </div>

                    <div className="wrapper-container">
                      <p>{typo.wrapperContent}</p>
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
