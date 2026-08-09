"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";

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
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8">
      <h2 className="text-lg font-bold mb-4 text-center">
        Connexion propriétaire
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            required
            name="email"
            type="email"
            className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Mot de passe
          </label>
          <input
            required
            name="password"
            type="password"
            className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-700 hover:bg-orange-800 disabled:opacity-60 text-white font-semibold py-2 rounded-lg"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
      <p className="text-xs text-gray-400 mt-4">
        Le compte propriétaire se crée dans Supabase (Authentication &gt;
        Users &gt; Add user).
      </p>
    </div>
  );
}
