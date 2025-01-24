# Desenvolvedor Fullstack (React & Node.js)

Bem-vindo! Este repositório contém uma prova simples para avaliarmos suas habilidades como desenvolvedor fullstack. O tempo total para resolver os desafios não deve ultrapassar 1 hora.

## Parte 1: Frontend com React

### Objetivo
Criar uma aplicação React funcional e responsiva que permita aos usuários:
- Adicionar itens a uma lista.
- Remover itens da lista.
- Marcar itens como concluídos.

### Requisitos
- Utilizar React (com hooks).
- Estilizar utilizando CSS ou bibliotecas como Tailwind ou Styled-Components.
- Não é necessário backend; todos os dados podem ser mantidos no estado local.

### Especificações
- O usuário deve poder digitar o nome de um item em um campo de entrada e adicioná-lo à lista.
- Cada item da lista deve ter um botão para removê-lo e uma opção para marcar/desmarcar como concluído.
- Itens marcados como concluídos devem ser exibidos com um estilo diferente (ex: texto riscado).
- Adicione um título "Minha Lista de Tarefas" no topo da aplicação.

### Critérios de Avaliação
- Funcionalidade: Todos os requisitos foram implementados?
- Organização: Código limpo e bem estruturado.
- Estilo: Design responsivo e visualmente organizado.
- Uso de React: Boa utilização de hooks (como useState e/ou useEffect, se necessário).

## Parte 2: Backend com Node.js

### Objetivo
Criar uma API REST simples que permita gerenciar uma lista de tarefas.

### Requisitos
- Utilizar Node.js com Express.
- Não é necessário um banco de dados; os dados podem ser armazenados temporariamente em um array na memória.

### Endpoints
- GET /tasks - Retorna a lista de tarefas.
- POST /tasks - Adiciona uma nova tarefa. O corpo da requisição deve conter um campo title.
- PUT /tasks/:id - Atualiza o status de uma tarefa para "concluída" ou "não concluída".
- DELETE /tasks/:id - Remove uma tarefa pelo ID.

### Critérios de Avaliação
- Funcionalidade: Todos os endpoints estão funcionando conforme descrito?
- Código Limpo: A organização e a clareza do código serão avaliadas.
- Boas Práticas: Uso adequado de middleware e tratamento de erros.

## Extras (não obrigatórios, mas valorizados)
Para destacar ainda mais sua solução, considere implementar:
- JSDoc: Adicionar documentação de funções e métodos usando JSDoc.
- TypeScript: Utilizar TypeScript para maior segurança de tipos.
- Testes Unitários: Implementar testes unitários com Jest ou outra biblioteca.
- Documentação: Criar uma documentação simples para os endpoints da API (ex: Swagger).
- Docker: Configurar um ambiente Docker para a aplicação.

## Entrega
- Faça um fork deste repositório.
- Implemente sua solução no repositório forkado.
- Envie o link do repositório para o avaliador.