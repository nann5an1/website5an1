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
          <Icons.home className="size-full" />
        </DockIcon>
        <DockIcon >
          <Icons.experience className="size-full" />
        </DockIcon>
        <DockIcon>
          <Icons.projects className="size-full" />
        </DockIcon>
        <DockIcon>
          <Icons.email className="size-full" />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  home: (_props: IconProps) => (
    <a href="#home">
      <Image width={50} height={50} src="home.svg" alt={"home"} />
    </a>
  ),

  experience: (_props: IconProps) => (
    <a href="#experience">
      <Image width={50} height={50} src="experience.svg" alt={"home"} />
    </a>
    
  ),
  projects: (_props: IconProps) => (
    <a href="#projects">
      <Image width={50} height={50} src="book.svg" alt={"home"} />
    </a>
    
  ),

  email: (_props: IconProps) => (
    <a href="#contact">
      <Image width={50} height={50} src="email.svg" alt={"home"} />
    </a>
    
  ),
};
