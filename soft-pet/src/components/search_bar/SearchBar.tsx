'use client';

import { useState } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
  };

  return (
<form onSubmit={handleSubmit} className="pl-8 mx-auto">
  <div className="relative">
    <div className="bg-[var(--gray)] absolute inset-y-0 flex items-center p-3 rounded-l-lg">
      <svg className="w-4 h-4 text-[var(--color_1)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input
      type="search"
      className="block w-full p-3 ps-10 text-[var(--light)] border-3 border-[var(--gray)] rounded-lg focus:border-[var(--gray)] focus:ring-0"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      required
    />
    <button
      type="submit"
      className="bg-[var(--gray)] text-[var(--light)] absolute top-1/2 right-1.5 transform -translate-y-1/2 focus:ring-2 focus:ring-[var(--light)] font-bold rounded-lg text-sm p-2 px-3"
    >
      Pesquisar
    </button>
  </div>
</form>
  );
}
