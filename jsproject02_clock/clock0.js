const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  // console.log('hi');
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds*6) + 90);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins*6)+90);
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours*30)+(mins/12)+90);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(hours,mins,seconds);
}

setInterval(setDate, 1000)
