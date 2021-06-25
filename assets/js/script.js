$(document).ready(function () {
    

    // get items from localStorage
    for (var i = 9; i < 18; i++) {
        var id = "hr" + i;
        var description = localStorage.getItem(id);
        $("#" + id).val(description);
    }

    // save button

    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var hourId = $(this).attr("name");
        var savedItem = "#" + hourId;
        var userInput = $(savedItem).val();
        localStorage.setItem(hourId, userInput);
    });

    // clock
    setInterval(function () {
        var dateEl = document.getElementById("currentDay"); // for header
        dateEl.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    }, 1000);

    // color code
    function colorCode() {
        // for loop to go through the boxes
        for (i = 9; i <= 17; i++) {
            var currentTime = moment().hour(); // current time rounded to the hour
            var id = "hr " + i; // for save function
            
            if (i === currentTime) {
                console.log('present');
                $("#hour" + i).addClass("present");
                $("#hr" + i).addClass("present");
                // $(".row").removeClass("past future");
                

            }
             else if (i < currentTime) {
                console.log('past');
                $("#hour" + i).addClass("past");
                $("#hr" + i).addClass("past");
                // $(".row").removeClass("present future");
              
            }
            else {
                console.log('future');
                $("#hour" + i).addClass("future");
                $("#hr" + i).addClass("future");
            //    $(".row").removeClass("past present");
            
            }

            console.log("i: ", i)
            console.log("Current Time: ", currentTime)
            console.log("id: ", id)
            console.log("---------------------------")
        }
    }

    colorCode();
});
