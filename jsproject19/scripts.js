const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
	navigator.mediaDevices.getUserMedia({video:true, audio:false})
	.then(localMediaStream => {
		console.log(localMediaStream);
		video.src = window.URL.createObjectURL(localMediaStream);
		video.play();
	})
	.catch(err => {
		console.error(`OH NO!!`,err);
	})
}

function paintToCanvas(){
	const width = video.videoWidth;
	const height = video.videoGeight;
	canvas.width = width;
	canvas.height = height;
	console.log(width, height);

	setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
	}, 100);

}

getVideo();
