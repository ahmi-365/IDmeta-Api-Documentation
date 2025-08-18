import { escapeRegExp } from "@/lib/utils";

export function HighlightedContent({ text, query }) {
  if (!query) return <>{text}</>;

  const safeQuery = escapeRegExp(query);
  const regex = new RegExp(`(${safeQuery})`, "gi");

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span
            key={index}
            id={`search-match-${index}`}
            className="search-highlight"
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
