import { IconCloud } from "@/components/magicui/icon-cloud";
import { div } from "motion/react-client";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

function TechStack() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="mt-16 grow">
        <div className="flex justify-start gap-x-12">
            <h1 className="text-3xl font-bold font-serif ml-4">TECH STACK</h1>
            <div className="">something</div>
        </div>
        <div className="relative flex size-full items-center justify-center overflow-hidden ml-16">
            <IconCloud images={images} />
        </div>
    </div>
    
  );
}

export default TechStack;
