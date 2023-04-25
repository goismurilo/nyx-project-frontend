
# Desafio Nyx

### 📦 Visão Geral
---

Criar um App em Angular 14 e Backend Java com SpringBoot, para ler e apresentar dados
sobre os gastos do Recife. Os dados usados para o desafio estão na URL abaixo:

> http://dados.recife.pe.gov.br/dataset/despesas-orcamentarias/resource/d4d8a7f0-d4be-4397-b950-f0c991438111


### 🏆 Sobre o desafio
---

#### Requsitos minímos

    ● O sistema deve ter três visualizações:
        ○ Mostrando as despesas totais em cada mês
        ○ Mostrando as despesas totais agrupadas por categoria
        ○ Mostrar de onde vem o dinheiro agrupado por fonte.

    ● Também escolha uma das seguintes opções para implementar:
        ○ Possibilitar a edição e persistência dos dados.
        ○ Unificar as três visualizações em uma única tela (SPA - Single Page Application)
        
### :heavy_check_mark: Resolução dos Desafios

Para a conclusão dos desafios propostos foram usar as seguintes tecnologias:

Tecnologias||
----------|----
AngularJS|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
SpringBoot|<img width="26" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />|
          
### ⚙️ Como rodar o projeto

Será necessário as instalações dos frameworks em que estas aplicações rodam, para saber mais.


Para aprender mais sobre o Angular.js, dê uma olhada nos seguintes links:

- [Documentação Angular](https://angular.io/docs) - Saiba mais sobre os recursos do AngularJS.
- [Playground](https://angular.io/quick-start) - Para tentar na prática aqui está o Angular Playground.

Para entender os passos iniciais do SpringBoot, dê uma olhada nos seguintes links:

- [QuickStart](https://spring.io/quickstart) - Para saber por onde começar.
- [Comunidade](https://spring.io/community) - Fique por dentro do que está acontecendo.


Logo após você deve clonar e executar as aplicações que estão dispostas nos seguintes endereços:

**BackDnd**
> https://github.com/goismurilo/nyx-project-backend

**FrontEnd**
> https://github.com/goismurilo/nyx-project-frontend


## 🧠 Entendendo o Projeto

Levando em considerações que as aplicações estão sendo executadas na sua máquina local. 
Você pode ter acesso ao banco H2 que subiu e se populou no seu navegador através do seguinte endereço:
>  http://localhost:8080/h2/login.jsp

A credenciais de acesso estão no arquivo **src/main/resources/application.properties** no projeto Spring.

E para ter acesso de uma visualizações melhor dos endpoints, basta acessar o Swagger local que está aqui:
> http://localhost:8080/swagger-ui/index.html#


### Entendendo os EndPoints

EndPoint | Função | 
:--------- | :------ |
 /expenses| Lista todas as despesas | 
 /expenses/amount| Lista a soma das despesas líquidas, empenhadas e pagas | 
 /expenses/info| Lista informações gerais a partir de **mês, categoria ou fonte de recurso** | 
 /expenses/source/{source}| Lista todas as despesas por Fonte de Recurso | 
 /expenses/month/{month}| Lista todas as despesas por Mês| 
 /expenses/category/{category}| Lista todas as despesas por categoria| 


## 🤝🏾 Como contribuir

Para contribuir basta clicar no botão **fork**, criar um **Branch**, arrumar o código e enviá-lo com **Pull Requests**.

Mais detalhes de como contribuir e em enviar Pull Requests em [GitHub Collaborating]("https://docs.github.com/en/pull-requests/collaborating-with-pull-requests")  

## 📃 Licença

Os projetos estão sob a lincença MIT. 

<div align=center>

Feito com ♥ por Murilo Gois :wave: [Get in touch!](https://www.linkedin.com/in/goismurilo/)\

[Site para pegar icones -> https://devicon.dev/]: #

<!-- Adveniat (veniat) regnum tuum, fiat voluntas tua, sicut in caelo et in terra
Amen -->
