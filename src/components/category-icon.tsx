/** Line icons for the 12 catalog categories. 24×24, stroke = currentColor. */
type Props = { slug: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  "games-hobi": (
    <>
      <path d="M9 21h6" />
      <path d="M8 21c0-3 1-4 1-6H7l2-3H8l3-4a2 2 0 1 1 2 0l3 4h-1l2 3h-2c0 2 1 3 1 6" />
    </>
  ),
  "office-paper-accessories": (
    <path d="M20 12 10.5 21a4.5 4.5 0 0 1-6.4-6.4L14 4.8a3 3 0 0 1 4.2 4.2L8.6 18.6a1.5 1.5 0 0 1-2.1-2.1L15 8" />
  ),
  "cutting-precision": (
    <>
      <path d="M4 20 16 8l4 4L8 24" transform="translate(0 -4)" />
      <path d="M14 6l4-2 2 2-2 4" />
      <path d="M4 20h6" />
    </>
  ),
  "desktop-service": (
    <>
      <path d="M12 3v10" />
      <path d="m9 6 3-3 3 3" />
      <rect x="5" y="13" width="14" height="8" rx="1" />
    </>
  ),
  "binding-punching": (
    <>
      <path d="M6 4c3 0 3 4 6 4s3-4 6-4" />
      <path d="M6 10c3 0 3 4 6 4s3-4 6-4" />
      <path d="M6 16c3 0 3 4 6 4s3-4 6-4" />
    </>
  ),
  "packaging-sealing": (
    <>
      <path d="m3 8 9-5 9 5-9 5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </>
  ),
  "stamp-inks": (
    <>
      <path d="M9 3h6l-1 6c2 1 3 2 3 4H7c0-2 1-3 3-4Z" />
      <rect x="4" y="17" width="16" height="4" rx="1" />
    </>
  ),
  "art-coloring": (
    <>
      <path d="M17 3 21 7 9 19l-4 1 1-4Z" />
      <path d="M14 6l4 4" />
    </>
  ),
  "document-file": (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </>
  ),
  "storage-bags": (
    <>
      <path d="M5 8h14l-1 12H6Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M4 12h16" />
    </>
  ),
  "adhesives-fastening": (
    <>
      <path d="M7 4h7v4l3 1v3H7Z" />
      <path d="M7 12v5a2 2 0 0 0 2 2h3v-7" />
      <path d="M12 19v2" />
    </>
  ),
  "display-identification": (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M13 10h5M13 13h5M6 15h8" />
    </>
  ),
};

export function CategoryIcon({ slug, className = "h-6 w-6" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[slug] ?? <rect x="4" y="4" width="16" height="16" rx="2" />}
    </svg>
  );
}
