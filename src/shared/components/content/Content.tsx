import React, { ReactNode } from 'react';

interface ContentProps {
  loading: boolean;
  children: ReactNode; // Definindo children como ReactNode
}

const Content: React.FC<ContentProps> = ({ loading, children }) => {
  return (
    <div className="col-span-11 py-4">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <p className="text-gray-600 mt-2">Carregando...</p>
          </div>
        </div>
      ) : (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Content;
