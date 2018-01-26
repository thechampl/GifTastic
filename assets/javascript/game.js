
var animalList = [
    "Cat", "Dog", "Tiger", "Lion", "Zebra", "Rhino", "Dolphin", "Kangaroo"
]

function buttonrender() {
    $("#animalbuttons").empty();
    for (var i = 0; i < animalList.length; i++) {
        var button = $("<button class=animal>").text(animalList[i]);
        button.attr("data-animal", animalList[i]);
        $("#animalbuttons").append(button);
    }


}

var userSearch = $("#userSearch");

$("#search").on("click", function () {
    console.log(userSearch.val());
    event.preventDefault();
    animalList.push(userSearch.val());
    console.log(animalList);
    buttonrender();

});

$("#animalbuttons").on("click", ".animal", function () {
    $("#divplace").empty();

    var animal = $(this).attr("data-animal");
    console.log(animal);


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";

    console.log(queryURL)



    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .done(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='col-md-3'>");
                var animalImage = $("<img class='img-thumbnail'>");
                animalImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(animalImage);
                $("#divplace").prepend(gifDiv);
            }

        });
});




$('.img-thumbnail').on("click", function () {
    alert("test");
    animalImage.attr("src", results[i].images.fixed_height_still.url);

});
buttonrender()