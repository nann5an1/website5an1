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
    <>
        <div className="flex justify-start gap-x-12 mt-20">
            <h1 className="text-3xl font-bold font-serif ml-[1.2rem]">PROJECTS</h1>
            <div className="bg-[#bed8ff] ml-[5px] w-screen h-[2px] mt-4"></div>
        </div>
        <div className="mt-16 flex justify-center">
            <Carousel className="w-full max-w-[300px] ">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="p-1 ">
                    <Card className="bg-[#b3d2ff]">
                        <CardContent className="flex aspect-square justify-start p-4">
                        <span className="text-xl font-semibold">
                            <h3>{projects[index].title}</h3>
                            <div className="mt-[1.5rem] text-start text-[18px] p-[5px] h-[13rem] bg-[rgba(142,188,253,0.58)] rounded-l font-light">
                              <div className="mb-[1.5rem]">
                                <p>{projects[index].about}</p>
                              </div>
                              <div className="flex justify-end">
                                <button className="border border-black rounded-full px-4 py-2">Read More</button>
                              </div>
                          </div>
                        </span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    </>
  )
}

export default Projects