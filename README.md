# Portfólio de Hiago Kalil

Site de portfólio pessoal, no estilo "ficha técnica": moldura com marcas de
corte, linhas de dados com pontilhado e tipografia serifada de destaque
combinada com fonte mono nos rótulos.

Repositório: https://github.com/hiagoka/site-portfolio

Site publicado: https://site-portfolio-wine.vercel.app

## Stack

- Vite, React e TypeScript
- Tailwind CSS (v3) para o design system
- Fontes: Instrument Serif (títulos), Instrument Sans (corpo) e JetBrains Mono (rótulos)
- `simple-icons` para os logos de tecnologia (no ticker e no mostrador circular) e das redes sociais

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # serve o build gerado
```

## Como editar o conteúdo

| Arquivo | O que contém |
| --- | --- |
| `src/data/site.ts` | Dados neutros de idioma: perfil, projetos (ano, stack, link), skills e a ordem da navegação. |
| `src/data/content.ts` | Todos os textos, em `content.en` e `content.pt`. As listas (`projects`, `experience`, `skillGroups`) casam por índice com `site.ts`. |
| `src/data/tech.ts` | Lista de tecnologias mostrada no ticker do topo e no mostrador circular da seção Sobre. |
| `src/theme.ts` | Fonte única de cores e fontes do site: gera as classes do Tailwind e as variáveis CSS. Trocar uma cor ou fonte começa aqui. |

O idioma padrão é português, com um botão no header para trocar para inglês
(a escolha fica salva no navegador). O tema claro/escuro segue a preferência
do sistema por padrão, também com botão de troca.

## Estrutura

```
src/
  theme.ts                cores e fontes (fonte única de verdade)
  data/
    site.ts                dados neutros: perfil, projetos, skills
    content.ts              textos em português e inglês
    tech.ts                 tecnologias mostradas no ticker e no mostrador
  lib/
    persistedSetting.ts     base do tema e do idioma (localStorage + View Transitions)
  hooks/
    useTheme.ts, useLang.ts, useActiveSection.ts
  components/
    layout/    Frame (moldura), Header, Ticker
    sections/  Hero, Projects, About, Experience, Contact
    ui/        Section, Leader, Clock, TechDial, ThemeToggle, LangToggle,
               TechIcon, CropMarks, IconButton
```

## Deploy

Publicado na Vercel (`hiagokas-projects/site-portfolio`), com o
repositório do GitHub conectado: cada push em `main` gera um novo
deploy automaticamente.

O build é estático (pasta `dist/`), então também funciona em Netlify ou
GitHub Pages. Para publicar no GitHub Pages, ajuste a opção `base` em
`vite.config.ts` para `/site-portfolio/`.
