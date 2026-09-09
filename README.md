# Diario de Bordo — Portfolio (tema One Piece)

Portfolio pessoal de Hiago Kalil com estetica inspirada em One Piece (arte 100% original,
sem assets oficiais do manga/anime).

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (v3) para o design system
- **Framer Motion** para animacoes
- Fontes: Pirata One / Cinzel / EB Garamond (Google Fonts)

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Como editar o conteudo

Todo o texto do site vive em **`src/data/portfolio.ts`**:

| Constante      | Secao          | Metafora One Piece                         |
| -------------- | -------------- | ----------------------------------------- |
| `pirate`       | Cartaz (hero)  | Cartaz de "WANTED" + recompensa animada    |
| `islands`      | Grand Line     | Cada projeto e uma ilha com "Log da Ilha"  |
| `fruits`       | Akuma no Mi    | Cada skill e uma fruta com nivel de dominio|
| `crew`         | Nakama         | Experiencia profissional como tripulacao   |
| `ship`         | O Navio        | Sobre mim + valores                        |
| `denDenMushi`  | Contato        | Canais + formulario (abre o cliente de email)|

A navegacao lateral (Log Pose) e gerada a partir de `sections`.

## Estrutura

```
src/
  data/portfolio.ts      <- edite aqui
  hooks/useActiveSection.ts
  components/
    LogPose.tsx          bussola de scroll + nav
    WantedPoster.tsx     hero
    GrandLine.tsx        projetos + modal
    DevilFruits.tsx      skills
    Nakama.tsx           experiencia
    TheShip.tsx          sobre
    DenDenMushi.tsx      contato
  index.css              texturas (pergaminho, oceano) e tokens
```

## Deploy

O build e estatico (`dist/`). Funciona em Vercel, Netlify ou GitHub Pages.
Para GitHub Pages, ajuste `base` em `vite.config.ts` para `/<nome-do-repo>/`.
