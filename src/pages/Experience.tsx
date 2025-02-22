import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { div } from "motion/react-client";

function Experience() {
  return (
    <div className="mt-16 text-[#e1edff]">
        <div className="ml-16 size-full max-w-lg items-center justify-center overflow-hidden pt-8 bg-[#2d325e] p-8 mb-4 rounded-2xl">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
            Magic UI<span className="text-[#5046e6]">.</span>
            </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
            UI library for{" "}
            <span className="text-[#181725]">Design Engineers</span>
            </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
            <p>
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-[#0f0f16]">React</span>,
                <span className="font-semibold text-[#5046e6]">Typescript</span>,
                <span className="font-semibold text-[#5046e6]">Tailwind CSS</span>,
                and
                <span className="font-semibold text-[#5046e6]">Motion</span>
                . <br />
                -&gt; 100% open-source, and customizable. <br />
            </p>
            </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
        </BoxReveal>
        </div>
    </div>
    
  );
}

export default Experience