"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

interface Produto {
    id: number
    descricao: string
    categoria: string
    preco: number
    imagem: string
}

export default function CardapioAdmin() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [carregando, setCarregando] = useState(true)

    async function carregarProdutos() {
        try {
            const response = await fetch(
                "http://localhost:3001/produtos"
            )

            if (!response.ok) {
                throw new Error("Erro ao buscar produtos")
            }

            const data = await response.json()
            setProdutos(data)

        } catch (error) {
            console.error(error)

            await Swal.fire({
                title: "Erro",
                text: "Não foi possível carregar os produtos",
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "#B80F0F",
                background: "#FFF9ED",
                color: "#4A250C"
            })
        } finally {
            setCarregando(false)
        }
    }

    async function excluirProduto(id: number) {
        const resultado = await Swal.fire({
            title: "Excluir produto?",
            text: "Essa opção não poderá ser desfeita.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, excluir",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#B80F0F",
            cancelButtonColor: "#4A250C",
            background: "#FFF9ED",
            color: "#4A250C"
        })

        if (!resultado.isConfirmed) {
            return
        }

        try {
            const response = await fetch(
                `http://localhost:3001/produtos/${id}`,
                {
                    method: "DELETE"
                }
            )

            if (!response.ok) {
                throw new Error("Erro ao excluir o produto")
            }

            setProdutos((produtosAtuais) =>
                produtosAtuais.filter(
                    (produto) => produto.id !== id
                )
            )

            await Swal.fire({
                title: "Excluído",
                text: "O produto foi excluído com sucesso",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#B80F0F",
                background: "#FFF9ED",
                color: "#4A250C"
            })

        } catch (error) {
            console.error(error)

            await Swal.fire({
                title: "Erro",
                text: "Não foi possível excluir o produto",
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "#B80F0F",
                background: "#FFF9ED",
                color: "#4A250C"
            })
        }
    }

    useEffect(() => {
        carregarProdutos()
    }, [])

    if (carregando) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#FFF7E4]">
                <p className="text-lg font-semibold text-[#B80F0F]">
                    Carregando produtos...
                </p>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#FFF7E4] px-8 py-12 text-[#4A250C]">

            <div className="mx-auto max-w-7xl">

                {/* Cabeçalho */}
                <div className="mb-12">

                    <h1 className="text-4xl font-bold text-[#4A250C]">
                        Gerenciar Cardápio
                    </h1>

                    <p className="mt-2 text-lg text-[#8A6A50]">
                        Produtos cadastrados na ChocoLate
                    </p>

                </div>

                {produtos.length === 0 ? (

                    <div className="py-20 text-center">
                        <p className="text-lg text-[#8A6A50]">
                            Nenhum produto cadastrado
                        </p>
                    </div>

                ) : (

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {produtos.map((produto) => (

                            <div
                                key={produto.id}
                                className="group overflow-hidden rounded-2xl border border-[#E5CFA8] bg-[#FFFDF7] transition duration-300 hover:-translate-y-1 hover:border-[#B80F0F] hover:shadow-xl"
                            >

                                {/* Imagem */}
                                {produto.imagem && (
                                    <div className="relative h-52 w-full overflow-hidden bg-[#F5E5C8]">

                                        <Image
                                            src={produto.imagem}
                                            alt={produto.descricao}
                                            fill
                                            className="object-contain p-4 transition duration-300 group-hover:scale-105"
                                        />

                                    </div>
                                )}

                                {/* Informações */}
                                <div className="p-6">

                                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#B80F0F]">
                                        {produto.categoria}
                                    </p>

                                    <h2 className="text-xl font-bold text-[#4A250C]">
                                        {produto.descricao}
                                    </h2>

                                    <p className="mt-4 text-2xl font-bold text-[#4A250C]">
                                        R$ {Number(produto.preco).toFixed(2)}
                                    </p>

                                    <button
                                        className="mt-6 w-full cursor-pointer rounded-lg bg-[#B80F0F] px-4 py-3 font-semibold text-white transition hover:bg-[#940909]"
                                        onClick={() =>
                                            excluirProduto(produto.id)
                                        }
                                    >
                                        Excluir
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </main>
    )
}