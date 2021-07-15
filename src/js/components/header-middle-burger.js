const menu_middle = document.querySelector('.header-middle__menu');
const burger_middle = document.querySelector('.header-middle-burger');
const btn_middle_close = document.querySelector('.header-middle-close');
const body = document.body;

burger_middle.addEventListener('click', showMenuMiddle);
btn_middle_close.addEventListener('click', hideMenuMiddle);

let keys = {
	ESC: 27,
};

let previousActiveElement;

function showMenuMiddle() {
  menu_middle.classList.add('header-middle__menu--active');
  previousActiveElement = document.activeElement;

  setTimeout(() => {
		btn_middle_close.focus();
	}, 100);

  document.addEventListener('keydown', (e) => {
		if (e.keyCode == keys.ESC) {
			hideMenuMiddle();
		}
	});
}

function hideMenuMiddle() {
  menu_middle.classList.remove('header-middle__menu--active');

  setTimeout(() => {
		previousActiveElement.focus();
	}, 100);
}
