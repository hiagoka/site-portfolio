import { toEmbed } from "@/lib/media";
import { useLang } from "@/hooks/useLang";

type Props = { video?: string; image?: string; title: string };

/** Video (embed ou .mp4), imagem ou placeholder — a midia do card de projeto. */
export function ProjectMedia({ video, image, title }: Props) {
  const { t } = useLang();

  if (video) {
    const embed = toEmbed(video);
    return embed ? (
      <div className="aspect-video w-full border border-line bg-black">
        <iframe
          src={embed}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ) : (
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
      {t.ui.noMedia}
    </div>
  );
}
