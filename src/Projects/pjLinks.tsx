import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
interface PjLinksProps{
    url: string;
}
export function PjLinks ({url}: PjLinksProps) {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const handleFocus = () => setLoading(false);
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);
  const isExternal = url.startsWith("http");

  const handleHover = () => {
    if (!isExternal) return;
    const origin = new URL(url).origin;
    if (document.querySelector(`link[href="${origin}]`)) return;
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    link.crossOrigin = "anonymous";

    document.head.appendChild(link);
  };
  if (!isExternal) {
    return (
      <Link
        to={url}
        preload="intent"
        onClick={() => setLoading(true)}
        className="font-medium underline"
      >
        {Loading ? "Opening.." : "View Project"}
      </Link>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleHover}
      onClick={() => setLoading(true)}
      className="font-medium underline"
    >
      {Loading ? 'Opening' : 'View Project'}
    </a>
  );
}
