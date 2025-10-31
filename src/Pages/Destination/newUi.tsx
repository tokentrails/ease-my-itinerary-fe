import React, { useState } from 'react';
import { Mountain, Coffee, Droplets, Camera, Calendar, IndianRupee, Clock, Thermometer, AlertCircle, MapPin, Utensils, TrendingUp, Heart, Map } from 'lucide-react';

const destinationData = {
  destination: "Chikkamagaluru",
  summary: "Chikkamagaluru, known as the 'Coffee Land of Karnataka,' is a picturesque hill station nestled in the Western Ghats, offering a blend of lush coffee plantations, misty mountains, and cascading waterfalls. It is an ideal destination for nature lovers and adventure seekers, with a pleasant climate particularly during the cooler months from September to March.",
  attractions: {
    summary: "Chikkamagaluru boasts a variety of natural and historical attractions, ranging from the highest peaks in Karnataka offering panoramic views and trekking opportunities to serene waterfalls and significant pilgrimage sites.",
    highlights: [
      "Mullayanagiri Peak, the highest peak in Karnataka, is popular for trekking and offers breathtaking panoramic views.",
      "Jhari Falls (Buttermilk Falls) is a scenic waterfall known for its milky white flow, ideal for photography and picnics.",
      "Baba Budangiri is a significant peak and pilgrimage site, also offering trekking routes and scenic drives.",
      "Hebbe Falls, a two-stage waterfall, is located amidst a coffee estate.",
      "Kudremukh National Park and Bhadra Wildlife Sanctuary are excellent for wildlife enthusiasts."
    ]
  },
  food: {
    summary: "The culinary scene in Chikkamagaluru is deeply rooted in Malnad cuisine, characterized by a delightful blend of flavors from Kannada traditions.",
    dishes: [
      "Akki Roti (rice flour flatbread)",
      "Bisi Bele Bath (spicy rice and lentil dish)",
      "Kadubu (steamed dumplings)",
      "Koli Saaru (chicken curry)",
      "Halasina Kadubu (jackfruit dumplings)",
      "Filter Coffee (locally grown beans)"
    ],
    restaurants: [
      "Town Canteen - Butter Masala Dosa",
      "The Estate Cafe - Kodava Pork Curry",
      "Khansamma - Hyderabadi Zafrani Mutton Biryani"
    ]
  },
  suggestions: {
    duration: { min: 3, max: 5, optimal: 3 },
    bestMonths: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    currentSeason: "As of October 31, 2025, experiencing warm, humid weather with 26°C max and 17°C min. Pleasant conditions with nearly 11 hours of sunlight.",
    budget: {
      economy: 2500,
      comfort: 7500,
      luxury: 15000,
      perDayAvg: 8333
    },
    costBreakdown: {
      accommodation: { min: 1150, max: 18500, avg: 6000 },
      food: { min: 500, max: 2000, avg: 1000 },
      transport: { min: 800, max: 3000, avg: 1500 },
      activities: { min: 500, max: 2500, avg: 1000 }
    },
    mustVisit: [
      "Mullayanagiri Peak",
      "Jhari Falls",
      "Baba Budangiri",
      "Hebbe Falls",
      "Kemmangundi",
      "Horanadu Temple",
      "Kudremukh National Park",
      "Hirekolale Lake"
    ],
    tips: [
      "Best time: October to March for pleasant weather",
      "Drive carefully on winding Ghat roads",
      "Carry cash - limited ATM availability in remote areas",
      "Avoid peak seasons for popular attractions",
      "Early morning safaris increase wildlife spotting chances",
      "Check weather during monsoon for road conditions"
    ],
    events: [
      {
        name: "Chikmagalur Group Tour",
        date: "Nov 1, 2025 onwards",
        desc: "2-day/1-night group tour from Bangalore"
      },
      {
        name: "Bhuta Kola Festival",
        date: "Winter (Oct-Feb)",
        desc: "Traditional ritualistic dance festival"
      },
      {
        name: "Diwali at Deviramma Betta",
        date: "October 2025",
        desc: "Temple opens only on first day of Diwali"
      }
    ]
  }
};

export default function ChikkamagaluruGuide() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Map },
    { id: 'attractions', label: 'Attractions', icon: Mountain },
    { id: 'food', label: 'Food', icon: Utensils },
    { id: 'budget', label: 'Budget', icon: IndianRupee },
    { id: 'tips', label: 'Tips', icon: AlertCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-3 text-blue-600">
            <MapPin className="w-5 h-5" style={{ color: '#2093EF' }} />
            <span className="text-sm font-medium uppercase tracking-wide" style={{ color: '#2093EF' }}>Destination</span>
          </div>
          <h1 className="text-5xl font-light text-gray-900 mb-4">{destinationData.destination}</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            {destinationData.summary}
          </p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-4 h-4" style={{ color: '#2093EF' }} />
              <span>{destinationData.suggestions.duration.optimal} days recommended</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <IndianRupee className="w-4 h-4" style={{ color: '#2093EF' }} />
              <span>₹{destinationData.suggestions.budget.perDayAvg}/day average</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Thermometer className="w-4 h-4" style={{ color: '#2093EF' }} />
              <span>17-26°C current</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-1 py-4 font-medium transition-colors whitespace-nowrap text-sm ${
                    activeTab === tab.id
                      ? 'border-b-2 text-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  style={activeTab === tab.id ? { borderColor: '#2093EF', color: '#2093EF' } : {}}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Current Season */}
            <div className="bg-white border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Thermometer className="w-5 h-5 mt-1" style={{ color: '#2093EF' }} />
                <div>
                  <h2 className="text-xl font-medium text-gray-900 mb-2">Current Weather</h2>
                  <p className="text-gray-600 leading-relaxed">{destinationData.suggestions.currentSeason}</p>
                </div>
              </div>
            </div>

            {/* Best Months */}
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Best Time to Visit</h2>
              <div className="flex flex-wrap gap-3">
                {destinationData.suggestions.bestMonths.map((month) => (
                  <span
                    key={month}
                    className="px-4 py-2 rounded-full text-sm font-medium border"
                    style={{ borderColor: '#2093EF', color: '#2093EF', backgroundColor: '#F0F8FF' }}
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Upcoming Events</h2>
              <div className="space-y-6">
                {destinationData.suggestions.events.map((event, idx) => (
                  <div key={idx} className="border-l-2 pl-6 py-2" style={{ borderColor: '#2093EF' }}>
                    <h3 className="font-medium text-gray-900 mb-1">{event.name}</h3>
                    <p className="text-sm font-medium mb-2" style={{ color: '#2093EF' }}>{event.date}</p>
                    <p className="text-gray-600 text-sm">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Attractions Tab */}
        {activeTab === 'attractions' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">About the Attractions</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{destinationData.attractions.summary}</p>
              
              <div className="space-y-4">
                {destinationData.attractions.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-4 items-start py-4 border-b last:border-b-0">
                    <Camera className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#2093EF' }} />
                    <p className="text-gray-700 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Must Visit Places */}
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Must-Visit Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {destinationData.suggestions.mustVisit.map((place, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded border text-sm font-medium flex items-center gap-2"
                    style={{ borderColor: '#2093EF', color: '#2093EF' }}
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {place}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Food Tab */}
        {activeTab === 'food' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Malnad Cuisine</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{destinationData.food.summary}</p>
              
              <h3 className="text-lg font-medium text-gray-900 mb-4">Must-Try Dishes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {destinationData.food.dishes.map((dish, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded border text-sm"
                  >
                    <span className="text-gray-700">{dish}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Restaurants</h3>
              <div className="space-y-3">
                {destinationData.food.restaurants.map((restaurant, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded border text-sm text-gray-700"
                  >
                    {restaurant}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Budget Overview */}
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-8">Budget Planning</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { label: 'Economy', value: destinationData.suggestions.budget.economy },
                  { label: 'Comfort', value: destinationData.suggestions.budget.comfort },
                  { label: 'Luxury', value: destinationData.suggestions.budget.luxury }
                ].map((budget) => (
                  <div key={budget.label} className="text-center p-6 border rounded">
                    <h3 className="font-medium text-gray-600 text-sm mb-3">{budget.label}</h3>
                    <p className="text-3xl font-light text-gray-900">₹{budget.value}</p>
                    <p className="text-xs text-gray-500 mt-2">per day</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-6">Cost Breakdown</h3>
              <div className="space-y-6">
                {Object.entries(destinationData.suggestions.costBreakdown).map(([category, costs]) => (
                  <div key={category} className="pb-6 border-b last:border-b-0">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-gray-900 capitalize text-sm">{category}</h4>
                      <span className="text-xl font-light text-gray-900">₹{costs.avg}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mb-3">
                      <span>₹{costs.min}</span>
                      <span>₹{costs.max}</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ 
                          width: `${(costs.avg / costs.max) * 100}%`,
                          backgroundColor: '#2093EF'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tips Tab */}
        {activeTab === 'tips' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Essential Travel Tips</h2>
              <div className="space-y-4">
                {destinationData.suggestions.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-start p-4 border-l-2"
                    style={{ borderColor: '#2093EF' }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white" style={{ backgroundColor: '#2093EF' }}>
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}