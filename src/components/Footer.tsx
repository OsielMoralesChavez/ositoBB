import React from 'react';
import { ScreenId } from '../types';
import { Lock, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBriefingModal: () => void;
  onOpenEncryptedModal: () => void;
  onOpenTechnicalPaperModal: (paperTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBriefingModal,
  onOpenEncryptedModal,
  onOpenTechnicalPaperModal,
}) => {
  return (
    <footer className="w-full bg-[#0a0e16] border-t border-[#1c2028]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1c2028]">
          {/* Col 1-2: Brand & Positioning */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded bg-[#1c2028] flex items-center justify-center border border-[#31353e] shrink-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VlSUplev339yS0bF3UnPYCBNHKvUctjFXzOyk77VBrGFA8YcUYIZnxu4XwYOwckr8coexroNuMKGq8RRGYPdSCKT7uxvdb1Pgupd1lzJkf4NZHwpaewbvc3KrfsqBBpVLgMjMsmdOg9iUJJcKyxa_P31MMC7EgCntv_-lL_qz6IM_HkFhlgOwqs3QS1n_BmNTbVUVuLGfWZ_XQ0uTQmiA-fJJdC1xmZb5r1_IaOrjoOQ-1FCEpfkvoOQ0"
                  alt="Alexander Vance Logo"
                  className="h-7 w-auto object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="text-[#a5e7ff] font-bold text-xs font-mono">AV</span>
              </div>
              <span className="text-xl text-[#dfe2ee] font-bold tracking-tight">Alexander Vance</span>
            </div>

            <p className="text-sm text-[#c2c6d8] max-w-sm leading-relaxed">
              High-leverage enterprise technology architecture, digital governance, and advisory for C-suite leaders and institutional boards executing structural transformation.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded bg-[#1c2028] text-[11px] font-mono text-[#8c90a1] border border-[#262a33]">
                TOGAF 10 Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1c2028] text-[11px] font-mono text-[#8c90a1] border border-[#262a33]">
                AWS Solutions Architect Pro
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1c2028] text-[11px] font-mono text-[#8c90a1] border border-[#262a33]">
                ITIL v4 Master
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1c2028] text-[11px] font-mono text-[#8c90a1] border border-[#262a33]">
                CISSP
              </span>
            </div>
          </div>

          {/* Col 3: Advisory Scope */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#dfe2ee] uppercase tracking-widest font-mono">
              Advisory Scope
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: 'Enterprise Core Modernization', screen: 'advisory-domains' as ScreenId },
                { name: 'Cloud Estate Rationalization', screen: 'advisory-domains' as ScreenId },
                { name: 'IT Governance & Risk Matrices', screen: 'advisory-domains' as ScreenId },
                { name: 'M&A Technical Due Diligence', screen: 'advisory-domains' as ScreenId },
                { name: 'C-Level Strategic Sparring', screen: 'schedule-advisory-briefing' as ScreenId },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
                  <button
                    onClick={() => onNavigate(item.screen)}
                    className="text-sm text-[#c2c6d8] hover:text-[#dfe2ee] transition-colors text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Navigation Index */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#dfe2ee] uppercase tracking-widest font-mono">
              Navigation Index
            </span>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Executive Overview', screen: 'overview' as ScreenId },
                { label: 'Verifiable Case Studies & ROI', screen: 'case-studies-roi' as ScreenId },
                { label: 'First-Principles Philosophy', screen: 'consulting-philosophy' as ScreenId },
                { label: 'Rapid Diagnostics Audit', screen: 'system-diagnostics' as ScreenId },
                { label: 'Architecture Monologues', screen: 'insights' as ScreenId },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.screen)}
                    className="text-sm text-[#c2c6d8] hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Direct Channels */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#dfe2ee] uppercase tracking-widest font-mono">
              Direct Channels
            </span>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Strict non-disclosure standards applied to all preliminary inquiries.
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              <button
                onClick={onOpenEncryptedModal}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#b3c5ff] hover:text-[#00d2ff] transition-colors cursor-pointer text-left"
              >
                <Lock size={14} className="text-[#00d2ff]" />
                <span>Encrypted Consultation Portal</span>
              </button>
              <button
                onClick={() => onOpenTechnicalPaperModal('Alexander Vance - Executive CV & Advisory Capability Brief (PDF)')}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#c2c6d8] hover:text-white transition-colors cursor-pointer text-left"
              >
                <FileText size={14} className="text-[#8c90a1]" />
                <span>Executive CV &amp; Capability Brief (PDF)</span>
              </button>
              <button
                onClick={onOpenBriefingModal}
                className="mt-1 px-3 py-1.5 text-xs rounded bg-[#1c2028] hover:bg-[#262a33] text-[#a5e7ff] border border-[#31353e] transition-colors font-medium text-center"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8c90a1]">
          <div className="flex items-center gap-2">
            <span>© 2024 Alexander Vance IT Advisory LLC. All institutional rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono">Zurich • London • New York</span>
            <button
              onClick={() => onNavigate('overview')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Confidentiality &amp; Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
