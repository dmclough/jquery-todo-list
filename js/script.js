$(document).ready(function(){
  //all this code inside here - it waits for the DOM to be loaded
  //It's just like DOMContentLoaded!
  console.log("DOM is ready!");

  //reset the value of the text field
  $("#submitBtn").click(function(){
        $("#enterToDo").val('');
        console.log("click button pressed");
    });

//get the value on the text field on click
    $(document).ready(function(){
      $("button").click(function(){
        var userInput = $("#userInput").val();
        console.log("user said this: " + userInput);
        $("ul").prepend("<li>"+userInput+"</li><span id='clear'> X to Clear</span></li>");
        });
      });

//hide the UL after user clicks it
  $(document).ready(function(){
      $("li").click(function(){
          $(this).remove();
      });
  });









});
