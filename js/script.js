$(document).ready(function(){
  //all this code inside here - it waits for the DOM to be loaded
  //It's just like DOMContentLoaded!
  console.log("DOM is ready!");

  //remove the UL after user clicks it
  //$("#submitBtn").click(function(){

  //    });

  //get the value on the text field on click
  $(document).ready(function(){
    $("button").click(function(){
      console.log("click button pressed");

      var userInput = $("#userInput").val();
      //console.log("user said this: " + userInput);
      $("ul").prepend("<li>" + userInput + " <span id='clear'>Clear</span></li>");
      $("#enterToDo").val("");
      $("li").click(function(){
        $(this).remove();
      });
    });
  });
});
