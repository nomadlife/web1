fetch('projectlist.json')
	.then(function(response) {
	return response.json();
	})
	.then(function(myJson) {
	var project = myJson.projects;
	   var output = '';
		for(var i=0;i<project.length;i++){
			output += 
			'<div class="thumbnail"><a href="' + project[i].location + '"><img src="' + project[i].image + '"><div class="caption"><h2>'+ project[i].title +'</h2></div></a></div>';
			}
		document.getElementById('projects').innerHTML = output;
	});
