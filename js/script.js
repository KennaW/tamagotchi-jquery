$(document).ready(function() {
  var pets = [];

  $("form#hatch-form").submit(function(event) {
    var newName = $("input#name").val();

    var newPet = {name: newName,
    food: 10
    };
    var myVar=setInterval(function(){myTimer()},1000);
    var foodLevel;


    function myTimer() {
        newPet.food -= 1;
        $("#" + newPet.name).text(newPet.food);
        if (newPet.food < 25) {
          $(".med." + newPet.name).show();
        }
        if (newPet.food === 0) {
          $("li." + newPet.name).addClass("dead");
          $("#deathList").append("<li> &#9760" + newPet.name + "</li>");
          $("#cemetary").show();
        }
    }

    $("#petList").append("<h3><li class='" + newPet.name + "'><span class='glyphicon glyphicon-plus clickable med " + newPet.name + "'></span><span class='glyphicon glyphicon-cutlery clickable feed" + newPet.name + "'></span> " + newPet.name + " energy level: " + "<span id='" + newPet.name + "'></span> " + "</li></h3>");

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
