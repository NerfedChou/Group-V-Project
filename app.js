const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const buttonPop = document.querySelector('.button-pop');
const closePop = document.querySelector('.close');

const formBlur = document.querySelector('.hidden-blur');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})
;loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

buttonPop.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    formBlur.classList.add('active-blur');
})
closePop.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    formBlur.classList.remove('active-blur');

})