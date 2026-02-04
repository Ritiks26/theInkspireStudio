import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export function HeroSection() {
  const heroImageRef = useRef(null);
  const counterRef = useRef(null);
  const hasPlayed = useRef(sessionStorage.getItem("hero"));

  CustomEase.create("hop", "0.85, 0, 0.15, 1");

  useGSAP(() => {
    const img = heroImageRef.current;

    if (hasPlayed.current) {
      gsap.set(".hero-overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        display: "none",
      });

      return;
    }

    hasPlayed.current = true;
    sessionStorage.setItem("hero", "true");

    document.fonts.ready.then(() => {
      const splitText = SplitText.create(".hero-content p", {
        type: "chars, words",
        wordsClass: "split-char",
      });

      const splitHeading = SplitText.create(".hero-content h1", {
        type: "chars, words, lines",
        wordsClass: "split-char",
      });

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

      gsap.set(img, {
        clipPath: "inset(0% 0% 100% 0%)",
        scale: 1.15,
      });

      gsap.set(splitText.words, {
        clipPath: "inset(0% 0% 100% 0%)",
        y: 10,
      });

      gsap.set(splitHeading.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        y: 20,
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
        .to(splitText.words, {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          ease: "power1.inOut",
        })
        .to(splitHeading.lines, {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          ease: "power1.inOut",
        })
        .to(img, {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1,
          ease: "hop",
        });
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
            <div className="image-container" ref={heroImageRef}>
              <img
                src="https://assets.lummi.ai/assets/QmZGJ5T3y7LGmhW8QEgwWYjym6cKptrjaXqvPgWagPuH7n?auto=format&w=640"
                alt=""
              />
            </div>
            <p>WE ARE</p>
            <h1>GLOBAL</h1>
            <h1>CREATIVE STUDIO</h1>
          </div>
        </div>
      </div>
    </>
  );
}
