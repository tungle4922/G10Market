const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const first = $('.first');
const first2 = $('.first2');

const sliders = $$('.slider__img');
const circles = $$('.slider_circle-icon');
const sliders2 = $$('.slider__img2');
const circles2 = $$('.slider_circle-icon2');

const circleActive = $('.slider_circle-icon.active');
const circleActive2 = $('.slider_circle-icon2.active');

const nextBtn = $('.angle_right');
const prevBtn = $('.angle_left');
currentIndex = 0;
currentIndex2 = 0;

function radio1() {
    first.classList.add('radio1');
    first.classList.remove('radio2');
    first.classList.remove('radio3');
    first.classList.remove('radio4');
};
function radio2() {
    first.classList.add('radio2');
    first.classList.remove('radio1');
    first.classList.remove('radio3');
    first.classList.remove('radio4');
};
function radio3() {
    first.classList.add('radio3');
    first.classList.remove('radio2');
    first.classList.remove('radio1');
    first.classList.remove('radio4');
};
function radio4() {
    first.classList.add('radio4');
    first.classList.remove('radio3');
    first.classList.remove('radio2');
    first.classList.remove('radio1');
};

function radio1_2() {
    first2.classList.add('radio1');
    first2.classList.remove('radio2');
    first2.classList.remove('radio3');
    first2.classList.remove('radio4');
};
function radio2_2() {
    first2.classList.add('radio2');
    first2.classList.remove('radio1');
    first2.classList.remove('radio3');
    first2.classList.remove('radio4');
};
function radio3_2() {
    first2.classList.add('radio3');
    first2.classList.remove('radio2');
    first2.classList.remove('radio1');
    first2.classList.remove('radio4');
};
function radio4_2() {
    first2.classList.add('radio4');
    first2.classList.remove('radio3');
    first2.classList.remove('radio2');
    first2.classList.remove('radio1');
};

// xử lý sự kiện ở slider 1
circles.forEach((circle, index) => {
    const slider = sliders[index];
    circle.onclick = function () {
        // gỡ bỏ active cho class cũ
        $('.slider_circle-icon.active').classList.remove('active');

        //thêm active cho class mới
        this.classList.add('active');

        if (index === 0) radio1();
        else if (index === 1) radio2();
        else if (index === 2) radio3();
        else if (index === 3) radio4();
        currentIndex = index;
        // console.log(currentIndex);
    }
})

const autoSlider = setInterval(autoClickNextBtn, 7000); //tự động next slide sau mỗi 10s (slider 1)

function autoClickNextBtn() {
    // currentIndex === sliders.length - 1 thì giảm currentIndex về -1 để index reset về 0 khi click
    if (currentIndex === sliders.length - 1) {
        currentIndex = -1;
    }
    const circle1 = circles[currentIndex + 1];
    // gỡ bỏ active cho class cũ
    $('.slider_circle-icon.active').classList.remove('active');
    //thêm active cho class mới
    circle1.classList.add('active');

    currentIndex++;
    // console.log(currentIndex);
    if (currentIndex === 0) radio1();
    else if (currentIndex === 1) radio2();
    else if (currentIndex === 2) radio3();
    else if (currentIndex === 3) radio4();
}

nextBtn.onclick = function () {
    // currentIndex === sliders.length - 1 thì giảm currentIndex về -1 để index reset về 0 khi click
    if (currentIndex === sliders.length - 1) {
        currentIndex = -1;
    }
    const circle1 = circles[currentIndex + 1];
    // gỡ bỏ active cho class cũ
    $('.slider_circle-icon.active').classList.remove('active');
    //thêm active cho class mới
    circle1.classList.add('active');

    currentIndex++;
    // console.log(currentIndex);
    if (currentIndex === 0) radio1();
    else if (currentIndex === 1) radio2();
    else if (currentIndex === 2) radio3();
    else if (currentIndex === 3) radio4();
}

prevBtn.onclick = function () {
    if (currentIndex < 1) {
        currentIndex = sliders.length;
    }
    const circle1 = circles[currentIndex - 1];

    // gỡ bỏ active cho class cũ
    $('.slider_circle-icon.active').classList.remove('active');

    //thêm active cho class mới
    circle1.classList.add('active');

    currentIndex--;
    // console.log(currentIndex);
    if (currentIndex === 0) radio1();
    else if (currentIndex === 1) radio2();
    else if (currentIndex === 2) radio3();
    else if (currentIndex === 3) radio4();
}

// Xử lý sự kiện ở slider 2
circles2.forEach((circle, index) => {
    circle.onclick = function () {
        // gỡ bỏ active cho class cũ
        $('.slider_circle-icon2.active').classList.remove('active');

        //thêm active cho class mới
        this.classList.add('active');

        if (index === 0) radio1_2();
        else if (index === 1) radio2_2();
        else if (index === 2) radio3_2();
        else if (index === 3) radio4_2();
        currentIndex2 = index;
        // console.log(currentIndex2);
    }
})

const autoSlider2 = setInterval(autoClickNextBtn2, 4000); //tự động next slide sau mỗi 10s (slider 1)

function autoClickNextBtn2() {
    // currentIndex2 === sliders.length - 1 thì giảm currentIndex về -1 để index reset về 0 khi click
    if (currentIndex2 === sliders2.length - 1) {
        currentIndex2 = -1;
    }
    const circle1 = circles2[currentIndex2 + 1];
    // gỡ bỏ active cho class cũ
    $('.slider_circle-icon2.active').classList.remove('active');
    //thêm active cho class mới
    circle1.classList.add('active');

    currentIndex2++;
    // console.log(currentIndex);
    if (currentIndex2 === 0) radio1_2();
    else if (currentIndex2 === 1) radio2_2();
    else if (currentIndex2 === 2) radio3_2();
    else if (currentIndex2 === 3) radio4_2();
}
