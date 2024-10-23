import { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const defaultLocation = {
  lat: 25.790345,
  lng: -80.189221,
};

export default function MapComponent() {
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);
  const [locationName, setLocationName] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [googleMapsLink, setGoogleMapsLink] = useState("");
  const [googleMapsDirectionsLink, setGoogleMapsDirectionsLink] = useState("");

  const fetchLocationData = async (lat, lng) => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleMapsApiKey}`;
    const response = await fetch(geocodeUrl);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      const fetchedAddress = result.formatted_address;
      const index = result.formatted_address.indexOf(",");
      const fetchedName = result.formatted_address.slice(0, index);

      setLocationName(fetchedName);
      setLocationAddress(fetchedAddress);
      setGoogleMapsLink(`https://www.google.com/maps?q=${lat},${lng}`);
      setGoogleMapsDirectionsLink(
        `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
      );
    } else {
      console.error("No results found in the geocode response");
    }
  };

  const handleMapClick = (e) => {
    if (e.detail.latLng) {
      let newLocation = {
        lat: e.detail.latLng.lat,
        lng: e.detail.latLng.lng,
      };
      setCurrentLocation(newLocation);
      fetchLocationData(newLocation.lat, newLocation.lng);
    } else {
      console.error("e.detail.latLng is undefined");
    }
  };

  useEffect(() => {
    fetchLocationData(defaultLocation.lat, defaultLocation.lng);
  }, []);

  return (
    <APIProvider apiKey={googleMapsApiKey}>
      <Map
        defaultZoom={12}
        defaultCenter={currentLocation}
        fullscreenControl={false}
        streetViewControl={false}
        onClick={handleMapClick}
      >
        <Marker position={currentLocation} />
        <div className="info-window">
          <div className="info-window-inner">
            <div className="location-info">
              <h3>{locationName}</h3>
              <p>{locationAddress}</p>
            </div>
            <div className="location-directions-link">
              <a
                href={googleMapsDirectionsLink}
                data-tip="Get directions"
                className="tooltip tooltip-bottom"
                target="_blank"
              >
                <img
                  src="../../../images/contact/directions-arrow-active.jpg"
                  alt="directionsArrow"
                />
                <div>Directions</div>
              </a>
            </div>
            <div className="location-gmaps-link">
              <a href={googleMapsLink} target="_blank">
                View larger map
              </a>
            </div>
          </div>
        </div>
      </Map>
    </APIProvider>
  );
}
