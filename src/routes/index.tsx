import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Provisual — 3D Architectural Visualization Studio" },
      {
        name: "description",
        content:
          "Provisual is a 3D architectural visualization studio. Walk through a photorealistic chalet in a cinematic, real-time 3D tour — architecture, interiors and landscape rendered like photography.",
      },
      { property: "og:title", content: "Provisual — 3D Architectural Visualization Studio" },
      {
        property: "og:description",
        content:
          "Walk through a photorealistic chalet in a cinematic real-time 3D tour by Provisual, a 3D architectural visualization studio.",
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
