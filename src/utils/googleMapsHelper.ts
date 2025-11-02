/**
 * Google Maps helper functions
 */

interface LocationCoordinates {
  latitude: number;
  longitude: number;
}

interface LocationWithName extends LocationCoordinates {
  name?: string;
}

/**
 * Generate Google Maps embed URL for a single location
 */
export const getGoogleMapsEmbedUrl = (
  latitude: number,
  longitude: number
): string => {
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0M${latitude.toString().replace('.', '')}${longitude.toString().replace('.', '')}!5e0!3m2!1sen!2sin!4v1699000000000`;
};

/**
 * Generate Google Maps URL to open location in new tab
 */
export const getGoogleMapsLocationUrl = (
  latitude: number,
  longitude: number,
  label?: string
): string => {
  const baseUrl = "https://maps.google.com/?";
  const params = new URLSearchParams({
    q: `${latitude},${longitude}`,
  });
  if (label) {
    params.append("label", label);
  }
  return `${baseUrl}${params.toString()}`;
};

/**
 * Generate Google Maps URL for route between multiple locations
 */
export const getGoogleMapsRouteUrl = (
  locations: LocationWithName[]
): string => {
  if (locations.length < 2) {
    console.warn("Route requires at least 2 locations");
    return "";
  }

  const baseUrl = "https://www.google.com/maps/dir/?";
  const waypoints = locations
    .map((loc) => `${loc.latitude},${loc.longitude}`)
    .join("/");

  const params = new URLSearchParams({
    api: "1",
    destination: `${locations[locations.length - 1].latitude},${locations[locations.length - 1].longitude}`,
    waypoints: waypoints.split("/").slice(0, -1).join("/"),
  });

  return `${baseUrl}${params.toString()}`;
};

/**
 * Generate Google Maps Directions URL with waypoints
 */
export const getGoogleMapsDirectionsUrl = (
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number,
  waypointLocations?: LocationCoordinates[]
): string => {
  const params = new URLSearchParams({
    api: "1",
    origin: `${startLat},${startLng}`,
    destination: `${endLat},${endLng}`,
  });

  if (waypointLocations && waypointLocations.length > 0) {
    const waypoints = waypointLocations
      .map((loc) => `${loc.latitude},${loc.longitude}`)
      .join("|");
    params.append("waypoints", waypoints);
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
};

/**
 * Extract all activity locations from a day plan
 */
export const extractActivityLocationsFromDay = (dayPlan: Record<string, unknown>): LocationWithName[] => {
  const events = dayPlan.events as Array<Record<string, unknown>> | undefined;
  if (!events || events.length === 0) {
    return [];
  }

  const locations: LocationWithName[] = [];

  events.forEach((event: Record<string, unknown>) => {
    const activity = event.activity as Record<string, unknown> | undefined;
    const location = activity?.location as Record<string, unknown> | undefined;
    
    if (
      event.event_type === "activity" &&
      location?.latitude &&
      location?.longitude
    ) {
      locations.push({
        latitude: location.latitude as number,
        longitude: location.longitude as number,
        name: (location.name as string) || (activity?.name as string),
      });
    }
  });

  return locations;
};
