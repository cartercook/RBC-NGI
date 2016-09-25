var database = {
    
    "companies": [
        {
            "id": 1,
            "name": "Joe's Barbershop",
            "location": {
                "longitude": "4",
                "latitude": "5"
            },
            "promotions": [
                {
                    "productName": "Free Haircut",
                    "points": 500,
                }
            ]
        },
        {
            "id": 2,
            "name": "Tracey's Eatery",
            "location": {
                "longitude": "4",
                "latitude": "5"
            },
            "promotions": [
                {
                    "productName": "Free Brisky Biscuit",
                    "points": 500,
                },
                {
                    "productName": "Free Coffee Upsize",
                    "points": 250
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
                "id": 1,
                "score": 40
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