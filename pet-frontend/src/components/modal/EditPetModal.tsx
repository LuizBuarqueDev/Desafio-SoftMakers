import { useState } from "react";
import { Pet } from "@/types/Pet";
import IconEdit from "../icons/IconEdit";
import IconLeftArrow from "../icons/IconLeftArrow";
import IconName from "../icons/IconName";
import IconPet from "../icons/IconPet";
import IconOwner from "../icons/IconOwner";
import IconPhone from "../icons/IconPhone";
import IconDate from "../icons/IconDate";

type Props = {
  onClose: () => void;
  onSave: (pet: Pet) => void;
  pet: Pet;
};

const EditPetModal: React.FC<Props> = ({ onClose, onSave, pet }) => {
  const [editedPet, setEditedPet] = useState<Pet>(pet);

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
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>

      <div className="text-white rounded-2xl p-6 w-full max-w-md shadow-lg border-2 border-[var(--color_2)]" style={{ background: "var(--gradient_1)" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl flex items-center gap-5 font-semibold">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36" cy="36" r="36" fill="url(#paint0_linear_126_5882)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6768 17C48.0004 17 46.3926 17.6657 45.2068 18.8506L45.2052 18.8522L42.5906 21.4575C42.4853 21.5284 42.3852 21.6105 42.292 21.7037C42.2005 21.7951 42.1198 21.8932 42.0498 21.9964L27.8826 36.1131C27.506 36.4884 27.2943 36.9982 27.2943 37.5298V43.7064C27.2943 44.811 28.1897 45.7064 29.2943 45.7064H35.4708C36.0025 45.7064 36.5123 45.4947 36.8875 45.1181L51.0042 30.9509C51.1074 30.8808 51.2055 30.8001 51.297 30.7087C51.3901 30.6155 51.4722 30.5154 51.5432 30.41L54.1485 27.7954L54.1497 27.7941C55.3349 26.6083 56.0007 25.0004 56.0007 23.3238C56.0007 21.6466 55.3344 20.0381 54.1485 18.8522C52.9625 17.6663 51.354 17 49.6768 17ZM31.2943 38.3604L43.7294 25.9696L47.0311 29.2712L34.6403 41.7064H31.2943V38.3604ZM46.5629 23.1462L49.8545 26.4378L51.3175 24.9695L51.32 24.967C51.7558 24.5312 52.0007 23.9401 52.0007 23.3238C52.0007 22.7075 51.7558 22.1164 51.32 21.6806C50.8842 21.2448 50.2932 21 49.6768 21C49.0605 21 48.4695 21.2448 48.0337 21.6806L48.0312 21.6831L46.5629 23.1462ZM23.1177 25.2355C21.4952 25.2355 19.9391 25.88 18.7918 27.0273C17.6445 28.1746 17 29.7306 17 31.3532V49.8828C17 51.5053 17.6445 53.0614 18.7918 54.2087C19.9391 55.3559 21.4952 56.0005 23.1177 56.0005H41.6473C43.2698 56.0005 44.8259 55.3559 45.9732 54.2087C47.1205 53.0614 47.765 51.5053 47.765 49.8828V47.8239C47.765 46.7194 46.8696 45.8239 45.765 45.8239C44.6605 45.8239 43.765 46.7194 43.765 47.8239V49.8828C43.765 50.4444 43.5419 50.9831 43.1448 51.3802C42.7476 51.7774 42.209 52.0005 41.6473 52.0005H23.1177C22.556 52.0005 22.0174 51.7774 21.6203 51.3802C21.2231 50.9831 21 50.4444 21 49.8828V31.3532C21 30.7915 21.2231 30.2529 21.6203 29.8557C22.0174 29.4586 22.556 29.2355 23.1177 29.2355H25.1765C26.2811 29.2355 27.1765 28.34 27.1765 27.2355C27.1765 26.1309 26.2811 25.2355 25.1765 25.2355H23.1177Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_126_5882" x1="-1.88281e-07" y1="36.5902" x2="72" y2="36.5902" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00CAFC" />
                  <stop offset="1" stop-color="#0056E2" />
                </linearGradient>
              </defs>
            </svg>
            Editar
          </h2>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconName /> Nome</label>
              <input name="nome" value={editedPet.nome} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Nome do Pet" />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconPet /> Animal</label>
              <div className="flex gap-2 mt-1">
                <button onClick={() => handleAnimalChange('Cachorro')} className={`flex-1 px-2 py-1 rounded-md border ${editedPet.animal === 'Cachorro' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>Cachorro</button>
                <button onClick={() => handleAnimalChange('Gato')} className={`flex-1 px-2 py-1 rounded-md border ${editedPet.animal === 'Gato' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>Gato</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconOwner />Dono</label>
              <input name="nomeDono" value={editedPet.nomeDono} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Nome do Dono" />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconPet /> Raça</label>
              <input name="raca" value={editedPet.raca} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Raça do Pet" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconPhone /> Telefone</label>
              <input name="telefone" value={editedPet.telefone} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="Telefone do Dono" />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconDate /> Nascimento (Aproximado)</label>
              <input name="nascimento" value={editedPet.nascimento} onChange={handleInputChange} className="w-full bg-gray-800 p-2 rounded-md mt-1" placeholder="YYYY-MM-DD" />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={onClose} className="bg-white flex gap-2 items-center text-blue-600 px-4 py-2 rounded-lg font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00031 0C3.58328 0 0 3.58328 0 8.00031C0 12.4173 3.58328 16.0006 8.00031 16.0006C12.4173 16.0006 16.0006 12.4173 16.0006 8.00031C16.0006 3.58328 12.4173 0 8.00031 0ZM1.88633 8.00031C1.88633 4.62507 4.62507 1.88633 8.00031 1.88633C11.3755 1.88633 14.1143 4.62507 14.1143 8.00031C14.1143 11.3755 11.3755 14.1143 8.00031 14.1143C4.62507 14.1143 1.88633 11.3755 1.88633 8.00031ZM8.42656 5.72431C8.79345 5.35455 8.79112 4.75738 8.42137 4.39049C8.05161 4.02359 7.45444 4.02592 7.08754 4.39568L4.16986 7.33615C3.80498 7.70388 3.80498 8.29706 4.16986 8.66479L7.08754 11.6053C7.45444 11.975 8.05161 11.9773 8.42137 11.6105C8.79112 11.2436 8.79345 10.6464 8.42656 10.2766L7.10389 8.94363H11.1614C11.6823 8.94363 12.1045 8.52136 12.1045 8.00047C12.1045 7.47957 11.6823 7.05731 11.1614 7.05731H7.10389L8.42656 5.72431Z" fill="url(#paint0_linear_126_5835)" />
              <defs>
                <linearGradient id="paint0_linear_126_5835" x1="-4.18418e-08" y1="8.13146" x2="16.0006" y2="8.13146" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00CAFC" />
                  <stop offset="1" stop-color="#0056E2" />
                </linearGradient>
              </defs>
            </svg>
            Voltar
          </button>

          <button onClick={handleSave} className="text-white px-4 py-2 rounded-lg gap-2 flex font-semibold" style={{ background: "var(--gradient_2)" }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5851 0C12.8498 0 12.1446 0.291948 11.6245 0.81165L11.6237 0.812438L10.563 1.86937C10.5158 1.90245 10.4708 1.94008 10.4286 1.98227C10.3873 2.02358 10.3503 2.0676 10.3177 2.11377L4.51734 7.89349C4.32903 8.08113 4.22319 8.33603 4.22319 8.60186V11.1358C4.22319 11.6881 4.6709 12.1358 5.22319 12.1358H7.75711C8.02295 12.1358 8.27784 12.0299 8.46548 11.8416L14.2452 6.04123C14.2914 6.00866 14.3354 5.97171 14.3767 5.9304C14.4189 5.88822 14.4565 5.8432 14.4896 5.79596L15.5465 4.73524L15.5473 4.7345C16.067 4.21437 16.359 3.50916 16.359 2.77384C16.359 2.03817 16.0667 1.33263 15.5465 0.812438C15.0263 0.292242 14.3208 0 13.5851 0ZM6.22319 9.01712L11.145 4.11288L12.2461 5.214L7.34185 10.1358H6.22319V9.01712ZM12.5617 2.7012L13.6578 3.79726L14.1311 3.32229L14.1323 3.32102C14.2774 3.1759 14.359 2.97907 14.359 2.77384C14.359 2.5686 14.2774 2.37177 14.1323 2.22665C13.9872 2.08153 13.7904 2 13.5851 2C13.3799 2 13.1831 2.08153 13.038 2.22665L13.0367 2.22791L12.5617 2.7012ZM2.68928 3.3786C1.97604 3.3786 1.29201 3.66193 0.787673 4.16627C0.283334 4.67061 0 5.35464 0 6.06788V13.6697C0 14.3829 0.283334 15.0669 0.787673 15.5713C1.29201 16.0756 1.97604 16.3589 2.68928 16.3589H10.2911C11.0043 16.3589 11.6883 16.0756 12.1927 15.5713C12.697 15.0669 12.9803 14.3829 12.9803 13.6697V12.825C12.9803 12.2727 12.5326 11.825 11.9803 11.825C11.4281 11.825 10.9803 12.2727 10.9803 12.825V13.6697C10.9803 13.8525 10.9077 14.0278 10.7785 14.1571C10.6492 14.2863 10.4739 14.3589 10.2911 14.3589H2.68928C2.50647 14.3589 2.33115 14.2863 2.20189 14.1571C2.07262 14.0278 2 13.8525 2 13.6697V6.06788C2 5.88507 2.07262 5.70975 2.20189 5.58049C2.33115 5.45122 2.50647 5.3786 2.68928 5.3786H3.53392C4.08621 5.3786 4.53392 4.93088 4.53392 4.3786C4.53392 3.82631 4.08621 3.3786 3.53392 3.3786H2.68928Z" fill="white" />
            </svg>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPetModal;