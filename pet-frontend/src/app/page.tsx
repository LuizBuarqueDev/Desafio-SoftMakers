"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import RegisterPetModal from "@/components/modal/RegisterPetModal";
import { SearchBar } from "@/components/search_bar/SearchBar";
import PetService from "@/services/PetService";
import { Pet } from "@/types/Pet";
import { CreatePet } from "@/types/CreatePet";

export default function Home() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const petsData = await PetService.getPets();
      setPets(petsData);
      setFilteredPets(petsData);
    } catch (error) {
      console.error("Erro ao buscar pets:", error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredPets(pets);
      return;
    }
    const filtered = pets.filter((pet) =>
      pet.nome.toLowerCase().includes(query.toLowerCase()) ||
      pet.nomeDono.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPets(filtered);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSavePet = async (pet: CreatePet) => {
    try {
      const savedPet = await PetService.createPet(pet);
      setIsModalOpen(false);
      fetchPets();
    } catch (error) {
      console.error("Erro ao cadastrar pet:", error);
    }
  };

  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main>
      <Header />
      <div className="flex justify-between relative w-full mb-8">
        <div className="flex flex-grow">
          <SearchBar onSearch={handleSearch} />
        </div>
        <button
          className="text-[var(--light)] transform focus:ring-2 focus:[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 mx-3"
          style={{ background: "var(--gradient_2)" }}
          onClick={() => setIsModalOpen(true)}
        >
          Cadastrar
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {currentPets.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </div>

      {/* Pag */}
      <div className="flex justify-end mt-4 w-full pr-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          ←
        </button>
        <span className="px-4 py-2">
          {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          →
        </button>
      </div>
      {isModalOpen && (
        <RegisterPetModal onClose={handleCloseModal} onSave={handleSavePet} />
      )}
    </main>
  );
}
