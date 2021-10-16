$(document).ready(function () {
function saveHandler() {
  var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(time, value);

}


$('.saveBtn').on('click', saveHandler);

});