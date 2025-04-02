import React, { useState } from "react";

type Props = {
  onClose: () => void;
  onSave: (pet: {id:string; nome: string; nomeDono: string; telefone: string; animal: string; nascimento: string; raca: string }) => void;
  pet: {
    id: string
    nome: string;
    nomeDono: string;
    telefone: string;
    animal: string;
    nascimento: string;
    raca: string;
  };
};

const EditPetModal: React.FC<Props> = ({ onClose, onSave, pet }) => {
  // Estados para controlar os dados editados
  const [editedPet, setEditedPet] = useState(pet);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedPet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedPet); // Passa os dados atualizados
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div
        className="text-white rounded-2xl p-6 w-full max-w-md shadow-lg border border-[var(--color_2)]"
        style={{ background: "var(--gradient_1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[var(--color_2)] p-3 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Editar Pet</h2>
          </div>
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>

        {/* Formulário de Edição */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Nome</label>
              <input
                name="nome"
                value={editedPet.nome}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Nome do Pet"
              />
            </div>
            <div>
              <label className="text-sm">Animal</label>
              <input
                name="animal"
                value={editedPet.animal}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Dono</label>
              <input
                name="nomeDono"
                value={editedPet.nomeDono}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Nome do Dono"
              />
            </div>
            <div>
              <label className="text-sm">Raça</label>
              <input
                name="raca"
                value={editedPet.raca}
                onChange={handleChange}
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
                value={editedPet.telefone}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Telefone do Dono"
              />
            </div>
            <div>
              <label className="text-sm">Nascimento (Aproximado)</label>
              <input
                name="nascimento"
                value={editedPet.nascimento}
                onChange={handleChange}
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
            className="text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
            style={{ background: "var(--gradient_2)" }}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPetModal;