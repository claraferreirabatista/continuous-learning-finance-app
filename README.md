# [Finance App] (https://finance-app-ruby.vercel.app/)

<h1 align="center">
  <img alt="finance-app" title="finance-app" src="./src/assets/logoLight.png" width="220px" />
</h1>

[Link do deploy](https://finance-app-ruby.vercel.app/)
**Finance App** é uma página de controle financeiro que permite aos usuários visualizar seus gastos e ganhos pessoais, classificá-los por categoria, data e valor, bem como adicionar novos registros e acompanhar seu saldo atual e total de ganhos em um determinado mês.


## Funcionalidades

- Visualizar controle de gastos pessoais, incluindo ganhos e despesas
- Classificar os registros por categoria, data e valor
- Inserir novos registros de gastos e ganhos
- Verificar saldo atual

## Instalação e uso

```bash
# Abra um terminal e copie este repositório com o comando
git clone https://github.com/claraferreirabatista/continuous-learning-finance-app.git
# ou use a opção de download.

# Instale as dependências
yarn install ou npm install

# Atualize o "continuous-learning-finance-app/src/services/api" para http://localhost:3000

# Rode a aplicação
yarn start ou npm start

# Acesse a aplicação em seu navegador:
 `http://localhost:3000`

```

<br>

## 🚀 Tecnologias, Hooks e Bibliotecas

Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/) (biblioteca que permite escrever códigos CSS dentro do Javascript)
- [MirageJS](https://miragejs.com/) ( biblioteca de simulação de API que permite construir, testar e compartilhar um aplicativo JavaScript funcional completo antes de ser desenvolvido o back-end)
- [Axios](https://github.com/axios/axios) (biblioteca usada no lugar de fetch(), que passa a não precisarmos repetir a digitação do endereço do servidor em cada requisição, informando apenas a rota e seus parâmetros, e também passamos a poder interceptar requisições e respostas pra nossa API antes de chegar no back-end para realizar alguma regra, por exemplo enviar algum token de autenticação)
- [React Modal](https://reactcommunity.org/react-modal/) (biblioteca que renderiza o conteúdo de seu filho sobre um componente backdrop e fornece muitos recursos relacionados a interação destes dois)
- [Polished](https://polished.js.org/) (biblioteca que possui funções otimizadas de estilos para usar no JavaScript, como darken e transparentize)

- [React](https://reactjs.org/)

Os hooks utilizados:

- useState (armazena dados que podem variar com o tempo, qualquer informação ou dado deve ser armazenado no useState, só assim será possível renderizar a informação para o frontend web ou mobile)
- useEfect (controla a execução de uma função a partir da alteração de um determinado parâmetro)
- Context API (compartilhamento de estado entre vários componentes da aplicação, utiliza o hook useContext())
<br>

## Contribuição

Contribuições são bem-vindas! Se você quiser colaborar com o projeto, siga as etapas abaixo:

1. Fork o repositório
2. Crie uma branch para a sua feature: `git checkout -b minha-feature`
3. Faça as alterações necessárias e faça commit das mesmas: `git commit -m 'Implementação da minha feature'`
4. Push para a branch: `git push origin minha-feature`
5. Envie um Pull Request

Certifique-se de seguir as boas práticas de desenvolvimento e fornecer uma descrição clara do seu Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).


[![Linkedin Badge](https://img.shields.io/badge/-Clara%20Ferreira-ff512f?style=flat-square&logo=Linkedin&logoColor=white&color=blue&link=https://www.linkedin.com/in/clara-ferreira-batista/)](https://www.linkedin.com/in/clara-ferreira-batista/) 
[![Gmail Badge](https://img.shields.io/badge/-Email-ff512f?style=flat-square&logo=Gmail&logoColor=red&color=white&link=mailto:clarabatista@alunos.utfpr.edu.br)](mailto:clarabatista@alunos.utfpr.edu.br)



