$(document).ready(function () {
function saveHandler() {
  var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(time, value);

}


$('.saveBtn').on('click', saveHandler);

function checkHourPassed() {
    // get current number of hours, get this hour 
    var thisHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function () {
      var scheduledHour = parseInt($(this).attr('id'));

      // check if we've moved past this time
      if (scheduledHour < thisHour) {
        $(this).addClass('past');
      } else if (scheduledHour === thisHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  checkHourPassed();


});