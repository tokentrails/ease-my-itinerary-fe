import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { apiCaller } from "../../utils/apiCall";
import Loader from "../../Components/Itinerary/loader";
import type { DestinationResponse } from "../../Helper/ApiResponseInterface";
import type { Summary } from "../../types/destination";

const loadingMessages = [
  "Discovering hidden gems in your chosen destination",
  "Gathering local insights and recommendations",
  "Finding the best attractions and activities",
  "Creating a personalized destination guide",
  "Curating unique experiences just for you",
];

export default function DestinationGuide() {
  // Navigation and routing
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // UI state
  const [loading, setLoading] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Data state
  const [destinationData, setDestinationData] = useState<DestinationResponse["data"] | null>(null);
  const [parsedSummary, setParsedSummary] = useState<Summary | null>(null);

  // Fetch destination data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCaller(
          "destinations/research",
          "GET",
          undefined,
          { destination: searchParams.get("destination") || "" }
        ) as DestinationResponse;
        
        if (response.success) {
          setDestinationData(response.data);
          setParsedSummary(JSON.parse(response.data.summary) as Summary);
        }
      } catch (error) {
        console.error("Error fetching destination data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  // Handle loading message rotation
  useEffect(() => {
    if (!loading) return;

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 3000);

    return () => clearInterval(messageInterval);
  }, [loading]);

  // Loading state
  if (loading) {
    return <Loader messages={loadingMessages[currentMessageIndex]} />;
  }

  // Error state
  if (!destinationData || !parsedSummary) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          No destination data available
        </h1>
        <p className="text-gray-600 mb-6">
          Unable to load destination information. Please try again later.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {destinationData.destination}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          {parsedSummary.summary}
        </p>
      </div>

      {/* Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Attractions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Attractions</h2>
          <p className="text-gray-700 mb-4">{parsedSummary.topics.attractions.summary}</p>
          <ul className="list-disc list-inside space-y-2">
            {parsedSummary.topics.attractions.key_points.map((point, index) => (
              <li key={index} className="text-gray-600">{point}</li>
            ))}
          </ul>
        </div>

        {/* Food & Cuisine */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Food & Cuisine</h2>
          <p className="text-gray-700 mb-4">{parsedSummary.topics.food.summary}</p>
          <ul className="list-disc list-inside space-y-2">
            {parsedSummary.topics.food.key_points.map((point, index) => (
              <li key={index} className="text-gray-600">{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">Travel Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Duration */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Recommended Duration</h3>
            <p className="text-gray-700">
              {parsedSummary.suggestions.recommended_duration.reasoning}
            </p>
            <div className="mt-4">
              <span className="text-sm text-gray-500">Optimal: </span>
              <span className="font-medium">
                {parsedSummary.suggestions.recommended_duration.optimal_days} days
              </span>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
            <p className="text-gray-700 mb-4">
              {parsedSummary.suggestions.current_season}
            </p>
            <div className="flex flex-wrap gap-2">
              {parsedSummary.suggestions.best_travel_months.map((month, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {month}
                </span>
              ))}
            </div>
          </div>

          {/* Must-Visit Places */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Must-Visit Places</h3>
            <ul className="space-y-2">
              {parsedSummary.suggestions.must_visit_attractions.map((place, index) => (
                <li key={index} className="text-gray-700">
                  • {place}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}