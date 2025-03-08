import { Geist, Geist_Mono } from "next/font/google";
import Home from "./Home";
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import DockDemo from "./Nav";
import TechStack from "./TechStack";
import Experience from "./Experience";
import ExperienceTitle from "./ExperienceTitle";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import NextSection from "./NextSection";
// import { ModeToggle } from "@/components/mode-toggle";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

function index() {
  return (
  <div className="grid grid-cols-1">
      <Home />
      {/* <NextSection /> */}
      <ExperienceTitle />
      <Experience title="EzRutin" index="1" about="A producitivity app that helps the users boost up daily routine" lang="Next, React, TailWind and FireBase"/>
      <Experience title="Hackomania 2025" index="2" about="Presented a project on a web-app that helps the users to quit social-media addiction and in hand also supports back the tech community." lang="Next, React, TailWind and FireBase"/>
      {/* <NextSection /> */}
      <TechStack />
      <Projects />
      {/* <NextSection /> */}
      <Contact />
      <Footer />
      <DockDemo />
  </div>
  );
}

export default index