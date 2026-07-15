'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does Anywheredoor work?',
    answer:
      'Anywheredoor uses end-to-end technology to transfer files directly between two devices. When you upload a file, the app generates an invite code. Share that code with the recipient, and they can download the file directly from your device.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. All file transfers are encrypted end-to-end. We do not store any of your files on our servers.',
  },

  {
    question: 'Do I need to create an account?',
    answer:
      'No! Anywheredoor is designed to be frictionless. You can start sharing files immediately—no sign-up, no login, no personal information required.',
  },
  {
    question: 'What is the maximum file size I can transfer?',
    answer:
      'For now you can transfer 100-200 MB size of files smoothly and fast. We are improving our app day by day for limitless and fast sharing.',
  },
  {
    question: 'How long does the invite code stay valid?',
    answer:
      'The invite code is valid for 10 min after generation, and after one successful download, you will not be able to download it again.',
  },
  {
    question: 'Can I share files with multiple people at once?',
    answer:
      'Currently, each invite code supports a single download session. For sharing with multiple people, you can generate a new session for each recipient.',
  },
  {
    question: 'What browsers are supported?',
    answer:
      'Anywheredoor works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience.',
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
        Frequently asked questions about Anywheredoor.
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
