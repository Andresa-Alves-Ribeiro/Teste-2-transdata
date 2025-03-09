<h1 align="center"> 
	Analisador de Frequência de Letras
</h1>

<p align="center">
 <a href="#descricao">Descricão</a> •
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#execucao">Como Executar?</a> •
 <a href="#funciona">Como funciona?</a> •
 <a href="#contato">Contato</a> • 
 <a href="#licença">Licença</a>
</p>

## Demonstração

![Captura de tela 2025-03-09 034346](https://github.com/user-attachments/assets/26021216-748b-47fd-98d1-485cbaca49e4)

<a id="descricao"></a>

## Descrição

O Analisador de Frequência de Letras é uma aplicação desenvolvida em **ReactJS**, com estilização em **CSS**, que analisa a frequência de ocorrência de cada letra em um texto digitado pelo usuário. Seu objetivo é fornecer uma distribuição percentual das letras, facilitando a compreensão da composição textual

<a id="funcionalidades"></a>

## 📄 Funcionalidades

- Permite que o usuário insira um texto contendo apenas letras.
- Restringe a entrada a um máximo de 1000 caracteres.
- Calcula a frequência percentual de cada letra no texto inserido.
- Ordena os resultados em ordem decrescente de ocorrência.
- Fornece feedback ao usuário em casos de erro, como entrada vazia ou caracteres inválidos.

<a id="tecnologias"></a>

## 🛠️ Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces.
- **Next.js**: Framework para React que facilita o roteamento e otimização da aplicação.
- **CSS**: Estilização básica da interface.

<a id="execucao"></a>

## 🖥️ Como Executar?

Você pode executar o projeto clicando no link abaixo

https://teste-2-transdata.vercel.app/

**OU**

### 1. Clonar o repositório

Para começar, clone este repositório em sua máquina local:

```bash
git clone https://github.com/Andresa-Alves-Ribeiro/Teste-2-transdata.git
cd Teste-2-transdata
```

### 2. Instalar as dependências

Execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
```

### 3. Executar a aplicação

Após instalar as dependências, execute o comando para rodar a aplicação em modo de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Acesse a aplicação em http://localhost:3000

<a id="#execucao"></a>

## 🌐 Como Funciona?

- O usuário insere um texto contendo apenas letras no campo de entrada.
- O sistema valida a entrada, garantindo que não contenha números ou caracteres especiais.
- Ao pressionar o botão "Analisar", a aplicação calcula a frequência de cada letra.
- Os resultados são exibidos em uma lista, mostrando a porcentagem de cada letra.
- Caso haja algum erro (entrada vazia ou caracteres inválidos), o usuário recebe um aviso por meio do React Toastify.

<a id="#contato"></a>

## 🦸 Contato

- Autora: Andresa A Ribeiro
- E-mail: andresa_15ga@hotmail.com
- LinkedIn: http://linkedin.com/in/andresa-alves-ribeiro

<a id="#licenca"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).
