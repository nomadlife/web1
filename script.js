var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   var response = JSON.parse(xhttp.responseText);
		   var project = response.projects;
		   var output = '';
			for(var i=0;i<project.length;i++){
				output += 
				'<div class="col-sm-4 col-lg-2"><div class="thumbnail"><a href="' + project[i].location + '"><img src="' + project[i].image + '" class="img-responsive"><div class="caption"><h2>'+ project[i].title +'</h2></div></a></div></div>';
				}
			document.getElementById('projects').innerHTML = output;
		   
		}
	};
	
	xhttp.open("GET", "projectlist.json", true);
	xhttp.send();