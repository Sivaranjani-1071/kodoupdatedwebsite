"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  Mail,
  Phone,
  User,
  BookOpen,
  GraduationCap,
  Briefcase,
  Calendar,
  Check,
  ThumbsUp,
  AlertCircle,
} from "lucide-react";

/**
 * BookTrialModal — single-step, dark teal theme
 * ------------------------------------------
 * Combines every field from the two reference screens (Book Your Trial +
 * Book Your Slot) into one non-stepped form, restyled to match the
 * dark teal / yellow-accent reference design.
 *
 * Usage:
 *   const [open, setOpen] = useState(false);
 *   <button onClick={() => setOpen(true)}>Book Your Trial</button>
 *   <BookTrialModal isOpen={open} onClose={() => setOpen(false)} />
 */

const SLOT_OPTIONS = ["Today - Thu, 2nd Jul 8:30 PM", "Sat, 4th Jul 2:00 PM"];

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

export default function BookTrialModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose?: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [working, setWorking] = useState("");
  const [slot, setSlot] = useState("");
  const [slotOpen, setSlotOpen] = useState(false);
  const [workingOpen, setWorkingOpen] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [closing, setClosing] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const workingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 150);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (slotRef.current && !slotRef.current.contains(e.target as Node)) setSlotOpen(false);
      if (workingRef.current && !workingRef.current.contains(e.target as Node)) setWorkingOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setPhone("");
    setEducation("");
    setGradYear("");
    setWorking("");
    setSlot("");
    setAgreed(true);
    setErrors({});
    setSubmitted(false);
  }, []);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      resetForm();
      onClose?.();
    }, 180);
  }, [onClose, resetForm]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!EMAIL_RE.test(email.trim())) next.email = "Enter a valid email";
    if (!phone.trim()) next.phone = "Phone number is required";
    else if (phone.trim().length < 10) next.phone = "Enter a valid phone number";
    return next;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    // wire up your submit logic here
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onMouseDown={handleOverlayClick}
      className={`btm-overlay ${closing ? "btm-overlay-out" : "btm-overlay-in"}`}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="btm-title"
        className={`btm-modal ${closing ? "btm-modal-out" : "btm-modal-in"}`}
      >
        <button type="button" aria-label="Close" className="btm-close" onClick={handleClose}>
          <X size={20} strokeWidth={2.5} />
        </button>

        {submitted ? (
          <div className="btm-success" role="status" aria-live="polite">
            <div className="btm-success-badge">
              <ThumbsUp size={40} strokeWidth={2.2} className="btm-thumb-icon" />
              <span className="btm-success-ring btm-ring-1" />
              <span className="btm-success-ring btm-ring-2" />
              <span className="btm-success-spark btm-spark-1" />
              <span className="btm-success-spark btm-spark-2" />
              <span className="btm-success-spark btm-spark-3" />
              <span className="btm-success-spark btm-spark-4" />
            </div>
            <h2 className="btm-success-title">Application Submitted Successfully!</h2>
            <p className="btm-success-text">
              Thanks, {name.trim().split(" ")[0] || "there"}! We've received your details and
              will reach out on <strong>{email}</strong> shortly to confirm your trial slot.
            </p>
            <button type="button" className="btm-done-btn" onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <>
        <div className="btm-header">
          <h2 id="btm-title" className="btm-title">
            Book Your Free Trial
          </h2>
          <p className="btm-subtitle">Takes less than a minute — save your spot below.</p>
        </div>

        <form className="btm-form" onSubmit={handleSubmit}>
          <div className="btm-fields">
            {/* Name */}
            <div className="btm-field-wrap">
              <label className={`btm-field ${errors.name ? "btm-field-error" : ""}`}>
                <span className="btm-field-label">
                  Name <span className="btm-required">*</span>
                </span>
                <input
                  ref={firstFieldRef}
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                  }}
                  className="btm-input"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                />
                <User size={18} className="btm-field-icon" strokeWidth={2} />
              </label>
              {errors.name && (
                <span className="btm-error-text">
                  <AlertCircle size={13} strokeWidth={2.5} />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="btm-field-wrap">
              <label className={`btm-field ${errors.email ? "btm-field-error" : ""}`}>
                <span className="btm-field-label">
                  Email <span className="btm-required">*</span>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                  }}
                  className="btm-input"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
                <Mail size={18} className="btm-field-icon" strokeWidth={2} />
              </label>
              {errors.email && (
                <span className="btm-error-text">
                  <AlertCircle size={13} strokeWidth={2.5} />
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="btm-field-wrap">
              <label className={`btm-field btm-field-phone ${errors.phone ? "btm-field-error" : ""}`}>
                <span className="btm-field-label">
                  Phone <span className="btm-required">*</span>
                </span>
                <div className="btm-phone-row">
                  <span className="btm-flag" aria-hidden="true">
                    <FlagIndia />
                  </span>
                  <span className="btm-dial-code">+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, ""));
                      if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                    }}
                    className="btm-phone-input"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    maxLength={10}
                    aria-invalid={!!errors.phone}
                  />
                </div>
                <Phone size={18} className="btm-field-icon" strokeWidth={2} />
              </label>
              {errors.phone && (
                <span className="btm-error-text">
                  <AlertCircle size={13} strokeWidth={2.5} />
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Education Qualification */}
            <label className="btm-field">
              <span className="btm-field-label">Education Qualification</span>
              <input
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                placeholder="Eg. BTech"
                className="btm-input"
              />
              <BookOpen size={18} className="btm-field-icon" strokeWidth={2} />
            </label>

            {/* Graduation Year + Are you working — side by side */}
            <div className="btm-row-2">
              <label className="btm-field">
                <span className="btm-field-label">Graduation Year</span>
                <input
                  type="text"
                  value={gradYear}
                  onChange={(e) => setGradYear(e.target.value.replace(/\D/g, ""))}
                  placeholder="2026"
                  className="btm-input"
                  inputMode="numeric"
                  maxLength={4}
                />
                <GraduationCap size={18} className="btm-field-icon" strokeWidth={2} />
              </label>

              <div className="btm-field btm-select-field" ref={workingRef}>
                <span className="btm-field-label">Are you working?</span>
                <button
                  type="button"
                  className="btm-select-trigger"
                  onClick={() => setWorkingOpen((o) => !o)}
                >
                  <span className={working ? "" : "btm-placeholder-span"}>
                    {working || "Select"}
                  </span>
                </button>
                <Briefcase size={18} className="btm-field-icon" strokeWidth={2} />
                {workingOpen && (
                  <div className="btm-dropdown">
                    {["Yes", "No"].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className="btm-dropdown-item"
                        onClick={() => {
                          setWorking(opt);
                          setWorkingOpen(false);
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Trial Workshop Slot */}
            <div className="btm-field btm-select-field" ref={slotRef}>
              <span className="btm-field-label">Trial Workshop Slot</span>
              <button
                type="button"
                className="btm-select-trigger"
                onClick={() => setSlotOpen((o) => !o)}
              >
                <span className={slot ? "" : "btm-placeholder-span"}>
                  {slot || "Choose a slot"}
                </span>
              </button>
              <Calendar size={18} className="btm-field-icon" strokeWidth={2} />
              {slotOpen && (
                <div className="btm-dropdown">
                  {SLOT_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      className="btm-dropdown-item"
                      onClick={() => {
                        setSlot(opt);
                        setSlotOpen(false);
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Consent */}
            <label className="btm-consent">
              <button
                type="button"
                role="checkbox"
                aria-checked={agreed}
                onClick={() => setAgreed((a) => !a)}
                className={`btm-checkbox ${agreed ? "btm-checkbox-checked" : ""}`}
              >
                {agreed && <Check size={14} strokeWidth={3} color="#ffffff" />}
              </button>
              <span className="btm-consent-text">
                I authorize Kodoworks to contact me via Email, SMS, WhatsApp, or Call with updates and notifications.
              </span>
            </label>
          </div>

          <div className="btm-footer">
            <button type="submit" className="btm-submit-btn">
              Attend Now
            </button>
          </div>
        </form>
          </>
        )}
      </div>

      <style jsx global>{`
        :root {
          --btm-page-bg: #0a2e29;
          --btm-page-bg-2: #0d3a33;
          --btm-field-bg: #0f4a41;
          --btm-field-bg-hover: #125a4f;
          --btm-field-border: rgba(255, 255, 255, 0.08);
          --btm-field-border-focus: #2ee6ac;
          --btm-accent: #2ee6ac;
          --btm-accent-dim: #79ddc2;
          --btm-yellow: #f6d723;
          --btm-yellow-dark: #d9ba0f;
          --btm-text: #ffffff;
          --btm-text-dim: rgba(255, 255, 255, 0.68);
        }

        .btm-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(3, 12, 10, 0.65);
          backdrop-filter: blur(4px);
          padding: 20px;
        }

        .btm-overlay-in {
          animation: btm-overlay-fade-in 220ms ease-out forwards;
        }
        .btm-overlay-out {
          animation: btm-overlay-fade-out 180ms ease-in forwards;
        }

        @keyframes btm-overlay-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes btm-overlay-fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        .btm-modal {
          position: relative;
          width: 100%;
          max-width: 540px;
          max-height: 90vh;
          overflow-y: auto;
          background: linear-gradient(165deg, var(--btm-page-bg-2) 0%, var(--btm-page-bg) 55%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 28px;
          padding: 38px 38px 30px;
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.5),
            0 6px 18px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter,
            Roboto, Helvetica, Arial, sans-serif;
        }

        .btm-modal-in {
          animation: btm-modal-in 260ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .btm-modal-out {
          animation: btm-modal-out 180ms ease-in forwards;
        }

        @keyframes btm-modal-in {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes btm-modal-out {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to { opacity: 0; transform: scale(0.94) translateY(8px); }
        }

        .btm-close {
          position: absolute;
          top: 22px;
          right: 22px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--btm-text);
          cursor: pointer;
          border-radius: 50%;
          transition: background 150ms ease, transform 150ms ease;
        }
        .btm-close:hover {
          background: rgba(255, 255, 255, 0.14);
          transform: rotate(90deg);
        }
        .btm-close:focus-visible {
          outline: 2px solid var(--btm-accent);
          outline-offset: 2px;
        }

        .btm-header {
          margin-bottom: 24px;
          padding-right: 32px;
        }

        .btm-title {
          margin: 0 0 6px;
          font-size: 30px;
          font-weight: 800;
          color: var(--btm-text);
          letter-spacing: -0.02em;
        }

        .btm-subtitle {
          margin: 0;
          font-size: 14px;
          color: var(--btm-accent-dim);
          font-weight: 500;
        }

        .btm-form {
          display: flex;
          flex-direction: column;
        }

        .btm-fields {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .btm-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .btm-field {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--btm-field-bg);
          border: 1px solid var(--btm-field-border);
          border-radius: 16px;
          padding: 11px 46px 11px 18px;
          min-height: 64px;
          cursor: text;
          transition: border-color 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }
        .btm-field:hover {
          background: var(--btm-field-bg-hover);
        }
        .btm-field:focus-within {
          border-color: var(--btm-field-border-focus);
          box-shadow: 0 0 0 3px rgba(46, 230, 172, 0.16);
          background: var(--btm-field-bg-hover);
        }

        .btm-field-label {
          font-size: 12.5px;
          color: var(--btm-accent);
          margin-bottom: 3px;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .btm-required {
          color: #ff8a8a;
        }

        .btm-field-wrap {
          display: flex;
          flex-direction: column;
        }

        .btm-field-error {
          border-color: #ff6b6b !important;
          box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.14) !important;
          animation: btm-shake 320ms ease;
        }

        @keyframes btm-shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }

        .btm-error-text {
          display: flex;
          align-items: center;
          gap: 5px;
          margin: 6px 2px 0;
          font-size: 12.5px;
          font-weight: 500;
          color: #ff8a8a;
        }

        .btm-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--btm-text);
          font-size: 15px;
          font-family: inherit;
          padding: 0;
        }
        .btm-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        .btm-field-icon {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--btm-accent);
          pointer-events: none;
        }

        .btm-phone-row {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .btm-flag {
          width: 20px;
          height: 15px;
          border-radius: 3px;
          overflow: hidden;
          flex-shrink: 0;
          display: inline-flex;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15);
        }
        .btm-flag svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .btm-dial-code {
          color: var(--btm-text);
          font-size: 15px;
          font-weight: 600;
          flex-shrink: 0;
        }

        .btm-phone-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--btm-text);
          font-size: 15px;
          font-family: inherit;
          width: 100%;
          padding: 0;
        }

        /* Select-style fields (dropdown) */
        .btm-select-field {
          cursor: pointer;
        }
        .btm-select-trigger {
          background: transparent;
          border: none;
          outline: none;
          text-align: left;
          padding: 0;
          font-size: 15px;
          color: var(--btm-text);
          font-family: inherit;
          cursor: pointer;
          width: 100%;
        }
        .btm-placeholder-span {
          color: rgba(255, 255, 255, 0.35);
        }

        .btm-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #0f4a41;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
          overflow: hidden;
          z-index: 20;
        }
        .btm-dropdown-item {
          display: block;
          width: 100%;
          text-align: left;
          padding: 12px 16px;
          background: transparent;
          border: none;
          font-size: 14px;
          color: var(--btm-text);
          cursor: pointer;
          font-family: inherit;
          transition: background 120ms ease;
        }
        .btm-dropdown-item:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        .btm-dropdown-item + .btm-dropdown-item {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .btm-consent {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 6px 4px 0;
          cursor: pointer;
        }

        .btm-checkbox {
          flex-shrink: 0;
          width: 21px;
          height: 21px;
          border-radius: 6px;
          border: 2px solid var(--btm-accent);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: 2px;
          padding: 0;
          transition: background 150ms ease, border-color 150ms ease;
        }
        .btm-checkbox-checked {
          background: var(--btm-accent);
          border-color: var(--btm-accent);
        }
        .btm-checkbox:focus-visible {
          outline: 2px solid var(--btm-accent);
          outline-offset: 2px;
        }

        .btm-consent-text {
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--btm-text-dim);
        }

        .btm-footer {
          display: flex;
          justify-content: center;
          margin-top: 26px;
        }

        .btm-submit-btn {
          width: 100%;
          background: linear-gradient(180deg, #f9e04d 0%, var(--btm-yellow) 100%);
          color: #1a1a05;
          font-weight: 700;
          font-size: 16px;
          border: none;
          border-radius: 14px;
          padding: 16px 28px;
          cursor: pointer;
          transition: transform 150ms ease, filter 150ms ease, box-shadow 150ms ease;
          box-shadow: 0 12px 28px rgba(246, 215, 35, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
        .btm-submit-btn:hover {
          filter: brightness(1.05);
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(246, 215, 35, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
        .btm-submit-btn:active {
          transform: translateY(0);
        }
        .btm-submit-btn:focus-visible {
          outline: 2px solid var(--btm-accent);
          outline-offset: 2px;
        }

        /* ---------- Success screen ---------- */
        .btm-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 28px 8px 6px;
          animation: btm-success-in 420ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes btm-success-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .btm-success-badge {
          position: relative;
          width: 108px;
          height: 108px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }

        .btm-thumb-icon {
          position: relative;
          z-index: 3;
          color: #1a1a05;
          background: linear-gradient(180deg, #f9e04d 0%, var(--btm-yellow) 100%);
          width: 84px;
          height: 84px;
          padding: 20px;
          border-radius: 50%;
          box-shadow: 0 14px 30px rgba(246, 215, 35, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.5);
          box-sizing: border-box;
          animation: btm-thumb-pop 700ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
            btm-thumb-wiggle 2400ms ease-in-out 700ms infinite;
        }

        @keyframes btm-thumb-pop {
          0% { transform: scale(0) rotate(-25deg); opacity: 0; }
          60% { transform: scale(1.15) rotate(8deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes btm-thumb-wiggle {
          0%, 100% { transform: rotate(0deg); }
          8% { transform: rotate(-8deg); }
          16% { transform: rotate(6deg); }
          24% { transform: rotate(0deg); }
        }

        .btm-success-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid var(--btm-accent);
          opacity: 0;
          animation: btm-ring-expand 1400ms ease-out infinite;
        }
        .btm-ring-2 {
          animation-delay: 500ms;
          border-color: var(--btm-yellow);
        }

        @keyframes btm-ring-expand {
          0% { transform: scale(0.7); opacity: 0.55; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .btm-success-spark {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--btm-accent);
          opacity: 0;
          animation: btm-spark-fly 900ms ease-out 300ms forwards;
        }
        .btm-spark-1 { top: 6%; left: 12%; background: var(--btm-yellow); animation-delay: 320ms; }
        .btm-spark-2 { top: 10%; right: 8%; animation-delay: 420ms; }
        .btm-spark-3 { bottom: 10%; left: 4%; animation-delay: 520ms; }
        .btm-spark-4 { bottom: 6%; right: 12%; background: var(--btm-yellow); animation-delay: 620ms; }

        @keyframes btm-spark-fly {
          0% { transform: translate(0, 0) scale(0.4); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translate(var(--tx, 14px), var(--ty, -14px)) scale(1); opacity: 0; }
        }
        .btm-spark-1 { --tx: -16px; --ty: -14px; }
        .btm-spark-2 { --tx: 16px; --ty: -14px; }
        .btm-spark-3 { --tx: -16px; --ty: 14px; }
        .btm-spark-4 { --tx: 16px; --ty: 14px; }

        .btm-success-title {
          margin: 0 0 10px;
          font-size: 22px;
          font-weight: 800;
          color: var(--btm-text);
          letter-spacing: -0.01em;
        }

        .btm-success-text {
          margin: 0 0 26px;
          max-width: 380px;
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--btm-text-dim);
        }
        .btm-success-text strong {
          color: var(--btm-accent-dim);
          font-weight: 600;
        }

        .btm-done-btn {
          width: 100%;
          background: linear-gradient(180deg, #f9e04d 0%, var(--btm-yellow) 100%);
          color: #1a1a05;
          font-weight: 700;
          font-size: 16px;
          border: none;
          border-radius: 14px;
          padding: 15px 28px;
          cursor: pointer;
          transition: transform 150ms ease, filter 150ms ease;
          box-shadow: 0 12px 28px rgba(246, 215, 35, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
        .btm-done-btn:hover {
          filter: brightness(1.05);
          transform: translateY(-2px);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 560px) {
          .btm-modal {
            padding: 26px 20px 22px;
            border-radius: 22px;
          }
          .btm-title {
            font-size: 23px;
          }
          .btm-close {
            top: 16px;
            right: 16px;
          }
          .btm-row-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .btm-overlay-in,
          .btm-overlay-out,
          .btm-modal-in,
          .btm-modal-out,
          .btm-success,
          .btm-thumb-icon,
          .btm-success-ring,
          .btm-success-spark {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function FlagIndia() {
  return (
    <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="5.33" fill="#FF9933" />
      <rect y="10.67" width="24" height="5.33" fill="#138808" />
      <circle cx="12" cy="8" r="2" fill="none" stroke="#000080" strokeWidth="0.3" />
    </svg>
  );
}
