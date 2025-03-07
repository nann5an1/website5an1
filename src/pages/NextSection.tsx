import { div } from "motion/react-client";

function NextSection(){
    return (
        <div className="flex justify-center  mt-[15rem] mb-[5rem]">
            <div className="absolute w-[1.2rem] h-[1.2rem] rounded-full bg-gradient-to-r from-[#cdccff] to-[#aeadff]"></div>
            
            {/* <div className="absolute  w-[2rem] h-[2.4rem] rounded-full bg-gradient-to-r from-[#cdccff] to-[#aeadff]"></div>
            <div className="absolute  w-[2rem] h-[2.4rem] rounded-full bg-gradient-to-r from-[#cdccff] to-[#aeadff]"></div> */}
            
            <div className="absolute mt-[2rem] w-[2.3rem] h-[2.3rem] rounded-full bg-gradient-to-r from-[#cdccff] to-[#aeadff]"></div>
            <div className="absolute mt-[5.5rem] w-[4em] h-[4rem] rounded-full bg-gradient-to-r from-[#cdccff] to-[#aeadff]"></div>
        </div>
    );
}

export default NextSection