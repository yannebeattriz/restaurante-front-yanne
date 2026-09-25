"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Produto {
  id: number
  descricao: string
  categoria: string
  preco: string
  imagem: string
}

export default function CardapioPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  async function mostrarProdutos() {
    try {
      const response = await fetch("http://localhost:3001/produtos")

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos")
      }

      const data = await response.json()
      setProdutos(data)
    } catch (error) {
      console.error("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarProdutos()
  }, [])

  return (
    <main className="min-h-screen bg-[#FFF7E4] text-[#542B0B]">

      <Navbar />

      {/* CABEÇALHO */}
      <section className="relative overflow-hidden bg-[#FFF7E4] px-6 pb-16 pt-14">

        {/* Detalhes decorativos */}
        <div className="absolute left-[-40px] top-20 h-24 w-24 rounded-full bg-[#A80906]/10" />
        <div className="absolute right-[-30px] top-10 h-32 w-32 rounded-full bg-[#E8B84A]/20" />

        <div className="relative mx-auto max-w-5xl text-center">

          <Image
            src="/listra-redondo.jpeg"
            alt="Logo ChocoLate"
            width={145}
            height={145}
            className="mx-auto mb-6 h-40 w-40 object-contain"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B51212]">
            doces feitos com carinho
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight text-[#542B0B] md:text-6xl">
            Nosso Cardápio
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#79512F]">
            Escolha seu favorito e deixe seu momento ainda mais doce.
          </p>

          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#B51212]" />

        </div>
      </section>


      {/* PRODUTOS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">

        {loading ? (

          <div className="flex justify-center py-20">
            <p className="text-[#542B0B]">
              Carregando produtos...
            </p>
          </div>

        ) : produtos.length === 0 ? (

          <div className="py-20 text-center">
            <p className="text-lg text-[#542B0B]">
              Nenhum produto disponível no momento.
            </p>
          </div>

        ) : (

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {produtos.map((produto) => (

              <article
                key={produto.id}
                className="group relative overflow-hidden rounded-[32px] bg-[#FFFDF7] shadow-[0_8px_30px_rgba(84,43,11,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(84,43,11,0.16)]"
              >

                {/* IMAGEM */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#FFEBC6]">

                  {/* detalhe vermelho */}
                  <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-[#B51212]/10" />

                  <img
                    src={produto.imagem}
                    alt={produto.descricao}
                    className="relative z-10 h-full w-full object-contain p-7 transition duration-500 group-hover:scale-105"
                  />

                </div>


                {/* INFORMAÇÕES */}
                <div className="px-7 pb-7 pt-6">

                  <div className="flex items-center justify-between gap-4">

                    <span className="rounded-full bg-[#A80906] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {produto.categoria}
                    </span>

                    <span className="text-lg font-bold text-[#B51212]">
                      R$ {Number(produto.preco).toFixed(2)}
                    </span>

                  </div>

                  <h2 className="mt-5 text-2xl font-bold leading-tight text-[#542B0B]">
                    {produto.descricao}
                  </h2>

                  <button
                    className="mt-6 w-full rounded-xl bg-[#B51212] py-3.5 font-semibold text-white transition duration-300 hover:bg-[#8F0E0E] hover:shadow-lg"
                  >
                    Fazer pedido
                  </button>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>


      {/* RODAPÉ */}
      <footer className="bg-[#A80906] px-6 py-12 text-center">

        <p className="text-lg font-semibold text-[#FFF7E4]">
          Feito com carinho pela ChocoLate
        </p>

        <div className="mx-auto my-4 h-px w-12 bg-[#E8B84A]" />

        <p className="text-sm text-[#FFEBC6]">
          Uma mordida e você entende.
        </p>

      </footer>

    </main>
  )
}