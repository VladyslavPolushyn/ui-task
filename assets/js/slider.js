let slideIndex = 1;

const changeSlide = n => {
	showSlides(slideIndex += n);
}

const currentSlide = n => {
	showSlides(slideIndex = n);
}

const showSlides = n => {
	const sliderItems = document.getElementsByClassName('slide');
	const sliderDots = document.getElementsByClassName('dot');

	if (n > sliderItems.length) {
		slideIndex = 1;
	}
	else if (n < 1) {
		slideIndex = sliderItems.length;
	}

	for (let i = 0; i < sliderItems.length; i++) {
      sliderItems[i].style.display = "none";
  }

  for (let i = 0; i < sliderDots.length; i++) {
      sliderDots[i].className = sliderDots[i].className.replace(" dot_active", "");
  }
  sliderItems[slideIndex-1].style.display = "block";
  sliderDots[slideIndex-1].className += " dot_active";

}

showSlides(slideIndex);