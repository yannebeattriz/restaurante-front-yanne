
"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"

import Swal from "sweetalert2"

export default function Login(){

    const router = useRouter()

    const [usuario,setUsuario] = useState("")

    const [senha, setSenha] = useState("")

    function entrar(){

        if(usuario === "admin" && senha === "123456"){

            localStorage.setItem("admin_logado","true")

            router.push("/admin")

            return

        }

        Swal.fire({

            title:"Login invalido",

            text:"Usuario ou senha incorretos",

            icon:"error",

            confirmButtonText:"Tentar novamente",

            confirmButtonColor:"#00b8d4",

            background:"#111111",

            color:"#ffffff"

        })

    }

    return(

        <main className="flex min-h-screen items-center justify-center bg-black">

            <div className="w-full max-w-md rounded-2xl bg-[#111111] p-8 shadow-lg border border-cyan-400/20">

                <h1 className="mb-8 text-center font-bold text-cyan-400">

                    Área Administrativa - BOTOÊ

                </h1>

                <p className="mb-8 text-center text-gray-400">

                    Faça login para acessar o painel

                </p>

                <div>

                    <label className="text-white">Usuario</label>

                    <input type="text"

                    value={usuario}

                    onChange={(e)=>setUsuario(e.target.value)}

                    placeholder="Digite seu usuario"

                    className="w-full rounded-lg border border-gray-700 bg-[#0a0a0a] p-3 text-white

                    outline-none focus:ring-2 focus:ring-cyan-400"

                    />

                </div>

                <div>

                    <label className="text-white">Senha</label>

                    <input type="password"

                    value={senha}

                    onChange={(e)=>setSenha(e.target.value)}

                    placeholder="Digite sua senha"

                    className="w-full rounded-lg border border-gray-700 bg-[#0a0a0a] p-3 text-white

                    outline-none focus:ring-2 focus:ring-cyan-400"

                    />

                </div>

                <button

                onClick={entrar}

                className="w-full rounded-lg bg-cyan-400

                py-3 mt-6 font-semibold text-black hover:bg-cyan-300 cursor-pointer"

                >

                    Entrar

                </button>

            </div>

        </main>

    )

}

