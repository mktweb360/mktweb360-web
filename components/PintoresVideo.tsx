"use client";
import { trackVideo } from "@/lib/track";

/** Vídeo de presentación: sin reproducción automática, sin precarga hasta pulsar, con subtítulos. */
export function PintoresVideo({ src, poster, vtt, lang, title }: { src: string; poster: string; vtt: string; lang: string; title: string }) {
  return (
    <video
      className="w-full rounded-2xl shadow-xl bg-black"
      controls
      preload="none"
      playsInline
      poster={poster}
      aria-label={title}
      onPlay={() => trackVideo({ id: "pintores-presentacion", page: window.location.pathname })}
    >
      <source src={src} type="video/mp4" />
      <track kind="subtitles" src={vtt} srcLang={lang} label={lang.toUpperCase()} default />
    </video>
  );
}
