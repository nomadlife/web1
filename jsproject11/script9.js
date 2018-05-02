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
	console.log("func triggerd:1", videoNode.src)
	
	
  
  }
  
  function addSelectedSubtitle(e) {
	var file = this.files[0]
    var type = file.type
    var trackNode = document.querySelector('track')
	var fileURL = URL.createObjectURL(file)
    trackNode.src = fileURL
	console.log("func triggerd:2", videoNode.src)
	// var videoNode = document.querySelector('video')
	
	// document.getElementById('show-all').addEventListener('click', function() {
	// console.log("clicked 2")
   // for (var i = 0; i < videoNode.textTracks.length; i++) {
      // videoNode.textTracks[i].mode = 'showing';
	  // console.log(videoNode.textTracks[i].src)
   // }
  // });
  
  }

  var videoNode = document.querySelector('video')
  var inputNode = document.getElementById('file-loader')
  inputNode.addEventListener('change', playSelectedFile, false)
  console.log(videoNode, inputNode)
  var textInputNode = document.getElementById('text-loader')
  var textInputNode2 = document.getElementById('text-loader-2')
  textInputNode.addEventListener('change', addSelectedSubtitle, false)
  textInputNode2.addEventListener('change', addSelectedSubtitle, false)
  
  document.getElementById('show-all').addEventListener('click', function() {
	console.log("clicked show-all")
   for (var i = 0; i < videoNode.textTracks.length; i++) {
      videoNode.textTracks[i].mode = 'showing';
	  console.log(videoNode.textTracks[i])
   }
  });
  
})()