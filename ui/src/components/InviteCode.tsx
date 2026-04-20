'use client';

import { useState } from 'react';

interface InviteCodeProps {
  port: number | null;
  fileName?: string;
  onReset?: () => void;
}

export default function InviteCode({ port, fileName, onReset }: InviteCodeProps) {
  const [copied, setCopied] = useState(false);

  if (!port) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(port.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="invite-card success-card" id="invite-card">
      <div className="card-header">
        <h4 className="success-title">
          File Ready to Share!
        </h4>
        <p className="success-subtitle">
          Share this invite code with anyone you want to share the file with:
        </p>
      </div>

      {fileName && (
        <div className="file-name-strip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13 2 13 9 20 9" />
          </svg>
          <span className="file-name-text">{fileName}</span>
        </div>
      )}

      <div className="invite-code-group">
        <div className="code-box">
          <span className="code-text">{port}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="copy-button-modern"
          aria-label="Copy invite code"
          id="copy-code-btn"
        >
          {copied ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>

      <p className="expiry-notice">
        This code will be valid as long as your file sharing session is active.
      </p>

      {onReset && (
        <div className="reset-action">
          <button onClick={onReset} className="btn-reset" id="send-another-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 4v6h-6" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Send Another
          </button>
        </div>
      )}
    </div>
  );
}
