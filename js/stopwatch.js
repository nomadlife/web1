console.log('hi');

function stopwatch() {
  var time = 0;
  var interval;
  var offset;

  function update(){
    time += delta();
  }

  function delta(){
    var now = Date.now()
  }
  function timeFormatter() {}

  this.isOn = false;

  this.start = function(){
    if (!This.isOn){
      interval = setInterval(update,10)
      offset = Date.now();
      this.isOn = true;
    }
  }

  this.stop = function() {
    if(this.idOn) {
      clearInterval(interbal);
      interval = null;
      this.isOn = false;
    }
  };

  this reset = function(){};

  };
}

var watch = new stopwatch();
watch.start();
watch.stop
