const menu_bottom = document.querySelector('.header-bottom__menu');
const burger_bottom = document.querySelector('.header-bottom-burger');
const btn_bottom_close = document.querySelector('.header-bottom-close');
const body = document.body;

burger_bottom.addEventListener('click', showMenuBottom);
btn_bottom_close.addEventListener('click', hideMenuBottom);

let keys = {
	ESC: 27,
};

let previousActiveElement;

function showMenuBottom() {
  menu_bottom.classList.add('header-bottom__menu--active');
  previousActiveElement = document.activeElement;

  setTimeout(() => {
		btn_bottom_close.focus();
	}, 100);

  document.addEventListener('keydown', (e) => {
		if (e.keyCode == keys.ESC) {
			hideMenuBottom();
		}
	});
}

function hideMenuBottom() {
  menu_bottom.classList.remove('header-bottom__menu--active');

	setTimeout(() => {
		previousActiveElement.focus();
	}, 100);
}
