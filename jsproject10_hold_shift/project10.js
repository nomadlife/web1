const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(e){
  console.log(e);
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));
