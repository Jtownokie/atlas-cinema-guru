// Log Out Button Component
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

export default async function LogOutButton() {
  return (
    <div className={'flex flex-row items-center'}>
      <ArrowRightEndOnRectangleIcon className={'size-5 mr-1'} />
      <div>Logout</div>
    </div>
  );
}
