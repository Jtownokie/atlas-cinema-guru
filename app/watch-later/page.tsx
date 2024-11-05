// Watch Later Page

import MovieCards from "@/components/MovieCards";
import WatchLaterHeader from "@/components/WatchLaterHeader";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <WatchLaterHeader />
      <MovieCards/>
    </div>
  );
}
