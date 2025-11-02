export const dummyData ={
    "type": "complete",
    "progress": 100,
    "message": "Your trip is ready! 🎉",
    "data": {
        "id": "e052243e-3838-46ad-9ce6-8062baedc2c0",
        "source": "chikkamagaluru",
        "destination": "Goa",
        "start_date": "2025-12-20",
        "end_date": "2025-12-26",
        "duration_days": 7,
        "traveler_count": 2,
        "travel_style": "mid-range",
        "budget": 50000,
        "saved": -123910,
        "total_cost": 173910,
        "cost_per_person": 86955,
        "budget_breakdown": {
            "accommodation": 108500,
            "transport": 24600,
            "activities": 8700,
            "meals": 16300,
            "miscellaneous": 15810
        },
        "day_plans": [
            {
                "day_number": 1,
                "date": "2025-12-20",
                "title": "Arrival in Goa and South Goa Charm",
                "description": "Arrive in Goa, check into your accommodation, and begin exploring the southern part of the state, known for its serene beaches.",
                "events": [
                    {
                        "id": "transport-arrival",
                        "event_type": "transport",
                        "start_time": "09:00",
                        "end_time": "10:30",
                        "transport": {
                            "id": "",
                            "mode": "flight",
                            "from_location": {
                                "name": "Kempegowda International Airport Bengaluru",
                                "address": "Devanahalli, Bengaluru, Karnataka 560300",
                                "city": "Bengaluru",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Goa International Airport",
                                "address": "Dabolim, Goa 403801",
                                "city": "Goa",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "1h 30m",
                            "cost": 8000,
                            "cost_per_person": 4000,
                            "description": "Fastest way to reach Goa via flight from Bengaluru.",
                            "carrier": "IndiGo Airlines",
                            "service_class": "Economy",
                            "vehicle_number": "6E-2345",
                            "route_type": "Direct"
                        }
                    },
                    {
                        "id": "transport-airport-to-hotel",
                        "event_type": "transport",
                        "start_time": "10:30",
                        "end_time": "12:30",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Goa International Airport",
                                "address": "Dabolim, Goa 403801",
                                "city": "Goa",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "2h 0m",
                            "cost": 3000,
                            "cost_per_person": 1500,
                            "description": "Taxi from Goa Airport to your homestay in Betalbatim. Luggage will be stored at the reception until check-in."
                        }
                    },
                    {
                        "id": "check-in-villa-agastya",
                        "event_type": "activity",
                        "start_time": "14:00",
                        "end_time": "14:30",
                        "activity": {
                            "id": "",
                            "name": "Check-in at Villa Agastya",
                            "description": "Settle into your accommodation and relax after your journey.",
                            "category": "Accommodation",
                            "type": "homestay",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "30m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.9,
                            "review_count": 157,
                            "tips": [
                                "Early check-in confirmed with host."
                            ],
                            "opening_hours": "14:00 - 11:00",
                            "priority": 1
                        }
                    },
                    {
                        "id": "lunch-villa-agastya-area",
                        "event_type": "meal",
                        "start_time": "14:30",
                        "meal": {
                            "id": "",
                            "type": "lunch",
                            "restaurant_name": "Local Eatery near Villa Agastya",
                            "description": "Enjoy authentic Goan cuisine at a local restaurant near your homestay.",
                            "cuisine": "Goan",
                            "location": {
                                "name": "Local Eatery",
                                "address": "Betalbatim, Goa",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "14:30",
                            "reservation_time": "14:30",
                            "end_time": "15:30",
                            "cost": 1200,
                            "cost_per_person": 600,
                            "rating": 4,
                            "review_count": 50,
                            "specialties": [
                                "Fish Thali",
                                "Prawn Curry"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": false
                        }
                    },
                    {
                        "id": "palolem-beach-relaxation",
                        "event_type": "activity",
                        "start_time": "16:00",
                        "end_time": "18:00",
                        "activity": {
                            "id": "",
                            "name": "Relax at Palolem Beach",
                            "description": "Unwind on the crescent-shaped Palolem Beach, known for its calm waters. Enjoy swimming or simply relax on the sand.",
                            "category": "Beach",
                            "type": "Beach",
                            "location": {
                                "name": "Palolem Beach",
                                "address": "Palolem, Canacona, Goa 403702, India",
                                "city": "Canacona",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.061479,
                                "longitude": 73.980058
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "2h 0m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.5,
                            "review_count": 31017,
                            "tips": [
                                "Carry a beach towel.",
                                "Stay hydrated."
                            ],
                            "opening_hours": "Open 24 hours",
                            "priority": 1
                        }
                    },
                    {
                        "id": "transport-palolem-to-hotel",
                        "event_type": "transport",
                        "start_time": "18:00",
                        "end_time": "19:00",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Palolem Beach",
                                "address": "Palolem, Canacona, Goa 403702, India",
                                "city": "Canacona",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "1h 0m",
                            "cost": 1000,
                            "cost_per_person": 500,
                            "description": "Return taxi from Palolem Beach to Villa Agastya."
                        }
                    },
                    {
                        "id": "dinner-villa-agastya-area",
                        "event_type": "meal",
                        "start_time": "19:30",
                        "meal": {
                            "id": "",
                            "type": "dinner",
                            "restaurant_name": "The Fisherman's Wharf",
                            "description": "Enjoy a delightful dinner by the riverside, known for its Goan seafood and lively ambiance.",
                            "cuisine": "Goan Seafood",
                            "location": {
                                "name": "The Fisherman's Wharf",
                                "address": "At The Riverside, Velim, Goa 403723, India",
                                "city": "Velim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.1576183,
                                "longitude": 73.9521909
                            },
                            "start_time": "19:30",
                            "reservation_time": "19:30",
                            "end_time": "20:30",
                            "cost": 2500,
                            "cost_per_person": 1250,
                            "rating": 4.5,
                            "review_count": 15965,
                            "specialties": [
                                "Goan Fish Curry",
                                "Prawn Balchão"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": true
                        }
                    }
                ],
                "daily_cost": 9500
            },
            {
                "day_number": 2,
                "date": "2025-12-21",
                "title": "Old Goa Heritage and Panjim Exploration",
                "description": "Explore the historical churches of Old Goa and the charming Latin Quarter of Panjim.",
                "events": [
                    {
                        "id": "breakfast-villa-agastya",
                        "event_type": "meal",
                        "start_time": "08:30",
                        "meal": {
                            "id": "",
                            "type": "breakfast",
                            "restaurant_name": "Villa Agastya",
                            "description": "Enjoy breakfast at your homestay.",
                            "cuisine": "Indian/Continental",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "08:30",
                            "reservation_time": "08:30",
                            "end_time": "09:30",
                            "cost": 0,
                            "cost_per_person": 0,
                            "rating": 0,
                            "review_count": 0,
                            "booking_required": false
                        }
                    },
                    {
                        "id": "transport-hotel-to-old-goa",
                        "event_type": "transport",
                        "start_time": "09:30",
                        "end_time": "10:15",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Churches of Old Goa",
                                "address": "Old Goa, Goa",
                                "city": "Old Goa",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "45m",
                            "cost": 1000,
                            "cost_per_person": 500,
                            "description": "Taxi from Betalbatim to Old Goa."
                        }
                    },
                    {
                        "id": "explore-old-goa-churches",
                        "event_type": "activity",
                        "start_time": "10:15",
                        "end_time": "12:30",
                        "activity": {
                            "id": "",
                            "name": "Explore the Churches of Old Goa",
                            "description": "Visit the UNESCO World Heritage site and marvel at the stunning architecture of the Basilica of Bom Jesus and Se Cathedral.",
                            "category": "Heritage",
                            "type": "Historical Site",
                            "location": {
                                "name": "Churches of Old Goa",
                                "address": "Old Goa, Goa",
                                "city": "Old Goa",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "2h 15m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.7,
                            "review_count": 3718,
                            "tips": [
                                "Dress modestly when visiting churches.",
                                "Allow ample time to explore the complex."
                            ],
                            "opening_hours": "9:00 AM - 6:30 PM",
                            "priority": 1
                        }
                    },
                    {
                        "id": "transport-old-goa-to-panjim",
                        "event_type": "transport",
                        "start_time": "12:30",
                        "end_time": "13:00",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Churches of Old Goa",
                                "address": "Old Goa, Goa",
                                "city": "Old Goa",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Fontainhas (Latin Quarter)",
                                "address": "Fontainhas, Panjim, Goa",
                                "city": "Panjim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "30m",
                            "cost": 600,
                            "cost_per_person": 300,
                            "description": "Taxi from Old Goa to Panjim."
                        }
                    },
                    {
                        "id": "lunch-panjim",
                        "event_type": "meal",
                        "start_time": "13:00",
                        "meal": {
                            "id": "",
                            "type": "lunch",
                            "restaurant_name": "Goa Streetz / A Goan Cafeteria Brasil",
                            "description": "Savor Goan specialties for lunch in Panjim.",
                            "cuisine": "Goan",
                            "location": {
                                "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                "address": "Diwar Ferry Road, opposite Se Cathedral, entrence, Old Goa, Goa 403402, India",
                                "city": "Old Goa",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.5032844,
                                "longitude": 73.9136895
                            },
                            "start_time": "13:00",
                            "reservation_time": "13:00",
                            "end_time": "14:00",
                            "cost": 800,
                            "cost_per_person": 400,
                            "rating": 4.6,
                            "review_count": 208,
                            "specialties": [
                                "Vindaloo",
                                "Xacuti"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": false
                        }
                    },
                    {
                        "id": "explore-fontainhas",
                        "event_type": "activity",
                        "start_time": "14:00",
                        "end_time": "15:30",
                        "activity": {
                            "id": "",
                            "name": "Explore Fontainhas (Latin Quarter)",
                            "description": "Wander through the charming streets of Fontainhas, admiring the colorful Portuguese-influenced architecture.",
                            "category": "Culture",
                            "type": "Neighborhood Exploration",
                            "location": {
                                "name": "Fontainhas (Latin Quarter)",
                                "address": "Fontainhas, Panjim, Goa",
                                "city": "Panjim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.4927,
                                "longitude": 73.8259
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "1h 30m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.5,
                            "review_count": 500,
                            "tips": [
                                "Wear comfortable shoes for walking.",
                                "Look out for the unique balconies and street art."
                            ],
                            "opening_hours": "Always accessible",
                            "priority": 1
                        }
                    },
                    {
                        "id": "panjim-city-stroll",
                        "event_type": "activity",
                        "start_time": "15:30",
                        "end_time": "17:00",
                        "activity": {
                            "id": "",
                            "name": "Stroll through Panjim City",
                            "description": "Explore the vibrant streets of Panjim, visit the Our Lady of the Immaculate Conception Church, and enjoy the city's atmosphere.",
                            "category": "City Exploration",
                            "type": "Sightseeing",
                            "location": {
                                "name": "Panjim City",
                                "address": "Panaji, Goa",
                                "city": "Panjim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "1h 30m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.3,
                            "review_count": 953,
                            "tips": [
                                "Visit the local market for souvenirs.",
                                "Enjoy the sunset views from Mandovi River bank."
                            ],
                            "opening_hours": "Varies by attraction",
                            "priority": 2
                        }
                    },
                    {
                        "id": "sunset-cruise-mandovi",
                        "event_type": "activity",
                        "start_time": "17:30",
                        "end_time": "19:00",
                        "activity": {
                            "id": "",
                            "name": "Sunset Cruise on the Mandovi River",
                            "description": "Experience a beautiful sunset from a boat on the Mandovi River, often accompanied by local music and dance.",
                            "category": "Leisure",
                            "type": "Boat Tour",
                            "location": {
                                "name": "Mandovi River Cruise Terminal",
                                "address": "Captain of Ports Jetty, Panjim, Goa",
                                "city": "Panjim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "1h 30m",
                            "cost": 1200,
                            "cost_per_person": 600,
                            "booking_required": false,
                            "rating": 4,
                            "review_count": 1000,
                            "tips": [
                                "Book tickets in advance, especially during peak season.",
                                "Arrive at the jetty at least 30 minutes before departure."
                            ],
                            "opening_hours": "Various timings, typically late afternoon/evening",
                            "priority": 1
                        }
                    },
                    {
                        "id": "dinner-panjim",
                        "event_type": "meal",
                        "start_time": "20:00",
                        "meal": {
                            "id": "",
                            "type": "dinner",
                            "restaurant_name": "The Lazy Goose",
                            "description": "Enjoy dinner at this popular riverside restaurant known for its seafood and Goan cuisine.",
                            "cuisine": "Goan, Seafood",
                            "location": {
                                "name": "The Lazy Goose",
                                "address": "Bridge, Nerul, Goa 403114, India",
                                "city": "Nerul",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.5101664,
                                "longitude": 73.7803832
                            },
                            "start_time": "20:00",
                            "reservation_time": "20:00",
                            "end_time": "21:00",
                            "cost": 3000,
                            "cost_per_person": 1500,
                            "rating": 4.4,
                            "review_count": 4598,
                            "specialties": [
                                "Goan Fish Curry",
                                "Prawn Curry",
                                "Seafood Platter"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": true
                        }
                    }
                ],
                "daily_cost": 8300
            },
            {
                "day_number": 3,
                "date": "2025-12-21",
                "title": "North Goa Beaches and Fort Aguada",
                "description": "Explore the iconic Fort Aguada and relax on the popular beaches of North Goa.",
                "events": [
                    {
                        "id": "breakfast-villa-agastya",
                        "event_type": "meal",
                        "start_time": "08:30",
                        "meal": {
                            "id": "",
                            "type": "breakfast",
                            "restaurant_name": "Villa Agastya",
                            "description": "Enjoy breakfast at your homestay.",
                            "cuisine": "Indian/Continental",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "08:30",
                            "reservation_time": "08:30",
                            "end_time": "09:30",
                            "cost": 0,
                            "cost_per_person": 0,
                            "rating": 0,
                            "review_count": 0,
                            "booking_required": false
                        }
                    },
                    {
                        "id": "transport-hotel-to-fort-aguada",
                        "event_type": "transport",
                        "start_time": "09:30",
                        "end_time": "10:30",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Fort Aguada",
                                "address": "Fort Aguada Rd, Aguada Fort Area, Candolim, Goa 403515, India",
                                "city": "Candolim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "1h 0m",
                            "cost": 1200,
                            "cost_per_person": 600,
                            "description": "Taxi from Betalbatim to Fort Aguada."
                        }
                    },
                    {
                        "id": "visit-fort-aguada",
                        "event_type": "activity",
                        "start_time": "10:30",
                        "end_time": "12:30",
                        "activity": {
                            "id": "",
                            "name": "Visit Fort Aguada",
                            "description": "Explore the historic Portuguese fortress offering panoramic ocean views and an abandoned lighthouse.",
                            "category": "History",
                            "type": "Fort",
                            "location": {
                                "name": "Fort Aguada",
                                "address": "Fort Aguada Rd, Aguada Fort Area, Candolim, Goa 403515, India",
                                "city": "Candolim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.4922519,
                                "longitude": 73.7737462
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "2h 0m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.2,
                            "review_count": 106669,
                            "tips": [
                                "Best time to visit is morning or late afternoon.",
                                "Wear comfortable shoes for walking around the fort."
                            ],
                            "opening_hours": "9:30 AM - 6:00 PM",
                            "priority": 1
                        }
                    },
                    {
                        "id": "relax-candolim-beach",
                        "event_type": "activity",
                        "start_time": "12:30",
                        "end_time": "14:30",
                        "activity": {
                            "id": "",
                            "name": "Relax at Candolim Beach",
                            "description": "Spend time relaxing, swimming, or sunbathing at the famous Candolim Beach.",
                            "category": "Beach",
                            "type": "Beach",
                            "location": {
                                "name": "Candolim Beach",
                                "address": "Candolim, Goa",
                                "city": "Candolim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.5128,
                                "longitude": 73.775
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "2h 0m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.3,
                            "review_count": 106669,
                            "tips": [
                                "Beware of strong currents if swimming.",
                                "Rent a sun lounger for comfort."
                            ],
                            "opening_hours": "Always accessible",
                            "priority": 2
                        }
                    },
                    {
                        "id": "lunch-candolim-beach",
                        "event_type": "meal",
                        "start_time": "14:30",
                        "meal": {
                            "id": "",
                            "type": "lunch",
                            "restaurant_name": "Pisco - By the Beach",
                            "description": "Enjoy lunch with a view at this popular beachside restaurant in Anjuna.",
                            "cuisine": "Seafood, Continental",
                            "location": {
                                "name": "Pisco - By the Beach",
                                "address": "St Michael Vaddo, Flea Market, Anjuna",
                                "city": "Anjuna",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.5717502,
                                "longitude": 73.7417677
                            },
                            "start_time": "14:30",
                            "reservation_time": "14:30",
                            "end_time": "15:30",
                            "cost": 4000,
                            "cost_per_person": 2000,
                            "rating": 4.7,
                            "review_count": 4765,
                            "specialties": [
                                "Grilled Fish",
                                "Seafood Risotto"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": true
                        }
                    },
                    {
                        "id": "transport-candolim-to-arpora",
                        "event_type": "transport",
                        "start_time": "15:30",
                        "end_time": "16:00",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Candolim Beach",
                                "address": "Candolim, Goa",
                                "city": "Candolim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Saturday Night Market, Arpora",
                                "address": "Saturday Night Market, Arpora, Goa",
                                "city": "Arpora",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "30m",
                            "cost": 700,
                            "cost_per_person": 350,
                            "description": "Taxi from Candolim Beach to Arpora."
                        }
                    },
                    {
                        "id": "saturday-night-market",
                        "event_type": "activity",
                        "start_time": "16:00",
                        "end_time": "21:00",
                        "activity": {
                            "id": "",
                            "name": "Visit Saturday Night Market",
                            "description": "Explore the vibrant Saturday Night Market in Arpora, known for its shopping, food stalls, and live music.",
                            "category": "Shopping & Entertainment",
                            "type": "Market",
                            "location": {
                                "name": "Saturday Night Market, Arpora",
                                "address": "Saturday Night Market, Arpora, Goa",
                                "city": "Arpora",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.5707,
                                "longitude": 73.7708
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "5h 0m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.3,
                            "review_count": 15000,
                            "tips": [
                                "Bargain respectfully for prices.",
                                "Try local street food."
                            ],
                            "opening_hours": "18:00 - 03:00 (Saturdays only)",
                            "priority": 1
                        }
                    },
                    {
                        "id": "dinner-arpora",
                        "event_type": "meal",
                        "start_time": "21:00",
                        "meal": {
                            "id": "",
                            "type": "dinner",
                            "restaurant_name": "Food stalls at Saturday Night Market",
                            "description": "Dinner at one of the many food stalls in the market, offering diverse cuisines.",
                            "cuisine": "Multi-cuisine",
                            "location": {
                                "name": "Saturday Night Market",
                                "address": "Arpora, Goa",
                                "city": "Arpora",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.5707,
                                "longitude": 73.7708
                            },
                            "start_time": "21:00",
                            "reservation_time": "21:00",
                            "end_time": "22:00",
                            "cost": 1000,
                            "cost_per_person": 500,
                            "rating": 4.3,
                            "review_count": 15000,
                            "specialties": [
                                "Street Food",
                                "Goan Snacks"
                            ],
                            "dietary_info": [
                                "Various options available"
                            ],
                            "booking_required": false
                        }
                    }
                ],
                "daily_cost": 8100
            },
            {
                "day_number": 4,
                "date": "2025-12-22",
                "title": "Adventure to Dudhsagar Falls",
                "description": "Embark on a full-day trip to the majestic Dudhsagar Falls, experiencing a jeep safari through lush landscapes.",
                "events": [
                    {
                        "id": "breakfast-villa-agastya",
                        "event_type": "meal",
                        "start_time": "08:00",
                        "meal": {
                            "id": "",
                            "type": "breakfast",
                            "restaurant_name": "Villa Agastya",
                            "description": "Start your day with breakfast at your homestay.",
                            "cuisine": "Indian/Continental",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "08:00",
                            "reservation_time": "08:00",
                            "end_time": "09:00",
                            "cost": 0,
                            "cost_per_person": 0,
                            "rating": 0,
                            "review_count": 0,
                            "booking_required": false
                        }
                    },
                    {
                        "id": "dudhsagar-falls-trip",
                        "event_type": "activity",
                        "start_time": "09:00",
                        "end_time": "18:00",
                        "activity": {
                            "id": "",
                            "name": "Dudhsagar Falls Trip",
                            "description": "A full-day excursion to Dudhsagar Falls, including a scenic jeep safari through the Bhagwan Mahavir Wildlife Sanctuary.",
                            "category": "Nature",
                            "type": "Waterfall Visit",
                            "location": {
                                "name": "Dudhsagar Falls",
                                "address": "Sonauli, Goa",
                                "city": "Sonauli",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "9h 0m",
                            "cost": 3000,
                            "cost_per_person": 1500,
                            "booking_required": true,
                            "rating": 4.6,
                            "review_count": 31017,
                            "tips": [
                                "Wear comfortable clothing and shoes.",
                                "Carry insect repellent and sunscreen.",
                                "Be prepared for a bumpy jeep ride."
                            ],
                            "opening_hours": "Varies by season and safari timings",
                            "priority": 1
                        }
                    },
                    {
                        "id": "lunch-dudhsagar-trip",
                        "event_type": "meal",
                        "start_time": "13:00",
                        "meal": {
                            "id": "",
                            "type": "lunch",
                            "restaurant_name": "Included in tour package",
                            "description": "Lunch is typically included as part of the Dudhsagar Falls tour package.",
                            "cuisine": "Indian",
                            "location": {
                                "name": "Near Dudhsagar Falls",
                                "address": "",
                                "city": "Sonauli",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "start_time": "13:00",
                            "reservation_time": "13:00",
                            "end_time": "14:00",
                            "cost": 0,
                            "cost_per_person": 0,
                            "rating": 0,
                            "review_count": 0,
                            "booking_required": false
                        }
                    },
                    {
                        "id": "dinner-betalbatim",
                        "event_type": "meal",
                        "start_time": "19:30",
                        "meal": {
                            "id": "",
                            "type": "dinner",
                            "restaurant_name": "Local Restaurant in Betalbatim",
                            "description": "Enjoy a relaxed dinner at a local restaurant near your accommodation.",
                            "cuisine": "Goan",
                            "location": {
                                "name": "Local Restaurant",
                                "address": "Betalbatim, Goa",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "19:30",
                            "reservation_time": "19:30",
                            "end_time": "20:30",
                            "cost": 1000,
                            "cost_per_person": 500,
                            "rating": 4,
                            "review_count": 50,
                            "specialties": [
                                "Seafood",
                                "Goan Thali"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": false
                        }
                    }
                ],
                "daily_cost": 2000
            },
            {
                "day_number": 5,
                "date": "2025-12-23",
                "title": "Water Sports and Grande Island Adventure",
                "description": "Experience thrilling water sports and a snorkeling trip to Grande Island.",
                "events": [
                    {
                        "id": "breakfast-villa-agastya",
                        "event_type": "meal",
                        "start_time": "08:30",
                        "meal": {
                            "id": "",
                            "type": "breakfast",
                            "restaurant_name": "Villa Agastya",
                            "description": "Breakfast at your homestay.",
                            "cuisine": "Indian/Continental",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "08:30",
                            "reservation_time": "08:30",
                            "end_time": "09:30",
                            "cost": 0,
                            "cost_per_person": 0,
                            "rating": 0,
                            "review_count": 0,
                            "booking_required": false
                        }
                    },
                    {
                        "id": "transport-hotel-to-grande-island-departure",
                        "event_type": "transport",
                        "start_time": "09:30",
                        "end_time": "10:30",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Grande Island Departure Point (e.g., Sinquerim)",
                                "address": "Sinquerim Beach, Candolim, Goa",
                                "city": "Candolim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "1h 0m",
                            "cost": 1200,
                            "cost_per_person": 600,
                            "description": "Taxi from Betalbatim to the departure point for Grande Island."
                        }
                    },
                    {
                        "id": "grande-island-snorkeling",
                        "event_type": "activity",
                        "start_time": "10:30",
                        "end_time": "16:00",
                        "activity": {
                            "id": "",
                            "name": "Scuba Diving or Snorkeling Trip to Grande Island",
                            "description": "Enjoy a boat trip to Grande Island for snorkeling or scuba diving, exploring the underwater marine life.",
                            "category": "Adventure",
                            "type": "Water Sports",
                            "location": {
                                "name": "Grande Island",
                                "address": "Off the coast of Goa",
                                "city": "Goa",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "5h 30m",
                            "cost": 4000,
                            "cost_per_person": 2000,
                            "booking_required": true,
                            "rating": 4.3,
                            "review_count": 3000,
                            "tips": [
                                "Book your tour in advance.",
                                "Listen to the safety instructions from the guide."
                            ],
                            "opening_hours": "Full day activity",
                            "priority": 1
                        }
                    },
                    {
                        "id": "lunch-grande-island-trip",
                        "event_type": "meal",
                        "start_time": "13:00",
                        "meal": {
                            "id": "",
                            "type": "lunch",
                            "restaurant_name": "Included in tour package",
                            "description": "Lunch is usually provided as part of the Grande Island tour package.",
                            "cuisine": "Indian/BBQ",
                            "location": {
                                "name": "Grande Island",
                                "address": "Off the coast of Goa",
                                "city": "Goa",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "start_time": "13:00",
                            "reservation_time": "13:00",
                            "end_time": "14:00",
                            "cost": 0,
                            "cost_per_person": 0,
                            "rating": 0,
                            "review_count": 0,
                            "booking_required": false
                        }
                    },
                    {
                        "id": "transport-grande-island-departure-to-hotel",
                        "event_type": "transport",
                        "start_time": "16:00",
                        "end_time": "17:00",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Grande Island Departure Point (e.g., Sinquerim)",
                                "address": "Sinquerim Beach, Candolim, Goa",
                                "city": "Candolim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "1h 0m",
                            "cost": 1200,
                            "cost_per_person": 600,
                            "description": "Return taxi from departure point to Villa Agastya."
                        }
                    },
                    {
                        "id": "evening-relaxation",
                        "event_type": "activity",
                        "start_time": "17:00",
                        "end_time": "19:00",
                        "activity": {
                            "id": "",
                            "name": "Relax and Freshen Up",
                            "description": "Relax at the homestay after the water sports adventure.",
                            "category": "Leisure",
                            "type": "Rest",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "2h 0m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 0,
                            "review_count": 0,
                            "priority": 3
                        }
                    },
                    {
                        "id": "dinner-betalbatim-cafe",
                        "event_type": "meal",
                        "start_time": "19:30",
                        "meal": {
                            "id": "",
                            "type": "dinner",
                            "restaurant_name": "Local Cafe in Betalbatim",
                            "description": "Casual dinner at a local cafe.",
                            "cuisine": "Goan/Indian",
                            "location": {
                                "name": "Local Cafe",
                                "address": "Betalbatim, Goa",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "19:30",
                            "reservation_time": "19:30",
                            "end_time": "20:30",
                            "cost": 1000,
                            "cost_per_person": 500,
                            "rating": 4,
                            "review_count": 50,
                            "specialties": [
                                "Goan Snacks",
                                "Biryani"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": false
                        }
                    }
                ],
                "daily_cost": 4600
            },
            {
                "day_number": 6,
                "date": "2025-12-24",
                "title": "Old Goa Museums and Scenic Views",
                "description": "Delve into Goa's history and art, followed by a visit to a scenic waterfall.",
                "events": [
                    {
                        "id": "breakfast-villa-agastya",
                        "event_type": "meal",
                        "start_time": "08:30",
                        "meal": {
                            "id": "",
                            "type": "breakfast",
                            "restaurant_name": "Villa Agastya",
                            "description": "Breakfast at your homestay.",
                            "cuisine": "Indian/Continental",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "08:30",
                            "reservation_time": "08:30",
                            "end_time": "09:30",
                            "cost": 0,
                            "cost_per_person": 0,
                            "rating": 0,
                            "review_count": 0,
                            "booking_required": false
                        }
                    },
                    {
                        "id": "transport-hotel-to-big-foot-goa",
                        "event_type": "transport",
                        "start_time": "09:30",
                        "end_time": "10:15",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Big Foot Goa",
                                "address": "Cross Museum, Main Road, Salcete District, Loutolim, Rasaain, Goa 403718, India",
                                "city": "Loutolim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "45m",
                            "cost": 1000,
                            "cost_per_person": 500,
                            "description": "Taxi from Betalbatim to Big Foot Goa."
                        }
                    },
                    {
                        "id": "visit-big-foot-goa",
                        "event_type": "activity",
                        "start_time": "10:15",
                        "end_time": "12:15",
                        "activity": {
                            "id": "",
                            "name": "Visit Big Foot Goa",
                            "description": "Explore this open-air museum and theme park dedicated to rural Goan life, featuring an art gallery and shop.",
                            "category": "Culture",
                            "type": "Museum",
                            "location": {
                                "name": "Big Foot Goa",
                                "address": "Cross Museum, Main Road, Salcete District, Loutolim, Rasaain, Goa 403718, India",
                                "city": "Loutolim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.339727,
                                "longitude": 73.9868804
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "2h 0m",
                            "cost": 500,
                            "cost_per_person": 250,
                            "booking_required": false,
                            "rating": 4.1,
                            "review_count": 8452,
                            "tips": [
                                "Allow time to explore the art gallery and shop.",
                                "Try the local snacks available."
                            ],
                            "opening_hours": "9:00 AM - 6:00 PM",
                            "priority": 2
                        }
                    },
                    {
                        "id": "transport-big-foot-to-harvalem",
                        "event_type": "transport",
                        "start_time": "12:15",
                        "end_time": "13:15",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Big Foot Goa",
                                "address": "Cross Museum, Main Road, Salcete District, Loutolim, Rasaain, Goa 403718, India",
                                "city": "Loutolim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Harvalem Waterfalls",
                                "address": "Rudreshwar Colony, Kudne, Goa 403505, India",
                                "city": "Kudne",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "1h 0m",
                            "cost": 1200,
                            "cost_per_person": 600,
                            "description": "Taxi from Big Foot Goa to Harvalem Waterfalls."
                        }
                    },
                    {
                        "id": "visit-harvalem-waterfalls",
                        "event_type": "activity",
                        "start_time": "13:15",
                        "end_time": "14:15",
                        "activity": {
                            "id": "",
                            "name": "Visit Harvalem Waterfalls",
                            "description": "Enjoy the scenic beauty of Harvalem Waterfalls, a popular spot especially after the monsoon.",
                            "category": "Nature",
                            "type": "Waterfall",
                            "location": {
                                "name": "Harvalem Waterfalls",
                                "address": "Rudreshwar Colony, Kudne, Goa 403505, India",
                                "city": "Kudne",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.5507728,
                                "longitude": 74.0264703
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "1h 0m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 4.3,
                            "review_count": 9138,
                            "tips": [
                                "Best visited post-monsoon for fuller falls.",
                                "Good spot for photography."
                            ],
                            "opening_hours": "Open 24 hours",
                            "priority": 2
                        }
                    },
                    {
                        "id": "lunch-near-harvalem",
                        "event_type": "meal",
                        "start_time": "14:15",
                        "meal": {
                            "id": "",
                            "type": "lunch",
                            "restaurant_name": "Local Restaurant near Harvalem",
                            "description": "Lunch at a local eatery near the waterfall.",
                            "cuisine": "Goan/Indian",
                            "location": {
                                "name": "Local Restaurant",
                                "address": "Near Harvalem Waterfalls, Goa",
                                "city": "Kudne",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.5507728,
                                "longitude": 74.0264703
                            },
                            "start_time": "14:15",
                            "reservation_time": "14:15",
                            "end_time": "15:15",
                            "cost": 800,
                            "cost_per_person": 400,
                            "rating": 3.5,
                            "review_count": 20,
                            "specialties": [
                                "Local Goan Dishes"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": false
                        }
                    },
                    {
                        "id": "transport-harvalem-to-hotel",
                        "event_type": "transport",
                        "start_time": "15:15",
                        "end_time": "16:30",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Harvalem Waterfalls",
                                "address": "Rudreshwar Colony, Kudne, Goa 403505, India",
                                "city": "Kudne",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "1h 15m",
                            "cost": 1500,
                            "cost_per_person": 750,
                            "description": "Return taxi from Harvalem Waterfalls to Villa Agastya."
                        }
                    },
                    {
                        "id": "evening-relaxation-betalbatim",
                        "event_type": "activity",
                        "start_time": "16:30",
                        "end_time": "19:00",
                        "activity": {
                            "id": "",
                            "name": "Evening Relaxation",
                            "description": "Relax at the homestay or take a short walk in the vicinity.",
                            "category": "Leisure",
                            "type": "Rest",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "2h 30m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 0,
                            "review_count": 0,
                            "priority": 3
                        }
                    },
                    {
                        "id": "dinner-betalbatim-local",
                        "event_type": "meal",
                        "start_time": "19:30",
                        "meal": {
                            "id": "",
                            "type": "dinner",
                            "restaurant_name": "Local Restaurant in Betalbatim",
                            "description": "Enjoy a final Goan dinner near your accommodation.",
                            "cuisine": "Goan",
                            "location": {
                                "name": "Local Restaurant",
                                "address": "Betalbatim, Goa",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "19:30",
                            "reservation_time": "19:30",
                            "end_time": "20:30",
                            "cost": 1000,
                            "cost_per_person": 500,
                            "rating": 4,
                            "review_count": 50,
                            "specialties": [
                                "Goan Fish Curry",
                                "Pork Vindaloo"
                            ],
                            "dietary_info": [
                                "Vegetarian options available"
                            ],
                            "booking_required": false
                        }
                    }
                ],
                "daily_cost": 3850
            },
            {
                "day_number": 7,
                "date": "2025-12-26",
                "title": "Departure from Goa",
                "description": "Enjoy a final Goan breakfast before heading to the airport for your departure.",
                "events": [
                    {
                        "id": "breakfast-villa-agastya",
                        "event_type": "meal",
                        "start_time": "08:30",
                        "meal": {
                            "id": "",
                            "type": "breakfast",
                            "restaurant_name": "Villa Agastya",
                            "description": "Enjoy your final breakfast in Goa.",
                            "cuisine": "Indian/Continental",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "08:30",
                            "reservation_time": "08:30",
                            "end_time": "09:30",
                            "cost": 0,
                            "cost_per_person": 0,
                            "rating": 0,
                            "review_count": 0,
                            "booking_required": false
                        }
                    },
                    {
                        "id": "check-out-villa-agastya",
                        "event_type": "activity",
                        "start_time": "10:00",
                        "end_time": "10:30",
                        "activity": {
                            "id": "",
                            "name": "Check-out from Villa Agastya",
                            "description": "Complete check-out formalities at your homestay.",
                            "category": "Accommodation",
                            "type": "Check-out",
                            "location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "Goa",
                                "country": "India",
                                "latitude": 15.2982772,
                                "longitude": 73.9248208
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "30m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 0,
                            "review_count": 0,
                            "opening_hours": "Until 11:00 AM",
                            "priority": 1
                        }
                    },
                    {
                        "id": "transport-hotel-to-airport",
                        "event_type": "transport",
                        "start_time": "10:30",
                        "end_time": "12:30",
                        "transport": {
                            "id": "",
                            "mode": "taxi",
                            "from_location": {
                                "name": "Villa Agastya",
                                "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                                "city": "Betalbatim",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "to_location": {
                                "name": "Goa International Airport",
                                "address": "Dabolim, Goa 403801",
                                "city": "Goa",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "duration": "2h 0m",
                            "cost": 3000,
                            "cost_per_person": 1500,
                            "description": "Taxi from Villa Agastya to Goa International Airport."
                        }
                    },
                    {
                        "id": "airport-departure",
                        "event_type": "activity",
                        "start_time": "12:30",
                        "end_time": "14:30",
                        "activity": {
                            "id": "",
                            "name": "Airport Departure Procedures",
                            "description": "Complete check-in and security procedures for your flight.",
                            "category": "Travel",
                            "type": "Airport",
                            "location": {
                                "name": "Goa International Airport",
                                "address": "Dabolim, Goa 403801",
                                "city": "Goa",
                                "state": "",
                                "country": "",
                                "latitude": 0,
                                "longitude": 0
                            },
                            "start_time": "",
                            "end_time": "",
                            "duration": "2h 0m",
                            "cost": 0,
                            "cost_per_person": 0,
                            "booking_required": false,
                            "rating": 0,
                            "review_count": 0,
                            "opening_hours": "Open 24 hours",
                            "priority": 1
                        }
                    }
                ],
                "daily_cost": 2000
            }
        ],
        "accommodations": [
            {
                "id": "villa-agastya",
                "name": "Villa Agastya",
                "type": "homestay",
                "description": "Highly-rated homestay offering a personal touch. Phone: 097640 04224. Located in Betalbatim, Goa.",
                "location": {
                    "name": "Villa Agastya",
                    "address": "H No, 29 /B, Nagvaddo, Fatona, Betalbatim, Goa 403713, India",
                    "city": "Goa",
                    "state": "Goa",
                    "country": "India",
                    "latitude": 15.2982772,
                    "longitude": 73.9248208
                },
                "check_in_date": "2025-12-20",
                "check_out_date": "2025-12-26",
                "nights": 7,
                "room_type": "Standard Double Room",
                "guests": 2,
                "cost_per_night": 4000,
                "total_cost": 28000,
                "rating": 4.9,
                "review_count": 157,
                "check_in_time": "14:00",
                "check_out_time": "11:00",
                "booking_url": "https://www.easemytrip.com/hotels",
                "cancellation_info": "Free cancellation up to 48 hours before check-in."
            },
            {
                "id": "amadi-beach-resort",
                "name": "Amadi Beach Front Resort , Goa",
                "type": "resort",
                "description": "Beachfront resort with good reviews, suitable for families. Phone: 088828 47446. Located on Ashwem Beach, Mandrem. Website: http://www.amadi.in/",
                "location": {
                    "name": "Amadi Beach Front Resort",
                    "address": "Ashwem Beach, Mandrem, Goa 403527, India",
                    "city": "Mandrem",
                    "state": "Goa",
                    "country": "India",
                    "latitude": 15.646835,
                    "longitude": 73.7175677
                },
                "check_in_date": "2025-12-20",
                "check_out_date": "2025-12-26",
                "nights": 7,
                "room_type": "Deluxe Double Room",
                "guests": 2,
                "cost_per_night": 5500,
                "total_cost": 38500,
                "rating": 4.4,
                "review_count": 820,
                "amenities": [
                    "Good for children",
                    "Wheelchair accessible parking"
                ],
                "check_in_time": "14:00",
                "check_out_time": "11:00",
                "booking_url": "https://www.easemytrip.com/hotels",
                "cancellation_info": "Cancellation policies may vary; please check at the time of booking."
            },
            {
                "id": "atmani-waterfront-resort",
                "name": "Atmani WaterFront Resort- Infinity Pool Resort in Goa",
                "type": "resort",
                "description": "Highly-rated resort with an infinity pool. Phone: 080109 09577. Located in Canacona. Website: https://www.atmaniresort.com/",
                "location": {
                    "name": "Atmani WaterFront Resort",
                    "address": "H.No 530/D, Kola, Canacona, Goa 403702, India",
                    "city": "Canacona",
                    "state": "Goa",
                    "country": "India",
                    "latitude": 15.06174,
                    "longitude": 73.9738266
                },
                "check_in_date": "2025-12-20",
                "check_out_date": "2025-12-26",
                "nights": 7,
                "room_type": "Superior Double Room",
                "guests": 2,
                "cost_per_night": 6000,
                "total_cost": 42000,
                "rating": 4.8,
                "review_count": 220,
                "amenities": [
                    "Good for children"
                ],
                "check_in_time": "14:00",
                "check_out_time": "11:00",
                "booking_url": "https://www.easemytrip.com/hotels",
                "cancellation_info": "Standard cancellation policy applies; check details during booking."
            }
        ],
        "generated_at": "2025-11-02T04:38:48.608269208Z",
        "ai_model": "gemini-2.5-flash-lite",
        "language": "",
        "highlight_activities": [
            "Sunset cruise on the Mandovi River (approx. â‚¹800-1500 per person)",
            "Explore the historic churches of Old Goa (Basilica of Bom Jesus, Se Cathedral) - Free entry, donations welcome",
            "Relax and swim at Palolem Beach, known for its crescent shape and calm waters (Free)",
            "Visit the Saturday Night Market in Arpora for shopping, food, and live music (Entry free, shopping/food costs vary)",
            "Scuba diving or snorkeling trip to Grande Island (approx. â‚¹3000-4500 per person)",
            "Visit Dudhsagar Falls via jeep safari (approx. â‚¹2500-3500 per person, including entry and jeep)",
            "Explore the Portuguese-influenced Fontainhas (Latin Quarter) in Panjim for unique architecture (Free)"
        ],
        "local_insights": [
            "Goa has a unique blend of Indian and Portuguese cultures, reflected in its architecture, cuisine, and way of life.",
            "While beach shacks offer great seafood, don't shy away from trying local Goan thalis at smaller eateries for authentic flavors.",
            "Bargaining is common in local markets, but do so respectfully.",
            "Respect local customs, especially when visiting religious sites. Dress modestly (cover shoulders and knees).",
            "Goa is relatively laid-back; embrace the 'susegad' (Goan siesta) attitude and don't rush.",
            "The best time to visit is during the dry season (October to May) when the weather is pleasant.",
            "Consider renting a scooter or a car for more flexibility in exploring, but be mindful of traffic rules."
        ],
        "travel_tips": [
            "Book flights and accommodation in advance, especially for late December, as it's peak tourist season.",
            "Carry sufficient cash, as not all smaller establishments accept cards.",
            "Stay hydrated by drinking plenty of water, especially when spending time outdoors.",
            "Use ride-sharing apps or pre-negotiate taxi fares to avoid overcharging.",
            "Pack light cotton clothing, swimwear, sunscreen, a hat, and insect repellent.",
            "Carry a basic first-aid kit for any minor ailments.",
            "Be aware of your surroundings, especially on crowded beaches and markets."
        ],
        "weather_info": {
            "season": "Winter/Dry Season",
            "description": "The weather in Goa during late December is typically very pleasant. It's characterized by clear skies, low humidity, and comfortable temperatures, ideal for beach activities and sightseeing.",
            "avg_min_temp": 22,
            "avg_max_temp": 31,
            "recommendation": "Pack light cotton clothing, swimwear, shorts, t-shirts, a light jacket or shawl for evenings, sunscreen (SPF 30+), a hat, sunglasses, and comfortable walking shoes or sandals. An umbrella is generally not needed, but a light rain jacket is always a good precaution."
        },
        "main_transport": [
            {
                "id": "transport-1",
                "mode": "flight",
                "from_location": {
                    "name": "Kempegowda International Airport Bengaluru",
                    "address": "Devanahalli, Bengaluru, Karnataka 560300",
                    "city": "Bengaluru",
                    "state": "",
                    "country": "",
                    "latitude": 0,
                    "longitude": 0
                },
                "to_location": {
                    "name": "Goa International Airport",
                    "address": "Dabolim, Goa 403801",
                    "city": "Goa",
                    "state": "",
                    "country": "",
                    "latitude": 0,
                    "longitude": 0
                },
                "departure_time": "08:00",
                "arrival_time": "09:30",
                "duration": "1h 30m",
                "cost": 8000,
                "cost_per_person": 4000,
                "description": "This option involves a short taxi ride from Chikkamagaluru to Bengaluru Airport, followed by a direct flight to Goa. It's the fastest way to reach your destination.",
                "booking_url": "https://www.easemytrip.com/flights",
                "notes": [
                    "Requires a taxi from Chikkamagaluru to Bengaluru Airport (approx. 3-4 hours, ~INR 3000-4000).",
                    "Flight prices are estimates for December 2025 and can vary.",
                    "Book in advance for better fares."
                ],
                "carrier": "IndiGo Airlines",
                "service_class": "Economy",
                "vehicle_number": "6E-2345",
                "route_type": "Direct"
            },
            {
                "id": "transport-2",
                "mode": "car",
                "from_location": {
                    "name": "Chikkamagaluru Bus Stand",
                    "address": "Near Main Road, Chikkamagaluru, Karnataka",
                    "city": "Chikkamagaluru",
                    "state": "",
                    "country": "",
                    "latitude": 0,
                    "longitude": 0
                },
                "to_location": {
                    "name": "Goa",
                    "address": "Specific destination in Goa",
                    "city": "Goa",
                    "state": "",
                    "country": "",
                    "latitude": 0,
                    "longitude": 0
                },
                "departure_time": "07:00",
                "arrival_time": "13:10",
                "duration": "6h 10m",
                "cost": 5429,
                "cost_per_person": 2714.5,
                "description": "A comfortable self-drive or hired car journey offering flexibility. You can stop at scenic spots along the way if time permits.",
                "booking_url": "https://www.easemytrip.com/cabs",
                "notes": [
                    "Estimated cost based on 429 km at INR 12.65/km (average for mid-range car).",
                    "Fuel costs are additional and depend on vehicle mileage.",
                    "Consider hiring a cab with a driver for a more relaxed journey.",
                    "The route passes through scenic Western Ghats."
                ],
                "carrier": "Self-Drive/Cab Rental",
                "service_class": "Sedan/SUV",
                "vehicle_number": "KA-XX-YYYY",
                "route_type": "Direct"
            },
            {
                "id": "transport-3",
                "mode": "bus",
                "from_location": {
                    "name": "Chikkamagaluru Bus Stand",
                    "address": "Near Main Road, Chikkamagaluru, Karnataka",
                    "city": "Chikkamagaluru",
                    "state": "",
                    "country": "",
                    "latitude": 0,
                    "longitude": 0
                },
                "to_location": {
                    "name": "Panaji KTC Bus Stand",
                    "address": "Kadamba Plateau, Panaji, Goa 403001",
                    "city": "Goa",
                    "state": "",
                    "country": "",
                    "latitude": 0,
                    "longitude": 0
                },
                "departure_time": "20:00",
                "arrival_time": "07:00",
                "duration": "11h 0m",
                "cost": 3000,
                "cost_per_person": 1500,
                "description": "An overnight AC sleeper bus journey, a budget-friendly option that saves on accommodation costs for the night.",
                "booking_url": "https://www.easemytrip.com/bus",
                "notes": [
                    "Bus availability and timings can vary; booking in advance is highly recommended for December.",
                    "The total travel time can extend up to 13 hours depending on traffic and stops.",
                    "This is a cost-effective option for mid-range travelers."
                ],
                "carrier": "KSRTC (Karnataka State Road Transport Corporation)",
                "service_class": "AC Sleeper",
                "vehicle_number": "Multi-Axle Sleeper",
                "route_type": "Non-Stop/Limited Stops"
            }
        ]
    },
    "timestamp": "2025-11-02T04:40:44.96171111Z",
    "trip_id": "e052243e-3838-46ad-9ce6-8062baedc2c0"
}