/**
 * @author Nguyễn Thanh Nhật Quang <six3up@gmail.com>
 * version 1.0
 */

var sliderImages = document.getElementsByClassName("slide"); // Pick first image.
var current = 0;
var temporal = document.getElementsByClassName("picture-name"); // Save the selected image.
var dots = document.getElementsByClassName("dot-picture"); // Identify large image in small image.

/**
 * reset Clear all images.
 */
function reset() {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none'; // Clear all images.
        dots[i].classList.remove("active"); // Clear class active (CSS)
    }        
}

/**
 * js_startSlide Init slider default slide 1.
 */
function js_startSlide() {
    reset();
    sliderImages[0].style.display = 'block'; // Show image 1.
    temporal[current].innerHTML = current + 1 + "/" + sliderImages.length; // Print number image is in current location.
    dots[current].classList.add("active"); // Add class active dot current image.
}

/**
 * slideLeft Identify image behind.
 */
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block'; // Show image when click left.
    current--; // Reduce dot.
    temporal[current].innerHTML = current + 1 + "/" + sliderImages.length; // Print number image is in current location.
    dots[current].classList.add("active"); // Add class active (CSS) in current dot.
}

/**
 * slideRight Identify image ahead.
 */
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block'; // Show image when right left.
    current++; // Increase dot.
    temporal[current].innerHTML = current + 1 + "/" + sliderImages.length; // Print number image is in current location.
    dots[current].classList.add("active"); // Add class active (CSS) in current dot.
}

/**
 * Left arrow click.
 */
function js_clickLeft() {
    /*
        If current = 0 (first image) => current = 5.
        when click function slideLeft() => current = 4 (show last image). 
    */
    if(current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
}

/**
 * Right arrow click.
 */
function js_clickRight() {
    /*
        If current = 4 (last image) => current = -1.
        when click function slideRight() => current = 0 (show first image). 
    */
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
}

/**
 * @param int n Value form HTML in event js_click,show image when click image small.
 * 
 */
function js_click(n) {
    reset();
    sliderImages[n].style.display = 'block'; // Show image when click random.
    temporal[n].innerHTML = n + 1 + "/" + sliderImages.length; // Print number image is in current location.
    dots[n].classList.add("active"); // Add class active (CSS) in current dot.
    current = n; // Update current for automatic slide.
}

js_startSlide();
setInterval(js_clickRight,3000); // Automatic slide.