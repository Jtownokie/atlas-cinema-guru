// Movie Cards Component
'use client'
import { UsersTitle } from "@/lib/definitions";
import Card from "./Card";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import { useState } from "react";

interface MovieCardsProps {
  initialData: UsersTitle[];
}

export default function MovieCards({ initialData }: MovieCardsProps) {
  const [movieTitles, setMovieTitles] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = async (newPage: number) => {
    setCurrentPage(newPage);
    try {
      const res = await fetch(`/api/titles?page=${newPage}`);
      const data = await res.json();
      setMovieTitles(data.title);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={'flex flex-col'}>
      <div className="grid grid-cols-3 gap-8 p-7 mx-7">
        {movieTitles.map((title, index) => (
          <Card key={index} id={title.id} image={title.image} title={title.title} year={title.released} synopsis={title.synopsis} genre={title.genre}/>
        ))}
      </div>
      <div className={'flex justify-center mb-7'}>
        <PreviousButton handlePageChange={handlePageChange} movieTitles={movieTitles} currentPage={currentPage} />
        <NextButton handlePageChange={handlePageChange} movieTitles={movieTitles} currentPage={currentPage} />
      </div>
    </div>
  );
}
