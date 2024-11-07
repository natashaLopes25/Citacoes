const quotes = [
    {
      quote: "A persistência é o caminho do êxito.",
      author: "Charles Chaplin",
    },
    {
      quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
      author: "Steve Jobs",
    },
    {
      quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
    },
    {
      quote:
        "O fracasso é a oportunidade de começar de novo, com mais experiência.",
      author: "Henry Ford",
    },
    {
      quote: "Não espere por oportunidades, crie você mesmo as suas.",
      author: "Autor desconhecido",
    },
    {
      quote:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      author: "Zig Ziglar",
    },
    {
      quote:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
      author: "Winston Churchill",
    },
    {
      quote:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
      author: "Winston Churchill",
    },
    {
      quote: "Acredite em si próprio e todo o resto virá naturalmente.",
      author: "Elon Musk",
    },
    {
      quote:
        "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
      author: "Autor desconhecido",
    },
  ];
  
  //selecionando os elementos
  const quoteBtn = document.querySelector("#quoteBtn");
  const quoteText = document.querySelector(".text");
  const quoteAuthor = document.querySelector(".author");

  //pagando aleatoriamente um dos elementos do array
  function getQuote(){
    const index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = `"${quotes[index].quote}"`;
    quoteAuthor.textContent = `-${quotes[index].author}`;
    //quoteAuthor.textContent = "-" + quotes[index].author; -Para fins de estudo, esta seria uma forma diferente de fazer uma concatenação para adicionar o ífen.
  }

  quoteBtn.addEventListener("click", getQuote);

  //Sugestão de implementação:
  /*construir backend que fornece citações e por meio de uma requisição assíncrona ele traz os dados para o projeto e gera aleatoriamente citações que podem ser alteraradas
   por meio de um banco de dados.*/