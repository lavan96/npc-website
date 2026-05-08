import { useState, FormEvent } from 'react';

const SUPABASE_URL = 'https://dduzbchuswwbefdunfct.supabase.co';
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkdXpiY2h1c3d3YmVmZHVuZmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NDM4NzksImV4cCI6MjA3MTAxOTg3OX0.eSYU6fxIc3tBQuGLsdBRff0alBMkNfvv7OpW0efNjxk';

interface LeadMagnetFormProps {
  /** The slug of the lead magnet in Command Centre (e.g. "investor-starter-guide") */
  slug: string;
  /** Optional override for heading text */
  title?: string;
  /** Optional override for CTA button label */
  buttonLabel?: string;
}

export default function LeadMagnetForm({
  slug,
  title = 'Request Access',
  buttonLabel = 'UNLOCK GUIDE',
}: LeadMagnetFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'error' | 'success'; msg: string }>({
    type: 'idle',
    msg: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'idle', msg: '' });

    // Client-side validation — all fields mandatory
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setStatus({ type: 'error', msg: 'All fields are required.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email.' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/request-lead-magnet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: ANON_KEY,
          Authorization: `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify({
          slug,
          full_name: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Request failed');

      setStatus({ type: 'success', msg: 'Success — your download is starting...' });

      // Auto-trigger download
      const a = document.createElement('a');
      a.href = data.download_url;
      a.download = data.file_name || 'guide.pdf';
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      setStatus({
        type: 'error',
        msg: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lm-wrapper">
      <style>{`
        .lm-wrapper {
          --lm-bg: #1a1408;
          --lm-bg-input: #0d0a04;
          --lm-text: #f3e9d2;
          --lm-text-muted: rgba(243, 233, 210, 0.5);
          --lm-accent: #d4a843;
          --lm-border: rgba(212, 168, 67, 0.2);
          --lm-border-input: rgba(212, 168, 67, 0.4);
          --lm-error: #f87171;
          --lm-success: #86efac;

          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--lm-text);
          box-sizing: border-box;
        }
        .lm-wrapper *, .lm-wrapper *::before, .lm-wrapper *::after { box-sizing: border-box; }

        .lm-card {
          background: var(--lm-bg);
          border: 1px solid var(--lm-border);
          border-radius: 12px;
          padding: clamp(20px, 5vw, 32px);
        }
        .lm-header {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: clamp(16px, 4vw, 24px);
        }
        .lm-lock { width: 28px; height: 28px; color: var(--lm-accent); flex-shrink: 0; }
        .lm-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(20px, 5vw, 26px);
          margin: 0; font-weight: 500; line-height: 1.2;
        }
        .lm-field { margin-bottom: 14px; }
        .lm-input {
          width: 100%;
          background: var(--lm-bg-input);
          border: none;
          border-bottom: 1px solid var(--lm-border-input);
          padding: 14px 12px;
          color: var(--lm-text);
          font-size: 16px; /* prevents iOS zoom */
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
          border-radius: 0;
          -webkit-appearance: none;
        }
        .lm-input:focus { border-bottom-color: var(--lm-accent); }
        .lm-input::placeholder { color: var(--lm-text-muted); }

        .lm-btn {
          width: 100%;
          background: var(--lm-accent);
          color: var(--lm-bg-input);
          border: none;
          padding: 16px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.15em;
          font-family: inherit;
          cursor: pointer;
          border-radius: 2px;
          margin-top: 8px;
          transition: opacity 0.2s;
          min-height: 48px;
        }
        .lm-btn:hover:not(:disabled) { opacity: 0.9; }
        .lm-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .lm-status {
          margin-top: 12px;
          font-size: 13px;
          min-height: 18px;
          line-height: 1.4;
        }
        .lm-status.error { color: var(--lm-error); }
        .lm-status.success { color: var(--lm-success); }

        .lm-spinner {
          display: inline-block; width: 14px; height: 14px;
          border: 2px solid rgba(13,10,4,0.3);
          border-top-color: var(--lm-bg-input);
          border-radius: 50%;
          animation: lm-spin 0.8s linear infinite;
          vertical-align: middle; margin-right: 8px;
        }
        @keyframes lm-spin { to { transform: rotate(360deg); } }

        @media (max-width: 480px) {
          .lm-card { border-radius: 8px; }
        }
      `}</style>

      <div className="lm-card">
        <div className="lm-header">
          <svg className="lm-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 1 1 8 0v4" />
          </svg>
          <h2 className="lm-title">{title}</h2>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="lm-field">
            <input
              className="lm-input"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              maxLength={200}
              autoComplete="name"
            />
          </div>
          <div className="lm-field">
            <input
              className="lm-input"
              type="email"
              placeholder="Corporate or Personal Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
              autoComplete="email"
              inputMode="email"
            />
          </div>
          <div className="lm-field">
            <input
              className="lm-input"
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={40}
              autoComplete="tel"
              inputMode="tel"
            />
          </div>

          <button className="lm-btn" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="lm-spinner" />
                SENDING...
              </>
            ) : (
              buttonLabel
            )}
          </button>

          {status.msg && (
            <div className={`lm-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
