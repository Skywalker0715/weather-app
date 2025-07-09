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
    <form onSubmit={onSubmit} className="space-y-4">
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
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-200"
            placeholder="Contoh: Jakarta"
            required
          />
          <Button
            type="submit"
            className="ml-2 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
