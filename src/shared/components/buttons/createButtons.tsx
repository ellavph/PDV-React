import React from 'react';
import { CreateButtonsProps } from '../../interfaces/createButtons';

const CreateButtons: React.FC<CreateButtonsProps> = ({ onCreateOrder, onCreateProduct }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={onCreateOrder}>Criar Pedido</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={onCreateProduct}>Criar Produto</button>
    </div>
  );
}

export default CreateButtons;