export const mockPointApiResponse = {
  "@context": [
      "https://geojson.org/geojson-ld/geojson-context.jsonld",
      {
          "@version": "1.1",
          "wx": "https://api.weather.gov/ontology#",
          "s": "https://schema.org/",
          "geo": "http://www.opengis.net/ont/geosparql#",
          "unit": "http://codes.wmo.int/common/unit/",
          "@vocab": "https://api.weather.gov/ontology#",
          "geometry": {
              "@id": "s:GeoCoordinates",
              "@type": "geo:wktLiteral"
          },
          "city": "s:addressLocality",
          "state": "s:addressRegion",
          "distance": {
              "@id": "s:Distance",
              "@type": "s:QuantitativeValue"
          },
          "bearing": {
              "@type": "s:QuantitativeValue"
          },
          "value": {
              "@id": "s:value"
          },
          "unitCode": {
              "@id": "s:unitCode",
              "@type": "@id"
          },
          "forecastOffice": {
              "@type": "@id"
          },
          "forecastGridData": {
              "@type": "@id"
          },
          "publicZone": {
              "@type": "@id"
          },
          "county": {
              "@type": "@id"
          }
      }
  ],
  "id": "https://api.weather.gov/points/38.8459999,-76.9275",
  "type": "Feature",
  "geometry": {
      "type": "Point",
      "coordinates": [
          -76.9275,
          38.8459999
      ]
  },
  "properties": {
      "@id": "https://api.weather.gov/points/38.8459999,-76.9275",
      "@type": "wx:Point",
      "cwa": "LWX",
      "forecastOffice": "https://api.weather.gov/offices/LWX",
      "gridId": "LWX",
      "gridX": 101,
      "gridY": 70,
      "forecast": "https://api.weather.gov/gridpoints/LWX/101,70/forecast",
      "forecastHourly": "https://api.weather.gov/gridpoints/LWX/101,70/forecast/hourly",
      "forecastGridData": "https://api.weather.gov/gridpoints/LWX/101,70",
      "observationStations": "https://api.weather.gov/gridpoints/LWX/101,70/stations",
      "relativeLocation": {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [
                  -76.92252,
                  38.848615
              ]
          },
          "properties": {
              "city": "Suitland",
              "state": "MD",
              "distance": {
                  "unitCode": "wmoUnit:m",
                  "value": 520.14709395637
              },
              "bearing": {
                  "unitCode": "wmoUnit:degree_(angle)",
                  "value": 236
              }
          }
      },
      "forecastZone": "https://api.weather.gov/zones/forecast/MDZ013",
      "county": "https://api.weather.gov/zones/county/MDC033",
      "fireWeatherZone": "https://api.weather.gov/zones/fire/MDZ013",
      "timeZone": "America/New_York",
      "radarStation": "KLWX"
  }
};
