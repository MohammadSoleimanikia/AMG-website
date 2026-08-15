export default function Loading() {
  return (
    <div className="bg-background-default/60 fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm">
      <div role="status">
        <div className="size-7 bg-info-main rounded-full animate-bounce">
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
