import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "MHS Elektroinstallation GmbH",
  description:
    "MHS Elektroinstallation GmbH in Bad Fischau: Elektroinstallationen, Blitzschutz, Schaltschränke, Zählerkästen und E-Befunde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Script id="reset-scroll-on-refresh" strategy="beforeInteractive">
          {`
            (function () {
              try {
                if ("scrollRestoration" in window.history) {
                  window.history.scrollRestoration = "manual";
                }

                var entries = performance.getEntriesByType && performance.getEntriesByType("navigation");
                var navigation = entries && entries[0];
                var isReload = navigation
                  ? navigation.type === "reload"
                  : performance.navigation && performance.navigation.type === 1;

                if (isReload) {
                  if (window.location.hash) {
                    window.history.replaceState(
                      null,
                      document.title,
                      window.location.pathname + window.location.search
                    );
                  }

                  window.scrollTo(0, 0);
                }
              } catch (error) {}
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
