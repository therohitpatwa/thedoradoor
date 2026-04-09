'use client';

export default function AboutPage() {
  return (
    <div className="page-container" id="about-page">
      <h1 className="page-title">About Us</h1>
      <p className="page-subtitle">
        Building the future of secure, peer-to-peer file sharing.
      </p>

      <div className="about-card">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
          Our Mission
        </h3>
        <p>
          At thedoradoor, we believe file sharing should be simple, fast, and private.
          Our peer-to-peer architecture means your files never touch a central server—they
          go directly from sender to receiver, encrypted end-to-end.
        </p>
      </div>

      <div className="about-card">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Security First
        </h3>
        <p>
          Every transfer is protected with industry-standard encryption. We don&apos;t store
          your files, metadata, or transfer history. Your data is yours—always.
        </p>
      </div>

      <div className="about-card">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          Lightning Fast
        </h3>
        <p>
          By leveraging direct peer connections, thedoradoor achieves transfer speeds
          limited only by your own internet connection—no bottlenecks, no throttling,
          no middleman slowing things down.
        </p>
      </div>

      <div className="about-card">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Open & Transparent
        </h3>
        <p>
          We&apos;re committed to transparency. Our codebase is open source, our protocols
          are well-documented, and our community is growing. Join us in making the
          internet a more private place.
        </p>
      </div>
    </div>
  );
}
