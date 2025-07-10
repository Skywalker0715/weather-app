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
    <form onSubmit={onSubmit} className="flex items-center space-x-3 bg-white bg-opacity-30 backdrop-blur-lg rounded-full px-4 py-1 max-w-md mx-auto shadow-lg">
      <input
        type="text"
        id="city"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Masukan Kota"
        className="flex-grow bg-transparent placeholder-gray-300 text-gray-900 focus:outline-none text-base font-medium"
        required
      />
      <Button
        type="submit"
        className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 shadow-lg flex items-center justify-center hover:brightness-110 transition p-0"
        aria-label="Search"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
        }
      />
    </form>
  );
}
