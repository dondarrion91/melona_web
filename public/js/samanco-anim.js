const parrafo = document.getElementsByClassName("carrouselContainerBlockCant")[6];


$(document).ready(function(){
    $(".carrouselContainerBlockIcon").click(function(){
        let deviceWidth = $("html").width();
        console.log(deviceWidth);

        //CLICK PARA AGRANDAR
        if(parrafo.style.display == "" || parrafo.style.display == "none"){

            if(deviceWidth <= 320){

                $(".carrouselContainerBlock").animate(
                    {
                        left: "55px",
                        right: "55px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "24px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 320 && deviceWidth <=375){
                
                $(".carrouselContainerBlock").animate(
                    {
                        left: "55px",
                        right: "55px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );

            }else if(deviceWidth > 375 && deviceWidth <=425){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "55px",
                        right: "55px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 425 && deviceWidth <=768){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "160px",
                        right: "160px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 768 && deviceWidth <=1024){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "160px",
                        right: "160px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        fontSize: "22px",
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 1024 && deviceWidth <=1440){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "325px",
                        right: "325px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        fontSize: "22px",
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 1440){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "450px",
                        right: "450px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "170px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "34px",
                        paddingTop: "24px"
                    }
                );

                $(".carrouselContainerBlockSub br").css(
                    {
                        display: "none"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        fontSize: "22px",
                        display: "block",
                        paddingTop: "20px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "70px",
                        width:"140px"
                    }
                );
            }

        // CASO CLICK DE ENCOGER 
        }else{

            if(deviceWidth <= 320){
                
                
                $(".carrouselContainerBlock").animate(
                    {
                        left:"185px",
                        right: "25px",
                        height: "110px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "22px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "10px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "80px",
                        top: "-55px"
                        
                    }
                );

            }else if(deviceWidth > 320 && deviceWidth <=375){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"155px",
                        right: "25px",
                        height: "110px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "22px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "10px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "80px",
                        top: "-55px"
                        
                    }
                );

            }else if(deviceWidth > 375 && deviceWidth <=425){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"210px",
                        right: "25px",
                        height: "110px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "22px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "10px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "80px",
                        top: "-55px"
                        
                    }
                );
            }else if(deviceWidth > 425 && deviceWidth <=768){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"50%",
                        right: "15%",
                        height: "170px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "32px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "15px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "110px",
                        top:"-70px"
                        
                    }
                );
            }else if(deviceWidth > 768 && deviceWidth <=1024){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"50%",
                        right: "15%",
                        height: "220px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "40px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "20px",
                        paddingTop: "5px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "130px",
                        top:"-70px"
                        
                    }
                );
            }else if(deviceWidth > 1024 && deviceWidth <=1440){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"48%",
                        right: "28%",
                        height: "276px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "40px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "20px",
                        paddingTop: "5px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "160px",
                        top:"-105px"
                        
                    }
                );
            }else if(deviceWidth > 1440){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"48%",
                        right: "28%",
                        height: "276px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "40px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "20px",
                        padding: "0px 50px",
                        paddingTop: "27px"
                    }
                );

                $(".carrouselContainerBlockSub br").css(
                    {
                        display: "block"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "190px",
                        top:"-130px"
                        
                    }
                );
            }
        
        }
        
    });


    $(window).resize(function(){
        let deviceWidth = $("html").width();
        console.log(deviceWidth);

        //CLICK PARA AGRANDAR
        if(parrafo.style.display == "" || parrafo.style.display == "none"){

            if(deviceWidth <= 320){

                $(".carrouselContainerBlock").animate(
                    {
                        left: "55px",
                        right: "55px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "24px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 320 && deviceWidth <=375){
                
                $(".carrouselContainerBlock").animate(
                    {
                        left: "55px",
                        right: "55px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );

            }else if(deviceWidth > 375 && deviceWidth <=425){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "55px",
                        right: "55px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 425 && deviceWidth <=768){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "160px",
                        right: "160px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 768 && deviceWidth <=1024){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "160px",
                        right: "160px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        fontSize: "22px",
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 1024 && deviceWidth <=1440){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "325px",
                        right: "325px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "60px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "16px",
                        paddingTop: "8px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        fontSize: "22px",
                        display: "block",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "15px"
                    }
                );
            }else if(deviceWidth > 1440){
                $(".carrouselContainerBlock").animate(
                    {
                        left: "450px",
                        right: "450px",
                        height: "70%"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        paddingTop: "170px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "34px",
                        paddingTop: "24px"
                    }
                );

                $(".carrouselContainerBlockSub br").css(
                    {
                        display: "none"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        fontSize: "22px",
                        display: "block",
                        paddingTop: "20px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        top: "138px",
                        width:"140px"
                    }
                );
            }

        // CASO CLICK DE ENCOGER 
        }else{

            if(deviceWidth <= 320){
                
                
                $(".carrouselContainerBlock").animate(
                    {
                        left:"185px",
                        right: "25px",
                        height: "110px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "22px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "10px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "80px",
                        top: "-55px"
                        
                    }
                );

            }else if(deviceWidth > 320 && deviceWidth <=375){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"155px",
                        right: "25px",
                        height: "110px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "22px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "10px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "80px",
                        top: "-55px"
                        
                    }
                );

            }else if(deviceWidth > 375 && deviceWidth <=425){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"210px",
                        right: "25px",
                        height: "110px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "22px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "10px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "80px",
                        top: "-55px"
                        
                    }
                );
            }else if(deviceWidth > 425 && deviceWidth <=768){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"50%",
                        right: "15%",
                        height: "170px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "32px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "15px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "110px",
                        top:"-70px"
                        
                    }
                );
            }else if(deviceWidth > 768 && deviceWidth <=1024){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"50%",
                        right: "15%",
                        height: "220px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "40px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "20px",
                        paddingTop: "5px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "130px",
                        top:"-70px"
                        
                    }
                );
            }else if(deviceWidth > 1024 && deviceWidth <=1440){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"48%",
                        right: "28%",
                        height: "276px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "40px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "20px",
                        paddingTop: "5px"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "160px",
                        top:"-105px"
                        
                    }
                );
            }else if(deviceWidth > 1440){
                $(".carrouselContainerBlock").animate(
                    {
                        left:"48%",
                        right: "28%",
                        height: "276px"
                    }
                );
        
        
                $(".carrouselContainerBlockTitle").animate(
                    {
                        fontSize: "40px",
                        paddingTop: "0px"
                    }
                );
        
                $(".carrouselContainerBlockSub").animate(
                    {
                        fontSize: "20px",
                        padding: "0px 50px",
                        paddingTop: "27px"
                    }
                );

                $(".carrouselContainerBlockSub br").css(
                    {
                        display: "block"
                    }
                );
        
                $(".carrouselContainerBlockCant").css(
                    {
                        display: "none",
                        paddingTop: "15px"
                    }
                );
        
                $(".carrouselContainerBlockFruta").animate(
                    {
                        width: "190px",
                        top:"-130px"
                        
                    }
                );
            }
        
        }
        
    });
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
})