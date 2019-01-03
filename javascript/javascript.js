
    
    // html dom 이 다 로딩된 후 실행된다.
    $(document).ready(function(){
        // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
        $(".menu>a").click(function(){
            var submenu = $(this).next("ul");
 
            // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
        });
    });

    $(document).ready(function(){
    $(".art_issue>a").click(function(){
        var contents = $(this).next("div");

        if( contents.is(":visible") ){
            contents.slideUp();
        }else{
            contents.slideDown();
        }
    });
  });

    $(document).ready(function(){
    $(".art_issue_audio>a").click(function(){
        var contents = $(this).next("div");

        if( contents.is(":visible") ){
            contents.slideUp();
        }else{
            contents.slideDown();
        }
    });
  });



    // Create a clone of the menu, right next to original.
$('.header').addClass('original').clone().insertAfter('.header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
    $('.img_title').css('visibility','hidden');
    $('.img_title2').css('visibility','visible');
    // $('.a_title').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
    $('.img_title').css('visibility','visible');
    $('.img_title2').css('visibility','hidden');
    // $('a_title').css('visibility','visible');
  };
};


 // $(function() {
 //   // 보이기 | 숨기기
 //   $(window).scroll(function() {
 //      if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다.
 //            $('.foot_img').fadeIn();
 //            } else {
 //            $('.foot_img').fadeOut();
 //      }
 //   });
 //   // 버튼 클릭시
 //   $(".foot_img").click(function() {   
 //   $('html, body').animate({
 //     scrollTop : 0    // 0 까지 animation 이동합니다.
 //    }, 400);          // 속도 400
 //    return false;
 //    });
 //  });



