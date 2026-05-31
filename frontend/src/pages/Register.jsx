import { useState } from "react";
import { supabase } from "@/services/supabase";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/LanguageContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">

      {/* REGISTER BOX */}
      <div className="w-full max-w-md p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl shadow-2xl">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-white text-center">
          {t('registerTitle')}
        </h1>

        <p className="text-center text-zinc-400 text-sm mt-2">
          {t('registerDesc')}
        </p>

        {/* USERNAME */}
        <input
          className="w-full mt-6 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white outline-none focus:border-[#5B913B] focus:ring-2 focus:ring-[#5B913B]/30 transition"
          placeholder={t('username')}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* EMAIL */}
        <input
          className="w-full mt-4 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white outline-none focus:border-[#5B913B] focus:ring-2 focus:ring-[#5B913B]/30 transition"
          placeholder={t('email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="w-full mt-4 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white outline-none focus:border-[#5B913B] focus:ring-2 focus:ring-[#5B913B]/30 transition"
          placeholder={t('password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          className="w-full mt-6 py-3 rounded-xl font-semibold text-black bg-[#5B913B] hover:brightness-110 active:scale-[0.98] transition"
        >
          {t('registerButton')}
        </button>

        {/* FOOTER */}
        <p className="text-sm text-center text-zinc-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#5B913B] cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}