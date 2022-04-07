
//========== For time in header ==========//
/*
    Timer 1
var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});*/

// Timer 2
var currentHour = moment().hours();
var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
var update = function () {
    document.getElementById("currentDay").innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
}
setInterval(update,1000);

//======================================//

// Global Variables
var saveBtn = document.getElementById('saveBtn');
var timeBlock = document.querySelector('.time-block')


// Functions


$(document).ready(function(){

    // Function that listens to saveBtn clicks
    $('.saveBtn').on('click', function() {
        var time = $(this).parent().attr("id");
        var value = $(this).sibling(".information").val();
        localStorage.setItem(time, value)
    })

    // function to change the color by holding the time
    function colorUpdater() {
        var currentHour = moment().hours();

        $('#time-block').each(function() {
            // loop over time blocks
            //var blockTime = 
        })
        if (currentHour > 9) {
            $("#hour-nine").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-nine").addClass("present");
        } else {
            $("#hour-nine").addClass("future");

        } 
        if (currentHour > 9) {
            $("#hour-ten").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-ten").addClass("present");
        } else {
            $("#hour-ten").addClass("future");

        }
        if (currentHour > 9) {
            $("#hour-eleven").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-eleven").addClass("present");
        } else {
            $("#hour-eleven").addClass("future");

        }
        if (currentHour > 9) {
            $("#hour-twelve").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-twelve").addClass("present");
        } else {
            $("#hour-twelve").addClass("future");

        }
        if (currentHour > 9) {
            $("#hour-one").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-one").addClass("present");
        } else {
            $("#hour-one").addClass("future");

        }
        if (currentHour > 9) {
            $("#hour-two").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-two").addClass("present");
        } else {
            $("#hour-two").addClass("future");

        }
        if (currentHour > 9) {
            $("#hour-three").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-three").addClass("present");
        } else {
            $("#hour-three").addClass("future");

        }
        if (currentHour > 9) {
            $("#hour-four").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-four").addClass("present");
        } else {
            $("#hour-four").addClass("future");

        }
        if (currentHour > 9) {
            $("#hour-five").addClass("past");
        } else if (currentHour >= 9 && currentHour <10) {
            $("#hour-five").addClass("present");
        } else {
            $("#hour-five").addClass("future");

        }
        
    }

    // call function
    colorUpdater();

    //local storage
    $('#hour-nine .information').val(localStorage.getItem("hour-nine"));
    $('#hour-ten .information').val(localStorage.getItem("hour-ten"));
    $('#hour-eleven .information').val(localStorage.getItem("hour-eleven"));
    $('#hour-twelve .information').val(localStorage.getItem("hour-twelve"));
    $('#hour-one .information').val(localStorage.getItem("hour-one"));
    $('#hour-two .information').val(localStorage.getItem("hour-two"));
    $('#hour-three .information').val(localStorage.getItem("hour-three"));
    $('#hour-four .information').val(localStorage.getItem("hour-four"));
    $('#hour-five .information').val(localStorage.getItem("hour-five"));

    $("#currentDay").text(moment().format("MMM Do YYYY"))

})