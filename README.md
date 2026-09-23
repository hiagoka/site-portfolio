# Portfolio — Hiago Kalil

Site de portfolio pessoal. Estilo "ficha tecnica / prancheta": moldura com marcas
de corte, linhas de dados com pontilhado, tipografia serifada de display +
mono para rotulos.

**Live:** _(ainda sem deploy — ver secao Deploy)_
**Repo:** https://github.com/hiagoka/site-portfolio

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (v3) para o design system
- Fontes: Instrument Serif (display) / Instrument Sans (corpo) / JetBrains Mono (rotulos)
- `simple-icons` para os logos de tecnologia (ticker + mostrador circular) e das redes sociais

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Como editar o conteudo

- **`src/data/site.ts`** — dados neutros de idioma: perfil, projetos (ano/stack/link),
  skills, ordem da navegacao.
- **`src/data/content.ts`** — todos os textos, em `content.en` e `content.pt`.
  As listas (`projects`, `experience`, `skillGroups`) casam por **indice** com `site.ts`.
- **`src/data/tech.ts`** — lista de tecnologias mostrada no ticker do topo e no
  mostrador circular da secao Sobre.
- **`src/theme.ts`** — fonte unica de cores e fontes (gera as classes Tailwind
  e as variaveis CSS). Trocar uma cor ou fonte do site inteiro comeca aqui.

Idioma padrao: portugues, com botao de troca para ingles no header (persiste
no localStorage). Tema claro/escuro segue a preferencia do sistema por padrao,
tambem com botao de troca.

## Estrutura

```
src/
  theme.ts               cores + fontes (fonte unica)
  data/
    site.ts              dados neutros (perfil, projetos, skills)
    content.ts            textos en/pt
    tech.ts               tecnologias (ticker + dial)
  lib/
    persistedSetting.ts   base do tema e do idioma (localStorage + View Transitions)
  hooks/
    useTheme.ts / useLang.ts / useActiveSection.ts
  components/
    layout/    Frame (moldura), Header, Ticker
    sections/  Hero, Projects, About, Experience, Contact
    ui/        Section, Leader, Clock, TechDial, ThemeToggle, LangToggle,
               TechIcon, CropMarks, IconButton
```

## Deploy

O build e estatico (`dist/`). Funciona em Vercel, Netlify ou GitHub Pages.
Para GitHub Pages, ajuste `base` em `vite.config.ts` para `/site-portfolio/`.

Depois do primeiro deploy, atualizar em `index.html`:
- `og:url` (adicionar, com o dominio final)
- `og:image` / `twitter:image` (trocar `/og-image.webp` pela URL absoluta)
