import { useState } from "react"

export const Header = () => {

    const [mobileMenu, setMobileMenu] = useState<boolean>(false)


    return (
        <header className="w-full flex flex-col items-center   ">

            {/* NAV */}
            <div className="flex flex-col md:flex-row w-full px-5 items-center gap-4 fixed z-999  pb-1 bg-[url('/images/header.png')] bg-center font-bold border-b border-black ">

                {/* Esquerda */}
                <div className="border-b border-white h-7 w-full md:w-full hidden md:flex justify-center md:justify-end gap-5 text-sm md:text-base text-white">
                    <a href="#">SOBRE NÓS</a>
                    <a href="#products" className="mr-5">PRODUTOS</a>
                </div>

                {/* Logo / Título */}
                <img src="/images/logo_chale.png" className="w-52 md:w-56 " />

                {mobileMenu &&
                    <div className="md:hidden p-4  flex flex-col gap-5 items-center text-xl text-white font-black italic">
                        <a href="#" onClick={() => setMobileMenu(false)}>SOBRE NÓS</a>
                        <a href="#products" onClick={() => setMobileMenu(false)}>PRODUTOS</a>
                        <a href="#footer" onClick={() => setMobileMenu(false)}>CONTATOS</a>
                    </div>

                }

                {/* {Icone menu mobile} */}
                <div className="md:hidden relative  w-8 h-8 mb-[-5] flex justify-center items-center rounded-full">
                    <button onClick={() => setMobileMenu(!mobileMenu)} className="cursor-pointer"><img src={`/images/${mobileMenu?'Chevron_Up.png':'Chevron_Down.png'}`} alt="" /></button>
                </div>

                {/* Direita */}
                <div className="text-white border-b border-white h-7 w-full md:w-full hidden md:flex justify-center md:justify-start gap-5 text-sm md:text-base">
                    <a href="#footer" className="ml-5">CONTATOS</a>
                </div>




            </div>

            {/* HERO */}


        </header>
    )
}