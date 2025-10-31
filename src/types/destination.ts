interface Topic {
  topic: string;
  summary: string;
  key_points: string[];
  sources: number[];
  confidence: number;
}

interface Topics {
  attractions: Topic;
  food: Topic;
}

interface CostRange {
  min: string | number;
  max: string | number;
  avg: string | number;
  unit: string;
}

interface BudgetRange {
  currency: string;
  economy: string | number;
  comfort: string | number;
  luxury: string | number;
  per_day_avg: string | number;
}

interface CostBreakdown {
  accommodation: CostRange;
  food: CostRange;
  transport: CostRange;
  activities: CostRange;
  miscellaneous: CostRange;
}

interface RecommendedDuration {
  min_days: number;
  max_days: number;
  optimal_days: number;
  reasoning: string;
}

interface Event {
  name: string;
  date: string;
  description: string;
  significance: string;
}

interface Suggestions {
  recommended_duration: RecommendedDuration;
  best_travel_months: string[];
  current_season: string;
  budget_range: BudgetRange;
  cost_breakdown: CostBreakdown;
  recommended_travel_style: string[];
  popular_interests: string[];
  must_visit_attractions: string[];
  local_tips: string[];
  upcoming_events: Event[];
  weather_considerations: string;
  ideal_for: string[];
  avoidance_reasons: string[];
}

export interface Summary {
  summary: string;
  topics: Topics;
  suggestions: Suggestions;
}