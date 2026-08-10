'use client';

import { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';

type OtpTimerProps = {
  initialTime?: number;
  onComplete?: () => void;
};

export default function OtpTimer({
  initialTime = 120,
  onComplete,
}: OtpTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const progress = (timeLeft / initialTime) * 100;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="relative inline-flex">
      <CircularProgress
        variant="determinate"
        value={100}
        size={90}
        thickness={4}
        className="absolute text-grey-200"
      />

      <CircularProgress
        variant="determinate"
        value={progress}
        size={90}
        thickness={4}
        className="text-info-main"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Typography>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </Typography>
      </div>
    </div>
  );
}