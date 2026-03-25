# SportsMatch Website

Web pública de SportsMatch. Construïda amb [Astro](https://astro.build/) (output estàtic), [React](https://react.dev/) i [Tailwind CSS v4](https://tailwindcss.com/). Inclou internacionalització (català, castellà, anglès) via `astro-i18n`.

## Desenvolupament local

**Requisits:** Node.js 18+, npm

```bash
npm install
npm run dev        # servidor de desenvolupament a http://localhost:4321
npm run build      # build de producció → /dist
npm run preview    # previsualitza el build de producció
```

### Variables d'entorn

Crea un fitxer `.env` a l'arrel d'aquest directori:

```env
API_BASE_URL=https://api.example.com   # URL base de l'API del backend
CF_PAGES_URL=https://example.pages.dev # URL de Cloudflare Pages (opcional en local)
```

## Estructura

```text
src/
  components/   # Components reutilitzables (Astro + React)
  layouts/      # Layouts base de les pàgines
  pages/        # Rutes de l'app (Astro file-based routing)
    ca/         # Pàgines en català
    en/         # Pàgines en anglès
  styles/       # CSS global i tokens de Tailwind
  utils/        # Helpers i utilitats
  config/       # Configuració (i18n, etc.)
public/         # Assets estàtics (imatges, fonts, favicons)
dist/           # Build de producció (generat, no comitegis)
```

## Deployment a Cloudflare Pages

### Configuració inicial (una sola vegada)

1. Ves a [Cloudflare Pages](https://pages.cloudflare.com/) i crea un nou projecte connectat a aquest repositori de GitHub.
2. Configura el build:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Afegeix les variables d'entorn al projecte de Cloudflare Pages:
   - `API_BASE_URL` — URL base de l'API del backend
   - `CF_PAGES_URL` — URL pública de Cloudflare Pages

### Deploy automàtic via GitHub Actions

El fitxer `.github/workflows/deploy.yml` utilitza `cloudflare/pages-action@v1` per fer el deploy automàticament en cada push.

Perquè funcioni cal afegir aquests secrets al repositori de GitHub (**Settings → Secrets and variables → Actions**):

| Secret          | Contingut                            | On trobar-lo                          |
| --------------- | ------------------------------------ | ------------------------------------- |
| `CF_API_TOKEN`  | Token d'API amb permisos per a Pages | Cloudflare → My Profile → API Tokens  |
| `CF_ACCOUNT_ID` | El teu Cloudflare Account ID         | Cloudflare Dashboard → Overview       |
