const Button = ({ label, onClick, className, href, icon: Icon }) => {
  return (
    <button onClick={onClick} className={`text-base font-inter ${className}`}>
      <a href={href} className="flex items-center justify-center gap-1">
        {Icon && <Icon />}
        {label}
      </a>
    </button>
  );
};

export default Button;