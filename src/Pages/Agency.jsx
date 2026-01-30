import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { ourExports } from "../constant/index.js";
import { imagesArray } from "../constant/index.js";
import "./Agency.css";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

CustomEase.create("bpEase", "M0,0 C0.25,0.1 0.35,1 1,1");

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
  }, []);

  // useGSAP(() => {
  //   document.fonts.ready.then(() => {
  //     const splitHeading = SplitText.create(".agency-section h1", {
  //       type: "lines, words",
  //     });

  //     const splitMessageHeading = SplitText.create(".message-heading", {
  //       type: "lines, words",
  //     });

  //     const splitOurMessage = SplitText.create(".our-message-child p", {
  //       type: "lines, words",
  //     });

  //     const splitCeoMessage = SplitText.create(".ceo-message-child p", {
  //       type: "lines, words",
  //     });

  //     const splitHeadingContainer = SplitText.create(".heading-container h1", {
  //       type: "lines, words",
  //     });

  //     gsap.set(splitHeading.lines, {
  //       clipPath: "inset(0% 0% 100% 0%)",
  //       yPercent: 100,
  //     });

  //     gsap.set(splitMessageHeading.lines, {
  //       opacity: 0,
  //     });

  //     gsap.set(splitOurMessage.lines, {
  //       clipPath: "inset(0% 0% 100% 0%)",
  //       yPercent: 100,
  //     });

  //     gsap.set(splitCeoMessage.lines, {
  //       clipPath: "inset(0% 0% 100% 0%)",
  //       yPercent: 100,
  //     });

  //     gsap.set(splitHeadingContainer.lines, {
  //       clipPath: "inset(0% 0% 100% 0%)",
  //       yPercent: 100,
  //     });

  //     gsap.to(splitHeading.lines, {
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       yPercent: 0,
  //       duration: 1,
  //       ease: "bpEase",
  //     });

  //     gsap.to(splitMessageHeading.lines, {
  //       opacity: 1,
  //       duration: 1,
  //     });

  //     gsap.to(splitOurMessage.lines, {
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       yPercent: 0,
  //       duration: 2,
  //       ease: "bpEase",
  //       scrollTrigger: {
  //         trigger: ".our-message-child",
  //         start: "top 75%",
  //       },
  //     });

  //     gsap.to(splitCeoMessage.lines, {
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       yPercent: 0,
  //       duration: 2,
  //       ease: "bpEase",
  //       scrollTrigger: {
  //         trigger: ".ceo-message-child",
  //         start: "top 75%",
  //       },
  //     });

  //     gsap.to(splitHeadingContainer.lines, {
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       yPercent: 0,
  //       duration: 1,
  //       ease: "bpEase",
  //       scrollTrigger: {
  //         trigger: ".heading-container",
  //         start: "top 75%",
  //       },
  //     });

  //     const section = gsap.utils.toArray(".export-types");

  //     section.forEach((sec) => {
  //       const count = sec.querySelectorAll(".export-count");

  //       const exportContentHeading = sec.querySelectorAll(".export-content h1");

  //       const exportContentPara = sec.querySelectorAll(".export-content p");

  //       const weProvide = sec.querySelectorAll(".we-provide");

  //       const splitExportHeading = SplitText.create(exportContentHeading, {
  //         type: "lines, words",
  //       });

  //       const splitExportPara = SplitText.create(exportContentPara, {
  //         type: "lines, words",
  //       });

  //       gsap.set(count, {
  //         clipPath: "inset(0% 0% 100% 0%)",
  //         yPercent: 100,
  //       });

  //       gsap.set(splitExportHeading.lines, {
  //         clipPath: "inset(0% 0% 100% 0%)",
  //         yPercent: 100,
  //       });

  //       gsap.set(splitExportPara.lines, {
  //         clipPath: "inset(0% 0% 100% 0%)",
  //         yPercent: 100,
  //       });

  //       gsap.set(weProvide, {
  //         clipPath: "inset(0% 0% 100% 0%)",
  //         yPercent: 100,
  //       });

  //       const t2 = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: sec,
  //           start: "top 75%",
  //         },
  //       });

  //       t2.to(count, {
  //         clipPath: "inset(0% 0% 0% 0%)",
  //         yPercent: 0,
  //         ease: "bpEase",
  //         // duration: 1,
  //       })
  //         .to(splitExportHeading.lines, {
  //           clipPath: "inset(0% 0% 0% 0%)",
  //           yPercent: 0,
  //           ease: "bpEase",
  //           // duration: 1,
  //         })
  //         .to(splitExportPara.lines, {
  //           clipPath: "inset(0% 0% 0% 0%)",
  //           yPercent: 0,
  //           ease: "bpEase",
  //           // duration: 1,
  //         })
  //         .to(
  //           weProvide,
  //           {
  //             clipPath: "inset(0% 0% 0% 0%)",
  //             yPercent: 0,
  //             ease: "bpEase",
  //             // duration: 1,
  //           },
  //           "<",
  //         );
  //     });
  //   });
  // });

  useGSAP(() => {
    const bookingLinkElem = bookingLinkRef.current;

    gsap.set(".booking-content", {
      clipPath: "inset(0% 0% 100% 0%)",
      y: -20,
    });

    const mouseOver = () => {
      gsap.to(bookingLinkElem, {
        rotate: "-43deg",
        ease: "power4.inOut",
      });

      gsap.to(".booking-content", {
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
      });
    };

    const mouseLeave = () => {
      gsap.to(bookingLinkElem, {
        rotate: "0deg",
        ease: "power4.inOut",
      });

      gsap.to(".booking-content", {
        clipPath: "inset(0% 0% 100% 0%)",
        y: -20,
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
              There’s nothing more powerful than shared experiences. This is as
              true for your customers as it is for the two of us (client and
              agency).
            </p>
          </div>

          <div className="our-message-child">
            <p>
              It’s this belief that gives Brave People® our singular focus: to
              help you deliver connective digital experiences that shape the
              future.
            </p>
          </div>
        </div>
        <div className="booking-container">
          <div className="booking-container-child">
            <div className="booking-content">
              book a discovery call help us catch your vision.
            </div>
            <div className="booking-link" ref={bookingLinkRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="white"
                viewBox="0 0 15 15"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
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
                src="https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-1/328672659_5237753422923528_3169921531053986192_n.jpg?stp=c0.27.890.889a_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=_1gLluJ-msoQ7kNvwHmrRtc&_nc_oc=Adkit_TtY5Xs3elJPz7jM4DuTy7DCz8NVB5Zbc8MFI2fgP9B7yBFDtPINRNQz_UenAg&_nc_zt=24&_nc_ht=scontent-del2-3.xx&_nc_gid=V1HvnVMZZrX0UQt4-zCRgg&oh=00_AfqoDwQs5prTHesV4YlCOQaOoxxJdIo5iohM4v65jruR0A&oe=6976DCE6"
                alt=""
              />
            </div>
            <p>RITIK SINGH, CEO</p>
          </div>
        </div>

        <div className="our-exports-container">
          <div className="heading-container">
            <h1>OUR CHEIF EXPORTS</h1>
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
