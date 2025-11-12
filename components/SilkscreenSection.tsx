export default function SilkscreenSection() {
  return (
    <section className="section wrap silkscreen">
      <h2>Behind the Silkscreen: Warhol at Work</h2>
      <p className="lead">
        A rare archival glimpse into Andy Warhol creating the <em>Marlon Brando</em> silkscreen.
        The scale, composition, and format shown in the footage align closely with the privately held work featured here.
      </p>
      <div className="video frame-gold">
        <iframe
          src="https://www.youtube.com/embed/J4o6abzBKy0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="Warhol Silkscreen: Marlon Brando"
        />
      </div>
      <div className="source">Source: Archival footage via YouTube</div>
    </section>
  );
}
