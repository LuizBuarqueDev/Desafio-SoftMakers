"use client";

import "./styles.css";
import { useState } from "react";
import { Pet } from "@/types/Pet";
import EditPetModal from "@/components/modal/EditPetModal";
import RemovePetModal from "@/components/modal/RemovePetModal";
import PetService from "@/services/PetService";
import IconCollar from "../icons/IconCollar";
import IconArrow from "../icons/IconArrow";
import IconOwner from "../icons/IconOwner";
import IconEdit from "../icons/IconEdit";
import IconTrash from "../icons/IconTrash";

interface CardProps {
  pet: Pet;
}

export function Card({ pet }: CardProps) {
  const { id, nome, nomeDono, telefone, animal, nascimento, raca } = pet;

  // Estados para controlar os modais
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleRemoveClick = () => {
    setIsRemoveModalOpen(true);
    setIsModalOpen(false);
  };

  const handleCloseRemoveModal = () => setIsRemoveModalOpen(false);

  const handlePetRemove = async () => {
    try {
      await PetService.removePet(pet.id);
      console.log(`Pet ${pet.nome} removido com sucesso.`);
      setIsRemoveModalOpen(false);
    } catch (error) {
      console.error('Erro ao remover pet:', error);
    }
  };

  const handleEditModalOpen = () => setIsEditModalOpen(true);

  const handleCloseEditModal = () => setIsEditModalOpen(false);

  const handleSavePet = async (editedPet: Pet) => {
    try {
      const updatedPet = await PetService.updatePet(editedPet.id, editedPet);
      console.log("Pet editado com sucesso:", updatedPet);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Erro ao editar pet:', error);
    }
  };

  const petImage = animal.toLowerCase() === "cachorro" ? "/dog.png" : "/cat.png";

  return (
    <div className="relative">
      <div
        className={`flex items-center p-4 shadow-md rounded-lg w-[350px] h-[90px] div-hover ${isModalOpen ? 'border-visible' : ''}`}
        style={{ background: "var(--gradient_1)" }}
      >
        <div
          className="w-[65px] h-[65px] rounded-full flex items-center justify-center"
          style={{ background: "var(--gradient_2)" }}
        >
          <img
            src={petImage}
            alt="Foto do Pet"
            className="w-[45px] h-[45px] object-contain"
          />
        </div>

        <div className="ml-4 text-[var(--light)] mr-3">
          <div className="flex gap-1">
            <IconCollar />
            <p className="flex">{nome}</p>
          </div>
          <div className="flex gap-1" >
            <IconOwner />
            <p className="flex">{nomeDono}</p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="ml-auto my-1"
        >
          <IconArrow/>
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-visible text-[var(--light)] absolute top-full mt-2 left-0 p-6 rounded-lg shadow-lg w-[350px] z-10 border-2 "
          style={{ background: "var(--gradient_1)" }}>
          <p>Raça: {raca}</p>
          <p>Telefone: {telefone}</p>
          <p>Nascimento: {nascimento}</p>

          <div className="m-2 justify-center w-full">
            <button
              onClick={handleEditModalOpen}
              className="justify-center text-[var(--color_2)] bg-[var(--light)] focus:ring-2 focus:ring-[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 w-full"
            >
              <IconEdit/>
              Editar
            </button>

            <button
              onClick={handleRemoveClick}
              className="justify-center text-[var(--light)] focus:ring-2 focus:ring-[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 w-full mt-3"
              style={{ background: "var(--gradient_2)" }}
            >
              <IconTrash/>
              Remover
            </button>
          </div>
        </div>
      )}

      {isRemoveModalOpen && (
        <RemovePetModal
          onClose={handleCloseRemoveModal}
          onRemove={handlePetRemove}
          pet={pet}
        />
      )}

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