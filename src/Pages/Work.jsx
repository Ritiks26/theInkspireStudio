import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";
import { workData } from "../constant";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export function Work() {
  const [toggleProject, setToggleProject] = useState(false);
  const expandProjectRef = useRef(null);
  const projectSummaryRef = useRef(null);
  const t1Ref = useRef(null);

  // useGSAP(() => {
  //   const projectContainer = gsap.utils.toArray(".project-container");

  //   projectContainer.forEach((container, i) => {
  //     const viewSummary = container.querySelectorAll(".expand-project");

  //     const summaryContainer = container.querySelectorAll(".project-summary");

  //     const summaryProjectText =
  //       container.querySelectorAll(".project-summary p");

  //     document.fonts.ready.then(() => {
  //       const splitHeroText = SplitText.create(".work-hero p", {
  //         type: "chars, lines",
  //       });

  //       const splitSummary = SplitText.create(summaryProjectText, {
  //         type: "chars, lines",
  //       });

  //       gsap.set(splitHeroText.lines, {
  //         clipPath: "inset(0% 0% 100% 0%)",
  //         y: 20,
  //       });

  //       gsap.set(".project-container", {
  //         opacity: 0,
  //         y: 20,
  //       });

  //       gsap.set(summaryContainer, {
  //         height: "80px",
  //         width: "80px",
  //         opacity: 0,
  //       });

  //       gsap.set(splitSummary.lines, {
  //         display: "none",
  //         clipPath: "inset(0% 0% 100% 0%)",
  //         y: 20,
  //       });

  //       const tl = gsap.timeline({
  //         delay: 0.75,
  //       });

  //       tl.to(splitHeroText.lines, {
  //         clipPath: "inset(0% 0% 0% 0%)",
  //         y: 0,
  //         duration: 1.5,
  //         ease: "power3.inOut",
  //       }).to(projectContainer, {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.75,
  //         ease: "power3.inOut",
  //       });

  //       t1Ref.current = gsap.timeline({ paused: true });

  //       t1Ref.current
  //         .to(viewSummary, {
  //           rotate: 45,
  //           duration: 1,
  //           ease: "power1.inOut",
  //         })
  //         .to(
  //           summaryContainer,
  //           {
  //             height: "50vh",
  //             width: "100%",
  //             opacity: 1,
  //             duration: 1,
  //             ease: "power1.inOut",
  //           },
  //           "<",
  //         )
  //         .to(splitSummary.lines, {
  //           display: "block",
  //           clipPath: "inset(0% 0% 0% 0%)",
  //           y: 0,
  //         });
  //     });
  //   });
  // }, []);

  useGSAP(() => {
    const projectContainer = gsap.utils.toArray(".project-container");

    projectContainer.forEach((container, i) => {
      const viewSummary = container.querySelectorAll(".expand-project");

      const summaryContainer = container.querySelectorAll(".project-summary");

      const summaryProjectText =
        container.querySelectorAll(".project-summary p");

      document.fonts.ready.then(() => {
        const splitHeroText = SplitText.create(".work-hero p", {
          type: "chars, lines",
        });

        const splitSummary = SplitText.create(summaryProjectText, {
          type: "chars, lines",
        });

        gsap.set(splitHeroText.lines, {
          clipPath: "inset(0% 0% 100% 0%)",
          y: 20,
        });

        gsap.set(".project-container", {
          opacity: 0,
          y: 20,
        });

        gsap.set(summaryContainer, {
          height: "80px",
          width: "80px",
          opacity: 0,
        });

        gsap.set(splitSummary.lines, {
          display: "none",
          clipPath: "inset(0% 0% 100% 0%)",
          y: 20,
        });

        const tl = gsap.timeline({
          delay: 0.75,
        });

        tl.to(splitHeroText.lines, {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1.5,
          ease: "power3.inOut",
        }).to(projectContainer, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.inOut",
        });

        t1Ref.current = gsap.timeline({ paused: true });

        t1Ref.current
          .to(viewSummary, {
            rotate: 45,
            duration: 1,
            ease: "power1.inOut",
          })
          .to(
            summaryContainer,
            {
              height: "50vh",
              width: "100%",
              opacity: 1,
              duration: 1,
              ease: "power1.inOut",
            },
            "<",
          )
          .to(splitSummary.lines, {
            display: "block",
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
          });
      });
    });
  }, []);

  useGSAP(() => {
    if (!t1Ref.current) return;
    toggleProject ? t1Ref.current.play() : t1Ref.current.reverse();
  }, [toggleProject]);

  return (
    <>
      <title>THE INKSPIRE STUDIO | WORK</title>
      <div className="work-container">
        <div className="work-hero">
          <p>
            A curated selection of projects exploring branding, UI/UX, motion,
            and web experiences — built with strategy, creativity, and attention
            to detail. Each project solves real problems beautifully.
          </p>
          <p>Open for new projects.</p>
        </div>
        {workData.map((work) => (
          <div className="project-container">
            <h1>
              {work.projectName}{" "}
              <span style={{ color: "gray" }}>, {work.year}</span>
              <span
                className="expand-project"
                ref={expandProjectRef}
                onClick={() => setToggleProject(!toggleProject)}
              >
                +
              </span>
            </h1>
            <div className="project-grid">
              <div className="project-summary" ref={projectSummaryRef}>
                <p>{work.projectSummary}</p>
              </div>
              <div className="project-grid-child">
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  src={work.video[0]}
                ></video>
              </div>
              <div className="project-grid-child"></div>
              <div className="project-grid-child">
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  src={work.video[1]}
                ></video>
              </div>
              <div className="project-grid-child"></div>
              <div className="project-grid-child"></div>
              <div className="project-grid-child"></div>
              <div className="project-grid-child">
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  src={work.video[2]}
                ></video>
              </div>
              <div className="project-grid-child">
                <video
                  playsInline
                  muted
                  loop
                  autoPlay
                  src={work.video[3]}
                ></video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
