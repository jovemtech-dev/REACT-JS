# 🟦 Curso de React – Aula com o Instrutor Claudeny

Bem-vindo(a) ao repositório da aula introdutória do **Curso de React**, com o instrutor **Claudeny**.
Aqui você encontra todos os conteúdos da aula, organizados em formato de slides e adaptados para Markdown.

---

## 🟦 Slide 1 – Boas-vindas ao Curso de React

**Instrutor:** Claudeny  
**Tema:** Introdução ao React e desenvolvimento do projeto **Code Connect**

**Descrição:**  
Após aprender HTML, CSS e JavaScript, vamos dar o próximo passo:  
👉 Construir interfaces modernas com **React**.

---

## 🟦 Slide 2 – Projeto Code Connect

Durante o curso, desenvolveremos a **página de login** do projeto **Code Connect**.
Você aprenderá a:

- Criar componentes;
- Criar componentes dinâmicos e flexíveis;
- Gerenciar estados (*state*);
- Manipular eventos com React.

---

## 🟦 Slide OBS – Pré-requisitos

Para realizar este módulo, é essencial ter uma base sólida em:

- **HTML**
- **CSS**
- **JavaScript**

> O CSS será entregue pronto e os componentes React têm semelhanças com o que você já aprendeu.

🔧 **Preparando o ambiente:**  
Acesse os repositórios do instrutor:  
[https://github.com/ClaudenyAvelino?tab=repositories](https://github.com/ClaudenyAvelino?tab=repositories)

---

## 🟦 Slide 3 – Importância do React

- Criado em 2013 e amplamente utilizado no mercado;
- Permite criar interfaces interativas e dinâmicas;
- Facilita a reutilização e organização do código;
- É um diferencial em processos seletivos de tecnologia.

---

## 🟦 Slide 4 – O que é o React

📘 O **React** é uma **biblioteca JavaScript** para criar interfaces de usuário web e nativas.  
> “Com o React, criamos interfaces de usuário a partir de componentes.”

🔗 Saiba mais em:

- [Documentação Oficial – react.dev](http://react.dev)
- [W3Schools – React Intro](https://www.w3schools.com/react/react_intro.asp)



![Prévia da página de login do projeto Code Connect](/img/login-preview.png)

---

## 🟦 Slide 5 – Preparando o Ambiente

Usaremos o **React via CDN**, ou seja, sem precisar instalar nada.

### Devemos importar três arquivos:

1️⃣ React  
2️⃣ React DOM  
3️⃣ Babel

Essas ferramentas permitem criar e exibir componentes na tela.

---

## 🟦 Slide 6 – Instalando React e React DOM

### Instalando o React
Para isso, vamos abrir a página [http://cdnjs.com/libraries/react](http://cdnjs.com/libraries/react) e copiar o primeiro link da lista da página inicial, com cor de fundo laranja.

### Instalando o React DOM
Além do React, precisamos instalar outras coisas, como o **react-dom**. Para baixá-lo, acessamos a página [http://cdnjs.com/libraries/react-dom](http://cdnjs.com/libraries/react-dom).



Adicione dentro da tag `<body>` do seu `index.html`:

```
html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
```

🧩 React DOM conecta o React ao DOM (estrutura HTML da página).

---

## 🟦 Slide 7 – Instalando o Babel

### Instalando o Babel
Por fim, precisamos instalar o **Babel**. Abrindo a página [http://cdnjs.com/libraries/babel-standalone](http://cdnjs.com/libraries/babel-standalone), também vamos copiar a *Script Tag* do primeiro link.



Adicione também o Babel:

```
html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.3/babel.min.js"></script>
```

💡 **Função:** traduz o código JavaScript moderno (JSX) para uma versão compreensível pelos navegadores.  
No React, ele converte componentes escritos com HTML + JS em código executável.

---

## 🟦 Slide 8 – Estrutura Final do index.html

```
html
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.3/babel.min.js"></script>
</body>
```

✅ Pronto! O ambiente React está configurado.  
Agora podemos começar a criar nossos componentes.

---

## 🟦 Slide 9 – Começando a Criar Componentes

Vamos criar o primeiro componente React: o título da página de login.

📌 O projeto no Figma apresenta:

- Imagem ilustrativa à esquerda;
- Título “Login”;
- Campos de e-mail e senha;
- Botões de login (Google e GitHub);
- Link “Crie seu cadastro”.

---

## 🟦 Slide 10 – Estrutura de um Componente

Dentro da tag `<body>` do seu `index.html`, adicione:

```
html
<script type="text/babel">
  function Titulo() {
    return (
      <h1>Login</h1>
    )
  }
</script>
```

📘 **Entendendo:**  
- `function` → define o componente;  
- `return()` → retorna o conteúdo do componente;  
- **JSX** → mistura de HTML + JavaScript.

---

## 🟦 Slide 11 – Aplicando Estilos (CSS)

O estilo do título já está pronto no arquivo `PaginaDeLogin.css`:

```
css
.form__titulo {
  font-size: 31px;
  font-weight: 600;
}
```

Atualize o componente para usar a classe CSS:

```
jsx
<h1 className='form__titulo'>Login</h1>
```

⚠️ No React usamos **className** ao invés de **class**, pois “class” é uma palavra reservada no JavaScript.

---

## 🟦 Slide 12 – JSX e Babel em Ação

O Babel converte o JSX para JavaScript puro, permitindo que o navegador compreenda o código:

```
jsx
function Titulo() {
  return (<h1 className='form__titulo'>Login</h1>);
}
```

🧠 **Resumo:**  
- JSX → linguagem híbrida entre HTML e JavaScript;  
- Babel → realiza a conversão;  
- React DOM → renderiza o componente na tela.

---

## 🟦 Slide 13 – Desafio da Aula

💪 **Desafio:**  
Crie um novo componente no seu projeto!

**Sugestões:**  
- Um subtítulo: “Boas-vindas! Faça seu login”;  
- Um botão: “Entrar”;  
- Um campo de texto: “Digite seu e-mail”.

📢 Está com dúvidas? trocar ideias com outros alunos.

---

## 🟦 Slide 14 – Conclusão

✅ **O que aprendemos nesta aula:**  
- A estrutura de um componente React;  
- Como usar JSX;  
- Diferença entre class e className;  
- O papel do Babel na tradução do código.

🚀 **Próximo passo:**  
Renderizar o componente na tela e seguir com a construção da página de login do projeto **Code Connect**!


## 🟦 Slide 15 – Renderizando Componentes na Tela

Agora que criamos o componente Subtitulo como desafio, vamos aprender como renderizar os componentes React no navegador.

🔍 **Problema Inicial:**
Inserir <Subtitulo></Subtitulo> diretamente no HTML não funciona — React não interpreta isso como um componente automaticamente.

✅ **Solução: Criar um ponto de montagem com ReactDOM**

Devemos criar um elemento raiz onde o React irá renderizar os componentes. Adicione isso no HTML, logo após a tag <body>:
```
<body>
  <div id="root"></div>
</body>
```

⚙️ **Ligando o React ao HTML**

Após declarar os componentes, use o seguinte script para renderizar o componente Titulo:

```
<script type="text/babel">
  // Supondo que Titulo já foi definido

  ReactDOM.createRoot(
    document.getElementById('root')
  ).render(<Titulo />);
</script>
```

🧠 **Entenda o que está acontecendo:**

| Comando                           | Função                                               |
| --------------------------------- | ---------------------------------------------------- |
| `document.getElementById('root')` | Seleciona o local onde o componente será renderizado |
| `ReactDOM.createRoot(...)`        | Cria o ponto de entrada da árvore de componentes     |
| `.render(<Titulo />)`             | Renderiza o componente especificado                  |


🧪 **Teste no Navegador**

Salve o arquivo;

Recarregue a página no navegador;

Agora o texto “Login” do componente Titulo deve aparecer.

📌 **Pronto! O React está interligado ao HTML e seus componentes estão sendo renderizados corretamente.**

## 🚀 Continuação

A partir daqui, você pode:

Renderizar múltiplos componentes (Titulo, Subtitulo, Formulario, etc.);

Criar uma estrutura de componentes mais complexa;

Iniciar a aplicação de lógica com state e eventos.

## 🟦 Slide 16 – Compondo e Renderizando Múltiplos Componentes

Já construímos dois componentes (Titulo e Subtitulo) e renderizamos apenas um deles na tela com ReactDOM.
Agora, vamos aprender a renderizar múltiplos componentes ao mesmo tempo, de forma organizada.

🧱 **Criando o Componente "PaginaDeLogin"**

No index.html, após definir os componentes Titulo e Subtitulo, vamos criar um novo componente que irá agrupá-los:

```
<script type="text/babel">
  function PaginaDeLogin() {
    return (
      <div className='container-login'>
        <img 
          src='./img/imagem-login.png' 
          alt='uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect' 
        />
        <section>
          <form>
            <Titulo />
            <Subtitulo />
          </form>
        </section>
      </div>
    )
  }
</script>
```
🧠 **O que fizemos aqui:**

| Elemento                              | Função                                             |
| ------------------------------------- | -------------------------------------------------- |
| `<div className='container-login'>`   | Agrupa todo o conteúdo central da interface        |
| `<img />`                             | Exibe a imagem do projeto (pessoa com computador)  |
| `<section><form>...</form></section>` | Área do formulário de login                        |
| `<Titulo />` e `<Subtitulo />`        | Componentes reutilizados dentro do novo componente |


>Esse é um exemplo de composição de componentes — um componente utilizando outros.

🎨 **Estilizando o componente**

Verifique o arquivo PaginaDeLogin.css. Nele, a classe principal .container-login já está estilizada.

No componente, usamos:

```
<div className='container-login'>
```
>Lembre-se de sempre utilizar className no React.

🖼️ **Adicionando a imagem**

A imagem usada já está no projeto, no diretório img/imagem-login.png.

```
<img 
  src='./img/imagem-login.png' 
  alt='uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect' 
/>
```

🧪 **Renderizando a Página de Login**

Agora, vamos exibir tudo isso na tela.
Substituímos o componente Titulo pelo novo PaginaDeLogin dentro do método render():

```
ReactDOM.createRoot(document.getElementById('root')).render(<PaginaDeLogin />);
```
✅ **Resultado Esperado**

Ao salvar e atualizar a página no navegador, você verá:

A imagem à esquerda;

O título "Login";

O subtítulo abaixo;

A estrutura básica da página pronta para receber os campos de formulário.

>Com isso, demos um passo importante: aprendemos a montar uma interface composta por múltiplos componentes reutilizáveis.

📦 **O que aprendemos**

Como criar um componente que agrupa outros;

Como reaproveitar componentes já existentes;

Como renderizar múltiplos elementos com ReactDOM;

Como estruturar melhor uma interface com React.


# 🟦 Slide 17 – Criando Campos de Entrada (Inputs)

Na aula anterior, aprendemos a exibir múltiplos componentes em uma única tela.
Agora, vamos criar os campos de entrada (inputs) que permitirão ao usuário digitar seu e-mail e senha.

🧩 **Etapas desta aula:**

Criar o campo de e-mail ou usuário

Criar o campo de senha

Entender a estrutura HTML e as validações automáticas

🏗️ **Adicionando o campo de e-mail**

Dentro do componente PaginaDeLogin, após o <Subtitulo />, criamos uma div para agrupar o label e o input:

```
<div className='form__campo-digitacao'>
  <label for='email'>E-mail ou usuário</label>
  <input 
    type='email'
    placeholder='Digite o seu e-mail ou usuário'
    required
    id='email' 
  />
</div>
```
>📌 A classe form__campo-digitacao já está estilizada no arquivo CampoDeDigitacao.css

🔎 **O que estamos fazendo:**
| Elemento             | Função                                                 |
| -------------------- | ------------------------------------------------------ |
| `label for='email'`  | Cria um rótulo para o campo, associado via `id`        |
| `input type='email'` | Campo de digitação com validação automática de formato |
| `placeholder`        | Texto auxiliar que aparece dentro do input             |
| `required`           | Torna o campo obrigatório                              |
| `id='email'`         | Liga o `label` ao `input`                              |

🔐 **Adicionando o campo de senha**

Logo após a div do e-mail, criamos outra div com a mesma estrutura, mas com ajustes para senha:

```
<div className='form__campo-digitacao'>
  <label for='senha'>Senha</label>
  <input 
    type='password'
    placeholder='Digite sua senha'
    required
    id='senha' 
  />
</div>
```
>📌 O tipo password faz com que os caracteres digitados sejam ocultados (aparecem como asteriscos).


🧠 **O que aprendemos aqui:**

Reutilização de estrutura: ambas as divs seguem o mesmo padrão.

HTML semântico: usando label para acessibilidade e organização.

Validações nativas: com type='email' e required, o navegador já ajuda no controle de dados.

✅ **Resultado final do componente**

```
function PaginaDeLogin() {
  return (
    <div className='container-login'>
      <img 
        src='./img/imagem-login.png' 
        alt='uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect' 
      />
      <section>
        <form>
          <Titulo />
          <Subtitulo />

          <div className='form__campo-digitacao'>
            <label for='email'>E-mail ou usuário</label>
            <input 
              type='email'
              placeholder='Digite o seu e-mail ou usuário'
              required
              id='email' 
            />
          </div>

          <div className='form__campo-digitacao'>
            <label for='senha'>Senha</label>
            <input 
              type='password'
              placeholder='Digite sua senha'
              required
              id='senha' 
            />
          </div>
        </form>
      </section>
    </div>
  )
}
```
💬 **Spoiler da próxima aula...**
>Repare que temos duas estruturas idênticas com pequenas diferenças (label, tipo, placeholder, id).
Será que o React tem alguma solução para evitar essa repetição?

> 🤔 Prepare-se para aprender sobre componentes reutilizáveis com props!




📎 **Links Úteis**  
👨‍🏫 Instrutor: Claudeny Avelino  
📁 Repositórios: [github.com/ClaudenyAvelino?tab=repositories](https://github.com/ClaudenyAvelino?tab=repositories)  
📘 React: [https://react.dev](https://react.dev)  
📚 W3Schools React Intro: [https://www.w3schools.com/react/react_intro.asp](https://www.w3schools.com/react/react_intro.asp)
