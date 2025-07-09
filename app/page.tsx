'use client';

import dynamic from "next/dynamic";
import { useWeather } from "../lib/useWeather";

const CityInput = dynamic(() => import("../components/ui/CityInput"), { ssr: false });
const WeatherDisplay = dynamic(() => import("../components/ui/WeatherDisplay"), { ssr: false });

export default function Home() {
  const { city, setCity, weatherData, error, fetchData } = useWeather();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-4 flex items-center justify-center">
      <div className="w-full max-w-md space-y-4 bg-white rounded-lg shadow-lg p-6 opacity-90">
        <CityInput city={city} setCity={setCity} onSubmit={handleSubmit} />
        <WeatherDisplay weatherData={weatherData} error={error} />
      </div>
    </div>
  );
}
