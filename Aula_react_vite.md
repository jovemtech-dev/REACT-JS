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

📚 **_Créditos_**

- Projeto desenvolvido para fins educacionais na turma
- JOVEM-TECH-TC-REACT-JS
- Professor: Claudeny Avelino
- E-mail: claudeny.avelino@gmail.com
