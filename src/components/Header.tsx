import React, { useState } from 'react';
import { ScreenId } from '../types';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenBriefingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenBriefingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ScreenId; label: string }[] = [
    { id: 'advisory-domains', label: 'Advisory Domains' },
    { id: 'case-studies-roi', label: 'Case Studies & ROI' },
    { id: 'consulting-philosophy', label: 'Consulting Philosophy' },
    { id: 'system-diagnostics', label: 'System Diagnostics' },
    { id: 'insights', label: 'Insights' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f131c]/90 backdrop-blur-xl border-b border-[#262a33]/60 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo Zone */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-3 group text-left transition-transform active:scale-[0.99]"
            title="Alexander Vance - Home Overview"
          >
            {/* Logo image with styled SVG fallback */}
            <div className="h-8 w-8 rounded bg-[#1c2028] flex items-center justify-center border border-[#31353e] shrink-0 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VlSUplev339yS0bF3UnPYCBNHKvUctjFXzOyk77VBrGFA8YcUYIZnxu4XwYOwckr8coexroNuMKGq8RRGYPdSCKT7uxvdb1Pgupd1lzJkf4NZHwpaewbvc3KrfsqBBpVLgMjMsmdOg9iUJJcKyxa_P31MMC7EgCntv_-lL_qz6IM_HkFhlgOwqs3QS1n_BmNTbVUVuLGfWZ_XQ0uTQmiA-fJJdC1xmZb5r1_IaOrjoOQ-1FCEpfkvoOQ0"
                alt="Alexander Vance IT Advisory Logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-[#a5e7ff] font-bold text-xs font-mono">AV</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl tracking-tight text-[#dfe2ee] font-bold group-hover:text-[#b3c5ff] transition-colors leading-tight">
                Alexander Vance
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#8c90a1] font-medium leading-none mt-0.5">
                IT Advisory &amp; Enterprise Architecture
              </span>
            </div>
          </button>

          {/* Availability Status Signifier */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-[#262a33]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262a33]/80 border border-[#31353e]/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d2ff]"></span>
              </span>
              <span className="text-[11px] text-[#a5e7ff] tracking-wide font-medium">
                Q3 Advisory Availability: 1 Engagement Slot Open
              </span>
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#dfe2ee] font-semibold bg-[#262a33] text-white shadow-sm ring-1 ring-[#353942]'
                    : 'text-[#c2c6d8] hover:text-[#dfe2ee] hover:bg-[#1c2028]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action & Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBriefingModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#0066ff] text-[#f8f7ff] text-sm font-semibold hover:bg-[#2c68f0] focus:ring-2 focus:ring-[#00d2ff] focus:outline-none transition-all shadow-[0_0_24px_-4px_rgba(0,102,255,0.35)] cursor-pointer whitespace-nowrap"
          >
            Schedule Advisory Briefing
          </button>

          <button
            onClick={() => onNavigate('overview')}
            className="relative cursor-pointer group"
            title="Alexander Vance Profile"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLqDQvHNgWiIfhU3CpL72auWCEcZge0ztKuTOGSUWfM51ifso5F59Tk0qDRfS8I8GN4ugGAmELrGNoFqLwPUhapPButIS8H7Sy2CmJTA1p-RzLEAurv3hBgmDzCum-ql674sStEU4GJAXClVZ50zkazhpTw2xvSEJLRW9VntshTHzP3tuLTj3deNqxE3ZaHNGroVcLA_3oT94V4pttPXMvWYbL477xRcnN8vywdlhqEb7lo2aIVtMO"
              alt="Alexander Vance Profile"
              className="w-9 h-9 rounded-full object-cover ring-1 ring-[#424656] group-hover:ring-[#00d2ff] transition-all"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00d2ff] ring-2 ring-[#0f131c]"></span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#c2c6d8] hover:text-white hover:bg-[#1c2028] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181c24] border-b border-[#262a33] px-6 py-4 flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#262a33] w-fit mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d2ff]"></span>
            </span>
            <span className="text-xs text-[#a5e7ff] font-medium">
              Q3 Availability: 1 Engagement Slot Open
            </span>
          </div>

          <button
            onClick={() => {
              onNavigate('overview');
              setMobileMenuOpen(false);
            }}
            className={`text-left px-3 py-2 text-sm rounded ${
              currentScreen === 'overview'
                ? 'bg-[#262a33] text-white font-semibold'
                : 'text-[#c2c6d8] hover:bg-[#1c2028]'
            }`}
          >
            Executive Overview
          </button>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 text-sm rounded ${
                currentScreen === link.id
                  ? 'bg-[#262a33] text-white font-semibold'
                  : 'text-[#c2c6d8] hover:bg-[#1c2028]'
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => {
              onOpenBriefingModal();
              setMobileMenuOpen(false);
            }}
            className="mt-2 w-full py-2.5 rounded bg-[#0066ff] text-white text-sm font-semibold hover:bg-[#2c68f0] text-center"
          >
            Schedule Advisory Briefing
          </button>
        </div>
      )}
    </header>
  );
};
