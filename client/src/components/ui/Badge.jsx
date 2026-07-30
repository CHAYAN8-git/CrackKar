const Badge = ({ children }) => {
  return (
    <span className="inline-flex px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300">
      {children}
    </span>
  );
};

export default Badge;