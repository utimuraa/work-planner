$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do, YYYY dddd"));

    function colorCode() {
        var thisHour = moment().hours();
        console.log(thisHour);

        $(".timeblock").each(function () {
            var hour = parseInt($(this).attr("id").split("_")[0])
            console.log(hour, typeof hour);


            if (hour < thisHour) {
                $(this).addClass("past");
            }
            else if (hour === thisHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })

    }

    colorCode();

    $(".save").on("click", function () {
        var note = $(this).siblings(".addText").val();
        var timeId = $(this).parent().attr("id");
        console.log("click");
        localStorage.setItem(timeId, note);
    })

    $("#9AM .addText").val(localStorage.getItem("9AM"));
    $("#10AM .addText").val(localStorage.getItem("10AM"));
    $("#11AM .addText").val(localStorage.getItem("11AM"));
    $("#12PM .addText").val(localStorage.getItem("12PM"));
    $("#1PM .addText").val(localStorage.getItem("1PM"));
    $("#2PM .addText").val(localStorage.getItem("2PM"));
    $("#3PM .addText").val(localStorage.getItem("3PM"));
    $("#4PM .addText").val(localStorage.getItem("4PM"));
    $("#5PM .addText").val(localStorage.getItem("5PM"));
})