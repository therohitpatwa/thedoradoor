'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="about-page" id="about-page">
      {/* Founder Photo */}
      <div className="about-photo-wrapper">
        <div className="about-photo-ring">
          <Image
            src="/my.png"
            alt="Rohit — Founder of thedoradoor"
            width={180}
            height={180}
            className="about-photo"
            priority
          />
        </div>
        <h2 className="about-founder-name">Rohit</h2>
        <p className="about-founder-role">Developer of thedoradoor</p>
      </div>

      {/* Story */}
      <div className="about-story">
        <h2 className="about-story-title">The Story Behind Thedoradoor</h2>

        <h3 className="about-story-intro">
          I started noticing some major problems in how people share files:
        </h3>

        <div className="problem-sections">
          <div className="problem-item">
            <br />
            <h4 className="problem-title"><span>01</span> The Login Trap</h4>
            <p className="problem-text">
              I saw people at libraries and cyber cafés logging into their WhatsApp Web on public PCs just to move a file from their phone. Half the time people forget to log out and their private chats are just... out there.
            </p>
          </div>

          <div className="problem-item">
            <h4 className="problem-title"><span>02</span> The Stationery Shop Leak</h4>
            <p className="problem-text">
              When you need a  printout of your resume or documents, you end up giving your personal mobile number to the stationery shop dude. Next thing you know, you’re getting unwanted messages and statuses. Total privacy fail.
            </p>
          </div>

          <div className="problem-item">
            <h4 className="problem-title"><span>03</span> The Large File Struggle</h4>
            <p className="problem-text">
              Sharing large files is still a massive headache. It’s making you wait forever or sign up for some random cloud service. I think, it shouldn't be this hard.
            </p>
          </div>
        </div>

        <div className="solution-section">
          <p>
            These were the problems I saw, so I built <strong>thedoradoor</strong>. The name is literally inspired by Doraemon’s Anywhere Door.
          </p>
          <p>
            Just like Doraemon could take you from anywhere to anywhere with his door, TheDoraDoor let you share files <strong>from anywhere, to anywhere</strong> without any login or signup. It’s all peer-to-peer, right in your browser. No middleman, just the anywhere door for your files.
          </p>
        </div>
      </div>
    </div>
  );
}
