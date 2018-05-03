	'use strict'
  var URL = window.URL || window.webkitURL
  
  function playSelectedFile() {
    var file = this.files[0]
    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  
  function addSubtitle1() {
	var file = this.files[0]
    var trackNode = document.querySelector('#track1')
	var fileURL = URL.createObjectURL(file)
    trackNode.src = fileURL
	showAll()
  }
  
  function addSubtitle2() {
	var file = this.files[0]
    var trackNode = document.querySelector('#track2')
	var fileURL = URL.createObjectURL(file)
    trackNode.src = fileURL
	showAll()
  }

  function showAll(){
   for (var i = 0; i < videoNode.textTracks.length; i++) {
      videoNode.textTracks[i].mode = 'showing';
   }
  }
  
  var videoNode = document.querySelector('video')
  var inputNode = document.querySelector('#file-loader')
  var textInputNode1 = document.querySelector('#text-loader-1')
  var textInputNode2 = document.querySelector('#text-loader-2')
  var showwAllButton = document.querySelector('#show-all')
  
  inputNode.addEventListener('change', playSelectedFile, false)
  textInputNode1.addEventListener('change', addSubtitle1, false)
  textInputNode2.addEventListener('change', addSubtitle2, false)
  showwAllButton.addEventListener('click', showAll);
  
  
