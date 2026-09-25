"use client"

import Image from "next/image"

export default function Pedidos() {

    async function cadastrar(e:any) {
        e.preventDefault()

        alert("Produto cadastrado com sucesso!")
    }

    return (
        <main className="min-h-screen bg-[#FFF7E4] px-8 py-10">

            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-2xl flex-col items-center justify-center">

                {/* Mascote */}
                <Image
                    src="/mascote.jpeg"
                    alt="Mascote ChocoLate"
                    width={190}
                    height={190}
                    className="mb-5 object-contain"
                />

                {/* Título */}
                <h1 className="text-center text-4xl font-bold text-[#542B0B]">
                    Cadastro de Produto
                </h1>

                <p className="mt-3 text-center text-[#79512F]">
                    Adicione um novo produto ao cardápio
                </p>

                {/* Formulário */}
                <form
                    onSubmit={cadastrar}
                    className="mt-10 w-full max-w-xl space-y-6"
                >

                    <div>
                        <label className="mb-2 block font-medium text-[#542B0B]">
                            Descrição
                        </label>

                        <input
                            type="text"
                            placeholder="Digite a descrição"
                            className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#542B0B] placeholder-[#9B8064] outline-none focus:border-[#B51212] focus:ring-2 focus:ring-[#FFD36A]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-[#542B0B]">
                            Preço
                        </label>

                        <input
                            type="number"
                            placeholder="Digite o preço"
                            className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#542B0B] placeholder-[#9B8064] outline-none focus:border-[#B51212] focus:ring-2 focus:ring-[#FFD36A]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-[#542B0B]">
                            Categoria
                        </label>

                        <input
                            type="text"
                            placeholder="Digite a categoria"
                            className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#542B0B] placeholder-[#9B8064] outline-none focus:border-[#B51212] focus:ring-2 focus:ring-[#FFD36A]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-[#542B0B]">
                            Disponibilidade
                        </label>

                        <input
                            type="text"
                            placeholder="O lanche está disponível?"
                            className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#542B0B] placeholder-[#9B8064] outline-none focus:border-[#B51212] focus:ring-2 focus:ring-[#FFD36A]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer rounded-lg bg-[#B51212] py-4 text-lg font-semibold text-white transition hover:bg-[#8F0E0E]"
                    >
                        Cadastrar
                    </button>

                </form>

            </div>

        </main>
    )
}