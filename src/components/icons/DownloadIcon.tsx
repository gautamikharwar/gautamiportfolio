export default function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 3v9" />
      <path d="M6.5 8.5 10 12l3.5-3.5" />
      <path d="M4 14.5v1.25A1.25 1.25 0 0 0 5.25 17h9.5A1.25 1.25 0 0 0 16 15.75V14.5" />
    </svg>
  );
}
