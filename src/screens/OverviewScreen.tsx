import React, { useState } from 'react';
import { ScreenId } from '../types';
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  Lock,
  Download,
  Terminal,
  Calendar,
  Layers,
  Activity,
  Cpu,
  TrendingDown,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Eye,
  GitBranch,
} from 'lucide-react';

interface OverviewScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBriefingModal: (domain?: string) => void;
  onOpenEncryptedModal: () => void;
  onOpenTechnicalPaperModal: (paperTitle: string) => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  onNavigate,
  onOpenBriefingModal,
  onOpenEncryptedModal,
  onOpenTechnicalPaperModal,
}) => {
  // Diagnostic Benchmark Interactive State
  const [cloudScore, setCloudScore] = useState(2);
  const [dataScore, setDataScore] = useState(2);
  const [resilienceScore, setResilienceScore] = useState(3);
  const [aiScore, setAiScore] = useState(1);

  const labelsCloud = [
    'Legacy Static (Tier 1)',
    'Ad-Hoc / Reactive (Tier 2)',
    'FinOps Optimized (Tier 3)',
    'Autonomous Cloud Fabric (Tier 4)',
  ];
  const labelsData = [
    'Tightly Coupled Monolith (Tier 1)',
    'Siloed Services (Tier 2)',
    'Event-Driven Streams (Tier 3)',
    'Autonomous Data Mesh (Tier 4)',
  ];
  const labelsResilience = [
    'Incident Prone (Tier 1)',
    'Manual Runbooks (Tier 2)',
    'Automated Auto-Heal (Tier 3)',
    'Chaos-Hardened 99.999% (Tier 4)',
  ];
  const labelsAi = [
    'Zero Institutional Policy (Tier 1)',
    'Ad-hoc PoCs (Tier 2)',
    'Governed LLM Sandbox (Tier 3)',
    'Production Vector Fabric (Tier 4)',
  ];

  const totalScore = cloudScore + dataScore + resilienceScore + aiScore;
  const maturityScore = Math.round((totalScore / 16) * 100);

  let insightText = '';
  if (maturityScore < 45) {
    insightText =
      'High systemic vulnerability. Core transaction engines face multi-million dollar outage risks during peak loads; lack of centralized FinOps drives unbudgeted cloud expenditure.';
  } else if (maturityScore < 75) {
    insightText =
      'Moderate architectural resilience with acute FinOps cost recovery opportunities. Data pipelines and generative AI initiatives require structured decoupling before the next scale inflection.';
  } else {
    insightText =
      'Advanced architectural posture. Recommended intervention is focused on automated chaos verification suites, sovereign air-gapped LLM runtimes, and zero-trust cross-cloud interconnects.';
  }

  return (
    <div className="flex flex-col w-full text-[#dfe2ee]">
      {/* ============================================================ */}
      {/* HERO SECTION: Affordance & Discoverability */}
      {/* ============================================================ */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Cognitive Focus & Primary Directives) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Live System Status Signifier */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#262a33] shadow-sm border border-[#31353e]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d2ff]"></span>
              </span>
              <span className="text-[11px] text-[#a5e7ff] uppercase tracking-widest font-semibold font-mono">
                Status: Accepting Select Q3/Q4 Board &amp; C-Suite Advisory Engagements
              </span>
            </div>

            {/* Dominant Strategic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#dfe2ee] leading-[1.08]">
              Architecting Resilient Enterprise IT Systems That Drive{' '}
              <span className="text-[#b6ebff]">Measurable Capital Efficiency.</span>
            </h1>

            {/* High-Readability Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#c2c6d8] max-w-2xl font-normal leading-relaxed">
              Former Big 4 Technology Strategy Partner advising Fortune 500 CIOs, CTOs, and PE operating
              partners on multi-cloud rationalization, legacy core monolith decoupling, and institutional AI
              governance.
            </p>

            {/* Affordance Anchors / CTA Array */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const elem = document.getElementById('diagnostic');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#0066ff] text-[#f8f7ff] text-sm font-semibold hover:bg-[#2c68f0] shadow-[0_0_24px_-4px_rgba(0,102,255,0.4)] transition-all cursor-pointer"
              >
                <span>Request Strategic Diagnostic</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onNavigate('case-studies-roi')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1c2028] text-[#dfe2ee] text-sm font-medium hover:bg-[#262a33] border border-[#31353e] transition-all cursor-pointer"
              >
                <span>Review Verified Case Studies</span>
                <ExternalLink size={16} className="text-[#8c90a1]" />
              </button>
            </div>

            {/* Empirical Trust Signifiers */}
            <div className="grid grid-cols-3 gap-6 pt-6 w-full max-w-xl border-t border-[#1c2028]">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-[#dfe2ee] font-mono">$140M+</span>
                <span className="text-[11px] text-[#8c90a1] uppercase tracking-wider mt-1 font-mono leading-tight">
                  Cumulative Cloud &amp; Infra Savings
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-[#b6ebff] font-mono">18</span>
                <span className="text-[11px] text-[#8c90a1] uppercase tracking-wider mt-1 font-mono leading-tight">
                  Core Enterprise Modernizations
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-[#dfe2ee] font-mono">0</span>
                <span className="text-[11px] text-[#8c90a1] uppercase tracking-wider mt-1 font-mono leading-tight">
                  Systemic Outages in Migrations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Profile Module & Credential Signatures */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Ambient Depth Backing */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/10 via-transparent to-[#00d2ff]/5 rounded-2xl filter blur-2xl pointer-events-none"></div>

            <div className="relative w-full max-w-md bg-[#1c2028] rounded-xl overflow-hidden shadow-2xl border border-[#31353e]">
              {/* Portrait Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#0a0e16]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLqDQvHNgWiIfhU3CpL72auWCEcZge0ztKuTOGSUWfM51ifso5F59Tk0qDRfS8I8GN4ugGAmELrGNoFqLwPUhapPButIS8H7Sy2CmJTA1p-RzLEAurv3hBgmDzCum-ql674sStEU4GJAXClVZ50zkazhpTw2xvSEJLRW9VntshTHzP3tuLTj3deNqxE3ZaHNGroVcLA_3oT94V4pttPXMvWYbL477xRcnN8vywdlhqEb7lo2aIVtMO"
                  alt="Alexander Vance, Principal IT Strategy and Enterprise Architecture Consultant"
                  className="w-full h-full object-cover grayscale-[15%] contrast-105 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2028] via-transparent to-transparent opacity-85"></div>

                {/* Floating Empirical Metric Chip */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#31353e]/90 backdrop-blur-md px-4 py-3 rounded shadow-lg flex items-center justify-between border border-[#424656]/50">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-[#00d2ff]"></span>
                    <span className="text-xs text-[#dfe2ee] font-medium">Audited Engagements ROI</span>
                  </div>
                  <span className="text-base font-bold text-[#b6ebff] font-mono">4.8x &lt; 18mo</span>
                </div>
              </div>

              {/* Consultant Sub-Identity & Rigor Accreditations */}
              <div className="p-6 bg-[#1c2028] flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#dfe2ee]">Alexander Vance</h2>
                    <p className="text-xs text-[#c2c6d8] mt-0.5">Principal Executive Advisor • Zurich &amp; NYC</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 flex items-center justify-center text-[#00d2ff]">
                    <Shield size={18} />
                  </div>
                </div>

                {/* Credentials Pill Mosaic */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-[#262a33] text-[11px] text-[#c2c6d8] font-mono border border-[#31353e]">
                    TOGAF 10 Certified
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#262a33] text-[11px] text-[#c2c6d8] font-mono border border-[#31353e]">
                    AWS Fellow Solutions Arch
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#262a33] text-[11px] text-[#c2c6d8] font-mono border border-[#31353e]">
                    CISSP Security Arch
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#262a33] text-[11px] text-[#c2c6d8] font-mono border border-[#31353e]">
                    LSS Black Belt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* METHODOLOGY STRIP: Nielsen & Norman Principles Applied */}
      {/* ============================================================ */}
      <section className="w-full bg-[#0a0e16] py-20 px-6 lg:px-12 border-y border-[#1c2028]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#00d2ff] uppercase">
                Methodology // Usability &amp; Enterprise Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#dfe2ee] mt-2">
                Grounded in Human Cognitive Engineering
              </h2>
            </div>
            <p className="text-sm text-[#c2c6d8] max-w-md leading-relaxed">
              Enterprise architecture fails when cognitive strain overburdens operators. We apply Jakob Nielsen and
              Don Norman's usability heuristics to IT systems, eliminating systemic failure modes.
            </p>
          </div>

          {/* 4 Heuristic Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1c2028] p-6 rounded-lg flex flex-col justify-between gap-6 shadow-sm border border-[#262a33] hover:border-[#353942] transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[#00d2ff]">
                  <Activity size={26} />
                  <span className="text-[11px] font-mono text-[#8c90a1]">HEURISTIC 01</span>
                </div>
                <h3 className="text-lg font-semibold text-[#dfe2ee] mt-1">Visibility of System Status</h3>
                <p className="text-sm text-[#c2c6d8] leading-relaxed">
                  Telemetry architecture and real-time observability matrices that replace ambiguous executive
                  dashboards with verifiable operational telemetry.
                </p>
              </div>
              <div className="pt-3 bg-[#262a33]/60 p-3 rounded border border-[#31353e]">
                <span className="text-[10px] text-[#b6ebff] block font-mono uppercase tracking-wider">
                  DELIVERABLE
                </span>
                <span className="text-sm text-[#dfe2ee] font-medium">Board-Grade Metric Control Towers</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1c2028] p-6 rounded-lg flex flex-col justify-between gap-6 shadow-sm border border-[#262a33] hover:border-[#353942] transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[#00d2ff]">
                  <Shield size={26} />
                  <span className="text-[11px] font-mono text-[#8c90a1]">HEURISTIC 05</span>
                </div>
                <h3 className="text-lg font-semibold text-[#dfe2ee] mt-1">Error Prevention Over Recovery</h3>
                <p className="text-sm text-[#c2c6d8] leading-relaxed">
                  Zero-trust architectural guardrails and automated chaos verification scripts that eliminate
                  misconfigurations before deployment to active production clusters.
                </p>
              </div>
              <div className="pt-3 bg-[#262a33]/60 p-3 rounded border border-[#31353e]">
                <span className="text-[10px] text-[#b6ebff] block font-mono uppercase tracking-wider">
                  DELIVERABLE
                </span>
                <span className="text-sm text-[#dfe2ee] font-medium">Pre-Mortem Failure Resilience Suites</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1c2028] p-6 rounded-lg flex flex-col justify-between gap-6 shadow-sm border border-[#262a33] hover:border-[#353942] transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[#00d2ff]">
                  <Cpu size={26} />
                  <span className="text-[11px] font-mono text-[#8c90a1]">HEURISTIC 06</span>
                </div>
                <h3 className="text-lg font-semibold text-[#dfe2ee] mt-1">Recognition Over Recall</h3>
                <p className="text-sm text-[#c2c6d8] leading-relaxed">
                  Cognitive load reduction across technical organizations. Standardized API taxonomies, unified
                  developer portals, and declarative governance patterns.
                </p>
              </div>
              <div className="pt-3 bg-[#262a33]/60 p-3 rounded border border-[#31353e]">
                <span className="text-[10px] text-[#b6ebff] block font-mono uppercase tracking-wider">
                  DELIVERABLE
                </span>
                <span className="text-sm text-[#dfe2ee] font-medium">Internal Developer Platforms (IDP)</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#1c2028] p-6 rounded-lg flex flex-col justify-between gap-6 shadow-sm border border-[#262a33] hover:border-[#353942] transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[#00d2ff]">
                  <GitBranch size={26} />
                  <span className="text-[11px] font-mono text-[#8c90a1]">HEURISTIC 07</span>
                </div>
                <h3 className="text-lg font-semibold text-[#dfe2ee] mt-1">Flexibility &amp; Efficiency</h3>
                <p className="text-sm text-[#c2c6d8] leading-relaxed">
                  Decoupled, composable MACH frameworks (Microservices, API-first, Cloud-native, Headless)
                  facilitating rapid business model agility without multimillion-dollar rewrites.
                </p>
              </div>
              <div className="pt-3 bg-[#262a33]/60 p-3 rounded border border-[#31353e]">
                <span className="text-[10px] text-[#b6ebff] block font-mono uppercase tracking-wider">
                  DELIVERABLE
                </span>
                <span className="text-sm text-[#dfe2ee] font-medium">Modular Decoupling Blueprints</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => onNavigate('consulting-philosophy')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a5e7ff] hover:text-white transition-colors cursor-pointer"
            >
              <span>Explore The Full First-Principles Methodology</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CORE ADVISORY DOMAINS (3-Column Asymmetric Grid) */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#b3c5ff]">
              Capabilities Matrix
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#dfe2ee]">Institutional Advisory Domains</h2>
            <p className="text-base text-[#c2c6d8] leading-relaxed">
              Alexander Vance is deployed selectively for strategic interventions where architectural failures
              would trigger market capitalization depreciation or acute operational stagnation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Domain 1: Cloud & FinOps */}
            <div className="bg-[#1c2028] rounded-xl p-8 flex flex-col justify-between gap-8 hover:bg-[#262a33] transition-colors shadow-sm border border-[#31353e] group">
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 rounded bg-[#0066ff]/20 border border-[#0066ff]/30 flex items-center justify-center text-[#00d2ff]">
                  <TrendingDown size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-[#dfe2ee]">
                    Enterprise Cloud Rationalization &amp; FinOps
                  </h3>
                  <p className="text-sm text-[#c2c6d8] leading-relaxed">
                    Eliminating runaway cloud egress bills, multi-cloud sprawl, and underutilized container
                    estates through strict financial engineering and workload rightsizing.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  {[
                    'FinOps cultural deployment & automated tagging topologies',
                    'Kubernetes estate autoscaling & spot-instance orchestration',
                    'Hyperscaler commercial negotiation & EDP tier modeling',
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#dfe2ee]">
                      <CheckCircle2 size={16} className="text-[#00d2ff] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 bg-[#0a0e16]/60 p-4 rounded flex items-center justify-between border border-[#262a33]">
                <span className="text-[11px] font-mono text-[#8c90a1]">HISTORIC GAIN</span>
                <span className="text-base font-bold text-[#a5e7ff] font-mono">35-52% OpEx Reduction</span>
              </div>
            </div>

            {/* Domain 2: Core Modernization */}
            <div className="bg-[#1c2028] rounded-xl p-8 flex flex-col justify-between gap-8 hover:bg-[#262a33] transition-colors shadow-sm border border-[#31353e] group">
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 rounded bg-[#0066ff]/20 border border-[#0066ff]/30 flex items-center justify-center text-[#00d2ff]">
                  <Layers size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-[#dfe2ee]">Mission-Critical Core Modernization</h3>
                  <p className="text-sm text-[#c2c6d8] leading-relaxed">
                    Pragmatic, zero-downtime strangler-fig transformations replacing monolithic AS400, mainframe,
                    or bespoke legacy backbones with modern distributed topologies.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  {[
                    'Strangler Fig pattern design & bi-directional data pipelines',
                    'Domain-Driven Design (DDD) bounded context mapping',
                    'Zero-data loss transactional consensus guarantees',
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#dfe2ee]">
                      <CheckCircle2 size={16} className="text-[#00d2ff] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 bg-[#0a0e16]/60 p-4 rounded flex items-center justify-between border border-[#262a33]">
                <span className="text-[11px] font-mono text-[#8c90a1]">RELIABILITY METRIC</span>
                <span className="text-base font-bold text-[#a5e7ff] font-mono">99.999% Service SLA</span>
              </div>
            </div>

            {/* Domain 3: AI & Data Architecture */}
            <div className="bg-[#1c2028] rounded-xl p-8 flex flex-col justify-between gap-8 hover:bg-[#262a33] transition-colors shadow-sm border border-[#31353e] group">
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 rounded bg-[#0066ff]/20 border border-[#0066ff]/30 flex items-center justify-center text-[#00d2ff]">
                  <Sparkles size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-[#dfe2ee]">Enterprise AI &amp; Data Fabric Readiness</h3>
                  <p className="text-sm text-[#c2c6d8] leading-relaxed">
                    Constructing hardened data pipelines, RAG infrastructures, and institutional LLM sandboxes
                    that preserve proprietary IP while maximizing generative velocity.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  {[
                    'Vector database benchmarking & semantic retrieval scale',
                    'Air-gapped LLM runtime infrastructure & token optimization',
                    'Data mesh lineage auditing and governance guardrails',
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#dfe2ee]">
                      <CheckCircle2 size={16} className="text-[#00d2ff] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 bg-[#0a0e16]/60 p-4 rounded flex items-center justify-between border border-[#262a33]">
                <span className="text-[11px] font-mono text-[#8c90a1]">GOVERNANCE LEVEL</span>
                <span className="text-base font-bold text-[#a5e7ff] font-mono">SOC2 / HIPAA / FedRAMP</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => onNavigate('advisory-domains')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a5e7ff] hover:text-white transition-colors cursor-pointer"
            >
              <span>View In-Depth Deliverables &amp; Frameworks</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* QUANTIFIED CASE STUDIES & VERIFIABLE ROI */}
      {/* ============================================================ */}
      <section className="w-full bg-[#0a0e16] py-24 px-6 lg:px-12 border-y border-[#1c2028]" id="case-studies">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00d2ff]">
                Audited Track Record
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#dfe2ee]">Verifiable Empirical Case Studies</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#8c90a1]">Verified by external audit partners</span>
              <Shield size={16} className="text-[#8c90a1]" />
            </div>
          </div>

          {/* Case Study A: Global Tier-1 Fintech */}
          <div className="bg-[#1c2028] rounded-2xl overflow-hidden shadow-lg border border-[#262a33]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col gap-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#b6ebff] border border-[#31353e]">
                    FINANCIAL SERVICES
                  </span>
                  <span className="text-xs text-[#8c90a1] font-mono">14-MONTH ENGAGEMENT</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#dfe2ee]">
                  Global Tier-1 Fintech: 62% Latency Drop &amp; $18.4M Annual Cloud Run-Rate Reduction
                </h3>

                {/* Challenge / Intervention / Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-[#8c90a1] uppercase font-semibold">1. The Crisis</span>
                    <p className="text-sm text-[#c2c6d8] leading-relaxed">
                      High-frequency transactional engine suffering 480ms p99 latency spikes and ballooning
                      AWS/GCP cross-cloud egress expenditure reaching $42M annually.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-[#a5e7ff] uppercase font-semibold">
                      2. Architectural Strategy
                    </span>
                    <p className="text-sm text-[#c2c6d8] leading-relaxed">
                      Designed distributed event-mesh using Apache Kafka, consolidated 8 multi-region clusters
                      into bare-metal hybrid nodes, and refactored SQL bottlenecks.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-[#00d2ff] uppercase font-semibold">
                      3. Verified Yield
                    </span>
                    <p className="text-sm text-[#dfe2ee] font-medium leading-relaxed">
                      Cut p99 latency to 38ms (62% overall drop), recovered $18.4M in recurrent cloud spend, and
                      expanded transaction throughput 4.2x without scaling team size.
                    </p>
                  </div>
                </div>

                {/* Inline Metric Visualization Card */}
                <div className="bg-[#262a33] p-4 rounded-lg flex flex-col gap-2 border border-[#31353e]">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#dfe2ee]">P99 Latency Compression (480ms down to 38ms)</span>
                    <span className="text-[#a5e7ff] font-bold">-92% DELAY</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#0a0e16] rounded-full overflow-hidden flex">
                    <div className="h-full bg-[#00d2ff] transition-all duration-1000" style={{ width: '8%' }}></div>
                    <div className="h-full bg-[#93000a]/70 transition-all duration-1000" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>

              {/* Highlight Panel */}
              <div className="lg:col-span-4 bg-[#262a33] p-8 lg:p-12 flex flex-col justify-between gap-8 border-t lg:border-t-0 lg:border-l border-[#31353e]">
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-mono text-[#8c90a1] uppercase tracking-wider">
                    Quantified ROI Overview
                  </span>
                  <div className="flex flex-col">
                    <span className="text-4xl lg:text-5xl font-bold text-[#b6ebff] font-mono">$18.4M</span>
                    <span className="text-sm text-[#c2c6d8] mt-1">Recurrent annual OpEx saved</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#dfe2ee] font-mono">38 ms</span>
                    <span className="text-sm text-[#c2c6d8] mt-1">P99 execution time</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#dfe2ee] font-mono">4.2x</span>
                    <span className="text-sm text-[#c2c6d8] mt-1">Throughput capacity gain</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onOpenTechnicalPaperModal(
                      'Global Tier-1 Fintech: 62% Latency Drop & $18.4M Annual Cloud Run-Rate Reduction'
                    )
                  }
                  className="flex items-center gap-3 text-[#00d2ff] hover:text-[#b6ebff] transition-colors cursor-pointer text-left"
                >
                  <Download size={18} />
                  <span className="text-xs font-semibold underline underline-offset-4">
                    Download Architectural Technical Paper (PDF)
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Case Study B: Multinational Logistics Conglomerate */}
          <div className="bg-[#1c2028] rounded-2xl overflow-hidden shadow-lg border border-[#262a33]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col gap-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#b6ebff] border border-[#31353e]">
                    GLOBAL SUPPLY CHAIN
                  </span>
                  <span className="text-xs text-[#8c90a1] font-mono">20-MONTH ARCHITECTURAL TRANSFORMATION</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#dfe2ee]">
                  Multinational Logistics Conglomerate: Zero-Downtime Core Migration Across 42 Global Hubs
                </h3>

                {/* Challenge / Intervention / Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-[#8c90a1] uppercase font-semibold">1. The Crisis</span>
                    <p className="text-sm text-[#c2c6d8] leading-relaxed">
                      A 30-year-old monolithic legacy ERP handling 12M daily parcels worldwide faced regular
                      regional outages, impeding autonomous fleet logistics integration.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-[#a5e7ff] uppercase font-semibold">
                      2. Architectural Strategy
                    </span>
                    <p className="text-sm text-[#c2c6d8] leading-relaxed">
                      Architected asynchronous CDC (Change Data Capture) replication, decoupling 42 operational hubs
                      incrementally using event-driven micro-services.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-[#00d2ff] uppercase font-semibold">
                      3. Verified Yield
                    </span>
                    <p className="text-sm text-[#dfe2ee] font-medium leading-relaxed">
                      Zero hours of unprogrammed system disruption across complete cutover; feature deployment
                      frequency elevated from bi-monthly to 14 releases daily.
                    </p>
                  </div>
                </div>

                {/* Hub Modernization Bar Indicator */}
                <div className="bg-[#262a33] p-4 rounded-lg flex flex-col gap-2 border border-[#31353e]">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#dfe2ee]">Global Distribution Hubs Migrated (42 of 42)</span>
                    <span className="text-[#a5e7ff] font-bold">100% COMPLETED</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#0a0e16] rounded-full overflow-hidden flex">
                    <div className="h-full bg-[#00d2ff] transition-all duration-1000 w-full"></div>
                  </div>
                </div>
              </div>

              {/* Highlight Panel */}
              <div className="lg:col-span-4 bg-[#262a33] p-8 lg:p-12 flex flex-col justify-between gap-8 border-t lg:border-t-0 lg:border-l border-[#31353e]">
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-mono text-[#8c90a1] uppercase tracking-wider">
                    Reliability Metric Stack
                  </span>
                  <div className="flex flex-col">
                    <span className="text-4xl lg:text-5xl font-bold text-[#b6ebff] font-mono">99.999%</span>
                    <span className="text-sm text-[#c2c6d8] mt-1">Continuous operational uptime sustained</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#dfe2ee] font-mono">3.4x</span>
                    <span className="text-sm text-[#c2c6d8] mt-1">Faster engineering release cycle</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#dfe2ee] font-mono">42 Hubs</span>
                    <span className="text-sm text-[#c2c6d8] mt-1">De-risked worldwide rollout</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onOpenTechnicalPaperModal(
                      'Multinational Logistics Conglomerate: Zero-Downtime Core Migration Across 42 Global Hubs'
                    )
                  }
                  className="flex items-center gap-3 text-[#00d2ff] hover:text-[#b6ebff] transition-colors cursor-pointer text-left"
                >
                  <Download size={18} />
                  <span className="text-xs font-semibold underline underline-offset-4">
                    Download Modernization Case Dossier (PDF)
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERACTIVE DIAGNOSTIC BENCHMARK */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24" id="diagnostic">
        <div className="bg-[#1c2028] rounded-2xl p-8 lg:p-14 shadow-2xl flex flex-col gap-10 border border-[#31353e]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00d2ff]">
                Heuristic Assessment Model
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dfe2ee]">
                3-Minute Enterprise Architecture Maturity Benchmark
              </h2>
              <p className="text-sm text-[#c2c6d8] max-w-2xl leading-relaxed">
                Evaluate your enterprise IT infrastructure across four critical vector parameters. Receive an
                immediate maturity status calculation based on real-time empirical scoring.
              </p>
            </div>
            <div className="bg-[#262a33] px-4 py-2.5 rounded flex items-center gap-3 border border-[#31353e] shrink-0">
              <Activity size={18} className="text-[#00d2ff]" />
              <span className="text-xs font-mono text-[#dfe2ee] font-semibold">
                ALGORITHM: VANCE MATURITY INDEX v4.2
              </span>
            </div>
          </div>

          {/* Diagnostic Interactive Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Assessment Input Rows */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Vector 1: Cloud & FinOps */}
              <div className="flex flex-col gap-2 bg-[#0a0e16]/60 p-4 rounded-lg border border-[#262a33]">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-[#dfe2ee]" htmlFor="dim-cloud">
                    1. Cloud Unit Economics &amp; Observability
                  </label>
                  <span className="text-xs font-mono text-[#b6ebff] font-medium">
                    {labelsCloud[cloudScore - 1]}
                  </span>
                </div>
                <input
                  id="dim-cloud"
                  type="range"
                  min="1"
                  max="4"
                  value={cloudScore}
                  onChange={(e) => setCloudScore(parseInt(e.target.value))}
                  className="w-full accent-[#0066ff] h-2 bg-[#262a33] rounded cursor-pointer"
                />
                <div className="flex justify-between text-[#8c90a1] text-[11px] font-mono">
                  <span>Uncontrolled Costs</span>
                  <span>Centralized FinOps</span>
                  <span>Predictable Unit Scaling</span>
                </div>
              </div>

              {/* Vector 2: Data Pipeline Health */}
              <div className="flex flex-col gap-2 bg-[#0a0e16]/60 p-4 rounded-lg border border-[#262a33]">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-[#dfe2ee]" htmlFor="dim-data">
                    2. Core Data Pipeline &amp; Monolith Coupling
                  </label>
                  <span className="text-xs font-mono text-[#b6ebff] font-medium">
                    {labelsData[dataScore - 1]}
                  </span>
                </div>
                <input
                  id="dim-data"
                  type="range"
                  min="1"
                  max="4"
                  value={dataScore}
                  onChange={(e) => setDataScore(parseInt(e.target.value))}
                  className="w-full accent-[#0066ff] h-2 bg-[#262a33] rounded cursor-pointer"
                />
                <div className="flex justify-between text-[#8c90a1] text-[11px] font-mono">
                  <span>Tight Monolith</span>
                  <span>Strangled Microservices</span>
                  <span>Event-Mesh Resilient</span>
                </div>
              </div>

              {/* Vector 3: Resilience & Chaos */}
              <div className="flex flex-col gap-2 bg-[#0a0e16]/60 p-4 rounded-lg border border-[#262a33]">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-[#dfe2ee]" htmlFor="dim-resilience">
                    3. Black Swan Incident Resilience &amp; MTTR
                  </label>
                  <span className="text-xs font-mono text-[#b6ebff] font-medium">
                    {labelsResilience[resilienceScore - 1]}
                  </span>
                </div>
                <input
                  id="dim-resilience"
                  type="range"
                  min="1"
                  max="4"
                  value={resilienceScore}
                  onChange={(e) => setResilienceScore(parseInt(e.target.value))}
                  className="w-full accent-[#0066ff] h-2 bg-[#262a33] rounded cursor-pointer"
                />
                <div className="flex justify-between text-[#8c90a1] text-[11px] font-mono">
                  <span>&gt;4hr Outage MTTR</span>
                  <span>Auto-Heal Clusters</span>
                  <span>Chaos Engineering Tested</span>
                </div>
              </div>

              {/* Vector 4: AI Architecture Readiness */}
              <div className="flex flex-col gap-2 bg-[#0a0e16]/60 p-4 rounded-lg border border-[#262a33]">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-[#dfe2ee]" htmlFor="dim-ai">
                    4. Enterprise AI Platform &amp; Governance
                  </label>
                  <span className="text-xs font-mono text-[#b6ebff] font-medium">
                    {labelsAi[aiScore - 1]}
                  </span>
                </div>
                <input
                  id="dim-ai"
                  type="range"
                  min="1"
                  max="4"
                  value={aiScore}
                  onChange={(e) => setAiScore(parseInt(e.target.value))}
                  className="w-full accent-[#0066ff] h-2 bg-[#262a33] rounded cursor-pointer"
                />
                <div className="flex justify-between text-[#8c90a1] text-[11px] font-mono">
                  <span>Zero Policy</span>
                  <span>Internal LLM Sandboxes</span>
                  <span>Governed Vector Mesh</span>
                </div>
              </div>
            </div>

            {/* Calculated Benchmark Output Panel */}
            <div className="lg:col-span-5 bg-[#262a33] p-8 rounded-xl flex flex-col justify-between gap-6 shadow-md border border-[#31353e]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8c90a1] uppercase tracking-wider">
                    Real-Time Synthesis
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1c2028] text-[#00d2ff] text-xs font-mono border border-[#31353e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping"></span>
                    ACTIVE AUDIT
                  </span>
                </div>

                <div>
                  <span className="text-xs text-[#c2c6d8] block">System Maturity Score:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#b6ebff] font-mono">{maturityScore}</span>
                    <span className="text-xl text-[#8c90a1] font-mono">/ 100</span>
                  </div>
                </div>

                {/* Dynamic Progress Meter */}
                <div className="w-full h-3 bg-[#0a0e16] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0066ff] transition-all duration-300 rounded-full"
                    style={{ width: `${maturityScore}%` }}
                  ></div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <span className="text-xs font-mono text-[#8c90a1] uppercase font-semibold">
                    Identified Vulnerability Exposure:
                  </span>
                  <p className="text-sm text-[#dfe2ee] font-medium leading-relaxed">{insightText}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => onOpenBriefingModal('Comprehensive Architecture Audit')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-[#0066ff] text-white text-sm font-semibold hover:bg-[#2c68f0] transition-all shadow-[0_0_20px_-3px_rgba(0,102,255,0.3)] cursor-pointer"
                >
                  <span>Request In-Depth Architecture Audit</span>
                  <Shield size={16} />
                </button>
                <button
                  onClick={() => onNavigate('system-diagnostics')}
                  className="w-full text-center text-xs text-[#a5e7ff] hover:text-white py-1 transition-colors cursor-pointer font-mono"
                >
                  Open Full Diagnostic Studio &amp; Export Report →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SOCIAL PROOF & C-SUITE TESTIMONIALS */}
      {/* ============================================================ */}
      <section className="w-full bg-[#0a0e16] py-20 px-6 lg:px-12 border-b border-[#1c2028]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00d2ff]">
              Board &amp; C-Level References
            </span>
            <h2 className="text-3xl font-bold text-[#dfe2ee]">Endorsements from Executive Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#1c2028] p-8 lg:p-10 rounded-xl flex flex-col justify-between gap-6 shadow-sm border border-[#262a33]">
              <p className="text-base lg:text-lg text-[#dfe2ee] italic leading-relaxed">
                “Alexander Vance eliminated the technical obfuscation that plagued our cloud migration for three
                years. He speaks the language of both kernel-level distributed systems and shareholder return.
                His intervention saved our firm $22M annually without sacrificing transaction latency.”
              </p>
              <div className="flex items-center gap-4 pt-4 bg-[#262a33]/40 p-3 rounded border border-[#31353e]">
                <div className="w-12 h-12 rounded-full bg-[#31353e] flex items-center justify-center text-[#00d2ff] font-bold font-mono text-sm border border-[#424656]">
                  MH
                </div>
                <div className="flex flex-col">
                  <span className="text-base text-[#dfe2ee] font-semibold">Marcus Hendrick</span>
                  <span className="text-xs text-[#c2c6d8]">
                    Chief Information Officer, Fortune 100 Financial Institution
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#1c2028] p-8 lg:p-10 rounded-xl flex flex-col justify-between gap-6 shadow-sm border border-[#262a33]">
              <p className="text-base lg:text-lg text-[#dfe2ee] italic leading-relaxed">
                “In PE carve-outs, legacy IT debt is the silent killer of portfolio value. Alexander conducted our
                pre-acquisition technical due diligence and structured a 100-day core modernization that
                prevented a catastrophic ERP collapse across 6 jurisdictions.”
              </p>
              <div className="flex items-center gap-4 pt-4 bg-[#262a33]/40 p-3 rounded border border-[#31353e]">
                <div className="w-12 h-12 rounded-full bg-[#31353e] flex items-center justify-center text-[#00d2ff] font-bold font-mono text-sm border border-[#424656]">
                  EW
                </div>
                <div className="flex flex-col">
                  <span className="text-base text-[#dfe2ee] font-semibold">Eleanor Wright</span>
                  <span className="text-xs text-[#c2c6d8]">
                    Managing Director, Global Technology Private Equity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL EXECUTIVE CTA SECTION */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24" id="briefing">
        <div className="bg-gradient-to-br from-[#1c2028] to-[#262a33] p-8 lg:p-16 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border border-[#31353e]">
          {/* Ambient Electric Accent */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#0066ff]/20 blur-3xl pointer-events-none"></div>

          <div className="flex flex-col gap-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0e16] w-fit border border-[#262a33]">
              <Lock size={14} className="text-[#00d2ff]" />
              <span className="text-[11px] text-[#8c90a1] font-mono uppercase tracking-wider">
                Confidential Executive Briefing
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dfe2ee] leading-tight">
              Ready to Audit Your Enterprise Architecture for the Next Scale Inflection?
            </h2>

            <p className="text-base text-[#c2c6d8] leading-relaxed">
              Advisory partnerships are strictly limited to two concurrent engagements per business quarter to
              ensure uncompromised strategic focus and board-level involvement.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#8c90a1] font-mono">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00d2ff]" />
                Strict Mutual NDA Provided
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00d2ff]" />
                Direct Partner Access
              </span>
            </div>
          </div>

          {/* Action Array */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto relative z-10 shrink-0">
            <button
              onClick={() => onOpenBriefingModal()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#0066ff] text-white text-sm font-semibold hover:bg-[#2c68f0] shadow-[0_0_28px_-4px_rgba(0,102,255,0.4)] transition-all cursor-pointer whitespace-nowrap"
            >
              <Calendar size={18} />
              <span>Schedule Confidential Briefing</span>
            </button>

            <button
              onClick={onOpenEncryptedModal}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#0a0e16] text-[#dfe2ee] text-sm font-medium hover:bg-[#181c24] border border-[#31353e] transition-all cursor-pointer whitespace-nowrap"
            >
              <Terminal size={18} className="text-[#00d2ff]" />
              <span>Encrypted Comms (Signal)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
