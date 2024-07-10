# Equatorial One

Este repositório contém um projeto desenvolvido utilizando o framework [Next.js](https://nextjs.org/) utilizando a biblioteca javascript React JS como base. Neste arquivo README, você encontrará um guia passo a passo para abrir o projeto em seu ambiente local.

## Design no FIGMA
[Home Accenture](https://www.figma.com/design/duDiajEv2359OAbVX1DNbJ/[Entrega-Design]-Home-Institucional?node-id=1-7&t=xTU2DokvBDg0RkWd-0)

[Templates Accenture](https://www.figma.com/design/LoC2MJvVh7vo7UaMUbZJGf/[Entrega-Design]-Templates-Institucional-1?node-id=1-11&t=825dOcBDJ3IGGb2d-0)

[Páginas de transparência](https://www.figma.com/design/krqgdQ4RmFRkOt7O6F56ES/Site-institucional?node-id=369-5173&t=aP8MGj0ftUHkk2xm-4)

[Página sobre](https://www.figma.com/proto/krqgdQ4RmFRkOt7O6F56ES/Site-institucional?page-id=75%3A2005&node-id=75-5828&viewport=709%2C490%2C0.1&t=1Cmm7accUKV8WhPZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=75%3A3004)

## Pré-requisitos

Antes de começar, verifique se você possui as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

_OBS: EM caso de não possuir as ferramentas instaladas, ir até o [site da Node.js](https://nodejs.org/en) e selecionar a versão compatível com seu sistema operacional._

## Passo 1: Clonar o repositório

Comece clonando este repositório para sua máquina local. Para clonar o repositório, clique no botão "Clone" acima ou execute o seguinte comando no terminal:

```bash
git clone https://us-south.git.cloud.ibm.com/equatorial-one/institucional-react.git
```

Isso criará uma cópia local do repositório em seu ambiente.

## Passo 2: Instalar dependências

Navegue até o diretório raiz do projeto e execute o seguinte comando para instalar as dependências do Node.js:

```bash
cd /nome-do-app
npm install
```

Esse comando irá ler o arquivo `package.json` e instalar todas as dependências necessárias para o projeto.

## Passo 3: Rodar o site

Para iniciar o site, execute o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor e você poderá acessá-lo através do seu navegador no endereço [http://localhost:3000](http://localhost:3000)

# Definição de entrega/pronto
Para garantir a qualidade de entrega e padrão de requisitos esperados, deve-se seguir a lista a baixo:
- Responsividade (mobile first)
- Storybook de componentes
- Seguir a risca o FIGMA
- Garantir boas práticas ( `nm run lint` )
- Análise e testar a build antes do merge ( `npm run build` )
- Verificar possíveis problemas de merge após os passos acima
- Descrição da entrega no ADO com evidências
- Caminho feliz funcionando

