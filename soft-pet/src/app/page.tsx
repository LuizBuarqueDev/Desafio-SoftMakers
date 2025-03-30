import { Header } from "@/components/header/Header";
import { SearchBar } from "@/components/search_bar/SearchBar";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex justify-between relative w-full">
        <div className="flex flex-grow">
          <SearchBar />
        </div>

        <button
          className="text-[var(--light)] transform focus:ring-2 focus:[var(--light)] font-bold rounded-lg flex items-center gap-2 text-sm p-2 px-3 mx-3"
          style={{ background: "var(--gradient_2)" }}
        >
          <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          Cadastrar
        </button>

      </div>

    </main>
  );
}
