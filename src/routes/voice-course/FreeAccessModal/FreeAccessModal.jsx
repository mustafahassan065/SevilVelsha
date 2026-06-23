// src/routes/voice-course/FreeAccessModal/FreeAccessModal.jsx
// Email capture modal — collects name + email, then redirects to free access page
// Added: email typo detection + domain suggestion

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LEAD_API = 'https://sevil-velsha-backend-main.vercel.app/api/voice-free-lead';

// Common domain typos map — wrong → correct
const DOMAIN_TYPOS = {
  // gmail
  'gmail.cem': 'gmail.com', 'gmail.con': 'gmail.com', 'gmail.cmo': 'gmail.com',
  'gmail.cm': 'gmail.com',  'gmail.co': 'gmail.com',  'gmail.om': 'gmail.com',
  'gmial.com': 'gmail.com', 'gmai.com': 'gmail.com',  'gmil.com': 'gmail.com',
  'gmal.com': 'gmail.com',  'gnail.com': 'gmail.com', 'gmaill.com': 'gmail.com',
  // yahoo
  'yahoo.cem': 'yahoo.com', 'yahoo.con': 'yahoo.com', 'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com','yhoo.com': 'yahoo.com',
  // hotmail
  'hotmail.cem': 'hotmail.com', 'hotmail.con': 'hotmail.com', 'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',  'hotmall.com': 'hotmail.com',
  // outlook
  'outlook.cem': 'outlook.com', 'outlook.con': 'outlook.com', 'outlok.com': 'outlook.com',
  'outloook.com': 'outlook.com',
  // icloud
  'icloud.cem': 'icloud.com', 'icloud.con': 'outlook.com', 'iclod.com': 'icloud.com',
};

function detectTypo(email) {
  const parts = email.trim().toLowerCase().split('@');
  if (parts.length !== 2) return null;
  const domain = parts[1];
  if (DOMAIN_TYPOS[domain]) {
    return `${parts[0]}@${DOMAIN_TYPOS[domain]}`;
  }
  return null;
}

export default function FreeAccessModal({ onClose }) {
  const navigate = useNavigate();
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const [suggestion, setSuggestion] = useState(''); // typo suggestion

  // Check for typo on email blur
  const handleEmailBlur = () => {
    if (!email.trim()) return;
    const fix = detectTypo(email);
    if (fix) {
      setSuggestion(fix);
    } else {
      setSuggestion('');
    }
  };

  // User accepts the suggestion
  const applySuggestion = () => {
    setEmail(suggestion);
    setSuggestion('');
    setError('');
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Block submission if typo still detected
    const fix = detectTypo(email);
    if (fix) {
      setSuggestion(fix);
      setError('Please check your email address before submitting.');
      return;
    }
    setLoading(true); setError(''); setSuggestion('');
    try {
      await fetch(LEAD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      localStorage.setItem('vc_free_name', name.trim());
      navigate('/voice-free-access');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: '#fff', maxWidth: 480, width: '100%',
        padding: 'clamp(32px,5vw,52px)', position: 'relative',
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}>

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 16,
            background: 'none', border: 'none', fontSize: 22,
            cursor: 'pointer', color: '#aaa', lineHeight: 1,
          }}
        >×</button>

        {/* Header */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a96e', margin: '0 0 12px' }}>
          Free Access
        </p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 700, color: '#1a1a1a', margin: '0 0 10px', lineHeight: 1.3 }}>
          Start Speaking with Authority — Free
        </h2>
        <p style={{ fontSize: '14px', color: '#777', margin: '0 0 28px', lineHeight: 1.7 }}>
          Get the first Voice Control training video and the free PDF guide before joining the full course.
        </p>

        {/* Name */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#555', marginBottom: 6 }}>
            First Name
          </label>
          <input
            type="text"
            placeholder="Your first name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              width: '100%', padding: '12px 16px', boxSizing: 'border-box',
              border: '1px solid #ddd', fontSize: '14px', color: '#1a1a1a',
              fontFamily: 'inherit', outline: 'none',
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#555', marginBottom: 6 }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => { setEmail(e.target.value); setSuggestion(''); setError(''); }}
            onBlur={handleEmailBlur}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            style={{
              width: '100%', padding: '12px 16px', boxSizing: 'border-box',
              border: `1px solid ${suggestion ? '#e67e22' : error && !suggestion ? '#c0392b' : '#ddd'}`,
              fontSize: '14px', color: '#1a1a1a',
              fontFamily: 'inherit', outline: 'none',
            }}
          />
        </div>

        {/* Typo suggestion */}
        {suggestion && (
          <div style={{
            background: '#fff8ee', border: '1px solid #e67e22',
            padding: '10px 14px', marginBottom: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 12, flexWrap: 'wrap',
          }}>
            <p style={{ fontSize: '13px', color: '#c0392b', margin: 0 }}>
              Did you mean <strong>{suggestion}</strong>?
            </p>
            <button
              onClick={applySuggestion}
              style={{
                background: '#e67e22', color: '#fff', border: 'none',
                padding: '6px 14px', fontSize: '12px', fontWeight: 700,
                cursor: 'pointer', letterSpacing: '0.05em', flexShrink: 0,
              }}
            >
              Yes, fix it
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <p style={{ fontSize: '13px', color: '#c0392b', marginBottom: 12 }}>{error}</p>
        )}

        <div style={{ marginBottom: 20 }} />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: '100%', padding: '16px 24px',
            background: loading ? '#888' : '#1a1a1a',
            color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit', fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            transition: 'background 0.2s',
          }}
        >
          {loading ? 'Getting your access...' : '→ Get Free Access'}
        </button>

        <p style={{ fontSize: '11px', color: '#bbb', textAlign: 'center', marginTop: 12 }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}