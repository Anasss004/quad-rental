"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function useBlackoutDates() {
  const [blackoutDates, setBlackoutDates] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    supabase
      .from("blackout_dates")
      .select("blackout_date")
      .then(({ data, error }) => {
        if (cancelled || error || !data) return;
        setBlackoutDates(data.map((d) => d.blackout_date as string));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return blackoutDates;
}
