$('form').on("submit",(e)=>{
    e.preventDefault();

    const email = $("#email").val().trim();
    const subject = $("#subject").val().trim();
    const text = $("#text").val().trim();

    const data = {
        email,
        subject,
        text
    };

    $.post("/email",data,function(){
        alert("Muchas gracias por tu consulta");
        location.reload();
    });
})
