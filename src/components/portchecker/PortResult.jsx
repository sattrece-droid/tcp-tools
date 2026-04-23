export default function PortResult({ result, error }) {
  if (error) {
    return (
      <div className="mt-8 p-6 bg-red-900/20 border border-red-500/50 rounded-2xl flex items-center gap-4">
        <div className="bg-red-500 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div>
          <p className="text-red-400 font-bold">Error Checking Port</p>
          <p className="text-red-500/80 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!result) return null;

  const { open, host, port } = result;

  return (
    <div className={`mt-8 p-6 border rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-all animate-in fade-in slide-in-from-bottom-4 ${
      open 
        ? 'bg-green-900/20 border-green-500/50' 
        : 'bg-red-900/20 border-red-500/50'
    }`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full ${open ? 'bg-green-500' : 'bg-red-500'}`}>
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )}
        </div>
        <div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
          <p className={`text-2xl font-black ${open ? 'text-green-400' : 'text-red-400'}`}>
            PORT {port} IS {open ? 'OPEN' : 'CLOSED'}
          </p>
        </div>
      </div>
      <div className="text-center sm:text-right">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Target</p>
        <p className="text-white font-mono font-medium">{host}</p>
      </div>
    </div>
  );
}
