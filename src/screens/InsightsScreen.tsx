import React, { useState } from 'react';
import { ScreenId, InsightArticle } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, Download, CheckCircle2, ChevronRight } from 'lucide-react';

interface InsightsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBriefingModal: (domain?: string) => void;
  onOpenTechnicalPaperModal: (paperTitle: string) => void;
}

export const InsightsScreen: React.FC<InsightsScreenProps> = ({
  onNavigate,
  onOpenBriefingModal,
  onOpenTechnicalPaperModal,
}) => {
  const articles: InsightArticle[] = [
    {
      id: 'egress',
      date: 'OCTOBER 2026',
      readTime: '6 MIN READ',
      category: 'CLOUD FINOPS & UNIT ECONOMICS',
      title: 'The Anatomy of Cloud Egress Extortion: How Fortune 500s Bleed Millions Unnoticed',
      executiveSummary:
        'Hyperscalers price compute as a commodity while pricing outbound bandwidth as a monopoly tax. Without strict cross-VPC binary serialization and edge-routed interconnects, growing transaction volume penalizes enterprise margins exponentially.',
      paragraphs: [
        'When public cloud computing emerged, the primary pitch to CFOs was elastic capacity: pay only for what you compute. However, a decade of enterprise migrations has revealed a far more insidious financial dynamic: hyperscaler egress pricing.',
        'In a typical enterprise operating across multi-region AWS and GCP workloads, data transfer fees often comprise 22% to 38% of the total monthly cloud invoice. Teams inadvertently duplicate uncompressed JSON payloads across inter-regional peering links, unaware that every gigabyte carries a 2000% markup over raw carrier transit costs.',
        'The solution requires strict architectural discipline: migrating to binary serialization protocols (Protocol Buffers, FlatBuffers) which immediately compress payload volume by 70-80%, establishing direct cross-cloud dark fiber interconnects, and deploying intelligent caching proxy meshes at the egress perimeter.',
      ],
      keyTakeaways: [
        'Bandwidth egress is the primary mechanism hyperscalers use to penalize multi-cloud architectures.',
        'Replacing text-heavy REST JSON payloads with binary Protocol Buffers yields an instant 70% data transfer compression.',
        'Private carrier interconnects (Megaport, Equinix Fabric) pay for themselves within 60 days on estates exceeding 50TB monthly transfer.',
      ],
    },
    {
      id: 'erp',
      date: 'SEPTEMBER 2026',
      readTime: '8 MIN READ',
      category: 'CORE MODERNIZATION',
      title: 'Why 78% of Legacy ERP Modernizations Fail (And The Strangler Fig Alternative)',
      executiveSummary:
        'The catastrophic track record of big-bang ERP replacements stems from an epistemic illusion: the belief that 30 years of undocumented business logic can be completely mapped into a replacement system in a single cutover weekend.',
      paragraphs: [
        'Enterprise IT history is littered with multi-hundred-million-dollar write-downs triggered by big-bang ERP overhauls. A Fortune 50 retailer shuts down operations for four days, cutover fails, rollback is impossible due to corrupted transaction queues, and the executive suite is cleared out by the board.',
        'The underlying flaw is epistemic: monolithic systems accumulate decades of implicit, undocumented tribal knowledge. Edge cases, seasonal accounting quirks, and regulatory workarounds exist only in the execution paths of the legacy runtime.',
        'The only battle-tested path is the Strangler Fig pattern. By deploying an asynchronous Change Data Capture (CDC) replication mesh, we mirror the legacy mainframe in real time. We carve out single micro-domains—such as real-time inventory allocation—and route read traffic to modern microservices while keeping the legacy database as the temporary write source of truth.',
      ],
      keyTakeaways: [
        'Big-bang cutovers possess infinite surface area for catastrophic failure; incremental Strangler Figs restrict failure radius to isolated domains.',
        'Change Data Capture (CDC) via Kafka & Debezium allows modern services to run alongside legacy systems with zero data drift.',
        'Business value is realized in month 3, rather than waiting for a mythical month 36 all-or-nothing cutover.',
      ],
    },
    {
      id: 'ai-governance',
      date: 'AUGUST 2026',
      readTime: '7 MIN READ',
      category: 'ENTERPRISE AI ARCHITECTURE',
      title: 'Enterprise AI Without Data Leaks: Architecting Air-Gapped Retrieval-Augmented Generation',
      executiveSummary:
        'Public LLM APIs present an unacceptable trade-off between generative velocity and intellectual property forfeiture. Sovereign enterprise AI requires self-hosted private models protected by zero-trust cryptographic token filters.',
      paragraphs: [
        'The impulse to adopt generative AI has led many enterprise teams to pipe proprietary business secrets directly into public multi-tenant APIs. Even with commercial enterprise agreements, the risk of data leakage, prompt injection, and regulatory non-compliance under HIPAA, FedRAMP, and GDPR is severe.',
        'Building a sovereign AI capability requires three foundational pillars: an air-gapped private compute cluster running open-weights models (such as Llama 3 or DeepSeek), a sub-millisecond vector indexing layer that bounds retrieval strictly to verified corporate corpus, and a cryptographic token filter that scrubs all personal identifiers before prompt assembly.',
        'By hosting inference directly within your private VPC perimeter, latency is stabilized below 120ms, token costs drop by 85% compared to commercial APIs, and enterprise intellectual property remains completely immune to external training scrapers.',
      ],
      keyTakeaways: [
        'Public model APIs represent an ongoing compliance risk for healthcare, defense, and financial institutions.',
        'Self-hosted vLLM inference clusters achieve 85% cost savings over commercial API pricing at sustained workloads.',
        'Hybrid search (dense vector embeddings + BM25 keyword matching) eliminates 94% of generative hallucinations.',
      ],
    },
  ];

  const [activeArticleId, setActiveArticleId] = useState<string>('egress');
  const activeArticle = articles.find((a) => a.id === activeArticleId) || articles[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col gap-14 text-[#dfe2ee]">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#00d2ff] w-fit border border-[#31353e]">
          ARCHITECTURE MONOLOGUES // C-LEVEL BRIEFINGS
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Executive Insights &amp; Strategic Monologues
        </h1>
        <p className="text-base text-[#c2c6d8] leading-relaxed">
          Critical analyses written for enterprise CIOs, CTOs, and board members navigating high-stakes technical
          transformations, multi-cloud economics, and autonomous IT governance.
        </p>
      </div>

      {/* Main Grid: Articles List on Left, Active Reader View on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* List of articles */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {articles.map((art) => {
            const isSelected = art.id === activeArticle.id;
            return (
              <div
                key={art.id}
                onClick={() => setActiveArticleId(art.id)}
                className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col gap-3 ${
                  isSelected
                    ? 'bg-[#1c2028] border-[#0066ff] shadow-[0_0_20px_rgba(0,102,255,0.2)]'
                    : 'bg-[#1c2028]/60 border-[#262a33] hover:border-[#353942] hover:bg-[#1c2028]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8c90a1]">
                  <span className="text-[#00d2ff]">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">{art.title}</h3>
                <p className="text-xs text-[#c2c6d8] line-clamp-2 leading-relaxed">{art.executiveSummary}</p>
                <div className="flex items-center justify-between pt-2 text-xs font-mono text-[#8c90a1]">
                  <span>{art.date}</span>
                  <span className="text-[#a5e7ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Dossier</span>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reader View Panel */}
        <div className="lg:col-span-7 bg-[#1c2028] p-8 lg:p-12 rounded-2xl border border-[#31353e] flex flex-col gap-8 shadow-2xl">
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#262a33] text-xs font-mono">
            <span className="px-3 py-1 rounded bg-[#262a33] text-[#00d2ff] border border-[#31353e]">
              {activeArticle.category}
            </span>
            <div className="flex items-center gap-4 text-[#8c90a1]">
              <span>{activeArticle.date}</span>
              <span>·</span>
              <span>{activeArticle.readTime}</span>
            </div>
          </div>

          {/* Article Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {activeArticle.title}
            </h2>
            <div className="mt-4 p-4 rounded-xl bg-[#0a0e16] border border-[#262a33] text-xs sm:text-sm text-[#b6ebff] leading-relaxed italic">
              “{activeArticle.executiveSummary}”
            </div>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#c2c6d8] leading-relaxed">
            {activeArticle.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="bg-[#262a33]/60 p-6 rounded-xl border border-[#31353e] flex flex-col gap-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#00d2ff]">
              EXECUTIVE BOARDROOM TAKEAWAYS
            </h4>
            <ul className="flex flex-col gap-2.5">
              {activeArticle.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#dfe2ee] leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#00d2ff] mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#262a33]">
            <span className="text-xs text-[#8c90a1] font-mono">Authored by Alexander Vance</span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenTechnicalPaperModal(activeArticle.title)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#262a33] hover:bg-[#353942] text-[#a5e7ff] text-xs font-mono border border-[#31353e] transition-colors cursor-pointer"
              >
                <Download size={14} />
                <span>Save Whitepaper</span>
              </button>
              <button
                onClick={() => onOpenBriefingModal(activeArticle.category)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#0066ff] hover:bg-[#2c68f0] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Request Executive Briefing</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
