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
  <div>
      <Home />
      <TechStack />
      <ExperienceTitle />
      <Experience />
      <Experience />
      <Projects />
      <Contact />
      <DockDemo />
  </div>
  );
}

export default index