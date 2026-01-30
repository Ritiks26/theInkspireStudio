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
      // stagger: 0.15,
    }).to(
      odd,
      {
        height: "80%",
        // stagger: 0.15,
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
            <div className="sample-font">
              <p>almarena</p>
              <h1>Aa</h1>
              <p className="alphabet">
                Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
                Ww Xx Yy Zz
              </p>
            </div>

            <div className="design-container-child">
              {" "}
              <div className="sample-font-others">
                <div className="general-sans">
                  <p>general sans</p>
                  <h1>Aa</h1>
                  <p className="all-char">
                    Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                    Vv Ww Xx Yy Zz
                  </p>
                </div>
                <div className="satoshi-font">
                  <p>satoshi</p>
                  <h1>Aa</h1>
                  <p className="all-char">
                    Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                    Vv Ww Xx Yy Zz
                  </p>
                </div>
              </div>
              <div className="content">
                <p>
                  The palette of yellow, whitesmoke, and soft neutrals creates a
                  bold yet balanced identity yellow adds energy and focus, while
                  whitesmoke and light tones bring clarity, softness, and a
                  premium, minimal feel.
                </p>
              </div>
              <div className="color-container">
                <div className="font-color-palatte">
                  <div
                    className="yellow"
                    onClick={() => navigator.clipboard.writeText("#ffb700")}
                  >
                    <p>#ffb700</p>
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
