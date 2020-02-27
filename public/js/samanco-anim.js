

$(window).resize(function(){
    let width = $("body").width();
    console.log(width);
    
    //cambio de ancho
    if(width>650 && width <= 768 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").animate({
            width: '20%',
            height: "127.031px"
        },"slow");

        $(".helado-info #melon-fruta").animate({
            "margin-top": "-55px",
            width: "75px"
        },"slow");

        $(".helado-info #frutilla-fruta").animate({
            "margin-top": "-43px",
            width: "96px"
        },"slow");

        $(".helado-info #banana-fruta").animate({
            "margin-top": "-46x",
            width: '100px'
        },"slow");

        $(".helado-info #mango-fruta").animate({
            "margin-top": "-51px",
            width: '90px'
        },"slow");

        $(".helado-info #coco-fruta").animate({
            "margin-top": "-49px",
            width: '90px'
        },"slow");

    }else if(width<=425 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").animate({
            width: '50%',
            height: "133.297px"
        },"slow");

        $(".helado-info #melon-fruta").animate({
            "margin-top": "-30px",
            width: "50px"
        },"slow");

        $(".helado-info #frutilla-fruta").animate({
            "margin-top": "-30px",
            width: "80px"
        },"slow");

        $(".helado-info #banana-fruta").animate({
            "margin-top": "-30px",
            width: '85px'
        },"slow");

        $(".helado-info #mango-fruta").animate({
            "margin-top": "-30px",
            width: '65px'
        },"slow");

        $(".helado-info #coco-fruta").animate({
            "margin-top": "-30px",
            width: '85px'
        },"slow");

    }else if(width > 768 && width<=1024 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").animate({
            width: '23%',
            height: "157.5px"
        },"slow");

        $(".helado-info #melon-fruta").animate({
            "margin-top": "-75px",
            width: "75px"
        },"slow");

        $(".helado-info #frutilla-fruta").animate({
            "margin-top": "-55px",
            width: "95px"
        },"slow");

        $(".helado-info #banana-fruta").animate({
            "margin-top": "-51px",
            width: '85px'
        },"slow");

        $(".helado-info #mango-fruta").animate({
            "margin-top": "-55px",
            width: '75px'
        },"slow");

        $(".helado-info #coco-fruta").animate({
            "margin-top": "-55px",
            width: '100px'
        },"slow");

        
    }else if(width >=1440 && width<1900  && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").animate({
            width: '21%',
            height: "258.094px"
        },"slow");

        $(".helado-info #melon-fruta").animate({
            "margin-top": "-120px",
            width: "150px"
        },"slow");

        $(".helado-info #frutilla-fruta").animate({
            "margin-top": "-102px",
            width: "205px"
        },"slow");

        $(".helado-info #banana-fruta").animate({
            "margin-top": "-59px",
            width: '150px'
        },"slow");

        $(".helado-info #mango-fruta").animate({
            "margin-top": "-80px",
            width: '150px'
        },"slow");

        $(".helado-info #coco-fruta").animate({
            "margin-top": "-55px",
            width: '150px'
        },"slow");

        

       
    }else if(width>425 && width<=650 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").animate({
            width: '20%',
            height: "127.031px"
        },"slow");

        $(".helado-info #melon-fruta").animate({
            "margin-top": "-55px",
            width: "75px"
        },"slow");

        $(".helado-info #frutilla-fruta").animate({
            "margin-top": "-43px",
            width: "96px"
        },"slow");

        $(".helado-info #banana-fruta").animate({
            "margin-top": "-46x",
            width: '100px'
        },"slow");

        $(".helado-info #mango-fruta").animate({
            "margin-top": "-51px",
            width: '90px'
        },"slow");

        $(".helado-info #coco-fruta").animate({
            "margin-top": "-49px",
            width: '90px'
        },"slow");
    

        
    }else if (width > 1024 && width <= 1440 && $(".helado-info-body p").css("display") == "none"){
        
        $(".helado-info").animate({
            width: '18%',
            height: "164.609px"
        },"slow");

        $(".helado-info #melon-fruta").animate({
            "margin-top": "-100px",
            width: "100px"
        },"slow");

        $(".helado-info #frutilla-fruta").animate({
            "margin-top": "-66px",
            width: "100px"
        },"slow");

        $(".helado-info #banana-fruta").animate({
            "margin-top": "-60px",
            width: '100px'
        },"slow");

        $(".helado-info #mango-fruta").animate({
            "margin-top": "-60px",
            width: '100px'
        },"slow");

        $(".helado-info #coco-fruta").animate({
            "margin-top": "-60px",
            width: '100px'
        },"slow");

    }else if(width>1900 && $(".helado-info-body p").css("display") == "none"){
        $(".helado-info").animate({
            width: '21%',
            height: '277.922px'
        },"slow");
        
        $(".helado-info #melon-fruta").animate({
            "margin-top": "-120px",
            width: "150px"
        },"slow");

        $(".helado-info #frutilla-fruta").animate({
            "margin-top": "-102px",
            width: "205px"
        },"slow");

        $(".helado-info #banana-fruta").animate({
            "margin-top": "-59px",
            width: '150px'
        },"slow");

        $(".helado-info #mango-fruta").animate({
            "margin-top": "-80px",
            width: '150px'
        },"slow");

        $(".helado-info #coco-fruta").animate({
            "margin-top": "-36px",
            width: '150px'
        },"slow");
    }

});

$(document).ready(function(){
    
    


    //segundo carrousel
    for(let i=1;i<9;i++){
        $(`.boton${i} #btn-up`).css("display","none");
    }
   

    $(".boton1").click(function(){
        if($(".tarjeta #parrafo-samanco-1").css("display") == "none"){
            
            $(".tarjeta #parrafo-samanco-1").slideDown("slow");
            $(".boton1 #btn-down").css("display","none");
            $(".boton1 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta #parrafo-samanco-1").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-1").slideUp("slow");
            $(".boton1 #btn-down").css("display","block");
            $(".boton1 #btn-up").css("display","none");
        }
    });

    $(".boton2").click(function(){
        if($(".tarjeta #parrafo-samanco-2").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-2").slideDown("slow");
            $(".boton2 #btn-down").css("display","none");
            $(".boton2 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta #parrafo-samanco-2").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-2").slideUp("slow");
            $(".boton2 #btn-down").css("display","block");
            $(".boton2 #btn-up").css("display","none");
        }
    });

    $(".boton3").click(function(){
        if($(".tarjeta #parrafo-samanco-3").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-3").slideDown("slow");
            $(".boton3 #btn-down").css("display","none");
            $(".boton3 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta #parrafo-samanco-3").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-3").slideUp("slow");
            $(".boton3 #btn-down").css("display","block");
            $(".boton3 #btn-up").css("display","none");
        }
    });

    $(".boton4").click(function(){
        if($(".tarjeta #parrafo-samanco-4").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-4").slideDown("slow");
            $(".boton4 #btn-down").css("display","none");
            $(".boton4 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta #parrafo-samanco-4").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-4").slideUp("slow");
            $(".boton4 #btn-down").css("display","block");
            $(".boton4 #btn-up").css("display","none");
        }
    });

    $(".boton5").click(function(){
        if($(".tarjeta #parrafo-samanco-5").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-5").slideDown("slow");
            $(".boton5 #btn-down").css("display","none");
            $(".boton5 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta #parrafo-samanco-5").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-5").slideUp("slow");
            $(".boton5 #btn-down").css("display","block");
            $(".boton5 #btn-up").css("display","none");
        }
    });

    $(".boton6").click(function(){
        if($(".tarjeta #parrafo-samanco-6").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-6").slideDown("slow");
            $(".boton6 #btn-down").css("display","none");
            $(".boton6 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta #parrafo-samanco-6").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-6").slideUp("slow");
            $(".boton6 #btn-down").css("display","block");
            $(".boton6 #btn-up").css("display","none");
        }
    });

    $(".boton7").click(function(){
        if($(".tarjeta #parrafo-samanco-7").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-7").slideDown("slow");
            $(".boton7 #btn-down").css("display","none");
            $(".boton7 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta #parrafo-samanco-7").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-7").slideUp("slow");
            $(".boton7 #btn-down").css("display","block");
            $(".boton7 #btn-up").css("display","none");
        }
    });

    $(".boton8").click(function(){
        if($(".tarjeta #parrafo-samanco-8").css("display") == "none"){
        
            $(".tarjeta #parrafo-samanco-8").slideDown("slow");
            $(".boton8 #btn-down").css("display","none");
            $(".boton8 #btn-up").css("display","block");
            
        
        }else if ($(".tarjeta #parrafo-samanco-8").css("display") == "block"){
            
            $(".tarjeta #parrafo-samanco-8").slideUp("slow");
            $(".boton8 #btn-down").css("display","block");
            $(".boton8 #btn-up").css("display","none");
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
                    height: '80%'
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
            }else if(ancho >=1440 && ancho < 1900){
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


                $(".helado-info #melon-fruta").animate({
                    
                    width: "65px"
                },"slow");

                $(".helado-info #frutilla-fruta").animate({
                    
                    width: "65px"
                },"slow");

                $(".helado-info #banana-fruta").animate({
                    
                    width: '115px'
                },"slow");

                $(".helado-info #mango-fruta").animate({
                    
                    width: '115px'
                },"slow");

                $(".helado-info #coco-fruta").animate({
                    
                    width: '145px'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "16px"
                },"slow");
            }else if(ancho >=1900){
                $(".helado-info").animate({
                    width: '45%',
                    height: '90%'
                },"slow");

                $(".helado-info-body p").animate({
                    "font-size": "22px"
                },"slow");

                $(".helado-info #melon-fruta").animate({
                    width: '165px'
                },"slow");

                $(".helado-info #frutilla-fruta").animate({
                    width: '165px'
                },"slow");

                $(".helado-info #banana-fruta").animate({
                    width: '245px'
                },"slow");

                $(".helado-info #mango-fruta").animate({
                    width: '305px'
                },"slow");

                $(".helado-info #coco-fruta").animate({
                    width: '385px'
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
                    height: "127.031px"
                },"slow");
        
                $(".helado-info #melon-fruta").animate({
                    "margin-top": "-55px",
                    width: "75px"
                },"slow");
        
                $(".helado-info #frutilla-fruta").animate({
                    "margin-top": "-43px",
                    width: "96px"
                },"slow");
        
                $(".helado-info #banana-fruta").animate({
                    "margin-top": "-46x",
                    width: '100px'
                },"slow");
        
                $(".helado-info #mango-fruta").animate({
                    "margin-top": "-51px",
                    width: '90px'
                },"slow");
        
                $(".helado-info #coco-fruta").animate({
                    "margin-top": "-49px",
                    width: '90px'
                },"slow");
            }else if(ancho<=425){
                
                $(".helado-info").animate({
                    width: '50%',
                    height: "120.297px"
                },"slow");

                $(".helado-info #melon-fruta").animate({
                    "margin-top": "-30px",
                    width: "50px"
                },"slow");

                $(".helado-info #frutilla-fruta").animate({
                    "margin-top": "-30px",
                    width: "80px"
                },"slow");

                $(".helado-info #banana-fruta").animate({
                    "margin-top": "-30px",
                    width: '85px'
                },"slow");

                $(".helado-info #mango-fruta").animate({
                    "margin-top": "-30px",
                    width: '65px'
                },"slow");

                $(".helado-info #coco-fruta").animate({
                    "margin-top": "-30px",
                    width: '85px'
                },"slow");
            }else if(ancho>768 && ancho<=1024){
                $(".helado-info").animate({
                    width: '23%',
                    height: "157.5px"
                },"slow");

                $(".helado-info #melon-fruta").animate({
                    "margin-top": "-75px",
                    width: "75px"
                },"slow");

                $(".helado-info #frutilla-fruta").animate({
                    "margin-top": "-55px",
                    width: "95px"
                },"slow");

                $(".helado-info #banana-fruta").animate({
                    "margin-top": "-51px",
                    width: '85px'
                },"slow");

                $(".helado-info #mango-fruta").animate({
                    "margin-top": "-55px",
                    width: '75px'
                },"slow");

                $(".helado-info #coco-fruta").animate({
                    "margin-top": "-55px",
                    width: '100px'
                },"slow");
            }else if(ancho >= 1440 && ancho < 1900){
                $(".helado-info").animate({
                    width: '21%',
                    height: "258.094px"
                },"slow");

                $(".helado-info #melon-fruta").animate({
                    "margin-top": "-120px",
                    width: "150px"
                },"slow");

                $(".helado-info #frutilla-fruta").animate({
                    "margin-top": "-102px",
                    width: "205px"
                },"slow");

                $(".helado-info #banana-fruta").animate({
                    "margin-top": "-59px",
                    width: '150px'
                },"slow");

                $(".helado-info #mango-fruta").animate({
                    "margin-top": "-80px",
                    width: '150px'
                },"slow");

                $(".helado-info #coco-fruta").animate({
                    "margin-top": "-55px",
                    width: '150px'
                },"slow");

                
            }else if(ancho>425 && ancho<=650){
                $(".helado-info").animate({
                    width: '20%',
                    height: "127.031px"
                },"slow");
        
                $(".helado-info #melon-fruta").animate({
                    "margin-top": "-55px",
                    width: "75px"
                },"slow");
        
                $(".helado-info #frutilla-fruta").animate({
                    "margin-top": "-43px",
                    width: "96px"
                },"slow");
        
                $(".helado-info #banana-fruta").animate({
                    "margin-top": "-46x",
                    width: '100px'
                },"slow");
        
                $(".helado-info #mango-fruta").animate({
                    "margin-top": "-51px",
                    width: '90px'
                },"slow");
        
                $(".helado-info #coco-fruta").animate({
                    "margin-top": "-49px",
                    width: '90px'
                },"slow");
            }else if(ancho>=1900){
                $(".helado-info").animate({
                    width: '21%',
                    height: '277.922px'
                },"slow");
                
                $(".helado-info #melon-fruta").animate({
                    "margin-top": "-120px",
                    width: "150px"
                },"slow");

                $(".helado-info #frutilla-fruta").animate({
                    "margin-top": "-102px",
                    width: "205px"
                },"slow");

                $(".helado-info #banana-fruta").animate({
                    "margin-top": "-59px",
                    width: '150px'
                },"slow");

                $(".helado-info #mango-fruta").animate({
                    "margin-top": "-80px",
                    width: '150px'
                },"slow");

                $(".helado-info #coco-fruta").animate({
                    "margin-top": "-36px",
                    width: '150px'
                },"slow");

            }else if (ancho > 1024 && ancho < 1440){
                $(".helado-info").animate({
                    width: '18%',
                    height: "164.609px"
                },"slow");

                $(".helado-info #melon-fruta").animate({
                    "margin-top": "-100px",
                    width: "100px"
                },"slow");

                $(".helado-info #frutilla-fruta").animate({
                    "margin-top": "-66px",
                    width: "100px"
                },"slow");

                $(".helado-info #banana-fruta").animate({
                    "margin-top": "-60px",
                    width: '100px'
                },"slow");

                $(".helado-info #mango-fruta").animate({
                    "margin-top": "-60px",
                    width: '100px'
                },"slow");

                $(".helado-info #coco-fruta").animate({
                    "margin-top": "-60px",
                    width: '100px'
                },"slow");

                
            }else if(ancho == 768){
                $(".helado-info").animate({
                    width: '23%',
                    height: "143.953px"
                },"slow");

                $(".helado-info #melon-fruta").animate({
                    "margin-top": "-55px",
                    width: "75px"
                },"slow");

                $(".helado-info #frutilla-fruta").animate({
                    "margin-top": "-60px",
                    width: "75px"
                },"slow");

                $(".helado-info #banana-fruta").animate({
                    "margin-top": "-20px",
                    width: '100px'
                },"slow");

                $(".helado-info #mango-fruta").animate({
                    "margin-top": "-15px",
                    width: '90px'
                },"slow");

                $(".helado-info #coco-fruta").animate({
                    "margin-top": "-30px",
                    width: '110px'
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