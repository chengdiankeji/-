require('cssDir/news/index.css')
require('cssDir/cooperate/index.css')
require('fontsDir/iconfont.css')

$(function(){
    $(".banner").addClass("load")
})

$("#btn").on('click', function(){
    $.ajax({
        type: "POST",
        url: "/send/info.php",
        data: {
            type: $('input[type="radio"]:checked').val(),
            name: $('input[name="name"]').val(),
            phone: $('input[name="phone"]').val(),
            email: $('input[name="email"]').val(),
            address: $('input[name="address"]').val(),
        },
        success: function(data){
            alert(data);
            if(data !== ""){
                $(this).attr('disabled', "true").css("background-color", "#ccc")
            }
        }
    });

})