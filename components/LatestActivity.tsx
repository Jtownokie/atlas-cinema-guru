// Latest Activity Component
'use client'
import LatestActivityItem from "./LatestActivityItem";
import { useState, useEffect } from 'react';

type Activity = {
  id: string;
  timestamp: string;
  activity: string;
  title: string;
}

export default function LatestActivity() {
  const [latestActivities, setLatestActivities] = useState<Activity[]>([])

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch(`/api/activities`);
        const data = await res.json();
        setLatestActivities(data.activities);
      } catch (err) {
        console.error(err);
      }
    }

    fetchActivities();
  }, []);

  return (
    <div className={'bg-teal text-navy rounded-xl mx-4'}>
      <h2 className={'text-center font-bold text-lg mx-5 my-3 pt-3'}>Latest Activities</h2>
      {latestActivities.map((activity, index) => (
          <LatestActivityItem
            key={index}
            timestamp={activity.timestamp}
            activity={activity.activity}
            title={activity.title}
          />
      ))}
    </div>
  );
}
