const Card = ({ children }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-slate-700 hover:-translate-y-1">
      {children}
    </div>
  );
};

export default Card;