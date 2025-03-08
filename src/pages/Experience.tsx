import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { div } from "motion/react-client";


function Experience ({title, index, about, lang}){
  return (
    <div>
        <div className="xs:mt-[3rem] md:mt-[10rem] rnd:mt-[2rem] absolute left-[-7rem] xs:w-[10rem] xs:h-[5rem] md:w-[10rem] md:h-[20rem] rnd:w-[10rem] rnd:h-[5rem] rounded-[3rem] bg-gradient-to-r from-[#cdccff] to-[#aeadff] -z-10">
            <h3 className="xs:text-[3rem] md:text-[5rem] rnd:text-[2.5rem] text-blue-100 font-bold text-end">{index}</h3>
        </div>
        <div className="flex justify-center mt-32 text-[#e1edff]">
        <div className="ml-[1px] size-full xs:max-w-[10rem] md:max-w-xl rnd:max-w-[30rem] lg:max-w-5xl items-center justify-center overflow-hidden bg-[#2d325e] p-4 rounded-2xl">
        <BoxReveal  boxColor={"#5046e6"} duration={0.5}>
            <p className="xs:text-[2.5rem] rnd:text-[2.5rem] md:text-[3.5rem]  font-semibold">
            <span className="text-[#faf9ff]">{title}</span>
            </p>
            <br />
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="xs:text-[1.2rem] rnd:text-[1.3rem] md:text-[1.5rem] mt-[.5rem] text-[1rem]">
            {about}
            </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
            <p>
                <br /><br />
                <span className="xs:text-[1.2rem] rnd:text-[1.3rem] md:text-[1.5rem] font-bold text-[#ececff]">Applied Tech Stack</span>,
                <br /><br />
                <span className="xs:text-[1rem] rnd:text-[1.2rem] md:text-[1.5rem] font-semibold text-[#f4eaff]">{lang}</span>,
                <br />
               
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