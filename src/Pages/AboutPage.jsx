import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { SectionHeading } from "../components/SectionHeading";
import aboutPic1 from "../assets/pic/hero-pic-2.jpeg";
import aboutPic2 from "../assets/pic/about-pic-1.png";
import aboutPic3 from "../assets/pic/about-pic-2.png";
import "./AboutPage.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

CustomEase.create("unveil", "M0,0 C0.25,0.1 0.35,1 1,1");

export function AboutPage() {
  const aboutContainerRef = useRef(null);
  const aboutImageBig = useRef(null);
  const aboutImageSmall = useRef(null);

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        document.fonts.ready.then(() => {
          const splitAboutHeading = SplitText.create(".grid-title h2", {
            type: "words, lines",
          });

          const splitAboutContent = SplitText.create(".grid-title-content p", {
            type: "words, lines",
          });

          const splitHighHeading = SplitText.create(".high-heading p", {
            type: "words, lines",
          });

          const splitServiceSection = SplitText.create(
            ".grid-service-section p",
            {
              type: "words, lines",
            },
          );

          gsap.set(aboutImageBig.current, {
            clipPath: "inset(0% 0% 100% 0)",
            y: 50,
          });

          gsap.set(aboutImageSmall.current, {
            clipPath: "inset(0% 0% 100% 0)",
            y: 50,
          });

          gsap.set(splitAboutHeading.lines, {
            clipPath: "inset(0% 0% 100% 0)",
            y: 50,
          });

          gsap.set(splitAboutContent.lines, {
            clipPath: "inset(0% 0% 100% 0)",
            y: 50,
          });

          gsap.set(splitHighHeading.lines, {
            clipPath: "inset(0% 0% 100% 0)",
            y: 50,
          });

          gsap.set(splitServiceSection.lines, {
            clipPath: "inset(0% 0% 100% 0)",
            y: 50,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: aboutContainerRef.current,
              start: "top 50%",
            },
          });

          tl.to(aboutImageBig.current, {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            ease: "unveil",
            duration: 1,
          })
            .to(
              aboutImageSmall.current,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                ease: "unveil",
                duration: 1,
              },
              "<",
            )
            .to(
              splitAboutHeading.lines,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                ease: "unveil",
                duration: 1,
              },
              "<",
            )
            .to(
              splitServiceSection.lines,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                ease: "unveil",
                duration: 1,
              },
              "<",
            )
            .to(splitAboutContent.lines, {
              clipPath: "inset(0% 0% 0% 0%)",
              y: 0,
              ease: "unveil",
              duration: 1,
            })
            .to(
              splitHighHeading.lines,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                ease: "unveil",
                duration: 1,
              },
              "<",
            );
        });
      });
    },

    { scope: aboutContainerRef },
    [],
  );

  return (
    <>
      <div className="about-container" ref={aboutContainerRef}>
        <SectionHeading heading={"We are Inkspire Studio"} />

        <div className="about-grid">
          <div className="center-section">
            <div className="image-wrapper">
              <div className="right-image" ref={aboutImageBig}>
                <img src={aboutPic1} alt="" />
              </div>
              <div className="left-image" ref={aboutImageSmall}>
                <img src={aboutPic1} alt="" />
              </div>
            </div>
          </div>

          <div className="grid-service-section">
            <div className="grid-service-child">
              <div className="grid-service-heading">
                <p>digial experience</p>
              </div>
              <div className="grid-services">
                <p>Mobile Applications</p>
                <p>Immersive Experience</p>
                <p>Websites & Platforms</p>
                <p>Headless E-commerce</p>
                <p>Product Development</p>
                <p>Installations & Activations</p>
              </div>
            </div>

            <div className="grid-service-child">
              <div className="grid-service-heading">
                <p>Brand Strategy</p>
              </div>
              <div className="grid-services">
                <p>2D & 3D Motion Design</p>
                <p>Brand & Visual Identity</p>
                <p>Product Design (UX & UI)</p>
                <p>Design & Innovation Sprints</p>
                <p>MVP Definition & Prototyping</p>
                <p>Design Systems & Style Guides</p>
              </div>
            </div>
          </div>
          <div className="grid-title">
            <h2>
              {" "}
              We are a forward- thinking creative studio with a passion for
              blending design and technology.{" "}
            </h2>

            <div className="grid-title-content">
              <p>
                {" "}
                Our team of innovators, designers, and developers collaborates
                with global brands to create unforgettable digital experiences.
              </p>

              <p>
                {" "}
                From immersive websites to interactive installations, we
                challenge the status quo to deliver work that is as functional
                as it is beautiful.
              </p>
            </div>

            <div className="high-heading">
              <p>
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
