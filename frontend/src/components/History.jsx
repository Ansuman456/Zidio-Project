import '../components/History.css'

const History = () => {
  return (
    <div className="history-section-outer">
  <div className="history-section-title">Upload History</div>
  <div className="history-section-desc">
    View and manage your previous uploads and charts
  </div>
  {/* Repeated card for each history item */}
  <div className="history-card">
    <div className="card-left">
      <span className="file-icon">
        {/* Google Sheets/Excel SVG */}
        <svg fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 28 28">
          <rect x={5} y={5} width={18} height={18} rx={4} fill="#e6f8ee" />
          <path d="M9 10h10M9 14h6M9 18h8" stroke="#22b35c" strokeWidth={2} strokeLinecap="round" />
        </svg>
      </span>
      <div className="file-info">
        <div className="file-name">file_example_XLS_100.xls</div>
        <div className="file-meta">
          <span>
            <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 20 20"><circle cx={10} cy={10} r={8} /><path d="M10 6v4l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            7/3/2025
          </span>
          <span>
            <svg fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 20 20"><rect x={4} y={8} width={12} height={7} rx={2} /><rect x={7} y={4} width={6} height={4} rx={1} /></svg>
            100 rows
          </span>
        </div>
        <div className="file-tags-row">
          <span className="file-tag primary">0</span>
          <span className="file-tag">First Name</span>
          <span className="file-tag">Last Name</span>
          <span className="file-tag">Gender</span>
          <span className="file-tag">Country</span>
          <span className="file-tag">+3 more</span>
        </div>
      </div>
    </div>
    <div className="card-actions">
      <button className="action-btn">
        <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 22 22"><circle cx={11} cy={11} r={8} /><circle cx={11} cy={11} r={3} /><path d="M16 11h.01" /></svg>
        View
      </button>
      <button className="delete-btn" title="Delete">
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20"><line x1={6} y1={6} x2={14} y2={14} /><line x1={14} y1={6} x2={6} y2={14} /></svg>
      </button>
    </div>
  </div>
  {/* Duplicate card as shown in the screenshot: */}
  <div className="history-card">
    <div className="card-left">
      <span className="file-icon">
        <svg fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 28 28">
          <rect x={5} y={5} width={18} height={18} rx={4} fill="#e6f8ee" />
          <path d="M9 10h10M9 14h6M9 18h8" stroke="#22b35c" strokeWidth={2} strokeLinecap="round" />
        </svg>
      </span>
      <div className="file-info">
        <div className="file-name">file_example_XLS_100.xls</div>
        <div className="file-meta">
          <span>
            <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 20 20"><circle cx={10} cy={10} r={8} /><path d="M10 6v4l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            7/3/2025
          </span>
          <span>
            <svg fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 20 20"><rect x={4} y={8} width={12} height={7} rx={2} /><rect x={7} y={4} width={6} height={4} rx={1} /></svg>
            100 rows
          </span>
        </div>
        <div className="file-tags-row">
          <span className="file-tag primary">0</span>
          <span className="file-tag">First Name</span>
          <span className="file-tag">Last Name</span>
          <span className="file-tag">Gender</span>
          <span className="file-tag">Country</span>
          <span className="file-tag">+3 more</span>
        </div>
      </div>
    </div>
    <div className="card-actions">
      <button className="action-btn">
        <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 22 22"><circle cx={11} cy={11} r={8} /><circle cx={11} cy={11} r={3} /><path d="M16 11h.01" /></svg>
        View
      </button>
      <button className="delete-btn" title="Delete">
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20"><line x1={6} y1={6} x2={14} y2={14} /><line x1={14} y1={6} x2={6} y2={14} /></svg>
      </button>
    </div>
  </div>
</div>
  )
}

export default History