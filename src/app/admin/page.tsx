"use client";

import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";
import { CalendarDays, CalendarOff, LogOut } from "lucide-react";
import LoginForm from "@/components/admin/LoginForm";
import AdminCalendar from "@/components/admin/AdminCalendar";
import BlackoutManager from "@/components/admin/BlackoutManager";

type Tab = "planning" | "blackout";

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState<Tab>("planning");

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

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <LoginForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-terracotta-500 text-white flex items-center justify-center font-extrabold text-sm">
              EQ
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-tight">Elta Quad</p>
              <p className="text-xs text-gray-400 leading-tight">Espace admin</p>
            </div>
          </div>
          <button
            onClick={() => supabase.auth.signOut()}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
          >
            <LogOut size={15} />
            Déconnexion
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1 -mb-px">
          <TabButton
            active={tab === "planning"}
            onClick={() => setTab("planning")}
            icon={<CalendarDays size={15} />}
            label="Planning"
          />
          <TabButton
            active={tab === "blackout"}
            onClick={() => setTab("blackout")}
            icon={<CalendarOff size={15} />}
            label="Jours de fermeture"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {tab === "planning" ? <AdminCalendar /> : <BlackoutManager />}
      </main>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium border-b-2 transition-colors ${
        active
          ? "border-terracotta-500 text-terracotta-600"
          : "border-transparent text-gray-500 hover:text-gray-800"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
