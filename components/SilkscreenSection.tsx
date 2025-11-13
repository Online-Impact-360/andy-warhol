export default function SilkscreenSection() {
  return (
    <section id="silkscreen" className="section wrap silkscreen flex items-center flex-col px-4 md:px-0">
      <h2 className="text-center text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem]">Behind the Silkscreen: Warhol at Work</h2>
      <div className="w-32 h-px bg-gold mt-2 mb-6"></div>
      <p className="lead text-center max-w-[68ch] mx-auto px-1">
        A rare archival glimpse into Andy Warhol creating the <em>Marlon Brando</em> silkscreen.
        The scale, composition, and format shown in the footage align closely with the privately held work featured here.
      </p>
      <div className="video frame-gold rounded-md w-full h-full overflow-hidden border border-gold/30 bg-black/20 shadow-[0_0_20px_rgba(212,175,55,0.12)]">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/J4o6abzBKy0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Warhol Silkscreen: Marlon Brando"
          />
        </div>
      </div>
      <p className="mt-4! text-white/80 text-[0.95rem] text-center leading-relaxed max-w-[70ch] mx-auto px-2">
        Filmed in Warhol’s studio, this clip reveals the methodical layering and registration intrinsic to his silkscreen practice. Note how the photographic source, scale, and tonal structure echo the present <em>Brando</em> work—underscoring continuity in process and intent.
      </p>
      <div className="source mt-3 text-white/60 text-sm">Source: Archival footage via YouTube</div>
    </section>
  );
}
