$(document).ready(function () {
   
    function populateBusinessCards() {
        var $cardDeck = $('div.card-deck');
        
        var $card = $("<a href='/RBC-NGI/pages/lacarnita.html'><div class='card'>" +
                        "<div class='card-background'></div>" +
                        "<div class='card-overlay'>" +
                            "<div class='promotionValue'>1<img src='../images/Shape%202-1.png' style='transform: translateY(-2px);'> / $10</div>" +
                            "<div class='card-title'>" +
                                "<h4>name</h4>" +
                                "<h5>minidescription</h5>" +
                            "</div>" +
                            "<div class='promotions'>" +
                            "</div>" +
                            "<button class='heart'><i class='fa fa-heart'></i></button>" +
                       "</div>" +
                    "</div></a>");
        var $progressBar = $("<div class='progress-bar'>" +
                "<div class='text-cost'>5 <img src='../images/Shape%202.png' style='transform: translateY(-2px);'> /Taco</div>" +
                "<div class='inner-progress'></div>" +
                "<div class='text-progress'>5/7</div>" +
            "</div>");
        
        var businesses = getCompanies();
        var user = getUser(current_username, current_password);
        
        for (var i = 0; i < businesses.length; i ++ ) {
            var business = businesses[i];
            var picture = '../images/' + business.image;
            var name = business.name;
            var tagsArr = business.tags;
            var tags = '';
            
            for (var j = 0; j < tagsArr.length; j ++) {
                tags += tagsArr[j] + ' | ';
            }
            
            tags = tags.substr(0, tags.length - 2);
            
            console.log(business);
            
            var promotions = business.promotions;
            var dollarsPerPoint = business.dollarsPerCrown;
            var points = 0;
            
            for (var j = 0; j < user.myCompanies.length; j ++) {
                var company = user.myCompanies [j];
                if (company.id == business.id) {
                    points = company.score;
                }
            } 
            
            console.log(picture);
            
            var $cardClone = $card.clone();
            $cardClone.find('div.card-background').css('background-image', 'url(' + picture + '), linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,1))');
            $cardClone.find('div.promotionValue').html("1<img src='../images/Shape%202-1.png' style='transform: translateY(-2px);'> / $" + dollarsPerPoint);
            $cardClone.find('h4').html(name);
            $cardClone.find('h5').html(tags);
            
            for (var j = 0; j < promotions.length; j ++) {
                var promotion = promotions [j];
                
                console.log(promotion);
                
                var promoName = promotion.productName;
                var promoPoints = promotion.points;
                var promoPercentage = Math.round(Math.min(points * 100.0 / promoPoints, 100));
                
                var $progressClone = $progressBar.clone();
                $progressClone.find('.text-cost').html(promoPoints + " <img src='../images/Shape%202.png' style='transform: translateY(-2px);'> /" + promoName);
                $progressClone.find('.text-progress').html(points + '/' + promoPoints);
                $progressClone.find('.inner-progress').css('width', promoPercentage + '%');
                
                $cardClone.find('.promotions').append($progressClone);
                
            }
            
            $cardDeck.append($cardClone);
        }
    }
    
    populateBusinessCards();
    
    function init_hearting (){
        $('.heart').click(function () {
            var $i = $(this).find('i');
            if ($i.hasClass('fa-heart')) {
                $i.addClass('fa-heart-o');
                $i.removeClass('fa-heart');
            } else {
                $i.addClass('fa-heart');
                $i.removeClass('fa-heart-o');
            }
        });
    }
    
    init_hearting();
    
});
