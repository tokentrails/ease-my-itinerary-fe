export const ProfileTripsData={
    "success": true,
    "message": "Retrieved 10 trip(s)",
    "data": {
        "trips": [
            {
                "id": "a4759167-4e4e-483d-8653-5adfebd9a485",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "confirmed",
                "source": "Chikkamagaluru",
                "destination": "Goa",
                "start_date": "2025-11-03",
                "end_date": "2025-11-04",
                "duration_days": 2,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 20000,
                "saved": 0,
                "total_cost": 19360,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 6000,
                    "transport": 5900,
                    "activities": 3200,
                    "meals": 2500,
                    "miscellaneous": 1760
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-03",
                        "title": "Arrival, Old Goa Heritage & Fontainhas Charm",
                        "description": "Arrive in Goa, drop your luggage at the serene Island House on Divar, then immerse yourself in the rich colonial history of Old Goa before exploring the vibrant Latin Quarter of Fontainhas. Return to your guesthouse for check-in and relaxation.",
                        "events": [
                            {
                                "id": "day1-transport-arrival",
                                "event_type": "transport",
                                "start_time": "08:00",
                                "end_time": "09:30",
                                "transport": {
                                    "id": "",
                                    "mode": "bus_and_taxi_ferry",
                                    "from_location": {
                                        "name": "Panjim Kadamba Bus Terminus",
                                        "address": "Kadamba Bus Terminus, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5008,
                                        "longitude": 73.8282
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "duration": "1h 30m",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "description": "Arrival by overnight AC Sleeper bus from Chikkamagaluru to Panjim. Followed by a taxi/auto ride to Ribandar ferry point, a short ferry crossing to Divar Island, and then a local auto/taxi to Island House Goa. This transfer ensures a smooth transition to your tranquil island accommodation."
                                }
                            },
                            {
                                "id": "day1-luggage-drop",
                                "event_type": "activity",
                                "start_time": "09:30",
                                "end_time": "10:00",
                                "activity": {
                                    "id": "",
                                    "name": "Luggage Drop at Island House Goa",
                                    "description": "Upon arrival, drop your luggage at Island House Goa's reception. As check-in is later, this allows you to start your day's exploration without delay.",
                                    "category": "Accommodation",
                                    "type": "Logistics",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "tips": [
                                        "Inform the reception about your early arrival and check-in time."
                                    ],
                                    "opening_hours": "00:00 - 23:59",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-transport-to-oldgoa",
                                "event_type": "transport",
                                "start_time": "10:00",
                                "end_time": "10:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto_ferry",
                                    "from_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "to_location": {
                                        "name": "Old Goa (Basilica of Bom Jesus)",
                                        "address": "Old Goa, Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.498453,
                                        "longitude": 73.911676
                                    },
                                    "duration": "30m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "A short local auto-rickshaw ride and ferry crossing from Divar Island to the historical site of Old Goa."
                                }
                            },
                            {
                                "id": "day1-activity-basilica",
                                "event_type": "activity",
                                "start_time": "10:30",
                                "end_time": "12:00",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Basilica of Bom Jesus",
                                    "description": "A UNESCO World Heritage site, this iconic basilica houses the mortal remains of St. Francis Xavier, a revered saint. Its Baroque architecture and historical significance offer a deep dive into Goa's colonial heritage.",
                                    "category": "Heritage",
                                    "type": "Religious Site",
                                    "location": {
                                        "name": "Basilica of Bom Jesus",
                                        "address": "Old Goa Road, Bainguinim, Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.498453,
                                        "longitude": 73.911676
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.7,
                                    "review_count": 30000,
                                    "tips": [
                                        "Dress modestly, covering shoulders and knees.",
                                        "Silence is appreciated inside the basilica.",
                                        "Photography is usually allowed, but check for any restrictions."
                                    ],
                                    "opening_hours": "09:00 - 18:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-activity-secathedral",
                                "event_type": "activity",
                                "start_time": "12:00",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "",
                                    "name": "Visit Se Cathedral",
                                    "description": "Located adjacent to the Basilica, the Se Cathedral is one of the largest churches in Asia, dedicated to Catherine of Alexandria. Its impressive architecture and serene interior contribute to Old Goa's UNESCO status.",
                                    "category": "Heritage",
                                    "type": "Religious Site",
                                    "location": {
                                        "name": "Se Cathedral",
                                        "address": "Velha Goa, Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4983,
                                        "longitude": 73.9103
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 25000,
                                    "tips": [
                                        "Observe silence and respect the sacred atmosphere.",
                                        "Take time to admire the golden bell, one of the largest in Goa."
                                    ],
                                    "opening_hours": "07:00 - 18:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-meal-lunch",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Goa Streetz / A Goan Cafeteria Brasil",
                                    "description": "Enjoy an authentic Goan lunch at this local cafeteria, conveniently located near the Old Goa heritage sites. Perfect for a mid-range traveler seeking local flavors.",
                                    "cuisine": "Indian, Goan",
                                    "location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrance, Old Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.91369
                                    },
                                    "start_time": "12:30",
                                    "reservation_time": "N/A",
                                    "end_time": "13:30",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 4.6,
                                    "review_count": 208,
                                    "specialties": [
                                        "Goan Thali",
                                        "Fish Curry"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day1-transport-to-fontainhas",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Old Goa",
                                        "address": "Old Goa, Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4983,
                                        "longitude": 73.9103
                                    },
                                    "to_location": {
                                        "name": "Fontainhas, Panjim",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4998,
                                        "longitude": 73.829
                                    },
                                    "duration": "30m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "A convenient auto-rickshaw ride from the historical sites of Old Goa to the charming Latin Quarter of Fontainhas in Panjim."
                                }
                            },
                            {
                                "id": "day1-activity-fontainhas",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:00",
                                "activity": {
                                    "id": "",
                                    "name": "Wander through Fontainhas, Panjim",
                                    "description": "Explore Fontainhas, Goa's vibrant Latin Quarter, a UNESCO Heritage Zone. Admire the colorful Portuguese-style houses, narrow winding streets, and charming cafes. This area offers a glimpse into Goa's unique blend of cultures.",
                                    "category": "Heritage",
                                    "type": "Walking Tour",
                                    "location": {
                                        "name": "Fontainhas, Panjim",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4998,
                                        "longitude": 73.829
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 10000,
                                    "tips": [
                                        "Wear comfortable walking shoes.",
                                        "Carry a camera to capture the picturesque streets.",
                                        "Look out for art galleries and small bakeries."
                                    ],
                                    "opening_hours": "00:00 - 23:59",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-transport-return-hotel",
                                "event_type": "transport",
                                "start_time": "16:00",
                                "end_time": "16:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto_ferry",
                                    "from_location": {
                                        "name": "Fontainhas, Panjim",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4998,
                                        "longitude": 73.829
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "duration": "30m",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "description": "Return journey from Fontainhas to Island House Goa via auto-rickshaw and ferry, allowing for relaxation after a day of exploration."
                                }
                            },
                            {
                                "id": "day1-checkin-relax-evening",
                                "event_type": "activity",
                                "start_time": "16:30",
                                "end_time": "18:00",
                                "activity": {
                                    "id": "",
                                    "name": "Check-in and Freshen Up at Island House Goa",
                                    "description": "Formally check into your room at Island House Goa and take some time to relax, unpack, and freshen up after a day of exploration.",
                                    "category": "Accommodation",
                                    "type": "Relaxation",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "opening_hours": "00:00 - 23:59",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-meal-dinner",
                                "event_type": "meal",
                                "start_time": "19:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Island House Goa Dining (or local eatery)",
                                    "description": "Enjoy a tranquil dinner, either at the guesthouse's own dining facility or a nearby local eatery on Divar Island, experiencing the island's calm evening atmosphere.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "19:00",
                                    "reservation_time": "N/A",
                                    "end_time": "20:30",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.5,
                                    "review_count": 50,
                                    "specialties": [
                                        "Fresh Seafood",
                                        "Local Goan Dishes"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2600
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-04",
                        "title": "Ancestral Goa, Wellness & Departure",
                        "description": "Discover the cultural insights of Ancestral Goa, indulge in a rejuvenating wellness treatment, and prepare for your departure, leaving with a refreshed mind and body.",
                        "events": [
                            {
                                "id": "day2-meal-breakfast",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Island House Goa",
                                    "description": "Start your day with a wholesome breakfast at your tranquil guesthouse on Divar Island, preparing for a day of cultural immersion and wellness.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "08:00",
                                    "reservation_time": "N/A",
                                    "end_time": "09:00",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-hotel-checkout-luggage",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "10:00",
                                "activity": {
                                    "id": "",
                                    "name": "Check-out from Island House Goa & Luggage Storage",
                                    "description": "Complete your check-out formalities by the official check-out time. You can store your luggage at the guesthouse reception while you enjoy your last day in Goa.",
                                    "category": "Accommodation",
                                    "type": "Departure Prep",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "tips": [
                                        "Confirm luggage storage availability with the guesthouse staff."
                                    ],
                                    "opening_hours": "00:00 - 23:59",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-transport-to-ancestralgoa",
                                "event_type": "transport",
                                "start_time": "10:00",
                                "end_time": "10:45",
                                "transport": {
                                    "id": "",
                                    "mode": "taxi_ferry",
                                    "from_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "to_location": {
                                        "name": "Ancestral Goa (Big Foot Museum)",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Loutolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "duration": "45m",
                                    "cost": 900,
                                    "cost_per_person": 900,
                                    "description": "Travel from Divar Island to Loutolim, the home of Ancestral Goa, involving a ferry crossing and a taxi ride to the museum."
                                }
                            },
                            {
                                "id": "day2-activity-ancestralgoa",
                                "event_type": "activity",
                                "start_time": "10:45",
                                "end_time": "12:45",
                                "activity": {
                                    "id": "",
                                    "name": "Discover Ancestral Goa (Big Foot Museum)",
                                    "description": "Explore this unique open-air museum and theme park that recreates a traditional Goan village. It offers fascinating insights into local culture, heritage, and the daily life of Goans, with an art gallery and restaurant on-site.",
                                    "category": "Heritage",
                                    "type": "Museum",
                                    "location": {
                                        "name": "Big Foot Goa",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Loutolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 200,
                                    "cost_per_person": 200,
                                    "booking_required": false,
                                    "rating": 4.1,
                                    "review_count": 8454,
                                    "tips": [
                                        "Allocate enough time to explore the various exhibits and recreated village scenes.",
                                        "Look out for the giant footprint, which gives the museum its name."
                                    ],
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-meal-lunch",
                                "event_type": "meal",
                                "start_time": "12:45",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "FOLGA GOA",
                                    "description": "Enjoy a mid-range Indian meal at FOLGA GOA, known for its local flavors and comfortable ambiance, located conveniently after your visit to Ancestral Goa.",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "FOLGA GOA",
                                        "address": "Near, Western Byp Rd, Seraulim Railway Station, Seraulim, Mungul",
                                        "city": "Seraulim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.287781,
                                        "longitude": 73.946142
                                    },
                                    "start_time": "12:45",
                                    "reservation_time": "N/A",
                                    "end_time": "13:45",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.6,
                                    "review_count": 1957,
                                    "specialties": [
                                        "Goan Curries",
                                        "Seafood"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-transport-to-wellness",
                                "event_type": "transport",
                                "start_time": "13:45",
                                "end_time": "14:15",
                                "transport": {
                                    "id": "",
                                    "mode": "taxi",
                                    "from_location": {
                                        "name": "FOLGA GOA",
                                        "address": "Near, Western Byp Rd, Seraulim Railway Station, Seraulim, Mungul",
                                        "city": "Seraulim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.287781,
                                        "longitude": 73.946142
                                    },
                                    "to_location": {
                                        "name": "Mid-range Wellness Center (e.g., in Margao/Panjim outskirts)",
                                        "address": "Approximate location for a wellness center",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.35,
                                        "longitude": 73.95
                                    },
                                    "duration": "30m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "A short taxi ride to a reputable wellness center for your Ayurvedic treatment."
                                }
                            },
                            {
                                "id": "day2-activity-wellness",
                                "event_type": "activity",
                                "start_time": "14:15",
                                "end_time": "16:15",
                                "activity": {
                                    "id": "",
                                    "name": "Indulge in a Rejuvenating Ayurvedic Massage/Wellness Treatment",
                                    "description": "Experience traditional Indian healing with a rejuvenating Ayurvedic massage or wellness treatment. This activity aligns perfectly with your 'Wellness' interest, offering relaxation and therapeutic benefits.",
                                    "category": "Wellness",
                                    "type": "Spa/Massage",
                                    "location": {
                                        "name": "Reputable Wellness Center",
                                        "address": "Specific address to be confirmed upon booking",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.35,
                                        "longitude": 73.95
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 3000,
                                    "cost_per_person": 3000,
                                    "booking_required": true,
                                    "rating": 4.5,
                                    "review_count": 500,
                                    "tips": [
                                        "Book your session in advance to secure your preferred time.",
                                        "Arrive a few minutes early to fill out any necessary forms."
                                    ],
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-transport-to-busstand",
                                "event_type": "transport",
                                "start_time": "16:15",
                                "end_time": "17:15",
                                "transport": {
                                    "id": "",
                                    "mode": "taxi",
                                    "from_location": {
                                        "name": "Mid-range Wellness Center",
                                        "address": "Approximate location for a wellness center",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.35,
                                        "longitude": 73.95
                                    },
                                    "to_location": {
                                        "name": "Panjim Kadamba Bus Terminus",
                                        "address": "Kadamba Bus Terminus, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5008,
                                        "longitude": 73.8282
                                    },
                                    "duration": "1h 0m",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "description": "Transfer from the wellness center directly to Panjim Kadamba Bus Terminus for your onward journey, retrieving luggage from Island House Goa on the way via prior arrangement if needed, or arranging for its direct transfer."
                                }
                            },
                            {
                                "id": "day2-meal-dinner",
                                "event_type": "meal",
                                "start_time": "19:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Local Eatery near Panjim Bus Stand",
                                    "description": "Grab a quick and light dinner or snack near the Panjim Bus Terminus before boarding your overnight bus back to Chikkamagaluru.",
                                    "cuisine": "Indian, Snacks",
                                    "location": {
                                        "name": "Panjim Kadamba Bus Terminus",
                                        "address": "Kadamba Bus Terminus, Panaji, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5008,
                                        "longitude": 73.8282
                                    },
                                    "start_time": "19:00",
                                    "reservation_time": "N/A",
                                    "end_time": "19:45",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 3.8,
                                    "review_count": 100,
                                    "specialties": [
                                        "Goan snacks",
                                        "Thali"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-transport-departure",
                                "event_type": "transport",
                                "start_time": "20:00",
                                "end_time": "08:00",
                                "transport": {
                                    "id": "",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Panjim Kadamba Bus Terminus",
                                        "address": "Kadamba Bus Terminus, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5008,
                                        "longitude": 73.8282
                                    },
                                    "to_location": {
                                        "name": "Chikkamagaluru Bus Stand",
                                        "address": "Chikkamagaluru KSRTC Bus Stand, Basavanahalli Main Road, Chikkamagaluru, Karnataka",
                                        "city": "Chikkamagaluru",
                                        "state": "Karnataka",
                                        "country": "India",
                                        "latitude": 13.315,
                                        "longitude": 75.776
                                    },
                                    "duration": "12h 0m",
                                    "cost": 1500,
                                    "cost_per_person": 1500,
                                    "description": "Overnight AC Sleeper bus journey back to Chikkamagaluru, departing from Panjim. This comfortable journey allows you to rest after your trip.",
                                    "booking_url": "https://www.easemytrip.com/bus",
                                    "carrier": "VRL Travels",
                                    "service_class": "AC Sleeper",
                                    "vehicle_number": "VRL Coach 789",
                                    "route_type": "Direct"
                                }
                            }
                        ],
                        "daily_cost": 7100
                    }
                ],
                "accommodations": [
                    {
                        "id": "island-house-goa-divar",
                        "name": "Island House Goa",
                        "type": "guesthouse",
                        "description": "Nestled on the serene Divar Island, Island House Goa offers a tranquil retreat that perfectly embodies the 'Wellness Heritage' theme of your trip. This charming boutique guesthouse provides an authentic Goan experience away from the bustling tourist hubs, yet remains conveniently close to the UNESCO World Heritage sites of Old Goa, including the Basilica of Bom Jesus and Se Cathedral. Its peaceful island setting, accessed by a short ferry ride, is ideal for relaxation, mindful contemplation, and experiencing the slower pace of Goan life. The guesthouse's unique island location allows for a deep dive into local culture and heritage, while providing a serene environment conducive to wellness and rejuvenation.",
                        "location": {
                            "name": "Divar Island",
                            "address": "No. 45, Piedade, Goltim, Divar, Goa",
                            "city": "Divar Island",
                            "state": "Goa",
                            "country": "India",
                            "latitude": 15.52304,
                            "longitude": 73.9008076
                        },
                        "check_in_date": "2025-11-03",
                        "check_out_date": "2025-11-04",
                        "nights": 1,
                        "room_type": "Standard Double Room",
                        "guests": 1,
                        "cost_per_night": 6000,
                        "total_cost": 6000,
                        "rating": 4.6,
                        "review_count": 168,
                        "amenities": [
                            "Air-conditioned rooms",
                            "Free Wi-Fi",
                            "Private bathrooms",
                            "Breakfast (typically included in such stays)",
                            "Garden/Outdoor seating area",
                            "Accepts debit cards",
                            "Accepts credit cards",
                            "Good for children (atmosphere)"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "http://islandhousegoa.com/",
                        "cancellation_info": "Flexible cancellation policies are typically offered by boutique guesthouses; it is advisable to check the specific policy at the time of booking."
                    }
                ],
                "generated_at": "2025-11-02T13:39:45.705725Z",
                "ai_model": "gemini-2.5-flash",
                "language": "",
                "highlight_activities": [
                    "Explore the UNESCO World Heritage sites of Old Goa, including the Basilica of Bom Jesus and Se Cathedral, for a deep dive into its colonial heritage.",
                    "Wander through Fontainhas, Goa's vibrant Latin Quarter in Panjim, admiring its colorful Portuguese-style architecture and charming lanes.",
                    "Visit a traditional Spice Plantation to learn about indigenous spices, their cultivation, and their historical medicinal uses, blending heritage with natural wellness.",
                    "Indulge in a rejuvenating Ayurvedic massage or wellness treatment at a reputable center, embracing traditional Indian healing practices.",
                    "Participate in a serene beach yoga or meditation session, finding tranquility amidst the calming sounds of the Arabian Sea.",
                    "Discover Ancestral Goa (Big Foot Museum) to experience a recreated traditional Goan village, offering insights into local culture and heritage.",
                    "Spend a peaceful evening at a less-crowded beach like Mandrem or Palolem, focusing on relaxation and mindful contemplation."
                ],
                "local_insights": [
                    "Embrace 'Susegad,' the laid-back, relaxed attitude deeply ingrained in Goan culture; don't rush, just enjoy the moment.",
                    "While English and Hindi are widely spoken, a few Konkani phrases like 'Dev Borem Korum' (Thank you) are always appreciated by locals.",
                    "Dress modestly when visiting churches, temples, or other religious sites; shoulders and knees should ideally be covered.",
                    "Goan cuisine is a unique blend of Indian and Portuguese flavors; don't miss seafood curries, Xacuti, Vindaloo, and the sweet Bebinca.",
                    "Bargaining is common and expected in local markets (e.g., Anjuna Flea Market, Mapusa Market) but not in fixed-price shops or restaurants.",
                    "Goa is a melting pot of cultures with peaceful coexistence between different religious communities; respect local customs and traditions.",
                    "Tipping is not mandatory but appreciated for good service in restaurants, by taxi drivers, and at wellness centers."
                ],
                "weather_info": {
                    "season": "Post-Monsoon / Early Winter",
                    "description": "November marks the beginning of the tourist season in Goa, characterized by pleasant, sunny, and dry weather. Humidity starts to decrease, making it ideal for outdoor activities and beach visits.",
                    "avg_min_temp": 21,
                    "avg_max_temp": 32,
                    "recommendation": "Pack light, breathable cotton clothing, swimwear, comfortable walking shoes or sandals, a wide-brimmed hat, sunglasses, and high-SPF sunscreen. A light scarf or shawl might be useful for evenings or air-conditioned environments, though generally not essential."
                }
            },
            {
                "id": "76e1fddd-7512-41f1-895a-00cc010eb0fb",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "source": "Chikkamagaluru",
                "destination": "Goa",
                "start_date": "2025-11-03",
                "end_date": "2025-11-04",
                "duration_days": 2,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 20000,
                "saved": 0,
                "total_cost": 19360,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 6000,
                    "transport": 5900,
                    "activities": 3200,
                    "meals": 2500,
                    "miscellaneous": 1760
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-03",
                        "title": "Arrival, Old Goa Heritage & Fontainhas Charm",
                        "description": "Arrive in Goa, drop your luggage at the serene Island House on Divar, then immerse yourself in the rich colonial history of Old Goa before exploring the vibrant Latin Quarter of Fontainhas. Return to your guesthouse for check-in and relaxation.",
                        "events": [
                            {
                                "id": "day1-transport-arrival",
                                "event_type": "transport",
                                "start_time": "08:00",
                                "end_time": "09:30",
                                "transport": {
                                    "id": "",
                                    "mode": "bus_and_taxi_ferry",
                                    "from_location": {
                                        "name": "Panjim Kadamba Bus Terminus",
                                        "address": "Kadamba Bus Terminus, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5008,
                                        "longitude": 73.8282
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "duration": "1h 30m",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "description": "Arrival by overnight AC Sleeper bus from Chikkamagaluru to Panjim. Followed by a taxi/auto ride to Ribandar ferry point, a short ferry crossing to Divar Island, and then a local auto/taxi to Island House Goa. This transfer ensures a smooth transition to your tranquil island accommodation."
                                }
                            },
                            {
                                "id": "day1-luggage-drop",
                                "event_type": "activity",
                                "start_time": "09:30",
                                "end_time": "10:00",
                                "activity": {
                                    "id": "",
                                    "name": "Luggage Drop at Island House Goa",
                                    "description": "Upon arrival, drop your luggage at Island House Goa's reception. As check-in is later, this allows you to start your day's exploration without delay.",
                                    "category": "Accommodation",
                                    "type": "Logistics",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "tips": [
                                        "Inform the reception about your early arrival and check-in time."
                                    ],
                                    "opening_hours": "00:00 - 23:59",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-transport-to-oldgoa",
                                "event_type": "transport",
                                "start_time": "10:00",
                                "end_time": "10:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto_ferry",
                                    "from_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "to_location": {
                                        "name": "Old Goa (Basilica of Bom Jesus)",
                                        "address": "Old Goa, Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.498453,
                                        "longitude": 73.911676
                                    },
                                    "duration": "30m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "A short local auto-rickshaw ride and ferry crossing from Divar Island to the historical site of Old Goa."
                                }
                            },
                            {
                                "id": "day1-activity-basilica",
                                "event_type": "activity",
                                "start_time": "10:30",
                                "end_time": "12:00",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Basilica of Bom Jesus",
                                    "description": "A UNESCO World Heritage site, this iconic basilica houses the mortal remains of St. Francis Xavier, a revered saint. Its Baroque architecture and historical significance offer a deep dive into Goa's colonial heritage.",
                                    "category": "Heritage",
                                    "type": "Religious Site",
                                    "location": {
                                        "name": "Basilica of Bom Jesus",
                                        "address": "Old Goa Road, Bainguinim, Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.498453,
                                        "longitude": 73.911676
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.7,
                                    "review_count": 30000,
                                    "tips": [
                                        "Dress modestly, covering shoulders and knees.",
                                        "Silence is appreciated inside the basilica.",
                                        "Photography is usually allowed, but check for any restrictions."
                                    ],
                                    "opening_hours": "09:00 - 18:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-activity-secathedral",
                                "event_type": "activity",
                                "start_time": "12:00",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "",
                                    "name": "Visit Se Cathedral",
                                    "description": "Located adjacent to the Basilica, the Se Cathedral is one of the largest churches in Asia, dedicated to Catherine of Alexandria. Its impressive architecture and serene interior contribute to Old Goa's UNESCO status.",
                                    "category": "Heritage",
                                    "type": "Religious Site",
                                    "location": {
                                        "name": "Se Cathedral",
                                        "address": "Velha Goa, Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4983,
                                        "longitude": 73.9103
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 25000,
                                    "tips": [
                                        "Observe silence and respect the sacred atmosphere.",
                                        "Take time to admire the golden bell, one of the largest in Goa."
                                    ],
                                    "opening_hours": "07:00 - 18:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-meal-lunch",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Goa Streetz / A Goan Cafeteria Brasil",
                                    "description": "Enjoy an authentic Goan lunch at this local cafeteria, conveniently located near the Old Goa heritage sites. Perfect for a mid-range traveler seeking local flavors.",
                                    "cuisine": "Indian, Goan",
                                    "location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrance, Old Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.91369
                                    },
                                    "start_time": "12:30",
                                    "reservation_time": "N/A",
                                    "end_time": "13:30",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 4.6,
                                    "review_count": 208,
                                    "specialties": [
                                        "Goan Thali",
                                        "Fish Curry"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day1-transport-to-fontainhas",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Old Goa",
                                        "address": "Old Goa, Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4983,
                                        "longitude": 73.9103
                                    },
                                    "to_location": {
                                        "name": "Fontainhas, Panjim",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4998,
                                        "longitude": 73.829
                                    },
                                    "duration": "30m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "A convenient auto-rickshaw ride from the historical sites of Old Goa to the charming Latin Quarter of Fontainhas in Panjim."
                                }
                            },
                            {
                                "id": "day1-activity-fontainhas",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:00",
                                "activity": {
                                    "id": "",
                                    "name": "Wander through Fontainhas, Panjim",
                                    "description": "Explore Fontainhas, Goa's vibrant Latin Quarter, a UNESCO Heritage Zone. Admire the colorful Portuguese-style houses, narrow winding streets, and charming cafes. This area offers a glimpse into Goa's unique blend of cultures.",
                                    "category": "Heritage",
                                    "type": "Walking Tour",
                                    "location": {
                                        "name": "Fontainhas, Panjim",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4998,
                                        "longitude": 73.829
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 10000,
                                    "tips": [
                                        "Wear comfortable walking shoes.",
                                        "Carry a camera to capture the picturesque streets.",
                                        "Look out for art galleries and small bakeries."
                                    ],
                                    "opening_hours": "00:00 - 23:59",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-transport-return-hotel",
                                "event_type": "transport",
                                "start_time": "16:00",
                                "end_time": "16:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto_ferry",
                                    "from_location": {
                                        "name": "Fontainhas, Panjim",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4998,
                                        "longitude": 73.829
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "duration": "30m",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "description": "Return journey from Fontainhas to Island House Goa via auto-rickshaw and ferry, allowing for relaxation after a day of exploration."
                                }
                            },
                            {
                                "id": "day1-checkin-relax-evening",
                                "event_type": "activity",
                                "start_time": "16:30",
                                "end_time": "18:00",
                                "activity": {
                                    "id": "",
                                    "name": "Check-in and Freshen Up at Island House Goa",
                                    "description": "Formally check into your room at Island House Goa and take some time to relax, unpack, and freshen up after a day of exploration.",
                                    "category": "Accommodation",
                                    "type": "Relaxation",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "opening_hours": "00:00 - 23:59",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-meal-dinner",
                                "event_type": "meal",
                                "start_time": "19:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Island House Goa Dining (or local eatery)",
                                    "description": "Enjoy a tranquil dinner, either at the guesthouse's own dining facility or a nearby local eatery on Divar Island, experiencing the island's calm evening atmosphere.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "19:00",
                                    "reservation_time": "N/A",
                                    "end_time": "20:30",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.5,
                                    "review_count": 50,
                                    "specialties": [
                                        "Fresh Seafood",
                                        "Local Goan Dishes"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2600
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-04",
                        "title": "Ancestral Goa, Wellness & Departure",
                        "description": "Discover the cultural insights of Ancestral Goa, indulge in a rejuvenating wellness treatment, and prepare for your departure, leaving with a refreshed mind and body.",
                        "events": [
                            {
                                "id": "day2-meal-breakfast",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Island House Goa",
                                    "description": "Start your day with a wholesome breakfast at your tranquil guesthouse on Divar Island, preparing for a day of cultural immersion and wellness.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "08:00",
                                    "reservation_time": "N/A",
                                    "end_time": "09:00",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-hotel-checkout-luggage",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "10:00",
                                "activity": {
                                    "id": "",
                                    "name": "Check-out from Island House Goa & Luggage Storage",
                                    "description": "Complete your check-out formalities by the official check-out time. You can store your luggage at the guesthouse reception while you enjoy your last day in Goa.",
                                    "category": "Accommodation",
                                    "type": "Departure Prep",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "tips": [
                                        "Confirm luggage storage availability with the guesthouse staff."
                                    ],
                                    "opening_hours": "00:00 - 23:59",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-transport-to-ancestralgoa",
                                "event_type": "transport",
                                "start_time": "10:00",
                                "end_time": "10:45",
                                "transport": {
                                    "id": "",
                                    "mode": "taxi_ferry",
                                    "from_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "to_location": {
                                        "name": "Ancestral Goa (Big Foot Museum)",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Loutolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "duration": "45m",
                                    "cost": 900,
                                    "cost_per_person": 900,
                                    "description": "Travel from Divar Island to Loutolim, the home of Ancestral Goa, involving a ferry crossing and a taxi ride to the museum."
                                }
                            },
                            {
                                "id": "day2-activity-ancestralgoa",
                                "event_type": "activity",
                                "start_time": "10:45",
                                "end_time": "12:45",
                                "activity": {
                                    "id": "",
                                    "name": "Discover Ancestral Goa (Big Foot Museum)",
                                    "description": "Explore this unique open-air museum and theme park that recreates a traditional Goan village. It offers fascinating insights into local culture, heritage, and the daily life of Goans, with an art gallery and restaurant on-site.",
                                    "category": "Heritage",
                                    "type": "Museum",
                                    "location": {
                                        "name": "Big Foot Goa",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Loutolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 200,
                                    "cost_per_person": 200,
                                    "booking_required": false,
                                    "rating": 4.1,
                                    "review_count": 8454,
                                    "tips": [
                                        "Allocate enough time to explore the various exhibits and recreated village scenes.",
                                        "Look out for the giant footprint, which gives the museum its name."
                                    ],
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-meal-lunch",
                                "event_type": "meal",
                                "start_time": "12:45",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "FOLGA GOA",
                                    "description": "Enjoy a mid-range Indian meal at FOLGA GOA, known for its local flavors and comfortable ambiance, located conveniently after your visit to Ancestral Goa.",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "FOLGA GOA",
                                        "address": "Near, Western Byp Rd, Seraulim Railway Station, Seraulim, Mungul",
                                        "city": "Seraulim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.287781,
                                        "longitude": 73.946142
                                    },
                                    "start_time": "12:45",
                                    "reservation_time": "N/A",
                                    "end_time": "13:45",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.6,
                                    "review_count": 1957,
                                    "specialties": [
                                        "Goan Curries",
                                        "Seafood"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-transport-to-wellness",
                                "event_type": "transport",
                                "start_time": "13:45",
                                "end_time": "14:15",
                                "transport": {
                                    "id": "",
                                    "mode": "taxi",
                                    "from_location": {
                                        "name": "FOLGA GOA",
                                        "address": "Near, Western Byp Rd, Seraulim Railway Station, Seraulim, Mungul",
                                        "city": "Seraulim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.287781,
                                        "longitude": 73.946142
                                    },
                                    "to_location": {
                                        "name": "Mid-range Wellness Center (e.g., in Margao/Panjim outskirts)",
                                        "address": "Approximate location for a wellness center",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.35,
                                        "longitude": 73.95
                                    },
                                    "duration": "30m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "A short taxi ride to a reputable wellness center for your Ayurvedic treatment."
                                }
                            },
                            {
                                "id": "day2-activity-wellness",
                                "event_type": "activity",
                                "start_time": "14:15",
                                "end_time": "16:15",
                                "activity": {
                                    "id": "",
                                    "name": "Indulge in a Rejuvenating Ayurvedic Massage/Wellness Treatment",
                                    "description": "Experience traditional Indian healing with a rejuvenating Ayurvedic massage or wellness treatment. This activity aligns perfectly with your 'Wellness' interest, offering relaxation and therapeutic benefits.",
                                    "category": "Wellness",
                                    "type": "Spa/Massage",
                                    "location": {
                                        "name": "Reputable Wellness Center",
                                        "address": "Specific address to be confirmed upon booking",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.35,
                                        "longitude": 73.95
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 3000,
                                    "cost_per_person": 3000,
                                    "booking_required": true,
                                    "rating": 4.5,
                                    "review_count": 500,
                                    "tips": [
                                        "Book your session in advance to secure your preferred time.",
                                        "Arrive a few minutes early to fill out any necessary forms."
                                    ],
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-transport-to-busstand",
                                "event_type": "transport",
                                "start_time": "16:15",
                                "end_time": "17:15",
                                "transport": {
                                    "id": "",
                                    "mode": "taxi",
                                    "from_location": {
                                        "name": "Mid-range Wellness Center",
                                        "address": "Approximate location for a wellness center",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.35,
                                        "longitude": 73.95
                                    },
                                    "to_location": {
                                        "name": "Panjim Kadamba Bus Terminus",
                                        "address": "Kadamba Bus Terminus, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5008,
                                        "longitude": 73.8282
                                    },
                                    "duration": "1h 0m",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "description": "Transfer from the wellness center directly to Panjim Kadamba Bus Terminus for your onward journey, retrieving luggage from Island House Goa on the way via prior arrangement if needed, or arranging for its direct transfer."
                                }
                            },
                            {
                                "id": "day2-meal-dinner",
                                "event_type": "meal",
                                "start_time": "19:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Local Eatery near Panjim Bus Stand",
                                    "description": "Grab a quick and light dinner or snack near the Panjim Bus Terminus before boarding your overnight bus back to Chikkamagaluru.",
                                    "cuisine": "Indian, Snacks",
                                    "location": {
                                        "name": "Panjim Kadamba Bus Terminus",
                                        "address": "Kadamba Bus Terminus, Panaji, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5008,
                                        "longitude": 73.8282
                                    },
                                    "start_time": "19:00",
                                    "reservation_time": "N/A",
                                    "end_time": "19:45",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 3.8,
                                    "review_count": 100,
                                    "specialties": [
                                        "Goan snacks",
                                        "Thali"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-transport-departure",
                                "event_type": "transport",
                                "start_time": "20:00",
                                "end_time": "08:00",
                                "transport": {
                                    "id": "",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Panjim Kadamba Bus Terminus",
                                        "address": "Kadamba Bus Terminus, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5008,
                                        "longitude": 73.8282
                                    },
                                    "to_location": {
                                        "name": "Chikkamagaluru Bus Stand",
                                        "address": "Chikkamagaluru KSRTC Bus Stand, Basavanahalli Main Road, Chikkamagaluru, Karnataka",
                                        "city": "Chikkamagaluru",
                                        "state": "Karnataka",
                                        "country": "India",
                                        "latitude": 13.315,
                                        "longitude": 75.776
                                    },
                                    "duration": "12h 0m",
                                    "cost": 1500,
                                    "cost_per_person": 1500,
                                    "description": "Overnight AC Sleeper bus journey back to Chikkamagaluru, departing from Panjim. This comfortable journey allows you to rest after your trip.",
                                    "booking_url": "https://www.easemytrip.com/bus",
                                    "carrier": "VRL Travels",
                                    "service_class": "AC Sleeper",
                                    "vehicle_number": "VRL Coach 789",
                                    "route_type": "Direct"
                                }
                            }
                        ],
                        "daily_cost": 7100
                    }
                ],
                "accommodations": [
                    {
                        "id": "island-house-goa-divar",
                        "name": "Island House Goa",
                        "type": "guesthouse",
                        "description": "Nestled on the serene Divar Island, Island House Goa offers a tranquil retreat that perfectly embodies the 'Wellness Heritage' theme of your trip. This charming boutique guesthouse provides an authentic Goan experience away from the bustling tourist hubs, yet remains conveniently close to the UNESCO World Heritage sites of Old Goa, including the Basilica of Bom Jesus and Se Cathedral. Its peaceful island setting, accessed by a short ferry ride, is ideal for relaxation, mindful contemplation, and experiencing the slower pace of Goan life. The guesthouse's unique island location allows for a deep dive into local culture and heritage, while providing a serene environment conducive to wellness and rejuvenation.",
                        "location": {
                            "name": "Divar Island",
                            "address": "No. 45, Piedade, Goltim, Divar, Goa",
                            "city": "Divar Island",
                            "state": "Goa",
                            "country": "India",
                            "latitude": 15.52304,
                            "longitude": 73.9008076
                        },
                        "check_in_date": "2025-11-03",
                        "check_out_date": "2025-11-04",
                        "nights": 1,
                        "room_type": "Standard Double Room",
                        "guests": 1,
                        "cost_per_night": 6000,
                        "total_cost": 6000,
                        "rating": 4.6,
                        "review_count": 168,
                        "amenities": [
                            "Air-conditioned rooms",
                            "Free Wi-Fi",
                            "Private bathrooms",
                            "Breakfast (typically included in such stays)",
                            "Garden/Outdoor seating area",
                            "Accepts debit cards",
                            "Accepts credit cards",
                            "Good for children (atmosphere)"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "http://islandhousegoa.com/",
                        "cancellation_info": "Flexible cancellation policies are typically offered by boutique guesthouses; it is advisable to check the specific policy at the time of booking."
                    }
                ],
                "generated_at": "2025-11-02T13:37:53.489293Z",
                "ai_model": "gemini-2.5-flash",
                "language": "",
                "highlight_activities": [
                    "Explore the UNESCO World Heritage sites of Old Goa, including the Basilica of Bom Jesus and Se Cathedral, for a deep dive into its colonial heritage.",
                    "Wander through Fontainhas, Goa's vibrant Latin Quarter in Panjim, admiring its colorful Portuguese-style architecture and charming lanes.",
                    "Visit a traditional Spice Plantation to learn about indigenous spices, their cultivation, and their historical medicinal uses, blending heritage with natural wellness.",
                    "Indulge in a rejuvenating Ayurvedic massage or wellness treatment at a reputable center, embracing traditional Indian healing practices.",
                    "Participate in a serene beach yoga or meditation session, finding tranquility amidst the calming sounds of the Arabian Sea.",
                    "Discover Ancestral Goa (Big Foot Museum) to experience a recreated traditional Goan village, offering insights into local culture and heritage.",
                    "Spend a peaceful evening at a less-crowded beach like Mandrem or Palolem, focusing on relaxation and mindful contemplation."
                ],
                "local_insights": [
                    "Embrace 'Susegad,' the laid-back, relaxed attitude deeply ingrained in Goan culture; don't rush, just enjoy the moment.",
                    "While English and Hindi are widely spoken, a few Konkani phrases like 'Dev Borem Korum' (Thank you) are always appreciated by locals.",
                    "Dress modestly when visiting churches, temples, or other religious sites; shoulders and knees should ideally be covered.",
                    "Goan cuisine is a unique blend of Indian and Portuguese flavors; don't miss seafood curries, Xacuti, Vindaloo, and the sweet Bebinca.",
                    "Bargaining is common and expected in local markets (e.g., Anjuna Flea Market, Mapusa Market) but not in fixed-price shops or restaurants.",
                    "Goa is a melting pot of cultures with peaceful coexistence between different religious communities; respect local customs and traditions.",
                    "Tipping is not mandatory but appreciated for good service in restaurants, by taxi drivers, and at wellness centers."
                ],
                "weather_info": {
                    "season": "Post-Monsoon / Early Winter",
                    "description": "November marks the beginning of the tourist season in Goa, characterized by pleasant, sunny, and dry weather. Humidity starts to decrease, making it ideal for outdoor activities and beach visits.",
                    "avg_min_temp": 21,
                    "avg_max_temp": 32,
                    "recommendation": "Pack light, breathable cotton clothing, swimwear, comfortable walking shoes or sandals, a wide-brimmed hat, sunglasses, and high-SPF sunscreen. A light scarf or shawl might be useful for evenings or air-conditioned environments, though generally not essential."
                }
            },
            {
                "id": "51bd9d9c-3eea-49d4-b3d8-47070c34023f",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "source": "Chikkamagaluru",
                "destination": "Goa",
                "start_date": "2025-11-04",
                "end_date": "2025-11-06",
                "duration_days": 3,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 5000,
                "saved": 0,
                "total_cost": 9130,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 2400,
                    "transport": 3200,
                    "activities": 600,
                    "meals": 2100,
                    "miscellaneous": 830
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-04",
                        "title": "Arrival in Goa & Old Goa Heritage",
                        "description": "Arrive in Panjim, transfer to Divar Island, check into your tranquil guesthouse. Spend the afternoon exploring the UNESCO World Heritage churches of Old Goa and the unique Houses of Goa Museum.",
                        "events": [
                            {
                                "id": "transport-arrival-bus",
                                "event_type": "transport",
                                "start_time": "07:30",
                                "end_time": "07:30",
                                "transport": {
                                    "id": "",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Chikkamagaluru Bus Stand",
                                        "address": "Chikkamagaluru Bus Stand, K.M. Road, Chikkamagaluru, Karnataka",
                                        "city": "Chikkamagaluru",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Panjim Kadamba Bus Stand",
                                        "address": "Kadamba Bus Stand, Panjim, Goa",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "10h 0m",
                                    "cost": 1200,
                                    "cost_per_person": 1200,
                                    "description": "Arrival in Panjim via comfortable overnight AC Sleeper bus from Chikkamagaluru."
                                }
                            },
                            {
                                "id": "transport-panjim-to-divar-hotel",
                                "event_type": "transport",
                                "start_time": "07:30",
                                "end_time": "08:45",
                                "transport": {
                                    "id": "",
                                    "mode": "auto_ferry_auto",
                                    "from_location": {
                                        "name": "Panjim Kadamba Bus Stand",
                                        "address": "Kadamba Bus Stand, Panjim, Goa",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "1h 15m",
                                    "cost": 250,
                                    "cost_per_person": 250,
                                    "description": "Local auto-rickshaw from Panjim Bus Stand to Ribandar ferry point (approx. ₹150), free public ferry to Divar Island, then another auto-rickshaw to Island House Goa (approx. ₹100)."
                                }
                            },
                            {
                                "id": "activity-hotel-checkin",
                                "event_type": "activity",
                                "start_time": "08:45",
                                "end_time": "10:00",
                                "activity": {
                                    "id": "",
                                    "name": "Check-in and Freshen Up",
                                    "description": "Drop luggage and freshen up at Island House Goa. While official check-in is 14:00, luggage drop is usually accommodated.",
                                    "category": "Accommodation",
                                    "type": "Hotel Services",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "opening_hours": "Open 24 hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "meal-day1-breakfast",
                                "event_type": "meal",
                                "start_time": "10:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Island House Goa (or local cafe)",
                                    "description": "Enjoy a light breakfast at your guesthouse or a nearby local cafe on Divar Island.",
                                    "cuisine": "Local Indian",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "10:00",
                                    "reservation_time": "N/A",
                                    "end_time": "10:45",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-scooter-rental-pickup",
                                "event_type": "transport",
                                "start_time": "10:45",
                                "end_time": "11:30",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter_pickup",
                                    "from_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "45m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "Arrange for a rented scooter to be delivered to Island House Goa. This is the most flexible and cost-effective way to explore Goa. (Approx. ₹400/day + fuel. Budgeting ₹400 for 2.5 days of rental + ₹150 for fuel per day for 3 days = ₹1750 in total for 3 days, split across the days)."
                                }
                            },
                            {
                                "id": "transport-divar-to-old-goa",
                                "event_type": "transport",
                                "start_time": "11:30",
                                "end_time": "11:45",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter_ferry",
                                    "from_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Old Goa",
                                        "address": "Old Goa, Goa",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Ride your rented scooter from Divar Island to Old Goa via the free public ferry (scooters allowed)."
                                }
                            },
                            {
                                "id": "activity-basilica-bom-jesus",
                                "event_type": "activity",
                                "start_time": "11:45",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "",
                                    "name": "Basilica of Bom Jesus",
                                    "description": "Explore the UNESCO World Heritage Basilica of Bom Jesus, a prime example of Baroque architecture in India, housing the mortal remains of St. Francis Xavier. Remember to dress modestly.",
                                    "category": "Heritage",
                                    "type": "Church",
                                    "location": {
                                        "name": "Basilica of Bom Jesus",
                                        "address": "Old Goa Road, Bainguinim, Goa 403402",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.500989,
                                        "longitude": 73.911075
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 31019,
                                    "tips": [
                                        "Dress modestly (shoulders and knees covered).",
                                        "Visit early to avoid crowds."
                                    ],
                                    "opening_hours": "08:30 - 18:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "activity-se-cathedral",
                                "event_type": "activity",
                                "start_time": "13:00",
                                "end_time": "14:00",
                                "activity": {
                                    "id": "",
                                    "name": "Se Cathedral",
                                    "description": "Visit Se Cathedral, one of the largest churches in Asia, known for its Tuscan exterior and Corinthian interior. Part of the UNESCO World Heritage site of Old Goa.",
                                    "category": "Heritage",
                                    "type": "Church",
                                    "location": {
                                        "name": "Se Cathedral",
                                        "address": "Velha Goa, Goa 403402",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.50035,
                                        "longitude": 73.91039
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 31019,
                                    "tips": [
                                        "Dress modestly (shoulders and knees covered)."
                                    ],
                                    "opening_hours": "07:00 - 18:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "meal-day1-lunch",
                                "event_type": "meal",
                                "start_time": "14:00",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Goa Streetz / A Goan Cafeteria Brasil",
                                    "description": "Enjoy an authentic Goan lunch at this mid-range cafeteria conveniently located near the Old Goa churches. It's a great spot to try local flavors.",
                                    "cuisine": "Indian (Goan)",
                                    "location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrence, Old Goa",
                                        "city": "Old Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.913689
                                    },
                                    "start_time": "14:00",
                                    "reservation_time": "N/A",
                                    "end_time": "15:00",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 4.6,
                                    "review_count": 208,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-old-goa-to-museum",
                                "event_type": "transport",
                                "start_time": "15:00",
                                "end_time": "15:15",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Old Goa",
                                        "address": "Old Goa, Goa",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to Houses of Goa Museum."
                                }
                            },
                            {
                                "id": "activity-houses-of-goa-museum",
                                "event_type": "activity",
                                "start_time": "15:15",
                                "end_time": "16:45",
                                "activity": {
                                    "id": "",
                                    "name": "Houses of Goa Museum",
                                    "description": "Explore this offbeat, ship-shaped museum showcasing the region's unique cultural and architectural history, particularly the evolution of Goan houses. A great way to deepen your understanding of Goan heritage.",
                                    "category": "Culture Heritage",
                                    "type": "Museum",
                                    "location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Salvador do Mundo",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 3720,
                                    "tips": [
                                        "Closed on Mondays."
                                    ],
                                    "opening_hours": "10:00 - 19:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-museum-to-divar",
                                "event_type": "transport",
                                "start_time": "16:45",
                                "end_time": "17:30",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter_ferry",
                                    "from_location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to Divar Island via the free public ferry, then to your guesthouse."
                                }
                            },
                            {
                                "id": "activity-day1-relax",
                                "event_type": "activity",
                                "start_time": "17:30",
                                "end_time": "19:30",
                                "activity": {
                                    "id": "",
                                    "name": "Relax at Guesthouse",
                                    "description": "Unwind and relax at Island House Goa after a day of exploration. Enjoy the peaceful ambiance of Divar Island.",
                                    "category": "Leisure",
                                    "type": "Relaxation",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "opening_hours": "Open 24 hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "meal-day1-dinner",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Local Eatery on Divar Island",
                                    "description": "Enjoy a quiet dinner at a local restaurant on Divar Island, experiencing authentic Goan hospitality away from the bustling tourist areas.",
                                    "cuisine": "Local Indian (Goan)",
                                    "location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "19:30",
                                    "reservation_time": "N/A",
                                    "end_time": "20:30",
                                    "cost": 350,
                                    "cost_per_person": 350,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 1050
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-05",
                        "title": "Cultural Quarters, Temples & Spice Trails",
                        "description": "Immerse yourself in the charming streets of Fontainhas, discover the spiritual calm of Shri Mangueshi Temple, and explore a fragrant spice plantation.",
                        "events": [
                            {
                                "id": "meal-day2-breakfast",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Island House Goa",
                                    "description": "Start your day with breakfast at your guesthouse.",
                                    "cuisine": "Local Indian",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "08:00",
                                    "reservation_time": "N/A",
                                    "end_time": "08:45",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-divar-to-fontainhas",
                                "event_type": "transport",
                                "start_time": "08:45",
                                "end_time": "09:15",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter_ferry",
                                    "from_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Fontainhas",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride from Divar Island to Fontainhas in Panjim, via the free public ferry."
                                }
                            },
                            {
                                "id": "activity-fontainhas-exploration",
                                "event_type": "activity",
                                "start_time": "09:15",
                                "end_time": "11:15",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Fontainhas (Latin Quarter)",
                                    "description": "Wander through the vibrant, Portuguese-influenced streets of Fontainhas, Goa's Latin Quarter. Admire the colorful houses, narrow lanes, and unique architecture. It's a fantastic spot for photography and soaking in the cultural ambiance.",
                                    "category": "Culture Heritage",
                                    "type": "Walking Tour",
                                    "location": {
                                        "name": "Fontainhas",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.826
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.7,
                                    "review_count": 10000,
                                    "tips": [
                                        "Visit in the morning for cooler weather and fewer crowds.",
                                        "Look out for local art galleries and bakeries."
                                    ],
                                    "opening_hours": "Always open",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-fontainhas-to-mangueshi",
                                "event_type": "transport",
                                "start_time": "11:15",
                                "end_time": "11:45",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Fontainhas",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Shri Mangueshi Temple",
                                        "address": "Mangeshi Village, Priol, Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride from Fontainhas to Shri Mangueshi Temple."
                                }
                            },
                            {
                                "id": "activity-shri-mangueshi-temple",
                                "event_type": "activity",
                                "start_time": "11:45",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "",
                                    "name": "Shri Mangueshi Temple",
                                    "description": "Discover the architectural beauty and spiritual calm of Shri Mangueshi Temple, one of Goa's largest and most frequently visited Hindu temples, dedicated to Lord Shiva. Note the unique architectural style.",
                                    "category": "Culture Heritage",
                                    "type": "Temple",
                                    "location": {
                                        "name": "Shri Mangueshi Temple",
                                        "address": "Mangeshi Village, Priol, Ponda, Goa 403401",
                                        "city": "Ponda",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.405785,
                                        "longitude": 73.990479
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.7,
                                    "review_count": 15000,
                                    "tips": [
                                        "Dress modestly (shoulders and knees covered).",
                                        "Photography may be restricted in certain areas."
                                    ],
                                    "opening_hours": "06:00 - 13:00, 15:00 - 21:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "meal-day2-lunch",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Local Restaurant near Mangueshi",
                                    "description": "Enjoy a traditional Goan or South Indian lunch at a local eatery near the temple.",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Ponda Area",
                                        "address": "Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4,
                                        "longitude": 74
                                    },
                                    "start_time": "13:00",
                                    "reservation_time": "N/A",
                                    "end_time": "14:00",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-mangueshi-to-spice-farm",
                                "event_type": "transport",
                                "start_time": "14:00",
                                "end_time": "14:15",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Shri Mangueshi Temple",
                                        "address": "Mangeshi Village, Priol, Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "NH 4A, Curti, Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Short scooter ride to a nearby spice plantation."
                                }
                            },
                            {
                                "id": "activity-spice-plantation-tour",
                                "event_type": "activity",
                                "start_time": "14:15",
                                "end_time": "16:15",
                                "activity": {
                                    "id": "",
                                    "name": "Serene Spice Plantation Tour",
                                    "description": "Visit a serene spice plantation like Sahakari Spice Farm to learn about local produce, traditional farming practices, and the various spices grown in Goa. Enjoy a guided tour and the refreshing natural environment.",
                                    "category": "Culture Wellness",
                                    "type": "Farm Tour",
                                    "location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "NH 4A, Curti, Ponda, Goa 403401",
                                        "city": "Ponda",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.400508,
                                        "longitude": 74.004415
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 450,
                                    "cost_per_person": 450,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 8000,
                                    "tips": [
                                        "Wear comfortable walking shoes.",
                                        "Carry insect repellent."
                                    ],
                                    "opening_hours": "09:00 - 17:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-spice-farm-to-divar",
                                "event_type": "transport",
                                "start_time": "16:15",
                                "end_time": "17:00",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter_ferry",
                                    "from_location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "NH 4A, Curti, Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to Divar Island via the free public ferry, then to your guesthouse."
                                }
                            },
                            {
                                "id": "activity-day2-relax-yoga",
                                "event_type": "activity",
                                "start_time": "17:00",
                                "end_time": "19:30",
                                "activity": {
                                    "id": "",
                                    "name": "Relaxation and Personal Wellness",
                                    "description": "Enjoy some free time for relaxation or a self-guided yoga/meditation session at Island House Goa, embracing the tranquil environment.",
                                    "category": "Wellness Leisure",
                                    "type": "Relaxation",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "opening_hours": "Open 24 hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "meal-day2-dinner",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Local Eatery on Divar Island",
                                    "description": "Enjoy a peaceful dinner at a local spot on Divar Island.",
                                    "cuisine": "Local Indian (Goan)",
                                    "location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "19:30",
                                    "reservation_time": "N/A",
                                    "end_time": "20:30",
                                    "cost": 350,
                                    "cost_per_person": 350,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 1100
                    },
                    {
                        "day_number": 3,
                        "date": "2025-11-06",
                        "title": "Wellness, Authentic Flavors & Departure",
                        "description": "Experience a serene sunrise yoga session, savor an authentic Goan thali, and enjoy a relaxed morning before heading back to Panjim for your evening departure.",
                        "events": [
                            {
                                "id": "activity-sunrise-yoga",
                                "event_type": "activity",
                                "start_time": "07:00",
                                "end_time": "08:00",
                                "activity": {
                                    "id": "",
                                    "name": "Sunrise Yoga/Meditation on Divar Island",
                                    "description": "Participate in a peaceful sunrise yoga or meditation session at a quiet spot on Divar Island, connecting with nature and fostering well-being.",
                                    "category": "Wellness",
                                    "type": "Yoga Session",
                                    "location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Find a quiet spot near your guesthouse or by the river."
                                    ],
                                    "opening_hours": "Sunrise",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "meal-day3-breakfast",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Island House Goa",
                                    "description": "Enjoy your final breakfast at Island House Goa.",
                                    "cuisine": "Local Indian",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "08:00",
                                    "reservation_time": "N/A",
                                    "end_time": "08:45",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "activity-hotel-checkout",
                                "event_type": "activity",
                                "start_time": "08:45",
                                "end_time": "10:00",
                                "activity": {
                                    "id": "",
                                    "name": "Check-out and Luggage Drop",
                                    "description": "Complete check-out formalities at Island House Goa and leave your luggage for later collection.",
                                    "category": "Accommodation",
                                    "type": "Hotel Services",
                                    "location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 168,
                                    "opening_hours": "08:00 - 11:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "activity-divar-exploration",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "11:30",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Divar Island / Quiet Spot",
                                    "description": "Enjoy a leisurely morning exploring more of Divar Island on your scooter, visiting local villages, or finding a serene spot for relaxation.",
                                    "category": "Leisure Culture",
                                    "type": "Local Exploration",
                                    "location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar Island",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.52304,
                                        "longitude": 73.900808
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "opening_hours": "Always open",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "transport-divar-to-panjim-lunch",
                                "event_type": "transport",
                                "start_time": "11:30",
                                "end_time": "12:00",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter_ferry",
                                    "from_location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Panjim City Center",
                                        "address": "Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride from Divar Island to Panjim city center via the free public ferry."
                                }
                            },
                            {
                                "id": "meal-day3-lunch",
                                "event_type": "meal",
                                "start_time": "12:00",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Local Goan Thali Restaurant (Panjim)",
                                    "description": "Indulge in an authentic traditional Goan Thali meal in Panjim, offering a variety of local dishes for a complete culinary experience.",
                                    "cuisine": "Indian (Goan)",
                                    "location": {
                                        "name": "Panjim City Center",
                                        "address": "Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "start_time": "12:00",
                                    "reservation_time": "N/A",
                                    "end_time": "13:00",
                                    "cost": 350,
                                    "cost_per_person": 350,
                                    "rating": 0,
                                    "review_count": 0,
                                    "specialties": [
                                        "Fish Curry Rice",
                                        "Prawns",
                                        "Vegetable Curries"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "activity-panjim-souvenir-shopping",
                                "event_type": "activity",
                                "start_time": "13:00",
                                "end_time": "15:00",
                                "activity": {
                                    "id": "",
                                    "name": "Panjim Market & Souvenir Shopping",
                                    "description": "Spend some time exploring the local markets in Panjim, picking up souvenirs, local handicrafts, or Goan cashew nuts.",
                                    "category": "Shopping",
                                    "type": "Market",
                                    "location": {
                                        "name": "Panjim Market",
                                        "address": "Panjim Market, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4977,
                                        "longitude": 73.8278
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4,
                                    "review_count": 5000,
                                    "tips": [
                                        "Bargain politely for best prices."
                                    ],
                                    "opening_hours": "09:00 - 20:00",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "transport-panjim-to-divar-hotel-luggage",
                                "event_type": "transport",
                                "start_time": "15:00",
                                "end_time": "15:30",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter_ferry",
                                    "from_location": {
                                        "name": "Panjim City Center",
                                        "address": "Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to Island House Goa to collect your luggage."
                                }
                            },
                            {
                                "id": "transport-divar-hotel-to-panjim-bus-stand",
                                "event_type": "transport",
                                "start_time": "15:30",
                                "end_time": "16:00",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter_ferry_auto",
                                    "from_location": {
                                        "name": "Island House Goa",
                                        "address": "No. 45, Piedade, Goltim, Divar, Goa",
                                        "city": "Divar Island",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Panjim Kadamba Bus Stand",
                                        "address": "Kadamba Bus Stand, Panjim, Goa",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "30m",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "description": "Return rented scooter, then auto-rickshaw from Divar ferry point to Panjim Kadamba Bus Stand (approx. ₹100), after taking the free public ferry from Divar to Ribandar (approx. ₹50 for auto on Divar to ferry)."
                                }
                            },
                            {
                                "id": "meal-day3-dinner",
                                "event_type": "meal",
                                "start_time": "17:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Restaurant near Panjim Bus Stand",
                                    "description": "Have an early dinner or a substantial snack near Panjim Kadamba Bus Stand before boarding your overnight bus.",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Panjim Kadamba Bus Stand",
                                        "address": "Kadamba Bus Stand, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4851,
                                        "longitude": 73.834
                                    },
                                    "start_time": "17:00",
                                    "reservation_time": "N/A",
                                    "end_time": "18:00",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-departure-bus",
                                "event_type": "transport",
                                "start_time": "20:00",
                                "end_time": "06:00",
                                "transport": {
                                    "id": "",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Panjim Kadamba Bus Stand",
                                        "address": "Kadamba Bus Stand, Panjim, Goa",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "to_location": {
                                        "name": "Chikkamagaluru Bus Stand",
                                        "address": "Chikkamagaluru Bus Stand, K.M. Road, Chikkamagaluru, Karnataka",
                                        "city": "Chikkamagaluru",
                                        "state": "",
                                        "country": "",
                                        "latitude": 0,
                                        "longitude": 0
                                    },
                                    "duration": "10h 0m",
                                    "cost": 1200,
                                    "cost_per_person": 1200,
                                    "description": "Board your overnight AC Sleeper bus for the return journey to Chikkamagaluru (arrives next morning at approx. 06:00). This cost is for the return ticket."
                                }
                            }
                        ],
                        "daily_cost": 800
                    }
                ],
                "accommodations": [
                    {
                        "id": "island-house-goa",
                        "name": "Island House Goa",
                        "type": "guesthouse",
                        "description": "Island House Goa offers a unique and tranquil retreat on the picturesque Divar Island, providing an authentic glimpse into Goan village life. Away from the bustling tourist hubs, it's an ideal base for a solo traveler interested in culture, heritage, and wellness. The property is known for its serene atmosphere, traditional charm, and well-maintained rooms. Its location allows for easy access via a short ferry ride to Old Goa, the UNESCO World Heritage site, and the vibrant Fontainhas Latin Quarter in Panjim, perfectly aligning with the trip's cultural and heritage interests. Guests can enjoy peaceful walks, explore the island's churches and temples, and experience the laid-back 'Susegad' lifestyle. The guesthouse offers a quiet escape, conducive to relaxation and introspection, fitting the wellness aspect of the trip.",
                        "location": {
                            "name": "Divar Island",
                            "address": "No. 45, Piedade, Goltim, Divar, Goa",
                            "city": "Divar Island",
                            "state": "Goa",
                            "country": "India",
                            "latitude": 15.52304,
                            "longitude": 73.900808
                        },
                        "check_in_date": "2025-11-04",
                        "check_out_date": "2025-11-06",
                        "nights": 2,
                        "room_type": "Standard Double Room",
                        "guests": 1,
                        "cost_per_night": 1200,
                        "total_cost": 2400,
                        "rating": 4.6,
                        "review_count": 168,
                        "amenities": [
                            "Free Wi-Fi",
                            "Private Bathroom",
                            "Air Conditioning (assumed for mid-range)",
                            "Garden/Outdoor Space",
                            "Accepts credit cards",
                            "Accepts debit cards"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "http://islandhousegoa.com/",
                        "cancellation_info": "Please refer to the property's direct booking policy on their website for specific cancellation terms, typically 7-14 days prior to check-in for a full refund during peak season."
                    }
                ],
                "generated_at": "2025-11-02T13:31:30.614216Z",
                "ai_model": "gemini-2.5-flash",
                "language": "",
                "highlight_activities": [
                    "Explore the UNESCO World Heritage churches of Old Goa (Basilica of Bom Jesus, Se Cathedral)",
                    "Wander through the vibrant, Portuguese-influenced streets of Fontainhas, Goa's Latin Quarter",
                    "Visit a serene spice plantation to learn about local produce and traditional practices",
                    "Indulge in an authentic Goan cooking class or a traditional Goan thali meal",
                    "Participate in a peaceful sunrise or sunset yoga session on a quiet beach",
                    "Discover the architectural beauty and spiritual calm of Shri Mangueshi Temple",
                    "Relax and soak in the tranquil atmosphere of a less crowded beach like Palolem or Mandrem"
                ],
                "local_insights": [
                    "Embrace 'Susegad,' the laid-back, content, and relaxed Goan philosophy of life.",
                    "Dress modestly (shoulders and knees covered) when visiting religious sites like churches and temples.",
                    "Bargaining is common and expected in local markets for souvenirs and clothes, but not in fixed-price shops.",
                    "Don't miss trying authentic Goan cuisine like Fish Curry Rice, Pork Vindaloo, Prawn Balchão, and the dessert Bebinca.",
                    "Always ask for permission before photographing local people, especially in villages or religious contexts.",
                    "While English is widely understood, learning a few Konkani phrases like 'Dev Borem Korum' (Thank you) is appreciated.",
                    "Drink bottled water to stay hydrated and be cautious with street food, opting for busy, reputable stalls."
                ],
                "weather_info": {
                    "season": "Post-Monsoon / Early Winter",
                    "description": "November in Goa offers ideal weather with pleasant, sunny days, clear skies, and cooler, comfortable evenings. Humidity levels are significantly lower than monsoon months.",
                    "avg_min_temp": 22,
                    "avg_max_temp": 32,
                    "recommendation": "Pack light cotton clothing, swimwear, a wide-brimmed hat, sunglasses, high SPF sunscreen, and comfortable walking sandals or flip-flops. A light shawl or jacket might be useful for cooler evenings."
                }
            },
            {
                "id": "e4f5c8ae-8188-4823-bc10-e2738c7b7d77",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "source": "Chikkamagaluru",
                "destination": "Goa",
                "start_date": "2025-11-03",
                "end_date": "2025-11-12",
                "duration_days": 10,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 70000,
                "saved": 0,
                "total_cost": 54109,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 27000,
                    "transport": 8240,
                    "activities": 350,
                    "meals": 13600,
                    "miscellaneous": 4919
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-03",
                        "title": "Arrival in Goa & Old Goa Heritage",
                        "description": "Arrive in Goa via overnight train, check into your resort, and begin your heritage journey with a visit to the UNESCO World Heritage Site of Old Goa.",
                        "events": [
                            {
                                "id": "day1-transport-1",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "09:30",
                                "transport": {
                                    "id": "",
                                    "mode": "train",
                                    "from_location": {
                                        "name": "Birur Junction",
                                        "address": "Birur Junction Railway Station",
                                        "city": "Birur",
                                        "state": "",
                                        "country": "",
                                        "latitude": 13.9248,
                                        "longitude": 76.0172
                                    },
                                    "to_location": {
                                        "name": "Karmali Railway Station",
                                        "address": "Karmali, Goa 403106",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.4678,
                                        "longitude": 73.9006
                                    },
                                    "departure_time": "23:15",
                                    "arrival_time": "09:30",
                                    "duration": "10h 15m",
                                    "cost": 950,
                                    "cost_per_person": 950,
                                    "description": "Arrival at Karmali Railway Station after an overnight train journey from Birur Junction. This is the final leg of your journey from Chikkamagaluru. Book via EaseMyTrip Railways.",
                                    "booking_url": "https://www.easemytrip.com/railways",
                                    "carrier": "Indian Railways",
                                    "service_class": "AC 3-Tier",
                                    "vehicle_number": "17309",
                                    "route_type": "Overnight Express"
                                }
                            },
                            {
                                "id": "day1-transport-2",
                                "event_type": "transport",
                                "start_time": "09:45",
                                "end_time": "10:15",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Karmali Railway Station",
                                        "address": "Karmali, Goa 403106",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.4678,
                                        "longitude": 73.9006
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "30m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "Auto-rickshaw ride to your accommodation. Negotiate fare before starting. Book via EaseMyTrip Cabs for a taxi if preferred.",
                                    "booking_url": "https://www.easemytrip.com/cabs"
                                }
                            },
                            {
                                "id": "day1-activity-1",
                                "event_type": "activity",
                                "start_time": "10:15",
                                "end_time": "12:00",
                                "activity": {
                                    "id": "",
                                    "name": "Hotel Check-in & Freshen Up",
                                    "description": "Arrive at Cozy Woods Hill Resort. Complete check-in formalities, drop off your luggage, and freshen up after your overnight journey. Take some time to relax before lunch. The resort offers a comfortable and peaceful stay with 24-hour service.",
                                    "category": "leisure",
                                    "type": "hotel_checkin",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "opening_hours": "Open 24 hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-meal-1",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy a relaxing lunch at your resort's restaurant. A convenient option after your journey, offering a selection of Indian and multi-cuisine dishes in a serene environment.",
                                    "cuisine": "Indian, Multi-cuisine",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "12:30",
                                    "end_time": "13:30",
                                    "cost": 700,
                                    "cost_per_person": 700,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day1-transport-3",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "13:45",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Old Goa (Velha Goa)",
                                        "address": "Velha Goa, Goa",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.5,
                                        "longitude": 73.9167
                                    },
                                    "duration": "15m",
                                    "cost": 200,
                                    "cost_per_person": 200,
                                    "description": "Short auto-rickshaw ride to the historic heart of Old Goa, a UNESCO World Heritage Site."
                                }
                            },
                            {
                                "id": "day1-activity-2",
                                "event_type": "activity",
                                "start_time": "13:45",
                                "end_time": "17:45",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Old Goa (Velha Goa)",
                                    "description": "Immerse yourself in the UNESCO World Heritage Site of Old Goa. Visit the iconic Basilica of Bom Jesus, which houses the relics of St. Francis Xavier, a masterpiece of Baroque architecture. Then, explore the grand Se Cathedral, one of the largest churches in Asia and a stunning example of Portuguese-Manueline architecture. Wander through the historic streets, soaking in the colonial atmosphere and rich history.",
                                    "category": "heritage",
                                    "type": "historical_site",
                                    "location": {
                                        "name": "Old Goa (Velha Goa)",
                                        "address": "Velha Goa, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5,
                                        "longitude": 73.9167
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "4h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 50000,
                                    "tips": [
                                        "Dress modestly, covering shoulders and knees, as you will be visiting religious sites.",
                                        "Wear comfortable walking shoes.",
                                        "Consider hiring a local guide for deeper historical insights."
                                    ],
                                    "opening_hours": "Basilica of Bom Jesus: 09:00-18:30; Se Cathedral: 07:30-18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-transport-4",
                                "event_type": "transport",
                                "start_time": "17:45",
                                "end_time": "18:00",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Old Goa (Velha Goa)",
                                        "address": "Velha Goa, Goa",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.5,
                                        "longitude": 73.9167
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "15m",
                                    "cost": 200,
                                    "cost_per_person": 200,
                                    "description": "Auto-rickshaw back to your resort for rest and relaxation."
                                }
                            },
                            {
                                "id": "day1-meal-2",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Conclude your first day with dinner at the resort's restaurant, offering a selection of Indian and multi-cuisine dishes. Enjoy the peaceful ambiance.",
                                    "cuisine": "Indian, Multi-cuisine",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 3250
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-04",
                        "title": "Panjim's Latin Quarter & Architectural History",
                        "description": "Explore the vibrant Fontainhas, Panjim's Latin Quarter, followed by a deep dive into Goan architectural styles at the Houses of Goa Museum.",
                        "events": [
                            {
                                "id": "day2-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Start your day with a hearty breakfast at your resort.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-transport-1",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "09:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Fontainhas, Panjim",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.497,
                                        "longitude": 73.824
                                    },
                                    "duration": "30m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Auto-rickshaw ride to Panjim's charming Latin Quarter."
                                }
                            },
                            {
                                "id": "day2-activity-1",
                                "event_type": "activity",
                                "start_time": "09:30",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Fontainhas (Latin Quarter)",
                                    "description": "Wander through the vibrant, Portuguese-influenced Latin Quarter of Fontainhas in Panjim. Admire the colorful colonial houses, narrow winding streets, and quaint cafes. This area perfectly embodies the 'Susegad' lifestyle and offers great photo opportunities.",
                                    "category": "heritage, culture",
                                    "type": "walking_tour",
                                    "location": {
                                        "name": "Fontainhas, Panjim",
                                        "address": "Fontainhas, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.497,
                                        "longitude": 73.824
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "3h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 10000,
                                    "tips": [
                                        "Wear comfortable walking shoes.",
                                        "Visit in the morning for cooler weather and fewer crowds.",
                                        "Look out for art galleries and bakeries."
                                    ],
                                    "opening_hours": "Always Open (daylight hours recommended)",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-meal-2",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Miri | Global Fusion Dining | Miramar, Panjim",
                                    "description": "Enjoy a global fusion lunch at Miri, a highly-rated restaurant in Miramar, Panjim. Its diverse menu and pleasant ambiance make it a great mid-range choice.",
                                    "cuisine": "Global Fusion",
                                    "location": {
                                        "name": "Miri | Global Fusion Dining | Miramar, Panjim",
                                        "address": "FRJ8+WCG Hotel Sunheads, St. Mary's Colony, lane no 3, Nalanda Colony, Miramar, Panaji",
                                        "city": "Panaji",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.484645,
                                        "longitude": 73.812616
                                    },
                                    "start_time": "12:30",
                                    "end_time": "13:30",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.6,
                                    "review_count": 1343,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-transport-2",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Miramar, Panjim",
                                        "address": "Miramar, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.484645,
                                        "longitude": 73.812616
                                    },
                                    "to_location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Salvador du Mundu",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "duration": "30m",
                                    "cost": 250,
                                    "cost_per_person": 250,
                                    "description": "Auto-rickshaw ride to the unique Houses of Goa Museum."
                                }
                            },
                            {
                                "id": "day2-activity-2",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:30",
                                "activity": {
                                    "id": "",
                                    "name": "Houses of Goa Museum",
                                    "description": "Gain insights into Goan architecture and lifestyle at the Houses of Goa Museum. This offbeat, ship-shaped museum showcases the region's cultural and architectural history, providing a unique perspective on Goan heritage.",
                                    "category": "museum, heritage",
                                    "type": "museum",
                                    "location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Salvador du Mundu",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 3720,
                                    "tips": [
                                        "Closed on Mondays, plan accordingly.",
                                        "Allow ample time to appreciate the detailed exhibits."
                                    ],
                                    "opening_hours": "10:00-19:30 (Tuesday-Sunday)",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-transport-3",
                                "event_type": "transport",
                                "start_time": "16:30",
                                "end_time": "17:00",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Salvador du Mundu",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "30m",
                                    "cost": 250,
                                    "cost_per_person": 250,
                                    "description": "Auto-rickshaw back to the resort."
                                }
                            },
                            {
                                "id": "day2-meal-3",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy dinner at the resort, offering a convenient and relaxing end to your day.",
                                    "cuisine": "Indian, Multi-cuisine",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2550
                    },
                    {
                        "day_number": 3,
                        "date": "2025-11-05",
                        "title": "Fort Aguada & Candolim Beach Relaxation",
                        "description": "Discover the historical significance of Fort Aguada with its panoramic views, followed by a relaxing afternoon at Candolim Beach.",
                        "events": [
                            {
                                "id": "day3-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy breakfast at your resort before heading out for the day.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day3-transport-1",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "09:45",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Candolim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "duration": "45m",
                                    "cost": 650,
                                    "cost_per_person": 650,
                                    "description": "Rent a scooter for the day to explore North Goa at your own pace (includes rental and fuel for the day). Drive to Fort Aguada."
                                }
                            },
                            {
                                "id": "day3-activity-1",
                                "event_type": "activity",
                                "start_time": "09:45",
                                "end_time": "12:45",
                                "activity": {
                                    "id": "",
                                    "name": "Discover Fort Aguada",
                                    "description": "Explore the historical significance of Fort Aguada, a 1612 Portuguese fortress offering breathtaking ocean views. Discover the well-preserved ramparts, the abandoned lighthouse erected in 1864, and soak in the panoramic vistas of the Arabian Sea. This fort is a testament to Goa's colonial past.",
                                    "category": "heritage, historical_site",
                                    "type": "fort",
                                    "location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Candolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "3h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 106677,
                                    "tips": [
                                        "Wear comfortable shoes for walking on uneven surfaces.",
                                        "Carry water and sunscreen, as it can get sunny.",
                                        "Visit in the morning to avoid the midday heat and crowds."
                                    ],
                                    "opening_hours": "09:30-18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day3-meal-2",
                                "event_type": "meal",
                                "start_time": "12:45",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Local Beach Shack/Restaurant (Candolim)",
                                    "description": "Enjoy a casual mid-range lunch at a local beach shack or restaurant near Candolim. Savor fresh seafood or Goan specialties with a view of the sea.",
                                    "cuisine": "Goan, Seafood, Indian",
                                    "location": {
                                        "name": "Candolim Beach Area",
                                        "address": "Candolim, Goa",
                                        "city": "Candolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.51,
                                        "longitude": 73.773
                                    },
                                    "start_time": "12:45",
                                    "end_time": "13:45",
                                    "cost": 700,
                                    "cost_per_person": 700,
                                    "rating": 4,
                                    "review_count": 500,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day3-transport-2",
                                "event_type": "transport",
                                "start_time": "13:45",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Candolim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "to_location": {
                                        "name": "Candolim Beach",
                                        "address": "Candolim Beach, Candolim, Goa",
                                        "city": "Candolim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.51,
                                        "longitude": 73.773
                                    },
                                    "duration": "15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Short scooter ride to Candolim Beach for relaxation."
                                }
                            },
                            {
                                "id": "day3-activity-2",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:30",
                                "activity": {
                                    "id": "",
                                    "name": "Relax at Candolim Beach",
                                    "description": "Spend a leisurely afternoon relaxing at Candolim Beach. Enjoy the sun, sand, and gentle waves. It's a less crowded option compared to some other North Goa beaches, offering a peaceful respite.",
                                    "category": "leisure, beach",
                                    "type": "beach_relaxation",
                                    "location": {
                                        "name": "Candolim Beach",
                                        "address": "Candolim Beach, Candolim, Goa",
                                        "city": "Candolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.51,
                                        "longitude": 73.773
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.3,
                                    "review_count": 80000,
                                    "tips": [
                                        "Stay hydrated and use sunscreen.",
                                        "Be mindful of your belongings.",
                                        "Enjoy a refreshing drink at one of the beach shacks."
                                    ],
                                    "opening_hours": "Always Open",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day3-transport-3",
                                "event_type": "transport",
                                "start_time": "16:30",
                                "end_time": "17:15",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Candolim Beach",
                                        "address": "Candolim Beach, Candolim, Goa",
                                        "city": "Candolim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.51,
                                        "longitude": 73.773
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            },
                            {
                                "id": "day3-meal-3",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy a relaxed dinner at your resort, reflecting on the day's historical and coastal explorations.",
                                    "cuisine": "Indian, Multi-cuisine",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2150
                    },
                    {
                        "day_number": 4,
                        "date": "2025-11-06",
                        "title": "Ancestral Goa & Local Traditions",
                        "description": "Journey to Loutolim to experience local Goan traditions and history at Ancestral Goa, followed by a glimpse into rural Goan village life.",
                        "events": [
                            {
                                "id": "day4-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy a leisurely breakfast at your resort.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day4-transport-1",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "09:45",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Big Foot Goa (Ancestral Goa)",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Loutolim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "duration": "45m",
                                    "cost": 650,
                                    "cost_per_person": 650,
                                    "description": "Scooter ride to Loutolim to visit Ancestral Goa (Big Foot Museum). Ensure you wear a helmet and drive carefully."
                                }
                            },
                            {
                                "id": "day4-activity-1",
                                "event_type": "activity",
                                "start_time": "09:45",
                                "end_time": "12:45",
                                "activity": {
                                    "id": "",
                                    "name": "Experience Ancestral Goa (Big Foot Museum)",
                                    "description": "Experience local Goan traditions and history at Ancestral Goa (Big Foot Museum) in Loutolim. This open-air museum and theme park is dedicated to rural Goan life, featuring life-size sculptures, a traditional Goan house, an art gallery, and a restaurant. It offers a fascinating insight into Goa's cultural heritage.",
                                    "category": "culture, museum, heritage",
                                    "type": "open_air_museum",
                                    "location": {
                                        "name": "Big Foot Goa",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Loutolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "3h 0m",
                                    "cost": 200,
                                    "cost_per_person": 200,
                                    "booking_required": false,
                                    "rating": 4.1,
                                    "review_count": 8454,
                                    "tips": [
                                        "Explore the various sections, including the miniature village and art gallery.",
                                        "Try some local snacks at the on-site restaurant."
                                    ],
                                    "opening_hours": "09:00-18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day4-meal-2",
                                "event_type": "meal",
                                "start_time": "12:45",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Big Foot Goa Restaurant / Local Loutolim Eatery",
                                    "description": "Have lunch at the restaurant within Ancestral Goa or a nearby local eatery in Loutolim, offering traditional Goan fare.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Big Foot Goa (Ancestral Goa)",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Loutolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "start_time": "12:45",
                                    "end_time": "13:45",
                                    "cost": 700,
                                    "cost_per_person": 700,
                                    "rating": 4.1,
                                    "review_count": 8454,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day4-activity-2",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:00",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Loutolim Village",
                                    "description": "Take a leisurely stroll or scooter ride through the charming village of Loutolim, known for its beautiful ancestral homes and serene atmosphere. This offers a glimpse into authentic rural Goan life away from the tourist crowds.",
                                    "category": "culture, village_exploration",
                                    "type": "walking_tour",
                                    "location": {
                                        "name": "Loutolim Village",
                                        "address": "Loutolim, Goa",
                                        "city": "Loutolim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.34,
                                        "longitude": 73.99
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.4,
                                    "review_count": 1000,
                                    "tips": [
                                        "Respect local privacy when admiring homes.",
                                        "Look for local bakeries for traditional Goan bread."
                                    ],
                                    "opening_hours": "Daylight hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day4-transport-2",
                                "event_type": "transport",
                                "start_time": "16:00",
                                "end_time": "16:45",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Loutolim Village",
                                        "address": "Loutolim, Goa",
                                        "city": "Loutolim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.34,
                                        "longitude": 73.99
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            },
                            {
                                "id": "day4-meal-3",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy a comforting dinner at your resort, unwinding after a day of cultural immersion.",
                                    "cuisine": "Indian, Multi-cuisine",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2350
                    },
                    {
                        "day_number": 5,
                        "date": "2025-11-07",
                        "title": "Ponda Temples & Rural Charm",
                        "description": "Explore the ancient Hindu temples of Ponda, known for their unique Goan-Hindu architecture, followed by a scenic drive through the serene rural countryside.",
                        "events": [
                            {
                                "id": "day5-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy breakfast at your resort before heading to Ponda.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day5-transport-1",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "09:45",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Ponda",
                                        "address": "Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.3995,
                                        "longitude": 74.0135
                                    },
                                    "duration": "45m",
                                    "cost": 650,
                                    "cost_per_person": 650,
                                    "description": "Scooter ride to the town of Ponda, known for its temples. The rental cost covers the full day's use and fuel."
                                }
                            },
                            {
                                "id": "day5-activity-1",
                                "event_type": "activity",
                                "start_time": "09:45",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "",
                                    "name": "Explore the Heritage Temples of Ponda",
                                    "description": "Discover the ancient Hindu temples in the Ponda region, showcasing unique Goan-Hindu architecture. While specific temples are not listed in the provided data, the region is renowned for its spiritual heritage. Travelers can visit prominent temples like Shri Mangueshi Temple or Shri Shantadurga Temple (popular choices in the area) to experience local religious customs and admire the intricate designs. Remember to dress modestly.",
                                    "category": "heritage, religious_site",
                                    "type": "temple_visit",
                                    "location": {
                                        "name": "Ponda, Goa (General area)",
                                        "address": "Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.3995,
                                        "longitude": 74.0135
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "3h 15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 20000,
                                    "tips": [
                                        "Dress modestly, covering shoulders and knees.",
                                        "Remove footwear before entering temple premises.",
                                        "Photography rules may vary by temple."
                                    ],
                                    "opening_hours": "Typically 06:00-13:00, 15:00-20:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day5-meal-2",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Sunny Bar and Restaurant",
                                    "description": "Enjoy a traditional Indian meal at Sunny Bar and Restaurant in Ponda. This local eatery offers a mid-range dining experience, perfect for a satisfying lunch after your temple visits.",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Sunny Bar and Restaurant",
                                        "address": "Near Govt. High School, Talewada, Bethoda, Ponda",
                                        "city": "Ponda",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.378921,
                                        "longitude": 74.036217
                                    },
                                    "start_time": "13:00",
                                    "end_time": "14:00",
                                    "cost": 700,
                                    "cost_per_person": 700,
                                    "rating": 4.6,
                                    "review_count": 248,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day5-activity-2",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:00",
                                "activity": {
                                    "id": "",
                                    "name": "Scenic Drive through Rural Ponda",
                                    "description": "Enjoy a leisurely drive through the lush green landscapes and charming villages of rural Ponda. This scenic route offers a glimpse into the quieter, traditional side of Goa, away from the coastal hustle. Observe local life, traditional homes, and verdant fields.",
                                    "category": "scenic, nature, culture",
                                    "type": "scenic_drive",
                                    "location": {
                                        "name": "Ponda Countryside",
                                        "address": "Rural Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.39,
                                        "longitude": 74.02
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.3,
                                    "review_count": 500,
                                    "tips": [
                                        "Take your time to stop and enjoy the views.",
                                        "Be mindful of local traffic and village roads."
                                    ],
                                    "opening_hours": "Daylight hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day5-transport-2",
                                "event_type": "transport",
                                "start_time": "16:00",
                                "end_time": "16:45",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Ponda Countryside",
                                        "address": "Rural Ponda, Goa",
                                        "city": "Ponda",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.39,
                                        "longitude": 74.02
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            },
                            {
                                "id": "day5-meal-3",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy a relaxing dinner at your resort after a day of exploring Ponda's cultural side.",
                                    "cuisine": "Indian, Multi-cuisine",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2150
                    },
                    {
                        "day_number": 6,
                        "date": "2025-11-08",
                        "title": "Panjim Market & Resort Relaxation",
                        "description": "Immerse yourself in the bustling local life of Panjim Market, followed by an afternoon of relaxation at your resort.",
                        "events": [
                            {
                                "id": "day6-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy breakfast at your resort before a morning of market exploration.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day6-transport-1",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "09:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Panjim Market",
                                        "address": "Panjim Market, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.4988,
                                        "longitude": 73.8248
                                    },
                                    "duration": "30m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Auto-rickshaw ride to Panjim Market for a taste of local life and shopping."
                                }
                            },
                            {
                                "id": "day6-activity-1",
                                "event_type": "activity",
                                "start_time": "09:30",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Panjim Market",
                                    "description": "Immerse yourself in the bustling atmosphere of Panjim Market. Browse for local spices, fresh produce, Goan sweets, and unique souvenirs. It's a great place to observe local life, practice your bargaining skills, and pick up authentic items to remember your trip.",
                                    "category": "shopping, culture",
                                    "type": "market_visit",
                                    "location": {
                                        "name": "Panjim Market",
                                        "address": "Panjim Market, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4988,
                                        "longitude": 73.8248
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "3h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 15000,
                                    "tips": [
                                        "Bargaining is common and expected in local markets.",
                                        "Try some local snacks from street vendors."
                                    ],
                                    "opening_hours": "Typically 08:00-20:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day6-meal-2",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Local Goan Thali Restaurant (Panjim)",
                                    "description": "Enjoy a traditional and affordable Goan Thali at a local restaurant in Panjim. This platter features various local dishes, offering a true and authentic taste of Goan cuisine.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Panjim",
                                        "address": "Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "start_time": "12:30",
                                    "end_time": "13:30",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 4,
                                    "review_count": 1000,
                                    "specialties": [
                                        "Fish Thali",
                                        "Veg Thali"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day6-transport-2",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Panjim",
                                        "address": "Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "30m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Auto-rickshaw back to the resort."
                                }
                            },
                            {
                                "id": "day6-activity-2",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "19:30",
                                "activity": {
                                    "id": "",
                                    "name": "Relax at Resort",
                                    "description": "Enjoy a relaxing afternoon at Cozy Woods Hill Resort. Take a dip in the pool, read a book, or simply unwind in the comfortable surroundings after your morning's explorations.",
                                    "category": "leisure",
                                    "type": "resort_relaxation",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "5h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "opening_hours": "Open 24 hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day6-meal-3",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Have dinner at the resort, offering a convenient and pleasant dining experience.",
                                    "cuisine": "Indian, Multi-cuisine",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 1900
                    },
                    {
                        "day_number": 7,
                        "date": "2025-11-09",
                        "title": "Harvalem Waterfalls & Goan Village Life",
                        "description": "Discover the serene Harvalem Waterfalls, followed by a cultural walk through a traditional Goan village.",
                        "events": [
                            {
                                "id": "day7-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy breakfast at your resort before heading out for a day of nature and culture.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day7-transport-1",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "10:00",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Harvalem Waterfalls",
                                        "address": "Rudreshwar Colony, Kudne",
                                        "city": "Kudne",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.550773,
                                        "longitude": 74.02647
                                    },
                                    "duration": "1h 0m",
                                    "cost": 650,
                                    "cost_per_person": 650,
                                    "description": "Scooter ride to Harvalem Waterfalls. This cost includes scooter rental and fuel for the day."
                                }
                            },
                            {
                                "id": "day7-activity-1",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "",
                                    "name": "Visit Harvalem Waterfalls",
                                    "description": "Enjoy the scenic beauty of Harvalem Waterfalls, a well-known natural attraction with a multi-level viewing area. While November is post-monsoon, the area's lushness and the waterfall's charm remain, offering a peaceful natural setting. Consider visiting the nearby Rudreshwar Temple.",
                                    "category": "nature, scenic",
                                    "type": "waterfall",
                                    "location": {
                                        "name": "Harvalem Waterfalls",
                                        "address": "Rudreshwar Colony, Kudne",
                                        "city": "Kudne",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.550773,
                                        "longitude": 74.02647
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.3,
                                    "review_count": 9140,
                                    "tips": [
                                        "Wear comfortable shoes for walking around the falls.",
                                        "The area is less crowded in the morning."
                                    ],
                                    "opening_hours": "Daylight hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day7-meal-2",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Local Eatery (Sanquelim)",
                                    "description": "Enjoy a simple, authentic Goan meal at a local restaurant in Sanquelim, the nearest town to Harvalem Waterfalls. Experience everyday Goan cuisine in a laid-back setting.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Sanquelim",
                                        "address": "Sanquelim, Goa",
                                        "city": "Sanquelim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.55,
                                        "longitude": 74
                                    },
                                    "start_time": "12:30",
                                    "end_time": "13:30",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "rating": 3.8,
                                    "review_count": 300,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day7-transport-2",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Sanquelim",
                                        "address": "Sanquelim, Goa",
                                        "city": "Sanquelim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.55,
                                        "longitude": 74
                                    },
                                    "to_location": {
                                        "name": "Saligao Village",
                                        "address": "Saligao, Goa",
                                        "city": "Saligao",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.5471,
                                        "longitude": 73.7924
                                    },
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to the picturesque village of Saligao."
                                }
                            },
                            {
                                "id": "day7-activity-2",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:30",
                                "activity": {
                                    "id": "",
                                    "name": "Cultural Walk through Saligao Village",
                                    "description": "Take a leisurely walk through the traditional Goan village of Saligao, known for its beautiful old houses and a glimpse into local life. Observe the unique Goan architecture, interact with locals, and soak in the serene atmosphere. This provides an authentic experience of rural Goa.",
                                    "category": "culture, village_exploration",
                                    "type": "walking_tour",
                                    "location": {
                                        "name": "Saligao Village",
                                        "address": "Saligao, Goa",
                                        "city": "Saligao",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5471,
                                        "longitude": 73.7924
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.4,
                                    "review_count": 800,
                                    "tips": [
                                        "Look for the beautiful Mae de Deus Church.",
                                        "Engage with local shopkeepers or residents if opportunities arise."
                                    ],
                                    "opening_hours": "Daylight hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day7-transport-3",
                                "event_type": "transport",
                                "start_time": "16:30",
                                "end_time": "17:00",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Saligao Village",
                                        "address": "Saligao, Goa",
                                        "city": "Saligao",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.5471,
                                        "longitude": 73.7924
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            },
                            {
                                "id": "day7-meal-3",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Local Restaurant (Panjim/Karmali Area)",
                                    "description": "Enjoy dinner at a well-regarded local restaurant in the Panjim or Karmali area, offering authentic Goan or Indian cuisine suitable for a mid-range budget.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Panjim/Karmali Area",
                                        "address": "Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.49,
                                        "longitude": 73.83
                                    },
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4,
                                    "review_count": 500,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2050
                    },
                    {
                        "day_number": 8,
                        "date": "2025-11-10",
                        "title": "Divar Island Escape & Leisure",
                        "description": "Escape to the tranquil Divar Island for a glimpse of untouched Goan life, followed by a relaxed afternoon back at your resort.",
                        "events": [
                            {
                                "id": "day8-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy breakfast at your resort before heading to Divar Island.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day8-transport-1",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "09:30",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Ribandar Ferry Point",
                                        "address": "Ribandar, Goa",
                                        "city": "Ribandar",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.503,
                                        "longitude": 73.864
                                    },
                                    "duration": "30m",
                                    "cost": 650,
                                    "cost_per_person": 650,
                                    "description": "Scooter ride to Ribandar ferry point for Divar Island. This cost includes scooter rental and fuel for the day."
                                }
                            },
                            {
                                "id": "day8-transport-2",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:00",
                                "transport": {
                                    "id": "",
                                    "mode": "ferry",
                                    "from_location": {
                                        "name": "Ribandar Ferry Point",
                                        "address": "Ribandar, Goa",
                                        "city": "Ribandar",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.503,
                                        "longitude": 73.864
                                    },
                                    "to_location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.5167,
                                        "longitude": 73.899
                                    },
                                    "duration": "30m",
                                    "cost": 20,
                                    "cost_per_person": 20,
                                    "description": "Enjoy a scenic ferry ride across the Mandovi River to Divar Island."
                                }
                            },
                            {
                                "id": "day8-activity-1",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "",
                                    "name": "Explore Divar Island",
                                    "description": "Discover the serene and picturesque Divar Island, a tranquil escape from the bustling mainland. Explore its charming villages, winding roads, and old churches, offering a glimpse into untouched Goan life and heritage. The island is known for its peaceful ambiance and lush greenery.",
                                    "category": "nature, culture, village_exploration",
                                    "type": "island_exploration",
                                    "location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5167,
                                        "longitude": 73.899
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "3h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 3000,
                                    "tips": [
                                        "Consider renting a bicycle on the island for a leisurely exploration.",
                                        "Look out for the old churches and the Piedade village."
                                    ],
                                    "opening_hours": "Daylight hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day8-meal-2",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Local Eatery (Divar Island)",
                                    "description": "Enjoy a simple, authentic Goan lunch at a local eatery on Divar Island, experiencing the flavors of the island.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.5167,
                                        "longitude": 73.899
                                    },
                                    "start_time": "13:00",
                                    "end_time": "14:00",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "rating": 3.9,
                                    "review_count": 150,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day8-transport-3",
                                "event_type": "transport",
                                "start_time": "14:00",
                                "end_time": "14:30",
                                "transport": {
                                    "id": "",
                                    "mode": "ferry",
                                    "from_location": {
                                        "name": "Divar Island",
                                        "address": "Divar Island, Goa",
                                        "city": "Divar",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.5167,
                                        "longitude": 73.899
                                    },
                                    "to_location": {
                                        "name": "Ribandar Ferry Point",
                                        "address": "Ribandar, Goa",
                                        "city": "Ribandar",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.503,
                                        "longitude": 73.864
                                    },
                                    "duration": "30m",
                                    "cost": 20,
                                    "cost_per_person": 20,
                                    "description": "Ferry ride back to the mainland."
                                }
                            },
                            {
                                "id": "day8-transport-4",
                                "event_type": "transport",
                                "start_time": "14:30",
                                "end_time": "15:00",
                                "transport": {
                                    "id": "",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Ribandar Ferry Point",
                                        "address": "Ribandar, Goa",
                                        "city": "Ribandar",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.503,
                                        "longitude": 73.864
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            },
                            {
                                "id": "day8-activity-2",
                                "event_type": "activity",
                                "start_time": "15:00",
                                "end_time": "19:30",
                                "activity": {
                                    "id": "",
                                    "name": "Relax at Resort",
                                    "description": "Enjoy a leisurely afternoon at Cozy Woods Hill Resort. Take a dip in the pool, read a book, or simply unwind in the comfortable surroundings after your island adventure.",
                                    "category": "leisure",
                                    "type": "resort_relaxation",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "4h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "opening_hours": "Open 24 hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day8-meal-3",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy a relaxing dinner at your resort, reflecting on your peaceful day on Divar Island.",
                                    "cuisine": "Indian, Multi-cuisine",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "cost": 800,
                                    "cost_per_person": 800,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2070
                    },
                    {
                        "day_number": 9,
                        "date": "2025-11-11",
                        "title": "Souvenir Shopping & Farewell Dinner",
                        "description": "Spend your last full day indulging in souvenir shopping in Panjim and enjoy a special farewell dinner.",
                        "events": [
                            {
                                "id": "day9-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy your final breakfast at the resort.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day9-transport-1",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "09:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Panjim Shopping Area",
                                        "address": "18th June Road, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.4975,
                                        "longitude": 73.8275
                                    },
                                    "duration": "30m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Auto-rickshaw ride to Panjim for souvenir shopping."
                                }
                            },
                            {
                                "id": "day9-activity-1",
                                "event_type": "activity",
                                "start_time": "09:30",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "",
                                    "name": "Souvenir Shopping in Panjim",
                                    "description": "Spend your morning browsing for authentic Goan souvenirs. Explore the shops around 18th June Road and the Latin Quarter for local handicrafts, cashew nuts, Feni (Goan liquor), spices, and unique gifts to take home. It's a great opportunity to find mementos of your trip.",
                                    "category": "shopping",
                                    "type": "market_shopping",
                                    "location": {
                                        "name": "Panjim Shopping Area",
                                        "address": "18th June Road, Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4975,
                                        "longitude": 73.8275
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "3h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4,
                                    "review_count": 5000,
                                    "tips": [
                                        "Bargain politely for better deals.",
                                        "Look for genuine local products."
                                    ],
                                    "opening_hours": "Typically 10:00-20:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day9-meal-2",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Popular Cafe/Restaurant (Panjim)",
                                    "description": "Enjoy a delicious lunch at a popular cafe or restaurant in Panjim, offering a range of cuisines to suit your preference. A good spot to relax after your shopping.",
                                    "cuisine": "Multi-cuisine, Cafe",
                                    "location": {
                                        "name": "Panjim",
                                        "address": "Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "start_time": "13:00",
                                    "end_time": "14:00",
                                    "cost": 700,
                                    "cost_per_person": 700,
                                    "rating": 4.1,
                                    "review_count": 800,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day9-transport-2",
                                "event_type": "transport",
                                "start_time": "14:00",
                                "end_time": "14:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Panjim",
                                        "address": "Panjim, Goa",
                                        "city": "Panjim",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "30m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Auto-rickshaw back to the resort."
                                }
                            },
                            {
                                "id": "day9-activity-2",
                                "event_type": "activity",
                                "start_time": "14:30",
                                "end_time": "19:00",
                                "activity": {
                                    "id": "",
                                    "name": "Relax and Pack",
                                    "description": "Spend the afternoon relaxing at the resort and begin packing your belongings in preparation for your departure tomorrow. Enjoy the last moments of tranquility.",
                                    "category": "leisure",
                                    "type": "packing",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "4h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "opening_hours": "Open 24 hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day9-transport-3",
                                "event_type": "transport",
                                "start_time": "19:00",
                                "end_time": "19:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Miri | Global Fusion Dining | Miramar, Panjim",
                                        "address": "FRJ8+WCG Hotel Sunheads, St. Mary's Colony, lane no 3, Nalanda Colony, Miramar, Panaji",
                                        "city": "Panaji",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.484645,
                                        "longitude": 73.812616
                                    },
                                    "duration": "30m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "Auto-rickshaw ride to Miramar for a special farewell dinner."
                                }
                            },
                            {
                                "id": "day9-meal-3",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Miri | Global Fusion Dining | Miramar, Panjim",
                                    "description": "Enjoy a special farewell dinner at Miri, offering global fusion cuisine in a stylish and highly-rated setting. It's a perfect mid-range choice for a memorable last evening in Goa.",
                                    "cuisine": "Global Fusion",
                                    "location": {
                                        "name": "Miri | Global Fusion Dining | Miramar, Panjim",
                                        "address": "FRJ8+WCG Hotel Sunheads, St. Mary's Colony, lane no 3, Nalanda Colony, Miramar, Panaji",
                                        "city": "Panaji",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.484645,
                                        "longitude": 73.812616
                                    },
                                    "start_time": "19:30",
                                    "reservation_time": "19:30",
                                    "end_time": "21:00",
                                    "cost": 1200,
                                    "cost_per_person": 1200,
                                    "rating": 4.6,
                                    "review_count": 1343,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day9-transport-4",
                                "event_type": "transport",
                                "start_time": "21:00",
                                "end_time": "21:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Miri | Global Fusion Dining | Miramar, Panjim",
                                        "address": "FRJ8+WCG Hotel Sunheads, St. Mary's Colony, lane no 3, Nalanda Colony, Miramar, Panaji",
                                        "city": "Panaji",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.484645,
                                        "longitude": 73.812616
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "duration": "30m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "Auto-rickshaw back to the resort after dinner."
                                }
                            }
                        ],
                        "daily_cost": 2900
                    },
                    {
                        "day_number": 10,
                        "date": "2025-11-12",
                        "title": "Departure from Goa",
                        "description": "Enjoy a final breakfast, check out from your resort, and head to Karmali Railway Station for your onward journey.",
                        "events": [
                            {
                                "id": "day10-meal-1",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort Restaurant",
                                    "description": "Enjoy your final breakfast at the resort before checking out.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day10-activity-1",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "10:00",
                                "activity": {
                                    "id": "",
                                    "name": "Final Packing & Check-out",
                                    "description": "Complete your final packing and proceed with the check-out formalities at Cozy Woods Hill Resort. Check-out time is typically 11:00 AM.",
                                    "category": "leisure",
                                    "type": "hotel_checkout",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "opening_hours": "Open 24 hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day10-transport-1",
                                "event_type": "transport",
                                "start_time": "10:00",
                                "end_time": "10:30",
                                "transport": {
                                    "id": "",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.477743,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Karmali Railway Station",
                                        "address": "Karmali, Goa 403106",
                                        "city": "Goa",
                                        "state": "",
                                        "country": "",
                                        "latitude": 15.4678,
                                        "longitude": 73.9006
                                    },
                                    "duration": "30m",
                                    "cost": 400,
                                    "cost_per_person": 400,
                                    "description": "Auto-rickshaw ride to Karmali Railway Station for your onward journey. Negotiate fare before starting.",
                                    "booking_url": "https://www.easemytrip.com/cabs"
                                }
                            }
                        ],
                        "daily_cost": 400
                    }
                ],
                "accommodations": [
                    {
                        "id": "cozy-woods-hill-resort-north-goa",
                        "name": "Cozy Woods Hill Resort North Goa",
                        "type": "resort",
                        "description": "Cozy Woods Hill Resort is an excellent mid-range choice for a solo traveler focused on heritage in Goa. With a commendable rating of 4.2 from 680 reviews, it offers a comfortable and peaceful stay. Its strategic location in Karmali places it ideally for exploring the heritage sites of Old Goa, Panjim, and the temples of Ponda, minimizing travel time to these key interest areas. While the atmosphere is noted as 'Good for children,' it also ensures a serene environment suitable for relaxation after a day of exploration. The resort provides standard amenities expected of a mid-range establishment, including wheelchair accessible parking, and operates 24 hours, offering flexibility. This location allows for easy access to the historical heart of Goa, perfectly aligning with the trip's heritage focus.",
                        "location": {
                            "name": "Karmali",
                            "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                            "city": "Goa",
                            "state": "Goa",
                            "country": "India",
                            "latitude": 15.4777435,
                            "longitude": 73.9219724
                        },
                        "check_in_date": "2025-11-03",
                        "check_out_date": "2025-11-12",
                        "nights": 9,
                        "room_type": "Standard Double Room",
                        "guests": 1,
                        "cost_per_night": 3000,
                        "total_cost": 27000,
                        "rating": 4.2,
                        "review_count": 680,
                        "amenities": [
                            "Air conditioning",
                            "Private bathroom",
                            "Outdoor swimming pool",
                            "Restaurant",
                            "Free Wi-Fi",
                            "Wheelchair accessible parking",
                            "24-hour front desk"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "http://www.cozywoods.in/",
                        "cancellation_info": "Standard hotel cancellation policy applies, typically free cancellation up to 72 hours before check-in, but always confirm with the booking platform."
                    }
                ],
                "generated_at": "2025-11-02T13:30:17.065797Z",
                "ai_model": "gemini-2.5-flash",
                "language": "",
                "highlight_activities": [
                    "Explore the UNESCO World Heritage Site of Old Goa (Velha Goa), including the Basilica of Bom Jesus and Se Cathedral.",
                    "Wander through the vibrant, Portuguese-influenced Latin Quarter of Fontainhas in Panjim.",
                    "Visit the Goa State Museum in Panjim to delve into Goa's history, art, and culture.",
                    "Discover the historical significance of Fort Aguada and Reis Magos Fort, offering panoramic views.",
                    "Experience local Goan traditions and history at Ancestral Goa (Big Foot Museum) in Loutolim.",
                    "Explore the ancient Hindu temples of Ponda, such as the Mangeshi Temple and Shantadurga Temple.",
                    "Gain insights into Goan architecture and lifestyle at the Houses of Goa Museum."
                ],
                "local_insights": [
                    "Embrace 'Susegad,' the relaxed and contented Goan way of life; things move at a slower pace here.",
                    "When visiting religious sites like churches or temples, dress modestly by covering your shoulders and knees.",
                    "Goan cuisine is a unique fusion of Indian and Portuguese flavors; don't miss seafood curries, vindaloo, and bebinca.",
                    "Konkani is the local language, but English and Hindi are widely understood, especially in tourist areas.",
                    "Many smaller shops and establishments may observe an afternoon 'siesta,' closing for a few hours in the early afternoon.",
                    "Bargaining is common and expected in local markets for souvenirs, clothing, and other goods.",
                    "Respect local customs and traditions, especially in rural villages and during religious ceremonies."
                ],
                "weather_info": {
                    "season": "Early Winter / Post-Monsoon",
                    "description": "November offers ideal weather in Goa, characterized by pleasant and sunny days with clear skies, low humidity, and very little chance of rain. It's perfect for sightseeing and outdoor activities.",
                    "avg_min_temp": 21,
                    "avg_max_temp": 32,
                    "recommendation": "Pack light cotton clothing, comfortable walking shoes, sandals, and swimwear (optional). Include a wide-brimmed hat, sunglasses, and high-SPF sunscreen. A light jacket or shawl might be useful for cooler evenings."
                }
            },
            {
                "id": "dc70e0b9-3355-4f39-817b-03b234aa1f11",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "source": "Chikkamagaluru",
                "destination": "Goa",
                "start_date": "2025-11-04",
                "end_date": "2025-11-07",
                "duration_days": 4,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 7800,
                "saved": 0,
                "total_cost": 14135,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 3900,
                    "transport": 5400,
                    "activities": 1000,
                    "meals": 2550,
                    "miscellaneous": 1285
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-04",
                        "title": "Arrival in Goa, Old Goa Heritage & Panjim's Latin Quarter",
                        "description": "Arrive in Goa via an overnight bus, check into your mid-range resort, and immerse yourself in the rich history of Old Goa and the vibrant charm of Fontainhas. Evening dedicated to exploring local markets and savoring authentic Goan cuisine.",
                        "events": [
                            {
                                "id": "day1-event1-transport",
                                "event_type": "transport",
                                "start_time": "08:00",
                                "end_time": "09:00",
                                "transport": {
                                    "id": "trans-D1-01",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Chikkamagaluru KSRTC Bus Stand",
                                        "address": "KSRTC Bus Stand, Basavanahalli Main Rd, Chikkamagaluru, Karnataka 577101",
                                        "city": "Chikkamagaluru",
                                        "state": "Karnataka",
                                        "country": "India",
                                        "latitude": 13.3245,
                                        "longitude": 75.7725
                                    },
                                    "to_location": {
                                        "name": "Panjim KTC Bus Stand",
                                        "address": "KTC Bus Stand, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "departure_time": "20:00",
                                    "arrival_time": "08:00",
                                    "duration": "12h 0m",
                                    "cost": 1700,
                                    "cost_per_person": 1700,
                                    "description": "Arrival in Panjim from Chikkamagaluru via an overnight AC Sleeper bus. This journey provides a restful way to reach Goa, arriving fresh for the day's activities. The cost for the bus journey is accounted here, though boarding was on 2025-11-03 evening.",
                                    "booking_url": "https://www.easemytrip.com/bus",
                                    "notes": [
                                        "Boarding was on 2025-11-03 evening."
                                    ],
                                    "carrier": "Sea Bird Tourist",
                                    "service_class": "AC Sleeper",
                                    "vehicle_number": "CMG-GOA-ACSLP",
                                    "route_type": "Direct Overnight"
                                }
                            },
                            {
                                "id": "day1-event2-transport",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "10:00",
                                "transport": {
                                    "id": "trans-D1-02",
                                    "mode": "taxi/scooter",
                                    "from_location": {
                                        "name": "Panjim KTC Bus Stand",
                                        "address": "KTC Bus Stand, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "duration": "1h 0m",
                                    "cost": 875,
                                    "cost_per_person": 875,
                                    "description": "Take a local taxi/auto-rickshaw from the bus stand to your resort with luggage (approx. ₹500). Then, rent a scooter for the duration of your stay to provide flexible local transport. The cost includes 1 day's scooter rental (₹300) and estimated fuel (₹75).",
                                    "notes": [
                                        "Scooter rental typically costs ₹300-400 per day. Ensure you have a valid driving license.",
                                        "Fuel cost for the day estimated at ₹75.00."
                                    ]
                                }
                            },
                            {
                                "id": "day1-event3-activity",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "act-D1-01",
                                    "name": "Check-in & Freshen Up",
                                    "description": "Arrive at Cozy Woods Hill Resort. While official check-in is at 14:00, you can usually drop off luggage at the reception and freshen up. Take some time to relax after your overnight journey.",
                                    "category": "Leisure",
                                    "type": "Hotel Stay",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "tips": [
                                        "Confirm early luggage drop-off with the resort if arriving before check-in time."
                                    ],
                                    "opening_hours": "Open 24 hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-event4-meal",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "end_time": "13:30",
                                "meal": {
                                    "id": "meal-D1-01",
                                    "type": "lunch",
                                    "restaurant_name": "Local Goan Restaurant (near Karmali)",
                                    "description": "Enjoy a traditional Goan thali or a local seafood curry at a mid-range eatery near your resort, offering an authentic taste of Goan cuisine.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Local Goan Restaurant",
                                        "address": "Near Karmali, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.478,
                                        "longitude": 73.9225
                                    },
                                    "reservation_time": "12:30",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 0,
                                    "review_count": 0,
                                    "specialties": [
                                        "Fish Thali",
                                        "Prawn Curry"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day1-event5-transport",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "trans-D1-03",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Old Goa",
                                        "address": "Old Goa Road, Bainguinim, Goa 403402",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.500908,
                                        "longitude": 73.911299
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride from the resort to Old Goa."
                                }
                            },
                            {
                                "id": "day1-event6-activity",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:30",
                                "activity": {
                                    "id": "act-D1-02",
                                    "name": "Explore Old Goa (Velha Goa)",
                                    "description": "Step back in time at Old Goa, a UNESCO World Heritage site. Visit the iconic Basilica of Bom Jesus, housing the relics of St. Francis Xavier, and the grand Se Cathedral, one of Asia's largest churches. These sites reflect Goa's rich Portuguese colonial past.",
                                    "category": "Heritage, Culture",
                                    "type": "Historical Site",
                                    "location": {
                                        "name": "Basilica of Bom Jesus & Se Cathedral",
                                        "address": "Old Goa Road, Bainguinim, Goa 403402",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.500908,
                                        "longitude": 73.911299
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.7,
                                    "review_count": 50000,
                                    "tips": [
                                        "Dress modestly (shoulders and knees covered) as a sign of respect.",
                                        "Consider hiring a local guide for deeper insights into the history.",
                                        "Wear comfortable walking shoes."
                                    ],
                                    "opening_hours": "08:30 - 18:30 (Basilica), 07:00 - 18:30 (Se Cathedral)",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-event7-activity",
                                "event_type": "activity",
                                "start_time": "16:30",
                                "end_time": "18:00",
                                "activity": {
                                    "id": "act-D1-03",
                                    "name": "Wander through Fontainhas (Latin Quarter)",
                                    "description": "Explore Fontainhas, Panjim's charming Latin Quarter. This area is famous for its narrow, winding streets, colorful Portuguese-era houses, and vibrant atmosphere. Discover hidden art galleries and admire the unique architecture.",
                                    "category": "Culture, Architecture",
                                    "type": "Historical District",
                                    "location": {
                                        "name": "Fontainhas",
                                        "address": "Fontainhas, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4962,
                                        "longitude": 73.8247
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 25000,
                                    "tips": [
                                        "Carry a camera to capture the picturesque streets.",
                                        "Pop into a local cafe for a refreshing drink.",
                                        "Look for the traditional 'lucky charms' outside houses."
                                    ],
                                    "opening_hours": "Always Open",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-event8-activity",
                                "event_type": "activity",
                                "start_time": "18:00",
                                "end_time": "19:00",
                                "activity": {
                                    "id": "act-D1-04",
                                    "name": "Stroll through Panjim Market",
                                    "description": "Experience the local hustle and bustle at Panjim's Municipal Market. It's a great place to observe daily life, find fresh produce, local spices, and perhaps some unique Goan souvenirs.",
                                    "category": "Shopping, Local Experience",
                                    "type": "Market",
                                    "location": {
                                        "name": "Panjim Municipal Market",
                                        "address": "403001, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4996,
                                        "longitude": 73.8286
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4,
                                    "review_count": 10000,
                                    "tips": [
                                        "Bargaining is common, especially for non-fixed price items.",
                                        "Keep an eye on your belongings in crowded areas."
                                    ],
                                    "opening_hours": "07:00 - 20:00",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day1-event9-transport",
                                "event_type": "transport",
                                "start_time": "19:00",
                                "end_time": "19:30",
                                "transport": {
                                    "id": "trans-D1-04",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Panjim Municipal Market",
                                        "address": "403001, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4996,
                                        "longitude": 73.8286
                                    },
                                    "to_location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrence, Old Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.913689
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to dinner location near Old Goa."
                                }
                            },
                            {
                                "id": "day1-event10-meal",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "end_time": "21:00",
                                "meal": {
                                    "id": "meal-D1-02",
                                    "type": "dinner",
                                    "restaurant_name": "Goa Streetz / A Goan Cafeteria Brasil",
                                    "description": "Savor authentic Goan dishes at this mid-range cafeteria near Old Goa. Known for its blend of Goan and Brazilian flavors, it's a great spot to try local delicacies. Note that it typically closes for a few hours in the afternoon.",
                                    "cuisine": "Indian, Goan, Brazilian",
                                    "location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrence, Old Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.913689
                                    },
                                    "reservation_time": "19:30",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 4.6,
                                    "review_count": 208,
                                    "specialties": [
                                        "Goan Thali",
                                        "Cafeteria specials"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day1-event11-transport",
                                "event_type": "transport",
                                "start_time": "21:00",
                                "end_time": "21:45",
                                "transport": {
                                    "id": "trans-D1-05",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrence, Old Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.913689
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "duration": "0h 45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort after dinner."
                                }
                            }
                        ],
                        "daily_cost": 2675
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-05",
                        "title": "Temples, Spice Plantations & Goan Architecture",
                        "description": "A day dedicated to exploring Goa's spiritual side at a prominent Hindu temple, indulging in a sensory experience at a spice plantation, and learning about the region's unique architectural heritage.",
                        "events": [
                            {
                                "id": "day2-event1-meal",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "end_time": "09:30",
                                "meal": {
                                    "id": "meal-D2-01",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort North Goa (Hotel Restaurant)",
                                    "description": "Enjoy breakfast at your resort before heading out for the day's explorations.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "reservation_time": "08:30",
                                    "cost": 50,
                                    "cost_per_person": 50,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-event2-transport",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:00",
                                "transport": {
                                    "id": "trans-D2-01",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Shri Mangeshi Temple",
                                        "address": "Mangeshi, Priol, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4214,
                                        "longitude": 73.9691
                                    },
                                    "duration": "0h 30m",
                                    "cost": 375,
                                    "cost_per_person": 375,
                                    "description": "Scooter rental for the day (₹300) and estimated fuel (₹75). Ride to Shri Mangeshi Temple.",
                                    "notes": [
                                        "Fuel cost for the day estimated at ₹75.00."
                                    ]
                                }
                            },
                            {
                                "id": "day2-event3-activity",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "12:00",
                                "activity": {
                                    "id": "act-D2-01",
                                    "name": "Visit Shri Mangeshi Temple",
                                    "description": "Discover the architectural beauty of Shri Mangeshi Temple, one of Goa's largest and most famous Hindu temples. Admire its unique blend of traditional Hindu and modern architecture, and soak in the serene spiritual atmosphere.",
                                    "category": "Religious, Culture",
                                    "type": "Temple",
                                    "location": {
                                        "name": "Shri Mangeshi Temple",
                                        "address": "Mangeshi, Priol, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4214,
                                        "longitude": 73.9691
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 15000,
                                    "tips": [
                                        "Dress modestly.",
                                        "Photography may be restricted in certain areas.",
                                        "Consider visiting during morning aarti for a spiritual experience."
                                    ],
                                    "opening_hours": "06:00 - 22:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-event4-transport",
                                "event_type": "transport",
                                "start_time": "12:00",
                                "end_time": "12:30",
                                "transport": {
                                    "id": "trans-D2-02",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Shri Mangeshi Temple",
                                        "address": "Mangeshi, Priol, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4214,
                                        "longitude": 73.9691
                                    },
                                    "to_location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "Curti, Ponda, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4056,
                                        "longitude": 74.0041
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to a nearby Spice Plantation."
                                }
                            },
                            {
                                "id": "day2-event5-activity",
                                "event_type": "activity",
                                "start_time": "12:30",
                                "end_time": "15:00",
                                "activity": {
                                    "id": "act-D2-02",
                                    "name": "Spice Plantation Tour (with lunch)",
                                    "description": "Embark on a Spice Plantation Tour to learn about Goa's agricultural heritage and traditional spice cultivation. Walk through lush plantations, identify various spices, and understand their uses. The tour typically concludes with a traditional Goan lunch.",
                                    "category": "Nature, Culture, Food",
                                    "type": "Farm Tour",
                                    "location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "Curti, Ponda, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4056,
                                        "longitude": 74.0041
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "booking_required": true,
                                    "rating": 4,
                                    "review_count": 8000,
                                    "tips": [
                                        "Wear insect repellent.",
                                        "Book your tour in advance, especially during peak season.",
                                        "Enjoy the elephant shower if available."
                                    ],
                                    "opening_hours": "09:00 - 17:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-event6-transport",
                                "event_type": "transport",
                                "start_time": "15:00",
                                "end_time": "16:00",
                                "transport": {
                                    "id": "trans-D2-03",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "Curti, Ponda, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4056,
                                        "longitude": 74.0041
                                    },
                                    "to_location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to Houses of Goa Museum. This is a longer ride from Ponda towards North Goa, allow ample time."
                                }
                            },
                            {
                                "id": "day2-event7-activity",
                                "event_type": "activity",
                                "start_time": "16:00",
                                "end_time": "18:00",
                                "activity": {
                                    "id": "act-D2-03",
                                    "name": "Visit Houses of Goa Museum",
                                    "description": "Explore the unique ship-shaped Houses of Goa Museum, dedicated to showcasing the region's cultural and architectural history. This offbeat museum offers insights into Goan homes and their evolution.",
                                    "category": "Museum, Architecture",
                                    "type": "Museum",
                                    "location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 3719,
                                    "tips": [
                                        "Closed on Mondays (this is a Wednesday).",
                                        "Allow ample time to appreciate the detailed exhibits."
                                    ],
                                    "opening_hours": "10:00 - 19:30 (Tuesday-Sunday)",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day2-event8-transport",
                                "event_type": "transport",
                                "start_time": "18:00",
                                "end_time": "18:30",
                                "transport": {
                                    "id": "trans-D2-04",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            },
                            {
                                "id": "day2-event9-meal",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "end_time": "21:00",
                                "meal": {
                                    "id": "meal-D2-02",
                                    "type": "dinner",
                                    "restaurant_name": "Local Goan Restaurant (near Karmali/Panjim)",
                                    "description": "Enjoy a relaxed dinner at a local eatery, perhaps trying a different Goan specialty or fresh seafood in the vicinity of your resort.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Local Goan Restaurant",
                                        "address": "Near Karmali/Panjim, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.485,
                                        "longitude": 73.88
                                    },
                                    "reservation_time": "19:30",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 1675
                    },
                    {
                        "day_number": 3,
                        "date": "2025-11-06",
                        "title": "Ancestral Goa & Fort Aguada Views",
                        "description": "Delve into traditional Goan village life at Ancestral Goa, followed by panoramic coastal views from the historic Fort Aguada. This day involves significant travel between South and North Goa, blending cultural exploration with scenic beauty.",
                        "events": [
                            {
                                "id": "day3-event1-meal",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "end_time": "09:30",
                                "meal": {
                                    "id": "meal-D3-01",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort North Goa (Hotel Restaurant)",
                                    "description": "Start your day with breakfast at the resort.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "reservation_time": "08:30",
                                    "cost": 50,
                                    "cost_per_person": 50,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day3-event2-transport",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:30",
                                "transport": {
                                    "id": "trans-D3-01",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Ancestral Goa (Big Foot Museum)",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "duration": "1h 0m",
                                    "cost": 375,
                                    "cost_per_person": 375,
                                    "description": "Scooter rental for the day (₹300) and estimated fuel (₹75). Ride to Ancestral Goa in Loutolim, which is a longer ride south.",
                                    "notes": [
                                        "Fuel cost for the day estimated at ₹75.00."
                                    ]
                                }
                            },
                            {
                                "id": "day3-event3-activity",
                                "event_type": "activity",
                                "start_time": "10:30",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "act-D3-01",
                                    "name": "Visit Ancestral Goa (Big Foot Museum)",
                                    "description": "Visit Ancestral Goa, also known as Big Foot Museum, an open-air museum and theme park dedicated to rural Goan life. Experience a cultural village showcasing traditional Goan life, art, and history, including a replica of a typical Goan village.",
                                    "category": "Culture, History",
                                    "type": "Museum, Theme Park",
                                    "location": {
                                        "name": "Big Foot Goa",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 250,
                                    "cost_per_person": 250,
                                    "booking_required": false,
                                    "rating": 4.1,
                                    "review_count": 8454,
                                    "tips": [
                                        "Open from 9:00 AM to 6:00 PM.",
                                        "There's an art gallery, shop, and restaurant on-site."
                                    ],
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day3-event4-meal",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "end_time": "14:00",
                                "meal": {
                                    "id": "meal-D3-02",
                                    "type": "lunch",
                                    "restaurant_name": "Local Eatery (near Loutolim)",
                                    "description": "Grab a quick and affordable lunch at a local eatery in Loutolim after your museum visit.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Local Eatery",
                                        "address": "Near Loutolim, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.345,
                                        "longitude": 73.98
                                    },
                                    "reservation_time": "13:00",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day3-event5-transport",
                                "event_type": "transport",
                                "start_time": "14:00",
                                "end_time": "15:30",
                                "transport": {
                                    "id": "trans-D3-02",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Ancestral Goa (Big Foot Museum)",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "to_location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride from Loutolim (South Goa) to Fort Aguada (North Goa). This is a significant distance, so factor in ample travel time."
                                }
                            },
                            {
                                "id": "day3-event6-activity",
                                "event_type": "activity",
                                "start_time": "15:30",
                                "end_time": "17:30",
                                "activity": {
                                    "id": "act-D3-02",
                                    "name": "Explore Fort Aguada",
                                    "description": "Visit the 1612 Portuguese fortress of Fort Aguada, offering breathtaking ocean views and an abandoned lighthouse erected in 1864. Explore the ramparts and enjoy the panoramic vistas of the Arabian Sea.",
                                    "category": "History, Scenic Views",
                                    "type": "Fort",
                                    "location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 106677,
                                    "tips": [
                                        "Wear comfortable shoes for walking around the fort.",
                                        "Best visited in the late afternoon for sunset views.",
                                        "Carry water and sunscreen."
                                    ],
                                    "opening_hours": "09:30 - 18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day3-event7-transport",
                                "event_type": "transport",
                                "start_time": "17:30",
                                "end_time": "18:00",
                                "transport": {
                                    "id": "trans-D3-03",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "to_location": {
                                        "name": "De Little Goa",
                                        "address": "St. Alex Church, Naikka Waddo, Calangute",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.543865,
                                        "longitude": 73.769184
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to Calangute for dinner."
                                }
                            },
                            {
                                "id": "day3-event8-meal",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "end_time": "21:00",
                                "meal": {
                                    "id": "meal-D3-03",
                                    "type": "dinner",
                                    "restaurant_name": "De Little Goa",
                                    "description": "Enjoy a mid-range dining experience at De Little Goa, offering seafood, Goan curries, and Thai options with open-air seating. A great spot to enjoy the evening in North Goa.",
                                    "cuisine": "Seafood, Goan, Thai",
                                    "location": {
                                        "name": "De Little Goa",
                                        "address": "St. Alex Church, Naikka Waddo, Calangute",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.543865,
                                        "longitude": 73.769184
                                    },
                                    "reservation_time": "19:30",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 4.2,
                                    "review_count": 3138,
                                    "specialties": [
                                        "Goan Fish Curry",
                                        "Prawn Balchão"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day3-event9-transport",
                                "event_type": "transport",
                                "start_time": "21:00",
                                "end_time": "21:45",
                                "transport": {
                                    "id": "trans-D3-04",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "De Little Goa",
                                        "address": "St. Alex Church, Naikka Waddo, Calangute",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.543865,
                                        "longitude": 73.769184
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "duration": "0h 45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            }
                        ],
                        "daily_cost": 1475
                    },
                    {
                        "day_number": 4,
                        "date": "2025-11-07",
                        "title": "Leisurely Morning & Departure",
                        "description": "Enjoy a relaxed morning in Goa, check out from your resort, have a final Goan lunch, and prepare for your evening departure from Panjim.",
                        "events": [
                            {
                                "id": "day4-event1-meal",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "end_time": "09:30",
                                "meal": {
                                    "id": "meal-D4-01",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort North Goa (Hotel Restaurant)",
                                    "description": "Enjoy your last breakfast at the resort.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "reservation_time": "08:30",
                                    "cost": 50,
                                    "cost_per_person": 50,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day4-event2-transport",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:00",
                                "transport": {
                                    "id": "trans-D4-01",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Scooter Rental Drop-off Point",
                                        "address": "Near Panjim KTC Bus Stand, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "duration": "0h 30m",
                                    "cost": 375,
                                    "cost_per_person": 375,
                                    "description": "Scooter rental for the day (₹300) and estimated fuel (₹75). Ride from the resort to a scooter drop-off point near Panjim KTC Bus Stand to return the vehicle.",
                                    "notes": [
                                        "Fuel cost for the day estimated at ₹75.00."
                                    ]
                                }
                            },
                            {
                                "id": "day4-event3-activity",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "10:30",
                                "activity": {
                                    "id": "act-D4-01",
                                    "name": "Return Scooter",
                                    "description": "Return your rented scooter at the designated drop-off point near Panjim KTC Bus Stand.",
                                    "category": "Logistics",
                                    "type": "Vehicle Return",
                                    "location": {
                                        "name": "Scooter Rental Drop-off Point",
                                        "address": "Near Panjim KTC Bus Stand, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Ensure all rental formalities are completed and check for any damages before returning."
                                    ],
                                    "opening_hours": "Varies by rental agency",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day4-event4-activity",
                                "event_type": "activity",
                                "start_time": "10:30",
                                "end_time": "11:00",
                                "activity": {
                                    "id": "act-D4-02",
                                    "name": "Check-out from Resort",
                                    "description": "Complete the check-out formalities at Cozy Woods Hill Resort. If you haven't already, confirm luggage storage options with the front desk if you plan to explore more before departure.",
                                    "category": "Accommodation",
                                    "type": "Hotel Check-out",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "tips": [
                                        "Confirm luggage storage options with the front desk."
                                    ],
                                    "opening_hours": "Open 24 hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day4-event5-activity",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "act-D4-03",
                                    "name": "Leisurely Morning & Souvenir Shopping in Panjim",
                                    "description": "Enjoy a relaxed morning in Panjim. You can do some last-minute souvenir shopping in local shops or simply relax at a cafe by the Mandovi river.",
                                    "category": "Leisure, Shopping",
                                    "type": "Free Time",
                                    "location": {
                                        "name": "Panjim City",
                                        "address": "Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Look for Feni, cashew nuts, and traditional Goan handicrafts as souvenirs."
                                    ],
                                    "opening_hours": "Varies by shop",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day4-event6-meal",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "end_time": "13:30",
                                "meal": {
                                    "id": "meal-D4-02",
                                    "type": "lunch",
                                    "restaurant_name": "Local Goan Restaurant (Panjim)",
                                    "description": "Enjoy your final Goan meal, perhaps a last taste of seafood or a comforting curry, before heading home.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Local Goan Restaurant",
                                        "address": "Near Panjim KTC Bus Stand, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.496,
                                        "longitude": 73.8295
                                    },
                                    "reservation_time": "12:30",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day4-event7-activity",
                                "event_type": "activity",
                                "start_time": "13:30",
                                "end_time": "19:30",
                                "activity": {
                                    "id": "act-D4-04",
                                    "name": "Free Time / Head to Bus Stand",
                                    "description": "Spend the afternoon at leisure in Panjim, perhaps visiting a cafe or finding a quiet spot to relax. Head to Panjim KTC Bus Stand well in advance of your bus departure.",
                                    "category": "Leisure",
                                    "type": "Free Time",
                                    "location": {
                                        "name": "Panjim City",
                                        "address": "Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "6h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Ensure you have all your belongings and arrive at the bus stand at least 30 minutes before departure."
                                    ],
                                    "opening_hours": "Always Open",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day4-event8-transport",
                                "event_type": "transport",
                                "start_time": "20:00",
                                "end_time": "08:00",
                                "transport": {
                                    "id": "trans-D4-02",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Panjim KTC Bus Stand",
                                        "address": "KTC Bus Stand, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "to_location": {
                                        "name": "Chikkamagaluru KSRTC Bus Stand",
                                        "address": "KSRTC Bus Stand, Basavanahalli Main Rd, Chikkamagaluru, Karnataka 577101",
                                        "city": "Chikkamagaluru",
                                        "state": "Karnataka",
                                        "country": "India",
                                        "latitude": 13.3245,
                                        "longitude": 75.7725
                                    },
                                    "departure_time": "20:00",
                                    "arrival_time": "08:00",
                                    "duration": "12h 0m",
                                    "cost": 1700,
                                    "cost_per_person": 1700,
                                    "description": "Board your overnight AC Sleeper bus from Panjim KTC Bus Stand back to Chikkamagaluru. This concludes your heritage trip to Goa.",
                                    "booking_url": "https://www.easemytrip.com/bus",
                                    "carrier": "Sea Bird Tourist",
                                    "service_class": "AC Sleeper",
                                    "vehicle_number": "CMG-GOA-ACSLP",
                                    "route_type": "Direct Overnight"
                                }
                            }
                        ],
                        "daily_cost": 2525
                    }
                ],
                "accommodations": [
                    {
                        "id": "cozy-woods-hill-resort-north-goa",
                        "name": "Cozy Woods Hill Resort North Goa",
                        "type": "resort",
                        "description": "Cozy Woods Hill Resort, nestled in the tranquil surroundings of Karmali, provides a serene and strategically positioned base for a solo traveler keen on exploring Goa's rich heritage. Its close proximity to Old Goa (Velha Goa) and the vibrant Fontainhas in Panjim makes it an excellent choice for cultural immersion. The resort offers comfortable, mid-range accommodation, ensuring a restful stay after days of historical exploration. With 24-hour operational hours, wheelchair accessible parking, and essential amenities, it balances value with convenience, perfectly aligning with a heritage-focused, mid-range travel style while staying within the overall budget.",
                        "location": {
                            "name": "Karmali, North Goa",
                            "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                            "city": "Goa",
                            "state": "Goa",
                            "country": "India",
                            "latitude": 15.477744,
                            "longitude": 73.921972
                        },
                        "check_in_date": "2025-11-04",
                        "check_out_date": "2025-11-07",
                        "nights": 3,
                        "room_type": "Standard Double Room",
                        "guests": 1,
                        "cost_per_night": 1300,
                        "total_cost": 3900,
                        "rating": 4.2,
                        "review_count": 680,
                        "amenities": [
                            "Air Conditioning",
                            "Free Wi-Fi",
                            "Restaurant",
                            "Parking",
                            "24-hour front desk",
                            "Wheelchair accessible parking"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "http://www.cozywoods.in/",
                        "cancellation_info": "Standard flexible cancellation policies apply. Please check the booking platform or resort website for specific terms at the time of reservation."
                    }
                ],
                "generated_at": "2025-11-02T12:59:59.646821Z",
                "ai_model": "gemini-2.5-flash",
                "language": "",
                "highlight_activities": [
                    "Explore Old Goa (Velha Goa), a UNESCO World Heritage site, including the Basilica of Bom Jesus and Se Cathedral.",
                    "Wander through Fontainhas, Panjim's vibrant Latin Quarter, known for its colorful Portuguese-era houses and art galleries.",
                    "Visit Ancestral Goa (Big Foot Museum) to experience a cultural village showcasing traditional Goan life, art, and history.",
                    "Discover the architectural beauty of Shri Mangeshi Temple, one of Goa's largest and most famous Hindu temples.",
                    "Embark on a Spice Plantation Tour to learn about Goa's agricultural heritage and traditional spice cultivation.",
                    "Stroll through Panjim's bustling markets to immerse yourself in local life and find traditional Goan crafts and produce."
                ],
                "local_insights": [
                    "Embrace 'Susegad', the laid-back, relaxed pace of Goan life. Rushing is uncommon, so enjoy the tranquility.",
                    "Observe the unique religious syncretism, where Hindu and Christian traditions harmoniously blend, evident in festivals and architecture.",
                    "Indulge in Goan cuisine, a delicious fusion of Portuguese and Indian flavors. Must-tries include seafood curries, Xacuti, and the dessert Bebinca.",
                    "When hiring local taxis or auto-rickshaws, always agree on the fare beforehand, as meters are rarely used. Bargaining is common in markets.",
                    "Dress modestly (shoulders and knees covered) when visiting religious sites like churches and temples as a sign of respect.",
                    "Be aware of the 'Siesta Culture'; many smaller shops and establishments, especially outside of main tourist hubs, might close during the afternoon for a few hours."
                ],
                "weather_info": {
                    "season": "Post-Monsoon / Early Winter",
                    "description": "November in Goa marks the beginning of the tourist season, characterized by pleasant, sunny days with significantly reduced humidity. The weather is ideal for sightseeing and outdoor activities, with comfortable evenings.",
                    "avg_min_temp": 22,
                    "avg_max_temp": 33,
                    "recommendation": "Pack light, breathable cotton clothing, comfortable walking shoes, a wide-brimmed hat, sunglasses, and high-SPF sunscreen. A light shawl or jacket might be useful for cooler evenings or air-conditioned indoor spaces."
                }
            },
            {
                "id": "45792cef-4d80-47b6-987e-ed13280d14c9",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "source": "Chikkamagaluru",
                "destination": "Goa",
                "start_date": "2025-11-04",
                "end_date": "2025-11-07",
                "duration_days": 4,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 7800,
                "saved": 0,
                "total_cost": 14135,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 3900,
                    "transport": 5400,
                    "activities": 1000,
                    "meals": 2550,
                    "miscellaneous": 1285
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-04",
                        "title": "Arrival in Goa, Old Goa Heritage & Panjim's Latin Quarter",
                        "description": "Arrive in Goa via an overnight bus, check into your mid-range resort, and immerse yourself in the rich history of Old Goa and the vibrant charm of Fontainhas. Evening dedicated to exploring local markets and savoring authentic Goan cuisine.",
                        "events": [
                            {
                                "id": "day1-event1-transport",
                                "event_type": "transport",
                                "start_time": "08:00",
                                "end_time": "09:00",
                                "transport": {
                                    "id": "trans-D1-01",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Chikkamagaluru KSRTC Bus Stand",
                                        "address": "KSRTC Bus Stand, Basavanahalli Main Rd, Chikkamagaluru, Karnataka 577101",
                                        "city": "Chikkamagaluru",
                                        "state": "Karnataka",
                                        "country": "India",
                                        "latitude": 13.3245,
                                        "longitude": 75.7725
                                    },
                                    "to_location": {
                                        "name": "Panjim KTC Bus Stand",
                                        "address": "KTC Bus Stand, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "departure_time": "20:00",
                                    "arrival_time": "08:00",
                                    "duration": "12h 0m",
                                    "cost": 1700,
                                    "cost_per_person": 1700,
                                    "description": "Arrival in Panjim from Chikkamagaluru via an overnight AC Sleeper bus. This journey provides a restful way to reach Goa, arriving fresh for the day's activities. The cost for the bus journey is accounted here, though boarding was on 2025-11-03 evening.",
                                    "booking_url": "https://www.easemytrip.com/bus",
                                    "notes": [
                                        "Boarding was on 2025-11-03 evening."
                                    ],
                                    "carrier": "Sea Bird Tourist",
                                    "service_class": "AC Sleeper",
                                    "vehicle_number": "CMG-GOA-ACSLP",
                                    "route_type": "Direct Overnight"
                                }
                            },
                            {
                                "id": "day1-event2-transport",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "10:00",
                                "transport": {
                                    "id": "trans-D1-02",
                                    "mode": "taxi/scooter",
                                    "from_location": {
                                        "name": "Panjim KTC Bus Stand",
                                        "address": "KTC Bus Stand, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "duration": "1h 0m",
                                    "cost": 875,
                                    "cost_per_person": 875,
                                    "description": "Take a local taxi/auto-rickshaw from the bus stand to your resort with luggage (approx. ₹500). Then, rent a scooter for the duration of your stay to provide flexible local transport. The cost includes 1 day's scooter rental (₹300) and estimated fuel (₹75).",
                                    "notes": [
                                        "Scooter rental typically costs ₹300-400 per day. Ensure you have a valid driving license.",
                                        "Fuel cost for the day estimated at ₹75.00."
                                    ]
                                }
                            },
                            {
                                "id": "day1-event3-activity",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "act-D1-01",
                                    "name": "Check-in & Freshen Up",
                                    "description": "Arrive at Cozy Woods Hill Resort. While official check-in is at 14:00, you can usually drop off luggage at the reception and freshen up. Take some time to relax after your overnight journey.",
                                    "category": "Leisure",
                                    "type": "Hotel Stay",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "tips": [
                                        "Confirm early luggage drop-off with the resort if arriving before check-in time."
                                    ],
                                    "opening_hours": "Open 24 hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-event4-meal",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "end_time": "13:30",
                                "meal": {
                                    "id": "meal-D1-01",
                                    "type": "lunch",
                                    "restaurant_name": "Local Goan Restaurant (near Karmali)",
                                    "description": "Enjoy a traditional Goan thali or a local seafood curry at a mid-range eatery near your resort, offering an authentic taste of Goan cuisine.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Local Goan Restaurant",
                                        "address": "Near Karmali, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.478,
                                        "longitude": 73.9225
                                    },
                                    "reservation_time": "12:30",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 0,
                                    "review_count": 0,
                                    "specialties": [
                                        "Fish Thali",
                                        "Prawn Curry"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day1-event5-transport",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "trans-D1-03",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Old Goa",
                                        "address": "Old Goa Road, Bainguinim, Goa 403402",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.500908,
                                        "longitude": 73.911299
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride from the resort to Old Goa."
                                }
                            },
                            {
                                "id": "day1-event6-activity",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:30",
                                "activity": {
                                    "id": "act-D1-02",
                                    "name": "Explore Old Goa (Velha Goa)",
                                    "description": "Step back in time at Old Goa, a UNESCO World Heritage site. Visit the iconic Basilica of Bom Jesus, housing the relics of St. Francis Xavier, and the grand Se Cathedral, one of Asia's largest churches. These sites reflect Goa's rich Portuguese colonial past.",
                                    "category": "Heritage, Culture",
                                    "type": "Historical Site",
                                    "location": {
                                        "name": "Basilica of Bom Jesus & Se Cathedral",
                                        "address": "Old Goa Road, Bainguinim, Goa 403402",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.500908,
                                        "longitude": 73.911299
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.7,
                                    "review_count": 50000,
                                    "tips": [
                                        "Dress modestly (shoulders and knees covered) as a sign of respect.",
                                        "Consider hiring a local guide for deeper insights into the history.",
                                        "Wear comfortable walking shoes."
                                    ],
                                    "opening_hours": "08:30 - 18:30 (Basilica), 07:00 - 18:30 (Se Cathedral)",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-event7-activity",
                                "event_type": "activity",
                                "start_time": "16:30",
                                "end_time": "18:00",
                                "activity": {
                                    "id": "act-D1-03",
                                    "name": "Wander through Fontainhas (Latin Quarter)",
                                    "description": "Explore Fontainhas, Panjim's charming Latin Quarter. This area is famous for its narrow, winding streets, colorful Portuguese-era houses, and vibrant atmosphere. Discover hidden art galleries and admire the unique architecture.",
                                    "category": "Culture, Architecture",
                                    "type": "Historical District",
                                    "location": {
                                        "name": "Fontainhas",
                                        "address": "Fontainhas, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4962,
                                        "longitude": 73.8247
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 25000,
                                    "tips": [
                                        "Carry a camera to capture the picturesque streets.",
                                        "Pop into a local cafe for a refreshing drink.",
                                        "Look for the traditional 'lucky charms' outside houses."
                                    ],
                                    "opening_hours": "Always Open",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day1-event8-activity",
                                "event_type": "activity",
                                "start_time": "18:00",
                                "end_time": "19:00",
                                "activity": {
                                    "id": "act-D1-04",
                                    "name": "Stroll through Panjim Market",
                                    "description": "Experience the local hustle and bustle at Panjim's Municipal Market. It's a great place to observe daily life, find fresh produce, local spices, and perhaps some unique Goan souvenirs.",
                                    "category": "Shopping, Local Experience",
                                    "type": "Market",
                                    "location": {
                                        "name": "Panjim Municipal Market",
                                        "address": "403001, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4996,
                                        "longitude": 73.8286
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4,
                                    "review_count": 10000,
                                    "tips": [
                                        "Bargaining is common, especially for non-fixed price items.",
                                        "Keep an eye on your belongings in crowded areas."
                                    ],
                                    "opening_hours": "07:00 - 20:00",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day1-event9-transport",
                                "event_type": "transport",
                                "start_time": "19:00",
                                "end_time": "19:30",
                                "transport": {
                                    "id": "trans-D1-04",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Panjim Municipal Market",
                                        "address": "403001, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4996,
                                        "longitude": 73.8286
                                    },
                                    "to_location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrence, Old Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.913689
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to dinner location near Old Goa."
                                }
                            },
                            {
                                "id": "day1-event10-meal",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "end_time": "21:00",
                                "meal": {
                                    "id": "meal-D1-02",
                                    "type": "dinner",
                                    "restaurant_name": "Goa Streetz / A Goan Cafeteria Brasil",
                                    "description": "Savor authentic Goan dishes at this mid-range cafeteria near Old Goa. Known for its blend of Goan and Brazilian flavors, it's a great spot to try local delicacies. Note that it typically closes for a few hours in the afternoon.",
                                    "cuisine": "Indian, Goan, Brazilian",
                                    "location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrence, Old Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.913689
                                    },
                                    "reservation_time": "19:30",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 4.6,
                                    "review_count": 208,
                                    "specialties": [
                                        "Goan Thali",
                                        "Cafeteria specials"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day1-event11-transport",
                                "event_type": "transport",
                                "start_time": "21:00",
                                "end_time": "21:45",
                                "transport": {
                                    "id": "trans-D1-05",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Goa Streetz / A Goan Cafeteria Brasil",
                                        "address": "Diwar Ferry Road, Se Cathedral, entrence, Old Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.503284,
                                        "longitude": 73.913689
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "duration": "0h 45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort after dinner."
                                }
                            }
                        ],
                        "daily_cost": 2675
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-05",
                        "title": "Temples, Spice Plantations & Goan Architecture",
                        "description": "A day dedicated to exploring Goa's spiritual side at a prominent Hindu temple, indulging in a sensory experience at a spice plantation, and learning about the region's unique architectural heritage.",
                        "events": [
                            {
                                "id": "day2-event1-meal",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "end_time": "09:30",
                                "meal": {
                                    "id": "meal-D2-01",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort North Goa (Hotel Restaurant)",
                                    "description": "Enjoy breakfast at your resort before heading out for the day's explorations.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "reservation_time": "08:30",
                                    "cost": 50,
                                    "cost_per_person": 50,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day2-event2-transport",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:00",
                                "transport": {
                                    "id": "trans-D2-01",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Shri Mangeshi Temple",
                                        "address": "Mangeshi, Priol, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4214,
                                        "longitude": 73.9691
                                    },
                                    "duration": "0h 30m",
                                    "cost": 375,
                                    "cost_per_person": 375,
                                    "description": "Scooter rental for the day (₹300) and estimated fuel (₹75). Ride to Shri Mangeshi Temple.",
                                    "notes": [
                                        "Fuel cost for the day estimated at ₹75.00."
                                    ]
                                }
                            },
                            {
                                "id": "day2-event3-activity",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "12:00",
                                "activity": {
                                    "id": "act-D2-01",
                                    "name": "Visit Shri Mangeshi Temple",
                                    "description": "Discover the architectural beauty of Shri Mangeshi Temple, one of Goa's largest and most famous Hindu temples. Admire its unique blend of traditional Hindu and modern architecture, and soak in the serene spiritual atmosphere.",
                                    "category": "Religious, Culture",
                                    "type": "Temple",
                                    "location": {
                                        "name": "Shri Mangeshi Temple",
                                        "address": "Mangeshi, Priol, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4214,
                                        "longitude": 73.9691
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.6,
                                    "review_count": 15000,
                                    "tips": [
                                        "Dress modestly.",
                                        "Photography may be restricted in certain areas.",
                                        "Consider visiting during morning aarti for a spiritual experience."
                                    ],
                                    "opening_hours": "06:00 - 22:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-event4-transport",
                                "event_type": "transport",
                                "start_time": "12:00",
                                "end_time": "12:30",
                                "transport": {
                                    "id": "trans-D2-02",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Shri Mangeshi Temple",
                                        "address": "Mangeshi, Priol, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4214,
                                        "longitude": 73.9691
                                    },
                                    "to_location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "Curti, Ponda, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4056,
                                        "longitude": 74.0041
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to a nearby Spice Plantation."
                                }
                            },
                            {
                                "id": "day2-event5-activity",
                                "event_type": "activity",
                                "start_time": "12:30",
                                "end_time": "15:00",
                                "activity": {
                                    "id": "act-D2-02",
                                    "name": "Spice Plantation Tour (with lunch)",
                                    "description": "Embark on a Spice Plantation Tour to learn about Goa's agricultural heritage and traditional spice cultivation. Walk through lush plantations, identify various spices, and understand their uses. The tour typically concludes with a traditional Goan lunch.",
                                    "category": "Nature, Culture, Food",
                                    "type": "Farm Tour",
                                    "location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "Curti, Ponda, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4056,
                                        "longitude": 74.0041
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "booking_required": true,
                                    "rating": 4,
                                    "review_count": 8000,
                                    "tips": [
                                        "Wear insect repellent.",
                                        "Book your tour in advance, especially during peak season.",
                                        "Enjoy the elephant shower if available."
                                    ],
                                    "opening_hours": "09:00 - 17:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day2-event6-transport",
                                "event_type": "transport",
                                "start_time": "15:00",
                                "end_time": "16:00",
                                "transport": {
                                    "id": "trans-D2-03",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Sahakari Spice Farm",
                                        "address": "Curti, Ponda, Goa 403401",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4056,
                                        "longitude": 74.0041
                                    },
                                    "to_location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to Houses of Goa Museum. This is a longer ride from Ponda towards North Goa, allow ample time."
                                }
                            },
                            {
                                "id": "day2-event7-activity",
                                "event_type": "activity",
                                "start_time": "16:00",
                                "end_time": "18:00",
                                "activity": {
                                    "id": "act-D2-03",
                                    "name": "Visit Houses of Goa Museum",
                                    "description": "Explore the unique ship-shaped Houses of Goa Museum, dedicated to showcasing the region's cultural and architectural history. This offbeat museum offers insights into Goan homes and their evolution.",
                                    "category": "Museum, Architecture",
                                    "type": "Museum",
                                    "location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 3719,
                                    "tips": [
                                        "Closed on Mondays (this is a Wednesday).",
                                        "Allow ample time to appreciate the detailed exhibits."
                                    ],
                                    "opening_hours": "10:00 - 19:30 (Tuesday-Sunday)",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day2-event8-transport",
                                "event_type": "transport",
                                "start_time": "18:00",
                                "end_time": "18:30",
                                "transport": {
                                    "id": "trans-D2-04",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Houses of Goa Museum",
                                        "address": "House No, 674, Torda, Nisha's Play School, Alto Porvorim, Salvador du Mundu, Penha de Franc",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.530321,
                                        "longitude": 73.840675
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            },
                            {
                                "id": "day2-event9-meal",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "end_time": "21:00",
                                "meal": {
                                    "id": "meal-D2-02",
                                    "type": "dinner",
                                    "restaurant_name": "Local Goan Restaurant (near Karmali/Panjim)",
                                    "description": "Enjoy a relaxed dinner at a local eatery, perhaps trying a different Goan specialty or fresh seafood in the vicinity of your resort.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Local Goan Restaurant",
                                        "address": "Near Karmali/Panjim, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.485,
                                        "longitude": 73.88
                                    },
                                    "reservation_time": "19:30",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 1675
                    },
                    {
                        "day_number": 3,
                        "date": "2025-11-06",
                        "title": "Ancestral Goa & Fort Aguada Views",
                        "description": "Delve into traditional Goan village life at Ancestral Goa, followed by panoramic coastal views from the historic Fort Aguada. This day involves significant travel between South and North Goa, blending cultural exploration with scenic beauty.",
                        "events": [
                            {
                                "id": "day3-event1-meal",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "end_time": "09:30",
                                "meal": {
                                    "id": "meal-D3-01",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort North Goa (Hotel Restaurant)",
                                    "description": "Start your day with breakfast at the resort.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "reservation_time": "08:30",
                                    "cost": 50,
                                    "cost_per_person": 50,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day3-event2-transport",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:30",
                                "transport": {
                                    "id": "trans-D3-01",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Ancestral Goa (Big Foot Museum)",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "duration": "1h 0m",
                                    "cost": 375,
                                    "cost_per_person": 375,
                                    "description": "Scooter rental for the day (₹300) and estimated fuel (₹75). Ride to Ancestral Goa in Loutolim, which is a longer ride south.",
                                    "notes": [
                                        "Fuel cost for the day estimated at ₹75.00."
                                    ]
                                }
                            },
                            {
                                "id": "day3-event3-activity",
                                "event_type": "activity",
                                "start_time": "10:30",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "act-D3-01",
                                    "name": "Visit Ancestral Goa (Big Foot Museum)",
                                    "description": "Visit Ancestral Goa, also known as Big Foot Museum, an open-air museum and theme park dedicated to rural Goan life. Experience a cultural village showcasing traditional Goan life, art, and history, including a replica of a typical Goan village.",
                                    "category": "Culture, History",
                                    "type": "Museum, Theme Park",
                                    "location": {
                                        "name": "Big Foot Goa",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 30m",
                                    "cost": 250,
                                    "cost_per_person": 250,
                                    "booking_required": false,
                                    "rating": 4.1,
                                    "review_count": 8454,
                                    "tips": [
                                        "Open from 9:00 AM to 6:00 PM.",
                                        "There's an art gallery, shop, and restaurant on-site."
                                    ],
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day3-event4-meal",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "end_time": "14:00",
                                "meal": {
                                    "id": "meal-D3-02",
                                    "type": "lunch",
                                    "restaurant_name": "Local Eatery (near Loutolim)",
                                    "description": "Grab a quick and affordable lunch at a local eatery in Loutolim after your museum visit.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Local Eatery",
                                        "address": "Near Loutolim, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.345,
                                        "longitude": 73.98
                                    },
                                    "reservation_time": "13:00",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day3-event5-transport",
                                "event_type": "transport",
                                "start_time": "14:00",
                                "end_time": "15:30",
                                "transport": {
                                    "id": "trans-D3-02",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Ancestral Goa (Big Foot Museum)",
                                        "address": "Cross Museum, Main Road, Salcete District, Loutolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.339727,
                                        "longitude": 73.98688
                                    },
                                    "to_location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride from Loutolim (South Goa) to Fort Aguada (North Goa). This is a significant distance, so factor in ample travel time."
                                }
                            },
                            {
                                "id": "day3-event6-activity",
                                "event_type": "activity",
                                "start_time": "15:30",
                                "end_time": "17:30",
                                "activity": {
                                    "id": "act-D3-02",
                                    "name": "Explore Fort Aguada",
                                    "description": "Visit the 1612 Portuguese fortress of Fort Aguada, offering breathtaking ocean views and an abandoned lighthouse erected in 1864. Explore the ramparts and enjoy the panoramic vistas of the Arabian Sea.",
                                    "category": "History, Scenic Views",
                                    "type": "Fort",
                                    "location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 106677,
                                    "tips": [
                                        "Wear comfortable shoes for walking around the fort.",
                                        "Best visited in the late afternoon for sunset views.",
                                        "Carry water and sunscreen."
                                    ],
                                    "opening_hours": "09:30 - 18:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day3-event7-transport",
                                "event_type": "transport",
                                "start_time": "17:30",
                                "end_time": "18:00",
                                "transport": {
                                    "id": "trans-D3-03",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Fort Aguada",
                                        "address": "Fort Aguada Rd, Aguada Fort Area, Candolim",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.492252,
                                        "longitude": 73.773746
                                    },
                                    "to_location": {
                                        "name": "De Little Goa",
                                        "address": "St. Alex Church, Naikka Waddo, Calangute",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.543865,
                                        "longitude": 73.769184
                                    },
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride to Calangute for dinner."
                                }
                            },
                            {
                                "id": "day3-event8-meal",
                                "event_type": "meal",
                                "start_time": "19:30",
                                "end_time": "21:00",
                                "meal": {
                                    "id": "meal-D3-03",
                                    "type": "dinner",
                                    "restaurant_name": "De Little Goa",
                                    "description": "Enjoy a mid-range dining experience at De Little Goa, offering seafood, Goan curries, and Thai options with open-air seating. A great spot to enjoy the evening in North Goa.",
                                    "cuisine": "Seafood, Goan, Thai",
                                    "location": {
                                        "name": "De Little Goa",
                                        "address": "St. Alex Church, Naikka Waddo, Calangute",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.543865,
                                        "longitude": 73.769184
                                    },
                                    "reservation_time": "19:30",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 4.2,
                                    "review_count": 3138,
                                    "specialties": [
                                        "Goan Fish Curry",
                                        "Prawn Balchão"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day3-event9-transport",
                                "event_type": "transport",
                                "start_time": "21:00",
                                "end_time": "21:45",
                                "transport": {
                                    "id": "trans-D3-04",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "De Little Goa",
                                        "address": "St. Alex Church, Naikka Waddo, Calangute",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.543865,
                                        "longitude": 73.769184
                                    },
                                    "to_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "duration": "0h 45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Scooter ride back to the resort."
                                }
                            }
                        ],
                        "daily_cost": 1475
                    },
                    {
                        "day_number": 4,
                        "date": "2025-11-07",
                        "title": "Leisurely Morning & Departure",
                        "description": "Enjoy a relaxed morning in Goa, check out from your resort, have a final Goan lunch, and prepare for your evening departure from Panjim.",
                        "events": [
                            {
                                "id": "day4-event1-meal",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "end_time": "09:30",
                                "meal": {
                                    "id": "meal-D4-01",
                                    "type": "breakfast",
                                    "restaurant_name": "Cozy Woods Hill Resort North Goa (Hotel Restaurant)",
                                    "description": "Enjoy your last breakfast at the resort.",
                                    "cuisine": "Indian, Continental",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "reservation_time": "08:30",
                                    "cost": 50,
                                    "cost_per_person": 50,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day4-event2-transport",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:00",
                                "transport": {
                                    "id": "trans-D4-01",
                                    "mode": "scooter",
                                    "from_location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "to_location": {
                                        "name": "Scooter Rental Drop-off Point",
                                        "address": "Near Panjim KTC Bus Stand, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "duration": "0h 30m",
                                    "cost": 375,
                                    "cost_per_person": 375,
                                    "description": "Scooter rental for the day (₹300) and estimated fuel (₹75). Ride from the resort to a scooter drop-off point near Panjim KTC Bus Stand to return the vehicle.",
                                    "notes": [
                                        "Fuel cost for the day estimated at ₹75.00."
                                    ]
                                }
                            },
                            {
                                "id": "day4-event3-activity",
                                "event_type": "activity",
                                "start_time": "10:00",
                                "end_time": "10:30",
                                "activity": {
                                    "id": "act-D4-01",
                                    "name": "Return Scooter",
                                    "description": "Return your rented scooter at the designated drop-off point near Panjim KTC Bus Stand.",
                                    "category": "Logistics",
                                    "type": "Vehicle Return",
                                    "location": {
                                        "name": "Scooter Rental Drop-off Point",
                                        "address": "Near Panjim KTC Bus Stand, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Ensure all rental formalities are completed and check for any damages before returning."
                                    ],
                                    "opening_hours": "Varies by rental agency",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day4-event4-activity",
                                "event_type": "activity",
                                "start_time": "10:30",
                                "end_time": "11:00",
                                "activity": {
                                    "id": "act-D4-02",
                                    "name": "Check-out from Resort",
                                    "description": "Complete the check-out formalities at Cozy Woods Hill Resort. If you haven't already, confirm luggage storage options with the front desk if you plan to explore more before departure.",
                                    "category": "Accommodation",
                                    "type": "Hotel Check-out",
                                    "location": {
                                        "name": "Cozy Woods Hill Resort North Goa",
                                        "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.477744,
                                        "longitude": 73.921972
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 680,
                                    "tips": [
                                        "Confirm luggage storage options with the front desk."
                                    ],
                                    "opening_hours": "Open 24 hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "day4-event5-activity",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "act-D4-03",
                                    "name": "Leisurely Morning & Souvenir Shopping in Panjim",
                                    "description": "Enjoy a relaxed morning in Panjim. You can do some last-minute souvenir shopping in local shops or simply relax at a cafe by the Mandovi river.",
                                    "category": "Leisure, Shopping",
                                    "type": "Free Time",
                                    "location": {
                                        "name": "Panjim City",
                                        "address": "Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Look for Feni, cashew nuts, and traditional Goan handicrafts as souvenirs."
                                    ],
                                    "opening_hours": "Varies by shop",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day4-event6-meal",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "end_time": "13:30",
                                "meal": {
                                    "id": "meal-D4-02",
                                    "type": "lunch",
                                    "restaurant_name": "Local Goan Restaurant (Panjim)",
                                    "description": "Enjoy your final Goan meal, perhaps a last taste of seafood or a comforting curry, before heading home.",
                                    "cuisine": "Goan, Indian",
                                    "location": {
                                        "name": "Local Goan Restaurant",
                                        "address": "Near Panjim KTC Bus Stand, Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.496,
                                        "longitude": 73.8295
                                    },
                                    "reservation_time": "12:30",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "day4-event7-activity",
                                "event_type": "activity",
                                "start_time": "13:30",
                                "end_time": "19:30",
                                "activity": {
                                    "id": "act-D4-04",
                                    "name": "Free Time / Head to Bus Stand",
                                    "description": "Spend the afternoon at leisure in Panjim, perhaps visiting a cafe or finding a quiet spot to relax. Head to Panjim KTC Bus Stand well in advance of your bus departure.",
                                    "category": "Leisure",
                                    "type": "Free Time",
                                    "location": {
                                        "name": "Panjim City",
                                        "address": "Panaji, Goa",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.4989,
                                        "longitude": 73.8278
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "6h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Ensure you have all your belongings and arrive at the bus stand at least 30 minutes before departure."
                                    ],
                                    "opening_hours": "Always Open",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "day4-event8-transport",
                                "event_type": "transport",
                                "start_time": "20:00",
                                "end_time": "08:00",
                                "transport": {
                                    "id": "trans-D4-02",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Panjim KTC Bus Stand",
                                        "address": "KTC Bus Stand, 18th June Rd, Panaji, Goa 403001",
                                        "city": "Goa",
                                        "state": "Goa",
                                        "country": "India",
                                        "latitude": 15.495,
                                        "longitude": 73.8291
                                    },
                                    "to_location": {
                                        "name": "Chikkamagaluru KSRTC Bus Stand",
                                        "address": "KSRTC Bus Stand, Basavanahalli Main Rd, Chikkamagaluru, Karnataka 577101",
                                        "city": "Chikkamagaluru",
                                        "state": "Karnataka",
                                        "country": "India",
                                        "latitude": 13.3245,
                                        "longitude": 75.7725
                                    },
                                    "departure_time": "20:00",
                                    "arrival_time": "08:00",
                                    "duration": "12h 0m",
                                    "cost": 1700,
                                    "cost_per_person": 1700,
                                    "description": "Board your overnight AC Sleeper bus from Panjim KTC Bus Stand back to Chikkamagaluru. This concludes your heritage trip to Goa.",
                                    "booking_url": "https://www.easemytrip.com/bus",
                                    "carrier": "Sea Bird Tourist",
                                    "service_class": "AC Sleeper",
                                    "vehicle_number": "CMG-GOA-ACSLP",
                                    "route_type": "Direct Overnight"
                                }
                            }
                        ],
                        "daily_cost": 2525
                    }
                ],
                "accommodations": [
                    {
                        "id": "cozy-woods-hill-resort-north-goa",
                        "name": "Cozy Woods Hill Resort North Goa",
                        "type": "resort",
                        "description": "Cozy Woods Hill Resort, nestled in the tranquil surroundings of Karmali, provides a serene and strategically positioned base for a solo traveler keen on exploring Goa's rich heritage. Its close proximity to Old Goa (Velha Goa) and the vibrant Fontainhas in Panjim makes it an excellent choice for cultural immersion. The resort offers comfortable, mid-range accommodation, ensuring a restful stay after days of historical exploration. With 24-hour operational hours, wheelchair accessible parking, and essential amenities, it balances value with convenience, perfectly aligning with a heritage-focused, mid-range travel style while staying within the overall budget.",
                        "location": {
                            "name": "Karmali, North Goa",
                            "address": "Jose Valadares, 5th Lane Behind St John the Baptist Church, Karmali",
                            "city": "Goa",
                            "state": "Goa",
                            "country": "India",
                            "latitude": 15.477744,
                            "longitude": 73.921972
                        },
                        "check_in_date": "2025-11-04",
                        "check_out_date": "2025-11-07",
                        "nights": 3,
                        "room_type": "Standard Double Room",
                        "guests": 1,
                        "cost_per_night": 1300,
                        "total_cost": 3900,
                        "rating": 4.2,
                        "review_count": 680,
                        "amenities": [
                            "Air Conditioning",
                            "Free Wi-Fi",
                            "Restaurant",
                            "Parking",
                            "24-hour front desk",
                            "Wheelchair accessible parking"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "http://www.cozywoods.in/",
                        "cancellation_info": "Standard flexible cancellation policies apply. Please check the booking platform or resort website for specific terms at the time of reservation."
                    }
                ],
                "generated_at": "2025-11-02T12:56:27.160291Z",
                "ai_model": "gemini-2.5-flash",
                "language": "",
                "highlight_activities": [
                    "Explore Old Goa (Velha Goa), a UNESCO World Heritage site, including the Basilica of Bom Jesus and Se Cathedral.",
                    "Wander through Fontainhas, Panjim's vibrant Latin Quarter, known for its colorful Portuguese-era houses and art galleries.",
                    "Visit Ancestral Goa (Big Foot Museum) to experience a cultural village showcasing traditional Goan life, art, and history.",
                    "Discover the architectural beauty of Shri Mangeshi Temple, one of Goa's largest and most famous Hindu temples.",
                    "Embark on a Spice Plantation Tour to learn about Goa's agricultural heritage and traditional spice cultivation.",
                    "Stroll through Panjim's bustling markets to immerse yourself in local life and find traditional Goan crafts and produce."
                ],
                "local_insights": [
                    "Embrace 'Susegad', the laid-back, relaxed pace of Goan life. Rushing is uncommon, so enjoy the tranquility.",
                    "Observe the unique religious syncretism, where Hindu and Christian traditions harmoniously blend, evident in festivals and architecture.",
                    "Indulge in Goan cuisine, a delicious fusion of Portuguese and Indian flavors. Must-tries include seafood curries, Xacuti, and the dessert Bebinca.",
                    "When hiring local taxis or auto-rickshaws, always agree on the fare beforehand, as meters are rarely used. Bargaining is common in markets.",
                    "Dress modestly (shoulders and knees covered) when visiting religious sites like churches and temples as a sign of respect.",
                    "Be aware of the 'Siesta Culture'; many smaller shops and establishments, especially outside of main tourist hubs, might close during the afternoon for a few hours."
                ],
                "weather_info": {
                    "season": "Post-Monsoon / Early Winter",
                    "description": "November in Goa marks the beginning of the tourist season, characterized by pleasant, sunny days with significantly reduced humidity. The weather is ideal for sightseeing and outdoor activities, with comfortable evenings.",
                    "avg_min_temp": 22,
                    "avg_max_temp": 33,
                    "recommendation": "Pack light, breathable cotton clothing, comfortable walking shoes, a wide-brimmed hat, sunglasses, and high-SPF sunscreen. A light shawl or jacket might be useful for cooler evenings or air-conditioned indoor spaces."
                }
            },
            {
                "id": "72305d7a-62b6-4dbd-a998-0f9a1e5af6ff",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "source": "Chikkamagaluru",
                "destination": "Myson Ave, Pontefract WF8 2ND, UK",
                "start_date": "2025-11-03",
                "end_date": "2025-11-05",
                "duration_days": 3,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 6000,
                "saved": 0,
                "total_cost": 78870,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 6000,
                    "transport": 62500,
                    "activities": 1800,
                    "meals": 1400,
                    "miscellaneous": 7170
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-03",
                        "title": "Arrival in Pontefract & Essential Errands",
                        "description": "Upon arrival after a long international journey, the focus for Day 1 is to settle into the accommodation, manage initial budget-friendly meal preparations, and enjoy a relaxed, local pub dinner. This day is designed to be light to account for travel fatigue.",
                        "events": [
                            {
                                "id": "transport-arrival-day1",
                                "event_type": "transport",
                                "start_time": "2025-11-02 16:00",
                                "end_time": "2025-11-03 17:30",
                                "transport": {
                                    "id": "chikkamagaluru-pontefract-20251103",
                                    "mode": "multi-modal",
                                    "from_location": {
                                        "name": "Chikkamagaluru City Center",
                                        "address": "Starting from Chikkamagaluru, Karnataka, India",
                                        "city": "Chikkamagaluru",
                                        "state": "Karnataka",
                                        "country": "India",
                                        "latitude": 13.316886,
                                        "longitude": 75.770068
                                    },
                                    "to_location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "duration": "1d 1h 30m",
                                    "cost": 60700,
                                    "cost_per_person": 60700,
                                    "description": "Comprehensive multi-modal journey from Chikkamagaluru, India to Premier Inn Pontefract North hotel, involving a taxi to Bengaluru Airport, an international flight to Manchester (MAN), a multi-leg train to Pontefract, and a final short taxi to the hotel. This ensures arrival on the check-in date."
                                }
                            },
                            {
                                "id": "activity-checkin-day1",
                                "event_type": "activity",
                                "start_time": "17:30",
                                "end_time": "18:30",
                                "activity": {
                                    "id": "activity-checkin-day1-activity",
                                    "name": "Hotel Check-in & Freshen Up",
                                    "description": "Check into the Premier Inn Pontefract North hotel, settle into your room, and take some time to relax and freshen up after the long journey. Premier Inn offers comfortable rooms and essential amenities for a mid-range stay.",
                                    "category": "Accommodation",
                                    "type": "Leisure",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "17:30",
                                    "end_time": "18:30",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.2,
                                    "review_count": 939,
                                    "tips": [
                                        "Standard check-in is usually from 14:00. Inform the hotel if you expect a very late arrival.",
                                        "Utilize the hotel's amenities for a comfortable rest."
                                    ],
                                    "opening_hours": "Open 24 hours",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-supermarket-day1",
                                "event_type": "transport",
                                "start_time": "19:00",
                                "end_time": "19:15",
                                "transport": {
                                    "id": "transport-supermarket-day1-transport",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Bus Stop near Premier Inn Pontefract North",
                                        "address": "Knottingley Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "to_location": {
                                        "name": "Pontefract Bus Station / Morrisons Supermarket",
                                        "address": "Kirkgate, Pontefract, WF8 1BA",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.6946,
                                        "longitude": -1.3125
                                    },
                                    "duration": "15m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Take a local bus service from near the hotel towards Pontefract town centre to reach a supermarket for self-catering supplies. This also serves as an initial experience with local public transport."
                                }
                            },
                            {
                                "id": "activity-supermarket-day1",
                                "event_type": "activity",
                                "start_time": "19:15",
                                "end_time": "20:00",
                                "activity": {
                                    "id": "activity-supermarket-day1-activity",
                                    "name": "Budget-Friendly Supermarket Visit",
                                    "description": "Visit a local supermarket, such as Morrisons, in Pontefract town centre to purchase ingredients for extremely budget-friendly self-catering meal preparation for the next two days (breakfasts and lunches). This is a key step in managing trip costs.",
                                    "category": "Shopping",
                                    "type": "Errand",
                                    "location": {
                                        "name": "Morrisons Pontefract",
                                        "address": "Kirkgate, Pontefract, WF8 1BA",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.6946,
                                        "longitude": -1.3125
                                    },
                                    "start_time": "19:15",
                                    "end_time": "20:00",
                                    "duration": "45m",
                                    "cost": 1800,
                                    "cost_per_person": 1800,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Look for 'meal deals' or store brand items for best value.",
                                        "Consider buying items like bread, cheese, fruit, and instant coffee/tea for easy self-catering."
                                    ],
                                    "opening_hours": "Typically open until 22:00",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-dinner-day1",
                                "event_type": "transport",
                                "start_time": "20:00",
                                "end_time": "20:15",
                                "transport": {
                                    "id": "transport-dinner-day1-transport",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Morrisons Pontefract",
                                        "address": "Kirkgate, Pontefract, WF8 1BA",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.6946,
                                        "longitude": -1.3125
                                    },
                                    "to_location": {
                                        "name": "The Cobbler",
                                        "address": "2 Knottingley Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.69921,
                                        "longitude": -1.292968
                                    },
                                    "duration": "15m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Take a local bus from the supermarket towards The Cobbler pub for a relaxing dinner, minimizing walking with groceries."
                                }
                            },
                            {
                                "id": "meal-dinner-day1",
                                "event_type": "meal",
                                "start_time": "20:15",
                                "meal": {
                                    "id": "meal-dinner-day1-meal",
                                    "type": "dinner",
                                    "restaurant_name": "The Cobbler",
                                    "description": "Enjoy a budget-friendly pub dinner at The Cobbler. This pub is known for its good value pub grub and relaxed atmosphere, perfect for a casual meal after a long journey. It's a local favorite, offering a taste of British pub culture.",
                                    "cuisine": "Pub Food",
                                    "location": {
                                        "name": "The Cobbler",
                                        "address": "2 Knottingley Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.69921,
                                        "longitude": -1.292968
                                    },
                                    "start_time": "20:15",
                                    "reservation_time": "N/A",
                                    "end_time": "21:15",
                                    "cost": 1400,
                                    "cost_per_person": 1400,
                                    "rating": 4.5,
                                    "review_count": 1995,
                                    "specialties": [
                                        "Classic Pub Grub",
                                        "Daily Specials"
                                    ],
                                    "dietary_info": [
                                        "Vegetarian options available"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-hotel-day1",
                                "event_type": "transport",
                                "start_time": "21:15",
                                "end_time": "21:30",
                                "transport": {
                                    "id": "transport-hotel-day1-transport",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "The Cobbler",
                                        "address": "2 Knottingley Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.69921,
                                        "longitude": -1.292968
                                    },
                                    "to_location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "duration": "15m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "A short bus ride back to the hotel after dinner for comfort and efficiency."
                                }
                            }
                        ],
                        "daily_cost": 4100
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-04",
                        "title": "Myson Ave Exploration & Pontefract Heritage",
                        "description": "Today focuses on observing local residential life around Myson Ave, experiencing local public transport, and exploring Pontefract's rich history through its free attractions like the Castle grounds and Museum.",
                        "events": [
                            {
                                "id": "meal-breakfast-day2",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "meal-breakfast-day2-meal",
                                    "type": "breakfast",
                                    "restaurant_name": "Hotel Room (Self-catering)",
                                    "description": "Enjoy a self-catered breakfast in your hotel room using supplies purchased from the supermarket yesterday. This is a cost-effective way to start your day.",
                                    "cuisine": "Continental (self-prepared)",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "08:00",
                                    "reservation_time": "N/A",
                                    "end_time": "08:45",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-mysonave-day2",
                                "event_type": "transport",
                                "start_time": "08:45",
                                "end_time": "09:00",
                                "transport": {
                                    "id": "transport-mysonave-day2-transport",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Bus Stop near Premier Inn Pontefract North",
                                        "address": "Knottingley Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "to_location": {
                                        "name": "Myson Ave Area (WF8 2ND)",
                                        "address": "Myson Ave, Pontefract, WF8 2ND",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.7001,
                                        "longitude": -1.3039
                                    },
                                    "duration": "15m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Take a local bus to the Myson Avenue area to begin exploring the residential surroundings, fulfilling the highlight activity of experiencing local public transport."
                                }
                            },
                            {
                                "id": "activity-mysonave-day2",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "11:00",
                                "activity": {
                                    "id": "activity-mysonave-day2-activity",
                                    "name": "Observe Local Residential Architecture & Life on Myson Ave",
                                    "description": "Walk through Myson Avenue and its immediate surroundings to observe local residential architecture and understand daily life and community dynamics. This provides an authentic glimpse into a typical British suburban neighborhood. Myson Avenue is characterized by semi-detached, single-family homes.",
                                    "category": "Cultural Immersion",
                                    "type": "Walking Tour",
                                    "location": {
                                        "name": "Myson Ave, Pontefract WF8 2ND",
                                        "address": "Myson Ave, Pontefract, WF8 2ND",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.7001,
                                        "longitude": -1.3039
                                    },
                                    "start_time": "09:00",
                                    "end_time": "11:00",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Be respectful of residents' privacy.",
                                        "Look for small details that reflect local culture."
                                    ],
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-walk-museum-day2",
                                "event_type": "transport",
                                "start_time": "11:00",
                                "end_time": "11:30",
                                "transport": {
                                    "id": "transport-walk-museum-day2-transport",
                                    "mode": "walk",
                                    "from_location": {
                                        "name": "Myson Ave Area (WF8 2ND)",
                                        "address": "Myson Ave, Pontefract, WF8 2ND",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.7001,
                                        "longitude": -1.3039
                                    },
                                    "to_location": {
                                        "name": "Pontefract Museum",
                                        "address": "5 Salter Row, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.692021,
                                        "longitude": -1.312039
                                    },
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Enjoy a pleasant walk from the Myson Ave area towards Pontefract town centre, heading towards the museum."
                                }
                            },
                            {
                                "id": "activity-museum-day2",
                                "event_type": "activity",
                                "start_time": "11:30",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "activity-museum-day2-activity",
                                    "name": "Pontefract Museum Visit",
                                    "description": "Delve into the rich history of Pontefract at its local museum. It's a fantastic free resource to learn about the town's past, including its famous liquorice industry and role in historical events. The museum is operational and offers insights into the town's heritage.",
                                    "category": "Culture",
                                    "type": "Museum",
                                    "location": {
                                        "name": "Pontefract Museum",
                                        "address": "5 Salter Row, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.692021,
                                        "longitude": -1.312039
                                    },
                                    "start_time": "11:30",
                                    "end_time": "12:30",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.4,
                                    "review_count": 153,
                                    "tips": [
                                        "Check for any temporary exhibitions or special events upon arrival."
                                    ],
                                    "opening_hours": "10:00 - 16:30 (Monday-Friday), 10:30 - 16:30 (Saturday), Closed Sunday",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "meal-lunch-day2",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "meal": {
                                    "id": "meal-lunch-day2-meal",
                                    "type": "lunch",
                                    "restaurant_name": "Packed Lunch (Self-catering)",
                                    "description": "Enjoy a self-catered packed lunch (e.g., sandwiches, fruit) in a nearby park or quiet public space. This keeps costs down and allows flexibility to continue exploring.",
                                    "cuisine": "Packed Meal",
                                    "location": {
                                        "name": "Pontefract Town Centre Park/Bench",
                                        "address": "Various spots around Pontefract town centre",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.692,
                                        "longitude": -1.312
                                    },
                                    "start_time": "12:30",
                                    "reservation_time": "N/A",
                                    "end_time": "13:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "activity-castle-day2",
                                "event_type": "activity",
                                "start_time": "13:00",
                                "end_time": "15:00",
                                "activity": {
                                    "id": "activity-castle-day2-activity",
                                    "name": "Explore Pontefract Castle Grounds",
                                    "description": "Visit the historic Pontefract Castle, a free-to-visit site with extensive grounds, a visitor centre, and insights into its past as a key English Civil War location. Enjoy a walk around the ruins and imagine its former grandeur. The castle offers picnic spaces and kids' activity sheets (though for a solo traveler, the historical aspect is key).",
                                    "category": "Historical Site",
                                    "type": "Exploration",
                                    "location": {
                                        "name": "Pontefract Castle",
                                        "address": "The Lodge Castle Chain, Castle Garth, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.695084,
                                        "longitude": -1.304244
                                    },
                                    "start_time": "13:00",
                                    "end_time": "15:00",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 1896,
                                    "tips": [
                                        "Wear comfortable shoes as there is a fair amount of walking.",
                                        "Read the information boards to understand the castle's significance."
                                    ],
                                    "opening_hours": "08:30 - 16:30 (Monday-Friday), 09:30 - 16:30 (Saturday-Sunday)",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "activity-gardens-day2",
                                "event_type": "activity",
                                "start_time": "15:00",
                                "end_time": "16:30",
                                "activity": {
                                    "id": "activity-gardens-day2-activity",
                                    "name": "Relax at Friarwood Valley Gardens",
                                    "description": "Enjoy a peaceful stroll and relaxation time at Friarwood Valley Gardens, a tranquil public green space in Pontefract. It's a beautiful spot to unwind and appreciate nature, offering a contrast to the historical exploration.",
                                    "category": "Nature",
                                    "type": "Park/Garden",
                                    "location": {
                                        "name": "Friarwood Valley Gardens",
                                        "address": "Mayor's Walk, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.68919,
                                        "longitude": -1.311704
                                    },
                                    "start_time": "15:00",
                                    "end_time": "16:30",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 460,
                                    "tips": [
                                        "Find a quiet bench to sit and observe the local flora.",
                                        "It's a great spot for photography."
                                    ],
                                    "opening_hours": "Open 24 hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "transport-hotel-day2",
                                "event_type": "transport",
                                "start_time": "16:30",
                                "end_time": "17:00",
                                "transport": {
                                    "id": "transport-hotel-day2-transport",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Pontefract Bus Station (near Gardens)",
                                        "address": "Various stops near town centre",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.692,
                                        "longitude": -1.312
                                    },
                                    "to_location": {
                                        "name": "Bus Stop near Premier Inn Pontefract North",
                                        "address": "Knottingley Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "duration": "30m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Take a local bus from Pontefract town centre back towards the Premier Inn Pontefract North hotel, further utilizing public transport."
                                }
                            },
                            {
                                "id": "meal-dinner-day2",
                                "event_type": "meal",
                                "start_time": "19:00",
                                "meal": {
                                    "id": "meal-dinner-day2-meal",
                                    "type": "dinner",
                                    "restaurant_name": "Hotel Room (Self-catering)",
                                    "description": "Prepare and enjoy a self-catered dinner in your hotel room using the groceries purchased yesterday. This adheres strictly to the budget-friendly travel style.",
                                    "cuisine": "Home-style (self-prepared)",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "19:00",
                                    "reservation_time": "N/A",
                                    "end_time": "20:00",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 600
                    },
                    {
                        "day_number": 3,
                        "date": "2025-11-05",
                        "title": "Pontefract Park & Departure",
                        "description": "The final morning is dedicated to exploring Pontefract Park, a large free public space, before checking out from the hotel and preparing for the onward journey.",
                        "events": [
                            {
                                "id": "meal-breakfast-day3",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "meal-breakfast-day3-meal",
                                    "type": "breakfast",
                                    "restaurant_name": "Hotel Room (Self-catering)",
                                    "description": "Enjoy your final self-catered breakfast in the hotel room using the remaining supplies.",
                                    "cuisine": "Continental (self-prepared)",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "08:00",
                                    "reservation_time": "N/A",
                                    "end_time": "08:45",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "activity-pack-day3",
                                "event_type": "activity",
                                "start_time": "08:45",
                                "end_time": "09:00",
                                "activity": {
                                    "id": "activity-pack-day3-activity",
                                    "name": "Prepare for Check-out",
                                    "description": "Organize your belongings and ensure everything is packed and ready for check-out later in the morning.",
                                    "category": "Preparation",
                                    "type": "Logistics",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "08:45",
                                    "end_time": "09:00",
                                    "duration": "15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-pontefractpark-day3",
                                "event_type": "transport",
                                "start_time": "09:00",
                                "end_time": "09:45",
                                "transport": {
                                    "id": "transport-pontefractpark-day3-transport",
                                    "mode": "walk",
                                    "from_location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "to_location": {
                                        "name": "Pontefract Park",
                                        "address": "Pontefract Park, Park Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.696947,
                                        "longitude": -1.326455
                                    },
                                    "duration": "45m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Enjoy a leisurely walk to Pontefract Park, a large free public space, fulfilling one of the highlight activities. The walk itself offers a chance to see more of the local area."
                                }
                            },
                            {
                                "id": "activity-pontefractpark-day3",
                                "event_type": "activity",
                                "start_time": "09:45",
                                "end_time": "10:45",
                                "activity": {
                                    "id": "activity-pontefractpark-day3-activity",
                                    "name": "Explore Pontefract Park",
                                    "description": "Spend an hour exploring Pontefract Park, a significant free public space. It's a great place for a walk, enjoying the fresh air, and observing local recreational activities. The park is well-maintained and offers a pleasant environment.",
                                    "category": "Nature",
                                    "type": "Park",
                                    "location": {
                                        "name": "Pontefract Park",
                                        "address": "Pontefract Park, Park Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.696947,
                                        "longitude": -1.326455
                                    },
                                    "start_time": "09:45",
                                    "end_time": "10:45",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.4,
                                    "review_count": 1059,
                                    "tips": [
                                        "Look for walking trails and enjoy the open green spaces.",
                                        "It's a good spot for people-watching and observing local life."
                                    ],
                                    "opening_hours": "09:00 - 03:00 (Monday-Friday), 08:30 - 03:30 (Saturday), 10:00 - 02:00 (Sunday)",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-hotelreturn-day3",
                                "event_type": "transport",
                                "start_time": "10:45",
                                "end_time": "11:00",
                                "transport": {
                                    "id": "transport-hotelreturn-day3-transport",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Pontefract Park",
                                        "address": "Pontefract Park, Park Rd, Pontefract",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.696947,
                                        "longitude": -1.326455
                                    },
                                    "to_location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "duration": "15m",
                                    "cost": 300,
                                    "cost_per_person": 300,
                                    "description": "Take a local bus back to the hotel to complete the check-out process, ensuring timely arrival."
                                }
                            },
                            {
                                "id": "activity-checkout-day3",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "11:30",
                                "activity": {
                                    "id": "activity-checkout-day3-activity",
                                    "name": "Hotel Check-out",
                                    "description": "Complete the check-out formalities at Premier Inn Pontefract North. Ensure all belongings are collected by the 11:00 AM check-out time.",
                                    "category": "Accommodation",
                                    "type": "Logistics",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "11:00",
                                    "end_time": "11:30",
                                    "duration": "30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "priority": 1
                                }
                            },
                            {
                                "id": "meal-lunch-day3",
                                "event_type": "meal",
                                "start_time": "11:30",
                                "meal": {
                                    "id": "meal-lunch-day3-meal",
                                    "type": "lunch",
                                    "restaurant_name": "Quick Lunch (Self-catering)",
                                    "description": "Have a quick, self-catered lunch using any remaining supplies before heading out for departure. This can be a simple sandwich or snack, maintaining the budget-friendly approach.",
                                    "cuisine": "Light Meal",
                                    "location": {
                                        "name": "Hotel Lobby / Nearby Public Space",
                                        "address": "Premier Inn Pontefract North hotel or adjacent area",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "11:30",
                                    "reservation_time": "N/A",
                                    "end_time": "12:30",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "activity-departure-day3",
                                "event_type": "activity",
                                "start_time": "12:30",
                                "end_time": "14:00",
                                "activity": {
                                    "id": "activity-departure-day3-activity",
                                    "name": "Departure Preparations",
                                    "description": "Begin preparations for your departure from Pontefract, heading towards Manchester Airport for your return journey to India. This includes confirming transport, final checks, and making your way to the first leg of your return.",
                                    "category": "Departure",
                                    "type": "Logistics",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract, West Yorkshire, United Kingdom",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "United Kingdom",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "12:30",
                                    "end_time": "14:00",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "priority": 1
                                }
                            }
                        ],
                        "daily_cost": 300
                    }
                ],
                "accommodations": [
                    {
                        "id": "premier_inn_pontefract_north",
                        "name": "Premier Inn Pontefract North hotel",
                        "type": "hotel",
                        "description": "A comfortable and reliable choice for a mid-range stay, Premier Inn Pontefract North offers fresh rooms with comfy beds and an on-site restaurant serving pub grub. It's a budget-friendly option known for its consistent quality and family-friendly atmosphere, making it suitable for a solo traveler seeking good value. The hotel provides essential amenities for a pleasant stay, aligning perfectly with the mid-range travel style and budget.",
                        "location": {
                            "name": "Pontefract North",
                            "address": "Ai Business Park, 84 Knottingley Rd, Pontefract",
                            "city": "Pontefract",
                            "state": "West Yorkshire",
                            "country": "United Kingdom",
                            "latitude": 53.702866,
                            "longitude": -1.273027
                        },
                        "check_in_date": "2025-11-03",
                        "check_out_date": "2025-11-05",
                        "nights": 2,
                        "room_type": "Standard Double Room",
                        "guests": 1,
                        "cost_per_night": 3000,
                        "total_cost": 6000,
                        "rating": 4.2,
                        "review_count": 939,
                        "amenities": [
                            "On-site restaurant",
                            "Pub grub",
                            "Good for children (atmosphere)",
                            "Wheelchair accessible entrance",
                            "Wheelchair accessible parking",
                            "Accepts debit cards",
                            "Accepts credit cards"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "https://www.premierinn.com/gb/en/hotels/england/west-yorkshire/pontefract/pontefract-north.html?cid=GLBC_PONTUR",
                        "cancellation_info": "Standard hotel cancellation policy applies; please check specific terms at the time of booking."
                    }
                ],
                "generated_at": "2025-11-02T12:45:50.881745Z",
                "ai_model": "gemini-2.5-flash",
                "language": "",
                "highlight_activities": [
                    "Observe local residential architecture on Myson Ave and its immediate surroundings.",
                    "Explore nearby free public spaces, such as Pontefract Park, if accessible by foot or minimal bus fare.",
                    "Visit a local supermarket in Pontefract for extremely budget-friendly self-catering meal preparation.",
                    "Experience local public transport (bus) for short, essential journeys within Pontefract, strictly managing costs.",
                    "Walk through the immediate neighbourhood to understand local daily life and community dynamics.",
                    "Research any free local community events or markets in Pontefract that might align with cultural interests, though unlikely for heritage/festivals within budget."
                ],
                "local_insights": [
                    "**CRITICAL BUDGET NOTE:** The stated overall trip budget of ₹6000.00 is *severely insufficient* for international travel from India to the UK, including flights and accommodation. This itinerary reflects a realistic mid-range cost for the journey, which is approximately ₹71,700.00. The ₹6000.00 budget will only cover a small fraction of the local expenses within Pontefract (e.g., some meals, local transport). Please adjust your budget expectations accordingly.",
                    "Myson Ave is a residential street; respect residents' privacy and maintain quiet, especially during early mornings and evenings.",
                    "Public transport (buses) is available in Pontefract, and this itinerary prioritizes its use to manage costs. However, be prepared for walking between stops and destinations, especially in colder weather.",
                    "The local currency is Great British Pounds (£); be aware of exchange rates and potential transaction fees. Current exchange rate (approx. Nov 2025) is around ₹100 per £1.",
                    "Pontefract is a historic market town, but exploring its heritage sites or attending festivals will likely incur costs beyond the initial ₹6000 budget if not explicitly planned and budgeted for.",
                    "November weather is typically cold, damp, and has short daylight hours; prepare for this. Layered clothing and waterproof outerwear are essential.",
                    "English is the primary language spoken, and a basic understanding will be helpful for local interactions."
                ],
                "weather_info": {
                    "season": "Autumn/Early Winter",
                    "description": "November in Pontefract is typically cold, damp, and often cloudy. Expect short daylight hours with possibilities of rain, drizzle, and occasional frost. Wind can make it feel colder.",
                    "avg_min_temp": 3,
                    "avg_max_temp": 9,
                    "recommendation": "Pack warm, waterproof layers including a heavy coat, waterproof trousers/jacket, hat, gloves, and a scarf. Sturdy, waterproof walking shoes are essential. An umbrella is highly recommended."
                }
            },
            {
                "id": "13818933-07b4-452a-be1c-9cede6e47308",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "source": "Chikkamagaluru",
                "destination": "Myson Ave, Pontefract WF8 2ND, UK",
                "start_date": "2025-11-03",
                "end_date": "2025-11-05",
                "duration_days": 3,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 6000,
                "saved": 0,
                "total_cost": 71280,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 12600,
                    "transport": 46700,
                    "activities": 0,
                    "meals": 5500,
                    "miscellaneous": 6480
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-03",
                        "title": "Arrival in Pontefract & Settling In",
                        "description": "Your journey from Chikkamagaluru concludes with a late evening arrival in Pontefract. This day is dedicated to travel, reaching your accommodation, checking in, and getting some rest after a long international trip.",
                        "events": [
                            {
                                "id": "transport-chikkamagaluru-pontefract",
                                "event_type": "transport",
                                "start_time": "22:00",
                                "end_time": "23:00",
                                "transport": {
                                    "id": "",
                                    "mode": "Mixed (Car, Flight, Bus, Taxi)",
                                    "from_location": {
                                        "name": "Chikkamagaluru City Center",
                                        "address": "Chikkamagaluru, Karnataka, India",
                                        "city": "Chikkamagaluru",
                                        "state": "",
                                        "country": "",
                                        "latitude": 13.316886,
                                        "longitude": 75.772097
                                    },
                                    "to_location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract WF8 2ND, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "duration": "25h 00m",
                                    "cost": 45950,
                                    "cost_per_person": 45950,
                                    "description": "This comprehensive travel plan covers your journey from Chikkamagaluru, India, to Pontefract, UK, combining a taxi ride to Bengaluru airport, an international flight with one stop, a bus transfer to Pontefract, and a final local taxi to your accommodation. You will depart Chikkamagaluru on the evening of November 2nd, arriving in Pontefract late on November 3rd. Please note the significant budget discrepancy: the cost for this travel alone far exceeds your total trip budget.",
                                    "notes": [
                                        "Depart Chikkamagaluru by taxi (approx. ₹4000) to Bengaluru Airport (BLR) on 2025-11-02 at 22:00, arriving BLR by 02:30 on 2025-11-03.",
                                        "Flight from Bengaluru (BLR) to Manchester (MAN) via Dubai (DXB) (approx. ₹40000). Flight departs BLR around 05:00, arriving MAN around 18:00 (UK time).",
                                        "Bus from Manchester Airport (MAN) to Pontefract Bus Station (approx. ₹1200 / £12). Departs MAN around 19:30, arriving Pontefract around 22:30.",
                                        "Local taxi from Pontefract Bus Station to Premier Inn Pontefract North hotel (approx. ₹750 / £7.50). Arriving at the hotel around 23:00.",
                                        "Remember to account for immigration and baggage claim time at Manchester Airport."
                                    ],
                                    "carrier": "Multiple (Local Cab, Emirates Airlines, National Express, Local UK Taxi)",
                                    "service_class": "Economy (Flight), Standard (Land Transport)",
                                    "vehicle_number": "EK567 (BLR-DXB) / EK017 (DXB-MAN)",
                                    "route_type": "Multi-leg journey with 1 stop for flight"
                                }
                            },
                            {
                                "id": "hotel-checkin-day1",
                                "event_type": "activity",
                                "start_time": "23:00",
                                "end_time": "23:30",
                                "activity": {
                                    "id": "",
                                    "name": "Hotel Check-in",
                                    "description": "Check into your comfortable room at the Premier Inn Pontefract North hotel. After a long journey, prioritize rest and prepare for exploring Pontefract tomorrow.",
                                    "category": "Accommodation",
                                    "type": "Check-in",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract WF8 2ND, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": true,
                                    "rating": 4.2,
                                    "review_count": 939,
                                    "tips": [
                                        "Have your booking confirmation ready for a smooth check-in.",
                                        "Premier Inn rooms are known for their comfy beds, perfect for recovering from your flight."
                                    ],
                                    "opening_hours": "Open 24 hours for check-in",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "dinner-day1",
                                "event_type": "meal",
                                "start_time": "23:30",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "Hotel/Convenience Store Snack",
                                    "description": "Given the late arrival, a light snack or meal from the hotel's on-site restaurant (if still serving) or a nearby convenience store will be the most practical option. The Premier Inn has an on-site restaurant serving pub grub.",
                                    "cuisine": "Various",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract WF8 2ND, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "23:30",
                                    "end_time": "00:30",
                                    "cost": 1000,
                                    "cost_per_person": 1000,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 46950
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-04",
                        "title": "Pontefract's Heritage & Liquorice History",
                        "description": "Immerse yourself in Pontefract's rich history, from its formidable castle ruins to its unique liquorice heritage, exploring key attractions within the town centre.",
                        "events": [
                            {
                                "id": "breakfast-day2",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Premier Inn On-site Restaurant (or self-catered)",
                                    "description": "Enjoy breakfast at the hotel's on-site restaurant, which typically offers a full English breakfast buffet. Alternatively, to save costs, purchase items from a local supermarket the previous evening for a self-catered breakfast in your room.",
                                    "cuisine": "British",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract WF8 2ND, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 1000,
                                    "cost_per_person": 1000,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-hotel-towncentre-day2",
                                "event_type": "transport",
                                "start_time": "09:15",
                                "end_time": "09:35",
                                "transport": {
                                    "id": "",
                                    "mode": "Bus",
                                    "from_location": {
                                        "name": "Knottingley Road Bus Stop (near Premier Inn)",
                                        "address": "Knottingley Rd, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "to_location": {
                                        "name": "Pontefract Bus Station",
                                        "address": "Horsefair, Pontefract WF8 1BA, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.6917,
                                        "longitude": -1.3115
                                    },
                                    "duration": "0h 20m",
                                    "cost": 250,
                                    "cost_per_person": 250,
                                    "description": "Take a local bus from near your hotel into Pontefract town centre. This is the most cost-effective way to reach the main attractions.",
                                    "notes": [
                                        "Check local bus schedules in advance. Expect a fare of around £2.50-£3.00."
                                    ],
                                    "carrier": "Local Bus Service",
                                    "vehicle_number": "Various"
                                }
                            },
                            {
                                "id": "activity-pontefract-castle",
                                "event_type": "activity",
                                "start_time": "09:45",
                                "end_time": "11:45",
                                "activity": {
                                    "id": "",
                                    "name": "Pontefract Castle",
                                    "description": "Explore the historic ruins of Pontefract Castle, a site of immense significance during the English Civil War. Wander through the grounds, discover the visitor centre, and imagine its past as a royal fortress. It's free to visit, offering picnic spaces and activity sheets.",
                                    "category": "Historical Place",
                                    "type": "Castle Ruins",
                                    "location": {
                                        "name": "Pontefract Castle",
                                        "address": "The Lodge Castle Chain, Castle Garth, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.695084,
                                        "longitude": -1.304244
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "2h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 1896,
                                    "tips": [
                                        "Wear comfortable walking shoes as you'll be exploring ruins and uneven ground.",
                                        "Check for any guided tours or special exhibitions on arrival.",
                                        "Even in November, it's an outdoor activity, so dress warmly and waterproof."
                                    ],
                                    "opening_hours": "08:30 - 16:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "activity-pontefract-museum",
                                "event_type": "activity",
                                "start_time": "12:00",
                                "end_time": "13:30",
                                "activity": {
                                    "id": "",
                                    "name": "Pontefract Museum",
                                    "description": "Delve into Pontefract's local history, including its unique connection to liquorice. The museum houses a fascinating collection of artefacts, telling the story of the town's past, from Roman times to its industrial heritage. It’s a great indoor activity, especially on a cold November day.",
                                    "category": "Museum",
                                    "type": "Local History Museum",
                                    "location": {
                                        "name": "Pontefract Museum",
                                        "address": "5 Salter Row, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.692021,
                                        "longitude": -1.312039
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.4,
                                    "review_count": 153,
                                    "tips": [
                                        "Look out for exhibits on 'Pontefract Cakes' and the liquorice industry.",
                                        "The museum is free to enter, making it an excellent budget-friendly option."
                                    ],
                                    "opening_hours": "10:00 - 16:30",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "lunch-day2",
                                "event_type": "meal",
                                "start_time": "13:30",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Baden’s Butties",
                                    "description": "Enjoy a very budget-friendly lunch at Baden’s Butties, a popular sandwich shop. Their offerings are perfect for a quick and affordable meal, aligning with your strict budget. It's located centrally, not far from the museum.",
                                    "cuisine": "Sandwiches, British",
                                    "location": {
                                        "name": "Baden’s Butties",
                                        "address": "Cooke Hall, Bondgate, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.699227,
                                        "longitude": -1.294558
                                    },
                                    "start_time": "13:30",
                                    "end_time": "14:15",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 4.7,
                                    "review_count": 123,
                                    "specialties": [
                                        "Freshly made sandwiches",
                                        "Hot and cold butties"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "activity-friarwood-gardens",
                                "event_type": "activity",
                                "start_time": "14:30",
                                "end_time": "15:30",
                                "activity": {
                                    "id": "",
                                    "name": "Friarwood Valley Gardens",
                                    "description": "Take a relaxing stroll through Friarwood Valley Gardens, a peaceful green space in the heart of Pontefract. It's a pleasant place for a gentle walk and to enjoy some fresh air, even in late autumn.",
                                    "category": "Garden",
                                    "type": "Public Park/Garden",
                                    "location": {
                                        "name": "Friarwood Valley Gardens",
                                        "address": "Mayor's Walk, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.68919,
                                        "longitude": -1.311704
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5,
                                    "review_count": 460,
                                    "tips": [
                                        "A good place for a quiet moment and to observe local life.",
                                        "Paths might be damp in November, so wear appropriate footwear."
                                    ],
                                    "opening_hours": "Open 24 hours",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "activity-town-centre-shops",
                                "event_type": "activity",
                                "start_time": "15:30",
                                "end_time": "17:00",
                                "activity": {
                                    "id": "",
                                    "name": "Discover Local Independent Shops & Cafes",
                                    "description": "Wander through Pontefract town centre, exploring the local independent shops and cafes. This is a great opportunity to find unique souvenirs, perhaps some 'Pontefract Cakes', and experience the local atmosphere.",
                                    "category": "Shopping/Local Experience",
                                    "type": "Retail/Leisure",
                                    "location": {
                                        "name": "Pontefract Town Centre",
                                        "address": "Various locations around Salter Row, Ropergate, and Corn Market, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.691,
                                        "longitude": -1.312
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Look for shops selling Pontefract Cakes – a local liquorice confectionery.",
                                        "Pop into a local cafe for a warm drink if you're feeling chilly."
                                    ],
                                    "opening_hours": "Typically 09:00 - 17:00",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "transport-towncentre-hotel-day2",
                                "event_type": "transport",
                                "start_time": "17:00",
                                "end_time": "17:20",
                                "transport": {
                                    "id": "",
                                    "mode": "Bus",
                                    "from_location": {
                                        "name": "Pontefract Bus Station",
                                        "address": "Horsefair, Pontefract WF8 1BA, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.6917,
                                        "longitude": -1.3115
                                    },
                                    "to_location": {
                                        "name": "Knottingley Road Bus Stop (near Premier Inn)",
                                        "address": "Knottingley Rd, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "duration": "0h 20m",
                                    "cost": 250,
                                    "cost_per_person": 250,
                                    "description": "Take a local bus back to the bus stop near your hotel.",
                                    "notes": [
                                        "Ensure you catch the correct bus route heading towards your accommodation."
                                    ],
                                    "carrier": "Local Bus Service",
                                    "vehicle_number": "Various"
                                }
                            },
                            {
                                "id": "dinner-day2",
                                "event_type": "meal",
                                "start_time": "19:00",
                                "meal": {
                                    "id": "",
                                    "type": "dinner",
                                    "restaurant_name": "The Cobbler",
                                    "description": "Enjoy a budget-friendly dinner at The Cobbler, a local pub known for its pub grub. It's a good option for a casual meal and a taste of local atmosphere without breaking the bank. It's also relatively close to your hotel.",
                                    "cuisine": "British, Pub Food",
                                    "location": {
                                        "name": "The Cobbler",
                                        "address": "2 Knottingley Rd, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.69921,
                                        "longitude": -1.292968
                                    },
                                    "start_time": "19:00",
                                    "end_time": "20:30",
                                    "cost": 1500,
                                    "cost_per_person": 1500,
                                    "rating": 4.5,
                                    "review_count": 1995,
                                    "specialties": [
                                        "Classic pub dishes",
                                        "Good value meals"
                                    ],
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 3000
                    },
                    {
                        "day_number": 3,
                        "date": "2025-11-05",
                        "title": "Market Day & Departure",
                        "description": "Experience the local market vibrancy on your last day before heading to Pontefract Park and preparing for your departure.",
                        "events": [
                            {
                                "id": "breakfast-day3",
                                "event_type": "meal",
                                "start_time": "08:00",
                                "meal": {
                                    "id": "",
                                    "type": "breakfast",
                                    "restaurant_name": "Premier Inn On-site Restaurant (or self-catered)",
                                    "description": "Start your day with breakfast at the hotel or a self-catered option to maintain your budget. This allows for an early start to make the most of your last morning.",
                                    "cuisine": "British",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract WF8 2ND, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "08:00",
                                    "end_time": "09:00",
                                    "cost": 1000,
                                    "cost_per_person": 1000,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "hotel-checkout-day3",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "09:30",
                                "activity": {
                                    "id": "",
                                    "name": "Hotel Check-out",
                                    "description": "Complete your check-out formalities at Premier Inn Pontefract North hotel. You can store your luggage at the hotel if needed while you enjoy your last few hours in Pontefract.",
                                    "category": "Accommodation",
                                    "type": "Check-out",
                                    "location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract WF8 2ND, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "0h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": true,
                                    "rating": 4.2,
                                    "review_count": 939,
                                    "tips": [
                                        "Confirm any luggage storage options if you plan to explore before leaving.",
                                        "Check for any outstanding charges before departure."
                                    ],
                                    "opening_hours": "00:00 - 12:00 (for check-out)",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "transport-hotel-pontefractpark-day3",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "09:40",
                                "transport": {
                                    "id": "",
                                    "mode": "Walk",
                                    "from_location": {
                                        "name": "Premier Inn Pontefract North hotel",
                                        "address": "Ai Business Park, 84 Knottingley Rd, Pontefract WF8 2ND, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.702866,
                                        "longitude": -1.273027
                                    },
                                    "to_location": {
                                        "name": "Pontefract Park",
                                        "address": "Pontefract Park, Park Rd, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.696947,
                                        "longitude": -1.326455
                                    },
                                    "duration": "0h 10m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "A short walk from the hotel to Pontefract Park, offering views of the castle in the distance.",
                                    "carrier": "Self",
                                    "vehicle_number": "N/A"
                                }
                            },
                            {
                                "id": "activity-pontefract-park",
                                "event_type": "activity",
                                "start_time": "09:40",
                                "end_time": "10:40",
                                "activity": {
                                    "id": "",
                                    "name": "Stroll through Pontefract Park",
                                    "description": "Enjoy a refreshing stroll through Pontefract Park. This large green space offers pleasant walking paths and, depending on your vantage point, views towards Pontefract Castle. It's a great way to enjoy some nature before heading to the market.",
                                    "category": "Park",
                                    "type": "Public Park",
                                    "location": {
                                        "name": "Pontefract Park",
                                        "address": "Pontefract Park, Park Rd, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.696947,
                                        "longitude": -1.326455
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 0m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.4,
                                    "review_count": 1059,
                                    "tips": [
                                        "Ideal for a morning walk, especially if the weather is clear.",
                                        "Look for the racecourse within the park grounds."
                                    ],
                                    "opening_hours": "09:00 - 03:00",
                                    "priority": 2
                                }
                            },
                            {
                                "id": "transport-pontefractpark-market-day3",
                                "event_type": "transport",
                                "start_time": "10:40",
                                "end_time": "11:00",
                                "transport": {
                                    "id": "",
                                    "mode": "Walk",
                                    "from_location": {
                                        "name": "Pontefract Park",
                                        "address": "Pontefract Park, Park Rd, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.696947,
                                        "longitude": -1.326455
                                    },
                                    "to_location": {
                                        "name": "Pontefract Market (Town Centre)",
                                        "address": "Pontefract Town Centre, Market Place, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.6917,
                                        "longitude": -1.3115
                                    },
                                    "duration": "0h 20m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Walk from Pontefract Park towards the town centre to reach the market area.",
                                    "carrier": "Self",
                                    "vehicle_number": "N/A"
                                }
                            },
                            {
                                "id": "activity-pontefract-market",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "12:30",
                                "activity": {
                                    "id": "",
                                    "name": "Pontefract Market",
                                    "description": "Experience the vibrant atmosphere of Pontefract Market, which operates on Wednesdays. Browse the stalls, interact with local vendors, and soak in the authentic market town vibe. You might find local produce, goods, or unique snacks.",
                                    "category": "Local Experience",
                                    "type": "Market",
                                    "location": {
                                        "name": "Pontefract Market",
                                        "address": "Market Place, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.6917,
                                        "longitude": -1.3115
                                    },
                                    "start_time": "",
                                    "end_time": "",
                                    "duration": "1h 30m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 0,
                                    "review_count": 0,
                                    "tips": [
                                        "Wednesday is a general market day, offering a wide range of goods.",
                                        "This is a great opportunity to observe local life and culture."
                                    ],
                                    "opening_hours": "Typically 09:00 - 16:00 on market days",
                                    "priority": 1
                                }
                            },
                            {
                                "id": "lunch-day3",
                                "event_type": "meal",
                                "start_time": "12:30",
                                "meal": {
                                    "id": "",
                                    "type": "lunch",
                                    "restaurant_name": "Market Stall / Baden’s Butties",
                                    "description": "Grab a quick and affordable lunch from one of the market stalls or revisit Baden’s Butties for another budget-friendly meal. This keeps costs down and allows for flexibility before your departure.",
                                    "cuisine": "Street Food / British",
                                    "location": {
                                        "name": "Pontefract Market / Baden’s Butties",
                                        "address": "Market Place / Cooke Hall, Bondgate, Pontefract, UK",
                                        "city": "Pontefract",
                                        "state": "West Yorkshire",
                                        "country": "UK",
                                        "latitude": 53.6917,
                                        "longitude": -1.3115
                                    },
                                    "start_time": "12:30",
                                    "end_time": "13:15",
                                    "cost": 500,
                                    "cost_per_person": 500,
                                    "rating": 0,
                                    "review_count": 0,
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "transport-departure-pontefract",
                                "event_type": "transport",
                                "start_time": "13:30",
                                "end_time": "14:00",
                                "transport": {
                                    "id": "",
                                    "mode": "Bus / Taxi",
                                    "from_location": {
                                        "name": "Pontefract Bus Station",
                                        "address": "Horsefair, Pontefract WF8 1BA, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.6917,
                                        "longitude": -1.3115
                                    },
                                    "to_location": {
                                        "name": "Pontefract Bus Station (for onward travel)",
                                        "address": "Horsefair, Pontefract WF8 1BA, UK",
                                        "city": "Pontefract",
                                        "state": "",
                                        "country": "",
                                        "latitude": 53.6917,
                                        "longitude": -1.3115
                                    },
                                    "duration": "0h 30m",
                                    "cost": 250,
                                    "cost_per_person": 250,
                                    "description": "Head back to Pontefract Bus Station to begin your journey back to Manchester Airport for your international flight, or to your next destination. This concludes your visit to Pontefract.",
                                    "notes": [
                                        "Plan your onward travel from Pontefract Bus Station to Manchester Airport (MAN) or other departure points well in advance.",
                                        "Allow ample time for travel to the airport, check-in, and security for your return flight to Bengaluru.",
                                        "The return journey will involve similar costs and durations to your arrival journey."
                                    ],
                                    "carrier": "Local Service",
                                    "vehicle_number": "Various"
                                }
                            }
                        ],
                        "daily_cost": 1750
                    }
                ],
                "accommodations": [
                    {
                        "id": "premier-inn-pontefract-north",
                        "name": "Premier Inn Pontefract North hotel",
                        "type": "hotel",
                        "description": "The Premier Inn Pontefract North hotel offers a practical and comfortable stay, aligning with a mid-range travel style for budget-conscious travelers. Located at Ai Business Park, 84 Knottingley Rd, Pontefract, it provides a good base for exploring Pontefract's heritage sites like the Castle and Museum, which are a short distance away. The hotel features fresh rooms with their signature comfy beds, ensuring a good night's sleep. An on-site restaurant serves pub grub, offering convenient dining options. The hotel is wheelchair accessible (entrance and parking) and accepts major debit and credit cards. Free Wi-Fi is generally available to guests. Contact: 0333 321 1395. It is critical to note that the estimated total cost of ₹12,600.00 for two nights at this Premier Inn significantly exceeds the provided total trip budget of ₹6,000.00. This accommodation offers good value for money within the UK's mid-range hotel market, but a substantial increase in budget or a re-evaluation of accommodation expectations would be necessary to secure a stay here.",
                        "location": {
                            "name": "Pontefract North",
                            "address": "Ai Business Park, 84 Knottingley Rd, Pontefract WF8 2ND",
                            "city": "Pontefract",
                            "state": "West Yorkshire",
                            "country": "UK",
                            "latitude": 53.702866,
                            "longitude": -1.2730274
                        },
                        "check_in_date": "2025-11-03",
                        "check_out_date": "2025-11-05",
                        "nights": 2,
                        "room_type": "Standard Double Room",
                        "guests": 1,
                        "cost_per_night": 6300,
                        "total_cost": 12600,
                        "rating": 4.2,
                        "review_count": 939,
                        "amenities": [
                            "Comfy beds",
                            "On-site restaurant",
                            "Free Wi-Fi",
                            "Wheelchair accessible entrance",
                            "Wheelchair accessible parking",
                            "Accepts debit cards",
                            "Accepts credit cards"
                        ],
                        "check_in_time": "15:00",
                        "check_out_time": "12:00",
                        "booking_url": "https://www.premierinn.com/gb/en/hotels/england/west-yorkshire/pontefract/pontefract-north.html?cid=GLBC_PONTUR",
                        "cancellation_info": "Standard cancellation policies apply; check hotel website for specific details and terms."
                    }
                ],
                "generated_at": "2025-11-02T12:44:59.737479Z",
                "ai_model": "gemini-2.5-flash",
                "language": "",
                "highlight_activities": [
                    "Explore the historic ruins of Pontefract Castle, a site of significant English Civil War history.",
                    "Visit Pontefract Museum to delve into local history, including the town's unique connection to liquorice.",
                    "Walk the Pontefract Liquorice Trail to learn about the town's famous sweet heritage and look for local 'Pontefract Cakes'.",
                    "Stroll through Pontefract Park, offering green spaces and views of the castle.",
                    "Experience the vibrant atmosphere of Pontefract Market (check for market days, typically Wednesday and Saturday for general market).",
                    "Discover local independent shops and cafes in the town centre.",
                    "Visit St. Giles Church, an impressive historic parish church."
                ],
                "local_insights": [
                    "Pontefract is synonymous with liquorice; look for local confectionery shops selling 'Pontefract Cakes' and other liquorice treats.",
                    "The town has a strong market tradition; market days are a great way to experience local life and find fresh produce.",
                    "Yorkshire locals are known for their friendly, straightforward demeanor. Don't be shy to ask for directions or recommendations.",
                    "The history of Pontefract Castle is a point of local pride; many locals are knowledgeable about its dramatic past.",
                    "Pontefract is a relatively compact town, making it very walkable for exploring the main attractions.",
                    "While primarily a market town, Pontefract has a community feel with local events and festivals sometimes taking place, check local listings.",
                    "Expect a relaxed pace of life compared to larger cities."
                ],
                "weather_info": {
                    "season": "Late Autumn / Early Winter",
                    "description": "Cold, damp, and often overcast with short daylight hours. Expect frequent rain showers, potential for frost, and occasional strong winds. The weather can be changeable.",
                    "avg_min_temp": 3,
                    "avg_max_temp": 8,
                    "recommendation": "Pack extensive warm layers including thermals, fleece jackets, and thick sweaters. A heavy-duty, waterproof and windproof coat is essential. Include a warm hat, gloves, scarf, and sturdy, waterproof walking boots. An umbrella is also highly recommended."
                }
            },
            {
                "id": "01dc1720-e7bc-4f82-9e3c-bfe6f4034b10",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "destination": "Mysuru, Karnataka, India",
                "start_date": "2025-11-03",
                "end_date": "2025-11-05",
                "duration_days": 3,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 6000,
                "saved": 0,
                "total_cost": 15394.59,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 7672.925162637523,
                    "transport": 1770.3092493827044,
                    "activities": 2364.198023504768,
                    "meals": 2455.9290122347434,
                    "miscellaneous": 1131.2310266541397
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-03",
                        "title": "Arrival in Mysuru, Karnataka, India",
                        "description": "Welcome to Mysuru, Karnataka, India! Start your journey with check-in and local exploration.",
                        "events": [
                            {
                                "id": "0a7fc5fe-3b23-498b-851f-4c8f3bcc9d95",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "meal": {
                                    "id": "0a7fc5fe-3b23-498b-851f-4c8f3bcc9d95",
                                    "type": "breakfast",
                                    "restaurant_name": "Street Food Corner",
                                    "description": "Popular local breakfast spot",
                                    "cuisine": "Street Food",
                                    "location": {
                                        "name": "Street Food Corner",
                                        "address": "Street Food Corner, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.612940378050286,
                                        "longitude": 77.21387336245539
                                    },
                                    "start_time": "08:30",
                                    "cost": 240,
                                    "cost_per_person": 240,
                                    "rating": 4.502802,
                                    "review_count": 366,
                                    "specialties": [
                                        "Local Breakfast",
                                        "Fresh Lassi"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "03a2aa60-0ddc-41ff-a956-cd259da747dc",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "03a2aa60-0ddc-41ff-a956-cd259da747dc",
                                    "name": "Local Sightseeing Tour",
                                    "description": "Explore the main attractions of the city",
                                    "category": "sightseeing",
                                    "type": "tour",
                                    "location": {
                                        "name": "Local Sightseeing Tour",
                                        "address": "Local Sightseeing Tour, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.613111889699738,
                                        "longitude": 77.21078937405012
                                    },
                                    "start_time": "09:00",
                                    "end_time": "13:00",
                                    "duration": "4h",
                                    "cost": 630.4528062679383,
                                    "cost_per_person": 630.4528062679383,
                                    "booking_required": true,
                                    "booking_url": "https://booking.example.com/activity/03a2aa60-0ddc-41ff-a956-cd259da747dc",
                                    "rating": 4.199232,
                                    "review_count": 749,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "abd94384-7f4d-4b2e-ade6-c9f62eb7aed5",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "09:50",
                                "transport": {
                                    "id": "abd94384-7f4d-4b2e-ade6-c9f62eb7aed5",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Railway Station",
                                        "address": "Railway Station, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.615675576587705,
                                        "longitude": 77.20210459549476
                                    },
                                    "to_location": {
                                        "name": "Airport",
                                        "address": "Airport, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.62355929568344,
                                        "longitude": 77.19931354464347
                                    },
                                    "departure_time": "09:30",
                                    "arrival_time": "09:50",
                                    "duration": "20m",
                                    "cost": 80,
                                    "cost_per_person": 80,
                                    "description": "Auto-rickshaw ride through the city"
                                }
                            },
                            {
                                "id": "70dcd72c-1ee9-480f-b0f7-49b3256e5bc8",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "70dcd72c-1ee9-480f-b0f7-49b3256e5bc8",
                                    "name": "Cultural Museum",
                                    "description": "Learn about local history and culture",
                                    "category": "cultural",
                                    "type": "museum",
                                    "location": {
                                        "name": "Cultural Museum",
                                        "address": "Cultural Museum, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61141957452798,
                                        "longitude": 77.21045163010568
                                    },
                                    "start_time": "11:00",
                                    "end_time": "13:00",
                                    "duration": "2h",
                                    "cost": 120,
                                    "cost_per_person": 120,
                                    "booking_required": false,
                                    "rating": 4.7656484,
                                    "review_count": 716,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 5
                                }
                            },
                            {
                                "id": "d8369533-cb88-4054-b6f5-6afefcd13417",
                                "event_type": "transport",
                                "start_time": "12:30",
                                "end_time": "12:55",
                                "transport": {
                                    "id": "d8369533-cb88-4054-b6f5-6afefcd13417",
                                    "mode": "taxi",
                                    "from_location": {
                                        "name": "Old Town",
                                        "address": "Old Town, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.613882517286033,
                                        "longitude": 77.20283357426393
                                    },
                                    "to_location": {
                                        "name": "Old Town",
                                        "address": "Old Town, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.612727016952157,
                                        "longitude": 77.20899135105496
                                    },
                                    "departure_time": "12:30",
                                    "arrival_time": "12:55",
                                    "duration": "25m",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "description": "Comfortable taxi ride"
                                }
                            },
                            {
                                "id": "49cf1d4e-6e4e-4fca-ae09-1fd55667952f",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "49cf1d4e-6e4e-4fca-ae09-1fd55667952f",
                                    "type": "lunch",
                                    "restaurant_name": "Local Specialty Restaurant",
                                    "description": "Authentic local cuisine",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Local Specialty Restaurant",
                                        "address": "Local Specialty Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.609691841640846,
                                        "longitude": 77.21178165157677
                                    },
                                    "start_time": "13:00",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "rating": 4.0169187,
                                    "review_count": 128,
                                    "specialties": [
                                        "Regional Thali",
                                        "Local Sweets"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "3120f1b7-04ca-4df3-8aa1-433a307e78ce",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "3120f1b7-04ca-4df3-8aa1-433a307e78ce",
                                    "type": "dinner",
                                    "restaurant_name": "Rooftop Restaurant",
                                    "description": "Great views and variety of cuisines",
                                    "cuisine": "Multi-cuisine",
                                    "location": {
                                        "name": "Rooftop Restaurant",
                                        "address": "Rooftop Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.616797140314553,
                                        "longitude": 77.2063931738391
                                    },
                                    "start_time": "20:00",
                                    "reservation_time": "20:00",
                                    "cost": 960,
                                    "cost_per_person": 960,
                                    "rating": 4.355272,
                                    "review_count": 280,
                                    "specialties": [
                                        "North Indian",
                                        "Chinese"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": true,
                                    "booking_url": "https://reservation.example.com/restaurant/3120f1b7-04ca-4df3-8aa1-433a307e78ce"
                                }
                            }
                        ],
                        "daily_cost": 2780.4528062679383,
                        "weather": {
                            "date": "2025-11-03",
                            "min_temp": 19.30845182903954,
                            "max_temp": 25.655815564853015,
                            "condition": "sunny",
                            "description": "Clear skies with pleasant temperature",
                            "humidity": 64.19895923076541,
                            "precipitation": 0,
                            "recommendation": "Perfect weather for outdoor activities"
                        },
                        "notes": [
                            "Take time to rest after travel",
                            "Check hotel amenities and nearby facilities",
                            "Stay hydrated throughout the day",
                            "Keep emergency contacts handy"
                        ]
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-04",
                        "title": "Day 2: Culture in Mysuru, Karnataka, India",
                        "description": "Full day of exploration in Mysuru, Karnataka, India with planned activities and local experiences.",
                        "events": [
                            {
                                "id": "28620a88-e9d0-4306-9658-6a9d2cf85f04",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "meal": {
                                    "id": "28620a88-e9d0-4306-9658-6a9d2cf85f04",
                                    "type": "breakfast",
                                    "restaurant_name": "Street Food Corner",
                                    "description": "Popular local breakfast spot",
                                    "cuisine": "Street Food",
                                    "location": {
                                        "name": "Street Food Corner",
                                        "address": "Street Food Corner, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.615770058404767,
                                        "longitude": 77.21033776479327
                                    },
                                    "start_time": "08:30",
                                    "cost": 240,
                                    "cost_per_person": 240,
                                    "rating": 3.8924134,
                                    "review_count": 408,
                                    "specialties": [
                                        "Local Breakfast",
                                        "Fresh Lassi"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "1608f43a-e029-409c-8413-616d45ac4706",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "11:00",
                                "activity": {
                                    "id": "1608f43a-e029-409c-8413-616d45ac4706",
                                    "name": "Cultural Museum",
                                    "description": "Learn about local history and culture",
                                    "category": "cultural",
                                    "type": "museum",
                                    "location": {
                                        "name": "Cultural Museum",
                                        "address": "Cultural Museum, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.615403135248414,
                                        "longitude": 77.20673674626428
                                    },
                                    "start_time": "09:00",
                                    "end_time": "11:00",
                                    "duration": "2h",
                                    "cost": 120,
                                    "cost_per_person": 120,
                                    "booking_required": true,
                                    "booking_url": "https://booking.example.com/activity/1608f43a-e029-409c-8413-616d45ac4706",
                                    "rating": 4.7739153,
                                    "review_count": 203,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 5
                                }
                            },
                            {
                                "id": "8f5eccd7-f3a0-4e09-8901-01f9830cf735",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:15",
                                "transport": {
                                    "id": "8f5eccd7-f3a0-4e09-8901-01f9830cf735",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Tourist Area",
                                        "address": "Tourist Area, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.613920597481425,
                                        "longitude": 77.20896864563312
                                    },
                                    "to_location": {
                                        "name": "City Center",
                                        "address": "City Center, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.610268453584435,
                                        "longitude": 77.21510984151772
                                    },
                                    "departure_time": "09:30",
                                    "arrival_time": "10:15",
                                    "duration": "45m",
                                    "cost": 30,
                                    "cost_per_person": 30,
                                    "description": "Local bus - experience public transport"
                                }
                            },
                            {
                                "id": "804ce36e-0148-45b6-9ea9-e5c793670e0a",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "15:00",
                                "activity": {
                                    "id": "804ce36e-0148-45b6-9ea9-e5c793670e0a",
                                    "name": "Local Sightseeing Tour",
                                    "description": "Explore the main attractions of the city",
                                    "category": "sightseeing",
                                    "type": "tour",
                                    "location": {
                                        "name": "Local Sightseeing Tour",
                                        "address": "Local Sightseeing Tour, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61655903427428,
                                        "longitude": 77.21002931070596
                                    },
                                    "start_time": "11:00",
                                    "end_time": "15:00",
                                    "duration": "4h",
                                    "cost": 534.4528062679382,
                                    "cost_per_person": 534.4528062679382,
                                    "booking_required": false,
                                    "rating": 4.4884615,
                                    "review_count": 943,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 3
                                }
                            },
                            {
                                "id": "d4a6f79d-db2f-48b6-add1-5c2345f113cb",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "d4a6f79d-db2f-48b6-add1-5c2345f113cb",
                                    "type": "lunch",
                                    "restaurant_name": "Local Specialty Restaurant",
                                    "description": "Authentic local cuisine",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Local Specialty Restaurant",
                                        "address": "Local Specialty Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.611683602429512,
                                        "longitude": 77.20976287799772
                                    },
                                    "start_time": "13:00",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "rating": 4.450766,
                                    "review_count": 516,
                                    "specialties": [
                                        "Regional Thali",
                                        "Local Sweets"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "25be7a50-7aab-4231-9728-2d1f77dbba2f",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:00",
                                "activity": {
                                    "id": "25be7a50-7aab-4231-9728-2d1f77dbba2f",
                                    "name": "Market Visit",
                                    "description": "Visit local markets for shopping and cultural experience",
                                    "category": "shopping",
                                    "type": "market",
                                    "location": {
                                        "name": "Market Visit",
                                        "address": "Market Visit, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.616775552956963,
                                        "longitude": 77.20710704667945
                                    },
                                    "start_time": "14:00",
                                    "end_time": "16:00",
                                    "duration": "2h",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.542468,
                                    "review_count": 191,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "f9cd3b09-985e-4ac6-9aad-621da9179155",
                                "event_type": "transport",
                                "start_time": "17:00",
                                "end_time": "17:45",
                                "transport": {
                                    "id": "f9cd3b09-985e-4ac6-9aad-621da9179155",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Bus Station",
                                        "address": "Bus Station, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.623706472288347,
                                        "longitude": 77.20826540786825
                                    },
                                    "to_location": {
                                        "name": "City Center",
                                        "address": "City Center, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.611871470793062,
                                        "longitude": 77.20192399402166
                                    },
                                    "departure_time": "17:00",
                                    "arrival_time": "17:45",
                                    "duration": "45m",
                                    "cost": 30,
                                    "cost_per_person": 30,
                                    "description": "Local bus - experience public transport"
                                }
                            },
                            {
                                "id": "08e16f4d-0343-4bbe-b02b-0d30150e8a28",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "08e16f4d-0343-4bbe-b02b-0d30150e8a28",
                                    "type": "dinner",
                                    "restaurant_name": "Rooftop Restaurant",
                                    "description": "Great views and variety of cuisines",
                                    "cuisine": "Multi-cuisine",
                                    "location": {
                                        "name": "Rooftop Restaurant",
                                        "address": "Rooftop Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61310679341001,
                                        "longitude": 77.21370574549502
                                    },
                                    "start_time": "20:00",
                                    "reservation_time": "20:00",
                                    "cost": 960,
                                    "cost_per_person": 960,
                                    "rating": 3.8962412,
                                    "review_count": 159,
                                    "specialties": [
                                        "North Indian",
                                        "Chinese"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": true,
                                    "booking_url": "https://reservation.example.com/restaurant/08e16f4d-0343-4bbe-b02b-0d30150e8a28"
                                }
                            },
                            {
                                "id": "bb4133c6-1d83-4019-b27c-1727ac975cb2",
                                "event_type": "transport",
                                "transport": {
                                    "id": "bb4133c6-1d83-4019-b27c-1727ac975cb2",
                                    "mode": "walk",
                                    "from_location": {
                                        "name": "City Center",
                                        "address": "City Center, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.613272490602153,
                                        "longitude": 77.21690733459815
                                    },
                                    "to_location": {
                                        "name": "Tourist Area",
                                        "address": "Tourist Area, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.610982482569206,
                                        "longitude": 77.21046866293248
                                    },
                                    "duration": "15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Walking distance - enjoy the local atmosphere"
                                }
                            }
                        ],
                        "daily_cost": 2514.4528062679383,
                        "weather": {
                            "date": "2025-11-04",
                            "min_temp": 14.032308586915608,
                            "max_temp": 28.73781074036188,
                            "condition": "sunny",
                            "description": "Clear skies with pleasant temperature",
                            "humidity": 78.7353125923476,
                            "precipitation": 0,
                            "recommendation": "Perfect weather for outdoor activities"
                        },
                        "notes": [
                            "Start early to make the most of your day",
                            "Take breaks between activities",
                            "Stay hydrated throughout the day",
                            "Keep emergency contacts handy"
                        ]
                    },
                    {
                        "day_number": 3,
                        "date": "2025-11-05",
                        "title": "Departure from Mysuru, Karnataka, India",
                        "description": "Final day in Mysuru, Karnataka, India. Pack your memories and prepare for departure.",
                        "events": [
                            {
                                "id": "b8a95b04-7806-4be3-808c-a41534360db8",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "meal": {
                                    "id": "b8a95b04-7806-4be3-808c-a41534360db8",
                                    "type": "breakfast",
                                    "restaurant_name": "Street Food Corner",
                                    "description": "Popular local breakfast spot",
                                    "cuisine": "Street Food",
                                    "location": {
                                        "name": "Street Food Corner",
                                        "address": "Street Food Corner, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61150596636472,
                                        "longitude": 77.21344104064846
                                    },
                                    "start_time": "08:30",
                                    "cost": 240,
                                    "cost_per_person": 240,
                                    "rating": 4.510436,
                                    "review_count": 134,
                                    "specialties": [
                                        "Local Breakfast",
                                        "Fresh Lassi"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "40d1990f-3ea5-4631-95d4-f5564a1c3750",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "11:00",
                                "activity": {
                                    "id": "40d1990f-3ea5-4631-95d4-f5564a1c3750",
                                    "name": "Market Visit",
                                    "description": "Visit local markets for shopping and cultural experience",
                                    "category": "shopping",
                                    "type": "market",
                                    "location": {
                                        "name": "Market Visit",
                                        "address": "Market Visit, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.616388039449237,
                                        "longitude": 77.20773191577214
                                    },
                                    "start_time": "09:00",
                                    "end_time": "11:00",
                                    "duration": "2h",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 3.788205,
                                    "review_count": 785,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 3
                                }
                            },
                            {
                                "id": "c5634be2-cdb0-40a6-81f7-758d497be446",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "09:55",
                                "transport": {
                                    "id": "c5634be2-cdb0-40a6-81f7-758d497be446",
                                    "mode": "taxi",
                                    "from_location": {
                                        "name": "Bus Station",
                                        "address": "Bus Station, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.616576028772545,
                                        "longitude": 77.21508963922363
                                    },
                                    "to_location": {
                                        "name": "Hotel District",
                                        "address": "Hotel District, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.617995189114,
                                        "longitude": 77.21272300009103
                                    },
                                    "departure_time": "09:30",
                                    "arrival_time": "09:55",
                                    "duration": "25m",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "description": "Comfortable taxi ride"
                                }
                            },
                            {
                                "id": "30348c03-adf3-416a-8c28-cd561d195513",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "15:00",
                                "activity": {
                                    "id": "30348c03-adf3-416a-8c28-cd561d195513",
                                    "name": "Local Sightseeing Tour",
                                    "description": "Explore the main attractions of the city",
                                    "category": "sightseeing",
                                    "type": "tour",
                                    "location": {
                                        "name": "Local Sightseeing Tour",
                                        "address": "Local Sightseeing Tour, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61754971621641,
                                        "longitude": 77.20630306881502
                                    },
                                    "start_time": "11:00",
                                    "end_time": "15:00",
                                    "duration": "4h",
                                    "cost": 630.4528062679383,
                                    "cost_per_person": 630.4528062679383,
                                    "booking_required": false,
                                    "rating": 4.989774,
                                    "review_count": 134,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "bf449318-41e7-499f-aa83-a7e6a7555ab3",
                                "event_type": "transport",
                                "start_time": "12:30",
                                "end_time": "13:15",
                                "transport": {
                                    "id": "bf449318-41e7-499f-aa83-a7e6a7555ab3",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Hotel District",
                                        "address": "Hotel District, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.62215827360144,
                                        "longitude": 77.21775077528402
                                    },
                                    "to_location": {
                                        "name": "Tourist Area",
                                        "address": "Tourist Area, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61665546473115,
                                        "longitude": 77.21261289517253
                                    },
                                    "departure_time": "12:30",
                                    "arrival_time": "13:15",
                                    "duration": "45m",
                                    "cost": 30,
                                    "cost_per_person": 30,
                                    "description": "Local bus - experience public transport"
                                }
                            },
                            {
                                "id": "7ec4018c-5c5e-4f59-9978-5d986f273e32",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "7ec4018c-5c5e-4f59-9978-5d986f273e32",
                                    "type": "lunch",
                                    "restaurant_name": "Local Specialty Restaurant",
                                    "description": "Authentic local cuisine",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Local Specialty Restaurant",
                                        "address": "Local Specialty Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.612064146440616,
                                        "longitude": 77.21140687216848
                                    },
                                    "start_time": "13:00",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "rating": 3.922478,
                                    "review_count": 286,
                                    "specialties": [
                                        "Regional Thali",
                                        "Local Sweets"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "d77c9c73-a1a0-430e-b536-47463ce9d6ef",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:00",
                                "activity": {
                                    "id": "d77c9c73-a1a0-430e-b536-47463ce9d6ef",
                                    "name": "Cultural Museum",
                                    "description": "Learn about local history and culture",
                                    "category": "cultural",
                                    "type": "museum",
                                    "location": {
                                        "name": "Cultural Museum",
                                        "address": "Cultural Museum, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61174825674685,
                                        "longitude": 77.20689345016564
                                    },
                                    "start_time": "14:00",
                                    "end_time": "16:00",
                                    "duration": "2h",
                                    "cost": 120,
                                    "cost_per_person": 120,
                                    "booking_required": false,
                                    "rating": 3.5394037,
                                    "review_count": 921,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "75f5b79e-9f8d-4364-b0ed-0c5b4822249e",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "75f5b79e-9f8d-4364-b0ed-0c5b4822249e",
                                    "type": "dinner",
                                    "restaurant_name": "Rooftop Restaurant",
                                    "description": "Great views and variety of cuisines",
                                    "cuisine": "Multi-cuisine",
                                    "location": {
                                        "name": "Rooftop Restaurant",
                                        "address": "Rooftop Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.616393822854786,
                                        "longitude": 77.21343130394688
                                    },
                                    "start_time": "20:00",
                                    "reservation_time": "20:00",
                                    "cost": 960,
                                    "cost_per_person": 960,
                                    "rating": 4.667924,
                                    "review_count": 235,
                                    "specialties": [
                                        "North Indian",
                                        "Chinese"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": true,
                                    "booking_url": "https://reservation.example.com/restaurant/75f5b79e-9f8d-4364-b0ed-0c5b4822249e"
                                }
                            }
                        ],
                        "daily_cost": 2730.4528062679383,
                        "weather": {
                            "date": "2025-11-05",
                            "min_temp": 15.908944281914176,
                            "max_temp": 26.57532933653014,
                            "condition": "sunny",
                            "description": "Clear skies with pleasant temperature",
                            "humidity": 47.613047942072285,
                            "precipitation": 0,
                            "recommendation": "Perfect weather for outdoor activities"
                        },
                        "notes": [
                            "Pack souvenirs carefully",
                            "Check flight/train timings",
                            "Keep important documents ready",
                            "Stay hydrated throughout the day",
                            "Keep emergency contacts handy"
                        ]
                    }
                ],
                "accommodations": [
                    {
                        "id": "9c4e376a-c69a-427d-80d3-6be69b636299",
                        "name": "Comfort Hotel Mysuru, Karnataka, India",
                        "type": "hotel",
                        "description": "Well-appointed mid-range hotel in Mysuru, Karnataka, India offering modern amenities and good service for a comfortable stay.",
                        "location": {
                            "name": "Hotel Area",
                            "address": "Hotel District, Mysuru, Karnataka, India",
                            "city": "Mysuru, Karnataka, India",
                            "state": "India",
                            "country": "India",
                            "latitude": 28.6139,
                            "longitude": 77.209
                        },
                        "check_in_date": "2025-11-03",
                        "check_out_date": "2025-11-05",
                        "nights": 2,
                        "room_type": "Single Room",
                        "guests": 1,
                        "cost_per_night": 3836.4625813187613,
                        "total_cost": 7672.925162637523,
                        "rating": 3.7371545,
                        "review_count": 754,
                        "amenities": [
                            "Free WiFi",
                            "Restaurant",
                            "Room service",
                            "Air conditioning",
                            "Parking",
                            "24-hour front desk"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "https://booking.example.com/hotel/b4900149-6b15-4945-a90c-cc3b41adc2e9",
                        "cancellation_info": "Free cancellation up to 24 hours before check-in"
                    }
                ],
                "generated_at": "2025-11-02T12:43:54.003381Z",
                "ai_model": "Mock Generator v1.0 (Fallback)",
                "language": "en",
                "highlight_activities": [
                    "Must-visit landmark tour",
                    "Local cultural experience",
                    "Authentic cuisine tasting",
                    "Scenic photography spots",
                    "Hidden gems exploration",
                    "Historical monument visits"
                ],
                "local_insights": [
                    "Best time to visit popular attractions is early morning to avoid crowds",
                    "Local markets offer the most authentic shopping experience",
                    "Try street food from recommended vendors for genuine local flavors",
                    "Respect local customs and dress codes, especially at religious sites",
                    "Bargaining is common in local markets but not in fixed-price stores"
                ],
                "weather_info": {
                    "season": "Winter",
                    "description": "Cool and pleasant weather, ideal for sightseeing",
                    "avg_min_temp": 15,
                    "avg_max_temp": 25,
                    "recommendation": "Pack light woollens and comfortable walking shoes"
                }
            },
            {
                "id": "b823c436-c3bc-432b-8397-49410f7a46c5",
                "user_id": "e6b05dff-3e40-4208-93d8-5636e5418e39",
                "status": "draft",
                "destination": "Mysuru, Karnataka, India",
                "start_date": "2025-11-03",
                "end_date": "2025-11-05",
                "duration_days": 3,
                "traveler_count": 1,
                "travel_style": "mid-range",
                "budget": 6000,
                "saved": 0,
                "total_cost": 15185,
                "cost_per_person": 0,
                "budget_breakdown": {
                    "accommodation": 7114.614781369986,
                    "transport": 1817.121674796629,
                    "activities": 2529.112516365222,
                    "meals": 2449.490339839302,
                    "miscellaneous": 1274.6625176900454
                },
                "day_plans": [
                    {
                        "day_number": 1,
                        "date": "2025-11-03",
                        "title": "Arrival in Mysuru, Karnataka, India",
                        "description": "Welcome to Mysuru, Karnataka, India! Start your journey with check-in and local exploration.",
                        "events": [
                            {
                                "id": "082f7224-c5c1-46bb-9c4d-b52d989b4305",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "meal": {
                                    "id": "082f7224-c5c1-46bb-9c4d-b52d989b4305",
                                    "type": "breakfast",
                                    "restaurant_name": "Street Food Corner",
                                    "description": "Popular local breakfast spot",
                                    "cuisine": "Street Food",
                                    "location": {
                                        "name": "Street Food Corner",
                                        "address": "Street Food Corner, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.611095567087308,
                                        "longitude": 77.20887860170748
                                    },
                                    "start_time": "08:30",
                                    "cost": 240,
                                    "cost_per_person": 240,
                                    "rating": 3.8496401,
                                    "review_count": 259,
                                    "specialties": [
                                        "Local Breakfast",
                                        "Fresh Lassi"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "41c6d0e6-6918-4f38-b347-b7fc5d02791e",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "41c6d0e6-6918-4f38-b347-b7fc5d02791e",
                                    "name": "Local Sightseeing Tour",
                                    "description": "Explore the main attractions of the city",
                                    "category": "sightseeing",
                                    "type": "tour",
                                    "location": {
                                        "name": "Local Sightseeing Tour",
                                        "address": "Local Sightseeing Tour, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.6180204756299,
                                        "longitude": 77.20497531858977
                                    },
                                    "start_time": "09:00",
                                    "end_time": "13:00",
                                    "duration": "4h",
                                    "cost": 674.4300043640592,
                                    "cost_per_person": 674.4300043640592,
                                    "booking_required": false,
                                    "rating": 3.9749556,
                                    "review_count": 1053,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "6d7f8559-4924-4d96-91c5-fb8ab79f32de",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "09:55",
                                "transport": {
                                    "id": "6d7f8559-4924-4d96-91c5-fb8ab79f32de",
                                    "mode": "taxi",
                                    "from_location": {
                                        "name": "Hotel District",
                                        "address": "Hotel District, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.617339551686182,
                                        "longitude": 77.20659088346419
                                    },
                                    "to_location": {
                                        "name": "City Center",
                                        "address": "City Center, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.62168114344123,
                                        "longitude": 77.21707756304151
                                    },
                                    "departure_time": "09:30",
                                    "arrival_time": "09:55",
                                    "duration": "25m",
                                    "cost": 150,
                                    "cost_per_person": 150,
                                    "description": "Comfortable taxi ride"
                                }
                            },
                            {
                                "id": "89a29ee4-471e-4c0a-a176-2fff24de2fa4",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "89a29ee4-471e-4c0a-a176-2fff24de2fa4",
                                    "name": "Cultural Museum",
                                    "description": "Learn about local history and culture",
                                    "category": "cultural",
                                    "type": "museum",
                                    "location": {
                                        "name": "Cultural Museum",
                                        "address": "Cultural Museum, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.610352575412602,
                                        "longitude": 77.20485688597037
                                    },
                                    "start_time": "11:00",
                                    "end_time": "13:00",
                                    "duration": "2h",
                                    "cost": 120,
                                    "cost_per_person": 120,
                                    "booking_required": false,
                                    "rating": 4.8326902,
                                    "review_count": 289,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "f804b2c8-5ba2-461f-9e65-03b2fb25a4c8",
                                "event_type": "transport",
                                "start_time": "12:30",
                                "end_time": "12:50",
                                "transport": {
                                    "id": "f804b2c8-5ba2-461f-9e65-03b2fb25a4c8",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Main Market",
                                        "address": "Main Market, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.6078680230287,
                                        "longitude": 77.20756304030662
                                    },
                                    "to_location": {
                                        "name": "Main Market",
                                        "address": "Main Market, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.610556843356672,
                                        "longitude": 77.21152905285783
                                    },
                                    "departure_time": "12:30",
                                    "arrival_time": "12:50",
                                    "duration": "20m",
                                    "cost": 80,
                                    "cost_per_person": 80,
                                    "description": "Auto-rickshaw ride through the city"
                                }
                            },
                            {
                                "id": "2326b040-b01f-45bf-87d8-87a2e9ed84ba",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "2326b040-b01f-45bf-87d8-87a2e9ed84ba",
                                    "type": "lunch",
                                    "restaurant_name": "Local Specialty Restaurant",
                                    "description": "Authentic local cuisine",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Local Specialty Restaurant",
                                        "address": "Local Specialty Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61365518379991,
                                        "longitude": 77.21393497392724
                                    },
                                    "start_time": "13:00",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "rating": 4.3821874,
                                    "review_count": 75,
                                    "specialties": [
                                        "Regional Thali",
                                        "Local Sweets"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "ab0a2d09-637d-4bde-bccd-e5a1d3aa38eb",
                                "event_type": "transport",
                                "start_time": "17:00",
                                "end_time": "17:20",
                                "transport": {
                                    "id": "ab0a2d09-637d-4bde-bccd-e5a1d3aa38eb",
                                    "mode": "auto",
                                    "from_location": {
                                        "name": "Old Town",
                                        "address": "Old Town, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61086272015653,
                                        "longitude": 77.21430587003401
                                    },
                                    "to_location": {
                                        "name": "Main Market",
                                        "address": "Main Market, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.615052307788922,
                                        "longitude": 77.20596889421537
                                    },
                                    "departure_time": "17:00",
                                    "arrival_time": "17:20",
                                    "duration": "20m",
                                    "cost": 80,
                                    "cost_per_person": 80,
                                    "description": "Auto-rickshaw ride through the city"
                                }
                            },
                            {
                                "id": "3cdcb264-8558-41ce-a143-c2c5b35c6587",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "3cdcb264-8558-41ce-a143-c2c5b35c6587",
                                    "type": "dinner",
                                    "restaurant_name": "Rooftop Restaurant",
                                    "description": "Great views and variety of cuisines",
                                    "cuisine": "Multi-cuisine",
                                    "location": {
                                        "name": "Rooftop Restaurant",
                                        "address": "Rooftop Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.613312561910053,
                                        "longitude": 77.21171784848374
                                    },
                                    "start_time": "20:00",
                                    "reservation_time": "20:00",
                                    "cost": 960,
                                    "cost_per_person": 960,
                                    "rating": 3.9547355,
                                    "review_count": 283,
                                    "specialties": [
                                        "North Indian",
                                        "Chinese"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": true,
                                    "booking_url": "https://reservation.example.com/restaurant/3cdcb264-8558-41ce-a143-c2c5b35c6587"
                                }
                            }
                        ],
                        "daily_cost": 2904.430004364059,
                        "weather": {
                            "date": "2025-11-03",
                            "min_temp": 18.742932822041233,
                            "max_temp": 21.918827842078784,
                            "condition": "sunny",
                            "description": "Clear skies with pleasant temperature",
                            "humidity": 42.232370858035026,
                            "precipitation": 0,
                            "recommendation": "Perfect weather for outdoor activities"
                        },
                        "notes": [
                            "Take time to rest after travel",
                            "Check hotel amenities and nearby facilities",
                            "Stay hydrated throughout the day",
                            "Keep emergency contacts handy"
                        ]
                    },
                    {
                        "day_number": 2,
                        "date": "2025-11-04",
                        "title": "Day 2: Culture in Mysuru, Karnataka, India",
                        "description": "Full day of exploration in Mysuru, Karnataka, India with planned activities and local experiences.",
                        "events": [
                            {
                                "id": "02f61ca4-6167-4ed1-b236-fec8ba92dca5",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "meal": {
                                    "id": "02f61ca4-6167-4ed1-b236-fec8ba92dca5",
                                    "type": "breakfast",
                                    "restaurant_name": "Street Food Corner",
                                    "description": "Popular local breakfast spot",
                                    "cuisine": "Street Food",
                                    "location": {
                                        "name": "Street Food Corner",
                                        "address": "Street Food Corner, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.612885254375335,
                                        "longitude": 77.20496745592818
                                    },
                                    "start_time": "08:30",
                                    "cost": 240,
                                    "cost_per_person": 240,
                                    "rating": 4.9298997,
                                    "review_count": 161,
                                    "specialties": [
                                        "Local Breakfast",
                                        "Fresh Lassi"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "0398d80b-b69a-4955-90de-a0c9be010c2b",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "0398d80b-b69a-4955-90de-a0c9be010c2b",
                                    "name": "Local Sightseeing Tour",
                                    "description": "Explore the main attractions of the city",
                                    "category": "sightseeing",
                                    "type": "tour",
                                    "location": {
                                        "name": "Local Sightseeing Tour",
                                        "address": "Local Sightseeing Tour, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.618029661904274,
                                        "longitude": 77.21280586120182
                                    },
                                    "start_time": "09:00",
                                    "end_time": "13:00",
                                    "duration": "4h",
                                    "cost": 674.4300043640592,
                                    "cost_per_person": 674.4300043640592,
                                    "booking_required": false,
                                    "rating": 3.89643,
                                    "review_count": 811,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "a11e2bf9-8643-4199-b0d3-2f922e25043b",
                                "event_type": "transport",
                                "start_time": "09:30",
                                "end_time": "10:15",
                                "transport": {
                                    "id": "a11e2bf9-8643-4199-b0d3-2f922e25043b",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Airport",
                                        "address": "Airport, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.620894995498755,
                                        "longitude": 77.20576263138823
                                    },
                                    "to_location": {
                                        "name": "Bus Station",
                                        "address": "Bus Station, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.613972317122727,
                                        "longitude": 77.20313184901805
                                    },
                                    "departure_time": "09:30",
                                    "arrival_time": "10:15",
                                    "duration": "45m",
                                    "cost": 30,
                                    "cost_per_person": 30,
                                    "description": "Local bus - experience public transport"
                                }
                            },
                            {
                                "id": "1f0e7af5-f94e-484f-8b27-24bcd1bdecf0",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "13:00",
                                "activity": {
                                    "id": "1f0e7af5-f94e-484f-8b27-24bcd1bdecf0",
                                    "name": "Market Visit",
                                    "description": "Visit local markets for shopping and cultural experience",
                                    "category": "shopping",
                                    "type": "market",
                                    "location": {
                                        "name": "Market Visit",
                                        "address": "Market Visit, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.614756438645852,
                                        "longitude": 77.20562661618509
                                    },
                                    "start_time": "11:00",
                                    "end_time": "13:00",
                                    "duration": "2h",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.5090466,
                                    "review_count": 1090,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "5ece86fc-3578-49e0-b11f-ca98a4c30d3b",
                                "event_type": "transport",
                                "start_time": "12:30",
                                "end_time": "13:15",
                                "transport": {
                                    "id": "5ece86fc-3578-49e0-b11f-ca98a4c30d3b",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "City Center",
                                        "address": "City Center, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.60677817603999,
                                        "longitude": 77.21897018892446
                                    },
                                    "to_location": {
                                        "name": "Old Town",
                                        "address": "Old Town, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.619807431699336,
                                        "longitude": 77.2173485717566
                                    },
                                    "departure_time": "12:30",
                                    "arrival_time": "13:15",
                                    "duration": "45m",
                                    "cost": 30,
                                    "cost_per_person": 30,
                                    "description": "Local bus - experience public transport"
                                }
                            },
                            {
                                "id": "19cc708e-66b4-4c5b-99f2-70af6dffd1a4",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "19cc708e-66b4-4c5b-99f2-70af6dffd1a4",
                                    "type": "lunch",
                                    "restaurant_name": "Local Specialty Restaurant",
                                    "description": "Authentic local cuisine",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Local Specialty Restaurant",
                                        "address": "Local Specialty Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61401858014676,
                                        "longitude": 77.2112162853736
                                    },
                                    "start_time": "13:00",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "rating": 4.827283,
                                    "review_count": 351,
                                    "specialties": [
                                        "Regional Thali",
                                        "Local Sweets"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "ba435386-3774-419e-9b52-32ceb47744e3",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "ba435386-3774-419e-9b52-32ceb47744e3",
                                    "type": "dinner",
                                    "restaurant_name": "Rooftop Restaurant",
                                    "description": "Great views and variety of cuisines",
                                    "cuisine": "Multi-cuisine",
                                    "location": {
                                        "name": "Rooftop Restaurant",
                                        "address": "Rooftop Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61096751215034,
                                        "longitude": 77.20746436608121
                                    },
                                    "start_time": "20:00",
                                    "cost": 960,
                                    "cost_per_person": 960,
                                    "rating": 4.651769,
                                    "review_count": 218,
                                    "specialties": [
                                        "North Indian",
                                        "Chinese"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            }
                        ],
                        "daily_cost": 2534.430004364059,
                        "weather": {
                            "date": "2025-11-04",
                            "min_temp": 14.638736417903948,
                            "max_temp": 27.211013985184145,
                            "condition": "sunny",
                            "description": "Clear skies with pleasant temperature",
                            "humidity": 54.29426438633202,
                            "precipitation": 0,
                            "recommendation": "Perfect weather for outdoor activities"
                        },
                        "notes": [
                            "Start early to make the most of your day",
                            "Take breaks between activities",
                            "Stay hydrated throughout the day",
                            "Keep emergency contacts handy"
                        ]
                    },
                    {
                        "day_number": 3,
                        "date": "2025-11-05",
                        "title": "Departure from Mysuru, Karnataka, India",
                        "description": "Final day in Mysuru, Karnataka, India. Pack your memories and prepare for departure.",
                        "events": [
                            {
                                "id": "761c83b4-7514-46ce-a468-bf468282f891",
                                "event_type": "meal",
                                "start_time": "08:30",
                                "meal": {
                                    "id": "761c83b4-7514-46ce-a468-bf468282f891",
                                    "type": "breakfast",
                                    "restaurant_name": "Street Food Corner",
                                    "description": "Popular local breakfast spot",
                                    "cuisine": "Street Food",
                                    "location": {
                                        "name": "Street Food Corner",
                                        "address": "Street Food Corner, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.617445873055956,
                                        "longitude": 77.213044181891
                                    },
                                    "start_time": "08:30",
                                    "cost": 240,
                                    "cost_per_person": 240,
                                    "rating": 4.5618916,
                                    "review_count": 446,
                                    "specialties": [
                                        "Local Breakfast",
                                        "Fresh Lassi"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "b35646c8-0fb3-4003-8b98-40ae58f78d45",
                                "event_type": "activity",
                                "start_time": "09:00",
                                "end_time": "11:00",
                                "activity": {
                                    "id": "b35646c8-0fb3-4003-8b98-40ae58f78d45",
                                    "name": "Cultural Museum",
                                    "description": "Learn about local history and culture",
                                    "category": "cultural",
                                    "type": "museum",
                                    "location": {
                                        "name": "Cultural Museum",
                                        "address": "Cultural Museum, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.610542260092092,
                                        "longitude": 77.21176285138516
                                    },
                                    "start_time": "09:00",
                                    "end_time": "11:00",
                                    "duration": "2h",
                                    "cost": 120,
                                    "cost_per_person": 120,
                                    "booking_required": false,
                                    "rating": 3.5928264,
                                    "review_count": 1072,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "4a836ca6-4e22-4767-9bb3-96de85a3f014",
                                "event_type": "activity",
                                "start_time": "11:00",
                                "end_time": "15:00",
                                "activity": {
                                    "id": "4a836ca6-4e22-4767-9bb3-96de85a3f014",
                                    "name": "Local Sightseeing Tour",
                                    "description": "Explore the main attractions of the city",
                                    "category": "sightseeing",
                                    "type": "tour",
                                    "location": {
                                        "name": "Local Sightseeing Tour",
                                        "address": "Local Sightseeing Tour, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.615497533515423,
                                        "longitude": 77.2111922157441
                                    },
                                    "start_time": "11:00",
                                    "end_time": "15:00",
                                    "duration": "4h",
                                    "cost": 578.4300043640592,
                                    "cost_per_person": 578.4300043640592,
                                    "booking_required": false,
                                    "rating": 4.419383,
                                    "review_count": 883,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "bc12e22a-1cbb-4f37-8cbb-42d6c94c7a4d",
                                "event_type": "transport",
                                "start_time": "12:30",
                                "end_time": "13:15",
                                "transport": {
                                    "id": "bc12e22a-1cbb-4f37-8cbb-42d6c94c7a4d",
                                    "mode": "bus",
                                    "from_location": {
                                        "name": "Bus Station",
                                        "address": "Bus Station, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.605114128815195,
                                        "longitude": 77.21397806263441
                                    },
                                    "to_location": {
                                        "name": "Airport",
                                        "address": "Airport, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.622331856050184,
                                        "longitude": 77.20233982984577
                                    },
                                    "departure_time": "12:30",
                                    "arrival_time": "13:15",
                                    "duration": "45m",
                                    "cost": 30,
                                    "cost_per_person": 30,
                                    "description": "Local bus - experience public transport"
                                }
                            },
                            {
                                "id": "6073a81b-8e76-49c1-8c27-d0180c3ea00b",
                                "event_type": "meal",
                                "start_time": "13:00",
                                "meal": {
                                    "id": "6073a81b-8e76-49c1-8c27-d0180c3ea00b",
                                    "type": "lunch",
                                    "restaurant_name": "Local Specialty Restaurant",
                                    "description": "Authentic local cuisine",
                                    "cuisine": "Indian",
                                    "location": {
                                        "name": "Local Specialty Restaurant",
                                        "address": "Local Specialty Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.6097202422174,
                                        "longitude": 77.20618714528848
                                    },
                                    "start_time": "13:00",
                                    "cost": 600,
                                    "cost_per_person": 600,
                                    "rating": 4.3232903,
                                    "review_count": 81,
                                    "specialties": [
                                        "Regional Thali",
                                        "Local Sweets"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": false
                                }
                            },
                            {
                                "id": "58b44a21-51ab-4875-90c3-3e6c19184aee",
                                "event_type": "activity",
                                "start_time": "14:00",
                                "end_time": "16:00",
                                "activity": {
                                    "id": "58b44a21-51ab-4875-90c3-3e6c19184aee",
                                    "name": "Market Visit",
                                    "description": "Visit local markets for shopping and cultural experience",
                                    "category": "shopping",
                                    "type": "market",
                                    "location": {
                                        "name": "Market Visit",
                                        "address": "Market Visit, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.612964688649736,
                                        "longitude": 77.20999917167715
                                    },
                                    "start_time": "14:00",
                                    "end_time": "16:00",
                                    "duration": "2h",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "booking_required": false,
                                    "rating": 4.1842084,
                                    "review_count": 589,
                                    "opening_hours": "09:00 - 18:00",
                                    "priority": 4
                                }
                            },
                            {
                                "id": "c50b73ff-da80-4f9d-af8d-b96fcf8a404d",
                                "event_type": "meal",
                                "start_time": "20:00",
                                "meal": {
                                    "id": "c50b73ff-da80-4f9d-af8d-b96fcf8a404d",
                                    "type": "dinner",
                                    "restaurant_name": "Rooftop Restaurant",
                                    "description": "Great views and variety of cuisines",
                                    "cuisine": "Multi-cuisine",
                                    "location": {
                                        "name": "Rooftop Restaurant",
                                        "address": "Rooftop Restaurant, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61609075689939,
                                        "longitude": 77.21323855763184
                                    },
                                    "start_time": "20:00",
                                    "reservation_time": "20:00",
                                    "cost": 960,
                                    "cost_per_person": 960,
                                    "rating": 4.98036,
                                    "review_count": 340,
                                    "specialties": [
                                        "North Indian",
                                        "Chinese"
                                    ],
                                    "dietary_info": [
                                        "vegetarian",
                                        "dairy-friendly"
                                    ],
                                    "booking_required": true,
                                    "booking_url": "https://reservation.example.com/restaurant/c50b73ff-da80-4f9d-af8d-b96fcf8a404d"
                                }
                            },
                            {
                                "id": "ab70fbbc-2ff0-46df-8722-e4f62d265098",
                                "event_type": "transport",
                                "transport": {
                                    "id": "ab70fbbc-2ff0-46df-8722-e4f62d265098",
                                    "mode": "walk",
                                    "from_location": {
                                        "name": "Main Market",
                                        "address": "Main Market, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.60654951788495,
                                        "longitude": 77.20135868136332
                                    },
                                    "to_location": {
                                        "name": "Railway Station",
                                        "address": "Railway Station, Mysuru, Karnataka, India",
                                        "city": "Mysuru, Karnataka, India",
                                        "state": "India",
                                        "country": "India",
                                        "latitude": 28.61042336720745,
                                        "longitude": 77.21746227826438
                                    },
                                    "duration": "15m",
                                    "cost": 0,
                                    "cost_per_person": 0,
                                    "description": "Walking distance - enjoy the local atmosphere"
                                }
                            }
                        ],
                        "daily_cost": 2528.430004364059,
                        "weather": {
                            "date": "2025-11-05",
                            "min_temp": 12.711419258946803,
                            "max_temp": 27.908974827173985,
                            "condition": "sunny",
                            "description": "Clear skies with pleasant temperature",
                            "humidity": 54.38396354744018,
                            "precipitation": 0,
                            "recommendation": "Perfect weather for outdoor activities"
                        },
                        "notes": [
                            "Pack souvenirs carefully",
                            "Check flight/train timings",
                            "Keep important documents ready",
                            "Stay hydrated throughout the day",
                            "Keep emergency contacts handy"
                        ]
                    }
                ],
                "accommodations": [
                    {
                        "id": "8b2791d9-7dbe-46bc-be54-a81be847fa82",
                        "name": "Heritage Hotel Mysuru, Karnataka, India",
                        "type": "hotel",
                        "description": "Well-appointed mid-range hotel in Mysuru, Karnataka, India offering modern amenities and good service for a comfortable stay.",
                        "location": {
                            "name": "Hotel Area",
                            "address": "Hotel District, Mysuru, Karnataka, India",
                            "city": "Mysuru, Karnataka, India",
                            "state": "India",
                            "country": "India",
                            "latitude": 28.6139,
                            "longitude": 77.209
                        },
                        "check_in_date": "2025-11-03",
                        "check_out_date": "2025-11-05",
                        "nights": 2,
                        "room_type": "Single Room",
                        "guests": 1,
                        "cost_per_night": 3557.307390684993,
                        "total_cost": 7114.614781369986,
                        "rating": 4.224792,
                        "review_count": 765,
                        "amenities": [
                            "Free WiFi",
                            "Restaurant",
                            "Room service",
                            "Air conditioning",
                            "Parking",
                            "24-hour front desk"
                        ],
                        "check_in_time": "14:00",
                        "check_out_time": "11:00",
                        "booking_url": "https://booking.example.com/hotel/7105b006-0f4e-474a-97bf-ee1e54b27102",
                        "cancellation_info": "Free cancellation up to 24 hours before check-in"
                    }
                ],
                "generated_at": "2025-11-02T12:43:39.95768Z",
                "ai_model": "Mock Generator v1.0 (Fallback)",
                "language": "en",
                "highlight_activities": [
                    "Must-visit landmark tour",
                    "Local cultural experience",
                    "Authentic cuisine tasting",
                    "Scenic photography spots",
                    "Hidden gems exploration",
                    "Historical monument visits"
                ],
                "local_insights": [
                    "Best time to visit popular attractions is early morning to avoid crowds",
                    "Local markets offer the most authentic shopping experience",
                    "Try street food from recommended vendors for genuine local flavors",
                    "Respect local customs and dress codes, especially at religious sites",
                    "Bargaining is common in local markets but not in fixed-price stores"
                ],
                "weather_info": {
                    "season": "Winter",
                    "description": "Cool and pleasant weather, ideal for sightseeing",
                    "avg_min_temp": 15,
                    "avg_max_temp": 25,
                    "recommendation": "Pack light woollens and comfortable walking shoes"
                }
            }
        ],
        "total": 248
    },
    "timestamp": "2025-11-02T13:58:42.17527728Z"
}