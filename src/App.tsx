import React, { useState, useEffect } from 'react';
import { ScreenId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OverviewScreen } from './screens/OverviewScreen';
import { AdvisoryDomainsScreen } from './screens/AdvisoryDomainsScreen';
import { CaseStudiesScreen } from './screens/CaseStudiesScreen';
import { PhilosophyScreen } from './screens/PhilosophyScreen';
import { DiagnosticsScreen } from './screens/DiagnosticsScreen';
import { InsightsScreen } from './screens/InsightsScreen';
import { ScheduleScreen } from './screens/ScheduleScreen';
import { BriefingModal } from './components/BriefingModal';
import { TechnicalPaperModal } from './components/TechnicalPaperModal';
import { EncryptedCommsModal } from './components/EncryptedCommsModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('overview');
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);
  const [briefingDomain, setBriefingDomain] = useState<string | undefined>();
  const [isTechnicalPaperModalOpen, setIsTechnicalPaperModalOpen] = useState(false);
  const [paperTitle, setPaperTitle] = useState(
    'Fintech Tier-1 Architecture Dossier: Distributed Event-Mesh & Egress Compression'
  );
  const [isEncryptedModalOpen, setIsEncryptedModalOpen] = useState(false);

  // Scroll to top when changing screens
  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBriefingModal = (domain?: string) => {
    setBriefingDomain(domain);
    setIsBriefingModalOpen(true);
  };

  const handleOpenTechnicalPaper = (title: string) => {
    setPaperTitle(title);
    setIsTechnicalPaperModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ee] flex flex-col font-sans selection:bg-[#0066ff] selection:text-[#f8f7ff]">
      {/* Fixed Executive Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenBriefingModal={() => handleOpenBriefingModal()}
      />

      {/* Main Screen Content Viewport */}
      <main className="flex-1 pt-20">
        {currentScreen === 'overview' && (
          <OverviewScreen
            onNavigate={handleNavigate}
            onOpenBriefingModal={handleOpenBriefingModal}
            onOpenEncryptedModal={() => setIsEncryptedModalOpen(true)}
            onOpenTechnicalPaperModal={handleOpenTechnicalPaper}
          />
        )}

        {currentScreen === 'advisory-domains' && (
          <AdvisoryDomainsScreen
            onNavigate={handleNavigate}
            onOpenBriefingModal={handleOpenBriefingModal}
          />
        )}

        {currentScreen === 'case-studies-roi' && (
          <CaseStudiesScreen
            onNavigate={handleNavigate}
            onOpenBriefingModal={handleOpenBriefingModal}
            onOpenTechnicalPaperModal={handleOpenTechnicalPaper}
          />
        )}

        {currentScreen === 'consulting-philosophy' && (
          <PhilosophyScreen
            onNavigate={handleNavigate}
            onOpenBriefingModal={handleOpenBriefingModal}
          />
        )}

        {currentScreen === 'system-diagnostics' && (
          <DiagnosticsScreen
            onNavigate={handleNavigate}
            onOpenBriefingModal={handleOpenBriefingModal}
          />
        )}

        {currentScreen === 'insights' && (
          <InsightsScreen
            onNavigate={handleNavigate}
            onOpenBriefingModal={handleOpenBriefingModal}
            onOpenTechnicalPaperModal={handleOpenTechnicalPaper}
          />
        )}

        {currentScreen === 'schedule-advisory-briefing' && (
          <ScheduleScreen
            onNavigate={handleNavigate}
            onOpenEncryptedModal={() => setIsEncryptedModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBriefingModal={() => handleOpenBriefingModal()}
        onOpenEncryptedModal={() => setIsEncryptedModalOpen(true)}
        onOpenTechnicalPaperModal={handleOpenTechnicalPaper}
      />

      {/* Global Interactive Modals */}
      <BriefingModal
        isOpen={isBriefingModalOpen}
        onClose={() => setIsBriefingModalOpen(false)}
        preselectedDomain={briefingDomain}
      />

      <TechnicalPaperModal
        isOpen={isTechnicalPaperModalOpen}
        onClose={() => setIsTechnicalPaperModalOpen(false)}
        paperTitle={paperTitle}
      />

      <EncryptedCommsModal
        isOpen={isEncryptedModalOpen}
        onClose={() => setIsEncryptedModalOpen(false)}
      />
    </div>
  );
}
