# Phase 5 — Setup steps (à faire de votre côté)

## 1. Resend — envoi d'emails (gratuit)

1. Créez un compte sur https://resend.com
2. Copiez votre **API key** (Dashboard > API Keys).
3. Ajoutez dans `.env.local` ET dans Vercel (Environment Variables) :
   ```
   RESEND_API_KEY=re_...
   OWNER_EMAIL=votre-email@exemple.com
   SUPABASE_WEBHOOK_SECRET=choisissez-une-longue-chaine-aleatoire
   NEXT_PUBLIC_SITE_URL=https://votre-projet.vercel.app
   ```
   (Sans domaine vérifié, les emails partent automatiquement depuis
   `onboarding@resend.dev` — suffisant pour tester. Vous pourrez plus tard
   vérifier votre propre domaine dans Resend pour un email plus pro.)

## 2. Supabase Database Webhook — déclenche l'envoi à chaque réservation

1. Dans Supabase : **Database > Webhooks > Create a new webhook**.
2. Table : `reservations` — Event : `Insert` uniquement.
3. Type : **HTTP Request**, méthode **POST**.
4. URL : `https://votre-projet.vercel.app/api/notify`
5. Dans **HTTP Headers**, ajoutez :
   ```
   x-webhook-secret: (la même valeur que SUPABASE_WEBHOOK_SECRET ci-dessus)
   ```
6. Sauvegardez.

## Tester

Soumettez une réservation depuis le site en direct (avec un vrai email dans
le champ) → vous devriez recevoir un email en tant que propriétaire, et le
client (vous, pour le test) devrait recevoir un email de confirmation avec
un lien d'annulation fonctionnel.

Si rien n'arrive : vérifiez dans Supabase > Database > Webhooks les logs
d'exécution (statut HTTP renvoyé par votre site), et dans Vercel > votre
projet > Logs pour voir les erreurs éventuelles de la route `/api/notify`.
