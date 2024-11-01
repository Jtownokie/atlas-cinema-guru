// Card Component
import Image from 'next/image';
import placeholder from '@/assets/placeholder.svg';
import { ClockIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/outline';
import { ClockIcon as SolidClock } from '@heroicons/react/24/solid';
import { StarIcon as SolidStar } from '@heroicons/react/24/solid';

export default async function Card() {
  return (
    <div className="group my-2 mx-4 w-3/12">
      <ClockIcon className={'size-6 hidden z-10 group-hover:absolute inset-0 text-teal'} />
      <StarIcon className={'size-6 hidden z-10 group-hover:absolute inset-0 text-teal'} />
      <Image
        src={placeholder}
        alt="Movie Image"
        className={'block rounded-lg'}
      />
      <div>
        <h2 className={'hidden z-10'}>Beneath the Surface (2021)</h2>
        <p className={'hidden z-10'}>A marine biologist discovers a hidden underwater civilization</p>
        <div className={'hidden z-10'}>Sci-Fi</div>
      </div>
    </div>
  );
}
