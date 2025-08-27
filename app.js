const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const buttonPop = document.querySelectorAll('.button-pop');
const closePop = document.querySelector('.close');

const formBlur = document.querySelector('.hidden-blur');

const sidebar = document.querySelector('.sidebar');
const sideBar = document.getElementById('side-bar');
const sidebarClose = document.getElementById('sidebarclose');
const hamburger = document.querySelector('.hamburger');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})
;loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

buttonPop.forEach(btn => {
    btn.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        formBlur.classList.add('active-blur');
    });
});
closePop.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    formBlur.classList.remove('active-blur');

})

sideBar.addEventListener('click', () => {
    sidebar.style.display = 'flex';
    hamburger.style.display = 'none';

})
sidebarClose.addEventListener('click', () => {
    sidebar.style.display = 'none';
    hamburger.style.display = 'flex';
})