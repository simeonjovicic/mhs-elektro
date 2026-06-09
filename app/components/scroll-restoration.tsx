"use client";

import { useEffect } from "react";

export function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const [navigation] = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];

    if (navigation?.type === "reload") {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          document.title,
          window.location.pathname + window.location.search,
        );
      }

      const resetScroll = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "auto" });
      };

      window.requestAnimationFrame(resetScroll);
      window.setTimeout(resetScroll, 50);
      window.setTimeout(resetScroll, 250);
    }
  }, []);

  return null;
}
