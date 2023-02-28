// definição de tipos de estilos que ficarão disponiveis em toda a aplicação 
// sobreescrever uma definição de tipos presentes 
import 'styled-components'; 

declare module 'styled-components'{
    export interface DefaultTheme{
        // passar formato que o meu tema tem 
        title: string; 

        colors: {
            primary: string; 
            secundary: string; 
    
            background: string;
            text: string;
        }
    }
}