// Home Page
'use client'
import Filters from "@/components/Filters";
import MovieCards from "@/components/MovieCards";

export default function Page() {

  return (
    <div className="flex flex-col w-screen">
      <Filters />
      <MovieCards />
    </div>
  );
}
