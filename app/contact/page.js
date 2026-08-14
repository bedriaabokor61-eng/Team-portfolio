'use client';

import { useMemo, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function isValidEmail(email) {
  // Simple, practical email check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length > 1 &&
      isValidEmail(form.email) &&
      form.subject.trim().length > 2 &&
      form.message.trim().length >= 10 &&
      Object.values(errors).every((e) => !e)
    );
  }, [form, errors]);

  function validate(nextForm) {
    const nextErrors = { ...initialErrors };

    if (nextForm.name.trim().length < 2) nextErrors.name = 'Please enter your full name.';
    if (!isValidEmail(nextForm.email)) nextErrors.email = 'Please enter a valid email address.';
    if (nextForm.subject.trim().length < 3) nextErrors.subject = 'Subject should be at least 3 characters.';
    if (nextForm.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.';

    return nextErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    const nextForm = { ...form, [name]: value };
    setForm(nextForm);

    // live validation
    const nextErrors = validate(nextForm);
    setErrors(nextErrors);

    setStatus({ type: 'idle', message: '' });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data?.error || 'Something went wrong. Please try again.' });
      } else {
        setStatus({ type: 'success', message: 'Thanks! Your message was sent successfully.' });
        setForm(initialState);
        setErrors(initialErrors);
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again in a moment.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have a question or want to collaborate? Send us a message and we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} style={styles.form} noValidate>
          <div style={styles.grid}>
            <div style={styles.field}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                style={styles.input(errors.name)}
                autoComplete="name"
              />
              {errors.name ? <p style={styles.error}>{errors.name}</p> : null}
            </div>

            <div style={styles.field}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={styles.input(errors.email)}
                autoComplete="email"
              />
              {errors.email ? <p style={styles.error}>{errors.email}</p> : null}
            </div>
          </div>

          <div style={styles.field}>
            <label htmlFor="subject" style={styles.label}>Subject</label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What’s this about?"
              style={styles.input(errors.subject)}
            />
            {errors.subject ? <p style={styles.error}>{errors.subject}</p> : null}
          </div>

          <div style={styles.field}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              style={styles.textarea(errors.message)}
              rows={6}
            />
            {errors.message ? <p style={styles.error}>{errors.message}</p> : null}
          </div>

          {status.type !== 'idle' ? (
            <div
              style={
                status.type === 'success' ? styles.successBox :
                status.type === 'error' ? styles.errorBox :
                styles.loadingBox
              }
              role="status"
              aria-live="polite"
            >
              {status.message}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting || !canSubmit}
            style={styles.button(isSubmitting || !canSubmit)}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          <p style={styles.note}>
            By sending, you agree to be contacted back regarding your request.
          </p>
        </form>
      </section>
    </main>
  );
}

const styles = {
  main: { padding: 24, display: 'flex', justifyContent: 'center' },
  card: {
    width: '100%',
    maxWidth: 760,
    border: '1px solid #eaeaea',
    borderRadius: 16,
    padding: 22,
    background: 'white',
  },
  title: { margin: 0, fontSize: 32, fontWeight: 800 },
  subtitle: { marginTop: 8, color: '#555', lineHeight: 1.5 },

  form: { marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 },

  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },

  field: { display: 'flex', flexDirection: 'column', gap: 8 },

  label: { fontWeight: 700, color: '#222' },

  input: (hasError) => ({
    width: '100%',
    borderRadius: 12,
    padding: '12px 12px',
    border: `1px solid ${hasError ? '#e11d48' : '#d8d8d8'}`,
    outline: 'none',
  }),

  textarea: (hasError) => ({
    width: '100%',
    borderRadius: 12,
    padding: '12px 12px',
    border: `1px solid ${hasError ? '#e11d48' : '#d8d8d8'}`,
    outline: 'none',
    resize: 'vertical',
  }),

  error: { margin: 0, color: '#e11d48', fontSize: 13 },

  button: (disabled) => ({
    marginTop: 6,
    padding: '12px 16px',
    borderRadius: 12,
    border: 'none',
    background: disabled ? '#9ca3af' : '#111827',
    color: 'white',
    fontWeight: 800,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: '0.15s',
  }),

  note: { margin: 0, color: '#6b7280', fontSize: 13 },

  successBox: {
    border: '1px solid #86efac',
    background: '#ecfdf3',
    color: '#166534',
    padding: 12,
    borderRadius: 12,
  },
  errorBox: {
    border: '1px solid #fda4af',
    background: '#fff1f2',
    color: '#9f1239',
    padding: 12,
    borderRadius: 12,
  },
  loadingBox: {
    border: '1px solid #bfdbfe',
    background: '#eff6ff',
    color: '#1d4ed8',
    padding: 12,
    borderRadius: 12,
  },
};

// Quick responsiveness
// (Optional: you can replace with Tailwind classes if your project uses Tailwind.)