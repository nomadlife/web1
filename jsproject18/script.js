const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds_string = timeNodes
.map(node => node.dataset.time)
console.log('seconds_string:',seconds_string);

const seconds_split = seconds_string
.map(timeCode =>{
	const [mins,secs] = timeCode.split(':').map(parseFloat);
  // console.log(mins,secs);
	return (mins * 60) + secs;
})
console.log('seconds_split:',seconds_split);

const seconds_total = seconds_split
.reduce((total, vidSeconds) => total + vidSeconds);
console.log('seconds_total:',seconds_total);

let secondsLeft = seconds_total;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours,mins,secondsLeft);