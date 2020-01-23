$(document).ready(function(){
    console.log($(".tarjeta #parrafo-samanco").css("display"));

    
    $(".boton #btn-up").css("display","none");
    $(".boton").click(function(){
        if($(".tarjeta #parrafo-samanco").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco").slideDown("slow");
            $(".boton #btn-down").css("display","none");
            $(".boton #btn-up").css("display","block");
            console.log($(".tarjeta #parrafo-samanco").css("display"));
        
        }else if ($(".tarjeta #parrafo-samanco").css("display") == "block"){
            console.log("works");
            $(".tarjeta #parrafo-samanco").slideUp("slow");
            $(".boton #btn-down").css("display","block");
            $(".boton #btn-up").css("display","none");
        }
    });

    $(".arrows .fa-angle-up").css("display","none");
    $(".arrows").click(function(){
        if($(".helado-info-body p").css("display") == "none"){
        
            $(".helado-info-body p").slideDown("slow");
            $(".helado-info").animate({
                
                width: '90%'
            },"slow");
            $(".helado-info-body p").animate({
                "font-size": "14px"
            },"slow");
            $(".helado-info img").animate({
                "margin-top": "0px"
            },"slow");
            $(".arrows .fa-angle-down").css("display","none");
            $(".arrows .fa-angle-up").css("display","block");
            
        
        }else if ($(".helado-info-body p").css("display") == "block"){
            console.log("works");
            $(".helado-info-body p").slideUp("slow");
            $(".helado-info").animate({
                width: '40%'
            },"slow");
            $(".helado-info-body p").animate({
                "font-size": "0px"
            },"slow");
            $(".helado-info img").animate({
                "margin-top": "-30px"
            },"slow");
            $(".arrows .fa-angle-down").css("display","block");
            $(".arrows .fa-angle-up").css("display","none");
        }
    });
    
    
})