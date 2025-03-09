"use client";
import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
export type IconProps = React.HTMLAttributes<SVGElement>;
import Image from "next/image";

export default function DockDemo() {
  return (
    <div className="fixed bottom-5 left-0 w-screen p-4 flex justify-center">
      <Dock  className="bg-black/80" iconMagnification={60} iconDistance={100}>
        <DockIcon>
          <Icons.home />
        </DockIcon>
        <DockIcon >
          <Icons.experience />
        </DockIcon>
        <DockIcon>
          <Icons.projects />
        </DockIcon>
        <DockIcon>
          <Icons.email />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  home: () => (
    <a href="#home">
      <Image width={50} height={50} src="/home.svg" alt={"home"} />
    </a>
  ),

  experience: () => (
    <a href="#experience">
      <Image width={50} height={50} src="/experience.svg" alt={"experience"} />
    </a>
    
  ),
  projects: () => (
    <a href="#projects">
      <Image width={50} height={50} src="/book.svg" alt={"projects"} />
    </a>
    
  ),

  email: () => (
    <a href="#contact">
      <Image width={50} height={50} src="/email.svg" alt={"contact"} />
    </a>
    
  ),
};
