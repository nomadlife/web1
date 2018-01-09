<script>
"use strict";

var $clock = $("#clock");

function setClock() {
  var date = new Date();

  $('.analog-clock__hand--second').css('transform', 'rotateZ(' + (date.getSeconds() * 6) + 'deg)');
  $('.analog-clock__hand--minute').css('transform', 'rotateZ(' + (date.getMinutes() * 6) + 'deg)');
  $('.analog-clock__hand--hour').css('transform', 'rotateZ(' + (date.getHours() * 30) + 'deg)');
}

setClock();


</script>
