export type QueueMetric = {
  label: string;
  value: string;
  delta: string;
  tone: 'good' | 'warn' | 'risk';
};

export type AuditQueueItem = {
  workflow: string;
  owner: string;
  status: string;
  due: string;
  sla: string;
  risk: string;
};

export type ExceptionItem = {
  policy: string;
  system: string;
  owner: string;
  severity: string;
  age: string;
};

export type ThroughputPoint = {
  month: string;
  reviewsClosed: number;
  exceptionsOpened: number;
  remediationCompleted: number;
};

export type StagePoint = {
  name: string;
  count: number;
};
