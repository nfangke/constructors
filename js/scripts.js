//Business Logic

function Place(city, state, country) {
  this.city = city;
  this.state = state;
  this.country = country;
}


// UI Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedCountry = $("input#new-country").val();

    var newPlace = new Place(inputtedCity, inputtedState, inputtedCountry);

    $("ul#places").append("<li><span class='place'>" + newPlace.city + "</span></li>")

    $(".place").last().click(function() {
      $("#showDetails").show();
      $("#showDetails h4").text(newPlace.city);
      $(".theState").text(newPlace.state);
      $(".theCountry").text(newPlace.country);
    });


  });
});
