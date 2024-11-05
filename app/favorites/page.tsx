// Favorites Page
import FavoritesHeader from "@/components/FavoritesHeader";
import MovieCards from "@/components/MovieCards";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <FavoritesHeader />
      <MovieCards />
    </div>
  );
}
