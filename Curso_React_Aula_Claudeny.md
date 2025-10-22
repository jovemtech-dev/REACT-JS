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


## 🟦 Slide 18 – Componentização e Reutilização com React##

Na última aula, criamos manualmente dois campos de digitação: um para e-mail/usuário e outro para senha.
Analisando o código, percebemos que as estruturas são praticamente idênticas.

📌 Para evitar código duplicado, aprendemos agora a criar componentes reutilizáveis com React.

🧩 **Criando o componente** <CampoDeDigitacao />

Acima da função PaginaDeLogin(), criamos uma nova função chamada CampoDeDigitacao():

```
function CampoDeDigitacao() {
  return (
    <div className='form__campo-digitacao'>
      <label for='email'>E-mail ou usuário</label>
      <input 
        type='email'
        placeholder='Digite o seu e-mail ou usuário'
        required
        id='email' 
      />
    </div>
  )
}
```

✅ **Este componente encapsula todo o bloco referente ao input de e-mail, mantendo o mesmo comportamento visual e funcional.**


⚙️ **Aplicando o novo componente**

No componente PaginaDeLogin, substituímos o trecho antigo de e-mail pelo uso do novo componente:

```
function PaginaDeLogin() {
  return (
    <div className='container-login'>
      <img src='./img/imagem-login.png' alt='uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect' />
      <section>
        <form>
          <Titulo />
          <Subtitulo />

          <CampoDeDigitacao />

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
>🧠 O campo de e-mail foi componentizado, mas o de senha ainda está fixo. Veremos mais adiante como reutilizar também com parâmetros.

## 🟦 Slide 19 – Criando o componente <Botao />

Com base na mesma lógica, criamos um componente para o botão de envio do formulário.

1️⃣ **Criando o componente:**

```
function Botao() {
  return (
    <button type='submit'>Login</button>
  )
}
```
2️⃣ **Utilizando o componente:**

No lugar do botão dentro do form, utilizamos:

```
<Botao />
```

💻 **Resultado final:**

```
function PaginaDeLogin() {
  return (
    <div className='container-login'>
      <img src='./img/imagem-login.png' alt='uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect' />
      <section>
        <form>
          <Titulo />
          <Subtitulo />

          <CampoDeDigitacao />

          <div className='form__campo-digitacao'>
            <label for='senha'>Senha</label>
            <input 
              type='password'
              placeholder='Digite sua senha'
              required
              id='senha' 
            />
          </div>

          <Botao />
        </form>
      </section>
    </div>
  )
}
```

🎯 **Conclusão**

Agora temos dois novos componentes:
| Componente             | Função                                       |
| ---------------------- | -------------------------------------------- |
| `<CampoDeDigitacao />` | Encapsula o bloco de input e label de e-mail |
| `<Botao />`            | Encapsula o botão "Login"                    |

🧠 **Reflexão**

Criar componentes ajuda na organização e manutenção do código.

Podemos decidir componentizar no início do projeto ou durante o desenvolvimento, ao perceber repetições.

A próxima aula mostrará como tornar componentes reutilizáveis com parâmetros (props).

## ✅ Recapitulando rapidamente o que fizemos na Aula 20:##

Estilizamos corretamente o botão Login adicionando a classe form__botao.

Transformamos o componente CampoDeDigitacao em um componente reutilizável, com props como label, tipo, placeholder.

Substituímos o campo de senha fixo por uma instância do componente reutilizável.

Agora, vamos fechar a aula com melhorias adicionais:

📌 **1. Melhorando a acessibilidade: usando id e htmlFor dinamicamente**

Como os dois campos (E-mail ou usuário e Senha) estão usando o mesmo id='email' e o mesmo for='email', isso gera problemas de acessibilidade e funcionamento. Vamos corrigir isso.

🔧 Ajuste no CampoDeDigitacao para receber id como prop:
```
function CampoDeDigitacao({ label, tipo, placeholder, id }) {
    return (
        <div className='form__campo-digitacao'>
            <label htmlFor={id}>{label}</label>
            <input 
                type={tipo}
                placeholder={placeholder}
                required
                id={id}
            />
        </div>
    )
}
```

Lembre-se: em React usamos htmlFor no lugar de for.

📌**2. Atualizando a chamada dos componentes com id diferentes**
Código atualizado da PaginaDeLogin:
```
function PaginaDeLogin() {
    return (
        <div className='container-login'>
            <img src='./img/imagem-login.png' alt='uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect' />
            <section>
                <form>
                    <Titulo />
                    <Subtitulo />
                    <CampoDeDigitacao 
                        label='E-mail ou usuário'
                        tipo='email'
                        placeholder='Digite o seu e-mail'
                        id='email'
                    />
                    <CampoDeDigitacao 
                        label='Senha'
                        tipo='password'
                        placeholder='Digite a sua senha'
                        id='senha'
                    />
                    <Botao />
                </form>
            </section>
        </div>
    )
}
```

✅ **O que resolvemos com isso:**

Cada campo agora tem um id único, o que evita problemas de HTML inválido.

O label agora está corretamente associado ao input correspondente.

O componente CampoDeDigitacao está completamente flexível e reutilizável, pronto para ser usado em qualquer lugar.

🎯 **Conclusão da Aula 20**

Nesta aula, você:

✅ Estilizou corretamente o botão com a classe form__botao
✅ Aprendeu a reutilizar componentes com props
✅ Substituiu campos fixos por componentes dinâmicos
✅ Melhorou a acessibilidade com id e htmlFor
✅ Criou um componente CampoDeDigitacao modular e flexível


## Aula 21 - Corrigindo Estilização do Botão e Tornando Componentes Reutilizáveis

Nesta aula, vamos resolver dois pontos importantes:

Corrigir a estilização do botão de login, que está sem formatação;

Tornar o componente CampoDeDigitacao realmente reutilizável e dinâmico com o uso de props.

✔️ **Corrigindo o Botão de Login**

Vamos ao navegador visualizar o botão. Ele aparece como um pequeno quadrado cinza com o texto "Login" — sem nenhuma estilização. Isso ocorre porque esquecemos de adicionar a classe CSS ao botão.

No Figma, o botão aparece grande, verde e com fonte diferente. Vamos corrigir isso.

Passo 1: Encontrar a classe correta

No arquivo PaginaDeLogin.css, use o atalho Ctrl+F e busque por botao. Você encontrará a seguinte classe:
```
.form__botao {
  /* Estilos do botão */
}
```

Passo 2: Adicionar a classe ao componente Botao

Atualize o código do componente:
```
function Botao() {
  return (
    <button type='submit' className='form__botao'>Login</button>
  )
}
```


Salve e recarregue no navegador. Agora o botão está corretamente estilizado, igual ao Figma, com a seta à direita da palavra “Login”.

🔁 **Tornando o Campo de Digitação Reutilizável**

Falamos que componentes React são reutilizáveis. Vamos aplicar esse conceito no componente CampoDeDigitacao.

Situação atual:

Nosso componente está com texto e atributos fixos:
```
function CampoDeDigitacao() {
  return (
    <div className='form__campo-digitacao'>
      <label for='email'>E-mail ou usuário</label>
      <input type='email' placeholder='Digite o seu e-mail ou usuário' required id='email' />
    </div>
  )
}
```
Objetivo:

Queremos poder usar esse componente várias vezes, alterando o texto do label, o tipo de input e o placeholder de forma dinâmica.

Passo 1: Passar valores dinâmicos via props

Atualize a chamada do componente na PaginaDeLogin:
```
<CampoDeDigitacao
  label='E-mail ou usuário'
  tipo='email'
  placeholder='Digite o seu e-mail ou usuário' />
```
Passo 2: Atualizar o componente para receber props
```
function CampoDeDigitacao({ label, tipo, placeholder }) {
  return (
    <div className='form__campo-digitacao'>
      <label for='email'>{label}</label>
      <input type={tipo} placeholder={placeholder} required id='email' />
    </div>
  )
}
```

Mesmo salvando, a mudança visual será imperceptível, pois os valores fixos e os passados por props eram os mesmos.

Testando a reutilização:

Vamos remover o campo de senha antigo (um input direto) e substituí-lo pelo CampoDeDigitacao reutilizável:
```
<CampoDeDigitacao
  label='Senha'
  tipo='password'
  placeholder='Digite a sua senha' />
```
Resultado final da PaginaDeLogin:
```
function PaginaDeLogin() {
  return (
    <div className='container-login'>
      <img src='./img/imagem-login.png' alt='uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect' />
      <section>
        <form>
          <Titulo />
          <Subtitulo />
          <CampoDeDigitacao
            label='E-mail ou usuário'
            tipo='email'
            placeholder='Digite o seu e-mail ou usuário' />
          <CampoDeDigitacao
            label='Senha'
            tipo='password'
            placeholder='Digite a sua senha' />
          <Botao />
        </form>
      </section>
    </div>
  )
}
```

✅ **Conclusão**

Corrigimos o botão de login aplicando a 
```
classe .form__botao;
```
Tornamos o componente CampoDeDigitacao reutilizável, passando valores dinâmicos como label, tipo e placeholder;

Agora, nosso código está mais limpo, organizado e alinhado com os princípios do React.


## Aula 22 – Imprimindo textos dinâmicos com `children`

Ótimo! Até aqui, já aprendemos como enviar dados dinâmicos por meio de **props** (propriedades). Mas e se quiséssemos imprimir um **texto dinâmico diretamente dentro de um componente**? É aí que entra um recurso especial do React chamado `children`.

### Utilizando textos dinâmicos em componentes

No nosso projeto, há vários locais onde isso pode ser útil: o **título**, o **subtítulo** e até o **botão**. Para começar, vamos transformar esses componentes para que aceitem conteúdo dinâmico entre suas tags, como fazemos com elementos HTML padrão.

#### Transformando o componente `<Titulo />`

Antes:

```jsx
<Titulo />
```
Agora, vamos reescrever essa linha, inserindo o texto diretamente entre as tags:

jsx
Copiar código
```
<Titulo>Login</Titulo>
```
Isso faz com que nosso componente de título funcione como uma tag HTML normal, como o 
```
<h1>Login</h1>.
```
Para que isso funcione, precisamos adaptar o componente Titulo para aceitar e renderizar esse conteúdo. No React, usamos a prop especial children:

jsx
Copiar código
```
function Titulo({ children }) {
    return (
        <h1 className='form__titulo'>{children}</h1>
    )
}
```
Salvando o arquivo, veremos no navegador que o texto "Login" ainda aparece, mas agora é controlado por quem chama o componente.

Se mudarmos para:

jsx
Copiar código
```
<Titulo>Olá, estudante!</Titulo>
```
Veremos "Olá, estudante!" na tela. Isso mostra que o conteúdo do componente agora é dinâmico e personalizável.

Vamos devolver o texto original:

jsx
Copiar código
```
<Titulo>Login</Titulo>
```
O que é children?
children é uma palavra reservada no React. Ela representa tudo o que está dentro da tag de abertura e fechamento de um componente.

Diferente das props tradicionais (como label, tipo, etc.), children permite que enviemos elementos ou textos como "filhos" do componente. Por isso, é a forma padrão de se lidar com esse tipo de conteúdo no React.

Praticando com o componente 
```
<Subtitulo />
```
Agora vamos repetir o mesmo processo com o Subtitulo.

Antes:

jsx
Copiar código
```
<Subtitulo />
```
Depois:

jsx
Copiar código
```
<Subtitulo>Boas-vindas! Faça seu login.</Subtitulo>
```
Agora, ajustamos a função que define o componente:

jsx
Copiar código
```
function Subtitulo({ children }) {
    return (
        <h2 className='form__texto'>{children}</h2>
    )
}
```
Pronto! O subtítulo agora também é controlado dinamicamente.

Tornando o botão dinâmico com children
Por fim, vamos aplicar a mesma ideia ao botão.

Antes:

jsx
Copiar código
```
<Botao />
```
Depois:

jsx
Copiar código
```
<Botao>Login</Botao>
```
E no componente:

jsx
Copiar código
```
function Botao({ children }) {
    return (
        <button type='submit' className='form__botao'>{children}</button>
    )
}
```
Com isso, o botão pode exibir qualquer texto desejado sem precisar modificar o componente internamente.

Conclusão
Agora você aprendeu a:

Usar children para tornar componentes mais reutilizáveis.

Inserir textos dinâmicos diretamente entre as tags dos seus componentes.

Refatorar o código para manter a semântica do HTML e a flexibilidade do React.


## Aula 23 – Controlando o valor do input

Ao lidar com formulários e campos de digitação, é essencial termos acesso ao que a pessoa usuária digita, seja para criar validações personalizadas, ou para coletar os dados e enviá-los após o envio do formulário.

Uma forma de acessar esse conteúdo é criando uma **variável que receberá o valor digitado**.

---

### Criando a variável `email`

Na função `PaginaDeLogin()`, vamos criar uma variável `let email` que recebe uma string inicial:

jsx
```
function PaginaDeLogin() {
let email = 'claudeny@teste.com'
```

    
    
Agora, vamos vincular essa variável ao campo de digitação. No componente CampoDeDigitacao, passaremos a propriedade 

```
value={email}:
```
jsx
Copiar código

```
<CampoDeDigitacao 
    label='E-mail ou usuário'
    tipo='email'
    placeholder='Digite o seu e-mail ou usuário'
    value={email}
/>
```
Preparando CampoDeDigitacao() para receber o valor
Precisamos adaptar o componente CampoDeDigitacao() para aceitar essa prop value:

jsx
```
function CampoDeDigitacao({ label, tipo, placeholder, value }) {
    return (
        <div className='form__campo-digitacao'>
            <label for={tipo}>{label}</label>
            <input 
                type={tipo}
                placeholder={placeholder}
                required
                id={tipo}
                value={value}
            />
        </div>
    )
}
```
Agora, o valor mostrado no input será o valor fixo "claudeny@teste.com". Porém, isso ainda não é dinâmico — queremos capturar o que a pessoa usuária digitar, não um texto fixo.

Criando a função substituiValorDoCampo()
Vamos criar uma função que atualize o valor da variável sempre que o conteúdo do input for alterado:

jsx
```
function PaginaDeLogin() {
    let email = 'claudeny@teste.com'
    
    function substituiValorDoCampo(novoValor) {
        email = novoValor;
        console.log(email);
    }
   ```
Agora, passamos essa função como prop chamada setValor para o campo:

jsx
```
<CampoDeDigitacao 
    label='E-mail ou usuário'
    tipo='email'
    placeholder='Digite o seu e-mail ou usuário'
    value={email}
    setValor={substituiValorDoCampo}
/>
```
Ajustando CampoDeDigitacao() para tratar mudanças
Atualizamos o componente para receber a prop setValor e aplicamos um onChange:

jsx
```
function CampoDeDigitacao({ label, tipo, placeholder, value, setValor }) {
    return (
        <div className='form__campo-digitacao'>
            <label for={tipo}>{label}</label>
            <input 
                type={tipo}
                placeholder={placeholder}
                required
                id={tipo}
                value={value}
                onChange={(evento) => setValor(evento.target.value)}
            />
        </div>
    )
}
```
O que esse onChange faz? Ele escuta mudanças no input, e a cada alteração, chama a função setValor() com o novo valor digitado.

No nosso caso, o setValor é a função substituiValorDoCampo, que imprime o novo conteúdo no console com:

jsx
```
console.log(email)
```
Visualizando no navegador
Ao testar no navegador, veremos que:

O valor no input não muda visivelmente.

Mas no console, cada tecla digitada aparece como um novo valor.

Exemplo:

Ao digitar "oi", veremos:

claudeny@teste.como

claudeny@teste.comi

Ou seja, a função está sendo chamada e recebendo o novo valor, mas a interface não está sendo atualizada.

Conclusão
O que está acontecendo?

Apesar de alterarmos a variável email, o React não está re-renderizando o componente. O React só atualiza a tela quando usamos algo chamado estado (state), que será o tema da próxima aula.

Para resolver esse problema, precisaremos usar o hook useState, que permite ao React "lembrar" e reagir às alterações de valores de forma automática na tela.

## Aula 24 – Criando a seção "Lembrar-me", "Esqueci a senha" e redes sociais

Nesta aula, vamos finalizar a parte inferior do formulário de login, incluindo:

- O checkbox "Lembrar-me"
- O link "Esqueci a senha"
- E os componentes de texto e ícones de redes sociais

Tudo isso respeitando boas práticas de **semântica** e **acessibilidade**.

---

### Ajustando o "Lembrar-me" e o "Esqueci a senha"

No arquivo `index.html`, dentro da função `PaginaDeLogin()`, após o campo de senha e **antes do botão**, vamos adicionar um `fieldset`, que servirá como container semântico para essa seção.

Exemplo:

```jsx
<CampoDeDigitacao 
    label='Senha'
    tipo='password'
    placeholder='Digite a sua senha'
    value={senha}
    setValor={setSenha}
/>

<fieldset className='form__opcoes'>
    <Checkbox />
    <p>
        <a href='#' aria-label='Recuperar senha esquecida'>Esqueci a senha</a>
    </p>
</fieldset>

<Botao>Login</Botao>
```
Por que usar fieldset?
O elemento fieldset é indicado quando agrupamos campos de formulários relacionados, tornando a estrutura mais clara tanto para a organização visual quanto para leitores de tela.

Criando o componente Texto
Ainda no index.html, antes da função PaginaDeLogin(), vamos criar um novo componente que será reutilizado para exibir diferentes textos no projeto:

jsx
```
function Texto({ classe, children }) {
    return (
        <p className={classe}>{children}</p>
    )
}
```
Esse componente é flexível porque aceita:

Uma classe CSS via a prop classe

O conteúdo via a prop children

Criando o componente ItemRedesSociais
Agora vamos criar um componente para os ícones clicáveis das redes sociais.

Também antes de PaginaDeLogin(), adicione:

jsx
```
function ItemRedesSociais({ link, nome }) {
    return (
        <li>
            <a href={link}>
                <img src={`./img/${nome}.svg`} alt={`ícone do ${nome}`} />
                {nome}
            </a>
        </li>
    )
}
```
Como funciona?
link: define o destino da âncora 
```
<a>
```

nome: define a imagem que será exibida (github.svg, gmail.svg, etc.) e também o texto visível

Usamos template strings para montar dinamicamente o caminho da imagem e o atributo alt, como:
```
src="./img/github.svg"

alt="ícone do github"
```
Acessibilidade com aria-label
No link "Esqueci a senha", usamos o atributo aria-label para descrever melhor o objetivo do link aos leitores de tela:

jsx
```
<a href='#' aria-label='Recuperar senha esquecida'>Esqueci a senha</a>
```

Visualizando no navegador
Após salvarmos e atualizarmos o navegador, devemos ver:

O checkbox "Lembrar-me" alinhado à esquerda

O link "Esqueci a senha" à direita

Ambos dentro de um fieldset, respeitando a semântica HTML

E, com os novos componentes Texto e ItemRedesSociais, já estamos prontos para montar a seção de login com redes sociais no próximo passo!

Conclusão
Nessa aula, aprendemos:

A importância de usar fieldset para agrupar campos relacionados

Como aplicar acessibilidade com aria-label

A criação de componentes reutilizáveis com Texto e ItemRedesSociais

Uso de props dinâmicas e template strings para tornar os componentes mais flexíveis


# Aula 25 – Criando componentes de Link e finalizando a seção de redes sociais

Nesta aula, vamos:

- Criar um novo componente reutilizável de **link**
- Utilizar os componentes `Texto`, `ItemRedesSociais` e `Link`
- Inserir os ícones do GitHub e Google para login social
- Corrigir pequenos detalhes de texto

---

## Criando o componente `Link`

Após a função `ItemRedesSociais`, vamos adicionar uma nova função `Link`, que será responsável por renderizar uma âncora estilizada com a classe verde.

### Código:

```jsx
function Link({ children }) {
    return (
        <a href='#' className='container-links__link'>
            {children}
        </a>
    )
}
```
Detalhes:
A classe container-links__link pode ser encontrada no CSS em:

css
```
/* Estilos do link */
.container-links__link { ... }
```
Essa classe deixa o texto com a cor verde e remove o estilo padrão da tag ``` <a> ```.

Inserindo os componentes na interface
Vamos agora aplicar os componentes criados à interface, posicionando-os logo após o ``` <form> ``` de login.

Estrutura:
jsx
```
</form>
<div className='container-links'>
    <Texto classe='container-links__titulo'>ou entre com outras contas</Texto>
    <ul>
        <ItemRedesSociais link='https://www.github.com' nome='Github' />
        <ItemRedesSociais link='https://www.google.com' nome='Google' />
    </ul>
    <Texto classe='container-links__texto'>Ainda não tem conta?</Texto>
    <Link>Crie seu cadastro!</Link>
</div>
```
Explicação:
``` <Texto> ``` recebe a classe CSS e o conteúdo dinâmico com children

``` <ul> ``` serve para listar as redes sociais (GitHub e Google)

``` <ItemRedesSociais> ``` renderiza dinamicamente os ícones com seus nomes e links

``` <Link> ``` renderiza o texto verde clicável com estilo customizado

Corrigindo texto do subtítulo
Vamos também corrigir um pequeno erro de digitação: o texto "Boas-vindas!" está sem hífen.

Correção:
Antes:

jsx
```
<Subtitulo>Boas vindas! Faça o seu login</Subtitulo>
```
Depois:

jsx
```
<Subtitulo>Boas-vindas! Faça o seu login</Subtitulo>
```
Desafio (Opcional)
Repare que o link "Crie seu cadastro!" ainda está com sublinhado no navegador, mas no Figma ele aparece sem sublinhado.

Desafio:
Acesse o CSS

Encontre a ``` classe .container-links__link ```

Adicione a seguinte linha para remover o sublinhado:

css
Copiar código
```
text-decoration: none;
```
Conclusão
Nesta aula, aprendemos:

A criar um componente de link reutilizável com estilo verde

A estruturar a área de login com redes sociais usando componentes reutilizáveis

A aplicar a metodologia BEM para entender e utilizar corretamente as classes CSS

A refinar o texto da interface, garantindo consistência com o Figma

***A interface de login agora está praticamente pronta! 🚀***


📎 **Links Úteis**  
👨‍🏫 Instrutor: Claudeny Avelino  
📁 Repositórios: [github.com/ClaudenyAvelino?tab=repositories](https://github.com/ClaudenyAvelino?tab=repositories)  
📘 React: [https://react.dev](https://react.dev)  
📚 W3Schools React Intro: [https://www.w3schools.com/react/react_intro.asp](https://www.w3schools.com/react/react_intro.asp)
