# Portfólio de Mikael Cavalcanti

React + TypeScript + Vite. Preserva o visual de console, as animações de terminal e as versões PT / EN.

## Desenvolvimento

Requer Node.js 22 ou superior.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

## Estrutura

- `src/components/`: cabeçalho, perfil C++, terminal e seções do portfólio.
- `src/LanguageContext.tsx` e `src/translations.ts`: idioma, traduções e preferência persistida.
- `src/terminal.ts`: interpretação dos comandos, testada nos dois idiomas.
- `src/styles.css`: estilos e animações aprovados.
- `public/`: foto e miniaturas fornecidas pelo usuário.

O idioma e a aba atual ficam na URL. A janela C++ aparece apenas em desktop. Animações respeitam a preferência de movimento reduzido.

## Publicação

O workflow `.github/workflows/deploy.yml` testa, compila e publica `dist/` no GitHub Pages a cada push para `main`. A origem do Pages deve estar configurada como GitHub Actions.

Site: https://mikael-cavalcanti.github.io/
