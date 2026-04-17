// src/routes/voice-course/FreeAccessModal/FreeAccessModal.jsx
// Email capture modal — collects name + email, then redirects to free access page

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LEAD_API = '/api/voice-free-lead';

export default function FreeAccessModal({ onClose }) {
  const navigate = useNavigate();
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true); setError('');
    try {
      await fetch(LEAD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      // Save name for free access page
      localStorage.setItem('vc_free_name', name.trim());
      navigate('/voice-free-access');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
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

        {/* Form */}
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

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#555', marginBottom: 6 }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            style={{
              width: '100%', padding: '12px 16px', boxSizing: 'border-box',
              border: '1px solid #ddd', fontSize: '14px', color: '#1a1a1a',
              fontFamily: 'inherit', outline: 'none',
            }}
          />
        </div>

        {error && (
          <p style={{ fontSize: '13px', color: '#c0392b', marginBottom: 12 }}>{error}</p>
        )}

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