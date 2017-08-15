$(document).ready(function() {

      function getQuote() {

        var quotes = ["One Time You Pull Out A Thread and Where does it Stop, Where does it Stop?!", 
                      "I know we are the chosen people, but every now and then, can't you choose someone else?", 
                      "A Blessing on Your Head",
                     "Even a Poor Tailor Deserves Some Happiness!"];
        var author = ["-Tevye", "-Tevye", "-Grandmother Tzeitel", "-Tzeitel"];

        var randomNum = Math.floor((Math.random()*quotes.length));
        var randomQuote = quotes[randomNum];
        var randomAuthor = author[randomNum];

        $(".quote").text(randomQuote);
        $(".author").text(randomAuthor);
            }
        $(".btn").on("click", function(){
          getQuote();
        });
      });