# Como Executar o Projeto

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js (versão 24 ou superior)
- Git
- pnpm

Caso o *pnpm* ainda não esteja instalado, execute:

bash
npm install -g pnpm


---

# Primeira execução

Após clonar o repositório ou realizar um git pull, siga os passos abaixo.

## 1. Acesse a pasta do projeto

bash
cd neki-solicitacao-ferias-web


## 2. Troque para a branch de desenvolvimento

bash
git checkout develop


## 3. Atualize a branch

bash
git pull origin develop


## 4. Instale as dependências

bash
pnpm install


Esse comando instalará todas as dependências do projeto descritas no package.json.

## 5. Executar a aplicação

bash
pnpm dev


A aplicação ficará disponível em:


http://localhost:3000


---

# Executar os testes

Para executar todos os testes do projeto:

bash
pnpm test


---

# Sempre que atualizar o projeto

Sempre que houver novas alterações na branch develop, execute:

bash
git pull origin develop


Caso tenham sido adicionadas novas dependências ao projeto, execute novamente:

bash
pnpm install
