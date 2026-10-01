import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Provisual — 3D Architectural Visualization Studio" },
      {
        name: "description",
        content:
          "Explore Provisual's immersive architectural portfolio through a cinematic 3D chalet walkthrough.",
      },
      { property: "og:title", content: "Provisual — 3D Architectural Visualization Studio" },
      {
        property: "og:description",
        content: "An immersive 3D architectural portfolio by Provisual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-full overflow-hidden bg-background">
      <iframe
        className="h-full w-full border-0"
        src="/provisual-portfolio.html"
        title="Provisual 3D architectural portfolio"
        allow="fullscreen"
      />
    </main>
  );
}
