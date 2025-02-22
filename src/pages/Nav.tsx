"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { img } from "motion/react-client";
import exp from "constants";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function DockDemo() {
  return (
    <div className="fixed bottom-8 left-0 w-full p-4 flex justify-center">
      <Dock  className="bg-black/80" iconMagnification={60} iconDistance={100}>
        <DockIcon>
          <Icons.home className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Icons.experience className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Icons.email className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Icons.projects className="size-full" />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  home: (props: IconProps) => (
   <img src="home.svg"></img>
  ),
  experience: (props: IconProps) => (
    <img src="experience.svg"></img>
  ),
  projects: (props: IconProps) => (
    <img src="book.svg"></img>
  ),
  email: (props: IconProps) => (
    <img src="email.svg"></img>
  ),
};
