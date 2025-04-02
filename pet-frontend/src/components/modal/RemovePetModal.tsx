import React from "react";
import IconName from "../icons/IconName";
import IconPet from "../icons/IconPet";
import IconOwner from "../icons/IconOwner";
import IconPhone from "../icons/IconPhone";
import IconDate from "../icons/IconDate";
import IconTrash from "../icons/IconTrash";

type Props = {
  onClose: () => void;
  onRemove: () => void;
  pet: {
    nome: string;
    nomeDono: string;
    telefone: string;
    animal: string;
    nascimento: string;
    raca: string;
  };
};

const RemovePetModal: React.FC<Props> = ({ onClose, onRemove, pet }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div
        className="text-white rounded-2xl p-6 w-full max-w-md shadow-lg border-2 border-[var(--color_2)]"
        style={{ background: "var(--gradient_1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36" cy="36" r="36" fill="url(#paint0_linear_126_5967)" />
              <path d="M52.1818 23.2727H45.6364V21.0909C45.6364 19.7407 45.1 18.4458 44.1453 17.4911C43.1905 16.5364 41.8956 16 40.5455 16H31.8182C30.468 16 29.1731 16.5364 28.2184 17.4911C27.2636 18.4458 26.7273 19.7407 26.7273 21.0909V23.2727H20.1818C19.6032 23.2727 19.0482 23.5026 18.639 23.9118C18.2299 24.3209 18 24.8759 18 25.4545C18 26.0332 18.2299 26.5882 18.639 26.9973C19.0482 27.4065 19.6032 27.6364 20.1818 27.6364H20.9091V52.3636C20.9091 53.3281 21.2922 54.253 21.9742 54.9349C22.6561 55.6169 23.581 56 24.5455 56H47.8182C48.7826 56 49.7075 55.6169 50.3895 54.9349C51.0714 54.253 51.4545 53.3281 51.4545 52.3636V27.6364H52.1818C52.7605 27.6364 53.3154 27.4065 53.7246 26.9973C54.1338 26.5882 54.3636 26.0332 54.3636 25.4545C54.3636 24.8759 54.1338 24.3209 53.7246 23.9118C53.3154 23.5026 52.7605 23.2727 52.1818 23.2727ZM31.0909 21.0909C31.0909 20.898 31.1675 20.713 31.3039 20.5766C31.4403 20.4403 31.6253 20.3636 31.8182 20.3636H40.5455C40.7383 20.3636 40.9233 20.4403 41.0597 20.5766C41.1961 20.713 41.2727 20.898 41.2727 21.0909V23.2727H31.0909V21.0909ZM47.0909 51.6364H25.2727V27.6364H47.0909V51.6364ZM34 33.4545V45.0909C34 45.6696 33.7701 46.2245 33.361 46.6337C32.9518 47.0429 32.3968 47.2727 31.8182 47.2727C31.2395 47.2727 30.6846 47.0429 30.2754 46.6337C29.8662 46.2245 29.6364 45.6696 29.6364 45.0909V33.4545C29.6364 32.8759 29.8662 32.3209 30.2754 31.9118C30.6846 31.5026 31.2395 31.2727 31.8182 31.2727C32.3968 31.2727 32.9518 31.5026 33.361 31.9118C33.7701 32.3209 34 32.8759 34 33.4545ZM42.7273 33.4545V45.0909C42.7273 45.6696 42.4974 46.2245 42.0882 46.6337C41.6791 47.0429 41.1241 47.2727 40.5455 47.2727C39.9668 47.2727 39.4118 47.0429 39.0027 46.6337C38.5935 46.2245 38.3636 45.6696 38.3636 45.0909V33.4545C38.3636 32.8759 38.5935 32.3209 39.0027 31.9118C39.4118 31.5026 39.9668 31.2727 40.5455 31.2727C41.1241 31.2727 41.6791 31.5026 42.0882 31.9118C42.4974 32.3209 42.7273 32.8759 42.7273 33.4545Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_126_5967" x1="-1.88281e-07" y1="36.5902" x2="72" y2="36.5902" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00CAFC" />
                  <stop offset="1" stop-color="#0056E2" />
                </linearGradient>
              </defs>
            </svg>

            <h2 className="text-xl font-semibold">Remover</h2>
          </div>
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>

        {/* Pet info */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconName /> Nome</label>
              <input
                value={pet.nome}
                disabled
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Nome do Pet"
              />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconPet />Animal</label>
              <input
                value={pet.animal}
                disabled
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconOwner />Dono</label>
              <input
                value={pet.nomeDono}
                disabled
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Nome do Dono"
              />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconPet />Raça</label>
              <input
                value={pet.raca}
                disabled
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Raça do Pet"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex gap-2"><IconPhone />Telefone</label>
              <input
                value={pet.telefone}
                disabled
                className="w-full bg-gray-800 p-2 rounded-md mt-1"
                placeholder="Telefone do Dono"
              />
            </div>
            <div>
              <label className="text-sm flex gap-2"><IconDate />Nascimento (Aproximado)</label>
              <input
                value={pet.nascimento}
                disabled
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00031 0C3.58328 0 0 3.58328 0 8.00031C0 12.4173 3.58328 16.0006 8.00031 16.0006C12.4173 16.0006 16.0006 12.4173 16.0006 8.00031C16.0006 3.58328 12.4173 0 8.00031 0ZM1.88633 8.00031C1.88633 4.62507 4.62507 1.88633 8.00031 1.88633C11.3755 1.88633 14.1143 4.62507 14.1143 8.00031C14.1143 11.3755 11.3755 14.1143 8.00031 14.1143C4.62507 14.1143 1.88633 11.3755 1.88633 8.00031ZM8.42656 5.72431C8.79345 5.35455 8.79112 4.75738 8.42137 4.39049C8.05161 4.02359 7.45444 4.02592 7.08754 4.39568L4.16986 7.33615C3.80498 7.70388 3.80498 8.29706 4.16986 8.66479L7.08754 11.6053C7.45444 11.975 8.05161 11.9773 8.42137 11.6105C8.79112 11.2436 8.79345 10.6464 8.42656 10.2766L7.10389 8.94363H11.1614C11.6823 8.94363 12.1045 8.52136 12.1045 8.00047C12.1045 7.47957 11.6823 7.05731 11.1614 7.05731H7.10389L8.42656 5.72431Z" fill="url(#paint0_linear_126_5917)" />
              <defs>
                <linearGradient id="paint0_linear_126_5917" x1="-4.18418e-08" y1="8.13146" x2="16.0006" y2="8.13146" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00CAFC" />
                  <stop offset="1" stop-color="#0056E2" />
                </linearGradient>
              </defs>
            </svg>

            Voltar
          </button>
          <button
            onClick={onRemove}
            className="text-white px-4 py-2 rounded-lg font-semibold flex items-center gap- bg-[var(--danger)]"
          >
            <IconTrash />
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemovePetModal;
