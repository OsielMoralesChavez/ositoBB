import React, { useState } from 'react';
import { ScreenId, CaseStudy } from '../types';
import {
  Download,
  Shield,
  ArrowRight,
  TrendingDown,
  Layers,
  Sparkles,
  GitCompare,
  CheckCircle2,
  AlertTriangle,
  Server,
} from 'lucide-react';

interface CaseStudiesScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBriefingModal: (domain?: string) => void;
  onOpenTechnicalPaperModal: (paperTitle: string) => void;
}

export const CaseStudiesScreen: React.FC<CaseStudiesScreenProps> = ({
  onNavigate,
  onOpenBriefingModal,
  onOpenTechnicalPaperModal,
}) => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'fintech',
      tag: 'FINANCIAL SERVICES',
      duration: '14-MONTH ENGAGEMENT',
      title: 'Global Tier-1 Fintech: 62% Latency Drop & $18.4M Annual Cloud Run-Rate Reduction',
      clientType: 'High-Frequency Payment Clearing Engine ($420B Annual Volume)',
      crisis:
        'A high-frequency transactional engine suffered catastrophic 480ms p99 latency spikes during market surges. Cloud egress bills between AWS and Google Cloud reached $42M annually due to unoptimized cross-region message duplication.',
      strategy:
        'Designed an asynchronous event-mesh topology powered by bare-metal Apache Kafka. Migrated noisy transactional queries to localized CockroachDB clusters and renegotiated multi-cloud EDP bandwidth routing.',
      yield:
        'Compressed p99 execution time to 38ms (62% overall system drop), eliminated $18.4M in recurrent cloud spend, and expanded transaction throughput 4.2x without scaling the core infrastructure team.',
      primaryMetric: { value: '$18.4M', label: 'Recurrent Annual OpEx Saved' },
      secondaryMetric: { value: '38 ms', label: 'P99 Latency (from 480ms)' },
      tertiaryMetric: { value: '4.2x', label: 'Throughput Capacity Multiplier' },
      progressLabel: 'P99 Latency Compression (480ms down to 38ms)',
      progressPercent: 92,
      highlightText: '-92% DELAY REDUCTION',
      pdfTitle: 'Fintech Tier-1 Architecture Dossier: Distributed Event-Mesh & Egress Compression',
      architectureBefore: [
        'Monolithic SQL database with global lock contention during trade spikes',
        'Cross-cloud VPC peering transferring 1.8 Petabytes of redundant JSON payload daily',
        'Synchronous REST API calls between 44 interdependent services causing cascading timeouts',
      ],
      architectureAfter: [
        'Partitioned Kafka event stream processing 140,000 tx/sec with zero disk IO bottleneck',
        'Binary Protobuf serialization reducing network egress footprint by 78%',
        'Local read-replicas with bounded eventual consistency guarantees',
      ],
      financialYield: '$18.4M Saved Annually (audited by Ernst & Young Technology Assurance)',
    },
    {
      id: 'logistics',
      tag: 'GLOBAL SUPPLY CHAIN',
      duration: '20-MONTH ARCHITECTURAL TRANSFORMATION',
      title: 'Multinational Logistics Conglomerate: Zero-Downtime Core Migration Across 42 Global Hubs',
      clientType: 'Worldwide Freight & Parcel Operator (12M Daily Shipments)',
      crisis:
        'A 30-year-old monolithic legacy ERP handling package sorting across North America and Europe was failing 2-3 times per month, creating $1.2M/hour port congestion fees and halting autonomous robotic sorting lines.',
      strategy:
        'Architected an asynchronous Strangler Fig decoupling protocol. Deployed Debezium-based Change Data Capture (CDC) pipelines to mirror mainframe states in real time, shifting hub operations one by one into distributed microservices.',
      yield:
        'Zero hours of unprogrammed system disruption across the entire 42-hub cutover. Feature release velocity jumped from once every 2 months to 14 production deploys per day.',
      primaryMetric: { value: '99.999%', label: 'Continuous Operational Uptime' },
      secondaryMetric: { value: '3.4x', label: 'Faster Engineering Release Cycle' },
      tertiaryMetric: { value: '42 Hubs', label: 'Zero-Downtime Rollout Completed' },
      progressLabel: 'Global Distribution Hubs Migrated (42 of 42)',
      progressPercent: 100,
      highlightText: '100% CUTOVER SUCCESS',
      pdfTitle: 'Multinational Logistics Core Modernization: Strangler Fig CDC Migration Strategy',
      architectureBefore: [
        'Single AS400 / DB2 mainframe database handling dispatch, customs, and billing',
        'Batch job scripts running overnight with 6-hour database lockouts',
        'Hardware capacity limits preventing integration with autonomous drone and vehicle fleets',
      ],
      architectureAfter: [
        'Decoupled microservices running on edge Kubernetes clusters in each logistics facility',
        'Event-driven asynchronous messaging ensuring offline facility resilience during ISP outages',
        'Sub-second parcel tracking API queryable by 40,000 international couriers',
      ],
      financialYield: '$34M in Avoided Demurrage Fines + 14x Accelerated Release Velocity',
    },
    {
      id: 'healthcare',
      tag: 'HEALTHCARE & LIFE SCIENCES',
      duration: '11-MONTH ENGAGEMENT',
      title: 'Fortune 50 Healthcare Payer: Air-Gapped LLM Governance & Claims Processing Acceleration',
      clientType: 'National Health Insurer (48M Covered Lives)',
      crisis:
        'Internal departments were independently deploying unvetted public LLM APIs with sensitive Protected Health Information (PHI), triggering critical HIPAA compliance alarms and board-level legal inquiries.',
      strategy:
        'Constructed an on-premise, air-gapped private LLM inference cluster with automated differential privacy scrubbers, vector similarity retrieval over 20 years of clinical policies, and hardware cryptographic enclaves.',
      yield:
        'Fully cleared SOC2 Type II, HIPAA, and CMS compliance audits. Compressed medical prior-authorization turnaround from 6 business days down to 4 minutes without exposing a single patient record.',
      primaryMetric: { value: '4 Min', label: 'Claims Adjudication (from 6 Days)' },
      secondaryMetric: { value: '0 PHI Leaks', label: 'Air-Gapped Compliance Record' },
      tertiaryMetric: { value: '74%', label: 'Underwriting Overhead Reduction' },
      progressLabel: 'Prior-Authorization Latency Reduction (6 days down to 4 min)',
      progressPercent: 98,
      highlightText: '98% TIME COMPRESSION',
      pdfTitle: 'Healthcare Enterprise AI Architecture: Air-Gapped Private LLMs & HIPAA Security',
      architectureBefore: [
        'Manual document scanning and human review queue with 6-day backlog',
        'Unsanctioned consumer AI subscriptions creating imminent regulatory liability',
        'Unstructured PDF policies stored across 14 fragmented legacy document archives',
      ],
      architectureAfter: [
        'Hardened private vLLM clusters running sovereign open-weights models in private VPC',
        'Automated real-time cryptographic token redaction for all patient identifiers',
        'Sub-second semantic search over 2.4M clinical adjudication guidelines',
      ],
      financialYield: '$26.5M Annual Operational Cost Recovery & Complete Regulatory Immunity',
    },
  ];

  const [selectedCase, setSelectedCase] = useState<string>('fintech');
  const active = caseStudies.find((c) => c.id === selectedCase) || caseStudies[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col gap-14">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#00d2ff] w-fit border border-[#31353e]">
          EMPIRICAL TRACK RECORD // AUDITED ROI
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ee] tracking-tight">
          Verifiable Case Studies &amp; Audited Outcomes
        </h1>
        <p className="text-base text-[#c2c6d8] leading-relaxed">
          Every case study presented is grounded in audited telemetry and verified financial records. We
          measure advisory success strictly by latency compression, system uptime, and EBITDA expansion.
        </p>
      </div>

      {/* Case Study Selector Bar */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#0a0e16] rounded-xl border border-[#262a33]">
        {caseStudies.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedCase(item.id)}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono transition-all cursor-pointer ${
              selectedCase === item.id
                ? 'bg-[#0066ff] text-white shadow-[0_0_16px_rgba(0,102,255,0.4)]'
                : 'text-[#c2c6d8] hover:text-white hover:bg-[#1c2028]'
            }`}
          >
            {item.tag}
          </button>
        ))}
      </div>

      {/* Active Case Study Detail Card */}
      <div className="bg-[#1c2028] rounded-2xl border border-[#31353e] overflow-hidden shadow-2xl flex flex-col">
        {/* Top Meta Bar */}
        <div className="px-8 py-5 bg-[#181c24] border-b border-[#262a33] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#b6ebff] border border-[#31353e]">
              {active.tag}
            </span>
            <span className="text-xs text-[#8c90a1] font-mono">{active.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#8c90a1]">
            <Shield size={14} className="text-[#00d2ff]" />
            <span>Audited by External Big 4 Technical Assurance</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 lg:p-12 flex flex-col gap-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#00d2ff]">
              CLIENT PROFILE: {active.clientType}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug">{active.title}</h2>
          </div>

          {/* 3 Step Arc */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0e16]/60 p-5 rounded-xl border border-[#262a33] flex flex-col gap-2">
              <span className="text-xs font-mono uppercase font-semibold text-[#8c90a1]">1. The Crisis</span>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">{active.crisis}</p>
            </div>
            <div className="bg-[#0a0e16]/60 p-5 rounded-xl border border-[#262a33] flex flex-col gap-2">
              <span className="text-xs font-mono uppercase font-semibold text-[#a5e7ff]">
                2. Architectural Strategy
              </span>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">{active.strategy}</p>
            </div>
            <div className="bg-[#0a0e16]/60 p-5 rounded-xl border border-[#262a33] flex flex-col gap-2">
              <span className="text-xs font-mono uppercase font-semibold text-[#00d2ff]">
                3. Verified Yield
              </span>
              <p className="text-sm text-[#dfe2ee] font-medium leading-relaxed">{active.yield}</p>
            </div>
          </div>

          {/* Quantified Metrics Highlight Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#262a33] p-6 rounded-xl border border-[#31353e]">
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold font-mono text-[#b6ebff]">
                {active.primaryMetric.value}
              </span>
              <span className="text-xs text-[#c2c6d8] mt-1">{active.primaryMetric.label}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold font-mono text-[#dfe2ee]">
                {active.secondaryMetric.value}
              </span>
              <span className="text-xs text-[#c2c6d8] mt-1">{active.secondaryMetric.label}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold font-mono text-[#00d2ff]">
                {active.tertiaryMetric.value}
              </span>
              <span className="text-xs text-[#c2c6d8] mt-1">{active.tertiaryMetric.label}</span>
            </div>
          </div>

          {/* Interactive Metric Progress Bar */}
          <div className="bg-[#0a0e16] p-5 rounded-xl border border-[#262a33] flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#dfe2ee]">{active.progressLabel}</span>
              <span className="text-[#a5e7ff] font-bold">{active.highlightText}</span>
            </div>
            <div className="w-full h-3 bg-[#181c24] rounded-full overflow-hidden flex">
              <div
                className="h-full bg-[#00d2ff] transition-all duration-700"
                style={{ width: `${active.progressPercent}%` }}
              ></div>
              <div
                className="h-full bg-[#93000a]/70 transition-all duration-700"
                style={{ width: `${100 - active.progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Interactive Topology Comparison: Before vs After */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <GitCompare size={18} className="text-[#00d2ff]" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                Architectural Topology: Before vs. After
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Before */}
              <div className="bg-[#0a0e16] p-6 rounded-xl border border-red-950/50 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                  <AlertTriangle size={15} />
                  <span>Legacy State (Systemic Failure Vulnerabilities)</span>
                </div>
                <ul className="flex flex-col gap-2.5 pt-2">
                  {active.architectureBefore.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#c2c6d8] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="bg-[#0a0e16] p-6 rounded-xl border border-emerald-950/50 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                  <CheckCircle2 size={15} />
                  <span>Modernized Target Architecture (Resilient &amp; Decoupled)</span>
                </div>
                <ul className="flex flex-col gap-2.5 pt-2">
                  {active.architectureAfter.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#dfe2ee] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Download Paper Action CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#262a33]">
            <div className="text-xs text-[#8c90a1] font-mono">
              FINANCIAL CERTIFICATION: <span className="text-white">{active.financialYield}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenTechnicalPaperModal(active.pdfTitle)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#262a33] hover:bg-[#353942] text-[#00d2ff] hover:text-white border border-[#31353e] text-xs font-semibold font-mono transition-all cursor-pointer"
              >
                <Download size={14} />
                <span>Download Complete Whitepaper (PDF)</span>
              </button>

              <button
                onClick={() => onOpenBriefingModal(active.tag)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#0066ff] hover:bg-[#2c68f0] text-white text-xs font-semibold transition-all cursor-pointer shadow-md"
              >
                <span>Request Case Walkthrough</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
