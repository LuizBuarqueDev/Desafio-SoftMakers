"use client";

import "./styles.css"

import { useState } from "react";

interface Pet {
  nome: string;
  nomeDono: string;
  telefone: string;
  animal: string;
  nascimento: string;
  raca: string;
}

interface CardProps {
  pet: Pet;
}

export function Card({ pet }: CardProps) {
  const { nome, nomeDono, telefone, animal, nascimento, raca } = pet;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative ">
      {/* Card Principal */}
      <div
        className={`flex items-center p-4 shadow-md rounded-lg w-[300px] h-[95px] div-hover ${isModalOpen ? 'border-visible' : ''}`}
        style={{ background: "var(--gradient_1)" }}
      >
        <div
          className="w-[65px] h-[65px] rounded-full flex items-center justify-center"
          style={{ background: "var(--gradient_2)" }}
        >
          <img
            src="/cat.png"
            alt="Foto do Pet"
            className="w-[45px] h-[45px] object-contain"
          />
        </div>
        <div className="ml-4 text-[var(--light)] mr-3">
          <p className="flex">
            {nome}
          </p>
          <p className="flex">
            {nomeDono}
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="ml-auto my-1"
        >
          SVG aqui
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-visible text-[var(--light)] absolute top-full mt-2 left-0 p-6 rounded-lg shadow-lg w-[300px] z-10 border-2">
          <p>Raça:{raca}</p>
          <p>Telefone:{telefone}</p>
          <p>Nascimento: {nascimento}</p>

          <div className="m-2 justify-center w-full">
            <button
              className="justify-center text-[var(--color_2)] bg-[var(--light)] focus:ring-2 focus:ring-[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 w-full"
            >
              editar
            </button>

            <button
              className="justify-center text-[var(--light)] focus:ring-2 focus:ring-[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 w-full mt-3"
              style={{ background: "var(--gradient_2)" }}
            >
              remover
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
