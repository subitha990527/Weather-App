import axios from "axios";

const API_KEY = "15a29944fa0d317f97187ec8c1ef740d";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  const response = await axios.get(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

export const getWeatherByCoords = async (lat, lon) => {
  const response = await axios.get(
    `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};