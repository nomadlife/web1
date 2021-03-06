
/*
 *  Main function to set the clock times
 */
(function() {
  // Initialise the locale-enabled clocks
  initInternationalClocks();
  // Initialise any local time clocks
  initLocalClocks();
  // Start the seconds container moving
  moveSecondHands();
  // Set the intial minute hand container transition, and then each subsequent step
  setUpMinuteHands();
})();

/*
 *  Set up an entry for each locale of clock we want to use
 */
	function getTimes() {
	  var times = [
		{
		  city: 'tokyo',
		  jstime : calcTime(9)
		},
		{
		  city: 'london',
		  jstime: calcTime(0)
		},
		{
		  city: 'newyork',
		  jstime: calcTime(-4)
		}
	  ];
	  return times;
	}
	
	function calcTime(offset) {

    // create Date object for current location
    var d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd;
}

/*
 * Set up the clocks that use moment.js
 */
function initInternationalClocks() {
  // Initialise the clock settings and the three times
  var times = getTimes();
  for (i = 0; i < times.length; ++i) {
    var hours = times[i].jstime.getHours();
    var minutes = times[i].jstime.getMinutes();
    var seconds = times[i].jstime.getSeconds();

    var degrees = [
      {
        hand: 'hours',
        degree: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        degree: (minutes * 6)
      },
      {
        hand: 'seconds',
        degree: (seconds * 6)
      }
    ];
	
    for (var j = 0; j < degrees.length; j++) {
      var elements = document.querySelectorAll('.active .' + times[i].city + ' .' + degrees[j].hand);
      for (var k = 0; k < elements.length; k++) {
        	elements[k].style.webkitTransform = 'rotateZ('+ degrees[j].degree +'deg)';
          elements[k].style.transform = 'rotateZ('+ degrees[j].degree +'deg)';
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (degrees[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree);
          }
      }
    }
  }
  // Add a class to the clock container to show it
  var elements = document.querySelectorAll('.clock');
  
  console.log("check initInternationalClocks()",elements);
  
  for (var l = 0; l < elements.length; l++) {
    elements[l].className = elements[l].className + ' show';
  }
}

/*
 * Starts any clocks using the user's local time
 */
function initLocalClocks() {
  // Get the local time using JS
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.local .' + hands[j].hand);
	console.log("check initLocalClocks",elements)
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}

/*
 * Move the second containers
 */
function moveSecondHands() {
  var containers = document.querySelectorAll('.bounce .seconds-container');
  
  console.log("check moveSecondHands()",containers);
  
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
  for (var i = 0; i < containers.length; i++) {
    // Add in a little delay to make them feel more natural
    var randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    containers[i].style.transitionDelay = '0.0'+ randomOffset +'s';
  }
}

/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
  // More tricky, this needs to move the minute hand when the second hand hits zero
  var containers = document.querySelectorAll('.minutes-container');
  
  console.log("check setUpMinuteHands()",containers);
  
  var secondAngle = containers[containers.length - 1].getAttribute('data-second-angle');
  console.log(secondAngle);
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    console.log(delay);
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}

/*
 * Do the first minute's rotation, then move every 60 seconds after
 */
function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}

