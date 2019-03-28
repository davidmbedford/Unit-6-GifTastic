//////////////////////////////////
// Gif Exploder - Api Key:
// sQdRRctfFw20rFHJs2Hm49aWOfHWzHqY
//////////////////////////////////

$(document).ready(function() {

var topics = ["pork", "bork", "fork"];

// sets buttons to page
function renderButtons() {
  $("#gif-buttons").empty();

  for (i = 0; i < topics.length; i++) {
  var topicName = topics[i];
  $("#gif-buttons").append("<button> " + topicName + " </button>");
    };

  console.log(topics)

  };

// provides functionality for submit(+) button
$("#submit-btn").on("click", function(event) {

  event.preventDefault();

  var gifName  = $("#gif-input").val().trim();

  topics.push(gifName);

  renderButtons();

  });

// provides functionality for remove(-) button
$("#remove-btn").on("click", function(event) {

  event.preventDefault();

  var gifName = $("#gif-input").val().trim();

  topics.pop(gifName);

  renderButtons();

  });

// provides functionality for the gif-api buttons at the top eof the page
$("<button>").on("click", function(event) {

  event.preventDefault();

  var gif = $("#gif-input").val().trim();

  var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=sQdRRctfFw20rFHJs2Hm49aWOfHWzHqY&q=" + gif + "&limit=10&offset=0&rating=G&lang=en"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      });

  });

// call of array onstart
renderButtons();

});
