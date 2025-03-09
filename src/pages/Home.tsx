import { WordRotate } from "@/components/magicui/word-rotate";
import Image from 'next/image';

function Home() {
    return (
      <div id="home" className="relative pt-4 mb-[10rem] bg-gradient-to-b from-blue-200 via-slate-200 -z-20">
        <div className="p-4 flex justify-end relative lg:top-[5rem]">
          <Image src="/profile.jpg" width={100} height={100} alt="Logo" className="top-12 left-[2/3] rnd:w-[14rem] rnd:h-[14rem] md:w-[21rem] md:h-[21rem] lg:mr-[20rem] z-10 rounded-full"/>
          <div className="absolute top-0 xs:right-[4rem] md:right-[8rem] translate-x-1/2 -translate-y-1/2 xs:w-[19rem] xs:h-[19rem] rnd:w-[20rem] rnd:h-[20rem] md:w-[20rem] md:h-[20rem] lg:w-[35rem] lg:h-[35rem] rounded-full bg-[#aeadff] -z-10"></div>
          {/* <div className="absolute mt-[8rem] xs:w-[30rem] md:w-[49rem] lg:w-[30rem] lg:h-[30rem] h-[20rem] rounded-full bg-blue-400 -z-20"></div> */}
        </div>
        <div className='xs:ml-[2rem] rnd:ml-[5rem] md:ml-[10rem]'>
          <h1 className="text-4xl font-sans font-normal">Hi I'm</h1>
          <h1 className="text-4xl font-bold"></h1>
          <WordRotate
            className="text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl"
            words={["Nann Su Htet San", "Laura"]}
            />
        </div>
        <div className="absolute top-[45rem] left-[-5rem] xs:w-[10rem] xs:h-[10rem] md:w-[15rem] md:h-[15rem] rnd:w-[12rem] rnd:h-[12rem] rounded-full bg-gradient-to-r from-[#cdccff] to-[#aeadff] -z-10"></div>
        <div className="flex justify-end pt-20 pl-20 pr-[4rem] mt-8">
          <p className="font-serif text-right text-xl md:text-2xl lg:text-3xl">
          I&apos;m currently diving into C projects at 42 and, in my free time,  
          expanding my skills in front-end development. I&apos;m driven by a  
          curiosity to blend security and front-end, and I&apos;m excited to  
          collaborate with others on innovative and impactful projects.  
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
  