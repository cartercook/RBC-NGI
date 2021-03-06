var database = {
	
	"companies": [
		{
            "id": "1",
			"name": "La Carnita",
			"description": "Former mobile street-food spot now in a fixed space, offering a small menu of creative tacos & art.",
            "tags": ["Restaurant", "Mexican", "Toronto"],
			"address": "501 College St, Toronto, ON M6G 1A5",
			"phone": "(416) 964-1555",
			"website": "www.lacarnita.com/",
			"hours": "Saturday	5–11PM\nSunday	5–10PM\nMonday	5–10PM\nTuesday	5–11PM\nWednesday	5–11PM\nThursday	5–11PM\nFriday	5–11PM",
			"image": "La%20Carnita%20bg.png",
			"location": {
				"longitude": "43.647157",
				"latitude": "-79.390147"
			},
            "dollarsPerCrown": 10,
			"promotions": [
				{
					"productName": "Taco",
					"points": 5,
				},
                {
					"productName": "Drink",
					"points": 8,
				}
			]
		},
		{
            "id": "2",
			"name": "Drake General Store",
			"description": "A traditional hotel gift shop, a classic general store, a flea market stand, and a museum shop all rolled into one.",
            "tags": [],
			"address": "1151 Queen St W, Toronto, ON M6J",
			"phone":"(647) 346-0742",
			"website": "http://www.drakegeneralstore.ca/",
			"hours":"Saturday	10AM–9PM\nSunday	11AM–6PM\nMonday	10AM–9PM\nTuesday	10AM–9PM\nWednesday	10AM–9PM\nThursday	10AM–9PM\nFriday	10AM–9PM",
			"image": "front%20pic.png",
			"location": {
				"longitude": "43.651916",
				"latitude": "-79.380032"
			},
            "dollarsPerCrown": 5,
			"promotions": [
				{
					"productName": "Free Brisky Biscuit",
					"points": 5,
				},
				{
					"productName": "Free Coffee Upsize",
					"points": 8
				}
			]
		},
		{
            "id": "3",
			"name": "Monkey's Paw Bookstore",
			"description": "Funky store featuring rare & unique 20th-century printed items, with a used-book vending machine.",
            "tags": [],
			"address": "1267 Bloor St W, Toronto, ON M6H 1N7",
			"phone": "(416) 531-2123",
			"website": "www.monkeyspaw.com/",
			"hours":"Saturday	11AM–7PM\nSunday	12–5PM\nMonday	Closed\nTuesday	11AM–7PM\nWednesday	11AM–7PM\nThursday	11AM–7PM\nFriday	11AM–7PM",
			"image": "monkeysPaw.jpg",
			"location": {
				"longitude": "43.658428",
				"latitude": "-79.441887"
			},
            "dollarsPerCrown": 20,
            "promotions": [
				{
					"productName": "Free Brisky Biscuit",
					"points": 10,
				},
				{
					"productName": "Free Coffee Upsize",
					"points": 12
				}
			]
		},
		{
            "id": "4",
			"name": "Snakes and Lattes",
			"description": "Lively cafe with a huge collection of board & card games, plus sandwiches, salads & drinks.",
            "tags": [],
			"address": "600 Bloor St W, Toronto, ON M6G 1K4",
			"phone": "(647) 342-9229",
			"website": "www.snakesandlattes.com",
			"hours": "Saturday	11AM–2AM\nSunday	11AM–12AM\nMonday	11AM–12AM\nTuesday	11AM–12AM\nWednesday	11AM–12AM\nThursday	11AM–12AM\nFriday	11AM–2AM",
			"image": "snakesAndLattes.jpg",
			"location": {
				"longitude": "43.664788",
				"latitude": "-79.413167"
			},
            "dollarsPerCrown": 15,
            "promotions": [
				{
					"productName": "Free Brisky Biscuit",
					"points": 7,
				},
				{
					"productName": "Free Coffee Upsize",
					"points": 15
				}
			]
		}
	],
	
	"users": [
		{
			"username": "Noam",
			"email": "noam3jacobson@gmail.com",
			"password": "noamj",
			"totalScore": 100,
			"myCompanies": [
                {
                    "id": "1",
                    "score": 7
                }
			]
		},
		{
			"username": "Carter",
			"email": "carter@gmail.com",
			"password": "cart"
		}
	]
	
}
