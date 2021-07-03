let position = 0;
const nextSlide = function () {
    // grab element from DOM
    const imageSlider = document.getElementById('imageSliderManual');
    // decrement the position
 
    if (position > -2500){
        position -= 500;
        // translate the image based on current position
        imageSlider.style.transform =`translateX(${position}px)`;
    }
}

const previousSlide = function () {
    // grab element from DOM
    const imageSlider = document.getElementById('imageSliderManual');
    // decrement the position
    
    if (position < 0){
        position += 500;
        // translate the image based on current position
        imageSlider.style.transform =`translateX(${position}px)`;
    }
}