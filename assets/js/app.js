//////////////////////////////////
// Gif Exploder - Api Key:
// sQdRRctfFw20rFHJs2Hm49aWOfHWzHqY
//////////////////////////////////

var topics = [];

$("#submitBtn").on("click", function(event) {

  event.preventDefault();

  var gif = $("#gif-input").val().trim();

  var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=sQdRRctfFw20rFHJs2Hm49aWOfHWzHqY&q=" + gif + "&limit=10&offset=0&rating=G&lang=en"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  });

});
