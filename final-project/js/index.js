$(document).ready(function(){
  var problemIndex = 0;
  var problemList = [
        'What are the total sales for laptops?',
        'How many laptops were sold in 2017?',
        'What were the sales by month for laptops in 2017'
        ]
  $('#previous').click(function(event){
    event.preventDefault();
    if (problemIndex > 0) {
        problemIndex-=1;
        $('#exercise-header').html("Exercise #"+(problemIndex+1))
        $('#exercise-details').html(problemList[problemIndex])
        }
    })
  $('#next').click(function(event){
    event.preventDefault();
    console.log(problemIndex)
    if (problemIndex < problemList.length-1) {
        problemIndex+=1;
        $('#exercise-header').html("Exercise #"+(problemIndex+1))
        $('#exercise-details').html(problemList[problemIndex])
        }
    })
  

  // $(".editor").on("keydown keyup", function(e){
  $(".editor").on("keydown keyup blur", function(e){
    if (e.keyCode == 32){
        var text = $(this).text().replace(/[\s]+/g, " ").trim();
        var word = text.split(" ");
        var newHTML = "";

        $.each(word, function(index, value){
            switch(value.toUpperCase()){
                case "SELECT":
                case "FROM":
                case "WHERE":
                case "LIKE":
                case "BETWEEN":
                case "NOT LIKE":
                case "FALSE":
                case "NULL":
                case "FROM":
                case "TRUE":
                case "NOT":
                case "LIMIT":
                case "ILIKE":
                case "IN":
                case "GROUP":
                case "ORDER":
                case "AS":
                case "BY":


                    newHTML += "<span class='statement'>" + value.toUpperCase() + "&nbsp;</span>";
                    break;
                default: 
                    newHTML += "<span class='other'>" + value + "&nbsp;</span>";
                }

            });

        $(this).html(newHTML);
        
        // Set cursor postion to end of text
        var child = $(this).children();
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(child[child.length - 1], 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        $(this)[0].focus(); 
    }
  })

})

