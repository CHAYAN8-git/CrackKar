const Button = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
      px-5
      py-3
      rounded-xl
      bg-amber-500
      text-black
      font-semibold
      transition-all
      duration-300
      hover:bg-amber-400
      hover:-translate-y-0.5
      active:scale-95
      ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;