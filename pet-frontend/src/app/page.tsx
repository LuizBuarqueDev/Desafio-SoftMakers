"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import RegisterPetModal from "@/components/modal/RegisterPetModal";
import { SearchBar } from "@/components/search_bar/SearchBar";
import PetService from "@/services/PetService";
import { Pet } from "@/types/Pet";

export default function Home() {
  const [pets, setPets] = useState<Pet[]>([]); // Estado para armazenar a lista de pets
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para buscar os pets da API
  const fetchPets = async () => {
    try {
      const petsData = await PetService.getPets(); // Usando o serviço para buscar os pets
      setPets(petsData); // Atualizando o estado com os pets retornados pela API
    } catch (error) {
      console.error("Erro ao buscar pets:", error);
    }
  };

  // Chama a função fetchPets quando o componente for montado
  useEffect(() => {
    fetchPets();
  }, []);

  // Função para fechar o modal
  const handleCloseModal = () => setIsModalOpen(false);

  // Função para salvar um pet e atualizar a lista de pets
  const handleSavePet = async (pet: Pet) => {
    console.log("Dados enviados para a API:", pet);
    try {
      console.log("Pet cadastrado:", pet);
      const savedPet = await PetService.createPet(pet); // Cria o pet
      setIsModalOpen(false); // Fecha o modal de cadastro após salvar
      fetchPets(); // Atualiza a lista de pets após o cadastro
    } catch (error) {
      console.error('Erro ao salvar pet:', error);
    }
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
          onClick={() => setIsModalOpen(true)} // Abre o modal de cadastro ao clicar
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