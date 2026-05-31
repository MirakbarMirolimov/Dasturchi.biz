import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      loginTitle: "Welcome back",
      loginDesc: "Login to continue learning DSA",
      loginButton: "Login",

      registerTitle: "Create account",
      registerDesc: "Start your Dasturchi journey",
      registerButton: "Create account",

      email: "Email",
      password: "Password",
      username: "Username",
    },

    uz: {
      loginTitle: "Xush kelibsiz",
      loginDesc: "DSA o‘rganishni davom ettirish uchun kiring",
      loginButton: "Kirish",

      registerTitle: "Ro‘yxatdan o‘tish",
      registerDesc: "Dasturchi sayohatingizni boshlang",
      registerButton: "Hisob Ochish",

      email: "Email",
      password: "Parol",
      username: "Foydalanuvchi nomi",
    },
  };

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);