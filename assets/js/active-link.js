const headerLinks = [...document.getElementsByClassName('nav-item')];

headerLinks.forEach(elem => {

	elem.addEventListener('click', function(){

		headerLinks.forEach(item => {
			item.classList.remove('nav-item_active');
		})

		this.classList.add('nav-item_active');
	});

});

headerLinks[0].classList.add('nav-item_active');
