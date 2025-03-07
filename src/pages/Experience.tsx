import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { div } from "motion/react-client";

function Experience() {
  return (
    <div>
        <div className="xs:mt-[3rem] md:mt-[10rem] absolute left-[-7rem] xs:w-[10rem] xs:h-[5rem] md:w-[10rem] md:h-[20rem] rounded-[3rem] bg-gradient-to-r from-[#cdccff] to-[#aeadff] -z-10">
            <h3 className="xs:text-[3rem] md:text-[5rem] text-blue-100 font-bold text-end">1</h3>
        </div>
        <div className="flex justify-center mt-32 text-[#e1edff]">
        <div className="ml-[1px] size-full xs:max-w-sm md:max-w-xl lg:max-w-5xl items-center justify-center overflow-hidden bg-[#2d325e] p-4 rounded-2xl">
        <BoxReveal  boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
            Juno<span className="text-[#5046e6]">.</span>
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
        {/* <div className="absolute left-[-7rem] md:w-[10rem] md:h-[20rem] rounded-[3rem] bg-gradient-to-r from-[#cdccff] to-[#aeadff] -z-10">
            <h3 className="xs:text-[3rem] md:text-[5rem] text-blue-100 font-bold text-end">1</h3>
        </div> */}
    </div>
    </div>
    
    
  );
}

export default Experience