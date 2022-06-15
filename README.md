## Projeto realizando o consumo de dados de uma API com ReactJS

Projeto desenvolvido a partir de cursos de youtube


# API utilizada como base para o projeto:

https://api.tvmaze.com/search/shows?q=star%20war (copie e cole no navegador) 

![2022-06-15-09-53-41](https://user-images.githubusercontent.com/68347193/173832302-130076b0-a930-4f1f-b967-c553ed40b9ff.gif)



Ao realizar a autenticação via Async Await para a API da Tvmaze, dentre das diversas opções prescritas dentro da API eu selecionei apenas o título e o nome do filme para serem apresentadas aos usuários, como no vídeo acima. 

Dentro do vetor gerado pela API, são selecionados 10 filmes de determinada franquia para serem apresentados, sendo definidos através do arquivo API.JS aonde é criado a base do AXIOS e definido a baseurl com o link para realizar a busca:  
![axios](https://user-images.githubusercontent.com/68347193/173834260-6407d125-f574-4abc-a28e-707431aa7d8c.PNG)

## Lembrando que:


Dentro da função GET da API não foi selecionada nenhuma opção de busca, pois como a base da url já constava o link completo da consulta da API não será necessário realizar a solicitação de um elemento especifico pelo GET
![get](https://user-images.githubusercontent.com/68347193/173836937-bd543c1d-9047-4b56-9b50-2424cec6114d.PNG)

## Veja nesse exemplo

Aonde eu retiro a informação final da API https://api.tvmaze.com/search/shows?q= e implementei a opção do star wars através do GET para realizar a requisição, o resultado permanece o mesmo do vídeo acima


## Arquivo API 
![2](https://user-images.githubusercontent.com/68347193/173842453-b53b7421-3a6e-44d8-abc1-1bc214dba10a.PNG)

## Metodo GET

![1](https://user-images.githubusercontent.com/68347193/173842497-6706726b-255e-4fa1-80c9-d0050b763fd3.PNG)

## Sugestão de melhoria para aplicação:

Implementar a busca de série preferida do usuário através de um input pré setado com a opção de outras séries e filmes, importando os dados gerados a um arquivo csv através do google planilhas 
