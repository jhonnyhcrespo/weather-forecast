export const mockGeocodingApiResponse = {
  "result": {
      "input": {
          "address": {
              "address": "1320 S Dixie Hwy, Coral Gables, FL 33146, United States"
          },
          "benchmark": {
              "isDefault": true,
              "benchmarkDescription": "Public Address Ranges - Current Benchmark",
              "id": "4",
              "benchmarkName": "Public_AR_Current"
          }
      },
      "addressMatches": [
          {
              "tigerLine": {
                  "side": "L",
                  "tigerLineId": "638110795"
              },
              "coordinates": {
                  "x": -80.278718083917,
                  "y": 25.712975193696
              },
              "addressComponents": {
                  "zip": "33146",
                  "streetName": "DIXIE",
                  "preType": "",
                  "city": "CORAL GABLES",
                  "preDirection": "S",
                  "suffixDirection": "",
                  "fromAddress": "1300",
                  "state": "FL",
                  "suffixType": "HWY",
                  "toAddress": "1334",
                  "suffixQualifier": "",
                  "preQualifier": ""
              },
              "matchedAddress": "1320 S DIXIE HWY, CORAL GABLES, FL, 33146"
          }
      ]
  }
}
