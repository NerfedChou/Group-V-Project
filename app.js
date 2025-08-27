const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const buttonPop = document.querySelector('.button-pop');
const closePop = document.querySelector('.close');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})
;loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

buttonPop.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})
closePop.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})