// Card Component
import Image from 'next/image';
import { ClockIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/outline';
import { ClockIcon as SolidClock } from '@heroicons/react/24/solid';
import { StarIcon as SolidStar } from '@heroicons/react/24/solid';
import { useState } from 'react';

type CardProps = {
  id: string;
  image: string;
  title: string;
  year: number;
  synopsis: string;
  genre: string;
}

export default function Card(props: CardProps) {
  const [inFavorites, updateFavorites] = useState(false);
  const [inWatchLater, updateWatchLater] = useState(false);

  const handleFavoritesUpdate = (favorited: boolean) => {
    if (!favorited) {
      fetch(`/api/favorites/${props.id}`, {method: "POST", body: JSON.stringify({ id: props.id })})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      updateFavorites(true);
    } else if (favorited) {
      fetch(`/api/favorites/${props.id}`, {method: "DELETE", body: JSON.stringify({ id: props.id })})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      updateFavorites(false);
    }
  };

  const handleWatchLaterUpdate = (watchLater: boolean) => {
    if (!watchLater) {
      fetch(`/api/watch-later/${props.id}`, {method: "POST", body: JSON.stringify({ id: props.id })})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      updateWatchLater(true);
    } else if (watchLater) {
      fetch(`/api/watch-later/${props.id}`, {method: "DELETE", body: JSON.stringify({ id: props.id })})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      updateWatchLater(false);
    }
  }

  return (
    <div className="relative group overflow-hidden rounded-lg outline outline-1 outline-teal">
      <div className={'absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
        <button onClick={() => handleFavoritesUpdate(inFavorites)}>
          {
            inFavorites ? 
            <SolidStar className={'w-6 h-6 cursor-pointer'} /> :
            <StarIcon className={'w-6 h-6 cursor-pointer'} />
          }
        </button>
        <button onClick={() => handleWatchLaterUpdate(inWatchLater)}>
          {
            inWatchLater ?
            <SolidClock className={'w-6 h-6 cursor-pointer'} /> :
            <ClockIcon className={'w-6 h-6 cursor-pointer'} />
          }
        </button>
      </div>
      <Image
        priority
        src={props.image}
        alt="Movie Image"
        width="600"
        height="600"
        className={'object-cover w-full h-full'}
      />
      <div className={'absolute bottom-0 left-0 right-0 p-4 bg-light-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
        <h2 className={'text-lg my-2'}>{props.title} ({props.year})</h2>
        <p className={'text-base my-2'}>{props.synopsis}</p>
        <div className={'flex flex-wrap justify-start gap-2'}>
          <div className={'my-2 bg-dark-teal rounded-3xl p-2'}>{props.genre}</div>
        </div>
      </div>
    </div>
  );
}
