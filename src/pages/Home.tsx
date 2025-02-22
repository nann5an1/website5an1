import { WordRotate } from "@/components/magicui/word-rotate";

function Home() {
    return (
      <div className="relative pt-4 pb-4">
        <div className="p-4 flex justify-end relative">
          <img
            className="top-12 left-[2/3] w-44 h-44 relative z-10 rounded-full"
            src="/profile.jpg"
            alt=""
          />
          <div className="absolute top-0 right-[6rem] translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#aeadff] -z-10"></div>
          <div className="absolute mt-12 left-0 right-[-160px] w-screen h-80 rounded-full bg-blue-200 -z-20"></div>
        </div>
        <div className='ml-12'>
          <h1 className="text-4xl font-sans font-normal">Hi I'm</h1>
          <h1 className="text-4xl font-bold"></h1>
          <WordRotate
            className="text-4xl font-bold text-black dark:text-white"
            words={["Nann Su Htet San", "Laura"]}
            />
        </div>
        <div className="absolute top-[400px] left-[-50px] w-24 h-24 rounded-full bg-[#aeadff]"></div>
        <div className="flex justify-end pt-20 pl-20 pr-[4rem] mt-8">
          <p className="font-serif text-right text-lg">
            I'm currently diving into C projects at 42 and, in my free time,
            expanding my skills in front-end development. I’m driven by a
            curiosity to blend security and front-end, and I’m excited to
            collaborate with others on innovative and impactful projects.
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
  