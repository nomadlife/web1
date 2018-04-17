const triggers =    document.querySelectorAll('.cool > li'); //li
const nav =         document.querySelector('.top'); //nav

function handleEnter(){
    this.classList.add('trigger-enter');
}

function handleLeave(){
    console.log('Leave!');
    this.classList.remove('trigger-enter');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));

