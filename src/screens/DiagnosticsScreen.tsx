import React, { useState } from 'react';
import { ScreenId } from '../types';
import {
  Activity,
  Shield,
  Download,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Cpu,
  RefreshCw,
  FileText,
} from 'lucide-react';

interface DiagnosticsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBriefingModal: (domain?: string) => void;
}

export const DiagnosticsScreen: React.FC<DiagnosticsScreenProps> = ({
  onNavigate,
  onOpenBriefingModal,
}) => {
  const [cloud, setCloud] = useState(2);
  const [data, setData] = useState(2);
  const [resilience, setResilience] = useState(3);
  const [ai, setAi] = useState(1);
  const [reportGenerated, setReportGenerated] = useState(false);

  const total = cloud + data + resilience + ai;
  const score = Math.round((total / 16) * 100);

  const getTierName = (val: number, type: 'cloud' | 'data' | 'res' | 'ai') => {
    const map = {
      cloud: [
        'Tier 1: Uncontrolled Cloud Sprawl',
        'Tier 2: Reactive FinOps Monitoring',
        'Tier 3: Unit-Economic Optimized',
        'Tier 4: Autonomous Elastic Multi-Cloud',
      ],
      data: [
        'Tier 1: Tightly Coupled Monolith',
        'Tier 2: Siloed REST Microservices',
        'Tier 3: Asynchronous Event-Mesh',
        'Tier 4: Governed Real-Time Data Mesh',
      ],
      res: [
        'Tier 1: High Outage Risk (>4hr MTTR)',
        'Tier 2: Manual Runbooks & Checklists',
        'Tier 3: Automated Cluster Auto-Healing',
        'Tier 4: Chaos-Engineering Hardened 99.999%',
      ],
      ai: [
        'Tier 1: Zero Institutional AI Policy',
        'Tier 2: Fragmented SaaS AI Subscriptions',
        'Tier 3: Governed Private LLM Sandbox',
        'Tier 4: Production Air-Gapped Vector Fabric',
      ],
    };
    return map[type][val - 1];
  };

  const getVulnerabilities = () => {
    const list: string[] = [];
    if (cloud <= 2) {
      list.push(
        'High probability of hyperscaler egress bill inflation exceeding planned budgets by 30-45%.'
      );
    }
    if (data <= 2) {
      list.push(
        'Database lock contention during peak transaction surges threatens systemic checkout/trading freezes.'
      );
    }
    if (resilience <= 2) {
      list.push(
        'Disaster recovery relies on human heroics during off-hours, risking unrecoverable data drift.'
      );
    }
    if (ai <= 2) {
      list.push(
        'Proprietary enterprise intellectual property and customer PII are at acute risk of public model ingestion.'
      );
    }
    if (list.length === 0) {
      list.push(
        'Architecture demonstrates top-tier resilience. Primary strategic frontier is continuous chaos engineering and custom model fine-tuning.'
      );
    }
    return list;
  };

  const vulnerabilities = getVulnerabilities();

  const handleExportReport = () => {
    setReportGenerated(true);
    const element = document.createElement('a');
    const content =
      `ALEXANDER VANCE IT ADVISORY // SYSTEM DIAGNOSTIC REPORT\n` +
      `MATURITY INDEX v4.2 SCORE: ${score}/100\n` +
      `EVALUATION DATE: ${new Date().toLocaleDateString()}\n\n` +
      `DIMENSION BREAKDOWN:\n` +
      `1. Cloud Unit Economics: ${cloud}/4 (${getTierName(cloud, 'cloud')})\n` +
      `2. Core Data Pipeline: ${data}/4 (${getTierName(data, 'data')})\n` +
      `3. Incident Resilience: ${resilience}/4 (${getTierName(resilience, 'res')})\n` +
      `4. Enterprise AI Platform: ${ai}/4 (${getTierName(ai, 'ai')})\n\n` +
      `KEY EXPOSURE VULNERABILITIES:\n` +
      vulnerabilities.map((v, i) => `${i + 1}. ${v}`).join('\n') +
      `\n\nRECOMMENDED STRATEGIC INTERVENTION:\n` +
      `Engage Alexander Vance for a 14-day technical due diligence and architecture refactoring sprint.\n` +
      `Direct channel: vance@advisory.enterprise`;

    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Vance_Maturity_Audit_${score}pct.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col gap-14 text-[#dfe2ee]">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#00d2ff] w-fit border border-[#31353e]">
          HEURISTIC DIAGNOSTIC STUDIO // ALGORITHM v4.2
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Enterprise Architecture Maturity Benchmark
        </h1>
        <p className="text-base text-[#c2c6d8] leading-relaxed">
          Calibrate your enterprise IT infrastructure across four critical vectors. Our algorithmic benchmark
          synthesizes findings against an empirical database of 180+ Fortune 500 transformations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Vector Panel */}
        <div className="lg:col-span-7 flex flex-col gap-6 bg-[#1c2028] p-6 lg:p-8 rounded-2xl border border-[#31353e] shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#262a33]">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity size={20} className="text-[#00d2ff]" />
              <span>Assessment Vectors</span>
            </h2>
            <button
              onClick={() => {
                setCloud(2);
                setData(2);
                setResilience(3);
                setAi(1);
              }}
              className="text-xs text-[#8c90a1] hover:text-[#00d2ff] flex items-center gap-1 font-mono transition-colors"
            >
              <RefreshCw size={12} />
              <span>Reset Defaults</span>
            </button>
          </div>

          {/* Vector 1 */}
          <div className="space-y-2 bg-[#0a0e16]/60 p-4 rounded-xl border border-[#262a33]">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-white">1. Cloud Unit Economics &amp; FinOps</span>
              <span className="text-xs font-mono text-[#00d2ff] font-medium">{getTierName(cloud, 'cloud')}</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              value={cloud}
              onChange={(e) => setCloud(parseInt(e.target.value))}
              className="w-full accent-[#0066ff] h-2 bg-[#262a33] rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8c90a1]">
              <span>Uncontrolled Sprawl</span>
              <span>Centralized FinOps</span>
              <span>Predictable Unit Scaling</span>
            </div>
          </div>

          {/* Vector 2 */}
          <div className="space-y-2 bg-[#0a0e16]/60 p-4 rounded-xl border border-[#262a33]">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-white">2. Core Data Pipeline &amp; Coupling</span>
              <span className="text-xs font-mono text-[#00d2ff] font-medium">{getTierName(data, 'data')}</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              value={data}
              onChange={(e) => setData(parseInt(e.target.value))}
              className="w-full accent-[#0066ff] h-2 bg-[#262a33] rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8c90a1]">
              <span>Tight Monolith</span>
              <span>Strangled Microservices</span>
              <span>Event-Mesh Resilient</span>
            </div>
          </div>

          {/* Vector 3 */}
          <div className="space-y-2 bg-[#0a0e16]/60 p-4 rounded-xl border border-[#262a33]">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-white">3. Black Swan Incident Resilience &amp; MTTR</span>
              <span className="text-xs font-mono text-[#00d2ff] font-medium">
                {getTierName(resilience, 'res')}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              value={resilience}
              onChange={(e) => setResilience(parseInt(e.target.value))}
              className="w-full accent-[#0066ff] h-2 bg-[#262a33] rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8c90a1]">
              <span>&gt;4hr Outage MTTR</span>
              <span>Auto-Heal Clusters</span>
              <span>Chaos Engineering Tested</span>
            </div>
          </div>

          {/* Vector 4 */}
          <div className="space-y-2 bg-[#0a0e16]/60 p-4 rounded-xl border border-[#262a33]">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-white">4. Enterprise AI Platform &amp; Governance</span>
              <span className="text-xs font-mono text-[#00d2ff] font-medium">{getTierName(ai, 'ai')}</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              value={ai}
              onChange={(e) => setAi(parseInt(e.target.value))}
              className="w-full accent-[#0066ff] h-2 bg-[#262a33] rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8c90a1]">
              <span>Zero Policy</span>
              <span>Internal LLM Sandboxes</span>
              <span>Governed Vector Mesh</span>
            </div>
          </div>
        </div>

        {/* Live Output & Score Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#262a33] p-8 rounded-2xl border border-[#31353e] flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#8c90a1] uppercase tracking-wider">
                VANCE MATURITY INDEX v4.2
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1c2028] text-[#00d2ff] text-xs font-mono border border-[#31353e]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse"></span>
                ACTIVE SYNTHESIS
              </span>
            </div>

            <div>
              <span className="text-xs text-[#c2c6d8] block">Calculated Architecture Score:</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-6xl font-bold font-mono text-[#b6ebff]">{score}</span>
                <span className="text-2xl font-mono text-[#8c90a1]">/ 100</span>
              </div>
            </div>

            {/* Dynamic Bar */}
            <div className="w-full h-3.5 bg-[#0a0e16] rounded-full overflow-hidden p-0.5 border border-[#1c2028]">
              <div
                className="h-full bg-[#0066ff] rounded-full transition-all duration-300"
                style={{ width: `${score}%` }}
              ></div>
            </div>

            {/* Identified Vulnerabilities */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-xs font-mono text-[#8c90a1] uppercase font-bold flex items-center gap-1.5">
                <AlertTriangle size={14} className="text-amber-400" />
                <span>Identified Operational Exposures:</span>
              </span>
              <ul className="flex flex-col gap-2">
                {vulnerabilities.map((vuln, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-[#dfe2ee] bg-[#1c2028] p-3 rounded-lg border border-[#31353e] leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                    <span>{vuln}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => onOpenBriefingModal('Architecture Audit Mandate')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#0066ff] hover:bg-[#2c68f0] text-white text-sm font-semibold transition-all shadow-[0_0_20px_-3px_rgba(0,102,255,0.4)] cursor-pointer"
              >
                <span>Request Formal Board Audit</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleExportReport}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#1c2028] hover:bg-[#31353e] text-[#a5e7ff] text-xs font-mono border border-[#31353e] transition-colors cursor-pointer"
              >
                <Download size={14} />
                <span>{reportGenerated ? 'Report Exported (Download Again)' : 'Export Diagnostic Report (.txt)'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
