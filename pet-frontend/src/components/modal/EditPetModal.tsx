import { useState } from "react";
import { CreatePet } from "@/types/CreatePet";
import PetService from "@/services/PetService";

type Props = {
  onClose: () => void;
  onSave: (pet: CreatePet) => void;
  pet: CreatePet;
};

const EditPetModal: React.FC<Props> = ({ onClose, onSave, pet }) => {
  const [editedPet, setEditedPet] = useState<CreatePet>(pet);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedPet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAnimalChange = (animal: "Cachorro" | "Gato") => {
    setEditedPet((prevState) => ({
      ...prevState,
      animal,
    }));
  };

  const validateDateFormat = (date: string): boolean => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  };

  const handleSave = async () => {
    if (!validateDateFormat(editedPet.nascimento)) {
      alert("A data de nascimento deve estar no formato YYYY-MM-DD (ex: 2019-12-31)");
      return;
    }

    try {
      onSave(editedPet);
    } catch (error) {
      console.error("Erro ao salvar pet:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className="text-white rounded-2xl p-6 w-full max-w-md shadow-lg border border-[var(--color_2)]" style={{background: "var(--gradient_1)"}}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Editar Pet</h2>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Nome</label>
              <input name="nome" value={editedPet.nome} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Nome do Pet" />
            </div>
            <div>
              <label className="text-sm">Animal</label>
              <div className="flex gap-2 mt-1">
                <button onClick={() => handleAnimalChange('Cachorro')} className={`flex-1 px-2 py-1 rounded-md border ${editedPet.animal === 'Cachorro' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>Cachorro</button>
                <button onClick={() => handleAnimalChange('Gato')} className={`flex-1 px-2 py-1 rounded-md border ${editedPet.animal === 'Gato' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>Gato</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Dono</label>
              <input name="nomeDono" value={editedPet.nomeDono} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Nome do Dono" />
            </div>
            <div>
              <label className="text-sm">Raça</label>
              <input name="raca" value={editedPet.raca} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Raça do Pet" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Telefone</label>
              <input name="telefone" value={editedPet.telefone} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Telefone do Dono" />
            </div>
            <div>
              <label className="text-sm">Nascimento (Aproximado)</label>
              <input name="nascimento" value={editedPet.nascimento} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="YYYY-MM-DD" />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={onClose} className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">Voltar</button>
          <button onClick={handleSave} className="text-white px-4 py-2 rounded-lg font-semibold" style={{background: "var(--gradient_2)"}}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default EditPetModal;