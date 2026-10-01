import React from 'react';
import { ScreenId } from '../types';
import {
  Brain,
  Activity,
  Shield,
  Cpu,
  GitBranch,
  Network,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface PhilosophyScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBriefingModal: (domain?: string) => void;
}

export const PhilosophyScreen: React.FC<PhilosophyScreenProps> = ({
  onNavigate,
  onOpenBriefingModal,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col gap-16 text-[#dfe2ee]">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#262a33] text-xs font-mono text-[#00d2ff] w-fit border border-[#31353e]">
          FIRST-PRINCIPLES METHODOLOGY // COGNITIVE IT ENGINEERING
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Why Enterprise Systems Collapse: Cognitive Strain at Scale
        </h1>
        <p className="text-base text-[#c2c6d8] leading-relaxed">
          Most multi-million dollar IT failures are not compiler errors or algorithmic bugs. They occur when
          architectural complexity exceeds the cognitive bandwidth of human operators. We apply cognitive
          psychology and usability heuristics to distributed systems architecture.
        </p>
      </div>

      {/* Core Thesis Card */}
      <div className="bg-[#1c2028] p-8 lg:p-12 rounded-2xl border border-[#31353e] flex flex-col gap-6 shadow-xl">
        <div className="flex items-center gap-3 text-[#00d2ff]">
          <Brain size={28} />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold">THE FOUNDATIONAL THESIS</span>
        </div>
        <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed italic border-l-2 border-[#0066ff] pl-6">
          “When an architecture requires superhuman vigilance to operate, it is mathematically guaranteed to
          fail. Resilient systems are designed around human cognitive limits, with automated guardrails
          preventing fatal operational missteps.”
        </blockquote>
        <div className="flex items-center gap-4 pt-2 text-sm text-[#8c90a1]">
          <span className="text-[#a5e7ff] font-semibold">Alexander Vance</span>
          <span>·</span>
          <span>From “Heuristic Architecture: Engineering Systems for Fallible Humans” (2025)</span>
        </div>
      </div>

      {/* The 4 Usability Heuristics Transformed */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#00d2ff]">
            FRAMEWORK TRANSLATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Nielsen &amp; Norman Usability Principles in Distributed Computing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Heuristic 1 */}
          <div className="bg-[#1c2028] p-8 rounded-xl border border-[#262a33] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#00d2ff]">
                <Activity size={26} />
                <span className="text-xs font-mono text-[#8c90a1]">HEURISTIC 01</span>
              </div>
              <h3 className="text-xl font-bold text-white">Visibility of System Status</h3>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">
                In classical UX, the user must always know what the system is doing. In enterprise IT,
                executives and on-call engineers are routinely blind to cascading queue backpressures and
                hidden network deadlocks.
              </p>
              <div className="bg-[#0a0e16] p-4 rounded-lg border border-[#262a33] text-xs space-y-2">
                <span className="text-[#a5e7ff] font-mono font-semibold block">ARCHITECTURAL IMPERATIVE:</span>
                <p className="text-[#c2c6d8]">
                  Deploy distributed OpenTelemetry tracing and unified eBPF kernel monitors. Every transaction
                  must report its latency, cost attribution, and node state in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Heuristic 5 */}
          <div className="bg-[#1c2028] p-8 rounded-xl border border-[#262a33] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#00d2ff]">
                <Shield size={26} />
                <span className="text-xs font-mono text-[#8c90a1]">HEURISTIC 05</span>
              </div>
              <h3 className="text-xl font-bold text-white">Error Prevention Over Recovery</h3>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">
                Relying on manual disaster runbooks during a 2:00 AM black swan outage is a recipe for catastrophic
                data loss. The system must make fatal commands structurally impossible to execute.
              </p>
              <div className="bg-[#0a0e16] p-4 rounded-lg border border-[#262a33] text-xs space-y-2">
                <span className="text-[#a5e7ff] font-mono font-semibold block">ARCHITECTURAL IMPERATIVE:</span>
                <p className="text-[#c2c6d8]">
                  Zero-trust policy engines (OPA/Gatekeeper) that reject misconfigurations at admission control,
                  coupled with automated canary rollbacks that self-abort on elevated error rates.
                </p>
              </div>
            </div>
          </div>

          {/* Heuristic 6 */}
          <div className="bg-[#1c2028] p-8 rounded-xl border border-[#262a33] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#00d2ff]">
                <Cpu size={26} />
                <span className="text-xs font-mono text-[#8c90a1]">HEURISTIC 06</span>
              </div>
              <h3 className="text-xl font-bold text-white">Recognition Over Recall</h3>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">
                Engineers should not be forced to remember arcane CLI flags, bespoke deployment scripts, and
                undocumented cloud IAM configurations scattered across wiki pages.
              </p>
              <div className="bg-[#0a0e16] p-4 rounded-lg border border-[#262a33] text-xs space-y-2">
                <span className="text-[#a5e7ff] font-mono font-semibold block">ARCHITECTURAL IMPERATIVE:</span>
                <p className="text-[#c2c6d8]">
                  Construct Internal Developer Platforms (IDP) with declarative golden paths. Standardized API
                  catalogues and infrastructure-as-code blueprints eliminate tribal operational knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Heuristic 7 */}
          <div className="bg-[#1c2028] p-8 rounded-xl border border-[#262a33] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#00d2ff]">
                <GitBranch size={26} />
                <span className="text-xs font-mono text-[#8c90a1]">HEURISTIC 07</span>
              </div>
              <h3 className="text-xl font-bold text-white">Flexibility &amp; Efficiency of Use</h3>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">
                Tightly coupled monoliths force every department to move at the speed of the slowest release
                cycle. Architecture must support composable autonomy.
              </p>
              <div className="bg-[#0a0e16] p-4 rounded-lg border border-[#262a33] text-xs space-y-2">
                <span className="text-[#a5e7ff] font-mono font-semibold block">ARCHITECTURAL IMPERATIVE:</span>
                <p className="text-[#c2c6d8]">
                  Decoupled MACH patterns (Microservices, API-first, Cloud-native, Headless) with asynchronous
                  event streaming allowing teams to deploy isolated services independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conway's Law & Socio-Technical Alignment */}
      <div className="bg-[#1c2028] p-8 lg:p-12 rounded-2xl border border-[#31353e] flex flex-col gap-6">
        <div className="flex items-center gap-3 text-[#b6ebff]">
          <Users size={24} />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold">SOCIO-TECHNICAL ALIGNMENT</span>
        </div>
        <h3 className="text-2xl font-bold text-white">Conway’s Law is Inescapable: Structure Your Teams First</h3>
        <p className="text-sm sm:text-base text-[#c2c6d8] leading-relaxed">
          Melvin Conway proved in 1967 that organizations produce systems whose design mirrors their communication
          structures. Attempting to deploy a modular, decoupled microservice architecture inside a bureaucratic,
          siloed hierarchy always produces an intractable distributed monolith.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-[#0a0e16] p-4 rounded-lg border border-[#262a33]">
            <span className="text-xs font-mono text-[#00d2ff] font-semibold block">INVERSE CONWAY MANEUVER</span>
            <p className="text-xs text-[#c2c6d8] mt-1.5 leading-relaxed">
              We reorganize engineering squads around bounded business domains before touching a single line of
              legacy code.
            </p>
          </div>
          <div className="bg-[#0a0e16] p-4 rounded-lg border border-[#262a33]">
            <span className="text-xs font-mono text-[#00d2ff] font-semibold block">TEAM TOPOLOGIES</span>
            <p className="text-xs text-[#c2c6d8] mt-1.5 leading-relaxed">
              Clear segregation into Stream-Aligned, Enabling, Complicated-Subsystem, and Platform teams eliminates
              cross-team blocking.
            </p>
          </div>
          <div className="bg-[#0a0e16] p-4 rounded-lg border border-[#262a33]">
            <span className="text-xs font-mono text-[#00d2ff] font-semibold block">COGNITIVE LOAD BUDGETS</span>
            <p className="text-xs text-[#c2c6d8] mt-1.5 leading-relaxed">
              Each team owns only what their collective working memory can comfortably model without burnout.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-[#262a33] rounded-xl border border-[#31353e]">
        <div>
          <h4 className="text-xl font-bold text-white">Apply These First Principles to Your IT Estate</h4>
          <p className="text-sm text-[#c2c6d8] mt-1">
            Conduct a baseline architecture audit with Alexander Vance to identify high-risk cognitive bottlenecks.
          </p>
        </div>
        <button
          onClick={() => onOpenBriefingModal('First-Principles Architectural Diagnostic')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0066ff] hover:bg-[#2c68f0] text-white text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shadow-lg"
        >
          <span>Schedule Methodology Briefing</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
