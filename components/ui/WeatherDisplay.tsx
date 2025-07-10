'use client';

import React from "react";
import Image from "next/image";

import { WeatherData } from "../../lib/api";

type WeatherDisplayProps = {
  weatherData: WeatherData | null | undefined;
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
};

const infoIconMap = {
  hot: "/assets/hot.png",
  cold: "/assets/temperature-cold.png",
  kelembaban: "/assets/humidity.png",
  angin: "/assets/cloud.png",
};

function getSuhuIcon(temp: number): string {
  if (temp >= 25) {
    return infoIconMap.hot;
  } else {
    return infoIconMap.cold;
  }
}

function getWeatherIcon(description: string): string {
  return weatherIconMap[description.toLowerCase()] || "/assets/sun.png";
}

export default function WeatherDisplay({ weatherData, error }: WeatherDisplayProps) {
  if (error) {
    return (
      <div className="max-w-md mx-auto mt-6 p-6 bg-red-100 text-red-700 rounded-xl shadow-md text-center">
        {error}
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  const iconSrc = getWeatherIcon(weatherData.weather[0].description);

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-blue-200 bg-opacity-30 backdrop-blur-2xl rounded-3xl shadow-lg text-center text-gray-900">
      <h1 className="text-3xl font-bold mb-1 drop-shadow-lg">{weatherData.name}</h1>
      <Image src={iconSrc} alt={weatherData.weather[0].description} width={96} height={96} className="mx-auto mb-4 drop-shadow-lg" />
      <p className="text-6xl font-extrabold mb-2 drop-shadow-lg">{Math.round(weatherData.main.temp)}°</p>
      <p className="text-xl mb-6 drop-shadow-lg capitalize">{weatherData.weather[0].description}</p>
      <div className="flex justify-around space-x-4 text-sm">
        <div className="bg-gray-100 bg-opacity-30 rounded-xl p-4 flex-1 drop-shadow-lg flex flex-col items-center">
          <Image src={getSuhuIcon(weatherData.main.temp)} alt="Suhu" width={32} height={32} className="mb-2" />
          <p className="uppercase tracking-wide">Suhu</p>
          <p className="text-2xl font-semibold">{Math.round(weatherData.main.temp)}°C</p>
        </div>
        <div className="bg-gray-100 bg-opacity-30 rounded-xl p-4 flex-1 drop-shadow-lg flex flex-col items-center">
          <Image src={infoIconMap.kelembaban} alt="Kelembaban" width={32} height={32} className="mb-2" />
          <p className="uppercase tracking-wide">Kelembaban</p>
          <p className="text-2xl font-semibold">{weatherData.main.humidity}%</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 flex-1 drop-shadow-lg flex flex-col items-center">
          <Image src={infoIconMap.angin} alt="Angin" width={32} height={32} className="mb-2" />
          <p className="uppercase tracking-wide">Angin</p>
          <p className="text-2xl font-semibold">{weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
