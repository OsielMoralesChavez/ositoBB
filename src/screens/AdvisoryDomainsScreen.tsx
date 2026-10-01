import React, { useState } from 'react';
import { ScreenId } from '../types';
import {
  TrendingDown,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCode2,
  Workflow,
  Clock,
  Zap,
} from 'lucide-react';

interface AdvisoryDomainsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBriefingModal: (domain?: string) => void;
}

export const AdvisoryDomainsScreen: React.FC<AdvisoryDomainsScreenProps> = ({
  onNavigate,
  onOpenBriefingModal,
}) => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'core' | 'ai'>('cloud');

  const domains = {
    cloud: {
      title: 'Enterprise Cloud Rationalization & FinOps',
      tagline: 'Workload rightsizing, zero-egress topologies, and automated financial governance.',
      historicYield: '35% – 52% OpEx Reduction in < 9 Months',
      icon: TrendingDown,
      color: '#00d2ff',
      summary:
        'Runaway cloud spend is rarely a technical limitation; it is an organizational failure of unit economic visibility. We align infrastructure provisioning directly with transaction revenue, refactoring wasteful architectures and renegotiating multi-million dollar hyperscaler agreements.',
      capabilities: [
        {
          name: 'Multi-Cloud Egress & Interconnect Architecture',
          desc: 'Eliminating predatory hyperscaler bandwidth egress fees by establishing dedicated private interconnects, Direct Connect / ExpressRoute fabrics, and regional edge caching.',
        },
        {
          name: 'Spot-Instance & Autonomous Kubernetes Orchestration',
          desc: 'Deploying Karpenter, KEDA, and predictive autoscalers across compute clusters, safely migrating fault-tolerant workloads to discounted spot capacity.',
        },
        {
          name: 'Hyperscaler EDP Tier Modeling & Commercial Renegotiation',
          desc: 'Arming CIOs and CFOs with empirical consumption telemetry to negotiate aggressive Enterprise Discount Programs (EDP) with AWS, Azure, and Google Cloud.',
        },
        {
          name: 'Unit Economic Allocation & Tagging Topologies',
          desc: 'Implementing FinOps Foundation cultural standards: automated tag enforcement, anomalous spend alerts, and board-level cost-per-transaction attribution.',
        },
      ],
      deliverables: [
        'Complete 90-Day Cloud Spend Autopsy & Egress Matrix',
        'Automated Cluster Rightsizing & Spot Migration Playbook',
        'Hyperscaler EDP Contract Negotiation Leverage Dossier',
        'Continuous FinOps Cost-per-Transaction Dashboard',
      ],
      stack: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Karpenter', 'Terraform', 'Datadog', 'Kubecost'],
    },
    core: {
      title: 'Mission-Critical Core Modernization',
      tagline: 'Zero-downtime strangler-fig transformations of monolithic legacy backbones.',
      historicYield: '99.999% Service SLA Maintained Across Full Cutover',
      icon: Layers,
      color: '#00d2ff',
      summary:
        'Big-bang rewrites are notorious for exceeding budgets by 300% and terminating executive careers. We execute incremental, surgical Strangler Fig transformations using bi-directional asynchronous CDC pipelines, isolating legacy mainframes without disrupting daily operational cashflow.',
      capabilities: [
        {
          name: 'Strangler Fig Pattern Decoupling Strategy',
          desc: 'Incrementally draining traffic from legacy monoliths through transparent reverse-proxy routing and domain-isolated microservices.',
        },
        {
          name: 'Bi-Directional Change Data Capture (CDC) Streams',
          desc: 'Using Debezium and Apache Kafka to replicate database state in real-time between legacy relational engines and distributed cloud data stores with zero data drift.',
        },
        {
          name: 'Domain-Driven Design (DDD) Context Mapping',
          desc: 'Deconstructing tangled monolithic codebases into cleanly bounded operational contexts, preventing circular architectural dependencies.',
        },
        {
          name: 'Pre-Mortem Failure Resilience & Chaos Engineering',
          desc: 'Automating network partition simulations and failover drills against production staging before any cutover is executed.',
        },
      ],
      deliverables: [
        'Monolith Dependency Graph & Strangler Roadmap',
        'Bi-Directional Data Synchronization & CDC Pipeline Architecture',
        'Zero-Downtime Cutover Runbooks & Rollback Invariants',
        'Internal Developer Platform (IDP) Taxonomies & Standards',
      ],
      stack: ['Apache Kafka', 'Debezium', 'Envoy', 'gRPC', 'Golang', 'PostgreSQL', 'CockroachDB', 'Docker'],
    },
    ai: {
      title: 'Enterprise AI & Data Fabric Readiness',
      tagline: 'Air-gapped LLM runtimes, vector mesh scaling, and institutional governance.',
      historicYield: 'SOC2 / HIPAA / FedRAMP Certified AI Workloads',
      icon: Sparkles,
      color: '#00d2ff',
      summary:
        'Enterprise AI cannot succeed on public consumer endpoints. We architect air-gapped LLM inference sandboxes, secure retrieval-augmented generation (RAG) pipelines, and proprietary data lineage meshes that guarantee intellectual property never leaves your regulatory perimeter.',
      capabilities: [
        {
          name: 'Air-Gapped Private LLM Inference Sandboxes',
          desc: 'Deploying self-hosted open-weights models (Llama, DeepSeek, Mistral) on dedicated private cloud clusters with hardware-enforced tenant isolation.',
        },
        {
          name: 'Vector Database Benchmarking & Hybrid Retrieval',
          desc: 'Architecting sub-millisecond semantic search pipelines combining dense vector embeddings with sparse lexical indexing (BM25) for mission-critical precision.',
        },
        {
          name: 'Institutional Governance & Data Leakage Guardrails',
          desc: 'Real-time automated redaction, PII scrubbers, and strict RBAC layers intercepting prompt tokens before model consumption.',
        },
        {
          name: 'Enterprise Data Mesh Lineage & Semantic Layer',
          desc: 'Consolidating disparate data silos into unified, governed semantic domains with automated schema migration auditing.',
        },
      ],
      deliverables: [
        'Air-Gapped LLM Infrastructure Architecture Blueprint',
        'Semantic Retrieval & Vector Index Benchmark Report',
        'Institutional AI Acceptable Use & Security Guardrails Policy',
        'Proprietary Data Mesh Lineage & Ingestion Pipeline',
      ],
      stack: ['vLLM', 'Milvus', 'Qdrant', 'Apache Iceberg', 'Ray', 'Triton', 'Ollama', 'Langfuse'],
    },
  };

  const current = domains[activeTab];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#00d2ff] w-fit border border-[#31353e]">
          CAPABILITIES MATRIX // INSTITUTIONAL ADVISORY
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ee] tracking-tight">
          Strategic Advisory Domains &amp; Architectural Deliverables
        </h1>
        <p className="text-base text-[#c2c6d8] leading-relaxed">
          Each engagement is led directly by Alexander Vance under a dedicated, partner-level mandate. We do
          not deploy junior analysts; we architect and execute the decisive technical interventions that protect
          enterprise enterprise capital.
        </p>
      </div>

      {/* Domain Switcher Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#0a0e16] rounded-xl border border-[#262a33] w-fit">
        <button
          onClick={() => setActiveTab('cloud')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'cloud'
              ? 'bg-[#0066ff] text-white shadow-[0_0_16px_rgba(0,102,255,0.4)]'
              : 'text-[#c2c6d8] hover:text-white hover:bg-[#1c2028]'
          }`}
        >
          <TrendingDown size={18} />
          <span>Cloud Rationalization &amp; FinOps</span>
        </button>

        <button
          onClick={() => setActiveTab('core')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'core'
              ? 'bg-[#0066ff] text-white shadow-[0_0_16px_rgba(0,102,255,0.4)]'
              : 'text-[#c2c6d8] hover:text-white hover:bg-[#1c2028]'
          }`}
        >
          <Layers size={18} />
          <span>Mission-Critical Core Modernization</span>
        </button>

        <button
          onClick={() => setActiveTab('ai')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'ai'
              ? 'bg-[#0066ff] text-white shadow-[0_0_16px_rgba(0,102,255,0.4)]'
              : 'text-[#c2c6d8] hover:text-white hover:bg-[#1c2028]'
          }`}
        >
          <Sparkles size={18} />
          <span>Enterprise AI &amp; Data Fabric</span>
        </button>
      </div>

      {/* Main Domain Presentation Card */}
      <div className="bg-[#1c2028] rounded-2xl p-8 lg:p-12 border border-[#31353e] flex flex-col gap-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-[#262a33]">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00d2ff]">
              FLAGSHIP PRACTICE AREA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{current.title}</h2>
            <p className="text-sm sm:text-base text-[#a5e7ff] font-medium">{current.tagline}</p>
            <p className="text-sm text-[#c2c6d8] leading-relaxed pt-2">{current.summary}</p>
          </div>

          <div className="bg-[#0a0e16] p-5 rounded-xl border border-[#262a33] flex flex-col gap-2 shrink-0 md:min-w-[260px]">
            <span className="text-[11px] font-mono text-[#8c90a1] uppercase">VERIFIED ENGAGEMENT YIELD</span>
            <span className="text-lg font-bold font-mono text-[#b6ebff]">{current.historicYield}</span>
            <div className="mt-3 pt-3 border-t border-[#1c2028] flex items-center justify-between text-xs text-[#8c90a1]">
              <span>Partner-Led Sprint</span>
              <span className="text-[#00d2ff] font-mono">12 - 16 Weeks</span>
            </div>
          </div>
        </div>

        {/* Detailed Capabilities Grid */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Workflow size={20} className="text-[#00d2ff]" />
            <span>Deep-Tier Architectural Capabilities</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#0a0e16]/60 p-6 rounded-xl border border-[#262a33] flex flex-col gap-3"
              >
                <div className="flex items-center gap-2.5 text-[#dfe2ee]">
                  <span className="w-2 h-2 rounded-full bg-[#00d2ff]"></span>
                  <h4 className="text-base font-semibold text-white">{cap.name}</h4>
                </div>
                <p className="text-sm text-[#c2c6d8] leading-relaxed pl-4">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Technology Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          <div className="bg-[#262a33]/50 p-6 rounded-xl border border-[#31353e] flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#b6ebff] font-mono flex items-center gap-2">
              <Shield size={16} />
              <span>Concrete Board-Grade Deliverables</span>
            </h4>
            <ul className="flex flex-col gap-3">
              {current.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#dfe2ee]">
                  <CheckCircle2 size={16} className="text-[#00d2ff] mt-0.5 shrink-0" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#262a33]/50 p-6 rounded-xl border border-[#31353e] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#b6ebff] font-mono flex items-center gap-2">
                <FileCode2 size={16} />
                <span>Audited Technical Ecosystem</span>
              </h4>
              <p className="text-xs text-[#c2c6d8]">
                Proven deployment benchmarks across modern containerized, distributed, and cloud infrastructure:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {current.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded bg-[#0a0e16] text-xs font-mono text-[#a5e7ff] border border-[#262a33]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenBriefingModal(current.title)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#0066ff] text-white text-sm font-semibold hover:bg-[#2c68f0] transition-colors shadow-lg cursor-pointer"
            >
              <span>Initiate {current.title.split(' ')[0]} Mandate</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
