export const devices = [
  {
    type: "humidity",
    location: {
      longitude: 24.031111,
      latitude: 49.842957,
    },
    minValue: 40,
    maxValue: 45,
    name: "Датчик вологості повітря"
  },
  {
    type: "temperature",
    location: {
      longitude: 24.031111,
      latitude: 49.842957,
    },
    minValue: 19,
    maxValue: 21,
    name: "Датчик температури"
  },
  {
    type: "illumination",
    location: {
      longitude: 24.031111,
      latitude: 49.842957,
    },
    minValue: 280,
    maxValue: 300,
    name: "Датчик освітлення"
  },
];

export const defaultUrl = "http://localhost";

export const defaultDuration = 1000;

export const defaultFrequency = 100;
