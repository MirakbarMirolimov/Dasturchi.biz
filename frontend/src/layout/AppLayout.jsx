import { Outlet } from "react-router-dom";
import { useLanguage } from "@/LanguageContext";

export default function AppLayout() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* GLOBAL TOP BAR */}
      <div className="fixed top-0 left-0 w-full flex justify-end px-6 py-4 z-50">
        <div className="flex gap-2 bg-zinc-900 border border-zinc-800 rounded-xl p-1">

          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 text-sm rounded-lg transition ${
              lang === "en"
                ? "bg-[#5B913B] text-black"
                : "text-white"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("uz")}
            className={`px-3 py-1 text-sm rounded-lg transition ${
              lang === "uz"
                ? "bg-[#5B913B] text-black"
                : "text-white"
            }`}
          >
            UZ
          </button>

        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="pt-16">
        <Outlet />
      </div>

    </div>
  );
}