import { Header } from "@/components/header/Header";
import { SearchBar } from "@/components/search_bar/SearchBar";

export default function Home() {
  return (
    <main>
      <Header/>
      <div>
      <SearchBar/>
      <button className="bg-[var(--gray)] text-[var(--light)] absolute right-1.5 transform  focus:ring-4 focus:ring-black font-bold rounded-lg text-sm p-2 px-3">
      cadastrar
      </button>
      </div>

    </main>
  );
}
