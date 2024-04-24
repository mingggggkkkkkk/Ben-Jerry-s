//pc 메뉴 활성화
$("#gnbWrap").on('mouseenter', function(){
    $("#header").addClass('on')
})
$("#header").on('mouseleave', function(){
    $(this).removeClass('on');
})

//slider들 모양(테두리 생성, 공통)
//화이트 헤더
$("#slideWrap .slider a").on('click', function(){
    $("#slideWrap .slider a").removeClass('on');
    $(this).addClass('on');    
    
});
//블루 접시
$(".rotateImage .slider2 a").on('click', function(){
    $(".rotateImage .slider2 a").removeClass('on');
    $(this).addClass('on');    
});
//블루 뉴스
$("#news .slider3 a").on('click', function(){
    $("#news .slider3 a").removeClass('on');
    $(this).addClass('on');    
});

//헤더//////////////
//햄버거 플러스로 바꾸기
$('#pic a').last().hover(function(){
    $(this).css({backgroundImage:'url(./image/plus2.png)'})
}, function(){
    $(this).css({backgroundImage:''})

})

//네비 메인오면 따라오기
    $(window).scroll(function() {
        if ($(this).scrollTop() > 807 ) {
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


//best memu/////////////////////
//파란버튼 호버
$('#choco, #berry').hide();

$('#bestMenuWrap .btn').mouseenter(function(){
    $(this).css({backgroundColor:'#FFA800'})
})
$('#bestMenuWrap .btn').mouseleave(function(){
    $(this).css({backgroundColor:'#0038C8'})
})

//회전하는 접시
$('.hideText.slider2 a').click(function(e) {
    e.preventDefault();
    let target = $(this).attr('href');
    let rotateIndex = $(target).index();
    
    $(".rotate div").not(":eq("+ $(this).index() +")").animate({ opacity: 0 })
    $(".rotate div:eq("+ $(this).index() +")").animate({ opacity: 1 })

    $('.rotate').css('transform', 'rotate(' + (-rotateIndex * 120) + 'deg)');

//버튼누르면 설명나타나기
//근데 페이드하면 블락이 자동으로 되나? none이 왜 풀리지
    $('.mainWrap').fadeOut(300); 
    $(target).fadeIn(300);
});


//인기있는 아이스크림////////////////////
//left, right 호버
$('#popbtn .left').mouseenter(function(){
    $(this).css({backgroundImage:'url(./image/left2.png)'})
})
$('#popbtn .left').mouseleave(function(){
    $(this).css({backgroundImage:'url(./image/left.png)'})
})
$('#popbtn .right').mouseenter(function(){
    $(this).css({backgroundImage:'url(./image/right2.png)'})
})
$('#popbtn .right').mouseleave(function(){
    $(this).css({backgroundImage:'url(./image/right.png)'})
})

//pop호버
$("#popWrap .pop").on('mouseenter', function(){
    $(this).css({backgroundColor:'#FF7070'})
    $(this).find('.price').css({color: '#fff'})
    $(this).find('.arrow a').css({backgroundImage:'url(./image/button2.png)'})
})
$("#popWrap .pop").on('mouseleave', function(){
    $(this).css({backgroundColor:'#fff'})
    $(this).find('.price').css({color: '#FFA800'})
    $(this).find('.arrow a').css({backgroundImage:'url(./image/button.png)'})
})

//pop 슬라이드
let currentPosition = 0; // 현재위치
let slideWidth = $('.pop').outerWidth(true); //margin 포함넓이
let totalSlides = $('.pop').length;

// 슬라이드 함수
function slide(direction) {
    if (direction === "next") {
        currentPosition -= slideWidth;
        if (currentPosition < -(totalSlides - 1) * slideWidth) {
            currentPosition = 0;
            $('#viewfive').css('margin-left', currentPosition);
        }
    } else {
        currentPosition += slideWidth;
        if (currentPosition > 0) {
            currentPosition = -(totalSlides - 1) * slideWidth;
            $('#viewfive').css('margin-left', currentPosition);
        }
    }
    $('#viewfive').animate({marginLeft: currentPosition}, 300);
}

// 다음 버튼클릭
$('#popbtn .right').click(function(e) {
    e.preventDefault();
    slide("next");
});

// 이전 버튼클릭
$('#popbtn .left').click(function(e) {
    e.preventDefault();
    slide("prev");
});


//브랜드 스토리//////////////
//창업문의 버튼 호버
$('#brandStory .btn2 a').first().mouseenter(function(){
    $(this).css({backgroundColor:'#0038C8', 
                        color:'#FFF',
                        })
})
$('#brandStory .btn2 a').first().mouseleave(function(){
    $(this).css({backgroundColor:'#fff', 
                        color:'#0038c8',
                        border:'1px solid #0038c8'
                     })
})
//브랜드소개 버튼
$('#brandStory .btn2 a').last().mouseenter(function(){
    $(this).css({backgroundColor:'#FFA800', 
                        color:'#FFF',
                        border:'1px solid #FFA800'})
})
$('#brandStory .btn2 a').last().mouseleave(function(){
    $(this).css({backgroundColor:'#0038C8', 
                        color:'#fff',
                        border:'1px solid #0038c8'
                     })
})


//최근소식///////////
//호버하면 플러스 곱하기
$('.plus').hover(function(){
    $(this).css({
        transition: 'transform 0.2s',
        transform: 'rotate(45deg)'
    });
}, function(){
    $(this).css({
        transform: 'rotate(0deg)'
    });
})





