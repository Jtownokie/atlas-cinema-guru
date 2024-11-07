// Favorites Page
import FavoritesHeader from "@/components/FavoritesHeader";
import FavoritesMovieCards from "@/components/FavoritesMovieCards";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen">
      <FavoritesHeader />
      <FavoritesMovieCards />
    </div>
  );
}
