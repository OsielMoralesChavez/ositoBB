import React, { useState } from 'react';
import { ScreenId } from '../types';
import {
  Calendar,
  Lock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Building,
  User,
  Mail,
  FileCheck,
} from 'lucide-react';

interface ScheduleScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenEncryptedModal: () => void;
}

export const ScheduleScreen: React.FC<ScheduleScreenProps> = ({
  onNavigate,
  onOpenEncryptedModal,
}) => {
  const [selectedDomain, setSelectedDomain] = useState(
    'Enterprise Cloud Rationalization & FinOps'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('Chief Information Officer (CIO)');
  const [date, setDate] = useState('2026-10-15');
  const [timeSlot, setTimeSlot] = useState('14:00 CET');
  const [ndaChecked, setNdaChecked] = useState(true);
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col gap-12 text-[#dfe2ee]">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#00d2ff] w-fit border border-[#31353e]">
          DIRECT PARTNER ACCESS // STRICT MUTUAL NDA
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Schedule Confidential Executive Advisory Briefing
        </h1>
        <p className="text-base text-[#c2c6d8] leading-relaxed">
          Alexander Vance maintains a strict ceiling of two concurrent active advisory partnerships per quarter
          to ensure direct C-suite engagement and high-velocity execution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form Container */}
        <div className="lg:col-span-8 bg-[#1c2028] p-8 lg:p-12 rounded-2xl border border-[#31353e] shadow-2xl">
          {confirmed ? (
            <div className="py-10 flex flex-col items-center text-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#0066ff]/20 border border-[#00d2ff] flex items-center justify-center text-[#00d2ff]">
                <CheckCircle2 size={44} />
              </div>

              <div className="max-w-md">
                <span className="text-xs font-mono text-[#00d2ff] uppercase tracking-wider block">
                  ADVISORY APPOINTMENT SECURED
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Briefing Confirmed</h3>
                <p className="text-sm text-[#c2c6d8] mt-3 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name}</span>. A preliminary discussion
                  dossier, mutual non-disclosure agreement, and encrypted calendar link for{' '}
                  <span className="text-[#a5e7ff] font-semibold">
                    {date} at {timeSlot}
                  </span>{' '}
                  have been transmitted to <span className="text-white font-mono">{email}</span>.
                </p>
              </div>

              <div className="w-full max-w-md bg-[#0a0e16] p-5 rounded-xl border border-[#262a33] text-left text-xs font-mono text-[#8c90a1] space-y-2">
                <div className="flex justify-between">
                  <span>DISPATCH REFERENCE:</span>
                  <span className="text-white font-semibold">AV-BRIEFING-Q3-0941</span>
                </div>
                <div className="flex justify-between">
                  <span>ORGANIZATION:</span>
                  <span className="text-[#dfe2ee]">{organization}</span>
                </div>
                <div className="flex justify-between">
                  <span>ENGAGEMENT MANDATE:</span>
                  <span className="text-[#00d2ff] truncate max-w-[200px]">{selectedDomain}</span>
                </div>
                <div className="flex justify-between">
                  <span>MUTUAL NDA STATUS:</span>
                  <span className="text-emerald-400">EXECUTED &amp; FILED</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setConfirmed(false)}
                  className="px-6 py-2.5 rounded bg-[#262a33] hover:bg-[#353942] text-white text-xs font-mono transition-colors"
                >
                  Book Another Session
                </button>
                <button
                  onClick={() => onNavigate('overview')}
                  className="px-6 py-2.5 rounded bg-[#0066ff] hover:bg-[#2c68f0] text-white text-xs font-semibold transition-colors"
                >
                  Return to Executive Overview
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Engagement Domain */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8c90a1] mb-2 font-semibold">
                  1. Primary Advisory Mandate
                </label>
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-4 py-3 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none font-medium"
                >
                  <option value="Enterprise Cloud Rationalization & FinOps">
                    Enterprise Cloud Rationalization &amp; FinOps (Run-rate reduction &amp; Spot autoscale)
                  </option>
                  <option value="Mission-Critical Core Modernization">
                    Mission-Critical Core Modernization (Strangler Fig &amp; Monolith decoupling)
                  </option>
                  <option value="Enterprise AI & Data Fabric Readiness">
                    Enterprise AI &amp; Data Fabric Readiness (Air-gapped LLMs &amp; Vector mesh)
                  </option>
                  <option value="PE / M&A Technical Due Diligence">
                    PE / M&amp;A Technical Due Diligence &amp; Carve-Out Roadmaps
                  </option>
                  <option value="Comprehensive Architecture Diagnostic">
                    Comprehensive Architecture Diagnostic &amp; Board Review
                  </option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8c90a1] mb-1.5 font-semibold">
                    Executive Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-4 py-2.5 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8c90a1] mb-1.5 font-semibold">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="executive@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-4 py-2.5 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  />
                </div>
              </div>

              {/* Organization & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8c90a1] mb-1.5 font-semibold">
                    Enterprise Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zurich Financial Group"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-4 py-2.5 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8c90a1] mb-1.5 font-semibold">
                    Board / Executive Title
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-4 py-2.5 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  >
                    <option value="Chief Information Officer (CIO)">Chief Information Officer (CIO)</option>
                    <option value="Chief Technology Officer (CTO)">Chief Technology Officer (CTO)</option>
                    <option value="Private Equity Operating Partner">Private Equity Operating Partner</option>
                    <option value="Board Director / Audit Committee">Board Director / Audit Committee</option>
                    <option value="VP of Enterprise Architecture">VP of Enterprise Architecture</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8c90a1] mb-1.5 font-semibold">
                    Preferred Briefing Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-4 py-2.5 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8c90a1] mb-1.5 font-semibold">
                    Time Window (45 Min Closed Session)
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-4 py-2.5 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none"
                  >
                    <option value="10:00 CET">10:00 CET (Zurich / London Morning)</option>
                    <option value="14:00 CET">14:00 CET (Transatlantic Window)</option>
                    <option value="17:00 CET">17:00 CET (US East Coast Morning)</option>
                    <option value="19:00 CET">19:00 CET (Board Executive Block)</option>
                  </select>
                </div>
              </div>

              {/* Problem statement */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8c90a1] mb-1.5 font-semibold">
                  Crisis Context or Scope Objectives (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Outline cloud run-rate escalations, latency bottlenecks, legacy systems, or transformation timelines..."
                  className="w-full bg-[#0a0e16] border border-[#31353e] rounded-lg px-4 py-2.5 text-sm text-[#dfe2ee] focus:border-[#0066ff] outline-none resize-none"
                ></textarea>
              </div>

              {/* Mutual NDA Checkbox */}
              <div className="pt-1 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="sched-nda"
                  checked={ndaChecked}
                  onChange={(e) => setNdaChecked(e.target.checked)}
                  required
                  className="mt-1 accent-[#0066ff] rounded w-4 h-4 cursor-pointer"
                />
                <label htmlFor="sched-nda" className="text-xs text-[#c2c6d8] leading-relaxed cursor-pointer">
                  Execute mutual bilateral non-disclosure agreement prior to briefing. All architecture maps,
                  cloud invoices, and source code discussions are strictly privileged under legal advisory doctrine.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs text-[#8c90a1] font-mono">
                  Guaranteed Direct Partner Consultation
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#0066ff] hover:bg-[#2c68f0] text-white text-sm font-semibold shadow-[0_0_24px_-4px_rgba(0,102,255,0.4)] transition-all cursor-pointer"
                >
                  <span>Confirm Briefing Slot</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-[#262a33] p-6 lg:p-8 rounded-2xl border border-[#31353e] flex flex-col gap-5 shadow-xl">
            <div className="flex items-center gap-2.5 text-[#00d2ff]">
              <Shield size={20} />
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono">Advisory Standards</h3>
            </div>

            <ul className="flex flex-col gap-3 text-xs text-[#c2c6d8] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#00d2ff] mt-0.5 shrink-0" />
                <span>Zero delegation to junior staff; every engagement is led personally by Alexander Vance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#00d2ff] mt-0.5 shrink-0" />
                <span>Strict bilateral NDA executed prior to reviewing proprietary system telemetry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#00d2ff] mt-0.5 shrink-0" />
                <span>Concrete financial and architectural yield targets established at day 1.</span>
              </li>
            </ul>

            <div className="p-4 bg-[#0a0e16] rounded-xl border border-[#1c2028] flex flex-col gap-2">
              <span className="text-[11px] font-mono text-[#8c90a1]">OFFICE LOCATIONS</span>
              <span className="text-xs font-medium text-white">Zurich (Paradeplatz) • New York (Hudson Yards)</span>
            </div>

            <button
              onClick={onOpenEncryptedModal}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#1c2028] hover:bg-[#31353e] text-[#a5e7ff] text-xs font-mono border border-[#31353e] transition-colors cursor-pointer"
            >
              <Lock size={14} className="text-[#00d2ff]" />
              <span>Alternate Channel: Encrypted Signal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
