import { useState } from "react";
import { fetchWeatherData, WeatherData } from "./api";

/**
 * Custom hook untuk mengelola fetching data cuaca dari API.
 * 
 * State yang dikelola:
 * - city: nama kota input user
 * - weatherData: data cuaca hasil fetch
 * - error: pesan error jika fetch gagal
 * 
 * Fungsi fetchData akan memanggil API dan mengupdate state sesuai hasilnya.
 */
export function useWeather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setError("");
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err: any) {
      setError("Error fetching weather data: " + err.message);
    }
  };

  return {
    city,
    setCity,
    weatherData,
    error,
    fetchData,
  };
}
