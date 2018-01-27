var time = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new stopwatch(timer);

toggleBtn.addEventListener('click', function(){
  if(watch.isOn){
    watch.stop();
    toggleBtn.textcontent = 'start';
  }else{
    watch.start();
    toggleBtn.textcontent = 'stop';
  }
});

resetBtn.addEventListener('click', function(){
  watch.reset();
});
