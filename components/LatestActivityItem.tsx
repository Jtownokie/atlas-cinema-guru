// Latest Activity Item Component
'use client'

type LatestActivityProps = {
  timestamp: string;
  activity: string;
  title: string;
}

export default function LatestActivityItem({ timestamp, activity, title }: LatestActivityProps) {
  const date = new Date(timestamp);
  const formattedTime = date.toLocaleString('en-us', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  return (
    <div className={'mx-3 my-3 max-w-48'}>
      <div>{formattedTime}</div>
      <div>{activity === 'FAVORITED' ? 'Favorited' : 'Added'} <strong>{title}</strong>{activity === 'WATCH_LATER' ? ' to watch later' : ''}</div>
    </div>
  );
}
