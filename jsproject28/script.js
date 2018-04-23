	const speed = document.querySelector('.speed');
	const bar = speed.querySelector('.speed-bar');
	const video = document.querySelector('.flex');
	let isDown = false;
	
	function handleMove(e){
		const y = e.pageY - this.offsetTop;
		const percent = y/this.offsetHeight;
		const min = 0.4;
		const max = 4;
		const height = Math.round(percent * 100) + '%';
		const playbackRate = percent*(max-min) +min;
		
		bar.style.height = height;
		bar.textContent = playbackRate.toFixed(1) + 'x';
		video.playbackRate = playbackRate;
		
		console.log(playbackRate);
		console.log(percent);
	}
	
	speed.addEventListener('mousedown', handleMove);
	
	speed.addEventListener('mouseup',()=>{
	isDown = false;
	console.log(isDown);
	});
	
	<!-- speed.addEventListener('mousemove', (e)=>{ -->
	<!-- if(!isDown) return; -->
	<!-- handlemove; -->
	<!-- console.log(isDown); -->
	<!-- }); -->
	