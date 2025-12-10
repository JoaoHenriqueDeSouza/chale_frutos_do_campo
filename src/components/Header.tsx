export const Header = () => {
    return (
        <header className="w-full flex flex-col items-center  ">

            {/* NAV */}
            <div className="flex flex-col md:flex-row w-full p-5 items-center gap-4 fixed bg-white">

                {/* Esquerda */}
                <div className="border-b border-black h-7 w-full md:w-full flex justify-center md:justify-end gap-5 text-sm md:text-base">
                    <a href="#">SOBRE NÓS</a>
                    <a href="#" className="mr-5">PRODUTOS</a>
                </div>

                {/* Logo / Título */}
                <h1 className="text-center text-lg md:text-xl font-bold w-full md:w-96">
                    CHALÉ FRUTOS DO <br /> CAMPO
                </h1>

                {/* Direita */}
                <div className="border-b border-black h-7 w-full md:w-full flex justify-center md:justify-start gap-5 text-sm md:text-base">
                    <a href="#footer" className="ml-5">CONTATOS</a>
                </div>

            </div>

            {/* HERO */}
            

        </header>
    )
}