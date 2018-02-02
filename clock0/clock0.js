const secondHand = document.querySelector('.second-hand');
// const minHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

function setDate(){
  // console.log('hi');
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360 + 90);
  secondHand.style.transform = `rotate(${secondsDegrees})`;

  // const mins = now.getMinutes();
  // const minsDegrees = ((mins/60)*360+90);
  // minHand.style.transform = `rotate(${minsDegrees})`;

  console.log(seconds);
}

setInterval(setDate, 1000)
