import { createContext, ReactNode, useContext, useState } from "react";
import { Api } from "../services/api";
import IFormacaoAcademica from "../types/IFormacaoAcademica";
export function useFormacaoAcademica() {
	const contextoFormacaoAcademica = useContext(FormacaoAcademicaContext);
    return contextoFormacaoAcademica
}

interface FormacaoAcademicaProviderProps {
	children: ReactNode;
}

export interface FormacaoAcademicaContext {
	getFormacoes(): void;
    formacaoAcademica: IFormacaoAcademica[];
}

const FormacaoAcademicaContext = createContext({} as FormacaoAcademicaContext);
FormacaoAcademicaContext.displayName = "FormacaoAcademica Context";

export function FormacaoAcademicaProvider({ children }: FormacaoAcademicaProviderProps) {
    const [formacaoAcademica, setFormacaoAcademica] = useState<IFormacaoAcademica[]>([]);

	async function getFormacoes() {
		return new Promise(() => {
			Api.get<IFormacaoAcademica[]>("/FormacaoAcademica")
				.then((resposta) => {
					setFormacaoAcademica(resposta.data);
                    console.log(resposta.data);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	return (
		<FormacaoAcademicaContext.Provider
			value={{
				getFormacoes,
                formacaoAcademica
			}}
		>
			{children}
		</FormacaoAcademicaContext.Provider>
	);
}