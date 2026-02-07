import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { serviceWork } from "../constant/index.js";
import "./Service.css";
import { SectionHeading } from "../components/SectionHeading.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

CustomEase.create("hop", "0.85, 0, 0.15, 1");

export function Service() {
  const serviceContainerRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth >= 1024) {
      const sections = gsap.utils.toArray(".service-container");

      sections.forEach((section) => {
        const summaries = section.querySelectorAll(".service-summary");
        const imageWrapperBig = section.querySelectorAll(
          ".service-image-wrapper-top",
        );
        const imageWrapperShort = section.querySelectorAll(
          ".service-image-wrapper-middle",
        );
        const content = section.querySelectorAll(".service-content");
        const videoWrapper = section.querySelectorAll(".service");
        const link = section.querySelectorAll(".link");

        gsap.set(summaries, {
          display: "none",
        });

        gsap.set(imageWrapperBig[0], {
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
        });

        gsap.set(imageWrapperBig[1], {
          xPercent: 50,
          yPercent: 50,
          opacity: 0,
        });

        gsap.set(imageWrapperShort[1], {
          xPercent: 50,
          yPercent: -50,
          opacity: 0,
        });

        gsap.set(imageWrapperShort[0], {
          xPercent: -50,
          yPercent: 50,
          opacity: 0,
        });

        gsap.set(content, {
          opacity: 0,
        });

        gsap.set(link, {
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=" + window.innerHeight * 3,
            scrub: true,
            pin: true,
            scroller: "body",
          },
        });

        tl.to(videoWrapper, {
          height: "80vh",
          width: "26%",
        })
          .to(summaries, {
            display: "flex",
          })
          .to(
            imageWrapperBig[0],
            {
              xPercent: 0,
              yPercent: 0,
              opacity: 1,
            },
            "<",
          )
          .to(
            imageWrapperBig[1],
            {
              xPercent: 0,
              yPercent: 0,
              opacity: 1,
            },
            "<",
          )
          .to(
            imageWrapperShort[1],
            {
              xPercent: 0,
              yPercent: 0,
              opacity: 1,
            },
            "<",
          )
          .to(
            imageWrapperShort[0],
            {
              xPercent: 0,
              yPercent: 0,
              opacity: 1,
            },
            "<",
          )
          .to(content, {
            opacity: 1,
          })
          .to(link, {
            opacity: 1,
          });
      });
    } else {
      const sections = gsap.utils.toArray(".service-container");
      sections.forEach((section) => {
        const summaries = section.querySelectorAll(".service-summary");
        const imageWrapperBig = section.querySelectorAll(
          ".service-image-wrapper-top",
        );
        const imageWrapperShort = section.querySelectorAll(
          ".service-image-wrapper-middle",
        );
        const content = section.querySelectorAll(".service-content");
        const videoWrapper = section.querySelectorAll(".service");

        gsap.set(summaries, {
          display: "none",
        });

        gsap.set(imageWrapperBig[0], {
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
        });

        gsap.set(imageWrapperBig[1], {
          xPercent: 50,
          yPercent: 50,
          opacity: 0,
        });

        gsap.set(imageWrapperShort[1], {
          xPercent: 50,
          yPercent: -50,
          opacity: 0,
        });

        gsap.set(imageWrapperShort[0], {
          xPercent: -50,
          yPercent: 50,
          opacity: 0,
        });

        gsap.set(content, {
          opacity: 0,
        });
      });
    }
  }, []);
  return (
    <>
      {serviceWork.map((work, i) => (
        <div key={i} className="service-container" ref={serviceContainerRef}>
          {work.heading && <SectionHeading heading={work.heading} />}
          <div className="brand-heading">
            {work.brandHeading && <p>{work.brandHeading}</p>}
          </div>

          <div key={i} className="service-section">
            <div className="service-summary">
              <div className="service-content">
                <p>{work.workSummary}</p>
              </div>
              <div className="service-image-wrapper-top">
                <img src={work.image[0]} alt="" />
              </div>
              <div className="service-image-wrapper-middle">
                <img src={work.image[3]} alt="" />
              </div>
            </div>
            <div className="service">
              <video
                playsInline
                autoPlay
                loop
                muted
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = work.speed || 1;
                }}
                src={work.video}
              ></video>
              <div className="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </div>
            </div>
            <div className="service-summary">
              <div className="service-image-wrapper-middle">
                <img src={work.image[1]} alt="" />
              </div>
              <div className="service-image-wrapper-top">
                <img src={work.image[2]} alt="" />
              </div>
              <div className="service-content">
                <div className="text-container">
                  {work.serves.map((serve, i) => (
                    <p key={i}>{serve}</p>
                  ))}
                </div>
                <div className="text-container">
                  {work.servesMore.map((serveMore, i) => (
                    <p key={i}>{serveMore}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
