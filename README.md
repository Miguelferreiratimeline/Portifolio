# Portfólio — Miguel Ferreira

Site estático feito para publicação gratuita no GitHub Pages.

## Arquivos
- `index.html` — conteúdo principal
- `style.css` — design e responsividade
- `script.js` — animações e botão do WhatsApp

## Como publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo: `portfolio`.
2. Envie os três arquivos para a raiz do repositório.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e pasta `/root`.
6. Salve.

O endereço ficará parecido com:
`https://SEUUSUARIO.github.io/portfolio/`

## Como configurar o Discord

Abra `script.js` e procure:

```js
const discordUsername = "miguel.ferreira_timeline";
```

Troque pelo seu usuário real do Discord.

Exemplo:

```js
const discordUsername = "miguel.ferreira";
```

Quando alguém clicar em **Discord**, o site copia seu usuário automaticamente.

Se você quiser usar um link direto, preencha também:

```js
const discordUrl = "SEU_LINK";
```

## Como colocar seus vídeos
A forma mais leve é subir os vídeos no YouTube como **Não listado** e fazer cada card abrir o link.

No `index.html`, você pode transformar:

```html
<article class="project">
```

em:

```html
<a class="project" href="LINK_DO_VIDEO" target="_blank">
```

e trocar o fechamento `</article>` por `</a>`.

## Próximas melhorias possíveis
- Thumbnails reais dos seus projetos
- Showreel incorporado
- Foto sua
- Página individual para cada projeto
- Formulário de contato
- Domínio próprio


## Contatos já configurados na V2.1

- E-mail: Miguelferreira.timeline@gmail.com
- WhatsApp: configurado no botão de contato
- Discord: miguel.ferreira_timeline

O botão do WhatsApp abre uma conversa com uma mensagem inicial.
O botão do Discord copia o nome de usuário.


## Alterações da V2.2

- Marca do canto superior esquerdo alterada de `MA.` para `MF.`
- Projeto Minecraft: https://youtu.be/bG6tj_33w1g
- Short Form: https://www.youtube.com/shorts/DncdZjsns64
- Vídeo Longo: https://youtu.be/a3WpZRrOmhk
- Gameplay Edit: https://youtu.be/CoSm1BUZ6qA
- Todos os cards abrem os vídeos em uma nova aba.
- O Discord continua copiando o usuário `miguel.ferreira_timeline`.

### Sobre o botão do Discord
Um nome de usuário do Discord, sozinho, não fornece um link público confiável para abrir diretamente o perfil/DM.
Se você tiver seu ID numérico do Discord, dá para tentar usar um link específico para o perfil/app.


## V2.3 — thumbnails
As quatro thumbnails fornecidas foram adicionadas:
- Projeto Minecraft
- Short Form
- Vídeo Longo
- Gameplay Edit

A ideia de seção Antes/Depois foi descartada nesta versão.


## V2.4 — vídeos dentro do site

- Os quatro projetos agora abrem em um player modal dentro do próprio portfólio.
- O visitante não precisa sair do site.
- O player usa YouTube Embed, então os vídeos continuam hospedados no YouTube.
- O modal fecha pelo X, clicando fora ou apertando ESC.


## V2.4.1 — upload simplificado no GitHub

As thumbnails foram movidas da pasta `assets` para a raiz do projeto.
Agora basta selecionar TODOS os arquivos e enviar de uma vez pelo GitHub.
