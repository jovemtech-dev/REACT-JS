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



![Prévia da página de login do projeto Code Connect](login-preview.png)

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

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
```

🧩 React DOM conecta o React ao DOM (estrutura HTML da página).

---

## 🟦 Slide 7 – Instalando o Babel

### Instalando o Babel
Por fim, precisamos instalar o **Babel**. Abrindo a página [http://cdnjs.com/libraries/babel-standalone](http://cdnjs.com/libraries/babel-standalone), também vamos copiar a *Script Tag* do primeiro link.



Adicione também o Babel:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.3/babel.min.js"></script>
```

💡 **Função:** traduz o código JavaScript moderno (JSX) para uma versão compreensível pelos navegadores.  
No React, ele converte componentes escritos com HTML + JS em código executável.

---

## 🟦 Slide 8 – Estrutura Final do index.html

```html
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

```html
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

```css
.form__titulo {
  font-size: 31px;
  font-weight: 600;
}
```

Atualize o componente para usar a classe CSS:

```jsx
<h1 className='form__titulo'>Login</h1>
```

⚠️ No React usamos **className** ao invés de **class**, pois “class” é uma palavra reservada no JavaScript.

---

## 🟦 Slide 12 – JSX e Babel em Ação

O Babel converte o JSX para JavaScript puro, permitindo que o navegador compreenda o código:

```jsx
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

📢 Está com dúvidas? Use o fórum ou entre no Discord do curso para trocar ideias com outros alunos.

---

## 🟦 Slide 14 – Conclusão

✅ **O que aprendemos nesta aula:**  
- A estrutura de um componente React;  
- Como usar JSX;  
- Diferença entre class e className;  
- O papel do Babel na tradução do código.

🚀 **Próximo passo:**  
Renderizar o componente na tela e seguir com a construção da página de login do projeto **Code Connect**!

📎 **Links Úteis**  
👨‍🏫 Instrutor: Claudeny Avelino  
📁 Repositórios: [github.com/ClaudenyAvelino?tab=repositories](https://github.com/ClaudenyAvelino?tab=repositories)  
📘 React: [https://react.dev](https://react.dev)  
📚 W3Schools React Intro: [https://www.w3schools.com/react/react_intro.asp](https://www.w3schools.com/react/react_intro.asp)
