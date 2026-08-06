'use client'; // Error components must be Client Components
import { useEffect } from 'react';

export default function ErrorComponent({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>مشکلی پیش آمده است !!</h2>
      <p></p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset && reset()
        }
      >
        مجددا تلاش کنید
      </button>
    </div>
  );
}
