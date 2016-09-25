var current_user_id;

$(document).ready(function (){
   
    function init_current_user() {
        var username = readCookie('username');
        var password = readCookie('password');
        console.log(username);
        console.log(password);
    }
    
    init_current_user();
    
    function init_menu_toggle() {
        
        var $nav = $('#main-header nav');
        
        $('#main-header .menu-toggle').click(function (){
            var $button = $(this);
            if ($button.hasClass('toggled')) {
                $nav.slideUp(400);
            } else {
                $nav.slideDown(400);
            }
            
            $button.toggleClass('toggled');
        });
    }
    init_menu_toggle();
    
});

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}