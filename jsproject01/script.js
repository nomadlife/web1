function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  console.log("this:",this);
  this.classList.remove('playing');
}

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log("audio:",audio,"key:",key);
  if(!audio) return;// stop the  from running all together.
  audio.currentTime = 0;
  audio.play();
  // key.addClass('playing')
  key.classList.add('playing');
  // key.classList.remove('playing');
  // key.classList.toggle('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);
