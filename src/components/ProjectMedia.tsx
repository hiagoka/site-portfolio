import type { Project } from "../data/portfolio";

/** Converte um link do YouTube / Loom / Vimeo em URL de embed. */
function toEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    if (host === "loom.com") {
      return url.replace("/share/", "/embed/");
    }
    if (host === "vimeo.com") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function ProjectMedia({ project }: { project: Project }) {
  const { video, image, title } = project;

  if (video) {
    const embed = toEmbed(video);
    if (embed) {
      return (
        <div className="aspect-video w-full border border-line bg-black">
          <iframe
            src={embed}
            title={`Apresentacao — ${title}`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <video
        src={video}
        controls
        playsInline
        className="aspect-video w-full border border-line bg-black object-cover"
      />
    );
  }

  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className="w-full border border-line bg-bg-subtle object-cover"
      />
    );
  }

  return (
    <div className="flex aspect-video w-full items-center justify-center border border-dashed border-line font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
      [ sem midia &mdash; adicione video ou image ]
    </div>
  );
}
