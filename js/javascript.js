// aos 애니메이션 지속 시간
AOS.init({
    duration: 700,
})

let imageIndex = 0;
let postion = 0;

const IMAGE_WIDTH = 300;
const btnPrevious = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const images = document.querySelector(".images")

$(function() {
    $('.mainSlide').slick({
        vertical : false,
        arrows : true,
        prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
		nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
        dotsClass : "slick-dots",
        pauseOnHover : true,
        prevArrow: $('#aro1_prev'),
		nextArrow: $('#aro1_next'),

    });
});
