const triggers =    document.querySelectorAll('.cool > li'); //li
const background =  document.querySelector('.dropdownBackground'); //div
const nav =         document.querySelector('.top'); //nav

function handleEnter(){
    this.classList.add('trigger-enter');
    background.classList.add('open');
    
    const dropdown = this.querySelector('.dropdown'); //div
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(){
    console.log('Leave!');
    this.classList.remove('trigger-enter');
    background.classList.remove('open');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));
