import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

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
    });
  }, []);

  useGSAP(() => {
    gsap.set(".project-summary p", {
      opacity: 0,
      y: 20,
    });

    const t1 = gsap.timeline();

    t1.to(expandProjectRef.current, {
      rotate: toggleProject ? 45 : 0,
      duration: 1,
      ease: "power2.out",
    })
      .to(projectSummaryRef.current, {
        height: toggleProject ? "35vh" : "5vh",
        width: toggleProject ? "100%" : "5%",
        opacity: toggleProject ? 1 : 0,
        duration: 2,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.095,0.027 0.39,-0.028 0.432,0.04 0.723,0.516 0.486,1 1,1 ",
        ),
      })
      .to(
        ".project-summary p",
        {
          delay: 2,
          opacity: 1,
          duration: 1,
          y: 0,
          ease: "power3.in",
        },
        "<",
      );
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
        <div className="project-container">
          <h1>
            Polestar, <span style={{ color: "gray" }}>4, 2025</span>
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
              <p>
                The Polestar series of electric cars is a Scandinavian piece of
                art. While websites these days are more or less similar, I
                wanted to experiment and create a user experience design and
                visuals using CGI with Unreal Engine power, especially for
                online car configurator.
              </p>
            </div>
            <div className="project-grid-child">
              <video
                playsInline
                autoPlay
                muted
                loop
                src="https://framerusercontent.com/assets/Qrk0elN6Z8hA6jP8kW616C0MCWA.mp4"
              ></video>
            </div>
            <div className="project-grid-child"></div>
            <div className="project-grid-child">
              <video
                playsInline
                autoPlay
                muted
                loop
                src="https://framerusercontent.com/assets/a3xJFwdaGBP75olNxNm9TZYbU.mp4"
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
                src="https://framerusercontent.com/assets/MkDejLa7j6VLm8cU771sJWNj0.mp4"
              ></video>
            </div>
            <div className="project-grid-child">
              <video
                playsInline
                muted
                loop
                autoPlay
                src="https://framerusercontent.com/assets/HSSFbHDNoC0IX39CvBoEVwMYk.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
