import type { Trip } from "../Helper/ApiResponseInterface";

export const ItineraryInitial: Trip = {
  id: "",
  destination: "",
  start_date: "",
  end_date: "",
  duration_days: 0,
  traveler_count: 0,
  travel_style: "",
  total_cost: 0,
  cost_per_person: 0,
  budget_breakdown: {
    accommodation: 0,
    transport: 0,
    activities: 0,
    meals: 0,
    miscellaneous: 0,
  },
  day_plans: [],
  accommodations: [],
  highlight_activities: [],
  local_insights: [],
  travel_tips: [],
  weather_info: {
    season: "",
    description: "",
    avg_min_temp: 0,
    avg_max_temp: 0,
    recommendation: "",
  },
  source: "",
  budget: 0,
  saved: 0,
  generated_at: "",
  ai_model: "",
  language: ""
};
