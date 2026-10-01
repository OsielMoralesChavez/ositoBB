import React, { useState } from 'react';
import { X, Calendar, Lock, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDomain?: string;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({
  isOpen,
  onClose,
  preselectedDomain = 'Enterprise Cloud Rationalization & FinOps',
}) => {
  const [selectedDomain, setSelectedDomain] = useState(preselectedDomain);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Chief Information Officer (CIO)');
  const [targetDate, setTargetDate] = useState('2026-10-15');
  const [targetTime, setTargetTime] = useState('14:00 CET');
  const [ndaChecked, setNdaChecked] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1c2028] border border-[#31353e] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 bg-[#181c24] border-b border-[#262a33] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0066ff]/20 border border-[#0066ff]/40 flex items-center justify-center text-[#00d2ff]">
              <Lock size={18} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Schedule Confidential Advisory Briefing
              </h3>
              <p className="text-xs text-[#8c90a1]">
                Direct Partner Access • Strict Mutual NDA Protection
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8c90a1] hover:text-white hover:bg-[#262a33] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[#0066ff]/20 border border-[#00d2ff] flex items-center justify-center text-[#00d2ff]">
                <CheckCircle2 size={36} />
              </div>
              <div className="max-w-md">
                <h4 className="text-2xl font-bold text-white">Briefing Request Confirmed</h4>
                <p className="text-sm text-[#c2c6d8] mt-2 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name || 'Executive'}</span>. A cryptographically signed briefing dossier and calendar invitation for{' '}
                  <span className="text-[#a5e7ff] font-semibold">{targetDate} at {targetTime}</span> have been queued for{' '}
                  <span className="text-white font-mono">{email || 'your email'}</span>.
                </p>
              </div>

              <div className="w-full max-w-md bg-[#0a0e16] p-4 rounded-xl border border-[#262a33] text-left text-xs font-mono text-[#8c90a1] space-y-1.5">
                <div className="flex justify-between">
                  <span>DISPATCH REF:</span>
                  <span className="text-white">AV-2026-Q3-0941</span>
                </div>
                <div className="flex justify-between">
                  <span>ENGAGEMENT DOMAIN:</span>
                  <span className="text-[#00d2ff] truncate max-w-[200px]">{selectedDomain}</span>
                </div>
                <div className="flex justify-between">
                  <span>MUTUAL NDA STATUS:</span>
                  <span className="text-emerald-400">EXECUTED ON FILE</span>
                </div>
                <div className="flex justify-between">
                  <span>SECURITY CLEARANCE:</span>
                  <span className="text-white">TIER-1 CONFIDENTIAL</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-2 px-6 py-2.5 rounded-lg bg-[#0066ff] text-white font-semibold text-sm hover:bg-[#2c68f0] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Availability Alert */}
              <div className="p-3.5 rounded-lg bg-[#0a0e16] border border-[#262a33] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#a5e7ff]">
                  <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse"></span>
                  <span className="font-semibold">Current Availability:</span>
                  <span className="text-[#dfe2ee]">1 Strategic Engagement Slot Open for Q3/Q4</span>
                </div>
                <span className="text-[#8c90a1] font-mono">Max 2 / Qtr</span>
              </div>

              {/* Engagement Domain */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8c90a1] mb-2 font-mono">
                  1. Strategic Advisory Domain
                </label>
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-3.5 py-2.5 text-sm text-[#dfe2ee] focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] outline-none"
                >
                  <option value="Enterprise Cloud Rationalization & FinOps">
                    Enterprise Cloud Rationalization &amp; FinOps (Cost &amp; Multi-Cloud)
                  </option>
                  <option value="Mission-Critical Core Modernization">
                    Mission-Critical Core Modernization (Strangler Fig &amp; Monoliths)
                  </option>
                  <option value="Enterprise AI & Data Fabric Readiness">
                    Enterprise AI &amp; Data Fabric Readiness (Governed RAG &amp; Sandboxes)
                  </option>
                  <option value="PE / M&A Technical Due Diligence">
                    PE / M&amp;A Technical Due Diligence &amp; Carve-Out Roadmaps
                  </option>
                  <option value="Comprehensive Architecture Audit">
                    Comprehensive Architecture Diagnostic &amp; Board Review
                  </option>
                </select>
              </div>

              {/* Two Column details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8c90a1] mb-1.5 font-mono">
                    Executive Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Thomas Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-3.5 py-2 text-sm text-[#dfe2ee] focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8c90a1] mb-1.5 font-mono">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="executive@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-3.5 py-2 text-sm text-[#dfe2ee] focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8c90a1] mb-1.5 font-mono">
                    Enterprise Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Global Financial Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-3.5 py-2 text-sm text-[#dfe2ee] focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8c90a1] mb-1.5 font-mono">
                    C-Suite / Board Title
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-3 py-2 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  >
                    <option value="Chief Information Officer (CIO)">Chief Information Officer (CIO)</option>
                    <option value="Chief Technology Officer (CTO)">Chief Technology Officer (CTO)</option>
                    <option value="Private Equity Operating Partner">Private Equity Operating Partner</option>
                    <option value="Board Director / Audit Committee">Board Director / Audit Committee</option>
                    <option value="VP of Enterprise Architecture">VP of Enterprise Architecture</option>
                  </select>
                </div>
              </div>

              {/* Target Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8c90a1] mb-1.5 font-mono">
                    Preferred Briefing Date
                  </label>
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-3.5 py-2 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8c90a1] mb-1.5 font-mono">
                    Briefing Window (45 Min)
                  </label>
                  <select
                    value={targetTime}
                    onChange={(e) => setTargetTime(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-3 py-2 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  >
                    <option value="10:00 CET / 09:00 GMT">10:00 CET (Zurich / London)</option>
                    <option value="14:00 CET / 08:00 EST">14:00 CET (US East / Europe Sync)</option>
                    <option value="17:00 CET / 11:00 EST">17:00 CET (US Morning)</option>
                    <option value="19:00 CET / 13:00 EST">19:00 CET / 13:00 EST (Executive Block)</option>
                  </select>
                </div>
              </div>

              {/* Context notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8c90a1] mb-1.5 font-mono">
                  Primary Architecture Crisis or Scope Objectives (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Outline high-level pain points, cloud run-rate pressures, legacy systems, or transformation timelines..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-3.5 py-2 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none resize-none"
                ></textarea>
              </div>

              {/* NDA Checkbox */}
              <div className="pt-1 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="nda-agree"
                  checked={ndaChecked}
                  onChange={(e) => setNdaChecked(e.target.checked)}
                  className="mt-1 accent-[#0066ff] rounded cursor-pointer w-4 h-4"
                  required
                />
                <label htmlFor="nda-agree" className="text-xs text-[#c2c6d8] leading-relaxed cursor-pointer">
                  Execute mutual bilateral non-disclosure agreement prior to briefing. All architecture topology maps and financial data remain strictly confidential.
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-[#8c90a1] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#0066ff] text-white text-sm font-semibold hover:bg-[#2c68f0] shadow-[0_0_20px_-3px_rgba(0,102,255,0.4)] transition-all cursor-pointer"
                >
                  <span>Confirm Briefing Slot</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
