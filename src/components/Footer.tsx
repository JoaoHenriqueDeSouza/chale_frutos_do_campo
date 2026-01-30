export const Footer = () => {
  return (
    <footer
      id="footer"
      className="
        w-full
        bg-amber-950
        text-white
        px-6 py-16
        scroll-mt-36 md:scroll-mt-32
      "
    >
      {/* TÍTULO */}
      <h2 className="mb-12 text-center text-2xl md:text-4xl font-black italic tracking-wide border-y border-white">
        VENHA NOS <span className="text-amber-300">CONHECER</span>
      </h2>

      {/* CONTEÚDO */}
      <div
        className="
          mx-auto
          flex max-w-7xl flex-col gap-12
          md:flex-row md:items-start
        "
      >
        {/* ESQUERDA */}
        <div className="flex-1 flex flex-col gap-10">
          {/* ENDEREÇO */}
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 md:h-20 md:w-20">
              <img src="/images/spot.png" className="w-8 md:w-10" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-amber-300">
                ENDEREÇO
              </h3>
              <p className="text-sm md:text-base text-amber-100 leading-relaxed">
                ESM. Atílio Squizato, 20
                <br />
                Fim do Campo, Jarinu - SP
              </p>
            </div>
          </div>

          {/* TELEFONE */}
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 md:h-20 md:w-20">
              <img src="/images/phone.png" className="w-8 md:w-10" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-amber-300">
                TELEFONE
              </h3>
              <a href="https://wa.me/5511988612636" className="hover:underline cursor-pointer">
                <p className="text-sm md:text-xl text-amber-100 leading-relaxed flex items-center gap-2  ">
                  (11) 98861-2636
                  <img src="/images/whatsapp.png" className="w-6" />
                </p>
              </a>

            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div className="flex-1 flex flex-col gap-8">
          {/* REDES */}
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://www.instagram.com/chale_frutosdocampo/">
              <img
                src="/images/instagram.png"
                className="w-10 md:w-12 opacity-90 hover:opacity-100"
              />
            </a>
            <a href="https://www.facebook.com/p/Chal%C3%A9-Frutos-do-Campo-100063530111333/?locale=pt_BR">
              <img
                src="/images/facebook.png"
                className="w-10 md:w-12 opacity-90 hover:opacity-100"
              />
            </a>
          </div>

          {/* MAPA */}
          <div className="w-full overflow-hidden rounded-xl border-2 border-amber-400">
            <iframe
              className="h-[260px] w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.441664428841!2d-46.727532024683306!3d-23.117526179107294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cedb59d0744525%3A0x7e0bde99a5e24127!2sChal%C3%A9%20Frutos%20do%20Campo!5e0!3m2!1spt-BR!2sbr!4v1765191822615!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
