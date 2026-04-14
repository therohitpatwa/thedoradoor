'use client';

export default function PartnerBanner() {

  const imageSrc = '/sponsors/maggee.jpg';
  return (
    <div className="partner-banner" id="partner-banner">
      <div className="partner-card">
        {imageSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt="partner"
            className="partner-img"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="partner-cta-wrapper">
            <span className="partner-placeholder">Promote Your Brand Here</span>
            <div className="partner-contact">
              Contact: <a href="mailto:therohitpatwa@gmail.com">therohitpatwa@gmail.com</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
