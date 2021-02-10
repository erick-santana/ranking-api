###### REGRAS DE NEGÓCIO

- [] A API não deve aceitar cadastros de resultados se a competição já estiver encerrada.
- [X] A API pode retornar o ranking/resultado parcial.
- [] No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta.
- [] Necessária criação de um Readme para informar o passo a passo de como rodar a API.
- [] Testes são obrigatórios

###### REQUISITOS FUNCIONAIS

- [] Para não aceitar mais cadastros a competição terá uma data limite, listar apenas até essa data
- [] Cada resultado terá um horário que foi cadastrado e a quantidade de vezes que foi editado no caso do lançamento de dardos

###### PASSO A PASSO TESTES

- [] Criar uma instancia da classe que está testando (exemplo: sut = new SignUpController())
- [] Para requisições do tipo POST, criar um objeto httpRequest = { body: { ... }}
- [] Chamar um método do controlador que está sendo testado 