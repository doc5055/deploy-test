const quicklinks_burger01 = document.querySelector('.quicklinks-burger--01');
const quicklinks_burger02 = document.querySelector('.quicklinks-burger--02');
const quicklinks_burger03 = document.querySelector('.quicklinks-burger--03');
const quicklinks_btn_close01 = document.querySelector('.quicklinks-btn-close01');
const quicklinks_btn_close02 = document.querySelector('.quicklinks-btn-close02');
const quicklinks_btn_close03 = document.querySelector('.quicklinks-btn-close03');
const quicklinks_menu01 = document.querySelector('.quicklinks__list--01');
const quicklinks_menu02 = document.querySelector('.quicklinks__list--02');
const quicklinks_menu03 = document.querySelector('.quicklinks__list--03');

quicklinks_burger01.addEventListener('click', showMenu01);
quicklinks_burger02.addEventListener('click', showMenu02);
quicklinks_burger03.addEventListener('click', showMenu03);
quicklinks_btn_close01.addEventListener('click', hideMenu01);
quicklinks_btn_close02.addEventListener('click', hideMenu02);
quicklinks_btn_close03.addEventListener('click', hideMenu03);

let keys = {
	ESC: 27,
};

let previousActiveElement;

function showMenu01() {
  document.querySelectorAll('.quicklinks__list').forEach(el => el.classList.remove('quicklinks__list--active'));
  quicklinks_menu01.classList.add('quicklinks__list--active');
  previousActiveElement = document.activeElement;

  setTimeout(() => {
		quicklinks_btn_close01.focus();
	}, 100);

  document.addEventListener('keydown', (e) => {
		if (e.keyCode == keys.ESC) {
			hideMenu01();
		}
	});
}

function showMenu02() {
  document.querySelectorAll('.quicklinks__list').forEach(el => el.classList.remove('quicklinks__list--active'));
  quicklinks_menu02.classList.add('quicklinks__list--active');
  previousActiveElement = document.activeElement;

  setTimeout(() => {
		quicklinks_btn_close02.focus();
	}, 100);

  document.addEventListener('keydown', (e) => {
		if (e.keyCode == keys.ESC) {
			hideMenu02();
		}
	});
}

function showMenu03() {
  document.querySelectorAll('.quicklinks__list').forEach(el => el.classList.remove('quicklinks__list--active'));
  quicklinks_menu03.classList.add('quicklinks__list--active');
  previousActiveElement = document.activeElement;

  setTimeout(() => {
		quicklinks_btn_close03.focus();
	}, 100);

  document.addEventListener('keydown', (e) => {
		if (e.keyCode == keys.ESC) {
			hideMenu03();
		}
	});
}

function hideMenu01() {
  quicklinks_menu01.classList.remove('quicklinks__list--active');

  setTimeout(() => {
		previousActiveElement.focus();
	}, 100);
}

function hideMenu02() {
  quicklinks_menu02.classList.remove('quicklinks__list--active');

  setTimeout(() => {
		previousActiveElement.focus();
	}, 100);
}

function hideMenu03() {
  quicklinks_menu03.classList.remove('quicklinks__list--active');

  setTimeout(() => {
		previousActiveElement.focus();
	}, 100);
}
