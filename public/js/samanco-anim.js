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
    
    
    
})