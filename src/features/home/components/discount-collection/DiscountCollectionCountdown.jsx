"use client";

import { useEffect, useState } from "react";

const initialState = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MINUTE = 60;

export default function DiscountCollectionCountdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(initialState);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateTime = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((target - now) / 1000));

      const days = Math.floor(diff / SECONDS_PER_DAY);
      const hours = Math.floor((diff % SECONDS_PER_DAY) / SECONDS_PER_HOUR);
      const minutes = Math.floor((diff % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
      const seconds = diff % SECONDS_PER_MINUTE;

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateTime();
    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center text-lg font-semibold gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-white"
      >
        <path d="M13.5631 11.7661L10.7746 9.67465V5.41441C10.7746 4.98605 10.4283 4.6398 9.99996 4.6398C9.5716 4.6398 9.22535 4.98605 9.22535 5.41441V10.062C9.22535 10.306 9.34 10.5361 9.5352 10.6817L12.6336 13.0055C12.7673 13.1062 12.9302 13.1606 13.0975 13.1604C13.3338 13.1604 13.5662 13.0543 13.718 12.8498C13.9752 12.5081 13.9055 12.0225 13.5631 11.7661Z" />
        <path d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5143 20 10C20 4.48566 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.6592 1.54918 10C1.54918 5.34082 5.34082 1.54918 10 1.54918C14.66 1.54918 18.4508 5.34082 18.4508 10C18.4508 14.6592 14.6592 18.4508 10 18.4508Z" />
      </svg>

      <div className="flex gap-1 text-white">
        <span>{timeLeft.days}d</span>:<span>{timeLeft.hours}h</span>:
        <span>{timeLeft.minutes}m</span>:<span>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
}

