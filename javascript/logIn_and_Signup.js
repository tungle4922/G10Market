const modal = document.querySelectorAll('.modal');
const regBtn = document.querySelector('.header__signin');
const logBtn = document.querySelector('.header__login');
const regModal = document.querySelector('.modal_reg');
const logModal = document.querySelector('.modal_log');
const regFormClose = document.querySelector('.form_close-reg');
const logFormClose = document.querySelector('.form_close-log');
const swRegBtn = document.querySelector('.switch_to_reg-btn');
const swLogBtn = document.querySelector('.switch_to_log-btn');

//hiện modal đk, tắt modal đn khi click nút đk trên header
regBtn.onclick = function () {
    regModal.classList.add('open');
    logModal.classList.remove('open');
}

//hiện modal đn, tắt modal đk khi click nút đm trên header
logBtn.onclick = function () {
    logModal.classList.add('open');
    regModal.classList.remove('open');
}

//tắt md đk khi click x
regFormClose.onclick = function () {
    regModal.classList.remove('open');
}

//tắt md đn khi click x
logFormClose.onclick = function () {
    logModal.classList.remove('open');
}

// chuyển sang modal đăng ký khi đang ở modal đăng nhập
swRegBtn.onclick = function () {
    regModal.classList.add('open');
    logModal.classList.remove('open');
}

// chuyển sang modal đăng nhập khi đang ở modal đăng ký
swLogBtn.onclick = function () {
    logModal.classList.add('open');
    regModal.classList.remove('open');
}

