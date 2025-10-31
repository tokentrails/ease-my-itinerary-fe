/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import ItineraryForm from "./itineraryForm";
import type { Trip } from "../../Helper/ApiResponseInterface";
import ItineraryInfo from "./ItineraryInfo";
import { useSelector } from "react-redux";

import { useFormik } from "formik";
import moment from "moment";

import { UsetInfo } from "../../Store/user-slice";
import { useNavigate } from "react-router-dom";
import { streamApiCaller } from "../../utils/apiCall";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import TempleBuddhistOutlinedIcon from "@mui/icons-material/TempleBuddhistOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import KitesurfingOutlinedIcon from "@mui/icons-material/KitesurfingOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import { CircularProgress } from "@mui/material";
import { validationSchema } from "./ItineraryFormValidation";

interface TripFormValues {
  budget: string;
  days: string;
  source: string;
  destination: string;
  interests: string[];
  traveler_count: string;
  end_date: string;
  start_date: string;
  travel_style: string;
  meal_preference: string;
  transport_mode: string[];
  accommodationType: string[];
  special_requests: string;
}

const ItineraryMain = () => {
  const [loading, setLoading] = useState(false);
  const [streamedData, setStreamedData] = useState<any | null>({
    type: "stage_complete",
    progress: 87,
    message: "All costs calculated!",
    data: {
      id: "df5fb32c-4aac-4ec0-8c0f-32b48c36dd74",
      source: "chikkamagaluru",
      destination: "Goa",
      start_date: "2025-12-20",
      end_date: "2025-12-23",
      duration_days: 4,
      traveler_count: 2,
      travel_style: "mid-range",
      budget: 50000,
      saved: -8960,
      total_cost: 58960,
      cost_per_person: 29480,
      budget_breakdown: {
        accommodation: 24000,
        transport: 9000,
        activities: 11100,
        meals: 9500,
        miscellaneous: 5360,
      },
      day_plans: [
        {
          day_number: 1,
          date: "2025-12-20",
          title: "Arrival in Goa & North Goa Beach Nightlife",
          description:
            "Arrive in the vibrant state of Goa via a scenic self-drive through the Western Ghats. Check into your accommodation in North Goa and kickstart your trip with the famous beach shacks and lively nightlife of Baga.",
          events: [
            {
              id: "day1-transport-arrival",
              event_type: "transport",
              start_time: "07:00",
              end_time: "16:00",
              transport: {
                id: "",
                mode: "car",
                from_location: {
                  name: "Chikkamagaluru City Center",
                  address: "Chikkamagaluru City, Karnataka",
                  city: "Chikkamagaluru",
                  state: "",
                  country: "",
                  latitude: 13.316885,
                  longitude: 75.772099,
                },
                to_location: {
                  name: "Goa Suites & Villas",
                  address:
                    "Goa-Suites, Aqua Grandiosa Apt Laxmi Narayan Road, Mainath Bhati Arpora, North Goa Arpora goasuites@gmail.com",
                  city: "Goa",
                  state: "",
                  country: "",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                duration: "9h 0m",
                cost: 4500,
                cost_per_person: 2250,
                description:
                  "Scenic self-drive journey from Chikkamagaluru to North Goa. This cost is for the one-way journey, assuming the car is retained for the entire trip's local transport needs.",
                booking_url: "https://www.easemytrip.com/cabs",
                carrier: "Local Car Rental Service",
                service_class: "Mid-range Sedan",
                vehicle_number:
                  "Self-Drive Sedan (e.g., Maruti Ciaz, Honda City)",
                route_type: "Direct",
              },
            },
            {
              id: "day1-accommodation-checkin",
              event_type: "activity",
              start_time: "16:00",
              end_time: "17:30",
              activity: {
                id: "",
                name: "Check-in at Goa Suites & Villas",
                description:
                  "Settle into your spacious service apartment suite near Baga beach, offering a comfortable base for your North Goa adventures.",
                category: "Accommodation",
                type: "Hotel Check-in",
                location: {
                  name: "Goa Suites & Villas | Service Apartment Suites near Baga beach",
                  address:
                    "Goa-Suites, Aqua Grandiosa Apt Laxmi Narayan Road, Mainath Bhati Arpora, North Goa Arpora goasuites@gmail.com",
                  city: "Goa",
                  state: "Goa",
                  country: "India",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                start_time: "",
                end_time: "",
                duration: "1h 30m",
                cost: 0,
                cost_per_person: 0,
                booking_required: false,
                rating: 4.8,
                review_count: 114,
                tips: ["Confirm check-in details prior to arrival."],
                opening_hours: "Open 24 hours",
                priority: 1,
              },
            },
            {
              id: "day1-activity-baga-beach-relaxation",
              event_type: "activity",
              start_time: "17:30",
              end_time: "19:00",
              activity: {
                id: "",
                name: "Relax at Baga Beach",
                description:
                  "Enjoy the lively atmosphere of Baga Beach, take a stroll along the shore, and witness the beautiful sunset.",
                category: "Beach",
                type: "Leisure",
                location: {
                  name: "Baga Beach",
                  address: "Baga, Goa 403516, India",
                  city: "Goa",
                  state: "Goa",
                  country: "India",
                  latitude: 15.565863,
                  longitude: 73.754701,
                },
                start_time: "",
                end_time: "",
                duration: "1h 30m",
                cost: 0,
                cost_per_person: 0,
                booking_required: false,
                rating: 4.5,
                review_count: 100000,
                tips: ["Wear comfortable footwear and be aware of vendors."],
                opening_hours: "Open 24 hours",
                priority: 2,
              },
            },
            {
              id: "day1-meal-dinner",
              event_type: "meal",
              start_time: "19:30",
              meal: {
                id: "",
                type: "dinner",
                restaurant_name: "De Little Goa",
                description:
                  "Savor delicious seafood and authentic Goan curries in a modest setting with open-air seating, characteristic of a Goan beach shack.",
                cuisine: "Seafood, Goan, Thai",
                location: {
                  name: "De Little Goa",
                  address:
                    "near St. Alex Church, Naikka Waddo, Calangute, Goa 403516, India",
                  city: "Calangute",
                  state: "Goa",
                  country: "India",
                  latitude: 15.543865,
                  longitude: 73.769184,
                },
                reservation_time: "19:30",
                end_time: "21:00",
                cost: 1200,
                cost_per_person: 600,
                rating: 4.2,
                review_count: 3138,
                specialties: ["Goan Fish Curry", "Prawn Balchão"],
                dietary_info: ["Vegetarian options available"],
                booking_required: false,
              },
            },
            {
              id: "day1-activity-titos-lane-nightlife",
              event_type: "activity",
              start_time: "21:00",
              end_time: "23:00",
              activity: {
                id: "",
                name: "Explore Tito's Lane Nightlife",
                description:
                  "Experience the famous vibrant nightlife of Goa at Tito's Lane, home to popular clubs and bars. Enjoy music and dancing.",
                category: "Nightlife",
                type: "Clubbing/Pub crawl",
                location: {
                  name: "Tito's Lane",
                  address: "Tito's Lane, Baga, Goa 403516, India",
                  city: "Baga",
                  state: "Goa",
                  country: "India",
                  latitude: 15.565319,
                  longitude: 73.755437,
                },
                start_time: "",
                end_time: "",
                duration: "2h 0m",
                cost: 1500,
                cost_per_person: 750,
                booking_required: false,
                rating: 4,
                review_count: 50000,
                tips: [
                  "Dress appropriately for clubs, be aware of entry fees and cover charges.",
                  "Stay hydrated and arrange for safe transport back to accommodation.",
                ],
                opening_hours: "Typically 20:00 - late night",
                priority: 1,
              },
            },
          ],
          daily_cost: 7200,
        },
        {
          day_number: 2,
          date: "2025-12-21",
          title: "Thrilling Water Sports & Arpora Saturday Night Market",
          description:
            "Dedicate your day to adrenaline-pumping water sports on the lively beaches of North Goa, followed by relaxation under the sun. Conclude the day with a unique shopping and cultural experience at the famous Arpora Saturday Night Market.",
          events: [
            {
              id: "day2-meal-breakfast",
              event_type: "meal",
              start_time: "08:00",
              meal: {
                id: "",
                type: "breakfast",
                restaurant_name: "Local Cafe near Goa Suites & Villas",
                description:
                  "Enjoy a light breakfast at a local cafe near your accommodation.",
                cuisine: "Indian, Continental",
                location: {
                  name: "Local Cafe, Arpora",
                  address:
                    "Near Aqua Grandiosa Apt, Mainath Bhati Arpora, North Goa",
                  city: "Arpora",
                  state: "Goa",
                  country: "India",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                reservation_time: "08:00",
                end_time: "09:00",
                cost: 400,
                cost_per_person: 200,
                rating: 0,
                review_count: 0,
                booking_required: false,
              },
            },
            {
              id: "day2-activity-water-sports",
              event_type: "activity",
              start_time: "09:30",
              end_time: "12:30",
              activity: {
                id: "",
                name: "Water Sports at Calangute Beach",
                description:
                  "Indulge in thrilling water sports like parasailing, jet skiing, and banana boat rides at Calangute Beach, one of Goa's most popular sports hubs.",
                category: "Sports",
                type: "Adventure Sports",
                location: {
                  name: "Calangute Beach",
                  address: "Calangute, Goa 403516, India",
                  city: "Calangute",
                  state: "Goa",
                  country: "India",
                  latitude: 15.545863,
                  longitude: 73.754701,
                },
                start_time: "",
                end_time: "",
                duration: "3h 0m",
                cost: 5000,
                cost_per_person: 2500,
                booking_required: true,
                rating: 4.4,
                review_count: 70000,
                tips: [
                  "Book water sports packages in advance for better deals.",
                  "Wear appropriate swimwear and listen to instructors.",
                ],
                opening_hours: "Typically 09:00 - 18:00",
                priority: 1,
              },
            },
            {
              id: "day2-meal-lunch",
              event_type: "meal",
              start_time: "13:00",
              meal: {
                id: "",
                type: "lunch",
                restaurant_name: "Beach Shack at Calangute",
                description:
                  "Enjoy a casual lunch at one of the many beach shacks offering fresh seafood and local delicacies.",
                cuisine: "Goan, Indian, Seafood",
                location: {
                  name: "Calangute Beach Shack",
                  address: "Calangute Beach, Goa 403516, India",
                  city: "Calangute",
                  state: "Goa",
                  country: "India",
                  latitude: 15.545863,
                  longitude: 73.754701,
                },
                reservation_time: "13:00",
                end_time: "14:00",
                cost: 1000,
                cost_per_person: 500,
                rating: 4,
                review_count: 1000,
                specialties: ["Prawn Curry", "Fried Fish"],
                dietary_info: ["Vegetarian options available"],
                booking_required: false,
              },
            },
            {
              id: "day2-activity-vagator-beach-relaxation",
              event_type: "activity",
              start_time: "14:30",
              end_time: "17:00",
              activity: {
                id: "",
                name: "Relaxation at Vagator Beach",
                description:
                  "Unwind and sunbathe at Vagator Beach, known for its dramatic red cliffs and soft white sands. Enjoy the serene beauty and perhaps a refreshing drink.",
                category: "Beach",
                type: "Leisure",
                location: {
                  name: "Vagator Beach",
                  address: "Vagator, Goa 403509, India",
                  city: "Vagator",
                  state: "Goa",
                  country: "India",
                  latitude: 15.6025,
                  longitude: 73.734,
                },
                start_time: "",
                end_time: "",
                duration: "2h 30m",
                cost: 0,
                cost_per_person: 0,
                booking_required: false,
                rating: 4.5,
                review_count: 40000,
                tips: [
                  "Carry a beach towel and extra water.",
                  "Be cautious of strong currents if swimming.",
                ],
                opening_hours: "Open 24 hours",
                priority: 2,
              },
            },
            {
              id: "day2-activity-arpora-night-market",
              event_type: "activity",
              start_time: "18:00",
              end_time: "21:00",
              activity: {
                id: "",
                name: "Explore Arpora Saturday Night Market",
                description:
                  "Immerse yourself in the vibrant atmosphere of the Arpora Saturday Night Market (also known as Mackie's Night Bazaar or Ingo's Saturday Night Market), offering a mix of shopping, live music, international food stalls, and entertainment.",
                category: "Market",
                type: "Shopping & Entertainment",
                location: {
                  name: "Arpora Saturday Night Market",
                  address: "Arpora, Goa 403516, India",
                  city: "Arpora",
                  state: "Goa",
                  country: "India",
                  latitude: 15.568478,
                  longitude: 73.771971,
                },
                start_time: "",
                end_time: "",
                duration: "3h 0m",
                cost: 500,
                cost_per_person: 250,
                booking_required: false,
                rating: 4.4,
                review_count: 30000,
                tips: [
                  "Bargain for goods, try different food from various stalls.",
                  "It can get very crowded, especially later in the evening.",
                ],
                opening_hours: "Saturday: 18:00 - 00:00 (approx)",
                priority: 1,
              },
            },
            {
              id: "day2-meal-dinner",
              event_type: "meal",
              start_time: "21:00",
              meal: {
                id: "",
                type: "dinner",
                restaurant_name: "Pisco - By the Beach",
                description:
                  "Enjoy a delightful dinner at Pisco, known for its beautiful beachside ambiance, delicious food, and live music. Perfect for a relaxed evening after the market.",
                cuisine: "Continental, Indian, Seafood",
                location: {
                  name: "Pisco - By the Beach",
                  address:
                    "St Michael Vaddo, Flea Market, Monteiro Vaddo, Anjuna, Goa 403509, India",
                  city: "Anjuna",
                  state: "Goa",
                  country: "India",
                  latitude: 15.57175,
                  longitude: 73.741768,
                },
                reservation_time: "21:00",
                end_time: "22:30",
                cost: 2000,
                cost_per_person: 1000,
                rating: 4.7,
                review_count: 4724,
                specialties: ["Seafood Platter", "Cocktails"],
                dietary_info: ["Vegetarian options available"],
                booking_required: false,
              },
            },
          ],
          daily_cost: 8900,
        },
        {
          day_number: 3,
          date: "2025-12-22",
          title: "Old Goa Heritage & Mandovi Sunset Cruise",
          description:
            "Explore the rich Portuguese heritage of Old Goa by visiting its iconic churches, followed by a relaxing sunset cruise on the Mandovi River, complete with live entertainment.",
          events: [
            {
              id: "day3-meal-breakfast",
              event_type: "meal",
              start_time: "08:00",
              meal: {
                id: "",
                type: "breakfast",
                restaurant_name: "Local Cafe near Goa Suites & Villas",
                description:
                  "Start your day with a local breakfast at a nearby cafe.",
                cuisine: "Indian, Continental",
                location: {
                  name: "Local Cafe, Arpora",
                  address:
                    "Near Aqua Grandiosa Apt, Mainath Bhati Arpora, North Goa",
                  city: "Arpora",
                  state: "Goa",
                  country: "India",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                reservation_time: "08:00",
                end_time: "09:00",
                cost: 400,
                cost_per_person: 200,
                rating: 0,
                review_count: 0,
                booking_required: false,
              },
            },
            {
              id: "day3-transport-to-old-goa",
              event_type: "transport",
              start_time: "09:00",
              end_time: "09:30",
              transport: {
                id: "",
                mode: "car",
                from_location: {
                  name: "Goa Suites & Villas",
                  address:
                    "Goa-Suites, Aqua Grandiosa Apt Laxmi Narayan Road, Mainath Bhati Arpora, North Goa Arpora goasuites@gmail.com",
                  city: "Goa",
                  state: "",
                  country: "",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                to_location: {
                  name: "Old Goa Churches",
                  address: "Old Goa, Goa, India",
                  city: "Goa",
                  state: "",
                  country: "",
                  latitude: 15.5,
                  longitude: 73.916667,
                },
                duration: "30m",
                cost: 0,
                cost_per_person: 0,
                description: "Drive to Old Goa from Arpora.",
                carrier: "Self-drive",
                service_class: "N/A",
                vehicle_number: "N/A",
                route_type: "Direct",
              },
            },
            {
              id: "day3-activity-old-goa-churches",
              event_type: "activity",
              start_time: "09:30",
              end_time: "12:30",
              activity: {
                id: "",
                name: "Visit Historic Churches of Old Goa",
                description:
                  "Explore the UNESCO World Heritage sites in Old Goa, including the Basilica of Bom Jesus (housing the relics of St. Francis Xavier) and the Se Cathedral, showcasing stunning Portuguese architecture.",
                category: "Historical Site",
                type: "Cultural Exploration",
                location: {
                  name: "Basilica of Bom Jesus",
                  address: "Old Goa Rd, Bainguinim, Goa 403402, India",
                  city: "Old Goa",
                  state: "Goa",
                  country: "India",
                  latitude: 15.5,
                  longitude: 73.916667,
                },
                start_time: "",
                end_time: "",
                duration: "3h 0m",
                cost: 100,
                cost_per_person: 50,
                booking_required: false,
                rating: 4.7,
                review_count: 60000,
                tips: [
                  "Dress modestly as these are religious sites.",
                  "Hire a local guide for deeper insights into the history.",
                ],
                opening_hours:
                  "Basilica: 09:00 - 18:30 (Sunday), 08:30 - 18:30 (Mon-Sat). Se Cathedral: 07:30 - 18:00",
                priority: 1,
              },
            },
            {
              id: "day3-meal-lunch",
              event_type: "meal",
              start_time: "13:00",
              meal: {
                id: "",
                type: "lunch",
                restaurant_name: "Copperleaf Panaji",
                description:
                  "Enjoy a traditional Goan lunch at Copperleaf Panaji, known for its exquisite seafood and Indian cuisine.",
                cuisine: "Seafood, Indian",
                location: {
                  name: "Copperleaf Panaji",
                  address:
                    "Ground Floor, Esmeralda Casa de Povo, Santa Inez, Taleigao, Panaji, Goa 403002, India",
                  city: "Panaji",
                  state: "Goa",
                  country: "India",
                  latitude: 15.482128,
                  longitude: 73.820071,
                },
                reservation_time: "13:00",
                end_time: "14:30",
                cost: 1500,
                cost_per_person: 750,
                rating: 4.6,
                review_count: 3747,
                specialties: ["Goan Thali", "Prawn Rawa Fry"],
                dietary_info: ["Vegetarian options available"],
                booking_required: false,
              },
            },
            {
              id: "day3-transport-to-cruise",
              event_type: "transport",
              start_time: "15:30",
              end_time: "16:00",
              transport: {
                id: "",
                mode: "car",
                from_location: {
                  name: "Copperleaf Panaji",
                  address:
                    "Ground Floor, Esmeralda Casa de Povo, Santa Inez, Taleigao, Panaji, Goa 403002, India",
                  city: "Panaji",
                  state: "",
                  country: "",
                  latitude: 15.482128,
                  longitude: 73.820071,
                },
                to_location: {
                  name: "Mandovi River Cruise Point",
                  address: "Santa Monica Jetty, Panaji, Goa, India",
                  city: "Panaji",
                  state: "",
                  country: "",
                  latitude: 15.498877,
                  longitude: 73.824967,
                },
                duration: "30m",
                cost: 0,
                cost_per_person: 0,
                description:
                  "Drive to the Mandovi River cruise departure point.",
                carrier: "Self-drive",
                service_class: "N/A",
                vehicle_number: "N/A",
                route_type: "Direct",
              },
            },
            {
              id: "day3-activity-mandovi-sunset-cruise",
              event_type: "activity",
              start_time: "16:00",
              end_time: "18:00",
              activity: {
                id: "",
                name: "Mandovi River Sunset Cruise",
                description:
                  "Enjoy a serene sunset cruise on the Mandovi River, offering picturesque views of Panaji, local Goan folk dances, and live music. A perfect way to relax and take in the beauty of Goa.",
                category: "Entertainment",
                type: "Boat Cruise",
                location: {
                  name: "Mandovi River Cruise",
                  address: "Santa Monica Jetty, Panaji, Goa, India",
                  city: "Panaji",
                  state: "Goa",
                  country: "India",
                  latitude: 15.498877,
                  longitude: 73.824967,
                },
                start_time: "",
                end_time: "",
                duration: "2h 0m",
                cost: 1500,
                cost_per_person: 750,
                booking_required: true,
                rating: 4.2,
                review_count: 15000,
                tips: [
                  "Arrive early to get good seats.",
                  "Carry a light jacket as it can get breezy after sunset.",
                ],
                opening_hours: "Typically 16:00 - 19:00 for sunset cruises",
                priority: 1,
              },
            },
            {
              id: "day3-transport-to-dinner",
              event_type: "transport",
              start_time: "18:30",
              end_time: "19:00",
              transport: {
                id: "",
                mode: "car",
                from_location: {
                  name: "Mandovi River Cruise Point",
                  address: "Santa Monica Jetty, Panaji, Goa, India",
                  city: "Panaji",
                  state: "",
                  country: "",
                  latitude: 15.498877,
                  longitude: 73.824967,
                },
                to_location: {
                  name: "Miri | Global Fusion Dining",
                  address:
                    "FRJ8+WCG Hotel Sunheads, St. Mary's Colony, lane no 3, Nalanda Colony, Miramar, Panaji, Goa 403001, India",
                  city: "Panaji",
                  state: "",
                  country: "",
                  latitude: 15.484645,
                  longitude: 73.812616,
                },
                duration: "30m",
                cost: 0,
                cost_per_person: 0,
                description: "Drive to the dinner location in Panaji.",
                carrier: "Self-drive",
                service_class: "N/A",
                vehicle_number: "N/A",
                route_type: "Direct",
              },
            },
            {
              id: "day3-meal-dinner",
              event_type: "meal",
              start_time: "19:30",
              meal: {
                id: "",
                type: "dinner",
                restaurant_name:
                  "Miri | Global Fusion Dining | Miramar, Panjim",
                description:
                  "Dine at Miri, offering a global fusion menu in a stylish setting with live music, perfect for a mid-range dining experience.",
                cuisine: "Global Fusion",
                location: {
                  name: "Miri | Global Fusion Dining | Miramar, Panjim",
                  address:
                    "FRJ8+WCG Hotel Sunheads, St. Mary's Colony, lane no 3, Nalanda Colony, Miramar, Panaji, Goa 403001, India",
                  city: "Panaji",
                  state: "Goa",
                  country: "India",
                  latitude: 15.484645,
                  longitude: 73.812616,
                },
                reservation_time: "19:30",
                end_time: "21:00",
                cost: 1800,
                cost_per_person: 900,
                rating: 4.6,
                review_count: 1328,
                specialties: ["Fusion dishes", "Cocktails"],
                dietary_info: ["Vegetarian options available"],
                booking_required: false,
              },
            },
            {
              id: "day3-transport-return-accommodation",
              event_type: "transport",
              start_time: "21:00",
              end_time: "21:45",
              transport: {
                id: "",
                mode: "car",
                from_location: {
                  name: "Miri | Global Fusion Dining",
                  address:
                    "FRJ8+WCG Hotel Sunheads, St. Mary's Colony, lane no 3, Nalanda Colony, Miramar, Panaji, Goa 403001, India",
                  city: "Panaji",
                  state: "",
                  country: "",
                  latitude: 15.484645,
                  longitude: 73.812616,
                },
                to_location: {
                  name: "Goa Suites & Villas",
                  address:
                    "Goa-Suites, Aqua Grandiosa Apt Laxmi Narayan Road, Mainath Bhati Arpora, North Goa Arpora goasuites@gmail.com",
                  city: "Goa",
                  state: "",
                  country: "",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                duration: "45m",
                cost: 0,
                cost_per_person: 0,
                description: "Drive back to accommodation in Arpora.",
                carrier: "Self-drive",
                service_class: "N/A",
                vehicle_number: "N/A",
                route_type: "Direct",
              },
            },
          ],
          daily_cost: 3800,
        },
        {
          day_number: 4,
          date: "2025-12-23",
          title: "Dolphin Spotting & Departure",
          description:
            "Enjoy a thrilling morning dolphin spotting trip, visit the historic Fort Aguada, and then begin your return journey to Chikkamagaluru, concluding your memorable Goa trip.",
          events: [
            {
              id: "day4-meal-breakfast",
              event_type: "meal",
              start_time: "07:00",
              meal: {
                id: "",
                type: "breakfast",
                restaurant_name: "Local Cafe near Goa Suites & Villas",
                description:
                  "Grab a quick breakfast before heading out for dolphin spotting.",
                cuisine: "Indian, Continental",
                location: {
                  name: "Local Cafe, Arpora",
                  address:
                    "Near Aqua Grandiosa Apt, Mainath Bhati Arpora, North Goa",
                  city: "Arpora",
                  state: "Goa",
                  country: "India",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                reservation_time: "07:00",
                end_time: "07:45",
                cost: 400,
                cost_per_person: 200,
                rating: 0,
                review_count: 0,
                booking_required: false,
              },
            },
            {
              id: "day4-transport-to-dolphin-spotting",
              event_type: "transport",
              start_time: "07:45",
              end_time: "08:00",
              transport: {
                id: "",
                mode: "car",
                from_location: {
                  name: "Goa Suites & Villas",
                  address:
                    "Goa-Suites, Aqua Grandiosa Apt Laxmi Narayan Road, Mainath Bhati Arpora, North Goa Arpora goasuites@gmail.com",
                  city: "Goa",
                  state: "",
                  country: "",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                to_location: {
                  name: "Sinquerim Beach (Dolphin Spotting Point)",
                  address: "Sinquerim Beach, Candolim, Goa, India",
                  city: "Goa",
                  state: "",
                  country: "",
                  latitude: 15.5,
                  longitude: 73.774,
                },
                duration: "15m",
                cost: 0,
                cost_per_person: 0,
                description:
                  "Drive to Sinquerim Beach for the dolphin spotting trip.",
                carrier: "Self-drive",
                service_class: "N/A",
                vehicle_number: "N/A",
                route_type: "Direct",
              },
            },
            {
              id: "day4-activity-dolphin-spotting",
              event_type: "activity",
              start_time: "08:00",
              end_time: "10:00",
              activity: {
                id: "",
                name: "Dolphin Spotting Trip from Sinquerim Beach",
                description:
                  "Embark on an exciting boat trip from Sinquerim Beach to spot playful dolphins in their natural habitat. Enjoy the serene morning waters of the Arabian Sea.",
                category: "Wildlife",
                type: "Boat Tour",
                location: {
                  name: "Sinquerim Beach",
                  address: "Sinquerim Beach, Candolim, Goa, India",
                  city: "Candolim",
                  state: "Goa",
                  country: "India",
                  latitude: 15.5,
                  longitude: 73.774,
                },
                start_time: "",
                end_time: "",
                duration: "2h 0m",
                cost: 1500,
                cost_per_person: 750,
                booking_required: true,
                rating: 4,
                review_count: 10000,
                tips: [
                  "Book your trip in advance, especially during peak season.",
                  "Carry a camera for memorable shots and sunscreen.",
                ],
                opening_hours:
                  "Early morning (08:00 - 10:00) is best for dolphin sightings",
                priority: 1,
              },
            },
            {
              id: "day4-transport-to-fort-aguada",
              event_type: "transport",
              start_time: "10:00",
              end_time: "10:15",
              transport: {
                id: "",
                mode: "car",
                from_location: {
                  name: "Sinquerim Beach",
                  address: "Sinquerim Beach, Candolim, Goa, India",
                  city: "Candolim",
                  state: "",
                  country: "",
                  latitude: 15.5,
                  longitude: 73.774,
                },
                to_location: {
                  name: "Fort Aguada",
                  address:
                    "Fort Aguada Rd, Aguada Fort Area, Candolim, Goa 403515, India",
                  city: "Candolim",
                  state: "",
                  country: "",
                  latitude: 15.492252,
                  longitude: 73.773746,
                },
                duration: "15m",
                cost: 0,
                cost_per_person: 0,
                description: "Short drive to Fort Aguada.",
                carrier: "Self-drive",
                service_class: "N/A",
                vehicle_number: "N/A",
                route_type: "Direct",
              },
            },
            {
              id: "day4-activity-fort-aguada",
              event_type: "activity",
              start_time: "10:30",
              end_time: "12:00",
              activity: {
                id: "",
                name: "Visit Fort Aguada",
                description:
                  "Explore the historic 17th-century Portuguese Fort Aguada, offering panoramic ocean views and home to an old lighthouse. A great spot for history buffs and photography.",
                category: "Historical Site",
                type: "Sightseeing",
                location: {
                  name: "Fort Aguada",
                  address:
                    "Fort Aguada Rd, Aguada Fort Area, Candolim, Goa 403515, India",
                  city: "Candolim",
                  state: "Goa",
                  country: "India",
                  latitude: 15.492252,
                  longitude: 73.773746,
                },
                start_time: "",
                end_time: "",
                duration: "1h 30m",
                cost: 0,
                cost_per_person: 0,
                booking_required: false,
                rating: 4.2,
                review_count: 106619,
                tips: [
                  "Wear comfortable shoes as there's a fair bit of walking.",
                  "Visit during cooler parts of the day.",
                ],
                opening_hours: "09:30 - 18:00",
                priority: 1,
              },
            },
            {
              id: "day4-meal-lunch",
              event_type: "meal",
              start_time: "12:30",
              meal: {
                id: "",
                type: "lunch",
                restaurant_name: "Local Beach Shack / Restaurant (Candolim)",
                description:
                  "Enjoy a quick and casual lunch at a local eatery or beach shack in Candolim before starting your journey back.",
                cuisine: "Goan, Indian",
                location: {
                  name: "Local Restaurant, Candolim",
                  address: "Candolim Beach Road, Candolim, Goa, India",
                  city: "Candolim",
                  state: "Goa",
                  country: "India",
                  latitude: 15.510642,
                  longitude: 73.76982,
                },
                reservation_time: "12:30",
                end_time: "13:30",
                cost: 800,
                cost_per_person: 400,
                rating: 4,
                review_count: 500,
                booking_required: false,
              },
            },
            {
              id: "day4-activity-souvenir-shopping",
              event_type: "activity",
              start_time: "14:00",
              end_time: "15:00",
              activity: {
                id: "",
                name: "Last-minute Souvenir Shopping",
                description:
                  "Pick up some last-minute souvenirs or local handicrafts from the shops around Candolim or Arpora.",
                category: "Shopping",
                type: "Leisure",
                location: {
                  name: "Local Shops, Candolim/Arpora",
                  address: "Market Road, Candolim, Goa, India",
                  city: "Candolim",
                  state: "Goa",
                  country: "India",
                  latitude: 15.510642,
                  longitude: 73.76982,
                },
                start_time: "",
                end_time: "",
                duration: "1h 0m",
                cost: 1000,
                cost_per_person: 500,
                booking_required: false,
                rating: 0,
                review_count: 0,
                tips: ["Bargain politely for better prices."],
                opening_hours: "Typically 10:00 - 20:00",
                priority: 3,
              },
            },
            {
              id: "day4-transport-departure",
              event_type: "transport",
              start_time: "15:00",
              end_time: "00:00",
              transport: {
                id: "",
                mode: "car",
                from_location: {
                  name: "Goa Suites & Villas",
                  address:
                    "Goa-Suites, Aqua Grandiosa Apt Laxmi Narayan Road, Mainath Bhati Arpora, North Goa Arpora goasuites@gmail.com",
                  city: "Goa",
                  state: "",
                  country: "",
                  latitude: 15.570256,
                  longitude: 73.767995,
                },
                to_location: {
                  name: "Chikkamagaluru City Center",
                  address: "Chikkamagaluru City, Karnataka",
                  city: "Chikkamagaluru",
                  state: "",
                  country: "",
                  latitude: 13.316885,
                  longitude: 75.772099,
                },
                duration: "9h 0m",
                cost: 4500,
                cost_per_person: 2250,
                description:
                  "Return journey by self-drive car from Goa to Chikkamagaluru.",
                booking_url: "https://www.easemytrip.com/cabs",
                carrier: "Local Car Rental Service",
                service_class: "Mid-range Sedan",
                vehicle_number:
                  "Self-Drive Sedan (e.g., Maruti Ciaz, Honda City)",
                route_type: "Direct",
              },
            },
          ],
          daily_cost: 8200,
        },
      ],
      accommodations: [
        {
          id: "goa-suites-villas",
          name: "Goa Suites & Villas | Service Apartment Suites near Baga beach",
          type: "service apartment suite",
          description:
            "Highly-rated service apartment suites offering comfortable mid-range accommodation near the vibrant Baga beach. Ideal for travelers interested in nightlife, beaches, and water sports due to its strategic North Goa location. The property is operational 24 hours a day. Contact: +91 70200 85585. Website: https://connectbooker.com/securebooking.aspx?Hotelid=10661.",
          location: {
            name: "Arpora, North Goa",
            address:
              "Goa-Suites, Aqua Grandiosa Apt Laxmi Narayan Road, Mainath Bhati Arpora, North Goa Arpora",
            city: "Goa",
            state: "Goa",
            country: "India",
            latitude: 15.570256,
            longitude: 73.767995,
          },
          check_in_date: "2025-12-20",
          check_out_date: "2025-12-23",
          nights: 3,
          room_type: "1 Bedroom Suite (estimated)",
          guests: 2,
          cost_per_night: 8000,
          total_cost: 24000,
          rating: 4.8,
          review_count: 114,
          amenities: ["Good for children"],
          check_in_time: "14:00",
          check_out_time: "11:00",
          booking_url:
            "https://connectbooker.com/securebooking.aspx?Hotelid=10661",
          cancellation_info:
            "Standard hotel cancellation policies apply; typically 48-72 hours prior to check-in for a full refund during peak season. Please check the booking portal for exact terms.",
        },
      ],
      generated_at: "2025-10-30T09:42:38.78587524Z",
      ai_model: "gemini-2.5-flash",
      language: "",
      highlight_activities: [
        "Experience the vibrant nightlife at Tito's Lane and beach shacks in Baga/Calangute.",
        "Indulge in thrilling water sports like parasailing, jet skiing, and banana boat rides at popular beaches.",
        "Explore the bustling Saturday Night Market at Arpora for shopping, live music, and diverse food stalls.",
        "Relax and sunbathe on the famous beaches of North Goa, such as Baga, Calangute, and Vagator.",
        "Embark on a dolphin spotting trip from Sinquerim or Candolim beach.",
        "Visit the historic churches of Old Goa, including the Basilica of Bom Jesus and Se Cathedral.",
        "Enjoy a serene sunset cruise on the Mandovi River with live entertainment.",
      ],
      local_insights: [
        "Embrace 'Susegad', the laid-back Goan philosophy of relaxed enjoyment and contentment.",
        "Sample authentic Goan cuisine, especially fresh seafood curries, prawn balchão, pork vindaloo, and the local dessert 'Bebinca'.",
        "Try 'Feni', the traditional Goan spirit made from cashew apples or coconut sap, but consume responsibly.",
        "Bargaining is common and expected at local markets, especially for souvenirs and clothing.",
        "While Goa is liberal, dress modestly when visiting religious sites like churches and temples out of respect.",
        "English and Hindi are widely understood, but learning a few Konkani phrases like 'Dev Borem Korum' (Thank you) will be appreciated.",
      ],
      travel_tips: [
        "Book accommodations and flights well in advance, as December is peak tourist season and prices escalate quickly.",
        "Rent a scooter (with a valid license) for convenient and cost-effective travel around Goa, but always wear a helmet.",
        "Stay hydrated by drinking plenty of water and use high-SPF sunscreen, sunglasses, and hats to protect against the strong sun.",
        "Always agree on taxi or auto-rickshaw fares before starting your journey, or use ride-hailing apps like Goa Miles for transparency.",
        "Carry sufficient cash, as many beach shacks, smaller shops, and local vendors may not accept digital payments.",
        "Be mindful of your belongings, especially on crowded beaches and at night, and avoid walking alone in secluded areas after dark.",
      ],
      weather_info: {
        season: "Winter (Peak Tourist Season)",
        description:
          "December in Goa offers pleasant, dry, and sunny weather, making it the most popular time to visit. Days are warm with comfortable humidity levels, and evenings are cool and breezy.",
        avg_min_temp: 20,
        avg_max_temp: 32,
        recommendation:
          "Pack light cotton clothing, swimwear, shorts, t-shirts, and comfortable open-toed footwear. A light jacket or shawl is advisable for cooler evenings. Don't forget sunscreen, a wide-brimmed hat, and sunglasses.",
      },
      main_transport: [
        {
          id: "outbound-car-rental",
          mode: "car",
          from_location: {
            name: "Chikkamagaluru City Center",
            address: "Chikkamagaluru City, Karnataka",
            city: "Chikkamagaluru",
            state: "",
            country: "",
            latitude: 0,
            longitude: 0,
          },
          to_location: {
            name: "North Goa (e.g., Baga/Calangute area)",
            address: "Baga Beach Road, North Goa",
            city: "Goa",
            state: "",
            country: "",
            latitude: 0,
            longitude: 0,
          },
          departure_time: "07:00",
          arrival_time: "16:00",
          duration: "9h 0m",
          cost: 9000,
          cost_per_person: 4500,
          description:
            "Enjoy a scenic self-drive journey through the Western Ghats, offering flexibility to stop at picturesque viewpoints. This option provides maximum convenience for exploring Goa's beaches and nightlife.",
          booking_url: "https://www.easemytrip.com/cabs",
          notes: [
            "Approx. 450 km drive. Cost includes estimated rental portion for one way and fuel. Total rental for 4 days would be around ₹12,000-₹14,000 plus fuel. This calculation is for the journey leg.",
            "Ensure you have a valid driving license and all necessary vehicle documents.",
            "Factor in toll charges (approx. ₹500-₹800 one way) which are additional.",
            "Consider booking through local Goan rental agencies or national platforms like Zoomcar/MyChoize. EaseMyTrip Cabs can be used to compare full taxi services if self-drive is not preferred.",
          ],
          carrier: "Local Car Rental Service",
          service_class: "Mid-range Sedan",
          vehicle_number: "Self-Drive Sedan (e.g., Maruti Ciaz, Honda City)",
          route_type: "Direct",
        },
        {
          id: "inbound-car-rental",
          mode: "car",
          from_location: {
            name: "North Goa (e.g., Baga/Calangute area)",
            address: "Baga Beach Road, North Goa",
            city: "Goa",
            state: "",
            country: "",
            latitude: 0,
            longitude: 0,
          },
          to_location: {
            name: "Chikkamagaluru City Center",
            address: "Chikkamagaluru City, Karnataka",
            city: "Chikkamagaluru",
            state: "",
            country: "",
            latitude: 0,
            longitude: 0,
          },
          departure_time: "08:00",
          arrival_time: "17:00",
          duration: "9h 0m",
          cost: 9000,
          cost_per_person: 4500,
          description:
            "Return journey by self-drive car, allowing for a comfortable pace and flexibility to depart at your leisure. The route remains picturesque through the Western Ghats.",
          booking_url: "https://www.easemytrip.com/cabs",
          notes: [
            "Approx. 450 km drive. Cost includes estimated rental portion for one way and fuel. Total rental for 4 days would be around ₹12,000-₹14,000 plus fuel. This calculation is for the journey leg.",
            "Ensure you have a valid driving license and all necessary vehicle documents.",
            "Factor in toll charges (approx. ₹500-₹800 one way) which are additional.",
            "Consider booking through local Goan rental agencies or national platforms like Zoomcar/MyChoize. EaseMyTrip Cabs can be used to compare full taxi services if self-drive is not preferred.",
          ],
          carrier: "Local Car Rental Service",
          service_class: "Mid-range Sedan",
          vehicle_number: "Self-Drive Sedan (e.g., Maruti Ciaz, Honda City)",
          route_type: "Direct",
        },
      ],
    },
    timestamp: "2025-10-30T09:46:07.19629233Z",
    trip_id: "00b2fcf6-d7a2-4d5a-8077-2def0edc7802",
    stage: 5,
    stage_name: "Cost Calculation",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userInfo = useSelector(UsetInfo);

  const initialValues: TripFormValues = {
    budget: "5000",
    days: "",
    destination: "Goa",
    interests: ["adventure", "food", "nature"],
    source: "Chikkamagaluru",
    start_date: moment().format("YYYY-MM-DD"),
    end_date: "",
    traveler_count: "1",
    travel_style: "mid-range",
    meal_preference: "vegetarian",
    transport_mode: ["bus", "train", "car", "bike", "flight", "any"],
    accommodationType: ["hotel"],
    special_requests: "",
  };

  const interests = [
    {
      id: "heritage",
      name: "Heritage",
      icon: <AccountBalanceOutlinedIcon />,
      desc: "Historical monuments & culture",
    },
    {
      id: "spiritual",
      name: "Spiritual",
      icon: <TempleBuddhistOutlinedIcon />,
      desc: "Temples & pilgrimage",
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: <HikingOutlinedIcon />,
      desc: "Trekking & outdoor activities",
    },
    {
      id: "beach",
      name: "Beach",
      icon: <KitesurfingOutlinedIcon />,
      desc: "Beaches & hill stations",
    },
    {
      id: "food",
      name: "Food",
      icon: <FastfoodOutlinedIcon />,
      desc: "Local cuisine & street food",
    },
    {
      id: "wildlife",
      name: "Wildlife",
      icon: <PetsOutlinedIcon />,
      desc: "National parks & safaris",
    },
    {
      id: "culture",
      name: "Culture",
      icon: <ColorLensOutlinedIcon />,
      desc: "Art, music & festivals",
    },
    {
      id: "nature",
      name: "Nature",
      icon: <ForestOutlinedIcon />,
      desc: "Mountains & natural beauty",
    },
  ];

  const mealType = [
    {
      type: "vegan",
      label: "vegan",
      color: "cyan",
    },
    {
      type: "vegetarian",
      label: "Vegetarian",
      color: "green",
    },
    {
      type: "non-vegetarian",
      label: "Non-Vegetarian ",
      color: "red",
    },
  ];

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setStreamedData(null);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const payLoad: any = JSON.parse(JSON.stringify(values));
      payLoad.budget = Number(payLoad.budget);
      payLoad.traveler_count = Number(payLoad.traveler_count);
      setError("");

      try {
        await streamApiCaller(
          "/api/v1/trips/generate/stream",
          "POST",
          { ...payLoad },
          {
            Authorization: `Bearer ${userInfo.access_token}`,
          },
          (parsedChunk) => {
            console.log(parsedChunk, "parsedChunk");
            if (parsedChunk) {
              setStreamedData(parsedChunk);
            }
          }
        );
      } catch (error) {
        console.error("Streaming API error:", error);
        setError("Please Try again later!");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleThemeToggle = (interests: string) => {
    const currentThemes = formik.values.interests || [];
    let updatedThemes;
    if (currentThemes.includes(interests)) {
      updatedThemes = currentThemes.filter((t) => t !== interests);
    } else {
      updatedThemes = [...currentThemes, interests];
    }
    formik.setFieldValue("interests", updatedThemes);
  };

  useEffect(() => {
    if (userInfo.id.length === 0) {
      navigate("/Login");
    }
  }, [navigate]);

  return (
    <div>
      {!streamedData && !loading && (
        <ItineraryForm
          formik={formik}
          loading={loading}
          error={error}
          interests={interests}
          mealType={mealType}
          handleThemeToggle={handleThemeToggle}
        />
      )}
      {loading && !streamedData && (
        <div>
          <CircularProgress />
        </div>
      )}
      {streamedData && <ItineraryInfo streamedData={streamedData} />}
    </div>
  );
};
export default ItineraryMain;
