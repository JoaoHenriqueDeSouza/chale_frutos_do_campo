'use client'

import { useState } from "react"
import { CarouselImg } from "@/data/CarouselImg"
import { Card } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"



export const Products = () => {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <section id="products" className="w-full flex justify-center px-4 mb-16 scroll-mt-50 md:scroll-mt-40">
      <div className="w-full max-w-6xl bg-linear-to-b from-amber-800 to-amber-950 rounded-xl shadow-xl p-6 md:p-10">

        {/* TÍTULO */}
        <h1 className="text-center border-y border-white text-xl md:text-3xl font-semibold mb-8 text-white">
          PRODUTOS <span className="text-yellow-300">CASEIROS</span> E DE{" "}
          <span className="text-yellow-300">QUALIDADE</span>
        </h1>

        {/* IMAGEM PRINCIPAL */}
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-6">
          <img
            src={CarouselImg[activeImg].img}
            alt=""
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        {/* CARROSSEL */}
        <Carousel
          opts={{ dragFree: true }}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-2">

            {CarouselImg.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="pl-2 py-2 basis-1/3 sm:basis-1/4 md:basis-1/6"
              >
                <Card
                  onClick={() => setActiveImg(index)}
                  className={`
                    p-0 overflow-hidden cursor-pointer box-border
                    transition-all duration-200
                    ${activeImg === index
                      ? "border-2 border-yellow-400 scale-105"
                      : "border border-transparent hover:border-yellow-300"}
                  `}
                >
                  <div className="aspect-square">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}

          </CarouselContent>

          {/* SETAS (DESKTOP) */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

      </div>
    </section>
  )
}
