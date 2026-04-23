export default function IpDetailRow({ label, value, loading }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-700/50 last:border-0">
      <span className="text-slate-400 text-sm">{label}</span>
      <span className="text-slate-100 font-medium truncate ml-4">
        {loading ? (
          <span className="inline-block w-24 h-4 bg-slate-700 animate-pulse rounded"></span>
        ) : (
          value || 'N/A'
        )}
      </span>
    </div>
  );
}
