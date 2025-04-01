"use client";

import "./styles.css";
import { useState } from "react";
import RemovePetModal from "@/components/modal/RemovePetModal"; // Importe o modal de remoção
import { Pet } from "@/types/Pet";

interface CardProps {
  pet: Pet;
}

export function Card({ pet }: CardProps) {
  const { nome, nomeDono, telefone, animal, nascimento, raca } = pet;
  
  // Estados para controlar o modal de visualização e o modal de remoção
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  // Função para abrir o modal de remoção
  const handleRemoveClick = () => {
    setIsRemoveModalOpen(true); // Abre o modal de remoção
    setIsModalOpen(false); // Fecha o modal de visualização
  };

  // Função para fechar o modal de remoção
  const handleCloseRemoveModal = () => setIsRemoveModalOpen(false);

  // Função para realizar a remoção do pet
  const handlePetRemove = () => {
    // Lógica para remover o pet (pode ser feita com um array filter ou outro método)
    console.log(`Pet ${pet.nome} removido`);
    setIsRemoveModalOpen(false); // Fechar o modal de remoção após confirmar
  };

  return (
    <div className="relative">
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
          <p className="flex">{nome}</p>
          <p className="flex">{nomeDono}</p>
        </div>
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="ml-auto my-1"
        >
          {/* SVG aqui */}
          Botao aqui
        </button>
      </div>

      {/* Modal de visualização do Pet */}
      {isModalOpen && (
        <div className="modal-visible text-[var(--light)] absolute top-full mt-2 left-0 p-6 rounded-lg shadow-lg w-[300px] z-10 border-2">
          <p>Raça: {raca}</p>
          <p>Telefone: {telefone}</p>
          <p>Nascimento: {nascimento}</p>

          <div className="m-2 justify-center w-full">
            <button
              className="justify-center text-[var(--color_2)] bg-[var(--light)] focus:ring-2 focus:ring-[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 w-full"
            >
              Editar
            </button>

            <button
              onClick={handleRemoveClick} // Aciona o modal de remoção
              className="justify-center text-[var(--light)] focus:ring-2 focus:ring-[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 w-full mt-3"
              style={{ background: "var(--gradient_2)" }}
            >
              Remover
            </button>
          </div>
        </div>
      )}

      {/* Modal de remoção de Pet */}
      {isRemoveModalOpen && (
        <RemovePetModal
          onClose={handleCloseRemoveModal}   // Fechar o modal de remoção
          onRemove={handlePetRemove}          // Lógica para remoção
          pet={pet}                      // Passa o nome do pet
        />
      )}
    </div>
  );
}
