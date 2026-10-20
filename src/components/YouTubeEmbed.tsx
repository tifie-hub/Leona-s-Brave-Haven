import { youtubeEmbedUrl, site } from "@/lib/site";

export function YouTubeEmbed({
  title = `${site.name} on YouTube`,
}: {
  title?: string;
}) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-charcoal shadow-[0_8px_24px_rgba(48,48,48,0.08)]">
      <iframe
        src={youtubeEmbedUrl}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
