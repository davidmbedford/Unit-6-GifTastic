//////////////////////////////////
// Gif Exploder - Api Key:
// sQdRRctfFw20rFHJs2Hm49aWOfHWzHqY
//////////////////////////////////

$(document).ready(function() {

var topics = ["lions", "tigers", "bears"];

// sets buttons to page
function renderButtons() {
  $("#gif-buttons").empty();

  for (i = 0; i < topics.length; i++) {
    //var topicName = topics[i];
    //$("#gif-buttons").append("<button> " + topicName + " </button>");
    //  };
    var g = $("<button>");
    g.addClass("gif-btn");
    g.attr("data-value", topics[i]);
    g.text(topics[i]);
    $("#gif-buttons").append(g);
    };

  console.log(topics);

  };

// provides functionality for submit(+) button
$("#submit-btn").on("click", function(event) {

  event.preventDefault();

  var gifName = $("#gif-input").val().trim();

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
function displayGifs () {

  event.preventDefault();

  var gif = $(this).attr("data-value");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=sQdRRctfFw20rFHJs2Hm49aWOfHWzHqY&limit=10&offset=0&rating=G&lang=en"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);


      });

  };

$(document).on("click", ".gif-btn", displayGifs);

// call of array onstart
renderButtons();

});
