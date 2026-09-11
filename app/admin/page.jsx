
"use client"

import Navbar from "@/components/Navbar"

import { useState } from "react"

export default function AdminPage() {

    const [descricao, setDescricao] = useState("")

    const [categoria, setCategoria] = useState("")

    const [preco, setPreco] = useState("")

    const [imagem, setImagem] = useState("")

    async function cadastrarLanche() {

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

        <main className="min-h-screen bg-black">

            <Navbar />

            <div className="p-8">

                <div className="mx-auto max-w-xl rounded-lg bg-[#111111] p-8 shadow">

                    <h1 className="mb-6 text-3xl font-bold text-cyan-400">

                        Cadastrar Lanche - BOTOÊ

                    </h1>

                    <form

                        onSubmit={cadastrarLanche}

                        className="space-y-5"

                    >

                        <div>

                            <label className="mb-1 block text-white">

                                Descrição

                            </label>

                            <input

                                type="text"

                                value={descricao}

                                onChange={(e) => setDescricao(e.target.value)}

                                placeholder="Ex: X-Bacon de salada com carne"

                                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"

                            />

                        </div>

                        <div>

                            <label className="mb-1 block text-white">

                                Categoria

                            </label>

                            <input

                                type="text"

                                value={categoria}

                                onChange={(e) => setCategoria(e.target.value)}

                                placeholder="Categoria..."

                                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"

                            />

                        </div>

                        <div>

                            <label className="mb-1 block text-white">

                                Preço

                            </label>

                            <input

                                type="number"

                                step="0.01"

                                value={preco}

                                onChange={(e) => setPreco(e.target.value)}

                                placeholder="Ex: 10.00"

                                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"

                            />

                        </div>

                        <div>

                            <label className="mb-1 block text-white">

                                Imagem

                            </label>

                            <input

                                type="text"

                                value={imagem}

                                onChange={(e) => setImagem(e.target.value)}

                                placeholder="Insira o link da imagem"

                                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"

                            />

                        </div>

                        <button

                            type="submit"

                            className="w-full cursor-pointer rounded bg-cyan-400 py-3 font-semibold text-black hover:bg-cyan-300"

                        >

                            Cadastrar Lanche

                        </button>

                    </form>

                </div>

            </div>

        </main>

    )

}

