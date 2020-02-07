

$(window).resize(function(){
    let width = $("body").width();
    console.log(width);
    
    //cambio de ancho
    if(width>650 && width <= 768 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").css({
            width: '20%'
        },"slow");


    }else if(width<=425 && $(".helado-info-body p").css("display") == "none"){
        console.log("funciona");
        
        $(".helado-info").css({
            width: '40%'
        },"slow");

        $(".helado-info img").animate({
            "margin-top": "-30px"
        },"slow");

    }else if(width > 768 && width<1024 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").css({
            width: '25%',
            height:'35%'
        },"slow");

        
    }else if(width >=1440 &&  width < 1900 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").animate({
            width: '23%',
            height:'40%'
        },"slow");

       
    }else if(width>425 && width<=650 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").css({
            width: '30%'
        },"slow");
    }else if(ancho>=1900){
        $(".helado-info").animate({
            width: '15%',
            height: "50%"
        },"slow");

        
    }else if (ancho >= 1024 && ancho < 1440 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").animate({
            width: '15%',
            height: "35%"
        },"slow");

       
    }

});

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
            
        
        }else if ($(".tarjeta #parrafo-samanco-1").css("display") == "block"){
            
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
            
        
        }else if ($(".tarjeta #parrafo-samanco-yomoite").css("display") == "block"){
            
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
                    width: '50%',
                    height: '85%'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "8px"
                },"slow");

            }else if(ancho<=425){
                
                $(".helado-info").animate({
                    width: '100%',
                    height: '70%'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "8px"
                },"slow");

            }else if(ancho > 768 && ancho<=1024){
                $(".helado-info").animate({
                    width: '50%',
                    height:'90%'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "16px"
                },"slow");
            }else if(ancho >=1440){
                $(".helado-info").animate({
                    width: '45%',
                    height: '90%'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "22px"
                },"slow");
            }else if (ancho > 1024 && ancho < 1440){
                $(".helado-info").animate({
                    width: '40%',
                    height: "85%"
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "16px"
                },"slow");
            }



            $(".helado-info img").animate({
                "margin-top": "0px"
            },"slow");


            $(".arrows .fa-angle-down").css("display","none");
            $(".arrows .fa-angle-up").css("display","block");
            
        
        }else if ($(".helado-info-body p").css("display") == "block"){
            
            $(".helado-info-body p").slideUp("slow");
            let ancho = $("body").width();
            console.log(ancho);
            
            if(ancho>650 && ancho<=768){
                $(".helado-info").animate({
                    width: '20%',
                    height: '50%'
                },"slow");
                

                $(".helado-info img").animate({
                    "margin-top": "-30px"
                },"slow");
            }else if(ancho<=425){
                
                $(".helado-info").animate({
                    width: '40%',
                    height: '40%'
                },"slow");

                $(".helado-info img").animate({
                    "margin-top": "-30px"
                },"slow");
            }else if(ancho>768 && ancho<1024){
                $(".helado-info").animate({
                    width: '25%',
                    height:'35%'
                },"slow");

                $(".helado-info img").animate({
                    "margin-top": "-60px"
                },"slow");
            }else if(ancho >= 1440 && ancho < 1900){
                $(".helado-info img").animate({
                    "margin-top": "-120px"
                },"slow");

                $(".helado-info").animate({
                    width: '23%',
                    height:'40%'
                },"slow");

                
            }else if(ancho>425 && ancho<=650){
                $(".helado-info").animate({
                    width: '30%',
                    height: '50%'
                },"slow");
                

                $(".helado-info img").animate({
                    "margin-top": "-30px"
                },"slow");
            }else if(ancho>=1900){
                $(".helado-info").animate({
                    width: '15%',
                    height: "40%"
                },"slow");

                $(".helado-info img").animate({
                    "margin-top": "-120px"
                },"slow");
            }else if (ancho >= 1024 && ancho < 1440){
                $(".helado-info").animate({
                    width: '15%',
                    height: "40%"
                },"slow");

                $(".helado-info img").animate({
                    "margin-top": "-60px"
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