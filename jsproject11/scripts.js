// get element
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

// build out functions
function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(){
  console.log('update the button')
}

// hook up the event listners
