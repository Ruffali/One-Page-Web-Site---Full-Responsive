    
$(document).ready(function () {
    var close = $("#photoHover .container .row .col-md-12 .icon i:nth-child(2)")
    var profile = $("#photoHover")
    var open = $("#profile .container-fluid .row .col-md-12 .profile .content .photoContent span i")
    var heart = $("#gray .container-fluid .row .col-md-9 .row .col-md-6 .main .icons .leftIcon i");

    close.click(function(){
        profile.css({"opacity":"0"})
        open.css({"opacity":"1"})
    })
    open.click(function(){
        profile.css({"opacity":"1"})
        open.css({"opacity":"0"})
    })
    heart.click(function(){
        $(this).css({"color":"red","background-color":"white"});
    })
});