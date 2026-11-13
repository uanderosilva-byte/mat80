# MAT80 — Athlete Performance

Aplicativo web estático para treino, dieta e acompanhamento de evolução no jiu-jitsu.

## Publicação gratuita no GitHub Pages

1. Entre em https://github.com/new e crie um repositório, por exemplo `mat80`. Se for usar GitHub Pages no plano gratuito, escolha **Public**.
2. Abra o repositório e selecione **Add file → Upload files**. Envie **os arquivos que estão dentro desta pasta**, diretamente para a raiz do repositório: `index.html`, `manifest.webmanifest`, `sw.js` e os três arquivos `.png`. Não envie apenas o ZIP.
3. Clique em **Commit changes**.
4. Acesse **Settings → Pages**. Em **Build and deployment → Source**, escolha **Deploy from a branch**; selecione a branch `main` e a pasta `/(root)` e salve.
5. Quando a página estiver publicada, acesse o endereço exibido pelo GitHub Pages. Normalmente é `https://SEU_USUARIO.github.io/mat80/`, mas confirme a URL no painel Pages.

## Instalação no iPhone

1. Abra o endereço HTTPS do aplicativo no **Safari**.
2. Use **Compartilhar → Adicionar à Tela de Início** (a opção pode aparecer no menu de ações).
3. Confirme **Adicionar**. O app passa a abrir em janela própria, semelhante a um aplicativo.

Este é um **web app instalável (PWA)**, não um aplicativo nativo distribuído pela App Store. Também pode ser acessado diretamente pelo Safari sem instalar.

## Funcionamento e dados

- Interface básica disponível offline após o primeiro acesso via HTTPS, desde que o Safari já tenha instalado/cacheado os arquivos.
- Fontes externas e vídeos do YouTube **exigem internet** e a reprodução incorporada pode ser bloqueada pelo YouTube.
- Dados de treino, dieta e peso ficam no **armazenamento local do navegador/dispositivo**, não no GitHub. O aplicativo não tem conta nem sincronização entre celular e computador.
- **Importante:** registros abertos no HTML local ou em um endereço anterior não são migrados automaticamente para o GitHub Pages. Exporte o backup JSON do app anterior e importe no publicado.
- Faça backups pelo menu **Ajustes**; limpeza de dados do Safari, navegação privada ou troca de dispositivo pode apagar os registros.
- Repositório público torna **o código e as metas iniciais embutidas no HTML públicos**, mas não publica os registros pessoais digitados no dispositivo.
- Para atualizar: substitua `index.html` no repositório; para mudar o cache offline, atualize o nome `CACHE` em `sw.js`.

## Arquivos

- `index.html`: aplicativo completo.
- `manifest.webmanifest`: informações para instalação.
- `sw.js`: cache básico da interface.
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`: identidade tipográfica do ícone de instalação (sem elementos decorativos).

Não requer servidor próprio, banco de dados nem instalação de pacotes.
