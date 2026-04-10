'use client';

import { useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import SponsorBottom from '@/components/SponsorBottom';
import FileUpload from '@/components/FileUpload';
import FileDownload from '@/components/FileDownload';
import InviteCode from '@/components/InviteCode';
import AboutPage from '@/components/AboutPage';
import FAQPage from '@/components/FAQPage';

export default function Home() {
  const [activePage, setActivePage] = useState<'transfer' | 'about' | 'faq'>('transfer');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [port, setPort] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'send' | 'receive'>('send');

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPort(response.data.port);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = async (port: number) => {
    setIsDownloading(true);

    try {
      const response = await axios.get(`/api/download/${port}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;

      const headers = response.headers;
      let contentDisposition = '';

      for (const key in headers) {
        if (key.toLowerCase() === 'content-disposition') {
          contentDisposition = headers[key];
          break;
        }
      }

      let filename = 'downloaded-file';

      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="(.+)"/);
        if (filenameMatch && filenameMatch.length === 2) {
          filename = filenameMatch[1];
        }
      }

      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download file. Please check the invite code and try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <>
      <Header activePage={activePage} onNavigate={setActivePage} />

      {activePage === 'transfer' && (
        <div className="main-layout" id="transfer-page">
          <div className="left-column">
            {/* Center Content */}
            <div className="center-content">
              {/* Hero Branding */}
              <div className="hero-brand" id="hero-brand">
                <h1 className="hero-title">TheDoraDoor</h1>
                <p className="hero-tagline">
                  <span className="tagline-part1">Wanna Share File !</span>
                  <span className="tagline-part2">Knock Knock on thedoradoor</span>
                </p>
              </div>

              {/* Send / Receive Tabs */}
              <div className="tab-switcher" id="tab-switcher" role="tablist" aria-label="File Transfer Operations">
                <button
                  className={`tab-btn ${activeTab === 'send' ? 'active' : ''}`}
                  onClick={() => setActiveTab('send')}
                  id="tab-send"
                  role="tab"
                  aria-selected={activeTab === 'send'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  Send
                </button>
                <button
                  className={`tab-btn ${activeTab === 'receive' ? 'active' : ''}`}
                  onClick={() => setActiveTab('receive')}
                  id="tab-receive"
                  role="tab"
                  aria-selected={activeTab === 'receive'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Receive
                </button>
              </div>

              {activeTab === 'send' ? (
                <div className="animate-fade-in-up">
                  <FileUpload onFileUpload={handleFileUpload} isUploading={isUploading} />

                  {uploadedFile && !isUploading && (
                    <div className="file-info" style={{ marginTop: '1rem' }}>
                      <div className="file-info-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                          <polyline points="13 2 13 9 20 9" />
                        </svg>
                      </div>
                      <div className="file-info-text">
                        <div className="file-name">{uploadedFile.name}</div>
                        <div className="file-size">{formatFileSize(uploadedFile.size)}</div>
                      </div>
                    </div>
                  )}

                  {isUploading && (
                    <div className="loading-state" style={{ marginTop: '1rem' }}>
                      <div className="spinner"></div>
                      <p>Uploading file...</p>
                    </div>
                  )}

                  <div style={{ marginTop: '1rem' }}>
                    <InviteCode port={port} />
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in-up">
                  <FileDownload onDownload={handleDownload} isDownloading={isDownloading} />

                  {isDownloading && (
                    <div className="loading-state" style={{ marginTop: '1rem' }}>
                      <div className="spinner"></div>
                      <p>Downloading file...</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Sponsors */}
            <SponsorBottom />
          </div>

          {/* Right Hero Text */}
          <div className="right-hero-text animate-fade-in-up">
            <h2>Share your file anywhere<br /> by <span style={{ color: 'var(--blue-600)' }}>TheDoraDoor</span></h2>
          </div>
        </div>
      )}

      {activePage === 'about' && <AboutPage />}
      {activePage === 'faq' && <FAQPage />}

      <footer className="footer" id="footer">
        <p>thedoradoor &copy; {new Date().getFullYear()} — Secure File Transfer App</p>
      </footer>
    </>
  );
}
