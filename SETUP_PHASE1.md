# Phase 1 — Setup steps (à faire de votre côté)

J'ai créé le projet (Next.js + TypeScript + Tailwind), installé les librairies
nécessaires (Supabase, FullCalendar, Framer Motion) et vérifié que le build
fonctionne. Il reste 3 étapes qui nécessitent VOS comptes (gratuits) — je ne
peux pas les créer à votre place.

## 1. GitHub — héberger le code

1. Créez un compte sur https://github.com (gratuit) si vous n'en avez pas.
2. Créez un nouveau repository vide (sans README) nommé par exemple `quad-rental`.
3. Dans le dossier du projet, sur votre ordinateur, lancez :
   ```
   git remote add origin https://github.com/VOTRE-USERNAME/quad-rental.git
   git branch -M main
   git push -u origin main
   ```

## 2. Supabase — base de données + authentification

1. Créez un compte gratuit sur https://supabase.com
2. Créez un nouveau projet (choisissez une région proche de vous).
3. Une fois le projet créé, allez dans **SQL Editor > New query**, collez tout
   le contenu du fichier `supabase/schema.sql` (fourni dans ce projet), et
   cliquez sur **Run**. Cela crée la table `reservations` et les règles de
   sécurité (RLS).
4. Allez dans **Authentication > Users > Add user**, créez votre compte
   propriétaire (email + mot de passe) — c'est ce compte qui vous servira à
   vous connecter sur `/admin` plus tard.
5. Allez dans **Project Settings > API**, copiez :
   - **Project URL**
   - **anon public** key
6. Dans le dossier du projet, copiez `.env.example` vers `.env.local` et
   collez ces deux valeurs :
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```
   (`.env.local` n'est jamais envoyé sur GitHub — c'est normal et voulu.)

## 3. Vercel — hébergement gratuit

1. Créez un compte sur https://vercel.com (vous pouvez vous connecter
   directement avec votre compte GitHub).
2. Cliquez sur **Add New > Project**, sélectionnez votre repo `quad-rental`.
3. Dans **Environment Variables**, ajoutez les deux mêmes variables que dans
   `.env.local` (`NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
4. Cliquez sur **Deploy**. Vous obtenez une URL gratuite du type
   `quad-rental-xxxx.vercel.app`, mise à jour automatiquement à chaque `git push`.

---

## Tester en local (optionnel, avant de déployer)

```
npm install
npm run dev
```
Puis ouvrez http://localhost:3000

---

Une fois ces 3 étapes faites, dites-le moi et on enchaîne sur la Phase 2
(contenu du site : hero, flotte de quads, tarifs, galerie...).
