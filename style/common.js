function resizing() {

}
resizing();
$(window).on('resize', function(){
    //pc
    if( $(window).innerWidth() >= 1600 ){
        $('#gnbWrap .sub').show();
        $('#gnbWrap').removeClass('mobile')
        $('.close').hide();
    }
    //mobile
    else {
        $("#gnbWrap .sub").hide();
        $(".open").show();
        $(".close").hide();
    }
})

//pc menu
$("#gnbWrap").on('mouseenter', function(){
    $("#header").addClass('on')
})
$("#header").on('mouseleave', function(){
    $(this).removeClass('on');
})

//mobile menu
$(".open").on('click', function(){
    $("#gnbWrap").addClass('mobile');
    $(this).hide();
    $('.close').show();
})
$(".close").on('click', function(){
    $("#gnbWrap").removeClass("mobile");
    $(this).hide();
    $('.open').show();
    $('#gnbWrap .snb').hide();
})

$(document).on('click', '#gnbWrap.mobile > ul > li', function(){
    $(this).children(".snb").slideToggle()
            .parents().siblings().children('.snb').slideUp();
})
