const inputs = document.querySelectorAll('.controls input');
console.log(inputs,"test1:inputs");

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(this.value, suffix,"test2:suffix");
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
  console.log(this.name);
}

fetch('project11.json')
	.then(function(response) {
	return response.json();
	})
	.then(function(myJson) {
	var project = myJson.project11;
	   var output = '';
		for(var i=0;i<project.length;i++){
			output += 
			'<div class="thumbnail"><a href="' + project[i].location + '"><img src="' + project[i].image + '"><div class="caption"><h2>'+ project[i].title +'</h2></div></a></div>';
			}
		document.getElementById('projects').innerHTML = output;
	});
	
inputs.forEach(input => input.addEventListener('change',handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate))