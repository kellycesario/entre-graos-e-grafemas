# Entre Grãos e Grafemas

Este projeto é uma aplicação **Next.js** utilizando o **App Router**, **SCSS** para estilização, **Storybook** para documentação e testes de componentes, **Contentful** como CMS e **Vercel** para hospedagem.

## Em produção

- [Site oficial](https://arabie-bezri-hermont.vercel.app/)
- [Storybook](https://entre-graos-e-grafemas-storybook.vercel.app)

## Tecnologias Utilizadas

- **[Next.js 13 com App Router](https://nextjs.org/)**: Framework React para construção de aplicações.
- **[SCSS](https://sass-lang.com/)**: Pré-processador CSS para facilitar a organização e reutilização de estilos.
- **[Storybook](https://storybook.js.org/)**: Ferramenta para desenvolvimento de componentes isolados e documentação interativa.
- **[Contentful](https://www.contentful.com/)**: Sistema de gerenciamento de conteúdo (CMS) para gerenciar conteúdo dinâmico.
- **[Vercel](https://vercel.com/)**: Plataforma de hospedagem de aplicações Next.js, oferecendo deploy contínuo e integração simples.

## Pré-requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- **Node.js** (Recomendado versão 18 ou superior)
- **npm** ou **yarn** para gerenciamento de pacotes
- **Conta no Contentful** (para gerenciar conteúdo)
- **Conta no Vercel** (para deploy)

## Configuração do Ambiente

### 1. Clonando o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/kellycesario/entre-graos-e-grafemas
cd entre-graos-e-grafemas
```

### 2. Instalando Dependências

Execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
# ou
yarn install
```

### 3. Configuração do Contentful

- Crie uma conta no Contentful.
- Crie um novo espaço no Contentful.
- Crie os modelos (Content Types) e entradas (Entries) conforme necessário para o seu projeto.

#### Configuração da variável de ambiente

Crie um arquivo .env.local na raiz do projeto e adicione as variáveis do Contentful:

```bash
CONTENTFUL_SPACE_ID=seu_space_id
CONTENTFUL_ACCESS_TOKEN=seu_access_token
```

### 4. Configuração do Storybook

Storybook é usado para documentar e testar os componentes da aplicação. Para configurar o Storybook:

```bash
npm run storybook
# ou
yarn storybook
```

### 5. Executando o Projeto Localmente

Para rodar a aplicação em ambiente de desenvolvimento, use o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

### 6. Build e Deploy para Vercel

6.1. Faça login na sua conta do Vercel.
6.2. Crie um novo projeto e conecte-o ao seu repositório GitHub.
6.3. O Vercel automaticamente detectará que o projeto é um app Next.js e configurará o ambiente de build.
6.4. Após a configuração, você pode fazer deploy diretamente do Vercel usando git push.
