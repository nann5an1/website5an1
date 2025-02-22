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
            <h1 className="text-3xl font-bold font-serif ml-4">PROJECTS</h1>
            <div className="">something</div>
        </div>
        <div className="mt-16 flex justify-center ml-32">
            <Carousel className="w-full max-w-xs p-4">
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