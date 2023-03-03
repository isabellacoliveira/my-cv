import { createContext, ReactNode, useContext, useState } from "react";
import { Api } from "../services/api";
import ILinguagens from "../types/ILinguagens";


export function useLinguagens() {
	const contextoLinguagens = useContext(LinguagensContext);
    return contextoLinguagens
}

interface LinguagensProviderProps {
	children: ReactNode;
}

export interface LinguagensContext {
	getLinguagens(): void;
    linguagens: ILinguagens[];
}

const LinguagensContext = createContext({} as LinguagensContext);
LinguagensContext.displayName = "Linguagens Context";

export function LinguagensProvider({ children }: LinguagensProviderProps) {
    const [linguagens, setLinguagens] = useState<ILinguagens[]>([]);

	async function getLinguagens() {
		return new Promise(() => {
			Api.get<ILinguagens[]>("/linguagens")
				.then((resposta) => {
                    console.log(resposta.data);
					setLinguagens(resposta.data);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	return (
		<LinguagensContext.Provider
			value={{
				getLinguagens,
                linguagens
			}}
		>
			{children}
		</LinguagensContext.Provider>
	);
}