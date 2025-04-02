"use client";

import { useState } from "react";
import { Pet } from "@/types/Pet";
import { format } from "date-fns";

type Props = {
  onClose: () => void;
  onSave: (pet: Pet) => void;
};

const RegisterPetModal: React.FC<Props> = ({ onClose, onSave }) => {
  // Inicializando o estado com o tipo Pet
  const [pet, setPet] = useState<Pet>({
    nome: '',
    nomeDono: '',
    telefone: '',
    animal: 'Cachorro',
    nascimento: '',
    raca: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Atualizando o estado com base no valor anterior
    setPet((prevState) => ({
      ...prevState,
      [name]: value, // Atualizando o campo específico
    }));
  };

  const handleAnimalChange = (animal: 'Cachorro' | 'Gato') => {
    setPet((prevState) => ({
      ...prevState,
      animal,
    }));
  };

  const handleSave = async () => {
    try {
      // Limpa o telefone para remover caracteres não numéricos
      const cleanedPhone = pet.telefone.replace(/\D/g, ''); // Remove tudo que não seja número

      // Formata a data de nascimento para o formato ISO (yyyy-MM-dd)
      const formattedDate = pet.nascimento ? format(new Date(pet.nascimento), 'yyyy-MM-dd') : '';

      // Atualiza o objeto pet com os dados limpos e formatados
      const formattedPet = {
        ...pet,
        telefone: cleanedPhone,
        nascimento: formattedDate,
      };

      console.log("Dados enviados para a API:", formattedPet);
      onSave(formattedPet); // Chama o callback onSave com o pet formatado
    } catch (error) {
      console.error('Erro ao salvar pet:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className="text-white rounded-2xl p-6 w-full max-w-md shadow-lg border border-[var(--color_2)]"
        style={{ background: "var(--gradient_1)" }}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[var(--color_2)] p-3 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Cadastrar Pet</h2>
          </div>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>

        {/* Pet info */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Nome</label>
              <input
                name="nome"
                value={pet.nome}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Nome do Pet"
              />
            </div>
            <div>
              <label className="text-sm">Animal</label>
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => handleAnimalChange('Cachorro')}
                  className={`flex-1 px-2 py-1 rounded-md border ${pet.animal === 'Cachorro' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Cachorro
                </button>
                <button
                  onClick={() => handleAnimalChange('Gato')}
                  className={`flex-1 px-2 py-1 rounded-md border ${pet.animal === 'Gato' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}
                >
                  Gato
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Dono</label>
              <input
                name="nomeDono"
                value={pet.nomeDono}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Nome do Dono"
              />
            </div>
            <div>
              <label className="text-sm">Raça</label>
              <input
                name="raca"
                value={pet.raca}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Raça do Pet"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Telefone</label>
              <input
                name="telefone"
                value={pet.telefone}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Telefone do Dono"
              />
            </div>
            <div>
              <label className="text-sm">Nascimento (Aproximado)</label>
              <input
                name="nascimento"
                value={pet.nascimento}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="28/08/2020"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
          >
            <span>&#x21A9;</span> Voltar
          </button>
          <button
            onClick={handleSave}
            className=" text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
            style={{ background: "var(--gradient_2" }}
          >
            + Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPetModal;