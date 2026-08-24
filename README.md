# Becoming CEO LIVE — invitation

Single self-contained page. All images are embedded as data URIs; the only
external requests are Google Fonts.

- Live at: https://bceo.invait.co.ke
- Tickets link out to: https://becomingceo.africa/tickets

## Files
- `index.html` — the whole invitation
- `og.jpg` — WhatsApp / social share card (referenced absolutely, must sit at the site root)

## Editing notes
- Event date/time live in one place: `EVENT_START` / `EVENT_END` in the script at the bottom.
- The "Run of Show" section is present but `hidden`. Remove the `hidden`
  attribute on `<section class="agenda" hidden>` to switch it back on.

## Deployment
Production is https://bceo.invait.co.ke, hosted on the `bceo-invait` Netlify project.

`.github/workflows/deploy-netlify.yml` deploys every push to `main` straight to
production, so no manual `netlify deploy` is needed. It requires two repository
secrets (Settings → Secrets and variables → Actions):

- `NETLIFY_AUTH_TOKEN` — a personal access token from Netlify (User settings → Applications)
- `NETLIFY_SITE_ID` — the project's API ID (Site configuration → General → Site information)

The workflow runs `build-fix.js` itself before uploading, so the deployed page
carries the copy fixes even though the commit made by `apply-copy-fixes.yml`
cannot trigger another workflow run.

If the Netlify project is later linked to this repo through Netlify's own Git
integration, delete this workflow — otherwise both will deploy on every push.
