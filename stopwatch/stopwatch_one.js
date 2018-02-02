function stopwatch(opts){
  var time = 0;
  var interval;
  var offset;

  var elem = opts.elem;
  var delay = opts.delay;

  function update(){
    if(this.isOn){
      time += delta();
    }

    var formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
  }

  function delta(){
    var now = Date.now();
    var timePassed =  now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds)
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2 ){
      minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3){
    milliseconds = '0' + milliseconds
    }

    return minutes + ' : ' + seconds + ' . ' + milliseconds
    }


  this.isOn = false;

  this.start = function(){
    if (!this.isOn){
      interval = setInterval(update.bind(this),delay); //10 milliseconds
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    if(this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function(){
if(!this.isOn){
    time =0;
    update();
    }
  };
}

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
// var watch = new stopwatch();
// watch.start();
// watch.stop;
