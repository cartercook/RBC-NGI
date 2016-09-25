$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
    
    $('#login-form').submit(function(e) {
        
        var username = $('#username-login').val();
        var password = $('#password-login').val();
        
        var user = getUser(username, password);
        
        if (user != null) {
//            createCookie('username', username, 1);
//            createCookie('password', password, 1);
//            console.log(username);
//            console.log(password);
            //go to logged in page
        } else {
            console.log('null');
        }
        return false;
    });
});
