import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          question: formData.question,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        setFormData({ name: '', email: '', question: '' });
      } else {
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email us at info@sevilvelsha.com'
      });
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Responsive styles
  const heroSectionStyle = {
    backgroundColor: '#f5f5f0',
    padding: '80px 40px 60px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto'
  };



  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    fontSize: '15px',
    backgroundColor: '#fff',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ fontFamily: '"Maison Neue", Arial, Helvetica, sans-serif', backgroundColor: '#f5f5f0' }}>
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 40px 20px 30px !important;
            gap: 30px !important;
          }
          .hero-title {
            font-size: 36px !important;
          }
          .hero-text {
            font-size: 16px !important;
          }
          .meet-author-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .meet-author-title {
            font-size: 32px !important;
          }
          .section-padding {
            padding: 40px 20px !important;
          }
          .section-title {
            font-size: 24px !important;
          }
          .form-container {
            padding: 30px 20px !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          .form-select {
            width: 100% !important;
          }
          .message-checkbox-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .floating-button {
            width: 60px !important;
            height: 60px !important;
            font-size: 11px !important;
            bottom: 15px !important;
            right: 15px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px !important;
          }
          .section-title {
            font-size: 20px !important;
          }
          .meet-author-title {
            font-size: 28px !important;
          }
        }
      `}</style>
      {/* Hero Section */}
      {/* <section className="hero-section" style={heroSectionStyle}>
     
        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <img
            src="/profile.png"
            alt="Sevil Velsha"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

       
        <div>
          <h1 className="hero-title" style={{
            fontSize: '56px',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#212322',
            fontFamily: 'Georgia, serif'
          }}>
            Contact
          </h1>
          <p className="hero-text" style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#333',
            maxWidth: '500px'
          }}>
            We&apos;d love to hear from you! Whether you have a question about the
            podcast, feedback to share, or some good news worth celebrating,
            we&apos;re all ears. While we can&apos;t respond to every message, please know
            that we see you, we hear you, and we appreciate you.
          </p>
        </div>
      </section> */}


      {/* Contact Information Section */}
      <section className="section-padding" style={{
        backgroundColor: '#fff',
        padding: '60px 40px',
        borderTop: '1px solid #e0e0e0',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title" style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#000',
            fontFamily: 'Arial, sans-serif'
          }}>
            Contact Info
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '15px',
            color: '#666',
            display: 'flex',
            alignItems: 'center'
          }}>
         
            <span style={{ marginRight: '8px' }}>📩</span>
           Email: info@sevilvelsha.com
          </p>
   
          <p style={{
            fontSize: '16px',
            marginBottom: '15px',
            color: '#666',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            
          </p>
        </div>
      </section>

      {/* Inquiries Section */}
      {/* <section className="section-padding" style={{
        backgroundColor: '#fff',
        padding: '60px 40px',
        borderTop: '1px solid #e0e0e0'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title" style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#212322',
            fontFamily: 'Georgia, serif'
          }}>
            Inquiries
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#333',
            marginBottom: '20px'
          }}>
            Got a question or something to share? Use the contact form below to reach the Sevil Velsha team. We
            can&apos;t respond to every message, but we do read them all — and your stories often help shape future
            podcast episodes.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#333'
          }}>
            If you&apos;re looking for support on a personal topic, check out our complete library of{' '}
            <a href="#" style={{
              color: '#333',
              textDecoration: 'underline',
              textUnderlineOffset: '3px'
            }}>
              podcast episodes
            </a>
            . The{' '}
            <a href="#" style={{
              color: '#333',
              textDecoration: 'underline',
              textUnderlineOffset: '3px'
            }}>
              search tool
            </a>{' '}
            is surprisingly thorough — you can look up any topic and it&apos;ll surface episodes and clips that
            speak to exactly what you&apos;re going through.
          </p>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="section-padding" style={{
        backgroundColor: '#fff',
        padding: '40px 40px 80px'
      }}>
        <div className="form-container" style={{
          maxWidth: '1000px',
          margin: '0 auto',
          backgroundColor: '#f5f5f0',
          borderRadius: '16px',
          padding: '50px'
        }}>
          <h3 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '15px',
            color: '#212322',
            fontFamily: 'Georgia, serif'
          }}>
            Have a question?
          </h3>
          <p style={{
            textAlign: 'center',
            marginBottom: '35px',
            fontSize: '15px',
            color: '#555'
          }}>
            For all other inquiries, please use this form to get in touch with the Sevil Velsha .
          </p>

          <form onSubmit={handleSubmit}>
            {/* Status Message */}
            {submitStatus.message && (
              <div style={{
                padding: '15px',
                marginBottom: '20px',
                borderRadius: '8px',
                backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                fontSize: '14px'
              }}>
                {submitStatus.message}
              </div>
            )}

            {/* Name */}
            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '15px' }}>
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* Question */}
            <div style={{ marginBottom: '25px' }}>
              <textarea
                name="question"
                placeholder="Your Question*"
                value={formData.question}
                onChange={handleChange}
                required
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit', minHeight: '130px' }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? '#ccc' : '#5b7c99',
                  color: '#212322',
                  border: '1px solid #212322',
                  borderRadius: '10px',
                  padding: '14px 50px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  opacity: isSubmitting ? 0.6 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#f5f5f0',
        borderTop: '1px solid #e0e0e0',
        padding: '30px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <span style={{ fontSize: '14px', color: '#555' }}>© {new Date().getFullYear()} Sevil Velsha</span>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Approach', href: '/#approach' },
            { label: 'Program', href: '/#program' },
            { label: 'About', href: '/#about' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ fontSize: '14px', color: '#333', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = '#000'}
              onMouseLeave={e => e.target.style.color = '#333'}
            >
              {label}
            </a>
          ))}
          <a
            href="/#apply-now"
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#212322',
              textDecoration: 'none',
              border: '1px solid #212322',
              borderRadius: '20px',
              padding: '7px 18px',
            }}
          >
            Apply Now
          </a>
        </nav>
      </footer>

      {/* New Here Floating Button */}
      {/* <div className="floating-button" style={{
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        backgroundColor: '#FFD700',
        color: '#212322',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
        zIndex: 1000,
        textAlign: 'center',
        lineHeight: 1.3
      }}>
        <span>New</span>
        <span>Here?</span>
      </div> */}
    </div>
  );
};

export default Contact;
