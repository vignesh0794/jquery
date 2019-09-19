$(document).ready(function() {
    console.log("object");
  
    $("#color").on("click", function() {
      console.log("object");
      $("#holder div").css("background-color", "blue");
    });
  
    $("#borders").on("click", function() {
      console.log("object");
      $(".box").css("border-radius", "15px");
    });
  
    $("#addBox").on("click", function() {
      let boxCount = $("#holder div").length;
      $("#holder").append(`<div class="box" id=${boxCount++}></div>`);
    });
  });