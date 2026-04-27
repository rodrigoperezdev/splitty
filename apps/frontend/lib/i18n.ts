export const locales = ["en", "es", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    title: "Splitty",
    subtitle: "A simple app to calculate shared costs with friends.",
    versionLabel: "Splitty version 0.0.1",
    whatsNextTitle: "What’s next?",
    whatsNextText: "Add pages for groups, expenses, and settlement details. This scaffold is ready for a monorepo backend later.",
    techStackTitle: "Tech stack",
    techStackText: "Next.js, React, TypeScript, Tailwind CSS.",
    chooseLanguage: "Choose your language",
    english: "English",
    spanish: "Spanish",
    portuguese: "Português"
  },
  es: {
    title: "Splitty",
    subtitle: "Una app sencilla para calcular costos compartidos con amigos.",
    versionLabel: "Splitty versión 0.0.1",
    whatsNextTitle: "¿Qué sigue?",
    whatsNextText: "Agrega páginas para grupos, gastos y detalles de liquidación. Este scaffold está listo para un backend en monorepo más adelante.",
    techStackTitle: "Stack tecnológico",
    techStackText: "Next.js, React, TypeScript, Tailwind CSS.",
    chooseLanguage: "Elige tu idioma",
    english: "Inglés",
    spanish: "Español",
    portuguese: "Portugués"
  },
  pt: {
    title: "Splitty",
    subtitle: "Um app simples para calcular custos compartilhados com amigos.",
    versionLabel: "Splitty versão 0.0.1",
    whatsNextTitle: "O que vem a seguir?",
    whatsNextText: "Adicione páginas para grupos, despesas e detalhes de acerto. Este scaffold está pronto para um backend monorepo depois.",
    techStackTitle: "Stack tecnológico",
    techStackText: "Next.js, React, TypeScript, Tailwind CSS.",
    chooseLanguage: "Escolha seu idioma",
    english: "Inglês",
    spanish: "Espanhol",
    portuguese: "Português"
  }
} as const;

export function getTranslations(locale: string) {
  return translations[locales.includes(locale as Locale) ? locale as Locale : defaultLocale];
}
