//slider들 모양(테두리 생성, 공통)
//화이트 헤더
$("#slideWrap .slider a").on('click', function(e){
    e.preventDefault();
    $("#slideWrap .slider a").removeClass('on');
    $(this).addClass('on');    
});

//블루 접시
$(".rotateImage .slider2 a").on('click', function(e){
    e.preventDefault();
    $(".rotateImage .slider2 a").removeClass('on');
    $(this).addClass('on');    
});
//블루 뉴스
$("#news .slider3 a").on('click', function(e){
    e.preventDefault();
    $("#news .slider3 a").removeClass('on');
    $(this).addClass('on');    
});


//header헤더//////////////
//네비 활성화
$("#gnbWrap").on('mouseenter', function(){
    $("#header").addClass('on')
})
$("#header").on('mouseleave', function(){
    $(this).removeClass('on');
})

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

//광고 #slide시작
// 광고 자동 슬라이드와 버튼 슬라이드
let currentIndex = 0; // 현재 활성 슬라이드의 인덱스
let slides = $('#slide ul li'); // 모든 슬라이드 요소들
let totalEventSlides = slides.length; // 전체 슬라이드의 수
let nextIndex;
// 슬라이드 변경 함수
function changeSlide(index) {

    // 현재 활성 슬라이드 제외하고 투명하게 만들기
    slides.eq(currentIndex).animate({ opacity: 0 }, 500);
    
    // 선택한 슬라이드를 서서히 나타나도록 페이드 인
    slides.eq(index).animate({ opacity: 1 }, 500);
    currentIndex = index;

    // 화이트 테두리 버튼
    $("#slide .slider a").removeClass('on')
    $("#slide .slider a:eq("+ index  +")").addClass('on')
}

// 일정 시간마다 자동으로 슬라이드 변경
let timer = setInterval(function() {
    nextIndex = (currentIndex + 1) % totalSlides;
    if ( nextIndex == 4 ) nextIndex = 0
    changeSlide(nextIndex);
}, 3000);

// 슬라이드 제어 버튼 클릭 이벤트
$('#slideWrap .slider a').click(function(){
    clearInterval(timer)
    changeSlide($(this).index());
    
    timer = setInterval(function() {
        nextIndex = (currentIndex + 1) % totalSlides;
        if ( nextIndex == 4 ) nextIndex = 0
        changeSlide(nextIndex);
    }, 4000);
});

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
    $('.mainWrap').fadeOut(300); 
    $(target).fadeIn(300);
});


//pop 인기있는 아이스크림////////////////////
//좌우버튼
$("#popbtn .left").hover(function(){
    $(this).css({backgroundImage:'url(./image/left2.png)'})
}, function(){
    $(this).css({backgroundImage:''})
})
$("#popbtn .right").hover(function(){
    $(this).css({backgroundImage:'url(./image/right2.png)'})
}, function(){
    $(this).css({backgroundImage:''})
})
//pop호버
$("#popWrap .pop").hover(function(){
    $(this).css({backgroundColor:'#FF7070'})
    $(this).find('.price').css({color: '#fff'})
    $(this).find('.arrow a').css({backgroundImage:'url(./image/button2.png)'})

}, function(){
    $(this).css({backgroundColor:''})
    $(this).find('.price').css({color: ''})
    $(this).find('.arrow a').css({backgroundImage:''})
})

// pop 드래그 슬라이드
let isDragging = false; // 드래그 여부
let startX = 0; // 시작 X 좌표
let offsetX = 0; // X 좌표 이동 거리

// 드래그 이벤트 핸들러 추가
$('#viewfive').on('mousedown touchstart', function(event) {
    isDragging = true;
    startX = (event.type === 'mousedown') ? event.pageX : event.originalEvent.touches[0].pageX;
});

// 드래그 중인 상태에서 움직임 감지
$(document).on('mousemove touchmove', function(event) {
    if (!isDragging) return;
    event.preventDefault();
    let currentX = (event.type === 'mousemove') ? event.pageX : event.originalEvent.touches[0].pageX;
    offsetX = currentX - startX;
    $('#viewfive').css('margin-left', currentPosition + offsetX);
});

// 드래그 종료 시 슬라이드 이동 처리
$(document).on('mouseup touchend', function(event) {
    if (!isDragging) return;
    isDragging = false;
    if (Math.abs(offsetX) > slideWidth / 4) {
        if (offsetX < 0) {
            slide("next");
        } else {
            slide("prev");
        }
    } else {
        $('#viewfive').animate({marginLeft: currentPosition}, 300);
    }
    offsetX = 0;
});
// pop 슬라이드
let currentPosition = 0; // 현재 위치
let slideWidth = $('.pop').outerWidth(true); // margin 포함넓이
let totalSlides = $('.pop').length;

// 초기 설정: 맨 뒤의 .pop 아이템을 맨 앞으로 이동
// $('#viewfive').prepend($('.pop:last-child')); //중복
$('#viewfive').css('margin-left', -slideWidth);

// 슬라이드 함수 정의
function slide(direction) {
    if (direction === "next") {
        currentPosition -= slideWidth;
        $('#viewfive').animate({marginLeft: -slideWidth*2}, 300, function() {
                currentPosition = -slideWidth;
                $('#viewfive').append($('.pop:first-child'));
                $('#viewfive').css('margin-left', currentPosition);
        });
    } else {
        $('#viewfive').animate({marginLeft: 0}, 300, function() {
            $('#viewfive').prepend($('.pop:last-child'));
            $('#viewfive').css('margin-left', -slideWidth);
            currentPosition = -slideWidth;
        });
    }
}
// 다음 버튼 클릭
$('#popbtn .right').click(function(e) {
    e.preventDefault();
    slide("next");
});
// 이전 버튼 클릭 
$('#popbtn .left').click(function(e) {
    e.preventDefault();
    slide("prev");
});


//브랜드 스토리//////////////
//창업문의,브랜드소개 버튼 호버
$('#brandStory .btn2 a').mouseenter(function(){
    $(this).css({backgroundColor:'#FFA800', 
                        color:'#FFF',
                        border:'1px solid #FFA800'
                        })
})
$('#brandStory .btn2 a').mouseleave(function(){
    $(this).css({backgroundColor:'', 
                        color:'',
                        border:''
                     })
})
//브랜드스토리배경 커지기 #popular부터 스크롤했을때
$(window).scroll(function() {
    // 현재 화면 크기가 430px 이하인지 확인
    if (window.innerWidth <= 430) {
        return; // 430px 이하일 경우 함수 실행을 중지
    }

    let scrollPos = $(window).scrollTop();
    let popularPos = $('#popular').offset().top;
    let brandStory = $('#brandStory');

    if (scrollPos >= popularPos) {
        let scale = 1 + (scrollPos - popularPos) / 1000; // 배경 이미지의 크기를 조절할 비율
        brandStory.css({
            'background-size': (scale * 100) + '%', // 배경 이미지 크기 조절
            'transition': 'background-size 0.3s ease' // 애니메이션 효과 추가
        });
    } else {
        brandStory.css({
            'background-size': '100%' // 복원
        });
    }
});

//최근소식///////////
//++모바일버전+++
//호버하면 플러스 곱하기, 모바일일땐 비활성화
function applyHoverEffect() {
    if (window.innerWidth > 430) {
        $('.plus').hover(function(){
            $(this).css({
                transition: 'transform 0.2s',
                transform: 'rotate(45deg)'
            });
        }, function(){
            $(this).css({
                transform: 'rotate(0deg)'
            });
        });
    } else {
        $('.plus').off('mouseenter mouseleave');
    }
}
// 초기 페이지 로드 시 함수 실행
applyHoverEffect();

// 광고슬라이드 모바일일때 사진변경
function updateSliderImages() {
    let slides = document.querySelectorAll('#slide img'); // 슬라이드 내의 모든 이미지 선택

    slides.forEach(slide => {
        if (window.innerWidth <= 430) {
            slide.src = './image/mobile1.png'; // 작은 화면용 이미지
        } else {
            slide.src = './image/sl1.png'; // 기본 이미지
        }
    });
}
// 창 크기 변경 시 hover 효과 재설정
$(window).resize(function() {
    applyHoverEffect();
    updateSliderImages();
});
