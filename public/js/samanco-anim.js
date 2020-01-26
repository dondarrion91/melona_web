var width = $("body").width();


$(document).ready(function(){
    

    //segundo carrousel
    
    $(".boton1 #btn-up").css("display","none");
    $(".boton2 #btn-up").css("display","none");
    $(".boton1").click(function(){
        if($(".tarjeta #parrafo-samanco-0").css("display") == "none"){
            
            $(".tarjeta #parrafo-samanco-0").slideDown("slow");
            $(".boton1 #btn-down").css("display","none");
            $(".boton1 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta p").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-0").slideUp("slow");
            $(".boton1 #btn-down").css("display","block");
            $(".boton1 #btn-up").css("display","none");
        }
    });

    $(".boton2").click(function(){
        if($(".tarjeta #parrafo-samanco-1").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-1").slideDown("slow");
            $(".boton2 #btn-down").css("display","none");
            $(".boton2 #btn-up").css("display","block");
            console.log($(".tarjeta #parrafo-samanco").css("display"));
        
        }else if ($(".tarjeta #parrafo-samanco-1").css("display") == "block"){
            console.log("works");
            $(".tarjeta #parrafo-samanco-1").slideUp("slow");
            $(".boton2 #btn-down").css("display","block");
            $(".boton2 #btn-up").css("display","none");
        }
    });

    //primer carrousel


    $(".arrows .fa-angle-up").css("display","none");
    $(".arrows").click(function(){
        if($(".helado-info-body p").css("display") == "none"){
        
            $(".helado-info-body p").slideDown("slow");

            if(width>425){
                $(".helado-info").animate({
                    width: '80%'
                },"slow");
            }else if(width<=425){
                
                $(".helado-info").animate({
                    width: '100%'
                },"slow");
            }

            

            $(".helado-info-body p").animate({
                "font-size": "11px"
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