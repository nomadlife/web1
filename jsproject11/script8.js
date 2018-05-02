(function localFileVideoPlayer() {
	'use strict'
  var URL = window.URL || window.webkitURL
  var displayMessage = function (message, isError) {
    var element = document.querySelector('#message')
    element.innerHTML = message
    element.className = isError ? 'error' : 'info'
  }
  
  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
	
    // var canPlay = videoNode.canPlayType(type)
    // if (canPlay === '') canPlay = 'no'
    // var message = 'Can play type "' + type + '": ' + canPlay
    // var isError = canPlay === 'no'
    // displayMessage(message, isError)

    // if (isError) {
      // return
    // }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
	console.log(videoNode)
	
	document.getElementById('show-all').addEventListener('click', function() {
   for (var i = 0; i < videoNode.textTracks.length; i++) {
      videoNode.textTracks[i].mode = 'showing';
   }
  });
  }
  
  function addSelectedSubtitle(e) {
	var file = this.files[0]
    var type = file.type
    var trackNode = document.querySelector('track')
	var fileURL = URL.createObjectURL(file)
    trackNode.src = fileURL
	console.log(trackNode)
	var videoNode = document.querySelector('video')
	videoNode.textTracks[0].mode = 'showing'
  }

  
  var inputNode = document.getElementById('file-loader')
  inputNode.addEventListener('change', playSelectedFile, false)
  console.log(inputNode)
  var textInputNode = document.getElementById('text-loader')
  textInputNode.addEventListener('change', addSelectedSubtitle, false)
})()