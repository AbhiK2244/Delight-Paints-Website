export function FeatureIcon({ type }) {
  if (type === "flask") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
      >
        <path d="M9 3h6" />
        <path d="M10 3v6.5L5 18a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-8.5V3" />
        <path d="M8 16h8" />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
      >
        <path d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" />
        <path d="m9 20 1-2" />
        <path d="m13 20 1-2" />
        <path d="m17 20 1-2" />
      </svg>
    );
  }

  if (type === "sparkle") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-9 w-9"
      >
        <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
        <path d="m5 14 .5 1.5L7 16l-1.5.5L5 18l-.5-1.5L3 16l1.5-.5L5 14Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-9 w-9"
    >
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
