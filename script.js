/* The function for tweeting the random quote was heavily inspired by Kai Gittens. Thanks Kai. HTML and CSS are all original code I wrote. The ajax call was inspired from instructions on the forismatic website and help from fellow campers on the FCC Front End Help forum. Link: http://kaidez.com/click-to-tweet-link/*/

//get the quote
function getQuote() {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/',
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#quote").html("<p id='quote' class='lead text-center'>" +
        response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
    }
  });
}

//tweet out the quote and the author
function tweetOut() {
  var getPostTitle = document.getElementById("quote").innerText,
    linkElement = document.getElementById("tweet-button");

  $(linkElement).click(function(event) {
    event.preventDefault();

    var tweetedLink = window.location.href;

    window.open("https://twitter.com/intent/tweet?url=" + tweetedLink + "&text=" + getPostTitle);
  });
}
