var dateEl = document.getElementById("currentDay"); // for header

currentDay();
colorCode();


// get from local storage



// Current Day Function

function currentDay() {
    setInterval(function () {
        dateEl.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    }, 1000);
}

function colorCode() {
    // for loop to go through the boxes
    for (i = 9; i <= 17; i++) {
        var currentTime = moment().hour(); // current time rounded to the hour
        var id = "Hour " + i; // for save function

        if (i === currentTime) {
            console.log('present');
            $(".row").addClass("time-block present");
        }
        else if (i < currentTime) {
            console.log('past');
            $(".row").addClass("time-block past");
          
        }
        else {
            console.log('future');
            $(".row").addClass("time-block future");
           
        }
        console.log("i: ", i)
        console.log("Current Time: ", currentTime)
        console.log("id: ", id)
        console.log("---------------------------")
    }
}

$(".saveBtn").click(function (event) {
    var key = $(this).attr("id");
    var value = $('task').val();
    
    localStorage.setItem(key, value);
});
