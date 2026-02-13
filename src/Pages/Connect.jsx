import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { address } from "../constant";
import "./Connect.css";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Connect() {
  const [indiaTIme, setIndiaTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setIndiaTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (timeZone, locale) =>
    indiaTIme.toLocaleTimeString(locale, {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: timeZone,
    });
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitHeading = SplitText.create(".connect-section h1", {
        type: "lines, words, chars",
      });

      const tl = gsap.timeline({ delay: 0.75 });

      gsap.set(splitHeading.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        y: "40",
      });

      gsap.set(".enquiry-address-grid", {
        opacity: 0,
      });

      tl.to(splitHeading.lines, {
        clipPath: "inset(0% 0% 0% 0%)",
        y: "0",
        duration: 1,
        ease: "power4.inOut",
      }).to(".enquiry-address-grid", {
        opacity: 1,
      });
    });
  });

  return (
    <>
      <div className="connect-container">
        <div className="connect-section">
          <h1>Ready to build?</h1>
          <h1>Lets get to work.</h1>
        </div>

        <div className="contact-container">
          {address.map((location) => (
            <div className="enquiry-address-grid">
              <div className="map-location">
                <img src={location.map} alt="" />
              </div>

              <div className="contact">
                <div className="contact-child">
                  <div className="country">
                    <h1>{location.country}</h1>
                  </div>
                  <div className="office-address">
                    <p>{location.officeAddress}</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="current-time">
                    <p className="time-heading">local time</p>

                    <p className="time">{format(location.timeZone)}</p>
                  </div>

                  <div className="contact-mail">
                    <p className="mail-heading">EMAIL</p>
                    <p className="mail">{location.email}</p>
                  </div>

                  <div className="contact-number">
                    <p className="number-heading">Phone</p>

                    <div className="number">{location.phone}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
