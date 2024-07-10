# Institucional React
Esse projeto é a aplicação front-end do site institucional da Equatorial com a finalidade de consumir os conteúdos via API REST do aplicação back-end em drupal.

Este repositório contém um projeto desenvolvido utilizando o framework [Next.js](https://nextjs.org/) utilizando a biblioteca javascript React JS como base. Neste arquivo README, você encontrará um guia passo a passo para abrir o projeto em seu ambiente local.



# [PADRÃO DE DESENVOLVIMENTO E QUALIDADE](/readme/Definitions.md)



# Fluxo da Aplicação
- Cada estado terá seu par te aplicações, uma front-ende outra back-end, ambas dentro do Open Shift;
- CadaDrupalterá seu banco de dados que não estará dentro da máquina Open Shift;
- O Drupal terá duas rotas, uma para o front-end consumir os dados via API e outra para o painel administrativo do CMS;
- Atualmente teremos 14 aplicações, 7 para back-end, uma por estado e outras 7 de front-end, uma para cada estado.

![Fluxo da aplicação](/readme/app_flow.png)



# Subir a aplicação no ambiente local
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

