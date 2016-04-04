//BUSINESS LOGIC

function Task(task) {
  this.task = task;
}


//UI LOGIC
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    var newTask = new Task(inputtedTask);


    $("ul#myTasks").append("<li><span class ='task'>" + newTask.task + "  " + "<button type='button' class='btn' id='removeButton'>" + "DONE" + "</button>" + "</span></li>");

    $(".showList").show();

    $("ul#myTasks").children("li").last().click(function() {
      $(this).remove();
    });

  });
});
