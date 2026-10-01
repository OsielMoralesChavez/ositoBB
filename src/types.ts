export type ScreenId =
  | 'overview'
  | 'advisory-domains'
  | 'case-studies-roi'
  | 'consulting-philosophy'
  | 'system-diagnostics'
  | 'insights'
  | 'schedule-advisory-briefing';

export interface CaseStudy {
  id: string;
  tag: string;
  duration: string;
  title: string;
  clientType: string;
  crisis: string;
  strategy: string;
  yield: string;
  primaryMetric: {
    value: string;
    label: string;
  };
  secondaryMetric: {
    value: string;
    label: string;
  };
  tertiaryMetric: {
    value: string;
    label: string;
  };
  progressLabel: string;
  progressPercent: number;
  highlightText: string;
  pdfTitle: string;
  architectureBefore: string[];
  architectureAfter: string[];
  financialYield: string;
}

export interface InsightArticle {
  id: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  executiveSummary: string;
  paragraphs: string[];
  keyTakeaways: string[];
}
