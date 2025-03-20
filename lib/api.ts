export const API_KEY = "277cba4380cfec1c128c2c8eb94becac";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number; // Menambahkan feels_like
    humidity: number; // Menambahkan humidity
  };
  weather: Array<{
    description: string;
  }>;
  wind: { // Menambahkan wind
    speed: number;
  };
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
const data: unknown = await response.json(); // Menggunakan unknown untuk menghindari kesalahan konversi
if (isWeatherData(data)) {
    // Konversi suhu dari Kelvin ke Celsius
    data.main.temp -= 273.15;
    data.main.feels_like -= 273.15;
    return data; // Pastikan untuk mengembalikan tipe WeatherData

    }
    throw new Error("Invalid weather data format");
};

// Fungsi untuk memeriksa apakah data sesuai dengan tipe WeatherData
const isWeatherData = (data: any): data is WeatherData => {
    return (
        typeof data.name === 'string' &&
        typeof data.main === 'object' &&
        typeof data.main.temp === 'number' &&
        typeof data.main.feels_like === 'number' &&
        typeof data.main.humidity === 'number' &&
        Array.isArray(data.weather) &&
        data.weather.every((w: any) => typeof w.description === 'string') &&
        typeof data.wind === 'object' &&
        typeof data.wind.speed === 'number'
    );
};
