const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
  let inBetween = false;
  if (e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('inBetween border-------');
      }
      if(inBetween){
        checkbox.checked = true;
      }
    })
  }
  if(this.checked){
    lastChecked = this;
    console.log("lastChecked:",lastChecked);
  }
  if(lastChecked){
    console.log("lastChecked:true");
  }
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));
