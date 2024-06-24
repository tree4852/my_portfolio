$(function(){
    $(window).on('scroll', function (){ //this개념조심하기
        let scrpos = $(this).scrollTop();
        if(scrpos > 80 ){
            $("#hd").addClass('scroll')
        }
        else{
            $("#hd").removeClass('scroll')
        }
          
        // $("body").attr("data-scrollps", $(this).scrollTop()) //내가 지어쓰는 속성은 data- 써서 만든다 여기서 scrollps는 변수가된다.
 
    })
})
