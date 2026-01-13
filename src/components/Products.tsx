import { CarouselImg } from "@/data/CarouselImg"
import { Card } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { useState } from "react"

export const Products = () => {

    const [activeImg, setActiveImg] = useState<number>(0)

    const carImg = CarouselImg

    return (
        <div className="p-8 mb-10 mx-10 bg-gray-100 rounded-md shadow-xl ">

            <div className="w-full relative aspect-video rounded-md mb-6">
                <div className="flex justify-center items-center">
                    <h1 className="text-center border-y border-black text-2xl md:text-3xl font-semibold my-10">
                        PRODUTOS <span className="text-yellow-300">CASEIROS</span> E DE <span className="text-yellow-300">QUALIDADE</span>
                    </h1>
                </div>
                <img src={carImg[activeImg].img} className="object-cover w-full h-full " />
                {/* <div className={`w-full h-[800px] bg-[url(${carImg[activeImg].img})] bg-cover  `}></div> */}
            </div>


            <Carousel
                opts={{ dragFree: true }}
                className="w-full"
            >
                <CarouselContent className="-ml-2">

                    {carImg.map((item, index) => (
                        <CarouselItem
                            key={item.id}
                            className=" pl-2  basis-1/3  sm:basis-1/4  md:basis-1/6"
                        >
                            <Card
                                className="overflow-hidden rounded-md py-0"
                                onClick={() => setActiveImg(index)}
                            >
                                <div className={`relative aspect-square ${activeImg === item.id-1?'border-2 border-yellow-300':''} `} >
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-full h-full object-cover "

                                    />
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}

                </CarouselContent>

                {/* Setas só aparecem em telas médias pra cima */}
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>

    )
}