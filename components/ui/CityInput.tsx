'use client';

import React from "react";
import { Button } from "./button";

type CityInputProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
};

export default function CityInput({ city, setCity, onSubmit }: CityInputProps) {
  return (
    <form onSubmit={onSubmit}   
    className="space-y-6 rounded-xl p-6 shadow-lg max-w-md mx-auto transition-all duration-500 ease-in-out hover:shadow-2xl backdrop-blur-2xl"
    style={{ background: "rgba(255,255,255,0.50)" }}>
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-4 drop-shadow-sm">Cek Cuaca</h1>
      <div className="relative">
        <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-2">
          Masukkan Nama Kota
        </label>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-grow p-3 rounded-lg border border-gray-300 bg-white bg-opacity-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
            placeholder="Contoh: Jakarta"
            required
          />
          <Button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-md flex items-center justify-center"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4a6 6 0 100 12 6 6 0 000-12zM16.24 16.24l4.24 4.24M20 20l-4.24-4.24" />
              </svg>
            }
          >
            Kirim
          </Button>
        </div>
      </div>
    </form>
  );
}
