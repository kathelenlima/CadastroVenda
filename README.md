# Cadastro de Vendas

Este é um projeto simples de cadastro de vendas desenvolvido em **Spring Boot** com **Java** para o backend, **PostgreSQL** como banco de dados e uma interface **HTML/CSS/JavaScript** para o frontend. A aplicação permite cadastrar vendas com informações como data da venda, valor, nome do aluno, vendedor e curso.

## Sumário
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação e Execução](#instalação-e-execução)
- [Testando a Aplicação](#testando-a-aplicação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades
- Cadastrar uma nova venda com os seguintes campos: Data da Venda, Valor, Nome do Aluno, Nome do Vendedor e Nome do Curso.
- Listar e exibir as vendas cadastradas.
- API para realizar operações de CRUD para o cadastro de vendas.

## Pré-requisitos
Antes de iniciar, certifique-se de que você possui os seguintes itens instalados:
- **Java 22** (ou versão especificada)
- **Apache Maven** (versão 3.9.6)
- **PostgreSQL** (com um banco de dados configurado)
- **Python 3** (opcional, para rodar um servidor HTTP simples para o frontend)
- **Git** (para clonar o repositório)

## Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

2.Configuração do Banco de Dados:

Crie um banco de dados PostgreSQL para a aplicação.
Atualize as credenciais de conexão ao banco de dados em src/main/resources/application.properties:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/seu_banco
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
```

3.Instale as dependências com Maven:
mvn clean install

## Instalação e Execução

1.Inicie o Backend (Spring Boot):

Na raiz do projeto, execute:
```bash
mvn spring-boot:run
```
O servidor estará em execução em http://localhost:8080.

2.Inicie o Frontend:
- Navegue até a pasta src/main/resources/static:
  ```
  cd src/main/resources/static

- Inicie o servidor HTTP local para servir o arquivo index.html:
```
  python -m http.server 3000
```
- Acesse a interface em http://localhost:3000/index.html.


##Testando a Aplicação
1.Testar a API:
- Utilize uma ferramenta como Postman ou cURL para fazer requisições à API.
- Exemplo de requisição para cadastrar uma venda:
```
POST http://localhost:8080/matriculas/adicionar
```
Corpo da requisição (JSON):

```
{
  "dataVenda": "2024-11-05",
  "valor": 150.50,
  "nomeAluno": "João Silva",
  "nomeVendedor": "Ana Pereira",
  "nomeCurso": "Java Básico"
}
```
2. Testar o Frontend:
- Acesse http://localhost:3000/index.html e preencha o formulário com os dados da venda.
- Clique em "Cadastrar Venda" para enviar os dados ao backend.

## Tecnologias Utilizadas
- Java: linguagem principal para o backend
- Spring Boot: framework para o desenvolvimento do backend
- PostgreSQL: banco de dados para armazenar os dados de vendas
- HTML/CSS/JavaScript: frontend para a interface de usuário
- Python: para iniciar um servidor HTTP local para o frontend

Estrutura do Projeto:
```
demo
│
├── src
│   ├── main
│   │   ├── java/com/example/demo
│   │   │   ├── controller    # Controladores para gerenciar as requisições
│   │   │   ├── model         # Modelos das entidades do banco de dados
│   │   │   └── repository    # Repositórios para acesso aos dados
│   │   │   └── service       # Lógica de negócios da aplicação
│   │   ├── resources
│   │   │   ├── static        # Arquivos estáticos (HTML, CSS, JS)
│   │   │   └── application.properties
│   └── test                  # Testes unitários e de integração
│
└── README.md
```

## Licença
Este projeto é distribuído sob a licença MIT. Veja o arquivo LICENSE para mais informações.
