
var animalList = [
"Cat", "Dog", "Tiger", "Lion", "Zebra", "Rhino", "Dolphin", "Kangaroo"
]


for (var i = 0; i < animalList.length; i++){
    var button = $("<button>").text(animalList[i]); 
    button.attr("data-animal", animalList[i])
    $("#animalbuttons").append(button);

}


$("button").on("click", function() {
    var animal = $(this).attr("data-animal");

    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
   
      .done(function(response) {
        var results = response.data;        
        for (var i = 0; i < results.length; i++) {

            
            var gifDiv = $("<div>");

            

            // Creating an image tag
            var animalImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            
            gifDiv.append(animalImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#divplace").prepend(gifDiv);
          }
        
        });
    });