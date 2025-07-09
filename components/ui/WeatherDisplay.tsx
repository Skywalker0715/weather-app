'use client';

import React from "react";

type WeatherDisplayProps = {
  weatherData: any;
  error: string;
};

const weatherIconMap: { [key: string]: string } = {
  "clear sky": "/assets/sun.png",
  "few clouds": "/assets/cloudy.png",
  "scattered clouds": "/assets/cloudy.png",
  "broken clouds": "/assets/cloudy.png",
  "shower rain": "/assets/downpour.png",
  "rain": "/assets/windy-rain.png",
  "thunderstorm": "/assets/storm.png",
  "snow": "/assets/temperature-cold.png",
  "mist": "/assets/starry-night.png",
  // Tambahkan mapping lain sesuai kebutuhan
};

function getWeatherIcon(description: string): string {
  return weatherIconMap[description.toLowerCase()] || "/assets/sun.png";
}

export default function WeatherDisplay({ weatherData, error }: WeatherDisplayProps) {
  if (error) {
    return (
      <div className="bg-red-100 text-red-700 rounded-lg p-4 mt-4 max-w-md mx-auto">
        {error}
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  const iconSrc = getWeatherIcon(weatherData.weather[0].description);

  return (
    <div className="max-w-md mx-auto mt-6 bg-gradient-to-br from-blue-400 to-blue-200 rounded-xl shadow-lg p-6 text-center text-gray-900 bg-opacity-50 backdrop-blur-xl transition-all duration-700 ease-in-out hover:shadow-2xl animate-fade-in">
      <h2 className="text-lg font-semibold mb-2">{weatherData.name}</h2>
      <img src={iconSrc} alt={weatherData.weather[0].description} className="mx-auto w-20 h-20 mb-2 animate-fade-in" />
      <p className="text-4xl font-extrabold">{Math.round(weatherData.main.temp)}°C</p>
      <p className="capitalize text-base mb-4">{weatherData.weather[0].description}</p>
      <div className="flex justify-around text-xs text-gray-800">
        <div>
          <p>Feels like</p>
          <p className="font-semibold">{Math.round(weatherData.main.feels_like)}°C</p>
        </div>
        <div>
          <p>Humidity</p>
          <p className="font-semibold">{weatherData.main.humidity}%</p>
        </div>
        <div>
          <p>Wind</p>
          <p className="font-semibold">{weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
