"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Swal from "sweetalert2"

export default function Login() {
    const router = useRouter()

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function entrar() {
        if (usuario === "admin" && senha === "123456") {
            localStorage.setItem("admin_logado", "true")
            router.push("/admin")
            return
        }

        Swal.fire({
            title: "Login inválido",
            text: "Usuário ou senha incorretos",
            icon: "error",
            confirmButtonText: "Tentar novamente",
            confirmButtonColor: "#B51212",
            background: "#542B0B",
            color: "#FFF7E6"
        })
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
                    Área Administrativa - ChocoLate
                </h1>

                <p className="mt-3 text-center text-[#79512F]">
                    Faça login para acessar o painel
                </p>

                {/* Formulário sem card */}
                <div className="mt-10 w-full max-w-xl space-y-6">

                    <div>
                        <label className="mb-2 block font-medium text-[#542B0B]">
                            Usuário
                        </label>

                        <input
                            type="text"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            placeholder="Digite seu usuário"
                            className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#542B0B] placeholder-[#9B8064] outline-none focus:border-[#B51212] focus:ring-2 focus:ring-[#FFD36A]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-[#542B0B]">
                            Senha
                        </label>

                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                            className="w-full rounded-lg border border-[#D9B98C] bg-[#FFFDF7] p-4 text-[#542B0B] placeholder-[#9B8064] outline-none focus:border-[#B51212] focus:ring-2 focus:ring-[#FFD36A]"
                        />
                    </div>

                    <button
                        onClick={entrar}
                        className="w-full cursor-pointer rounded-lg bg-[#B51212] py-4 text-lg font-semibold text-white transition hover:bg-[#8F0E0E]"
                    >
                        Entrar
                    </button>

                </div>

            </div>

        </main>
    )
}