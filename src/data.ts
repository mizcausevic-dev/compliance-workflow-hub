import type { AuditQueueItem, ExceptionItem, QueueMetric, StagePoint, ThroughputPoint } from './types';

export const metrics: QueueMetric[] = [
  { label: 'Open workflows', value: '48', delta: '+6 week-over-week', tone: 'warn' },
  { label: 'At-risk SLAs', value: '11', delta: '3 need action today', tone: 'risk' },
  { label: 'Policy exceptions', value: '17', delta: '5 high severity', tone: 'risk' },
  { label: 'Closeout rate', value: '82%', delta: '+9 pts this month', tone: 'good' }
];

export const throughput: ThroughputPoint[] = [
  { month: 'Jan', reviewsClosed: 18, exceptionsOpened: 8, remediationCompleted: 11 },
  { month: 'Feb', reviewsClosed: 22, exceptionsOpened: 10, remediationCompleted: 14 },
  { month: 'Mar', reviewsClosed: 26, exceptionsOpened: 12, remediationCompleted: 18 },
  { month: 'Apr', reviewsClosed: 29, exceptionsOpened: 9, remediationCompleted: 20 },
  { month: 'May', reviewsClosed: 31, exceptionsOpened: 11, remediationCompleted: 23 }
];

export const stagePressure: StagePoint[] = [
  { name: 'Evidence intake', count: 9 },
  { name: 'Reviewer assignment', count: 13 },
  { name: 'Approval routing', count: 11 },
  { name: 'Remediation', count: 15 }
];

export const queueItems: AuditQueueItem[] = [
  { workflow: 'SOX control recertification', owner: 'Internal Audit', status: 'In review', due: 'May 10', sla: '6h', risk: 'High' },
  { workflow: 'Vendor access attestation', owner: 'Security Ops', status: 'Awaiting approver', due: 'May 11', sla: '14h', risk: 'Medium' },
  { workflow: 'Privacy evidence package', owner: 'Compliance', status: 'Blocked by legal', due: 'May 12', sla: '22h', risk: 'High' },
  { workflow: 'PCI remediation follow-up', owner: 'Platform', status: 'In remediation', due: 'May 13', sla: '31h', risk: 'Medium' }
];

export const exceptions: ExceptionItem[] = [
  { policy: 'Privileged access waiver', system: 'Identity Platform', owner: 'IAM', severity: 'High', age: '18 days' },
  { policy: 'Encryption standard exception', system: 'Data Warehouse', owner: 'Security Architecture', severity: 'Critical', age: '9 days' },
  { policy: 'Logging retention variance', system: 'Customer Events', owner: 'Platform Ops', severity: 'Medium', age: '27 days' },
  { policy: 'Vendor evidence extension', system: 'Procurement', owner: 'Compliance Ops', severity: 'Low', age: '12 days' }
];
