# Tutorial: Como rodar a aplicação

Este tutorial irá guiá-lo pelos passos necessários para rodar a aplicação `Desafio-SoftMakers`. Para rodar a aplicação, você precisará dos seguintes pré-requisitos:

- **Docker Desktop**: Necessário para rodar o banco de dados MySQL.
- **Node.js**: Necessário para rodar o backend (NestJS) e o frontend (Next.js) da aplicação.

## Introdução às Tecnologias Usadas

- **NestJS**: Um framework Node.js para construir aplicativos eficientes e escaláveis no lado do servidor. Ele é baseado em TypeScript e utiliza conceitos do design modular, proporcionando uma estrutura sólida para o backend da aplicação.
- **Next.js**: Um framework React para criar aplicações web rápidas e escaláveis. Ele fornece renderização do lado do servidor (SSR) e geração de páginas estáticas (SSG) por padrão, tornando o frontend da aplicação muito mais eficiente.
- **Prisma**: Um ORM (Object-Relational Mapping) moderno para Node.js e TypeScript. O Prisma facilita a interação com o banco de dados, proporcionando uma API robusta e simplificada para manipular dados.
- **Docker**: Plataforma que facilita a criação, distribuição e execução de containers. O Docker é utilizado aqui para rodar o banco de dados MySQL.

## 1. Clonando o repositório

Primeiro, clone o repositório para a sua máquina local:

```bash
git clone https://github.com/LuizBuarqueDev/Desafio-SoftMakers.git
```

Esse comando vai baixar o código fonte da aplicação para o seu computador.

## 2. Navegando até a pasta do backend

Agora, acesse o diretório `pet-backend`, onde o backend da aplicação está localizado:

```bash
cd ./Desafio-SoftMakers/
cd ./pet-backend/
```

## 3. Instalando as dependências do backend

Dentro da pasta `pet-backend`, instale as dependências necessárias para o backend utilizando o npm (Node Package Manager):

```bash
npm install
```

## 4. Iniciando o Docker

Abra o **Docker Desktop** para garantir que o Docker esteja funcionando corretamente. O Docker será utilizado para rodar o banco de dados MySQL da aplicação.

## 5. Rodando o banco de dados MySQL com Docker

Agora, no terminal, execute o seguinte comando para rodar o container do MySQL:

```bash
docker run --name pet-mysql -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=soft_pet -p 3306:3306 mysql
```

Este comando irá iniciar um container com o MySQL, criando um banco de dados chamado `soft_pet` e configurando a senha do root como `rootpassword`. A porta 3306 do MySQL será mapeada para a mesma porta na sua máquina.

## 6. Realizando a migração do banco de dados

Após o MySQL estar rodando, execute a migração inicial com o Prisma. Isso configurará o banco de dados com as tabelas necessárias para a aplicação:

```bash
npx prisma migrate dev --name init
```

## 7. Acessando o Prisma Studio

O Prisma Studio é uma interface gráfica para gerenciar seu banco de dados. Para abri-lo, utilize o comando:

```bash
npx prisma studio
```

Isso abrirá o Prisma Studio no seu navegador para que você possa visualizar e editar os dados do banco de dados.

## 8. Rodando o backend com NestJS

Agora, abra um novo terminal e navegue até o diretório `pet-backend` novamente:

```bash
cd ./Desafio-SoftMakers/pet-backend
```

Com o terminal dentro do diretório correto, execute o backend com o seguinte comando:

```bash
npm run start:dev
```

Este comando iniciará o servidor do backend em modo de desenvolvimento.

## 9. Configurando o frontend com Next.js

Abra outro terminal e navegue até o diretório do frontend:

```bash
cd ./Desafio-SoftMakers/pet-frontend
```

Agora, instale as dependências do frontend:

```bash
npm install
```

Depois de instalar as dependências, execute o servidor de desenvolvimento do frontend:

```bash
npm run dev
```

Isso iniciará o frontend da aplicação em um servidor de desenvolvimento, geralmente acessível em `http://localhost:3000`.

## Informações de Acesso

Após rodar a aplicação, você pode acessar as seguintes URLs:

- **Prisma Studio (Banco de Dados)**: [http://localhost:5555](http://localhost:5555)
- **Backend (NestJS)**: [http://localhost:3001](http://localhost:3001)
- **Frontend (Next.js)**: [http://localhost:3000](http://localhost:3000)
