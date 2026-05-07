import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { exceptions, metrics, queueItems, stagePressure, throughput } from './data';

const pieColors = ['#d8b4fe', '#60a5fa', '#f59e0b', '#34d399'];

export default function App() {
  return (
    <div className="shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Compliance Workflow Hub</p>
          <h1>Audit queues, approvals, exceptions, and remediation pressure in one operator surface.</h1>
          <p className="lede">
            A premium internal workflow workspace for teams managing evidence, policy exceptions, SLA posture, and audit-closeout execution.
          </p>
        </div>
        <aside className="heroCard">
          <span className="heroLabel">Posture</span>
          <strong>Contained but pressure rising</strong>
          <p>Reviewer assignment and remediation lanes are absorbing the most operational load this week.</p>
        </aside>
      </header>

      <section className="metricGrid">
        {metrics.map((metric) => (
          <article key={metric.label} className={`metricCard metric-${metric.tone}`}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Throughput</p>
              <h2>Review, exception, and remediation volume</h2>
            </div>
            <span className="tag">Monthly trend</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={throughput}>
              <defs>
                <linearGradient id="closed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="remediation" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.75} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#213251" vertical={false} />
              <XAxis dataKey="month" stroke="#9fb0ce" />
              <YAxis stroke="#9fb0ce" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="reviewsClosed" stroke="#60a5fa" fill="url(#closed)" />
              <Area type="monotone" dataKey="remediationCompleted" stroke="#34d399" fill="url(#remediation)" />
            </AreaChart>
          </ResponsiveContainer>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Stage pressure</p>
              <h2>Workflow load by lane</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={stagePressure} dataKey="count" nameKey="name" innerRadius={65} outerRadius={105}>
                {stagePressure.map((entry, index) => (
                  <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ul className="legendList">
            {stagePressure.map((entry) => (
              <li key={entry.name}>
                <span>{entry.name}</span>
                <strong>{entry.count}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Open queue</p>
              <h2>Priority workflows</h2>
            </div>
            <span className="tag">SLA aware</span>
          </div>
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Workflow</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Due</th>
                  <th>SLA</th>
                  <th>Risk</th>
                </tr>
              </thead>
              <tbody>
                {queueItems.map((item) => (
                  <tr key={item.workflow}>
                    <td>{item.workflow}</td>
                    <td>{item.owner}</td>
                    <td>{item.status}</td>
                    <td>{item.due}</td>
                    <td>{item.sla}</td>
                    <td>{item.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Exceptions</p>
              <h2>Policy pressure</h2>
            </div>
          </div>
          <ul className="exceptionList">
            {exceptions.map((item) => (
              <li key={item.policy}>
                <div>
                  <strong>{item.policy}</strong>
                  <p>{item.system} · {item.owner}</p>
                </div>
                <div className="exceptionMeta">
                  <span>{item.severity}</span>
                  <small>{item.age}</small>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="panelLabel">Queue intervention</p>
            <h2>SLA exposure and escalation routing</h2>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={throughput}>
            <CartesianGrid stroke="#213251" vertical={false} />
            <XAxis dataKey="month" stroke="#9fb0ce" />
            <YAxis stroke="#9fb0ce" />
            <Tooltip />
            <Legend />
            <Bar dataKey="exceptionsOpened" fill="#f59e0b" radius={[8, 8, 0, 0]} />
            <Bar dataKey="remediationCompleted" fill="#34d399" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
