import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { CustomEase } from "gsap/CustomEase";
import { ourExports } from "../constant/index.js";
import { imagesArray } from "../constant/index.js";
import imageCompo from "../assets/pic/hero-pic-2.jpeg";
import imageCompoMore from "../assets/pic/hero-pic-1.jpeg";
import "./Agency.css";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

CustomEase.create("bpEase", "M0,0 C0.25,0.1 0.35,1 1,1");

export function ImageComp({ img }) {
  return (
    <span className="component-image">
      <img src={img} alt="" />
    </span>
  );
}

function Video() {
  return (
    <video
      className="player"
      src="https://player.vimeo.com/progressive_redirect/playback/1137650282/rendition/2160p/file.mp4?loc=external&oauth2_token_id=1784145188&signature=76807a4aa2430afde498ae2863799fdbdde69521eb4d98abb7c5311c6e3c2ed8"
    ></video>
  );
}

export function Agency() {
  const clientsContainerRef = useRef(null);
  const galleryGridRef = useRef(null);
  const imageRef = useRef([]);
  const bookingLinkRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const content = imagesArray[activeIndex];

  useGSAP(() => {
    const grid = galleryGridRef.current;
    const container = clientsContainerRef.current;
    const images = grid.querySelectorAll("img");

    const getGridHeight = () => {
      const lastImage = images[images.length - 1];

      const lastImageBottom = lastImage.offsetTop + lastImage.offsetHeight;

      const { innerHeight } = window;

      const scrollAvailable = lastImageBottom - innerHeight;

      return scrollAvailable;
    };

    gsap.to(grid, {
      y: () => -getGridHeight(),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${getGridHeight()}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.set(".client-work", {
      opacity: 0,
      scale: 0.95,
    });

    const mouseOver = (i) => {
      gsap.set(".client-work", {
        opacity: 1,
        scale: 1,
      });
      setActiveIndex(i);
    };

    const mouseLeave = () => {
      gsap.set(".client-work", {
        opacity: 0,
      });
    };

    imageRef.current.forEach((img, i) => {
      img.addEventListener("mouseover", () => mouseOver(i));
      img.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      imageRef.current.forEach((img, i) => {
        img.removeEventListener("mouseover", mouseOver);
        img.removeEventListener("mouseleave", mouseLeave);
      });
    };

    ScrollTrigger.refresh();
  }, []);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitHeading = SplitText.create(".agency-section h1", {
        type: "lines, words",
      });

      const splitMessageHeading = SplitText.create(".message-heading", {
        type: "lines, words",
      });

      const splitOurMessage = SplitText.create(".our-message-child p", {
        type: "lines, words",
      });

      const splitCeoMessage = SplitText.create(".ceo-message-child p", {
        type: "lines, words",
      });

      const splitHeadingContainer = SplitText.create(".heading-container h1", {
        type: "lines, words",
      });

      gsap.set(splitHeading.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      });

      gsap.set(splitMessageHeading.lines, {
        opacity: 0,
      });

      gsap.set(splitOurMessage.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      });

      gsap.set(splitCeoMessage.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      });

      gsap.set(splitHeadingContainer.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      });

      gsap.to(splitHeading.lines, {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 1,
        ease: "bpEase",
      });

      gsap.to(splitMessageHeading.lines, {
        opacity: 1,
        duration: 1,
      });

      gsap.to(splitOurMessage.lines, {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 2,
        ease: "bpEase",
        scrollTrigger: {
          trigger: ".our-message-child",
          start: "top 75%",
        },
      });

      gsap.to(splitCeoMessage.lines, {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 2,
        ease: "bpEase",
        scrollTrigger: {
          trigger: ".ceo-message-child",
          start: "top 75%",
        },
      });

      gsap.to(splitHeadingContainer.lines, {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 1,
        ease: "bpEase",
        scrollTrigger: {
          trigger: ".heading-container",
          start: "top 75%",
        },
      });

      const section = gsap.utils.toArray(".export-types");

      section.forEach((sec) => {
        const count = sec.querySelectorAll(".export-count");

        const exportContentHeading = sec.querySelectorAll(".export-content h1");

        const exportContentPara = sec.querySelectorAll(".export-content p");

        const weProvide = sec.querySelectorAll(".we-provide");

        const splitExportHeading = SplitText.create(exportContentHeading, {
          type: "lines, words",
        });

        const splitExportPara = SplitText.create(exportContentPara, {
          type: "lines, words",
        });

        gsap.set(count, {
          clipPath: "inset(0% 0% 100% 0%)",
          yPercent: 100,
        });

        gsap.set(splitExportHeading.lines, {
          clipPath: "inset(0% 0% 100% 0%)",
          yPercent: 100,
        });

        gsap.set(splitExportPara.lines, {
          clipPath: "inset(0% 0% 100% 0%)",
          yPercent: 100,
        });

        gsap.set(weProvide, {
          clipPath: "inset(0% 0% 100% 0%)",
          yPercent: 100,
        });

        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: "top 75%",
          },
        });

        t2.to(count, {
          clipPath: "inset(0% 0% 0% 0%)",
          yPercent: 0,
          ease: "bpEase",
          // duration: 1,
        })
          .to(splitExportHeading.lines, {
            clipPath: "inset(0% 0% 0% 0%)",
            yPercent: 0,
            ease: "bpEase",
            // duration: 1,
          })
          .to(splitExportPara.lines, {
            clipPath: "inset(0% 0% 0% 0%)",
            yPercent: 0,
            ease: "bpEase",
            // duration: 1,
          })
          .to(
            weProvide,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              yPercent: 0,
              ease: "bpEase",
              // duration: 1,
            },
            "<",
          );
      });
    });
  });

  useGSAP(() => {
    const bookingLinkElem = bookingLinkRef.current;

    gsap.set(".booking-content", {
      clipPath: "inset(0% 0% 100% 0%)",
      y: -20,
    });

    gsap.set(".booking-arrow-svg", {
      rotate: "-45deg",
      opacity: 0,
    });

    gsap.set(".riser", {
      height: "10%",
      width: "10%",
    });

    const tl = gsap.timeline();

    const mouseOver = () => {
      tl.to(".riser", {
        height: "90%",
        width: "90%",
        ease: "power3.inOut",
      })
        .to(".booking-content", {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
        })
        .to(
          ".booking-arrow-svg",
          {
            opacity: 1,
          },
          "<",
        );
    };

    const mouseLeave = () => {
      gsap.to(".riser", {
        height: "10%",
        width: "10%",
        ease: "power1.inOut",
      });

      gsap.to(".booking-content", {
        clipPath: "inset(0% 0% 100% 0%)",
        y: -20,
      });

      gsap.to(".booking-arrow-svg", {
        opacity: 0,
      });
    };

    bookingLinkElem.addEventListener("mouseover", mouseOver);
    bookingLinkElem.addEventListener("mouseleave", mouseLeave);
  });

  return (
    <>
      <title>THE INKSPIRE STUDIO | AGENCY</title>
      <div className="agency-container">
        <div className="agency-section">
          <h1>Partnership on demand.</h1>
        </div>
        <div className="our-message-container">
          <p className="message-heading">Dear Future Partner</p>

          <div className="our-message-child">
            <p>
              The most <ImageComp img={imageCompo} /> meaningful brands are
              built through moments that connect. We create experiences your
              customers remember — and partnerships that actually move the
              needle.
            </p>
          </div>

          <div className="our-message-child">
            <p>
              That belief drives everything we do at Inkspire Studio{" "}
              <ImageComp img={imageCompoMore} /> helping ambitious teams design,
              build, and launch digital products that shape what’s next.
            </p>
          </div>
        </div>
        <div className="booking-container">
          <div className="booking-container-child">
            <div className="booking-content">
              book a discovery call help us catch your vision.
            </div>
            <div className="booking-link" ref={bookingLinkRef}>
              <div className="riser">
                <svg
                  className="booking-arrow-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="black"
                  viewBox="0 0 15 15"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </div>
            </div>
          </div>
          <video
            autoPlay
            playsInline
            loop
            muted
            src="https://player.vimeo.com/progressive_redirect/playback/1137650282/rendition/2160p/file.mp4?loc=external&oauth2_token_id=1784145188&signature=76807a4aa2430afde498ae2863799fdbdde69521eb4d98abb7c5311c6e3c2ed8"
          ></video>
        </div>
        <div className="ceo-message-container">
          <div className="ceo-message-child">
            <p>
              “With the advocacy of a committed innovation partner, you’re free
              to envision a world that doesn’t yet exist—then we’ll build it.”
            </p>
          </div>
          <div className="ceo-profile">
            <div className="image-wrapper">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <p>RITIK SINGH, CEO</p>
          </div>
        </div>

        {/* <div className="our-exports-container">
          <div className="heading-container">
            <ul>
              <li>OUR CHEIF EXPORTS</li>
            </ul>
          </div>

          {ourExports.map((ourExport, i) => (
            <div key={i} className="export-types">
              <div className="export-count">
                <p>{ourExport.exportCount}</p>
              </div>

              <div className="export-grid">
                <div className="export-grid-child">
                  <div className="export-content">
                    <h1>{ourExport.exportType}</h1>
                    <p>{ourExport.exportContent}</p>
                  </div>
                </div>
                <div className="export-grid-child">
                  <div className="we-provide-container">
                    <div className="we-provide">{ourExport.weProvide[0]}</div>
                    <div className="we-provide">{ourExport.weProvide[1]}</div>
                  </div>
                  <div className="we-provide-container">
                    <div className="we-provide">{ourExport.weProvide[2]}</div>
                    <div className="we-provide">{ourExport.weProvide[3]}</div>
                  </div>
                  <div className="we-provide-container">
                    <div className="we-provide">{ourExport.weProvide[4]}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="our-exports-container">
          <div className="heading-container">
            <SectionHeading heading={"our cheif exports"} />

            {/* <h1>OUR CHEIF EXPORTS</h1> */}
          </div>

          <div className="export-types">
            <div className="export-grid">
              <div className="export-grid-child">
                <div className="export-content">
                  <h1>01</h1>
                </div>
              </div>
              <div className="export-grid-child">
                <div className="planning-container">
                  <p>Strategic Planning</p>
                  <p>
                    Great outcomes start with us codifying what you do, how and
                    why you do it, and where growth can occur. We work to answer
                    these questions through interviews, workshops, and other
                    discovery exercises across Brand, Business, and Tech.
                  </p>
                </div>
                {/* <div className="we-provide-container">
                  <div className="we-provide">Lorem</div>
                  <div className="we-provide">Lorem</div>
                </div>
                <div className="we-provide-container">
                  <div className="we-provide">Lorem</div>
                  <div className="we-provide">Lorem</div>
                </div>
                <div className="we-provide-container">
                  <div className="we-provide">Lorem</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="clients-container" ref={clientsContainerRef}>
          <h1 className="agency-heading">Our Clients</h1>
          <div className="clients-work-grid">
            <div className="clients-work-child">
              <div className="client-work">
                <h3>{content.agency}</h3>
                <h1>{content.name}</h1>
                <p>{content.work}</p>
              </div>
            </div>
            <div className="clients-work-child">
              <div className="gallery-grid" ref={galleryGridRef}>
                {imagesArray.map((img, i) => (
                  <img
                    ref={(el) => (imageRef.current[i] = el)}
                    // onMouseOver={() => {
                    //   setActiveIndex(i);
                    // }}
                    src={img.image}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
