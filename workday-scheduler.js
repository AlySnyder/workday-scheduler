$(document).ready(function () {
function saveHandler() {
  let value = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(time , value)
}


$('.saveBtn').on('click', saveHandler);

function renderData() {
    $('.time-block').each(function () {
        let time = ($(this).attr('id'));
        let textArea = time + "_text"
        var exists = localStorage.getItem(time)

        if(exists) {
            console.log(exists);
            $(`#${textArea}`).val(exists)
        } 
    })

}

renderData()


function checkHourPassed() {
    // get current number of hours, get this hour 
    let thisHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function () {
      let scheduledHour = parseInt($(this).attr('id'));



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