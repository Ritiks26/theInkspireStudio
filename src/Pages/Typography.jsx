import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Typography.css";

export function Typography() {
  useGSAP(() => {
    const odd = gsap.utils.toArray(".odd");
    const even = gsap.utils.toArray(".even");

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 1,
        ease: "power1.inOut",
      },
    });

    tl.to(even, {
      height: "100%",
    }).to(
      odd,
      {
        height: "80%",
      },
      "<",
    );
  });

  return (
    <>
      <div className="typography-container">
        <div className="effect-container">
          <div className="background odd"></div>
          <div className="background even"></div>
          <div className="background odd"></div>
          <div className="background even"></div>
          <div className="background odd"></div>
          <div className="background even"></div>
          <div className="background odd"></div>
          <div className="background even"></div>
          <div className="background odd"></div>
          <div className="background even"></div>
        </div>
        <div className="content-container">
          <h1 className="typography-heading">typography & colors</h1>

          <div className="design-container-grid">
            <div className="container">
              <div className="sample-font">
                <h1>Aa</h1>
              </div>
              <p>clash display</p>
            </div>

            <div className="design-container-child">
              {" "}
              <div className="color-container">
                <div className="font-color-palatte">
                  <div
                    className="yellow"
                    onClick={() => navigator.clipboard.writeText("#000")}
                  >
                    <p>#000</p>
                  </div>
                  <div
                    className="whitesmoke"
                    onClick={() => navigator.clipboard.writeText("whitesmoke")}
                  >
                    <p>whitesmoke</p>
                  </div>
                </div>
                <div className="font-color-palatte">
                  <div
                    className="mate-black"
                    onClick={() => navigator.clipboard.writeText("#333")}
                  >
                    <p>#333</p>
                  </div>
                  <div
                    className="lightgray"
                    onClick={() => navigator.clipboard.writeText("lightgray")}
                  >
                    <p>lightgray</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
