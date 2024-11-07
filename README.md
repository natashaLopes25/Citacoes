Este é um projeto simples usando Javascript, HTML e CSS.


//TO DO:
Descrição da Implementação:

Desenvolver um backend para um serviço de fornecimento de citações, estruturado como uma API RESTful. 
Este backend deverá responder a requisições assíncronas enviadas pelo frontend, retornando citações de forma aleatória.
As citações serão armazenadas em um banco de dados, permitindo que possam ser adicionadas, alteradas ou removidas dinamicamente.

Requisitos e Funcionalidades:

API RESTful: Implementar endpoints que possibilitem operações de CRUD (Create, Read, Update, Delete) para gerenciar as citações. A API deverá incluir um endpoint específico para retornar uma citação aleatória.
Requisições Assíncronas: Integrar chamadas assíncronas ao backend, permitindo que o frontend consuma as citações sem recarregar a página. As respostas da API serão em formato JSON.
Banco de Dados: Utilizar um banco de dados relacional (como PostgreSQL ou MySQL) ou NoSQL (como MongoDB) para armazenar as citações. Cada registro deverá conter, no mínimo, o texto da citação e o autor.
Gerenciamento de Citações: Prover funcionalidades que permitam ao usuário adicionar novas citações, bem como atualizar ou excluir citações existentes diretamente no banco de dados.
Distribuição Aleatória: Implementar lógica para que o backend selecione e forneça uma citação aleatória a cada requisição.
Segurança e Escalabilidade: Garantir práticas de segurança para proteger o acesso aos endpoints, como autenticação e autorização, além de estruturar a aplicação para fácil escalabilidade.

Tecnologias Sugeridas:

Backend: Node.js com Express ou um framework como Django (Python) ou Spring Boot (Java).
Banco de Dados: PostgreSQL, MySQL, ou MongoDB.
Autenticação e Autorização: JWT (JSON Web Tokens) para proteção de endpoints, se necessário.
