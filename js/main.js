
 $(document).ready(function(){
  
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.btn-arriba').fadeIn();
            } else {
                $('.btn-arriba').fadeOut();
            }
        });
  
        $('.btn-arriba').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
  
    });