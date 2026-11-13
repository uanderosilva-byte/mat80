# MAT80 3.2 — Correção da versão antiga no iPhone

## Diagnóstico do seu repositório
A raiz de `uanderosilva-byte/mat80` ainda tinha o `index.html` da versão anterior e um `sw.js` que guardava o aplicativo em cache. Substitua **todos** os arquivos da raiz, inclusive `sw.js`, pelo conteúdo deste pacote. NÃO envie a pasta externa nem apenas o ZIP.

## Publicação
1. Antes de atualizar, exporte um backup no aplicativo antigo, se houver registros.
2. No repositório `uanderosilva-byte/mat80`, faça upload dos sete arquivos da raiz deste ZIP (`index.html`, `sw.js`, `manifest.webmanifest`, três imagens PNG e `.nojekyll`) e do README, substituindo os anteriores. Confirme o commit na branch `main`.
3. Em **Settings → Pages**, mantenha `Deploy from a branch` → `main` → `/(root)`. Verifique em **Actions** se a publicação terminou sem falhas.
4. Abra `https://uanderosilva-byte.github.io/mat80/?v=32` no **Safari**, não no GitHub.com. Confirme no topo `v3.2`.
5. Feche o aplicativo antigo na tela inicial, abra primeiro pelo Safari e, após conferir a nova versão, remova o antigo **ícone** da Tela de Início e adicione novamente o site ao início. Fazer isso pode afetar dados locais de PWA, então mantenha o backup.

## Por que há um sw.js?
A versão antiga tinha um service worker instalado. Este novo `sw.js` é um **desativador temporário**: assume o lugar do anterior, apaga o cache `mat80-*` e cancela seu próprio registro. Não armazena HTML offline. Quando a atualização estiver estável, é possível removê-lo do GitHub.

## Dados
A versão 3.2 não apaga registros de treino, dieta ou peso do localStorage. Limpar os dados do Safari ou remover o PWA pode apagar informações locais, por isso faça backup antes. Os vídeos precisam de internet.
