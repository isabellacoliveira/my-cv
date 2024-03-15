import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          about_me: 'About Me',
          academic_formation: 'Academic Formation',
          professional_experience: 'Profissional Experience',
          services: 'Services',
          developer: 'FULL STACK  DEVELOPER',
          resume: 'As a Full-Stack Web Developer, my expertise covers the creation and enhancement of projects using React, Angular, Typescript, C#, and .NET, spanning from engaging SPAs to robust APIs. My background includes extensive knowledge of web development platforms, proficiency in relational databases, and experience with version control systems (GIT) and the Azure DevOps tool.'
          // Adicione mais chaves e valores para outras strings em inglês aqui
        }
      },
      pt: {
        translation: {
          about_me: 'Sobre Mim',
          academic_formation: 'Formação Acadêmica',
          professional_experience: 'Experiência Profissional',
          services: 'Serviços',
          developer: 'DESENVOLVEDORA     FULL-STACK ',
          resume: 'Como Desenvolvedora Web Full-Stack, minha expertise abrange a criação  e aprimoramento de projetos com React, Angular, Typescript, C# e .NET, abarcando desde SPAs envolventes  até APIs robustas. Minha bagagem inclui amplo conhecimento de plataformas de desenvolvimento web, proficiência  em bancos de dados relacionais e experiência com sistemas de gerenciamento de versão (GIT) e a ferramenta Azure Devops.'
          // Adicione mais chaves e valores para outras strings em português aqui
        }
      }
    },
    lng: 'en', // Defina o idioma padrão aqui
    fallbackLng: 'en', // Idioma de fallback, se a tradução não estiver disponível
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
