var sliderImages = document.querySelectorAll('.slide');
    var current = 0;
    var temporal = document.getElementsByClassName("picture-name");
    var dots = document.getElementsByClassName("dot");

    // Clear all images.
    function reset() {
        for (var i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
            dots[i].classList.remove("active");
        }        
    }

    // Init slider.
    function startSlide() {
        reset();
        sliderImages[0].style.display = 'block';
        temporal[current].innerHTML = current + 1 + "/" + sliderImages.length;
        dots[current].classList.add("active");
    }
    // Show prew
    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
        temporal[current].innerHTML = current + 1 + "/" + sliderImages.length;
        dots[current].classList.add("active");
    }

    // Show next
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
        temporal[current].innerHTML = current + 1 + "/" + sliderImages.length;
        dots[current].classList.add("active");
    }

    // Left arrow click
    function js_clickleft() {
        if(current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    }

    // Right arrow click
    function js_clickright() {
        if(current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    }
    
    function js_click(n) {
        reset();
        sliderImages[n].style.display = 'block';
        temporal[n].innerHTML = n + 1 + "/" + sliderImages.length;
        dots[n].classList.add("active");
        current = n;
    }

    startSlide(1);
    setInterval(js_clickright,3000);