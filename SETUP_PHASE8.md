# Phase 8 — Setup steps (fonctionnalités avancées, optionnelles)

Ces 3 fonctionnalités sont désactivées ou fonctionnent avec des valeurs
par défaut tant que vous n'avez pas fait ces étapes. Le reste du site
fonctionne normalement sans elles.

## Feature 17 — Acompte Stripe (mode test, gratuit)

1. Créez un compte sur https://dashboard.stripe.com/register
2. Restez en **mode Test** (interrupteur en haut à droite du dashboard).
3. Copiez votre clé secrète de test (`Developers > API keys > Secret key`,
   commence par `sk_test_...`).
4. Créez un webhook : `Developers > Webhooks > Add endpoint`
   - URL : `https://votre-projet.vercel.app/api/stripe-webhook`
   - Événement à écouter : `checkout.session.completed`
   - Copiez le **Signing secret** (`whsec_...`)
5. Dans Supabase, exécutez `supabase/phase8_stripe.sql`.
6. Dans Supabase, récupérez votre **Secret key** (Project Settings > API >
   Secret keys — PAS la publishable key) pour `SUPABASE_SERVICE_ROLE_KEY`.
7. Ajoutez dans `.env.local` et Vercel :
   ```
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   SUPABASE_SERVICE_ROLE_KEY=...
   NEXT_PUBLIC_ENABLE_DEPOSIT=true
   ```
8. Testez avec une carte de test Stripe : `4242 4242 4242 4242`, n'importe
   quelle date future, n'importe quel CVC.

⚠️ Le mode test ne prend jamais de vrai argent. Pour encaisser de vrais
paiements plus tard, il faudra activer votre compte Stripe (vérification
d'identité) et remplacer les clés `sk_test_...` par des clés `sk_live_...`.

## Feature 19 — Météo

Ouvrez `src/components/WeatherWidget.tsx` et remplacez `LATITUDE` /
`LONGITUDE` par les coordonnées réelles de votre point de rendez-vous
(cherchez votre adresse sur Google Maps, clic droit > les coordonnées
s'affichent). Aucune clé API requise (Open-Meteo est gratuit et sans compte).

## Feature 18 — Basculement Français / Anglais

Le bouton FR/EN dans le menu traduit : navigation, titres de section,
formulaire de réservation, pied de page. Pour rester simple, le contenu
éditorial plus long (descriptions des quads, avis clients, questions FAQ)
reste en français pour l'instant — vous pouvez l'étendre facilement en
ajoutant des clés dans `src/lib/i18n.tsx` et en les utilisant dans les
composants concernés (`Testimonials.tsx`, `FAQ.tsx`, `Gallery.tsx`, `Fleet.tsx`).
