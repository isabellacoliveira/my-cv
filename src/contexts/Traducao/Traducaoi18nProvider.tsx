// TraducaoI18nProvider.tsx

import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../services/i18n/i18n'; // Importe seu arquivo de configuração do i18next
import { useTraducao } from './TraducaoProvider';

interface TraducaoProviderProps {
	children: ReactNode;
}

const TraducaoI18nProvider = ({ children }: TraducaoProviderProps) => {
  const { traducao } = useTraducao();

  // Atualize o idioma do i18next com base no contexto de tradução
  i18n.changeLanguage(traducao);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TraducaoI18nProvider;
