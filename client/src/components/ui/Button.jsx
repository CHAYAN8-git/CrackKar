const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 transition-all duration-300 text-slate-900 font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;