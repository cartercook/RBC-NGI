$(document).ready(function (){
   
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