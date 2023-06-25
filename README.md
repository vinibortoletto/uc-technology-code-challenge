<div align="center">
  <h1>UC Technology Code Challenge</h1>
  Uma aplicação front-end onde você pode cadastar, visualizar, editar e remover funcionários. 
</div>

<hr />

<p align="center">
  <img alt="website mockup" src="./src/assets/readme/mockup.png" />    
</p>

<p align="center">
  <a href="#writing_hand-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#video_camera-demo">Demo</a>
</p>

## :writing_hand: Sobre

Nesta aplicação, desenvolvida como um desafio para a empresa UC Technology, os usuários têm a possibilidade de cadastrar funcionários, fornecendo informações como nome completo, cargo e data de contratação. Além disso, a aplicação permite visualizar, editar ou remover os funcionários já cadastrados, utilizando uma API externa fornecida pela empresa.

A aplicação foi cuidadosamente projetada para ser responsiva, adaptando-se tanto a dispositivos desktop quanto a dispositivos móveis, garantindo uma experiência consistente em diferentes plataformas.

## :rocket: Tecnologias

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- Vue.js
- Vue Router
- Axios
- ESLint
- Prettier
- TailwindCSS
- Iconify
- VS Code

## :information_source: Como usar

Para testar a aplicação, precisará das seguintes ferramentas:

- Git
- Node.js



Clone o repositório:

```bash
git clone https://github.com/vinibortoletto/uc-technology-code-challenge.git
```

Entre no diretório do projeto:

```bash
cd uc-technology-code-challenge
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

Em um navegador, acesse o endereço:

```bash
http://127.0.0.1:5173/
```

## :video_camera: Demo

<div>

### Cadastrando funcionário:
Durante o processo de cadastro, o usuário tem a opção de preencher os campos de nome, sobrenome, cargo e data. Esses campos passam por uma validação em tempo real enquanto você digita. 
Após preencher todos os campos, os dados são enviados e, se forem considerados válidos, o novo funcionário é adicionado ao banco de dados e exibido abaixo do formulário, na lista de funcionários.

<img  src='./src/assets/readme/creating.gif' alt='' />
<br/>
<br/>

### Deletando funcionário:
Na seção de cards que lista os funcionários, existe a opção de excluir um funcionário. Ao clicar nessa opção, um modal é exibido ao usuário, solicitando uma confirmação para remover o funcionário selecionado. Se o usuário confirmar, o funcionário é removido do banco de dados e essa ação é refletida imediatamente na lista de funcionários.

<img src='./src/assets/readme/deleting.gif' alt='' />
<br/>
<br/>

### Editando funcionário:
Ao clicar no card de um funcionário, o usuário é direcionado para a página de edição de funcionários, onde é possível realizar modificações em todas as informações do funcionário, incluindo nome, sobrenome, cargo e data. Além disso, é possível visualizar as informações atualizadas do funcionário em um card específico. Após salvar as alterações, o usuário é redirecionado de volta para a página principal da aplicação, onde as edições são refletidas imediatamente na lista de funcionários.

<img src='./src/assets/readme/editing.gif' alt='' />
<br/>
<br/>

</div>
