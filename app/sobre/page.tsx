import Image from "next/image"

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#FFF8ED]">

      {/* HERO */}
      <section className="min-h-[90vh] px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* TEXTO */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#A80906]">
              ChocoLate
            </p>

            <h1 className="max-w-2xl text-6xl font-bold leading-[0.95] tracking-tight text-[#4F2414] md:text-8xl">
              Feita para
              <br />
              <span className="text-[#A80906]">adoçar</span>
              <br />
              momentos.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#79512F]">
              Mais do que sobremesas, criamos pequenas experiências
              para tornar cada momento ainda mais especial.
            </p>
          </div>

          {/* LOGO */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#E8B84A]" />

              <div className="relative overflow-hidden rounded-[45%] bg-[#FFF7E4] p-8 md:p-12">
                <Image
                  src="/mascote.jpeg"
                  alt="ChocoLate"
                  width={600}
                  height={500}
                  className="w-[340px] object-contain md:w-[470px]"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-[#4F2414]" />
            </div>
          </div>

        </div>
      </section>


      {/* FRASE */}
      <section className="bg-[#A80906] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-5xl text-4xl font-bold leading-tight text-[#FFF8ED] md:text-6xl">
            Cada detalhe importa quando o objetivo é transformar
            algo simples em algo inesquecível.
          </p>
        </div>
      </section>


      {/* HISTÓRIA */}
      <section className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#A80906]">
                01 / nossa história
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-none text-[#4F2414] md:text-7xl">
                Onde tudo
                <br />
                começa.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-2xl font-medium leading-10 text-[#4F2414] md:text-3xl">
                Somos uma marca dedicada a transformar momentos simples
                em experiências deliciosas.
              </p>

              <p className="mt-8 text-lg leading-8 text-[#79512F]">
                Nossos sabores são preparados com ingredientes selecionados
                e muito carinho. Cada escolha faz parte da experiência que
                queremos proporcionar.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#79512F]">
                Na ChocoLate, acreditamos que uma boa sobremesa vai além
                do sabor. Ela envolve cuidado, criatividade e aquele toque
                especial que faz você querer provar de novo.
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* ESSÊNCIA */}
      <section className="bg-[#FFEBC6] px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#A80906]">
              02 / o que nos move
            </p>

            <h2 className="mt-5 text-5xl font-bold text-[#4F2414] md:text-7xl">
              Nossa essência.
            </h2>
          </div>


          <div className="grid gap-12 md:grid-cols-3">

            <div>
              <span className="text-5xl font-bold text-[#A80906]">01</span>

              <h3 className="mt-6 text-3xl font-bold text-[#4F2414]">
                Sabor
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#79512F]">
                Sabores pensados para criar experiências
                que ficam na memória.
              </p>
            </div>


            <div>
              <span className="text-5xl font-bold text-[#A80906]">02</span>

              <h3 className="mt-6 text-3xl font-bold text-[#4F2414]">
                Qualidade
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#79512F]">
                Atenção aos ingredientes e aos detalhes
                em cada criação.
              </p>
            </div>


            <div>
              <span className="text-5xl font-bold text-[#A80906]">03</span>

              <h3 className="mt-6 text-3xl font-bold text-[#4F2414]">
                Carinho
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#79512F]">
                Porque acreditamos que o cuidado também
                faz parte do sabor.
              </p>
            </div>

          </div>

        </div>
      </section>


    

    </main>
  )
}