
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

                confirmButtonColor: "#00b8d4",

                background: "#111111",

                color: "#ffffff"

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

            confirmButtonColor: "#ff4fa3",

            cancelButtonColor: "#333333",

            background: "#111111",

            color: "#ffffff"

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

                confirmButtonColor: "#00b8d4",

                background: "#111111",

                color: "#ffffff"

            })

        } catch (error) {

            console.error(error)

            await Swal.fire({

                title: "Erro",

                text: "Não foi possível excluir o produto",

                icon: "error",

                confirmButtonText: "Ok",

                confirmButtonColor: "#00b8d4",

                background: "#111111",

                color: "#ffffff"

            })

        }

    }

    useEffect(() => {

        carregarProdutos()

    }, [])

    if (carregando) {

        return (

            <main className="min-h-screen bg-black p-8">

                <p className="text-cyan-400">

                    Carregando produtos...

                </p>

            </main>

        )

    }

    return (

        <main className="min-h-screen bg-black p-8">

            <div className="mx-auto max-w-6xl">

                <h1 className="mb-6 text-3xl font-bold text-cyan-400">

                    Gerenciar Cardápio - BOTOÊ

                </h1>

                {produtos.length === 0 ? (

                    <div className="rounded-lg bg-[#111111] p-8 text-center shadow">

                        <p className="text-gray-400">

                            Nenhum produto cadastrado

                        </p>

                    </div>

                ) : (

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {produtos.map((produto) => (

                            <div

                                key={produto.id}

                                className="overflow-hidden rounded-lg bg-[#111111] shadow-lg shadow-cyan-400/5 border border-cyan-400/20"

                            >

                                {produto.imagem && (

                                    <div className="relative h-48 w-full bg-[#0a0a0a]">

                                        <Image

                                            src={produto.imagem}

                                            alt={produto.descricao}

                                            fill

                                            className="object-contain"

                                        />

                                    </div>

                                )}

                                <div className="p-5">

                                    <h2 className="text-xl font-bold text-white">

                                        {produto.descricao}

                                    </h2>

                                    <p className="mt-3 text-lg text-cyan-400">

                                        {produto.categoria}

                                    </p>

                                    <p className="mt-3 text-lg font-semibold text-pink-400">

                                        R$ {Number(produto.preco).toFixed(2)}

                                    </p>

                                    <button

                                        className="mt-4 w-full rounded-lg bg-pink-500 px-4 py-2 font-semibold text-white hover:bg-pink-400"

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

