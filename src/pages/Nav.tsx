"use client";
import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
export type IconProps = React.HTMLAttributes<SVGElement>;

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
  home: (props: IconProps) => (
    <a href="#home">
      <img src="home.svg"></img>
    </a>
  ),
  experience: (props: IconProps) => (
    <a href="#experience">
      <img src="experience.svg"></img>
    </a>
    
  ),
  projects: (props: IconProps) => (
    <a href="#projects">
      <img src="book.svg"></img>
    </a>
    
  ),

  email: (props: IconProps) => (
    <a href="#contact">
      <img src="email.svg"></img>
    </a>
    
  ),
};
