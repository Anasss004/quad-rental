"use client";

import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";
import LoginForm from "@/components/admin/LoginForm";
import AdminCalendar from "@/components/admin/AdminCalendar";
import BlackoutManager from "@/components/admin/BlackoutManager";

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecked(true);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  if (!checked) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-orange-700">
            🏍️ Elta Quad — Planning
          </h1>
          {session && (
            <button
              onClick={() => supabase.auth.signOut()}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:text-gray-100"
            >
              Se déconnecter
            </button>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {session ? (
          <>
            <AdminCalendar />
            <BlackoutManager />
          </>
        ) : (
          <LoginForm />
        )}
      </main>
    </div>
  );
}
