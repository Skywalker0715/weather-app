'use client';

import React from "react";

type WeatherDisplayProps = {
  weatherData: any;
  error: string;
};

export default function WeatherDisplay({ weatherData, error }: WeatherDisplayProps) {
  return (
    <div id="weather-result" className="bg-white rounded-lg shadow-lg p-6 mt-4">
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="animate-fade-in">
          <h2 className="text-lg font-bold flex items-center text-blue-600">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            {weatherData.name} - {Math.round(weatherData.main.temp)}°C
          </h2>
          <p className="text-2xl font-semibold text-gray-800">{Math.round(weatherData.main.temp)}°C</p>
          <p className="text-gray-500">{weatherData.weather[0].description}</p>
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <p className="text-sm">Feels like</p>
              <p className="text-lg">{Math.round(weatherData.main.feels_like)}°C</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Humidity</p>
              <p className="text-lg">{weatherData.main.humidity}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Wind</p>
              <p className="text-lg">{weatherData.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
