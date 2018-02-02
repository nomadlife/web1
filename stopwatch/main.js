var time = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new stopwatch({
  elem:timer,
  delay:10
});

function start (){
  toggleBtn.textContent = 'stop';
  watch.start();
}

function stop(){
  toggleBtn.textContent = 'start';
  watch.stop();
}

toggleBtn.addEventListener('click', function(){
  (watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function(){
  watch.reset();
});

//console.log('hi, main_js');
