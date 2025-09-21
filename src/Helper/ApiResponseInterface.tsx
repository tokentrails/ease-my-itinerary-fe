export interface Location {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  location: Location;
  start_time: string;
  end_time: string;
  duration: string;
  cost: number;
  cost_per_person: number;
  booking_required: boolean;
  booking_url?: string; // Optional as it might not always be present
  rating: number;
  review_count: number;
  tips: string[];
  opening_hours?: string;
  priority: number;
}

export interface Meal {
  id: string;
  type: string;
  restaurant_name: string;
  description: string;
  cuisine: string;
  location: Location;
  reservation_time: string;
  cost: number;
  cost_per_person: number;
  rating: number;
  review_count: number;
  specialties: string[];
  dietary_info: string[];
  booking_required: boolean;
}

export interface Transport {
  id: string;
  mode: string;
  from_location: Location;
  to_location: Location;
  departure_time: string;
  arrival_time: string;
  duration: string;
  cost: number;
  cost_per_person: number;
  description: string;
  notes?: string[]; // Optional as it might not always be present
}

export interface Weather {
  date: string;
  min_temp: number;
  max_temp: number;
  condition: string;
  description: string;
  humidity: number;
  precipitation: number;
  recommendation: string;
}

export interface DayPlan {
  day_number: number;
  date: string;
  title: string;
  description: string;
  activities: Activity[];
  meals: Meal[];
  transport: Transport[];
  daily_cost: number;
  weather: Weather;
  notes?: string[];
}

export interface Accommodation {
  id: string;
  name: string;
  type: string;
  description: string;
  location: Location;
  check_in_date: string;
  check_out_date: string;
  nights: number;
  room_type: string;
  guests: number;
  cost_per_night: number;
  total_cost: number;
  rating: number;
  review_count: number;
  amenities: string[];
  check_in_time: string;
  check_out_time: string;
  booking_url?: string;
  cancellation_info: string;
}

export interface BudgetBreakdown {
  accommodation: number;
  transport: number;
  activities: number;
  meals: number;
  miscellaneous: number;
}

export interface WeatherInfo {
  season: string;
  description: string;
  avg_min_temp: number;
  avg_max_temp: number;
  recommendation: string;
}

export interface Trip {
  id: string;
  source: string;
  destination: string;
  start_date: string;
  end_date: string;
  duration_days: number;
  traveler_count: number;
  travel_style: string;
  budget: number;
  saved: number;
  total_cost: number;
  cost_per_person: number;
  budget_breakdown: BudgetBreakdown;
  day_plans: DayPlan[];
  accommodations: Accommodation[];
  generated_at: string;
  ai_model: string;
  language: string;
  highlight_activities: string[];
  local_insights: string[];
  travel_tips: string[];
  weather_info: WeatherInfo;
}

