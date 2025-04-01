"use client";

import "./styles.css";
import { useState } from "react";
import { Pet } from "@/types/Pet";
import EditPetModal from "@/components/modal/EditPetModal"; // Importando o modal de edição
import RemovePetModal from "@/components/modal/RemovePetModal"; // Modal de remoção

interface CardProps {
  pet: Pet;
}

export function Card({ pet }: CardProps) {
  const { nome, nomeDono, telefone, animal, nascimento, raca } = pet;
  
  // Estados para controlar os modais
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar o modal de edição

  // Função para abrir o modal de remoção
  const handleRemoveClick = () => {
    setIsRemoveModalOpen(true);
    setIsModalOpen(false); // Fecha o modal de visualização
  };

  // Função para fechar o modal de remoção
  const handleCloseRemoveModal = () => setIsRemoveModalOpen(false);

  // Função para realizar a remoção do pet
  const handlePetRemove = () => {
    console.log(`Pet ${pet.nome} removido`);
    setIsRemoveModalOpen(false); // Fecha o modal de remoção após confirmar
  };

  // Função para abrir o modal de edição
  const handleEditModalOpen = () => setIsEditModalOpen(true);

  // Função para fechar o modal de edição
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  // Função para salvar as edições
  const handleSavePet = (editedPet: Pet) => {
    console.log("Pet editado:", editedPet);
    setIsEditModalOpen(false); // Fecha o modal de edição após salvar
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
          {/* SVG ou botão de visualização */}
          Botao
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
              onClick={handleEditModalOpen} // Abre o modal de edição
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
          onClose={handleCloseRemoveModal}
          onRemove={handlePetRemove}
          pet={pet}
        />
      )}

      {/* Modal de Edição de Pet */}
      {isEditModalOpen && (
        <EditPetModal
          onClose={handleCloseEditModal}
          onSave={handleSavePet}
          pet={pet}
        />
      )}
    </div>
  );
}
