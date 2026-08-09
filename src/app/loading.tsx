export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <div className="w-screen flex justify-center items-center h-screen bg-overlay">
    <div className="bg-background-paper flex justify-center items-center rounded-3xl size-56"> در حال بارگیری...</div>
  </div>
}