//pc 메뉴 활성화
$("#gnbWrap").on('mouseenter', function(){
    $("#header").addClass('on')
})
$("#header").on('mouseleave', function(){
    $(this).removeClass('on');
})

//네비 메인오면 따라오기
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500 ) {
            $('#header').css({
                position: 'fixed',
                backgroundColor: '#0038C8'
            });
        } else {
            $('#header').css({
                position: 'absolute',
                backgroundColor: 'transparent'
            });
        }
    });




//slider들 모양(테두리 생성)
$(".slider a").on('click', function(){
    $(this).css({border: "1px solid #000"})
})

// 헤더 자동 슬라이드와 버튼 슬라이드
$(document).ready(function(){
    let currentIndex = 0;
    let slides = $('#slide ul li');
    let totalSlides = slides.length;

    function changeSlide(index) {
        slides.removeClass('active').hide();
        slides.eq(index).fadeIn().addClass('active');
        currentIndex = index;
    }

    function moveToSlide(index) {
        slides.hide().eq(index).fadeIn().addClass('active');
        currentIndex = index;
    }

    $('#slideWrap .slider a').click(function(){
        let index = $(this).index();
        changeSlide(index);
    });

    setInterval(function() {
        let nextIndex = (currentIndex + 1) % totalSlides;
        changeSlide(nextIndex);
    }, 5000);
})