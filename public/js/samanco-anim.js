

// $(window).resize(function(){
//     let width = $("body").width();
//     //cambio de ancho
//     if (width > 425) {
//         $(".helado-info").animate({
//             width: '20%'
//         }, "slow");
//     } else if (width <= 425) {


//         $(".helado-info").animate({
//             width: '40%'
//         }, "slow");
//     }
// });

$(document).ready(function(){
    
    


    //segundo carrousel
    
    $(".boton1 #btn-up").css("display","none");
    $(".boton2 #btn-up").css("display","none");
    $(".boton-yomoite #btn-up").css("display","none");

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

    $(".boton-yomoite").click(function(){
        if($(".tarjeta #parrafo-samanco-yomoite").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-yomoite").slideDown("slow");
            $(".boton-yomoite #btn-down").css("display","none");
            $(".boton-yomoite #btn-up").css("display","block");
            console.log($(".tarjeta #parrafo-samanco-yomoite").css("display"));
        
        }else if ($(".tarjeta #parrafo-samanco-yomoite").css("display") == "block"){
            console.log("works");
            $(".tarjeta #parrafo-samanco-yomoite").slideUp("slow");
            $(".boton-yomoite #btn-down").css("display","block");
            $(".boton-yomoite #btn-up").css("display","none");
        }
    });

    //primer carrousel


    $(".arrows .fa-angle-up").css("display","none");
    $(".arrows").click(function(){
        if($(".helado-info-body p").css("display") == "none"){
            let ancho = $("body").width();
            $(".helado-info-body p").slideDown("slow");

            if(ancho>425 && ancho <= 768){
                $(".helado-info").animate({
                    width: '80%'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "8px"
                },"slow");

            }else if(ancho<=425){
                
                $(".helado-info").animate({
                    width: '100%'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "8px"
                },"slow");

            }else if(ancho > 768 && ancho<1440){
                $(".helado-info").animate({
                    width: '40%'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "16px"
                },"slow");
            }else if(ancho >=1440){
                $(".helado-info").animate({
                    width: '40%',
                    height: '600px'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "22px"
                },"slow");
            }



            $(".helado-info img").animate({
                "margin-top": "0px"
            },"slow");


            $(".arrows .fa-angle-down").css("display","none");
            $(".arrows .fa-angle-up").css("display","block");
            
        
        }else if ($(".helado-info-body p").css("display") == "block"){
            console.log("works");
            $(".helado-info-body p").slideUp("slow");
            let ancho = $("body").width();
            if(ancho>425 && ancho<=768){
                $(".helado-info").animate({
                    width: '20%'
                },"slow");

                $(".helado-info img").animate({
                    "margin-top": "-30px"
                },"slow");
            }else if(ancho<=425){
                
                $(".helado-info").animate({
                    width: '40%'
                },"slow");

                $(".helado-info img").animate({
                    "margin-top": "-30px"
                },"slow");
            }else if(ancho>768 && ancho<1440){
                $(".helado-info").animate({
                    width: '25%'
                },"slow");

                $(".helado-info img").animate({
                    "margin-top": "-60px"
                },"slow");
            }else if(ancho >= 1440){
                $(".helado-info img").animate({
                    "margin-top": "-120px"
                },"slow");

                $(".helado-info").animate({
                    width: '20%',
                    height: '300px'
                },"slow");
            }

            

            
            $(".helado-info-body p").animate({
                "font-size": "0px"
            },"slow");

            
            
            $(".arrows .fa-angle-down").css("display","block");
            $(".arrows .fa-angle-up").css("display","none");
        }
    });
    
    
})