# API Rest GymPass

API Rest GymPass, é uma aplicação desenvolvida com base nos princípios SOLID, visando a criação de uma API RESTful para gerenciamento de academias e usuários.

A aplicação permite funcionalidades como cadastro e autenticação de usuários, acesso ao perfil, registro e validação de check-ins, busca por academias próximas ou pelo nome, e cadastro de novas academias.

O projeto utiliza o Prisma como ORM para interação com o banco de dados PostgreSQL, garantindo a persistência dos dados. Além disso, implementa ferramentas como ESLint para análise estática do código, tsup para empacotamento e compilação de projetos TypeScript, bcryptjs para criptografia de senhas e dotenv para gestão de variáveis de ambiente.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuário logado
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [x] Deve ser possível o usuário obter seu histórico de check-ins
- [x] Deve ser possível o usuário buscar academias próximas (até 10km)
- [x] Deve ser possível o usuário buscar academias pelo nome
- [x] Deve ser possível o usuário realizar check-in em uma academia
- [x] Deve ser possível validar o check-in de um usuário
- [x] Deve ser possível cadastrar uma academia

## RNs (Regras de negócios)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [x] O usuário não pode fazer 2 check-ins no mesmo dia
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [] O check-in só pode ser validado até 20 minutos após criado
- [] O check-in só pode ser validado por admin
- [] A academia só pode ser cadastrada por admin

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página
- [] O usuário deve ser identificado por um JWT (JSON Web Token)
