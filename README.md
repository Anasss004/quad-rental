# Elta Quad — Location de Quads à l'heure

Site de réservation en ligne pour une entreprise de location de quads : les
clients réservent un créneau depuis le site, le propriétaire gère tout
depuis un tableau de bord avec calendrier.

**Démo en ligne :** _ajoutez votre URL Vercel ici une fois déployé_

## Fonctionnalités

- Site public en français : présentation, flotte de quads, tarifs, galerie,
  avis clients, FAQ, localisation.
- Formulaire de réservation en temps réel (Supabase), avec affichage des
  créneaux déjà demandés pour éviter les conflits.
- Emails automatiques (propriétaire + client) à chaque nouvelle demande,
  avec lien d'auto-annulation pour le client.
- Tableau de bord `/admin` protégé par authentification : calendrier des
  réservations, confirmation/annulation, gestion des jours de fermeture.
- Sécurité : Row Level Security sur toutes les tables, protection anti-bot
  sur le formulaire, vérification de signature sur le webhook email.
- SEO : métadonnées Open Graph, données structurées LocalBusiness, sitemap.
- Mode sombre, animations, design responsive.

## Stack technique

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Supabase](https://supabase.com) — base de données Postgres + authentification
- [Resend](https://resend.com) — envoi d'emails transactionnels
- [FullCalendar](https://fullcalendar.io) — calendrier admin
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Vercel](https://vercel.com) — hébergement + analytics

Coût total d'hébergement : **0€** (tiers gratuits de Supabase, Resend et Vercel).

## Installation locale

```bash
npm install
cp .env.example .env.local   # puis remplissez vos propres clés
npm run dev
```

## Base de données (Supabase)

Exécutez, dans l'ordre, les fichiers SQL du dossier `supabase/` dans
l'éditeur SQL de votre projet Supabase :

1. `schema.sql` — table des réservations + sécurité (RLS)
2. `phase3_availability.sql` — vue publique des créneaux (sans données perso)
3. `phase4_admin.sql` — jours de fermeture
4. `phase5_cancellation.sql` — fonction d'auto-annulation client

Voir aussi `SETUP_PHASE1.md` et `SETUP_PHASE5.md` pour les étapes détaillées
(création de projet, webhook email, variables d'environnement).

## Structure du projet

```
src/
  app/
    page.tsx              → page d'accueil publique
    admin/page.tsx         → tableau de bord propriétaire
    annuler/[token]/       → page d'auto-annulation client
    api/notify/route.ts    → webhook d'envoi d'emails
  components/               → composants du site public
  components/admin/         → composants du tableau de bord
  lib/                      → client Supabase, formatage, hooks
supabase/                   → schémas et migrations SQL
```

## Déploiement

Le projet est prêt pour un déploiement gratuit sur Vercel (connecté à ce
repo GitHub). Ajoutez les variables d'environnement de `.env.example` dans
les paramètres du projet Vercel, puis déployez.
