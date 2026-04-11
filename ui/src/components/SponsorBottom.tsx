'use client';

export default function SponsorBottom() {

  const imageSrc = '';
  return (
    <div className="sponsor-bottom" id="sponsor-bottom">
      <div className="sponsor-card">
        {imageSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt="bottom sponsor"
            className="sponsor-img"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="sponsor-cta-wrapper">
            <span className="sponsor-placeholder">Promote Your Brand Here</span>
            <div className="sponsor-contact">
              Contact: <a href="mailto:therohitpatwa@gmail.com">therohitpatwa@gmail.com</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
