import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Shield, Eye } from 'lucide-react';

interface TechnicalPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  paperTitle: string;
}

export const TechnicalPaperModal: React.FC<TechnicalPaperModalProps> = ({
  isOpen,
  onClose,
  paperTitle,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      // Trigger browser download simulation
      const element = document.createElement('a');
      const file = new Blob(
        [
          `ALEXANDER VANCE IT ADVISORY & ENTERPRISE ARCHITECTURE\n` +
          `DOCUMENT: ${paperTitle}\n` +
          `CLASSIFICATION: Board & C-Suite Technical Dossier\n\n` +
          `ABSTRACT:\n` +
          `This architectural paper details the empirical frameworks, zero-downtime strangler topologies,\n` +
          `and financial FinOps rationalization vectors executed during enterprise scale transformations.\n\n` +
          `AUDITED METRICS:\n` +
          `- $18.4M Recurrent Annual OpEx Saved\n` +
          `- 62% Latency Drop (480ms p99 to 38ms)\n` +
          `- 99.999% Operational SLA Maintained Across Complete Cutover\n` +
          `- Zero Systemic Migration Outages\n\n` +
          `CONFIDENTIALITY:\n` +
          `Subject to Alexander Vance Enterprise Advisory Master Services Agreement & Strict Mutual NDA.`
        ],
        { type: 'text/plain;charset=utf-8' }
      );
      element.href = URL.createObjectURL(file);
      element.download = `${paperTitle.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1c2028] border border-[#31353e] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#181c24] border-b border-[#262a33] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0066ff]/20 border border-[#0066ff]/40 flex items-center justify-center text-[#00d2ff]">
              <FileText size={18} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00d2ff]">
                Executive Architectural Paper
              </span>
              <h3 className="text-base font-bold text-white line-clamp-1">{paperTitle}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8c90a1] hover:text-white hover:bg-[#262a33] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Paper Preview Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top metadata pill */}
          <div className="p-4 rounded-xl bg-[#0a0e16] border border-[#262a33] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#8c90a1]">
              <Shield size={14} className="text-[#00d2ff]" />
              <span>CLASSIFICATION: BOARD GRADE // RESTRICTED</span>
            </div>
            <span className="text-[#a5e7ff]">AUTHORED BY ALEXANDER VANCE, PRINCIPAL</span>
          </div>

          {/* Abstract */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#8c90a1] mb-2 font-semibold">
              Executive Synopsis &amp; Architectural Hypothesis
            </h4>
            <p className="text-sm text-[#c2c6d8] leading-relaxed bg-[#181c24] p-4 rounded-lg border border-[#262a33]">
              Modern enterprise IT estates collapse under unmanaged cognitive complexity and unbudgeted cloud sprawl. This document reveals the exact step-by-step decoupling blueprint, bi-directional Change Data Capture (CDC) replication topology, and FinOps unit economic modeling used to eliminate $18.4M in cloud run-rate and compress p99 latency by 92%.
            </p>
          </div>

          {/* Empirical Findings Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#0a0e16] p-3.5 rounded-lg border border-[#262a33]">
              <span className="text-[10px] font-mono uppercase text-[#8c90a1] block">P99 LATENCY GAIN</span>
              <span className="text-xl font-bold font-mono text-[#00d2ff]">38 ms</span>
              <span className="text-[11px] text-[#8c90a1] block mt-0.5">down from 480ms</span>
            </div>
            <div className="bg-[#0a0e16] p-3.5 rounded-lg border border-[#262a33]">
              <span className="text-[10px] font-mono uppercase text-[#8c90a1] block">ANNUAL OPEX YIELD</span>
              <span className="text-xl font-bold font-mono text-[#b6ebff]">$18.4M</span>
              <span className="text-[11px] text-[#8c90a1] block mt-0.5">verified run-rate</span>
            </div>
            <div className="bg-[#0a0e16] p-3.5 rounded-lg border border-[#262a33]">
              <span className="text-[10px] font-mono uppercase text-[#8c90a1] block">CUTOVER UPTIME</span>
              <span className="text-xl font-bold font-mono text-[#00d2ff]">99.999%</span>
              <span className="text-[11px] text-[#8c90a1] block mt-0.5">zero unplanned drop</span>
            </div>
          </div>

          {/* Architecture topology overview */}
          <div className="bg-[#0a0e16] p-4 rounded-xl border border-[#262a33]">
            <h5 className="text-xs uppercase font-mono tracking-wider text-[#8c90a1] mb-2 font-semibold">
              Included Schematics &amp; Blueprints
            </h5>
            <ul className="text-xs text-[#c2c6d8] space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
                <span>Diagram A: Monolith Ingress Decoupling via Envoy Proxy &amp; Kafka Event-Mesh</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
                <span>Diagram B: Bi-directional CDC Synchronization with Zero-Data-Loss Invariant Checks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
                <span>Table C: Unit Economics Cost Model per 100k Transactions (Kubernetes vs Bare Metal)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#181c24] border-t border-[#262a33] flex items-center justify-between">
          <div className="text-xs text-[#8c90a1] font-mono">
            {downloaded ? '✓ Dossier dispatched to downloads' : 'PDF Document • 24 Pages • 4.2 MB'}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#8c90a1] hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0066ff] hover:bg-[#2c68f0] text-white text-xs font-semibold shadow-md transition-all cursor-pointer disabled:opacity-50"
            >
              {downloading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>Generating Secure PDF...</span>
                </>
              ) : downloaded ? (
                <>
                  <CheckCircle2 size={16} className="text-white" />
                  <span>Download Again</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>Download Technical Dossier</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
