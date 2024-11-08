// Filters Component
import { UsersTitle } from '@/lib/definitions';
import React, { useState } from 'react';

interface FiltersProps {
  setMovieTitles: (data: UsersTitle[]) => void;
}

export default function Filters({ setMovieTitles }: FiltersProps) {
  const [title, setTitle] = useState('');
  const [minYear, setMinYear] = useState('1990');
  const [maxYear, setMaxYear] = useState('2024');
  const [genres, setGenres] = useState<string[]>([]);

  const genreOptions = [
    'Romance',
    'Action',
    'Comedy',
    'Drama',
    'Horror',
    'Sci-Fi',
    'Fantasy',
    'Thriller',
    'Adventure',
  ];

  const handleGenreToggle = (genre: string) => {
    setGenres((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter((g) => g !== genre);
      } else {
        return [...prevGenres, genre];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    queryParams.set("page", "1");
    queryParams.set("minYear", minYear);
    queryParams.set("maxYear", maxYear);
    queryParams.set("query", title);
    if (genres.length > 0) {
      queryParams.set("genres", genres.join(","));
    }

    fetch(`/api/titles?${queryParams.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieTitles(data.title);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={'flex flex-row w-100 justify-between'}>
      <div className={'w-4/12 flex flex-col m-7'}>
        <div className={'flex flex-col m-3 mb-2'}>
          <label className={'mb-2'}>Search</label>
          <input 
            type="text"
            name="search"
            placeholder="Search Movies..."
            className={'bg-light-navy outline outline-1 outline-teal rounded-3xl p-2'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={'flex m-3 justify-between'}>
          <div className={'flex flex-col'}>
            <label htmlFor="minYear" className={'mb-2'}>Min Year</label>
            <input 
              type="number"
              name="minYear"
              id="minYear"
              value={minYear}
              step="1"
              className={'bg-light-navy outline outline-1 outline-teal rounded-3xl p-2'}
              onChange={(e) => setMinYear(e.target.value)}
            />
          </div>
          <div className={'flex flex-col'}>
            <label htmlFor="maxYear" className={'mb-2'}>Max Year</label>
            <input
              type="number"
              name="maxYear"
              id="maxYear"
              value={maxYear}
              step="1"
              className={'bg-light-navy outline outline-1 outline-teal rounded-3xl p-2'}
              onChange={(e) => setMaxYear(e.target.value)}
            />
          </div>
      </div>
      </div>
      <div className={'w-4/12 m-7'}>
      <h2 className={'mt-2 mb-1'}>Genres</h2>
        {genreOptions.map((genre) => (
          <button
            type="button"
            key={genre}
            onClick={() => handleGenreToggle(genre)}
            className={`${
              genres.includes(genre) ? 'bg-teal' : 'bg-light-navy'
            } outline outline-1 outline-teal rounded-3xl text-center p-2 m-1`}
          >
            {genre}
          </button>
        ))}
      </div>
      <button type="submit" className={'hidden'}></button>
    </form>
  );
}
