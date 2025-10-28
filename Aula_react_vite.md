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


# Entendendo os Arquivos do Projeto React com Vite

## Sumário
1. [Introdução](#introdução)
2. [Arquivos Dentro da Pasta src](#arquivos-dentro-da-pasta-src)
3. [O Componente Principal App.jsx](#o-componente-principal-appjsx)
4. [Arquivo de Estilo App.css](#arquivo-de-estilo-appcss)
5. [Arquivo main.jsx](#arquivo-mainjsx)
6. [Arquivo index.css](#arquivo-indexcss)
7. [Criando um Novo Componente](#criando-um-novo-componente)
8. [Conclusão](#conclusão)
9. [Créditos do Projeto](#créditos-do-projeto)

---

## Introdução

Agora que já nos familiarizamos com as pastas do projeto, vamos entender **o que é cada arquivo dentro** delas.

O foco desta aula é explorar os principais arquivos dentro da pasta `src`, que é onde colocamos todo o código que compõe o nosso projeto — seja lógica ou conteúdo visual.

---

## Arquivos Dentro da Pasta src

Dentro da pasta `src`, encontramos inicialmente uma subpasta chamada **assets**.  
Nela, há uma imagem chamada `react.svg`.

A lógica da pasta `assets` é semelhante à da pasta `public`: podemos colocar **imagens, códigos e outros recursos**.  
A principal diferença entre as duas pastas depende do **contexto da aplicação** — e essa diferença será explicada na seção “Para saber mais”.

---

## O Componente Principal App.jsx

Após a pasta `assets`, encontramos os arquivos `App.jsx` e `App.css`.

O arquivo **`App.jsx`** é uma **função que retorna elementos HTML** — isso significa que ele é um **componente React**.

Quando uma função retorna elementos HTML, dizemos que ela é um **componente JSX** (`.jsx` = JavaScript XML).  
Ele é o **componente principal** da aplicação, ou seja, tudo que queremos imprimir na primeira renderização do site estará dentro dele.

No código, podemos observar que:

- A partir da **linha 9**, temos o `return`, que contém o conteúdo exibido na tela (links, imagens, etc.).
- Dentro do `return`, há dois logos (do **Vite** e do **React**).
- Por volta da **linha 21**, há um contador interativo, visível ao abrir o servidor local.

Esses elementos são justamente o que vimos quando executamos o projeto no navegador.

---

## Arquivo de Estilo App.css

O arquivo **`App.css`** contém os **estilos aplicados ao componente `App.jsx`**.

Nele, encontramos:
- Tamanhos predefinidos para imagens;
- Sombras nos elementos;
- Cores e espaçamentos.

Tudo o que estiliza o que é retornado dentro do `App.jsx` está definido no `App.css`.

---

## Arquivo main.jsx

O arquivo **`main.jsx`** é o **ponto de entrada da aplicação React**.  
Sua função é **definir a renderização** dos componentes dentro da estrutura HTML do projeto.

O `main.jsx` cria uma **raiz** em um elemento com o `id="root"` no arquivo HTML principal.  
Dentro dessa raiz, ele **renderiza o componente principal (`App`)**.

Por exemplo, no código:

```
jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

# Criando o Componente Sidebar no Projeto React

## Sumário
1. [Introdução](#introdução)
2. [Estrutura Inicial do Componente](#estrutura-inicial-do-componente)
3. [Importando e Utilizando Imagens](#importando-e-utilizando-imagens)
4. [Adicionando o Botão Publicar](#adicionando-o-botão-publicar)
5. [Adicionando os Itens do Menu](#adicionando-os-itens-do-menu)
6. [Boas Práticas com Imagens SVG](#boas-práticas-com-imagens-svg)
7. [Desafio Final](#desafio-final)
8. [Créditos do Projeto](#créditos-do-projeto)

---

## Introdução

Agora que sabemos onde os componentes serão construídos, é hora de entender **como criar um componente em React**.

Nesta aula, vamos criar o componente **Sidebar**, responsável pelo **menu lateral** da nossa aplicação.

---

## Estrutura Inicial do Componente

Dentro da pasta do projeto, siga o caminho:

>src > components > Sidebar > index.jsx


No arquivo `index.jsx`, começamos com a definição da função do componente:

```
jsx
export default function Sidebar() {
    return();
}
```
Esse trecho define um Function Component — ou Componente de Função.
Nele:

* Utilizamos a palavra reservada function para declarar a função.

* Damos o nome ao componente (Sidebar).

* Usamos export default para exportar o componente por padrão.

* Dentro da função, temos um return(), que indica o conteúdo a ser exibido na tela.

Todos os componentes que criarmos seguirão essa mesma estrutura.

**Importando e Utilizando Imagens**

No Modelo, podemos visualizar o design do nosso projeto.
O Sidebar é uma barra de menu lateral que contém:

O logo do CodeConnect

Um botão de publicar

E uma lista de links, cada um com um ícone e um nome.

## 🔽 Baixando as imagens do Modelo

---
**Prototipo**

![Pototipo ](./img/prototipo.png)

---
---


[Baixe aqui: Imagens assets](https://1drv.ms/f/c/08a6d1d355a14254/EuTDnLjXCY5HqJv1raU0xvIByA8vu2mnlUn38OQNE_hntw?e=eQg9pH)

---

Clique sobre uma imagem (ex: Logo) até ela ficar isolada no menu à esquerda.

Vá até o menu à direita e clique na aba Export.

Clique no botão + e altere o formato para SVG.

Clique em Export para baixar.

Repita para as outras imagens.

>💡 Por que SVG?
Porque é o formato ideal para ícones e gráficos vetoriais — permite redimensionar sem perder qualidade.

**🗂️ Organizando as imagens**

Mova as imagens baixadas da pasta de downloads para dentro do seu projeto:
```
src > components > Sidebar > assets
```

Essa pasta assets conterá apenas as imagens usadas dentro da Sidebar.

Adicionando o Logo

No index.jsx, vamos importar o arquivo da logo e exibi-lo no HTML:
```
import Logo from './assets/Logo.svg';

export default function Sidebar() {
    return(
        <aside>
            <img src={Logo} alt='Logo do CodeConnect' />
        </aside>
    );
}
```

**🧠 Explicando:**

* import Logo from './assets/Logo.svg' → Importa a imagem e atribui a ela o nome Logo.

* <img src={Logo} /> → Exibe a imagem no componente.

* alt='Logo do CodeConnect' → Texto alternativo, usado para acessibilidade.
>Essa é a forma recomendada de importar imagens em React, permitindo o uso dinâmico de arquivos no JSX.


**Adicionando o Botão Publicar**

O próximo elemento no Modelo é o botão “Publicar”, que faz parte do menu lateral.
Vamos adicionar ele dentro de um <nav> (menu de navegação).

Atualize seu index.jsx:
```
import Logo from './assets/Logo.svg';

export default function Sidebar() {
    return(
        <aside>
            <img src={Logo} alt='Logo do CodeConnect' />
            <nav>
                <ul>
                    <li>
                        <a href='#'>Publicar</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
```
>✅ Agora o Sidebar já contém o logo e o botão de publicação!

**Adicionando os Itens do Menu**

Em seguida, vamos adicionar os outros links de navegação, começando pelo Feed.

Primeiro, importe o ícone do feed logo abaixo da importação da logo:

```import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';

export default function Sidebar() {
    return(
        <aside>
            <img src={Logo} alt='Logo do CodeConnect' />
            <nav>
                <ul>
                    <li>
                        <a href='#'>Publicar</a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Feed} alt='' />
                            <span>Feed</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
```

**💬 Observações importantes:**

**Desafio Final**

Crie os outros itens da lista dentro da tag <ul> seguindo o mesmo padrão:
```
<li>
  <a href='#'>
    <img src={Icone} alt='' />
    <span>Nome do Item</span>
  </a>
</li>
```
>✨ Dica:
Crie um arquivo Sidebar.css e estilize o componente — adicionando espaçamentos, cores, fontes e tamanhos dos ícones.



# Finalizando o Componente Sidebar

## Sumário
1. [Introdução](#introdução)
2. [Adicionando Novos Itens ao Menu](#adicionando-novos-itens-ao-menu)
3. [Código Completo do Sidebar](#código-completo-do-sidebar)
4. [Explicando o Código](#explicando-o-código)
5. [Organização dos Arquivos](#organização-dos-arquivos)
6. [Conclusão](#conclusão)
7. [Créditos do Projeto](#créditos-do-projeto)

---

## Introdução

Até agora, construímos o **componente Sidebar** com o logo do CodeConnect, o botão **Publicar** e o primeiro link do menu — o **Feed**.

Nesta parte da aula, vamos adicionar os **demais itens de navegação** conforme o layout do **Modelo**, finalizando a estrutura do componente.

---

## Adicionando Novos Itens ao Menu

Os novos itens que serão adicionados são:

- **Perfil** (`Account.svg`)  
- **Sobre nós** (`Info.svg`)  
- **Sair** (`Logout.svg`)

Esses ícones devem estar dentro da pasta:
```
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
```

## Implementando os Links de Navegação

Chegou a hora de dar continuidade na criação do componente **Sidebar**. O foco desta etapa é implementar os **links de navegação** na barra lateral, cada um contendo um **ícone** e um **texto correspondente**.

### Opinião do Instrutor

Cada item do menu de links de navegação é composto por:

- Um link (`<a>`) com o atributo `href`
- Um ícone (`<img>`) importado e atribuído a um nome
- Um texto (`<span>`) indicando a função do link

Para importar os ícones, utilizamos a seguinte sintaxe:

```
javascript
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
```

>💡 Dica: Certifique-se de que os nomes dos arquivos SVG estejam corretos e respeitem maiúsculas e minúsculas.

**Criando os Itens do Menu**

Cada item de navegação é representado por uma <li>, que contém:

Um ` <a href='#'> `

Uma `<img>` apontando para o ícone

Um `<span>` com o texto do link

O resultado final dos itens adicionais é:
```
<li>
    <a href='#'>
        <img src={Account} alt='' />
        <span>Perfil</span>
    </a>
</li>
<li>
    <a href='#'>
        <img src={Info} alt='' />
        <span>Sobre nós</span>
    </a>
</li>
<li>
    <a href='#'>
        <img src={Logout} alt='' />
        <span>Sair</span>
    </a>
</li>
```

## Observações Importantes

O `alt=''` é deixado vazio para evitar redundância na leitura por leitores de tela, já que o texto do `<span>` descreve o link.

A importação dos ícones deve ser feita antes do `export default function Sidebar().`

Os links adicionados (Perfil, Sobre nós, Sair) seguem o mesmo padrão do link Feed já implementado anteriormente.

Com isso, finalizamos a implementação de todos os links de navegação do Sidebar. O próximo passo será estilizar a barra lateral para que fique visualmente igual ao design no Modelo.

```
                    <li>
                        <a href='#'>
                            <img src={Account} alt='' />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Info} alt='' />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Logout} alt='' />
                            <span>Sair</span>
                        </a>
                    </li>

```
# 🧩 Finalizando o Componente Sidebar

## 📚 Sumário
- [Introdução](#introdução)
- [Importação das Imagens](#importação-das-imagens)
- [Implementação do Sidebar](#implementação-do-sidebar)
- [Limpando-o-appjsx](#limpando-o-appjsx)
- [Renderizando-o-Componente-Sidebar](#renderizando-o-componente-sidebar)
- [Executando-o-Servidor-Local](#executando-o-servidor-local)
- [Removendo-Estilizações-Padrão](#removendo-estilizações-padrão)
- [Importando-a-Fonte-no-Projeto](#importando-a-fonte-no-projeto)
- [Criando-Variáveis-de-Cores-e-Fonte](#criando-variáveis-de-cores-e-fonte)
- [Conclusão](#conclusão)
- [Créditos](#créditos)

---

## 🧠 Introdução

Vamos comparar os resultados do desafio!  
Finalizamos a importação das imagens no nosso `index.jsx`.  

Eu nomeei como **Account**, **Info** e **Logout**, mas vocês não precisam usar exatamente os mesmos nomes — o importante é que o diretório e o caminho estejam corretos conforme o projeto.  

Depois, inserimos essas imagens em itens da lista, dentro de âncoras (`<a>`) e da tag `<img>`, acompanhadas por um `<span>` com o texto do link.

---

## 🖼️ Importação das Imagens

```
jsx
import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
```

🧱 Implementação do Sidebar
```
export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} alt='Logo do CodeConnect' />
            <nav>
                <ul>
                    <li>
                        <a href='#'>Publicar</a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Feed} alt='' />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Account} alt='' />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Info} alt='' />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Logout} alt='' />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
```
Com isso, conseguimos construir o nosso Sidebar completo!
Mas ainda não mostramos nada na tela. Para isso, precisamos editar o `App.jsx.`

🧹 Limpando o App.jsx

No arquivo `App.jsx`, apagaremos todo o conteúdo dentro do `return()`.

O código ficará assim:
``` 
import './App.css'

function App() {
  return (

  )
}

export default App
```
⚙️ Renderizando o Componente Sidebar

Com o arquivo limpo, dentro do return() inseriremos o nosso componente Sidebar:
```
import './App.css'
import Sidebar from './componentes/Sidebar'

function App() {
  return (
    <Sidebar />
  )
}

export default App
```
💡 Dica:
Se o VS Code não sugerir automaticamente a importação, clique em Sidebar e pressione Ctrl + Espaço para forçar a autoimportação.

🖥️ Executando o Servidor Local

Para visualizar o resultado no navegador, precisamos iniciar o servidor local com o comando:
```
npm run dev
```
Se o terminal anterior ainda estiver aberto, basta acessar o link que aparece, normalmente:
```
http://127.0.0.1:5173
```
Se o terminal estiver fechado:

No VS Code, clique em Terminal > New Terminal,
ou use o atalho Ctrl + Shift + '
```
Digite: npm run dev
```
Pressione Enter.

Após isso, copie o link exibido e cole no navegador.

Agora o Sidebar será renderizado corretamente — mas ainda com estilos padrão do navegador.

🎨 Removendo Estilizações Padrão

Vamos limpar as estilizações padrão do Vite:

Abra o arquivo App.css

Selecione todo o código (Ctrl + A)

Apague tudo e salve.

Depois, faça o mesmo com o arquivo index.css.

Agora, ao atualizar o navegador, teremos a aparência básica do HTML:
fundo branco, links azuis e listas com marcadores padrão.

✍️ Importando a Fonte no Projeto

Para aplicar a fonte correta, vamos consultar o Modelo, na seção Guia de Estilos.
A fonte utilizada é Prompt, com os pesos 400 (Regular) e 500 (Medium).

Passo a passo:

Acesse Google Fonts


[Acesse aqui google.com]([](https://fonts.google.com/))

Pesquise por Prompt

Selecione Regular 400 e Medium 500

Copie o trecho de código `<link> `gerado em Selected Family

Cole o código dentro do `<head>`do seu index.html, logo após a tag `<meta>`:

```
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500&display=swap" rel="stylesheet">
  <title>Vite + React</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```
>Agora a fonte Prompt está importada com sucesso no projeto.

🌈 Criando Variáveis de Cores e Fonte

No Modelo, na seção Guia de Estilos, temos também as cores do projeto.
Por exemplo, o Verde destaque possui o valor hexadecimal `#81FE88`.

No VS Code, abra o arquivo `index.css` e adicione as variáveis dentro do `:root {}:`
```
:root {
  --verde-destaque: #81FE88;
  --verde-petroleo: #132E35;
  --grafite: #01080E;
  --cinza-escuro: #171D1F;
  --cinza-medio: #888888;
  --cinza: #3E3E3F;
  --cinza-claro: #BCBCBC;
  --offwhite: #E1E1E1;
  --branco: #FFFFFF;
}
```
💡 Dica:
Se tiver dúvida sobre como adicionar famílias de fontes, consulte a área Selected Family do Google Fonts — lá aparece o formato correto para o CSS.
✅ Conclusão

Agora temos:

O Sidebar funcional e renderizado

A fonte personalizada Prompt importada

E as variáveis de cor e fonte definidas no CSS

No próximo passo, começaremos a estilização do componente!


# 🎨 Melhorando a Aparência do Projeto

## 💡 Introdução

Vamos melhorar a aparência do nosso projeto?

Lembre-se de **criar as variáveis CSS** conforme o **guia de estilos do Modelo**.  
Vamos conferir a aparência atual do projeto. Estamos percebendo alguns **espaçamentos no navegador entre a lista e o fim da janela**.

Isso indica que existem alguns estilos aplicados que não implementamos.  
Vamos removê-los acessando o `index.css` e, na linha 14, adicionando `*{}` contendo as propriedades `margin: 0;`, `padding: 0;` e `box-sizing: border-box;`.

---

## 🧹 Resetando o CSS

```
css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Essas linhas funcionam como um reset CSS simplificado.
Voltando ao navegador, as estilizações padrão já foram removidas

🪶 Aplicando Cor de Fundo e Fonte

Observando o Modelo, temos um modelo chamado “Feed”, onde notamos que existe:

uma cor de fundo aplicada a toda a aplicação;

e uma fonte padrão usada no projeto.

Para descobrir a cor de fundo, clique na palavra “Feed” no canto superior esquerdo do modelo no Modelo.
No menu de propriedades, à direita, você verá que a cor de fundo é grafite.

Vamos aplicar isso no `index.css`.
Após o seletor `*{}`, pressione Enter duas vezes e crie a tag `body {}` na linha 20, adicionando o código abaixo:

```
body {
  background-color: var(--grafite);
  font-family: var(--fonte);
}
```
>Após salvar e verificar no navegador, o fundo branco desaparece e a fonte é alterada.

🧱 Criando o Arquivo de Estilos da Sidebar

No Modelo, dentro do modelo Feed, conseguimos visualizar algumas estilizações aplicáveis à Sidebar:

Cor de fundo: cinza-escuro

Borda arredondada: 8px

Padding: 40px 16px

Largura: 177px

🗂️ Criando o arquivo

Na pasta `componentes/Sidebar`, clique com o botão direito e selecione New File
Nomeie o arquivo como `styles.css`

🧩 Importando no componente

No arquivo `index.jsx` da Sidebar, adicione no final da lista de importações:
```
import './styles.css';
```

Exemplo completo:

```
import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
import './styles.css';

export default function Sidebar() {
    // código omitido
}
```

🎨 Estilizando o Sidebar

```
aside {
    background-color: var(--cinza-escuro);
    padding: 2.5em 1em;
    width: 177px;
    border-radius: 8px;
}
```
>💡 O valor de padding foi convertido de 40px 16px para 2.5em 1em.
A unidade em é relativa ao tamanho da fonte, e costuma deixar o layout mais flexível.

🧭 Estilizando a Lista de Links

No Modelo, observamos um espaçamento de 40px entre os itens da lista.

Adicionando a classe na lista
```
<ul className='lista-sidebar'>
    <li>
        <a href='#'>Publicar</a>
    </li>
    <li>
        <a href='#'>
            <img src={Feed} alt='' />
            <span>Feed</span>
        </a>
    </li>
</ul>
```
>💡 Em React, usamos className em vez de class, pois class é uma palavra reservada no JavaScript.

Estilizando no CSS
```
.lista-sidebar {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    list-style-type: none;
    margin-top: 5em;
}
```

Essas propriedades:

transformam a lista em container flexível;

criam espaçamento uniforme entre os itens com `gap;`

removem o estilo padrão da lista `(list-style-type: none);`

e adicionam espaçamento superior com `margin-top`.

🧩 Estilizando os Itens da Lista
```
.lista-sidebar li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    gap: 10px;
}
```
>Essas propriedades alinham ícones e texto verticalmente, centralizando-os com espaçamento consistente.

🔗 Removendo Estilos Padrão dos Links

```
<ul className='lista-sidebar'>
    <li>
        <a href='#'>Publicar</a>
    </li>
    <li>
        <a href='#' className='item__link'>
            <img src={Feed} alt='' />
            <span>Feed</span>
        </a>
    </li>
</ul>
```
Estilizando os links
```
<ul className='lista-sidebar'>
    <li>
        <a href='#'>Publicar</a>
    </li>
    <li>
        <a href='#' className='item__link'>
            <img src={Feed} alt='' />
            <span>Feed</span>
        </a>
    </li>
</ul>
```
>Agora os links aparecem na cor cinza-claro e sem sublinhado.

✴️ Destacando o Link Ativo

```
<li>
    <a href='#' className='item__link item__link--ativo'>
        <img src={Feed} alt='' />
        <span>Feed</span>
    </a>
</li>
```
```
.item__link--ativo {
    color: var(--branco);
}
```

>O link ativo aparecerá em branco, conforme o Modelo.

🚀 Estilizando o Botão de Publicar
```
<li>
    <a href='#' className='item__link-publicacao'>Publicar</a>
</li>
```
```
.item__link-publicacao {
    border: 1px solid var(--verde-destaque);
    color: var(--verde-destaque);
    padding: 0.75em 1em;
    border-radius: 8px;
    text-decoration: none;
}
```
Essas definições aplicam:

* borda verde,

* texto verde,

* cantos arredondados,

* espaçamento interno proporcional,

* e removem o sublinhado.

✅ Resultado Final

Agora temos:

O Sidebar completamente estilizado conforme o modelo;

Cores, fontes e espaçamentos padronizados;

Layout limpo e consistente com o design.

Com sucesso, construímos e estilizamos nosso primeiro componente! 🎉
Podemos continuar com o restante do projeto.









## 📚 **_Créditos_**

- Projeto desenvolvido para fins educacionais na turma
- JOVEM-TECH-TC-REACT-JS
- Professor: Claudeny Avelino
- E-mail: claudeny.avelino@gmail.com

