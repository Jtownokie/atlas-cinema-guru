// Nav Button Component
import { FolderIcon, StarIcon, ClockIcon } from '@heroicons/react/24/solid';

export async function HomeButton() {
  return (
    <div className={'flex flex-row my-4 mx-auto group-hover:ml-8'}>
      <FolderIcon className={'size-6'} />
      <div className={'ml-2 hidden group-hover:inline'}>Home</div>
    </div>
  );
}

export async function FavoritesButton() {
  return (
    <div className={'flex flex-row my-4 mx-auto group-hover:ml-8'}>
      <StarIcon className={'size-6'} />
      <div className={'ml-2 hidden group-hover:inline'}>Favorites</div>
    </div>
  );
}

export async function WatchLaterButton() {
  return (
    <div className={'flex flex-row my-4 mx-auto group-hover:ml-8'}>
      <ClockIcon className={'size-6'} />
      <div className={'ml-2 hidden group-hover:inline'}>Watch Later</div>
    </div>
  );
}
