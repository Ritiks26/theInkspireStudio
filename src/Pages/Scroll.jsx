import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Scroll.css";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Scroll() {
  const containerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className="container" ref={containerRef}>
        <div className="container-child">
          <h1>WORK</h1>
        </div>
      </div>
    </>
  );
}
