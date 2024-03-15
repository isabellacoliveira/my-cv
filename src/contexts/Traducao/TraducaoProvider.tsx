import React, { createContext, useState, useContext, ReactNode } from 'react';

interface TraducaoContextType {
  traducao: string;
  toggleTraducao: () => void;
}

interface TraducaoProviderProps {
	children: ReactNode;
}

const TraducaoContext = createContext<TraducaoContextType | undefined>(undefined);

export const useTraducao = () => {
  const context = useContext(TraducaoContext);
  if (!context) {
    throw new Error('useTraducao deve ser usado dentro de um TraducaoProvider');
  }
  return context;
};

export function TraducaoProvider({ children }: TraducaoProviderProps) {
  const [traducao, setTraducao] = useState<string>('en'); // Defina o idioma padrão aqui

  const toggleTraducao = () => {
    setTraducao(traducao === 'en' ? 'pt' : 'en');
  };

  return (
    <TraducaoContext.Provider value={{ traducao, toggleTraducao }}>
      {children}
    </TraducaoContext.Provider>
  );
};
