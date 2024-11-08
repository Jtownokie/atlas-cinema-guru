// Home Page
'use client'
import Filters from "@/components/Filters";
import MovieCards from "@/components/MovieCards";
import { UsersTitle } from "@/lib/definitions";
import { useState, useEffect } from 'react';

export default function Page() {
  const [movieTitles, setMovieTitles] = useState<UsersTitle[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`/api/titles`);
        const data = await res.json();
        setMovieTitles(data.title);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col w-screen">
      <Filters setMovieTitles={setMovieTitles} />
      <MovieCards movieData={movieTitles} setMovieTitles={setMovieTitles} />
    </div>
  );
}
