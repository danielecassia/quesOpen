# Descrição e Objetivos

Integrantes: 
- Alexandre Ferreira Arigoni (dev fullstack)
- Arthur Yochio Rodrigues Codama (dev fullstack)
- Daniele Cássia Silva Diniz (dev fullstack)
- Henrique César Alves de Souza (dev fullstack)

Fórum de  discussão entre estudantes do Ensino Médio sobre as matérias cursadas. 
O sistema é composto por postagem e leitura de mensagens no fórum, realização e exclusão de comentários, cadastro e login de usuários. Utilizaremos JavaScript e seus frameworks Node e React para desenvolver o backend e frontend do sistema, além do banco de dados relacional SQL.

Descrição MVP 

A ideia do MVP seria uma landing page em que apresentaria a ideia do fórum para alunos de ensino médio. Na página seria mostrada a possibilidade de interagir com outros alunos, resolver dúvidas, levantar questionamentos, entre outras funcionalidades. O interesse do usuário poderia ser medido com a opção de cadastrar o email para receber uma mensagem quando o aplicativo fosse lançado. 

Backlog do produto 

Sprint 1:  

- Definição do escopo do produto [Alexandre, Arthur, Daniele e Henrique] 
- Escolha das tecnologias utilizadas no desenvolvimento [Alexandre, Arthur, Daniele e Henrique] 
- Criação de repositório Github [Daniele] 
- Documentação da equipe e do escopo do produto [Alexandre] 
- Desenvolvimento da ideia do MVP [Alexandre, Arthur, Daniele e Henrique] 
- Descrição textual do MVP [Arthur] 
- Wireframes/Prototipação das telas do sistema [Alexandre Daniele e Henrique] 
- Criação das histórias do usuário [Henrique] 

  

Sprint 2: 

- Tarefas Técnicas: 

	- Preparar ambiente Node [Alexandre] 
	- Preparar Ambiente React [Daniele] 
	- Discutir e criar esquema de banco de dados [Alexandre, Arthur, Daniele e Henrique] 
	- Implementar banco de dados em SQL [Henrique e Arthur] 


- História: Como usuário quero me cadastrar e fazer login para acessar o sistema. 

	- Implementar a interface web [Arthur] 
	- Criar e testar rota para fazer cadastro [Daniele] 
	- Criar e testar rota para fazer login [Alexandre] 
	- Criar e testar carregamento de informações do usuário logado [Henrique] 


- História: Como usuário quero visualizar as disciplinas disponíveis que possuem discussões 

	- Implementar a interface web da página inicial [Alexandre] 
	- Criar e testar rotas para buscar as disciplinas com discussões [Henrique e Daniele] 
	- Criar e testar os links de direcionamento para discussões de cada disciplina [Arthur] 


- História: Como usuário quero visualizar as discussões de cada disciplina e iniciar uma discussão ou excluir uma que eu tenha iniciado.  

	- Implementar a interface web [Henrique] 
	- Criar e testar rotas para buscar as discussões da disciplina escolhida [Daniele] 
	- Criar e testar rotas para acessar uma discussão e seus comentários [Arthur] 
	- Criar e testar rotas para criar uma nova discussão [Alexandre] 
	- Criar e testar rotas para excluir uma discussão que o usuário iniciou [Henrique] 
  

- História: Como usuário quero ver os comentários de uma discussão, criar um comentário e excluir um que eu tenha feito. 

	- Implementar a interface web [Daniele] 
	- Criar e testar rotas para buscar os comentários de uma discussão [Arthur] 
	- Criar e testar rotas para criar um comentário em uma discussão [Alexandre] 
	- Criar e testar rotas para excluir um comentário que o usuário tenha feito [Henrique] 
  

Sprint 3:  

- Implementação de testes de software [Alexandre, Arthur, Daniele e Henrique] 

Documentação da Arquitetura

Arquitetura Hexagonal

1) Por que estamos adotando:
Para separar e mediar a comunicação entre o domínio e o resto do sistema, tornando
o domínio limpo de tecnologia, utilizando portas e adaptadores para essa tarefa.

2) Portas e adaptadores:
No sistema existem adaptadores e portas de entrada e saída para cada entidade
(Disciplina, Discussão, Usuário etc). Tendo a função de fazer a ponte para se buscar e
repassar as informações do banco de dados pro frontend.

DDD

1) Foram criadas entidades com nomenclaturas definidas pela linguagem ubíqua na
camada de domínio do programa, separando-a da tecnologia.

2) Temos como exemplo de entidade: Discussão, Disciplina, Usuário e Comentário.
As classes “service” funcionam como repositórios, utilizadas para recuperar as
entidades presentes no banco de dados. Exemplo: "disciplinaService".
Já as classes “controller” funcionam da mesma forma que os serviços do DDD. Ex:
"disciplinaController".