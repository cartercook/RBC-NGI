$(document).ready(function () {
   
    function populateBusinessCards() {
        var $cardDeck = $('div.card-deck');
        
        var $card = $('<div class="card">' .
                      '<img class="card-img-top">' .
				'<div class="card-block row">' .
					'<h4 class="col-xs-6 card-title"></h4>' .
					'<div class="col-xs-6">' .
						'<div class="text-xs-center"></div>' . 
						'<progress class="progress" max="500"></progress>' .
					'</div>' .
				'</div>' .
			'</div>');
        
        var businesses = getCompanies();
        var user = getUser(current_username, current_password);
        
        for (var i = 0; i < businesses.length; i ++ ) {
            var business = businesses[i];
            var picture = business.picture;
            var name = business.name;
            
            for (var j = 0; j < user.myCompanies.length; j ++) {
                var company = user.myCompanies [j];
                if (company.id == business.id) {
                    
                }
            }
            
           
            
         []   
        }
    }
    
    populateBusinessCards();
    
});
<div class="card">
				<img class="card-img-top" src="../images/salon.jpg" alt="Card image cap">
				<div class="card-block row">
					<h4 class="col-xs-6 card-title">Aviva Salon</h4>
					<div class="col-xs-6">
						<div class="text-xs-center">368 Points</div>
						<progress class="progress" value="368" max="500"></progress>
					</div>
				</div>
			</div>