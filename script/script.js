var sliderFig = document.querySelector('#slider figure');
var sliderImgs = sliderFig.children;
var sliderNav = document.querySelector('.slider-nav');
var sliderNavButtons = Array.from(sliderNav.children);
console.log(sliderNavButtons);

/**Remove style for button */
const buttonStyleRemove = () => {
    for (let j = 0; j < sliderNavButtons.length; j++) {
        const elementInner = sliderNavButtons[j];
        /*reset the background filled */
        elementInner.classList.remove('slider-nav-filled');
    }
}

/*Generate event for each buttons */
for (let i = 0; i < sliderNavButtons.length; i++) {
    const element = sliderNavButtons[i];
    /*remove the background filled */
    element.classList.remove('slider-nav-filled');
    let distance = i * -100 + "%";
    console.log(distance);
    element.addEventListener("click", function(e) {
        buttonStyleRemove();
        /*Add background filled on the target button*/
        e.target.classList.add('slider-nav-filled');
        sliderFig.setAttribute('style', 'left: ' + distance + ' !important;');
    });
}

/*Make the slider run again when been clicked */
setInterval(function() {
    sliderFig.setAttribute('style', "left: 0% !important; animation: sliding 10s linear 0s infinite;");
    buttonStyleRemove();
}, 10000);