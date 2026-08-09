"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Lock, AlertCircle } from "lucide-react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const password = String(fd.get("password") || "");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) setError("Identifiants incorrects.");
  }

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <div className="w-11 h-11 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center mb-4 mx-auto">
        <Lock size={19} />
      </div>
      <h2 className="text-lg font-bold text-center text-gray-900">
        Connexion propriétaire
      </h2>
      <p className="text-sm text-gray-400 text-center mt-1 mb-6">
        Elta Quad — Espace admin
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700">Email</label>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700">
            Mot de passe
          </label>
          <input
            required
            name="password"
            type="password"
            autoComplete="current-password"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
          />
        </div>

        {error && (
          <p className="flex items-center gap-1.5 text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            <AlertCircle size={14} />
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-terracotta-500 hover:bg-terracotta-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>

      <p className="text-xs text-gray-400 mt-5 text-center leading-relaxed">
        Le compte propriétaire se crée dans Supabase
        <br />
        (Authentication → Users → Add user).
      </p>
    </div>
  );
}
