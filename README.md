# Leona’s Brave Haven

Production-ready website for Leona’s Brave Haven, a dog rescue in Sarasota, Florida.

Motto: **Saving lives. Giving hope. Changing Tomorrow.**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm start` — serve the production build

## Environment variables

Copy `.env.example` to `.env.local` and add credentials only when they are available.

| Variable | Required now | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL for metadata |
| `RESEND_API_KEY` | No | Transactional email for form notifications |
| `CONTACT_INBOX` | No | Inbox that should receive form emails |

Without email credentials, forms still validate and save a JSON record in `data/submissions/`. Donations are completed on PayPal.

## Deploy

The app is a standard Next.js project and can be deployed to Vercel or any Node host that supports Next.js 16.

1. Push the repository.
2. Set `NEXT_PUBLIC_SITE_URL` to the public domain.
3. Add email keys only after the organization supplies them.

## Production notes

- Dog listings and rescue stories use organization-supplied photographs and edited stories.
- Donations are processed through the organization’s PayPal donate button.
- Transactional email is not connected until Resend keys are added.
- Nonprofit or tax-deductible status is not claimed because it has not been verified.
- A map embed is intentionally omitted until the address pin is confirmed.
- The official YouTube channel, @leonabravehaven, is linked and embedded.
