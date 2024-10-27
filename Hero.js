const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const hero = document.getElementById('hero');
const close = document.getElementById('close')


if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
 });
}

if (hero) {
    hero.addEventListener('click', () => {
        nav.classList.remove('active');
});
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
});
}
 
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};
const loginLink = document.querySelector('.login-link');  
loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

