'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does thedoradoor work?',
    answer:
      'Thedoradoor uses peer-to-peer technology to transfer files directly between two devices. When you upload a file, the app generates an invite code. Share that code with the recipient, and they can download the file directly from your device. No cloud storage involved.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. All file transfers are encrypted end-to-end. We do not store any of your files on our servers. Your files never pass through or get stored on any central server. Only the sender and receiver have access to the data during the transfer.',
  },

  {
    question: 'Do I need to create an account?',
    answer:
      'No! thedoradoor is designed to be frictionless. You can start sharing files immediately—no sign-up, no login, no personal information required.',
  },
  {
    question: 'What is the maximum file size I can transfer?',
    answer:
      'There is no hard limit on file size from our side. Transfer speed and reliability depend on both parties\' internet connections. However, for very large files (10GB+), we recommend a stable connection for the best experience.',
  },
  {
    question: 'How long does the invite code stay valid?',
    answer:
      'The invite code remains valid as long as your file sharing session is active. Once you close the session or navigate away, the code expires and the file is no longer accessible.',
  },
  {
    question: 'Can I share files with multiple people at once?',
    answer:
      'Currently, each invite code supports a single download session. For sharing with multiple people, you can generate a new session for each recipient.',
  },
  {
    question: 'What browsers are supported?',
    answer:
      'thedoradoor works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-container" id="faq-page">
      <h1 className="page-title">FAQ</h1>
      <p className="page-subtitle">
        Frequently asked questions about thedoradoor.
      </p>

      <div>
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              id={`faq-q-${i}`}
            >
              <span>{faq.question}</span>
              <svg
                className={`faq-chevron ${openIndex === i ? 'open' : ''}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
