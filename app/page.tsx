// Home Page
import Filters from "@/components/Filters";
import MovieCards from "@/components/MovieCards";
import { fetchTitles } from "@/lib/data";

export default async function Page() {
  let initialData = await fetchTitles(1, 1990, 2024, "", [""], "");

  return (
    <div className="flex flex-col w-screen">
      <Filters />
      <MovieCards initialData={initialData} />
    </div>
  );
}
