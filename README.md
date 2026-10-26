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
| `SMTP_HOST` | For live form email | PrivateEmail server: `mail.privateemail.com` |
| `SMTP_PORT` | For live form email | `465` (SSL) or `587` |
| `SMTP_USER` | For live form email | `info@leonasbravehaven.org` |
| `SMTP_PASS` | For live form email | Mailbox password for that address |
| `CONTACT_INBOX` | No | Inbox that receives form emails. Defaults to `info@leonasbravehaven.org` |

Forms send to **info@leonasbravehaven.org** through PrivateEmail SMTP. Add `SMTP_PASS` in `.env.local`. Without the password, forms still validate and save a JSON record in `data/submissions/`. Donations are completed on GoFundMe.

## Deploy

The app is a standard Next.js project and can be deployed to Vercel or any Node host that supports Next.js 16.

1. Push the repository.
2. Set `NEXT_PUBLIC_SITE_URL` to the public domain.
3. Set `SMTP_PASS` for `info@leonasbravehaven.org` so form emails send.

## Production notes

- Dog listings and rescue stories use organization-supplied photographs and edited stories.
- Donations are processed through the organization’s GoFundMe campaign.
- The business email is info@leonasbravehaven.org. Form notifications send there through PrivateEmail SMTP.
- Nonprofit or tax-deductible status is not claimed because it has not been verified.
- A map embed is intentionally omitted until the address pin is confirmed.
- The official YouTube channel, @leonabravehaven, is linked and embedded.
