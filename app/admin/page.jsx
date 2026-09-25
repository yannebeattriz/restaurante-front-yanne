"use client"

import Image from "next/image"
import { useState } from "react"

export default function AdminPage() {
    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const [preco, setPreco] = useState("")
    const [imagem, setImagem] = useState("")

    async function cadastrarLanche(e) {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:3001/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    descricao,
                    categoria,
                    preco,
                    imagem
                })
            })

            if (response.ok) {
                alert("Produto cadastrado com sucesso!")
                setDescricao("")
                setCategoria("")
                setPreco("")
                setImagem("")
            }
        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar")
        }
    }

    return (
        <main className="min-h-screen bg-[#FFF4DF] px-8 py-10">

            <div className="mx-auto max-w-6xl">

                {/* Cabeçalho */}
                <div className="mb-10 flex flex-col items-center">
                    <Image
                        src="/mascote.jpeg"
                        alt="Mascote ChocoLate"
                        width={160}
                        height={160}
                        className="mb-4 object-contain"
                    />

                    <h1 className="text-center text-4xl font-bold text-[#4A250C]">
                        Cadastrar Lanche
                    </h1>

                    <p className="mt-2 text-center text-[#9B8064]">
                        Adicione um novo produto ao cardápio
                    </p>
                </div>

                {/* Formulário */}
                <form
                    onSubmit={cadastrarLanche}
                    className="mx-auto max-w-5xl space-y-8"
                >

                    {/* Primeira linha */}
                    <div className="grid gap-8 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block font-medium text-[#4A250C]">
                                Descrição
                            </label>

                            <input
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                placeholder="Ex: Cookie de chocolate"
                                className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#4A250C] placeholder-[#9B8064] focus:border-[#B80F0F] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-[#4A250C]">
                                Categoria
                            </label>

                            <input
                                type="text"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                placeholder="Ex: Doces"
                                className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#4A250C] placeholder-[#9B8064] focus:border-[#B80F0F] focus:outline-none"
                            />
                        </div>

                    </div>

                    {/* Segunda linha */}
                    <div className="grid gap-8 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block font-medium text-[#4A250C]">
                                Preço
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                                placeholder="Ex: 10.00"
                                className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#4A250C] placeholder-[#9B8064] focus:border-[#B80F0F] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-[#4A250C]">
                                Imagem
                            </label>

                            <input
                                type="text"
                                value={imagem}
                                onChange={(e) => setImagem(e.target.value)}
                                placeholder="Insira o link da imagem"
                                className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#4A250C] placeholder-[#9B8064] focus:border-[#B80F0F] focus:outline-none"
                            />
                        </div>

                    </div>

                    {/* Botão */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-[#B80F0F] py-4 text-lg font-semibold text-[#FFF4DF] transition hover:bg-[#940909]"
                        >
                            Cadastrar Lanche
                        </button>
                    </div>

                </form>

            </div>
        </main>
    )
}