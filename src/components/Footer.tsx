export const Footer = () => {
    return(
        <footer id="footer" className="bg-gray-800 w-full text-white flex flex-col items-center px-6 py-12">

            {/* TÍTULO */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black italic mb-12 text-center">
              VENHA NOS CONHECER
            </h2>

            {/* CONTEÚDO PRINCIPAL */}
            <div
              className="
                    w-full max-w-7xl
                    flex flex-col gap-12
                    md:flex-row
                    md:items-center
                    px-2
                        "
            >

              {/* COLUNA ESQUERDA */}
              <div className="flex-1 flex flex-col gap-12 ">

                {/* ENDEREÇO */}
                <div className="flex items-start  gap-4">
                  <div className="rounded-full border-2 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 flex justify-center items-center shrink-0">
                    <img src="/images/spot.png" className="w-8 md:w-10 lg:w-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">ENDEREÇO</h3>
                    <p className="text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed">
                      ESM. Atílio Squizato, 20,<br />
                      Fim do Campo, Jarinu - SP
                    </p>
                  </div>
                </div>

                {/* TELEFONE */}
                <div className="flex items-start gap-4">
                  <div className="rounded-full border-2 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 flex justify-center items-center shrink-0">
                    <img src="/images/phone.png" className="w-8 md:w-10 lg:w-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl lg:text-xl xl:text-3xl">TELEFONE</h3>
                    <p className="text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed">
                      (11) 4016-5424 <br />
                      (11) 98861-2636
                    </p>
                  </div>
                </div>

              </div>

              {/* COLUNA DIREITA */}
              <div className="flex-1 flex flex-col gap-8">

                {/* REDES SOCIAIS */}
                <div className="flex justify-end gap-4">
                  <a href="#">
                    <img src="/images/instagram.png" className="w-10 md:w-12 lg:w-14" />
                  </a>
                  <a href="#">
                    <img src="/images/facebook.png" className="w-10 md:w-12 lg:w-14" />
                  </a>
                </div>

                {/* MAPA */}
                <div className="w-full aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.441664428841!2d-46.727532024683306!3d-23.117526179107294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cedb59d0744525%3A0x7e0bde99a5e24127!2sChal%C3%A9%20Frutos%20do%20Campo!5e0!3m2!1spt-BR!2sbr!4v1765191822615!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>

            </div>

          </footer>

    )
}