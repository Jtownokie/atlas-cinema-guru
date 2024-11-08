// Watch Later Page
'use client'

import WatchLaterMovieCards from "@/components/WatchLaterMovieCards";
import WatchLaterHeader from "@/components/WatchLaterHeader";
import { UsersTitle } from "@/lib/definitions";
import { useState, useEffect } from "react";

export default function Page() {
  const [movieTitles, setMovieTitles] = useState<UsersTitle[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`/api/watch-later`);
        const data = await res.json();
        setMovieTitles(data.watchLater);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <WatchLaterHeader />
      <WatchLaterMovieCards movieData={movieTitles} setMovieTitles={setMovieTitles} />
    </div>
  );
}
