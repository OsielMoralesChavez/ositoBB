import React, { useState } from 'react';
import { X, Lock, Copy, Check, Terminal, Shield } from 'lucide-react';

interface EncryptedCommsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EncryptedCommsModal: React.FC<EncryptedCommsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedFingerprint, setCopiedFingerprint] = useState(false);
  const [copiedSignal, setCopiedSignal] = useState(false);

  if (!isOpen) return null;

  const fingerprint = '7E4B 9912 C10F 8892 4DF2  A14B 8831 09DE F120 7C2B';
  const signalId = 'vance.01.secure';

  const copyToClipboard = (text: string, type: 'fingerprint' | 'signal') => {
    navigator.clipboard.writeText(text);
    if (type === 'fingerprint') {
      setCopiedFingerprint(true);
      setTimeout(() => setCopiedFingerprint(false), 2000);
    } else {
      setCopiedSignal(true);
      setTimeout(() => setCopiedSignal(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#1c2028] border border-[#31353e] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#181c24] border-b border-[#262a33] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0066ff]/20 border border-[#0066ff]/40 flex items-center justify-center text-[#00d2ff]">
              <Lock size={18} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00d2ff]">
                Zero-Knowledge Protocol
              </span>
              <h3 className="text-base font-bold text-white">Confidential Advisory Channels</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8c90a1] hover:text-white hover:bg-[#262a33] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-[#c2c6d8] leading-relaxed">
            For sensitive M&amp;A technical due diligence, high-stakes whistleblower IT audits, or proprietary algorithm reviews, communicate directly via end-to-end encrypted protocol.
          </p>

          {/* Signal */}
          <div className="p-4 rounded-xl bg-[#0a0e16] border border-[#262a33] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#8c90a1] font-semibold">
                SIGNAL PROTOCOL HANDLE
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                ACTIVE MONITOR
              </span>
            </div>
            <div className="flex items-center justify-between bg-[#181c24] px-3.5 py-2.5 rounded-lg border border-[#31353e]">
              <span className="font-mono text-sm text-white font-medium">{signalId}</span>
              <button
                onClick={() => copyToClipboard(signalId, 'signal')}
                className="text-xs font-mono text-[#a5e7ff] hover:text-white flex items-center gap-1.5 px-2 py-1 rounded bg-[#262a33]"
              >
                {copiedSignal ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedSignal ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* PGP */}
          <div className="p-4 rounded-xl bg-[#0a0e16] border border-[#262a33] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#8c90a1] font-semibold">
                PGP RSA 4096-BIT FINGERPRINT
              </span>
              <span className="text-[11px] font-mono text-[#8c90a1]">KEY ID: 0x883109DE</span>
            </div>
            <div className="bg-[#181c24] p-3 rounded-lg border border-[#31353e] flex items-center justify-between">
              <span className="font-mono text-xs text-[#a5e7ff] tracking-wider break-all">
                {fingerprint}
              </span>
              <button
                onClick={() => copyToClipboard(fingerprint, 'fingerprint')}
                className="text-xs font-mono text-[#a5e7ff] hover:text-white flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#262a33] ml-3 shrink-0"
              >
                {copiedFingerprint ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedFingerprint ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          <div className="p-3 bg-[#181c24] rounded-lg border border-[#262a33] flex items-start gap-2.5 text-xs text-[#8c90a1]">
            <Shield size={16} className="text-[#00d2ff] shrink-0 mt-0.5" />
            <span>
              All incoming communications are handled directly by Alexander Vance under strict legal attorney-client &amp; advisory work product doctrine.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#181c24] border-t border-[#262a33] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded bg-[#262a33] hover:bg-[#353942] text-white transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
