import { geocodingService } from '../../shared/services/geocoding/geocodingService'
import { weatherService } from '../../shared/services/weather/weatherService';

const allowedOrigins = [
  "http://localhost:8888",
  "https://jhonnyhcrespo.github.io",
]

export async function handler(event){
  const origin = event.headers?.origin || "";
  const allowOrigin = allowedOrigins.includes(origin) ? origin : "";

  const headers = {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Only GET is allowed
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        error: "Method not allowed. Use GET.",
      }),
    };
  }

  const { address } = event.queryStringParameters || {};

  if (!address) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: "Missing or invalid 'address' query parameter.",
      }),
    };
  }

  try {
    const coordinates = await geocodingService.getCoordinates(address);
    const pointMetadata = await weatherService.getPointMetadata(coordinates);
    const forecast = await weatherService.getForecast(pointMetadata.forecast)
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(forecast),
    };

  } catch (error) {
    console.error("[Forecast API] error:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to get forecast for the provided address",
        message: error.message,
      }),
    };
  }
}
