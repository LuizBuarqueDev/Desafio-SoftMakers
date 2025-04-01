'use client';

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import RegisterPetModal from "@/components/modal/RegisterPetModal";
import { SearchBar } from "@/components/search_bar/SearchBar";
import { Pet } from "@/types/Pet";

const pets = [
  {
    nome: "Simba Farias",
    nomeDono: "Maria Oliveira",
    telefone: "(11) 98765-4321",
    animal: "Cachorro",
    nascimento: "01/01/2020",
    raca: "Labrador"
  },
  {
    nome: "Simba Farias",
    nomeDono: "João Silva",
    telefone: "(21) 98876-5432",
    animal: "Gato",
    nascimento: "15/03/2021",
    raca: "Persa"
  },
  {
    nome: "Simba Farias",
    nomeDono: "Ana Souza",
    telefone: "(31) 98765-1234",
    animal: "Coelho",
    nascimento: "22/08/2019",
    raca: "Mini Rex"
  }
];

export default function Home() {
  // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Função para salvar os dados do pet
  const handleSavePet = (pet: Pet) => {
    console.log("Pet cadastrado:", pet);
    setIsModalOpen(false); // Fechar o modal após salvar
  };

  return (
    <main>
      <Header />
      <div className="flex justify-between relative w-full mb-8">
        <div className="flex flex-grow">
          <SearchBar />
        </div>

        <button
          className="text-[var(--light)] transform focus:ring-2 focus:[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 mx-3"
          style={{ background: "var(--gradient_2)" }}
          onClick={() => setIsModalOpen(true)} // Abre o modal ao clicar
        >
          <svg
            className="w-[25px] h-[25px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Cadastrar
        </button>
      </div>

      <div className="flex gap-4">
        {pets.map((pet, index) => (
          <Card key={index} pet={pet} />
        ))}
      </div>

      {/* Modal de Cadastro de Pet */}
      {isModalOpen && (
        <RegisterPetModal
          onClose={handleCloseModal}
          onSave={handleSavePet}
        />
      )}
    </main>
  );
}