
"use client"

import Image from 'next/image'



export default function Pedidos() {

  async function cadastrar(e:any) {

    e.preventDefault()

    alert("Produto cadastrado com sucesso!")

  }



  return (

    <main className="min-h-screen bg-black flex items-center justify-center p-6">

    <div className="w-full max-w-lg bg-[#111111] rounded-xl shadow-md p-8 grid grid-cols gap-4">

     <Image

     src="/logotipo-restaurante.png"

     alt="Logotipo BOTOÊ"

     width={200}

     height={200}

     className="mx-auto mb-4"

     />





      <input type="text"

      placeholder="Digite a descricao..."

      className="w-full rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-sm text-white"

      />

      <input type="number"

      placeholder="Digite o preço..."

      className="w-full rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-sm text-white"

      />

      <input type="text"

      placeholder="Digite a categoria..."

      className="w-full rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-sm text-white"

      />

      <input type="text"

      placeholder="O lanche está disponivel?"

      className="w-full rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-sm text-white"

      />

      <button 

      onClick={cadastrar}

      className="w-full rounded-xl 

      bg-cyan-400 px-4 py-3 

      font-medium text-black shadow-sm cursor-pointer 

      hover:bg-cyan-300" 

      >

        Cadastrar

      </button>



    </div>

    </main>

  );

}

