$(document).ready(function() {

      function getQuote() {

        var quote = ["One Time You Pull Out A Thread and Where does it Stop, Where does it Stop?!",
          "I know we are the chosen people, but every now and then, can't you choose someone else?",
          "A Blessing on Your Head",
        ];
        var author = ["Tevye", "Tevye", "Grandmother Tzeitel"];

        var randomNumb = Math.floor((Math.random() * quotes.length));

        var randomQuote = quotes[randomNum];

        var randomAuthor = author[randomNum];


        $(".quote").text(randomQuote);
        $(".author").text(author);

        $(".btn").on("click", function() {
          getQuote();

        });
      });