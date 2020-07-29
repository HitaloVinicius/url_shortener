# URL Shortener

 A aplicação trata-se de uma API REST que tem como objetivo receber URLs de usuários autenticados e gerar URLs encurtadas. Cada URL encurtada pode ser acessado de forma pública, porém as estatísticas da URL só podem ser acessadas pelo usuário responsável pela sua criação.

## Variáveis de ambiente

Antes de executar a API, você precisa configurar o arquivo `.env`. Use o exemplo disponível, fornecido neste projeto, para criar o seu.

Você pode copiá-lo executando o seguinte comando no diretório raiz deste projeto:

```
$ cp .env.example .env
```

Depois de concluir, você precisará definir as chaves no seu arquivo `.env` .

## Configuração

Antes de executar este projeto, você deve instalar todas as dependências necessárias. Faça isso executando o seguinte comando:

```
$ yarn
```

## Executando migrations

Depois de instalar todas as dependências, antes de iniciar o servidor, é necessário executar algumas migrations para criar os esquemas do banco de dados.

Você pode fazer isso executando:

```
$ yarn sequelize db:migrate
```

Se você precisar reverter as alterações, execute o seguinte comando:

```
$ yarn sequelize db:migrate:undo:all
```

## Executando a API

Depois de concluir todas as etapas anteriores, você estará pronto para começar a usar a API. Inicie o aplicativo executando o seguinte comando:

```
$ yarn start
```

A API usa a porta `3000` como padrão, fique à vontade para alterá-la.

## Executando testes

Você pode executar os testes unitários executando o seguinte comando:

```
yarn test
```

## Rotas

### URL base

```
address:port
```

### Novo Usuário

```
POST: /user
```

### Autenticar Usuário

```
POST: /auth
```

### Adicionar URL

```
POST: /url
```

### Retornar URL

```
GET: /url/:id
```

### Estatísticas da URL

```
GET: /url/:id/details
```
