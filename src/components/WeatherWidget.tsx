"use client";

import { useEffect, useState } from "react";
import { Sun, CloudSun, Cloud, CloudFog, CloudDrizzle, CloudRain, CloudSnow, CloudLightning, Thermometer } from "lucide-react";

// Remplacez ces coordonnées par celles de votre point de rendez-vous réel.
const LATITUDE = 48.8566;
const LONGITUDE = 2.3522;

const WEATHER_ICONS: Record<number, typeof Sun> = {
  0: Sun,
  1: CloudSun,
  2: Cloud,
  3: Cloud,
  45: CloudFog,
  48: CloudFog,
  51: CloudDrizzle,
  61: CloudRain,
  63: CloudRain,
  65: CloudRain,
  71: CloudSnow,
  73: CloudSnow,
  75: CloudSnow,
  80: CloudDrizzle,
  95: CloudLightning,
};

export default function WeatherWidget() {
  const [temp, setTemp] = useState<number | null>(null);
  const [code, setCode] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,weather_code`
        );
        const data = await res.json();
        if (cancelled) return;
        setTemp(Math.round(data.current.temperature_2m));
        setCode(data.current.weather_code);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error || temp === null) return null;

  const Icon = (code !== null && WEATHER_ICONS[code]) || Thermometer;

  return (
    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-2 text-sm border border-white/20">
      <Icon size={16} className="text-terracotta-300" />
      <span className="font-medium text-white">{temp}°C</span>
      <span className="text-sand-100/70 text-xs">au point de RDV</span>
    </div>
  );
}
