'use client';

import { useState } from "react";
import { fetchWeatherData, WeatherData } from "../lib/api";
import CityInput from "../components/ui/CityInput";
import WeatherDisplay from "../components/ui/WeatherDisplay";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error: any) {
      setError("Error fetching weather data: " + error.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 via-purple-900 to-indigo-900 p-6 flex flex-col items-center justify-start pt-24">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">Cek Cuaca</h1>
      <p className="text-white text-lg mb-8 drop-shadow-lg">Cek kondisi cuaca terkini</p>
      <CityInput city={city} setCity={setCity} onSubmit={handleSubmit} />
      <WeatherDisplay weatherData={weatherData} error={error} />
    </div>
  );
}
