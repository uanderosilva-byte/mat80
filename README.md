# MAT80 4.0 — GitHub Pages / iPhone

## Publicar
1. Faça backup dos dados no app antigo, se houver.
2. Descompacte este ZIP. Envie **os arquivos e a pasta `assets/`**, não a pasta externa, para a raiz da branch `main` do repositório. Substitua `index.html`, `sw.js`, manifesto e ícones.
3. Confirme **Settings → Pages → Deploy from a branch → main → /(root)**.
4. Abra `https://uanderosilva-byte.github.io/mat80/?v=41` no Safari e confira `v4.1` no cabeçalho.
5. Use Compartilhar → Adicionar à Tela de Início. Se o atalho antigo persistir, faça backup primeiro, abra a URL no Safari e recrie o atalho.

## Migração e privacidade
- A V4.1 lê sessões salvas como `mat80v3_sessions`, medidas `mat80v2_weights` e porções `mat80v2_qty` no mesmo domínio.
- Dados de outros sites, instalação anterior com armazenamento isolado ou outro dispositivo não aparecem automaticamente. Para esses casos, use **Exportar/Importar backup**.
- Os dados ficam no armazenamento local do navegador. Limpar dados do Safari ou remover o web app pode apagá-los.
- Não existe sincronização em nuvem.

## Funcionalidades
- Anamnese física, composição corporal visual ilustrativa, experiência, lesões, rotina e equipamentos.
- Objetivos e planejamento de 2–7 sessões por semana; distribuição ajustável de jiu-jitsu e musculação.
- Registro diário, técnica/rola/misto, RPE, hidratação, alimentação, histórico e feedback.
- Modo Campeonato, com verificação conservadora da viabilidade e sem recomendar métodos extremos de perda de peso.
- Biblioteca de 12 exercícios com vídeos externos; exige internet e disponibilidade dos vídeos no YouTube.

## Limitações
Estimativas de percentual de gordura por fotos não são medições; são aproximações amplas. Cálculos de gasto energético e prazo são simplificados e devem ser validados com evolução real. Recomendações não substituem nutricionista, médico ou profissional de educação física. Se houver lesões, o usuário deve obter avaliação profissional antes de executar exercícios que provoquem dor.

## Ajustes v4.1
- Interface redesenhada em preto e dourado, com avaliação inicial em três etapas.
- As quatro imagens de composição corporal estão incorporadas diretamente no HTML: não dependem da pasta de imagens para carregar no iPhone.
- Mantidos os registros e a lógica de acompanhamento da versão 4.0.
- Atualize o `index.html` e demais arquivos na raiz do repositório. Confira `v4.1` no cabeçalho após a publicação.
