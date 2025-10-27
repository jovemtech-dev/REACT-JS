# 🧠 Iniciando um Projeto React com Vite

## 👨‍🏫 Professor

**Nome:** Claudeny Avelino  
**E-mail:** claudeny.avelino@gmail.com  
**Turma:** JOVEM-TECH-TC-REACT-JS

---

## 🖥️ Introdução

Criar um projeto React do zero pode parecer complicado, pois estamos acostumados a trabalhar com HTML, CSS e JavaScript.  
O **Vite** facilita muito essa tarefa, criando automaticamente a estrutura base de um projeto moderno.

> 🧩 O Vite é uma ferramenta de build de front-end de próxima geração, rápida e otimizada.

---

## ⚙️ Acessando o site do Vite

1. Acesse o site [vitejs.dev](https://vitejs.dev).
2. Clique no botão **“Get Started”**.
3. Na documentação, procure a seção **“Scaffolding Your First Vite Project”**.
4. Verifique se você possui o **Node.js** instalado (versão **18+** recomendada).

---

## 🧰 Pré-requisitos

Antes de começar, verifique se você possui instalado:

- **Node.js 18 ou superior**
- **npm (Node Package Manager)**
- Um editor de código (recomendado: **Visual Studio Code**)
***OBS:***

```
node -v

nmp -v
```
Para corrigir erro
```
npm install -g npm@8.15.0
```

---

## 💡 Criando o projeto

Na documentação, encontramos o comando base:

```
npm create vite@latest
```

🧩 **_Criando um projeto React_**

Para criar uma aplicação React com Vite, utilize o comando:

```
npm create vite@latest codeconnect -- --template react

```

```
Em seguida.
> npx
> create-vite codeconnect react

│
◆  Select a framework:
│  ○ Vanilla
│  ○ Vue
│  ● React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Qwik
│  ○ Angular
│  ○ Marko
│  ○ Others

```

Em seguida.

```
> npx
> create-vite codeconnect react

│
◇  Select a framework:
│  React
│
◆  Select a variant:
│  ○ TypeScript
│  ○ TypeScript + React Compiler
│  ○ TypeScript + SWC
│  ● JavaScript
│  ○ JavaScript + React Compiler
│  ○ JavaScript + SWC
│  ○ React Router v7 ↗
│  ○ TanStack Router ↗
│  ○ RedwoodSDK ↗
│  ○ RSC ↗

```

```
> npx
> create-vite codeconnect react

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◆  Use rolldown-vite (Experimental)?:
│  ○ Yes
│  ● No
```

```
> npx
> create-vite codeconnect react

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◆  Install with npm and start now?
│  ● Yes / ○ No

```

```
  VITE v7.1.12  ready in 456 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Explicação:**

npm create vite@latest → cria o projeto usando a versão mais recente do Vite

codeconnect → nome do projeto

-- --template react → define o template (React)

-- → necessário em versões do npm 7+

📁 **_Escolhendo o local do projeto_**

Crie uma pasta (ex: ?/dev)

Clique com o botão direito → Abrir no terminal

Execute o comando de criação dentro dessa pasta

⚡ **_Após criar o projeto_**

No terminal, será exibida uma série de mensagens — são os arquivos sendo gerados.
Depois, execute os comandos:

```
cd codeconnect
npm install
```

> Esses comandos acessam a pasta do projeto e instalam todas as dependências necessárias.

🚀 **_Executando o projeto_**

Para iniciar o servidor de desenvolvimento, use:

```
npm run dev
```

Você verá algo como:

```
Local: http://127.0.0.1:5173/
Network: use --host to expose
press h + enter to show help
```

🌐 **_Visualizando o projeto_**

Copie o link exibido no terminal:
http://000.0.0.0:5173/

Cole no seu navegador.

Você verá:

Logotipos do Vite e React

Texto “Vite + React”

Um contador interativo

🧭 **_Explorando no VS Code_**

Abra a pasta do projeto no Visual Studio Code:

A estrutura criada pelo Vite inclui:

Arquivos de configuração

Componentes React iniciais

Setup básico de build e execução

🏁 **_Conclusão_**

O Vite torna a criação de projetos React mais simples e rápida.
Com poucos comandos, você já tem um ambiente de desenvolvimento pronto, moderno e otimizado.

> 💬 Próximo passo: explorar a estrutura de pastas e entender o que o Vite cria automaticamente.


# Estrutura de Pastas no Projeto React com Vite

## Sumário
1. [Introdução](#introdução)
2. [Acessando o Projeto](#acessando-o-projeto)
3. [Explorando o Projeto no VS Code](#explorando-o-projeto-no-vs-code)
4. [Pasta node_modules](#pasta-nodemodules)
5. [Pasta public](#pasta-public)
6. [Pasta src](#pasta-src)
7. [Comandos Úteis](#comandos-úteis)
8. [Conclusão](#conclusão)
9. [Créditos do Projeto](#créditos-do-projeto)

---

## Introdução

Vamos entender o que o **Vite** fez para facilitar a criação de um projeto em **React** e como está organizada sua **estrutura de pastas**.

O Vite é uma ferramenta de build moderna que torna o processo de desenvolvimento mais rápido, leve e eficiente.

---

## Acessando o Projeto

Primeiro, abra o **explorador de arquivos** do seu computador e navegue até a pasta `dev`.  
Dentro dela, deve existir a pasta **codeconnect**, criada anteriormente via terminal.

Siga os passos:

1. Abra a pasta `codeconnect`.  
2. Clique com o **botão direito do mouse** → **"Abrir no Terminal"**.  
3. No terminal, execute o comando abaixo para abrir o projeto no **VS Code**:

   ```
   bash
   code .
```

>Dica: Existem várias maneiras de abrir o VS Code. Essa é apenas uma das mais práticas.
```
---

## Explorando o Projeto no VS Code

Com o projeto aberto, olhe para o Explorador de Arquivos (painel esquerdo do VS Code).
Você verá diversas pastas e arquivos — vamos entender o papel de cada um deles.

## Pasta node_modules

Essa pasta contém todas as dependências externas utilizadas no projeto.

Exemplos de dependências:

React → biblioteca principal para criar interfaces.

Babel → traduz o código JSX para o navegador entender.

Vite → servidor e empacotador rápido para desenvolvimento.

Importante:

A pasta node_modules é muito grande e pesada.

Nunca envie essa pasta para o repositório GitHub.

>Atenção:
Sempre que alguém clonar o projeto, basta rodar o comando: **npm** install


npm install

Atenção:
Sempre que alguém clonar o projeto, basta rodar o comando:

npm install


Esse comando recriará automaticamente a pasta node_modules com todas as dependências do projeto.

## Pasta public

A pasta public é usada para armazenar arquivos estáticos — imagens, ícones ou qualquer arquivo que possa ser acessado globalmente no projeto.

Exemplo de conteúdo:
```
public/
 ├── vite.svg       # Logo padrão do Vite
 ├── logo.png       # Imagem personalizada do projeto
 └── favicon.ico    # Ícone do site
```

Dica:
Tudo dentro de public/ é servido diretamente pelo servidor, então evite colocar arquivos sensíveis nessa pasta.

## Pasta src

A pasta src é o coração do projeto.
Aqui ficam todos os arquivos do código-fonte: componentes React, estilos, imagens e lógica da aplicação.

Exemplo de estrutura:
```
src/
 ├── assets/          # Imagens e arquivos de estilo (CSS, SVG)
 ├── components/      # Componentes reutilizáveis
 ├── App.jsx          # Componente principal da aplicação
 ├── main.jsx         # Ponto de entrada do React
 └── index.css        # Estilos globais
```

Explicando:

>App.jsx → arquivo principal que renderiza a interface.

>main.jsx → inicializa o React e renderiza o App.

>assets/ → guarda imagens e estilos importados pelos componentes.

## Comandos Úteis

| Comando                       | Descrição                                                   |
| ----------------------------- | ----------------------------------------------------------- |
| `npm install`                 | Instala todas as dependências listadas no `package.json`    |
| `npm run dev`                 | Inicia o servidor de desenvolvimento                        |
| `npm run build`               | Gera uma versão otimizada para produção                     |
| `npm run preview`             | Executa o build localmente para testes                      |
| `npm create vite@latest`      | Cria um novo projeto Vite                                   |
| `npm install react react-dom` | Instala o React e o React DOM manualmente (caso necessário) |


Aqui estão os comandos mais comuns para trabalhar com o projeto React criado com Vite:

Comando	Descrição

| Comando                       | Descrição                                                   |
| ----------------------------- | ----------------------------------------------------------- |
| `npm install`                 | Instala todas as dependências listadas no `package.json`    |
| `npm run dev`                 | Inicia o servidor de desenvolvimento                        |
| `npm run build`               | Gera uma versão otimizada para produção                     |
| `npm run preview`             | Executa o build localmente para testes                      |
| `npm create vite@latest`      | Cria um novo projeto Vite                                   |
| `npm install react react-dom` | Instala o React e o React DOM manualmente (caso necessário) |


## Conclusão

Agora que você conhece as três pastas principais do projeto React criado com o Vite:

Pasta	Função
node_modules	Contém as dependências e bibliotecas externas
public	Armazena arquivos estáticos reutilizáveis
src	Contém todo o código-fonte e a lógica do projeto

Nos próximos passos, você explorará os arquivos dentro da pasta src e entenderá como o React estrutura os componentes e renderiza as interfaces.




## 📚 **_Créditos_**

- Projeto desenvolvido para fins educacionais na turma
- JOVEM-TECH-TC-REACT-JS
- Professor: Claudeny Avelino
- E-mail: claudeny.avelino@gmail.com

