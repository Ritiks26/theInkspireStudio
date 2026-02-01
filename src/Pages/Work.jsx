import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useRef, useState } from "react";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Work() {
  const [toggleProject, setToggleProject] = useState(false);
  const expandProjectRef = useRef(null);
  const projectSummaryRef = useRef(null);
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitHeroText = SplitText.create(".work-hero p", {
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

      gsap.set(projectSummaryRef.current, {
        height: "5vh",
        width: "5%",
        opacity: 0,
      });

      const tl = gsap.timeline({
        delay: 0.75,
      });

      tl.to(splitHeroText.lines, {
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1.5,
        ease: "power3.inOut",
      }).to(".project-container", {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.inOut",
      });

      const projectSummary = expandProjectRef.current;

      const t1 = gsap.timeline({ delay: 3 });

      t1.to(projectSummaryRef.current, {
        opacity: 1,
        height: "25vh",
        width: "100%",
        duration: 2,

        ease: "power3.inOut",
      })
        .to(projectSummaryRef.current, {
          opacity: 1,
          height: "5vh",
          width: "5%",
          duration: 2,
          ease: "power3.inOut",
        })
        .to(projectSummaryRef.current, {
          opacity: 0,
        });

      const handleUpdateToggle = () => {
        setToggleProject(!toggleProject);
        gsap.to(projectSummary, {
          rotate: toggleProject ? 0 : 45,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      projectSummary.addEventListener("click", handleUpdateToggle);
    });
  }, []);
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
        <div className="project-container">
          <h1>
            lightship, <span style={{ color: "gray" }}>batteries, 2025</span>
            <span className="expand-project" ref={expandProjectRef}>
              +
            </span>
          </h1>
          <div className="project-grid">
            <div className="project-summary" ref={projectSummaryRef}>
              <p>
                The Polestar series of electric cars is a Scandinavian piece of
                art. While websites these days are more or less similar, I
                wanted to experiment and create a user experience design and
                visuals using CGI with Unreal Engine power, especially for
                online car configurator.
              </p>
            </div>
            <div className="project-grid-child"></div>
            <div className="project-grid-child"></div>
            <div className="project-grid-child"></div>
            <div className="project-grid-child"></div>
            <div className="project-grid-child"></div>
            <div className="project-grid-child"></div>
            <div className="project-grid-child"></div>
            <div className="project-grid-child"></div>
          </div>
        </div>
      </div>
    </>
  );
}
