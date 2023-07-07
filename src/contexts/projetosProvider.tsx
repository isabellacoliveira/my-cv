import { createContext, ReactNode, useContext, useState } from "react";
import { Api } from "../services/api";
import IProjeto from "../types/IProjeto";

export function useProjetos() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const contextopProjetos = useContext(ProjetosContext);
    return contextopProjetos
}

interface ProjetosProviderProps {
	children: ReactNode;
}

export interface ProjetosContext {
	getProjetos(): void;
    projetos: IProjeto[];
}

const ProjetosContext = createContext({} as ProjetosContext);
ProjetosContext.displayName = "Projetos Context";

export function ProjetosProvider({ children }: ProjetosProviderProps) {
    const [projetos, setProjetos] = useState<IProjeto[]>([]);

	async function getProjetos() {
		return new Promise(() => {
			Api.get<IProjeto[]>("/projetos")
				.then((resposta) => {
					setProjetos(resposta.data);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	return (
		<ProjetosContext.Provider
			value={{
				getProjetos,
                projetos
			}}
		>
			{children}
		</ProjetosContext.Provider>
	);
}