// Watch Later Movie Cards Component
'use client'

import Card from "./Card";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import { UsersTitle } from "@/lib/definitions";
import { useState } from "react";

interface MovieCardsProps {
  movieData: UsersTitle[];
  setMovieTitles: (data: UsersTitle[]) => void;
}

export default function WatchLaterMovieCards({ movieData, setMovieTitles }: MovieCardsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = async (newPage: number) => {
    setCurrentPage(newPage);
    try {
      const res = await fetch(`/api/watch-later?page=${newPage}`);
      const data = await res.json();
      setMovieTitles(data.watchLater);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={'flex flex-col'}>
      <div className="grid grid-cols-3 gap-8 p-7 mx-7">
        {movieData.map((title, index) => (
          <Card 
            key={index} 
            id={title.id}
            image={title.image}
            title={title.title}
            year={title.released}
            synopsis={title.synopsis}
            genre={title.genre}
            favorited={title.favorited}
            watchLater={title.watchLater}
          />
        ))}
      </div>
      <div className={'flex justify-center mb-7'}>
        <PreviousButton handlePageChange={handlePageChange} movieTitles={movieData} currentPage={currentPage} />
        <NextButton handlePageChange={handlePageChange} movieTitles={movieData} currentPage={currentPage} />
      </div>
    </div>
  );
}
