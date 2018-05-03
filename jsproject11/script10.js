	'use strict'
  var URL = window.URL || window.webkitURL
  
  function attachFile() {
	var target = this.getAttribute('target')
    var file = this.files[0]
    var fileURL = URL.createObjectURL(file)
	var targetNode = document.querySelector(`${target}`)
    targetNode.src = fileURL
	if (target.includes('track')){showAll()}
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
  
  

  
