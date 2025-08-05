// components/InfoCard/InfoCard.tsx

import React from 'react';
import { InfoCardProps } from '../../interfaces/infoCards';

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}

export default InfoCard;