import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
function Projects() {
  const projects = [{
                  title: "Transport SG",
                  about: "Transport SG is a website that provides information about transportation services in Singapore.",
                  link: "https://transportsg.netlify.app/",
                  },
                  {
                  title: "ezRutin",
                  about: "ezRutin is a website that assits in boosting up personal routine and producitivity.",
                  link: "https://ezrutin.netlify.app/",
                  },
                  {
                  title: "E-Commerce Website",
                  about: "A website where you can buy and sell products.",
                  link: "https://ecommerce-website.netlify.app/",
                  },
                  {
                  title: "WebSec",
                  about: "WebSec is a website that provides service on web security.",
                  link: "https://websec.netlify.app/",
                  },
                  {
                  title: "Portfolio",
                  about: "Portfolio is website where ready-to-use templates could be fetched to create your own portfolio.",
                  link: "https://portfolio-website-omega.vercel.app/",
                  }];
  const project = ["Transport SG", "ezRutin", "E-Commerce Website", "WebSec", "Portfolio"];

  return (
    <div>
        <div id="projects" className="flex justify-start gap-x-12 mt-20 pt-16">
            <h1 className="text-3xl font-bold font-serif ml-4 sm:ml-5">PROJECTS</h1>
            <div className="bg-[#bed8ff] ml-1 w-full h-[2px] mt-4"></div>
        </div>
        <div className="mt-16 flex justify-center px-4 sm:px-6 md:px-8">
            <Carousel className="w-full xs:max-h-[30rem] xs:max-w-[15rem] sm:max-w-[22rem] md:max-w-[30rem] lg:max-w-[35rem]">
              <div className="flex justify-center">
                <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                          <div>
                          <Card className="bg-[#b3d2ff]">
                              <CardContent className="flex aspect-square justify-start  xs:mb-[4.5rem] xs:p-[2rem] sm:p-[1rem] md:p-[2rem] lg:p-[6rem]">
                              <span className="xs:text-[1.4rem] sm:text-[2rem] md:text-[2.5rem] font-semibold">
                                  <h3>{projects[index].title}</h3>
                                  <div className="xs:mt-[1rem] sm:mt-[2rem] md:mt-[5rem] text-start sm:text-[18px] md:text-[20px] xs:p-[0.5rem] sm:p-[15px] md:p-[1rem] rounded-l font-light">
                                    <div className="xs:text-[1.2rem] sm:text-[1.5rem] md:text-[1.5rem]">
                                      <p>{projects[index].about}</p>
                                    </div>
                                </div>
                              </span>
                              </CardContent>
                              <div className="flex justify-end xs:mb-[10px] xs:mr-[10px] sm:mb-[1rem] sm:mr-[1rem] md:mb-[1rem] md:mr-[1rem]">
                                      <button className="border border-black rounded-full px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base p-[10px]">Read More</button>
                              </div>
                          </Card>
                          </div>
                      </CarouselItem>
                      ))}
                  </CarouselContent>
              </div>
                
                <CarouselPrevious className=" sm:flex h-8 w-8 sm:h-10 sm:w-10" />
                <CarouselNext className="sm:flex h-8 w-8 sm:h-10 sm:w-10" />
            </Carousel>
        </div>
    </div>
)
}

export default Projects