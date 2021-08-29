const images = document.querySelectorAll('.modal-work__preview .modal-work__photo img');
const sliderline = document.querySelector('.modal-work__photo');

let counter = 0
let width


function init() {
    width = document.querySelector('.modal-work').offsetWidth;
    
    sliderline.style.width = width*images.length +'px';
    images.forEach(item =>{
        item.style.width= width + 'px'
    })
    console.log(width)
    
}

init()