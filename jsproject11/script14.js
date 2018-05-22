	'use strict'
  var URL = window.URL || window.webkitURL
  
  
  function srt2vtt(srt) {
		var vtt = ''
	 	srt = srt.replace(/\r+/g, '');
	  	var list = srt.split('\n');
	  	for (var i = 0; i < list.length; i++) {
	  		var m = list[i].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/)
	  		if (m) {
	  			vtt += m[1]+':'+m[2]+':'+m[3]+'.'+m[4]+' --> '+m[5]+':'+m[6]+':'+m[7]+'.'+m[8]+'\n';
	  		} else {
	  			vtt += list[i] + '\n'
	  		}
	    }
	    vtt = "WEBVTT\n\n\n" + vtt
	    vtt = vtt.replace(/^\s+|\s+$/g, '');
	    return vtt
	}
	
  function openFile_code(){
	  var reader = new FileReader();
			reader.onload = function(progressEvent){
				// Entire file
				console.log(this.result);

				// By lines
				var lines = this.result.split('\n');
				for(var line = 0; line < lines.length; line++){
					console.log(lines[line]);
				}
			};
			reader.readAsText(file);
  }

  function attachFile() {
	var target = this.getAttribute('target')
    var file = this.files[0]
	var reader = new FileReader();
	reader.onload = function(progressEvent){
		// Entire file
		// console.log("this;",this)
		var contents = this.result
		var string = srt2vtt(contents)
		var vttBlob = new Blob([string], {
						type: 'text/plain'
						});
		var fileURL = URL.createObjectURL(vttBlob)
		var targetNode = document.querySelector(`${target}`)
		targetNode.src = fileURL
		document.querySelector('.contents').textContent = this.result;
		console.log("1:") 
	};
	
	if(file.name.split('.').pop() =='srt'){
		reader.readAsText(file)
	} else {
		var fileURL = URL.createObjectURL(file)
		var targetNode = document.querySelector(`${target}`)
		targetNode.src = fileURL
		
		console.log("2:")
	}
	
	if (target.includes('track')){
		showAll()
		}
  }

  function showAll(){
   for (var i = 0; i < videoNode.textTracks.length; i++) {
      videoNode.textTracks[i].mode = 'showing';
   }
  }
  
  var videoNode = document.querySelector('video')
  var inputNode = document.querySelectorAll('[target]')
  var showAllButton = document.querySelector('#show-all')
  
  inputNode.forEach(inputNode=>inputNode.addEventListener('change', attachFile, false))
  showAllButton.addEventListener('click', showAll);
  
  
