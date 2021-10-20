# projeto-tempo-telecom

!!! TODOS OS TESTES DO SISTEMA FORAM FEITOS EM AMBIENTE LINUX !!!

Este projeto foi produzio em Angular 12, Spring Boot 2.5.5 e PostgreSQL, Os requisitos não foram totalmente atendidos devido a falta de tempo para empenho em problemas mais complexos, o Sistema permite que seja feito um pedido de quatro produtos por cliente e permite o cadastro de produtos e clientes, os formularios apresentam areas de input simples para telefone e data de nascimento devido ao pouco tempo para adequação desses requisitos. O codigo trabalha com conceito de abstração back e front end mas algumas partes não foram componentizadas pois não seriam utilizadas novamente.

O banco de dados deve ser o PostgreSQL com usuario: postgres e senha: root, A instalação do mesmo pode ser realizada utilizando o site official do software:
https://www.postgresql.org
https://www.pgadmin.org

Para rodar o back-end é necessário o JDK 11 que pode ser instalado com base no site oficial da oracle:
https://www.oracle.com/java/technologies/downloads/archive/
para executar em ambiente linux ou mac use dentro da pasta "back" o comando "./mvnw spring-boot:run"
caso esteja em ambiente windows apenas substitua o comando por esse "mvnw spring-boot:run"

Para rodar o front-end é necessário o angular e o node que podem ser instalados baseados na wiki do site oficial:
https://nodejs.org/en/
https://angular.io/guide/setup-local
para inicia-lo basta dentro da pasta "front" executar o comando "ng s"
