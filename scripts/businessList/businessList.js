$(document).ready(function () {
   
    function populateBusinessCards() {
        var $cardDeck = $('div.card-deck');
        
        var $card = $('<div class="card">' +
                      '<img class="card-img-top">' +
				'<div class="card-block row">' +
					'<h4 class="col-xs-6 card-title"></h4>' +
					'<div class="col-xs-6">' +
						'<div class="text-xs-center"></div>' + 
						'<progress class="progress" max="500"></progress>' +
					'</div>' +
				'</div>' +
			'</div>');
        
        var businesses = getCompanies();
        var user = getUser(current_username, current_password);
        
        for (var i = 0; i < businesses.length; i ++ ) {
            var business = businesses[i];
            var picture = '../images/' + business.image;
            var name = business.name;
            var points = 0;
            
            for (var j = 0; j < user.myCompanies.length; j ++) {
                var company = user.myCompanies [j];
                if (company.id == business.id) {
                    points = company.score;
                }
            } 
            
            var $cardClone = $card.clone();
            $cardClone.find('img.card-img-top').attr('src', picture);
            $cardClone.find('h4.col-xs-6').html(name);
            $cardClone.find('div.text-xs-center').html(points + ' Points');
            $cardClone.find('progress').attr('value', points);
            $cardDeck.append($cardClone);
        }
        
    }
    
    populateBusinessCards();
    
});