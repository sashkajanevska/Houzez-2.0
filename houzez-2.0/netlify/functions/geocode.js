const fetch = require("node-fetch");

exports.handler = async (event) => {
  console.log("Function started! Event received:", event);
  // console.log("Geocoding API Key:", process.env.VITE_GEOCODING_API_KEY);
  const geocodingApiKey = process.env.VITE_GEOCODING_API_KEY;
  const { lat, lng } = event.queryStringParameters;

  if (!lat || !lng) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing latitude or longitude" }),
    };
  }

  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${geocodingApiKey}`;

  try {
    const response = await fetch(geocodeUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch location data" }),
    };
  }
};
