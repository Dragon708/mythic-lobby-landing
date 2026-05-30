This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Documentos legales (Privacidad / Términos)

Las páginas públicas `/privacy` y `/terms` renderizan, respectivamente,
[`PRIVACY-POLICY.md`](PRIVACY-POLICY.md) y [`TERMS-OF-SERVICE.md`](TERMS-OF-SERVICE.md)
ubicados en la raíz de este repo (`src/app/privacy/page.tsx` y
`src/app/terms/page.tsx` los leen al hacer build).

> **⚠️ Estos dos `.md` son una COPIA.** No son la fuente de verdad.
>
> - Origen: se sincronizan desde `mythic-lobby/Docs/PRIVACY-POLICY.md` y
>   `mythic-lobby/Docs/TERMS-OF-SERVICE.md` (repo de la app móvil).
> - **Fuente de verdad real:** `lib/legal-content.ts` en el repo `mythic-lobby`.
>   Es desde ahí que se generan los `.md` y se alimenta el viewer interno de la
>   app.
>
> Si el contenido legal cambia, editá `lib/legal-content.ts` en `mythic-lobby`,
> regenerá los `.md` y volvé a copiarlos acá. No edites estas copias a mano sin
> reflejar el cambio en la fuente, o quedarán desincronizadas.

El renderizador de markdown (`src/lib/markdown.tsx`) soporta solo el subconjunto
que usan esos documentos (encabezados, listas con guiones, **negrita**, `código`,
*itálica*, [enlaces](#) y divisores `---`). Si los docs empiezan a usar features
nuevas (tablas, listas anidadas, imágenes), hay que extenderlo.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
