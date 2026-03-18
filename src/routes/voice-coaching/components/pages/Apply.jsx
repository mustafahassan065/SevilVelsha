import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const HIGH_STAKES_OPTIONS = [
  { value: '', label: 'Select a situation…' },
  { value: 'board_presentation', label: 'Board presentation' },
  { value: 'fundraising', label: 'Fundraising' },
  { value: 'keynote', label: 'Keynote' },
  { value: 'promotion', label: 'Promotion' },
  { value: 'media_appearance', label: 'Media appearance' },
  { value: 'other', label: 'Other' },
];

export default function Apply() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    currentRole: '',
    highStakes: '',
    highStakesOther: '',
    whyNow: '',
    // Honeypot — must stay empty
    website: '',
  });
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Capture UTM params from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setUtmParams({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
    });
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.currentRole.trim()) newErrors.currentRole = 'Please enter your current role.';
    if (!formData.highStakes) newErrors.highStakes = 'Please select a situation.';
    if (formData.highStakes === 'other' && !formData.highStakesOther.trim()) {
      newErrors.highStakesOther = 'Please describe your situation.';
    }
    if (!formData.whyNow.trim()) newErrors.whyNow = 'Please tell us why now.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Honeypot check — bots fill this field, humans don't
      if (formData.website) {
        navigate('/voice-control-coaching/book');
        return;
      }

      const highStakesLabel =
        formData.highStakes === 'other'
          ? `Other: ${formData.highStakesOther}`
          : HIGH_STAKES_OPTIONS.find((o) => o.value === formData.highStakes)?.label || formData.highStakes;

     const response = await fetch('https://sevil-velsha-backend-silk.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          currentRole: formData.currentRole,
          highStakes: highStakesLabel,
          whyNow: formData.whyNow,
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Submission failed');

      navigate('/voice-control-coaching/book');
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition';
  const errorBorder = 'border-red-400 focus:ring-red-200 focus:border-red-400';

  return (
    <div className="min-h-screen bg-[#EEEEEE] flex items-start justify-center pt-24 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-gray-400 mb-3">
            Private Application
          </p>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
            Executive Voice Intensive
          </h1>
          <p className="text-sm text-gray-500">Takes less than 60 seconds.</p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={`${inputBase} ${errors.fullName ? errorBorder : ''}`}
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={`${inputBase} ${errors.email ? errorBorder : ''}`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Divider */}
          <hr className="border-gray-100" />

          {/* Q1 — Current Role */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              1. What is your current role?
            </label>
            <input
              type="text"
              name="currentRole"
              value={formData.currentRole}
              onChange={handleChange}
              placeholder="Founder / CEO / Director / Partner…"
              className={`${inputBase} ${errors.currentRole ? errorBorder : ''}`}
            />
            {errors.currentRole && (
              <p className="mt-1 text-xs text-red-500">{errors.currentRole}</p>
            )}
          </div>

          {/* Q2 — High-stakes situation */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              2. What is the high-stakes situation you are preparing for?
            </label>
            <select
              name="highStakes"
              value={formData.highStakes}
              onChange={handleChange}
              className={`${inputBase} ${errors.highStakes ? errorBorder : ''}`}
            >
              {HIGH_STAKES_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.highStakes && (
              <p className="mt-1 text-xs text-red-500">{errors.highStakes}</p>
            )}

            {formData.highStakes === 'other' && (
              <div className="mt-2">
                <input
                  type="text"
                  name="highStakesOther"
                  value={formData.highStakesOther}
                  onChange={handleChange}
                  placeholder="Briefly describe your situation…"
                  className={`${inputBase} ${errors.highStakesOther ? errorBorder : ''}`}
                />
                {errors.highStakesOther && (
                  <p className="mt-1 text-xs text-red-500">{errors.highStakesOther}</p>
                )}
              </div>
            )}
          </div>

          {/* Q3 — Why now */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              3. Why now?
            </label>
            <p className="text-xs text-gray-400 mb-1.5">1–2 sentences.</p>
            <textarea
              name="whyNow"
              value={formData.whyNow}
              onChange={handleChange}
              maxLength={250}
              rows={3}
              placeholder="What's prompting you to focus on this right now?"
              className={`${inputBase} resize-none ${errors.whyNow ? errorBorder : ''}`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.whyNow ? (
                <p className="text-xs text-red-500">{errors.whyNow}</p>
              ) : (
                <span />
              )}
              <p className="text-xs text-gray-400 ml-auto">
                {formData.whyNow.length}/250
              </p>
            </div>
          </div>

          {/* Honeypot — hidden from real users, traps bots */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Submit error */}
          {submitError && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              {submitError}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-900 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting…' : 'Submit Application →'}
          </button>
        </form>
         {/* Card  end*/}
      </motion.div>
    </div>
  );
}
