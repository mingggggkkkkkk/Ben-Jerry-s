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


//인기있는 아이스크림////////////////////
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
//창업문의 버튼 호버
$('#brandStory .btn2 a').first().mouseenter(function(){
    $(this).css({backgroundColor:'#0038C8', 
                        color:'#FFF',
                        })
})
$('#brandStory .btn2 a').first().mouseleave(function(){
    $(this).css({backgroundColor:'', 
                        color:'',
                        border:''
                     })
})
//브랜드소개 버튼
$('#brandStory .btn2 a').last().mouseenter(function(){
    $(this).css({backgroundColor:'#fff', 
                        color:'#0038c8',
                        border:'1px solid #0038c8'})
})
$('#brandStory .btn2 a').last().mouseleave(function(){
    $(this).css({backgroundColor:'', 
                        color:'',
                        border:''
                     })
})
//브랜드스토리배경 커지기 #popular부터 스크롤했을때
$(window).scroll(function() {
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
            'background-size': '100%' //복원
        });
    }
});


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