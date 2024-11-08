// Favorites Page
'use client'

import FavoritesHeader from "@/components/FavoritesHeader";
import FavoritesMovieCards from "@/components/FavoritesMovieCards";
import { useState, useEffect } from "react";
import { UsersTitle } from "@/lib/definitions";

export default function Page() {
  const [movieTitles, setMovieTitles] = useState<UsersTitle[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`/api/favorites`);
        const data = await res.json();
        setMovieTitles(data.favorites);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <FavoritesHeader />
      <FavoritesMovieCards movieData={movieTitles} setMovieTitles={setMovieTitles} />
    </div>
  );
}
