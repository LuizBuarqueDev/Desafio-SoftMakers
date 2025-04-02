'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form className="flex w-full">
      <div className="relative w-full">
        <div className="bg-[var(--gray)] absolute inset-y-0 flex items-center p-3 rounded-l-lg">
          <svg className="w-4 h-4 text-[var(--color_1)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-3 ps-10 text-[var(--light)] border-3 border-[var(--gray)] rounded-lg focus:border-[var(--gray)] focus:ring-0"
          value={query}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}