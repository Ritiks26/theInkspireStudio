// import Lenis from "@studio-freight/lenis";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";
// import { useLocation } from "react-router";
// import { Routes, Route } from "react-router";
// import { Header } from "./components/Header";
// import { HomePage } from "./Pages/HomePage";
// import { AboutPage } from "./Pages/AboutPage";
// import { Agency } from "./Pages/Agency";
// import { Work } from "./Pages/Work";
// import "./App.css";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// function App() {
//   const location = useLocation().pathname;
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.6,
//       smoothWheel: true,
//       smoothTouch: false,
//       lerp: 0.05,
//       wheelMultiplier: 0.8,
//       touchMultiplier: 1.5,
//       easing: (t) => 1 - Math.pow(1 - t, 3),
//     });

//     window.lenis = lenis;

//     lenis.on("scroll", ScrollTrigger.update);
//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/agency" element={<Agency />} />
//         <Route path="/work" element={<Work />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLocation, Routes, Route, Outlet } from "react-router";
import { Header } from "./components/Header";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { Agency } from "./Pages/Agency";
import { Work } from "./Pages/Work";
import { Connect } from "./Pages/Connect";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  const location = useLocation().pathname;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.05,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    window.lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Routes location={location}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/work" element={<Work />} />
          <Route path="/connect" element={<Connect />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
