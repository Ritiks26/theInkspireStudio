// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/all";
// import { NavLink } from "react-router";
// import { navMenus } from "../constant";
// import "./Header.css";

// export function Header() {
//   useGSAP(() => {
//     const nav = gsap.timeline();

//     nav.fromTo(
//       "li",
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 1,
//         stagger: 0.045,
//         ease: "power1.inOut",
//       }
//     );

//     gsap.fromTo(
//       ".left-section",
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 1,
//         ease: "power1.inOut",
//       }
//     );

//     const menuLinks = document.querySelectorAll(".nav a");

//     menuLinks.forEach((splitedText) => {
//       const split = SplitText.create(splitedText, { type: "chars, words" });

//       splitedText.addEventListener("mouseenter", () => {
//         gsap.to(split.chars, {
//           y: "-105%",
//           ease: "power3.inOut",
//           duration: 0.25,
//           stagger: 0.05,
//         });
//       });

//       splitedText.addEventListener("mouseleave", () => {
//         gsap.to(split.chars, {
//           y: "0%",
//           ease: "power3.inOut",
//           duration: 0.25,
//           stagger: 0.05,
//         });
//       });
//     });
//   }, []);

//   return (
//     <>
//       <header>
//         <div className="left-section">THE INKSPIRE STUDIO</div>
//         <div className="nav">
//           <ul>
//             {navMenus.map((link) => (
//               <li key={link.id}>
//                 <NavLink
//                   to={link.id}
//                   className={({ isActive }) => (isActive ? "active" : "")}
//                 >
//                   {link.title}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </header>
//     </>
//   );
// }

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { NavLink, useNavigate } from "react-router-dom";
import { navMenus } from "../constant";
import "./Header.css";

export function Header() {
  const navigate = useNavigate();

  useGSAP(() => {
    const nav = gsap.timeline();

    nav.fromTo(
      "li",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.045,
        ease: "power1.inOut",
      },
    );

    gsap.fromTo(
      ".left-section",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
    );

    const menuLinks = document.querySelectorAll(".nav a");

    menuLinks.forEach((splitedText) => {
      const split = SplitText.create(splitedText, { type: "chars, words" });

      splitedText.addEventListener("mouseenter", () => {
        gsap.to(split.chars, {
          y: "-105%",
          ease: "power3.inOut",
          duration: 0.25,
          stagger: 0.05,
        });
      });

      splitedText.addEventListener("mouseleave", () => {
        gsap.to(split.chars, {
          y: "0%",
          ease: "power3.inOut",
          duration: 0.25,
          stagger: 0.05,
        });
      });
    });
  }, []);

  const handleNav = (e, path) => {
    e.preventDefault(); // NavLink ka default navigation stop

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };

  return (
    <header>
      <div className="left-section">THE INKSPIRE STUDIO</div>
      <div className="nav">
        <ul>
          {navMenus.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.id}
                onClick={(e) => handleNav(e, link.id)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
