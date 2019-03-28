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

  var gifName = $(this).attr("data-value");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=sQdRRctfFw20rFHJs2Hm49aWOfHWzHqY&limit=10&offset=0&rating=PG-13&lang=en"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.data[0].rating);
      var array = response.data

      $("#gif-onpage").empty();

      for (i = 0; i < array.length; i++){
        var gifDiv = $("<div>");
        var rating = response.data[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        gifDiv.append(p);

        var gifURLStill = response.data[i].images.fixed_width_still.url;
        var gifURLMotion = response.data[i].images.fixed_width.url;
        var gif = $("<img>").attr("src", gifURLStill);
        gif.addClass("gif");
        gif.attr("data-still", gifURLStill);
        gif.attr("data-motion", gifURLMotion);
        gif.attr("data-state", "still");
        gifDiv.append(gif);
        $("#gif-onpage").prepend(gifDiv);

      };
    });

  };

$(document).on("click", ".gif-btn", displayGifs);
$(document).on("click", ".gif", function() {

  var state = $(this).attr("data-state");

    if (state === "still"){
      $(this).attr("src", $(this).attr("data-motion"));
      $(this).attr("data-state", "motion");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
  }});

// call of array onstart
renderButtons();

});
