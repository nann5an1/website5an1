import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Projects() {
  return (
    <>
        <div className="flex justify-start gap-x-12 mt-20">
            <h1 className="text-3xl font-bold font-serif ml-[1.2rem]">PROJECTS</h1>
            <div className="bg-[#bed8ff] ml-[5px] w-screen h-[2px] mt-4"></div>
        </div>
        <div className="mt-16 flex justify-center">
            <Carousel className="w-full max-w-[300px] bg-slate-500">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-4">
                        <span className="text-4xl font-semibold">{index + 1}</span>
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