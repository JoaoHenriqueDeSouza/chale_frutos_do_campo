'use client'

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CarouselImg } from "@/data/CarouselImg";
import { useState } from "react";



export default function Home() {

  

 

  return (
    
    <div className="bg-amber-950 w-full min-h-screen text-black ">
      <div className="container mx-auto  min-h-screen bg-amber-950  ">
        
      <Header />

        <div className="pt-[124px]">
          <div className="bg-[url('/images/chale.png')] bg-cover bg-center w-full h-[75vh] flex justify-center lg:mt-7 mt-2">

            {/* CAIXA DE TEXTO */}
            <div className="bg-black/60 w-[90%] md:w-3/5 lg:w-2/5 text-white px-6 md:px-10 py-10 flex flex-col justify-center items-center gap-8 md:gap-14  ">

              <h1 className="text-xl md:text-2xl lg:text-xl font-bold text-center mt-15">
                CHALÉ FRUTOS DO CAMPO
              </h1>

              <p className="text-center text-sm md:text-lg lg:text-xl leading-relaxed">
                Trabalhamos para servir o melhor da nossa região, além de diversos
                produtos do interior do nosso país, agregando frutas selecionadas
                aos produtos artesanais, como queijos, doces, biscoitos, linguiças,
                mel, bolachas, manteigas e salames.
                <br /><br />
                Venha também prestigiar a famosa coxinha de massa de milho, simplesmente
                irresistível, pastéis, sucos de frutas, café, lanches e muito mais.
                Sejam sempre bem-vindos! ❤️
              </p>

            </div>
          </div>

          

          <section className="flex flex-col items-center px-6 md:px-10 lg:px-20">

            <div className="text-center text-white border-y border-white text-2xl md:text-3xl font-semibold my-10">
              NOSSA <span className="text-amber-300">HISTÓRIA</span>
            </div>

            {/* BLOCO 1 */}
            <div className="flex flex-col md:flex-row w-full mb-16 gap-6">
              <div className="md:w-1/2 flex items-center text-lg md:text-xl lg:text-2xl text-white ">
                <p>
                  Somos a concretização de um modesto sonho. O Chalé Frutos do Campo abriu suas portas em 29 de outubro de 2015, na encantadora cidade de Jarinu, no estado de São Paulo. Essa ideia começou a tomar forma anos antes, em um momento em que parecia quase impossível, mas, com a benevolência divina, transformou-se em realidade.
                </p>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <img src="/images/chale.png" className="w-full rounded-lg object-cover" />
              </div>
            </div>

            {/* BLOCO 2 */}
            <div className="flex flex-col md:flex-row-reverse w-full mb-16 gap-6">
              <div className="md:w-1/2 flex items-center text-lg md:text-xl lg:text-2xl text-white">
                <p>
                  Com muitos produtores de frutas de qualidade na região, a ideia de criar o chalé se tornou ainda mais atraente, destacando o que de melhor o nosso interior tem a oferecer. Além disso, oferecemos produtos mineiros de excelente qualidade e sabor. Também dispomos de vinhos, cachaças e licores, tanto da região quanto de Santa Catarina.
                </p>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <img src="/images/chease.png" className="w-full rounded-lg object-cover" />
              </div>
            </div>

            {/* BLOCO 3 */}
            <div className="flex flex-col md:flex-row w-full mb-16 gap-6">
              <div className="md:w-1/2 flex items-center text-lg md:text-xl lg:text-2xl text-white">
                <p>
                  Sendo assim, o Chalé Frutos do Campo tornou-se um ponto de atração para moradores da região e também para visitantes de fora. Devido à grande quantidade de chácaras na área, muitos turistas optam por alugá-las para passar festas e finais de semana, e frequentemente fazem uma parada em nosso estabelecimento. Sempre proporcionamos um excelente atendimento a todos os nossos clientes. ❤️
                </p>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <img src="/images/tables.png" className="w-full rounded-lg object-cover" />
              </div>
            </div>

          


          </section>

          

          <Products />

          <Footer />





        </div>











      </div>
    </div>
  );
}
