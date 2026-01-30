import { HeroSection } from "./HeroSection";
import { AboutPage } from "./AboutPage";
import { Service } from "./Service";
import { Typography } from "./Typography";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <title>THE INKSPIRE STUDIO | HOME</title>
      <HeroSection />
      <AboutPage />
      <Service />
      <Typography />
    </>
  );
}
