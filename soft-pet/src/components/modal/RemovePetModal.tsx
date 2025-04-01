import React from 'react';

type Props = {
  onClose: () => void;
  onRemove: (petId: string) => void;
  petNome: string;
};

const RemovePetModal: React.FC<Props> = ({ onClose, onRemove, petNome }) => {
  const handleRemove = () => {
    onRemove(petNome); // Chama a função para remover o pet
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className="text-white rounded-2xl p-6 w-full max-w-md shadow-lg border border-[var(--color_2)]"
      style={{background: "var(--gradient_1)"}}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[var(--color_2)] p-3 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Remover Pet</h2>
          </div>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>

        {/* Pet removal confirmation */}
        <div className="space-y-4">
          <p className="text-sm">Tem certeza que deseja remover o pet "{petNome}"? Essa ação não pode ser desfeita.</p>
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
            onClick={handleRemove}
            className="text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
            style={{background: "var(--gradient_2)"}}>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemovePetModal;
