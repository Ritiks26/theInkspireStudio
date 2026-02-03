import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./NotFound.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function NotFound() {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitMessage = SplitText.create(".error-message h1", {
        type: "lines",
      });

      const splitLines = SplitText.create(".error-message p", {
        type: "lines",
      });

      gsap.set(splitMessage.lines, {
        clipPath: "inset(100% 0% 0% 0)",
        y: 20,
      });

      gsap.set(splitLines.lines, {
        clipPath: "inset(100% 0% 0% 0)",
        y: 20,
      });

      gsap.set(".home-link", {
        opacity: 0,
      });

      const tl = gsap.timeline({});

      tl.to(splitMessage.lines, {
        clipPath: "inset(0% 0% 0% 0)",
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      })
        .to(splitLines.lines, {
          clipPath: "inset(0% 0% 0% 0)",
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(".home-link", {
          opacity: 1,
          ease: "power2.inOut",
        });
    });
  }, []);
  return (
    <>
      <div className="not-found-container">
        <div className="not-found-child">
          <div className="error-message">
            <h1>404</h1>
            <p>
              indicates that the browser was able to communicate with the
              server, but the server could not find the requested resource.
            </p>
          </div>

          <Link className="home-link" to="/">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </>
  );
}
