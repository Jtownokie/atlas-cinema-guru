// Watch Later Page
import WatchLaterMovieCards from "@/components/WatchLaterMovieCards";
import WatchLaterHeader from "@/components/WatchLaterHeader";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen">
      <WatchLaterHeader />
      <WatchLaterMovieCards />
    </div>
  );
}
