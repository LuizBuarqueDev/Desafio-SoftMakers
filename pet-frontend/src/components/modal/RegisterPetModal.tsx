import { useState } from "react";
import { CreatePet } from "@/types/CreatePet";
import PetService from "@/services/PetService";
import IconName from "../icons/IconPhone";
import IconPet from "../icons/IconPet";
import IconPlus from "../icons/IconPlus";
import IconDate from "../icons/IconDate";
import IconPhone from "../icons/IconPhone";

type Props = {
  onClose: () => void;
  onSave: (pet: CreatePet) => void;
};

const RegisterPetModal: React.FC<Props> = ({ onClose, onSave }) => {
  const [pet, setPet] = useState<CreatePet>({
    nome: "",
    nomeDono: "",
    telefone: "",
    animal: "Cachorro",
    nascimento: "",
    raca: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAnimalChange = (animal: "Cachorro" | "Gato") => {
    setPet((prevState) => ({
      ...prevState,
      animal,
    }));
  };

  const validateDateFormat = (date: string): boolean => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  };

  const handleSave = async () => {
    if (!validateDateFormat(pet.nascimento)) {
      alert("A data de nascimento deve estar no formato YYYY-MM-DD (ex: 2019-12-31)");
      return;
    }

    try {
      console.log("callBack: ", pet);
      onSave(pet);
    } catch (error) {
      console.error("Erro ao salvar pet:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className="text-white rounded-2xl p-6 w-full max-w-md shadow-lg border-2 border-[var(--color_2)]" style={{ background: "var(--gradient_1)" }}>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36" cy="36" r="36" fill="url(#paint0_linear_126_5744)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 36C16 24.954 24.954 16 36 16C47.046 16 56 24.954 56 36C56 47.046 47.046 56 36 56C24.954 56 16 47.046 16 36ZM36 20C31.7565 20 27.6869 21.6857 24.6863 24.6863C21.6857 27.6869 20 31.7565 20 36C20 40.2435 21.6857 44.3131 24.6863 47.3137C27.6869 50.3143 31.7565 52 36 52C40.2435 52 44.3131 50.3143 47.3137 47.3137C50.3143 44.3131 52 40.2435 52 36C52 31.7565 50.3143 27.6869 47.3137 24.6863C44.3131 21.6857 40.2435 20 36 20Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M38 26C38 25.4696 37.7893 24.9609 37.4142 24.5858C37.0391 24.2107 36.5304 24 36 24C35.4696 24 34.9609 24.2107 34.5858 24.5858C34.2107 24.9609 34 25.4696 34 26V34H26C25.4696 34 24.9609 34.2107 24.5858 34.5858C24.2107 34.9609 24 35.4696 24 36C24 36.5304 24.2107 37.0391 24.5858 37.4142C24.9609 37.7893 25.4696 38 26 38H34V46C34 46.5304 34.2107 47.0391 34.5858 47.4142C34.9609 47.7893 35.4696 48 36 48C36.5304 48 37.0391 47.7893 37.4142 47.4142C37.7893 47.0391 38 46.5304 38 46V38H46C46.5304 38 47.0391 37.7893 47.4142 37.4142C47.7893 37.0391 48 36.5304 48 36C48 35.4696 47.7893 34.9609 47.4142 34.5858C47.0391 34.2107 46.5304 34 46 34H38V26Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_126_5744" x1="-1.88281e-07" y1="36.5902" x2="72" y2="36.5902" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00CAFC" />
                  <stop offset="1" stop-color="#0056E2" />
                </linearGradient>
              </defs>
            </svg>

            <h2 className="text-xl font-semibold">
              Cadastrar</h2>
          </div>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconName /> Nome</label>
              <input name="nome" value={pet.nome} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Nome do Pet" />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconPet /> Animal</label>
              <div className="flex gap-2 mt-1">
                <button onClick={() => handleAnimalChange('Cachorro')} className={`flex-1 px-2 py-1 rounded-md border ${pet.animal === 'Cachorro' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>Cachorro</button>
                <button onClick={() => handleAnimalChange('Gato')} className={`flex-1 px-2 py-1 rounded-md border ${pet.animal === 'Gato' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>Gato</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconPet /> Dono</label>
              <input name="nomeDono" value={pet.nomeDono} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Nome do Dono" />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconPet /> Raça</label>
              <input name="raca" value={pet.raca} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Raça do Pet" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconPhone/> Telefone</label>
              <input name="telefone" value={pet.telefone} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Telefone do Dono" />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconDate /> Nascimento (Aproximado)</label>
              <input name="nascimento" value={pet.nascimento} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="YYYY-MM-DD" />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={onClose} className="bg-white text-blue-600 px-4 py-2 rounded-lg flex gap-2 items-center font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00031 0C3.58328 0 0 3.58328 0 8.00031C0 12.4173 3.58328 16.0006 8.00031 16.0006C12.4173 16.0006 16.0006 12.4173 16.0006 8.00031C16.0006 3.58328 12.4173 0 8.00031 0ZM1.88633 8.00031C1.88633 4.62507 4.62507 1.88633 8.00031 1.88633C11.3755 1.88633 14.1143 4.62507 14.1143 8.00031C14.1143 11.3755 11.3755 14.1143 8.00031 14.1143C4.62507 14.1143 1.88633 11.3755 1.88633 8.00031ZM8.42656 5.72431C8.79345 5.35455 8.79112 4.75738 8.42137 4.39049C8.05161 4.02359 7.45444 4.02592 7.08754 4.39568L4.16986 7.33615C3.80498 7.70388 3.80498 8.29706 4.16986 8.66479L7.08754 11.6053C7.45444 11.975 8.05161 11.9773 8.42137 11.6105C8.79112 11.2436 8.79345 10.6464 8.42656 10.2766L7.10389 8.94363H11.1614C11.6823 8.94363 12.1045 8.52136 12.1045 8.00047C12.1045 7.47957 11.6823 7.05731 11.1614 7.05731H7.10389L8.42656 5.72431Z" fill="url(#paint0_linear_126_5761)" />
              <defs>
                <linearGradient id="paint0_linear_126_5761" x1="-4.18418e-08" y1="8.13146" x2="16.0006" y2="8.13146" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00CAFC" />
                  <stop offset="1" stop-color="#0056E2" />
                </linearGradient>
              </defs>
            </svg>
            Voltar
          </button>
          <button onClick={handleSave} className="text-white px-4 py-2 flex gap-2 rounded-lg font-semibold" style={{ background: "var(--gradient_2)" }}><IconPlus /> Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPetModal;