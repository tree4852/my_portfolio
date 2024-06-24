$(function(){
    $(window).on('scroll', function (){ //this개념조심하기
        let scrpos = $(this).scrollTop();
        if(scrpos > 80 ){
            $("#hd").addClass('bg-dark border-bottom border-white').removeClass('bg-white')
        }
        else{
            $("#hd").removeClass('bg-dark border-bottom border-white').addClassClass('bg-white')
        }
          
        // $("body").attr("data-scrollps", $(this).scrollTop()) //내가 지어쓰는 속성은 data- 써서 만든다 여기서 scrollps는 변수가된다.
 
    })
})
