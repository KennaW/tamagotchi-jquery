$(document).ready(function() {
  var pets = [];

  $("form#hatch-form").submit(function(event) {
    var newName = $("input#name").val();

    var newPet = {name: newName,
    food: 100
    };
    var myVar=setInterval(function(){myTimer()},1000);
    var foodLevel;


    function myTimer() {
        newPet.food -= 1;
        $("#" + newPet.name).text(newPet.food);
        if (newPet.food < 25) {
          $(".med." + newPet.name).show();
        }
    }

    $("#petList").append("<li><span class='glyphicon glyphicon-plus clickable med " + newPet.name + "'></span><span class='glyphicon glyphicon-cutlery clickable feed" + newPet.name + "'></span> " + newPet.name + " energy level: " + "<span id='" + newPet.name + "'></span> " + "</li>");

    $(".feed" + newPet.name).click(function() {
      newPet.food += 25;
      if (newPet.food > 25) {
        $(".med." + newPet.name).hide();
      }
    });

    $("input#name").val("");
    event.preventDefault();
  });

});
