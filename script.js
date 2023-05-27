// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDate = dayjs().format("MM/DD/YYYY")
$("#currentDay").text(currentDate)
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function() {
var divKey = $(this).parent().attr("id")
var text = $(this).siblings(".description").val()
    localStorage.setItem(divKey, text)
  })



$("#09 .description").val(localStorage.getItem("09"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

var currentHr = dayjs().format("H")

$(".time-block").each(function(){
  var divId = $(this).attr("id")
  if (divId < currentHr){
    $(this).addClass("past")
  }else if(divId == currentHr) {
    $(this).addClass("present")
  }else if (divId > currentHr) {
    $(this).addClass("future")
  }
  
})