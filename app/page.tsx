'use client';

import { useState } from "react";
import { fetchWeatherData, WeatherData } from "../lib/api"; // Import fetchWeatherData and WeatherData from api.ts
import { Button } from "../components/ui/button";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // State untuk menyimpan data cuaca
  const [error, setError] = useState<string>(""); // State untuk menyimpan pesan kesalahan

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset pesan kesalahan
    try {
      const weatherData = await fetchWeatherData(city); // Panggil fungsi fetchWeatherData
      setWeatherData(weatherData); // Simpan data cuaca ke dalam state
    } catch (error: any) { // Menambahkan tipe 'any' untuk error
      setError("Error fetching weather data: " + error.message); // Tangani kesalahan
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-4 flex items-center justify-center">
      <div className="w-full max-w-md space-y-4 bg-white rounded-lg shadow-lg p-6 opacity-90"> {/* Added opacity for transparency */}
        <form onSubmit={handleSubmit} className="space-y-4">
<h1 className="text-3xl font-bold text-center text-gray-800">Cek Cuaca</h1>
          <div className="relative">
            <label htmlFor="city" className="block text-gray-700 text-sm font-medium">
              Masukkan Nama Kota
            </label>
            <div className="flex items-center mt-1">
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-200" // Enhanced styling
                placeholder="Contoh: Jakarta"
                required
              />
              <Button type="submit" className="ml-2 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200" icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4a6 6 0 100 12 6 6 0 000-12zM16.24 16.24l4.24 4.24M20 20l-4.24-4.24" /></svg>}>
                Kirim
              </Button>
            </div>
          </div>
        </form>

        <div id="weather-result" className="bg-white rounded-lg shadow-lg p-6 mt-4"> {/* Tempat untuk menampilkan hasil cuaca */}
          {error && <p className="text-red-500">{error}</p>} {/* Tampilkan pesan kesalahan jika ada */}
          {weatherData && (
            <div className="animate-fade-in"> {/* Added animation class */}
              <h2 className="text-lg font-bold flex items-center text-blue-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" /></svg>
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
      </div>
    </div>
  );
}
