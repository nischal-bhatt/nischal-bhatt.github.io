const butt = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

butt.addEventListener('click', () => {
	popup.style.display = 'block';
});

close.addEventListener('click', () => {
	popup.style.display = 'none';
});

//popup.addEventListener('click', ()=> {
//	 popup.style.display = 'none';
//});