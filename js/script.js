$(document).ready(function() {
  var pets = [];

  $("form#hatch-form").submit(function(event) {
    var newName = $("input#name").val();

    var newPet = {name: newName,
    food: 100
    };
    var myVar=setInterval(function(){myTimer()},1000);

    function myTimer() {
        $("#petList").innerHTML = newPet.food -= 1;
        $("#" + newPet.name).text(newPet.food);
    }

    $("#petList").append("<li>" + newPet.name + " energy level: " + "<span id='" + newPet.name + "'></span>" + "</li>");

    event.preventDefault();
  });

});
