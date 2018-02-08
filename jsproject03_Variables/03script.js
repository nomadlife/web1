const inputs = document.querySelectorAll('.controls input');
// console.log(inputs,"test1:inputs");

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(suffix,"test2:suffix");
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
  console.log(this.name);
}

inputs.forEach(input => input.addEventListener('change',handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate))
