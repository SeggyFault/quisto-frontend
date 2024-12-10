const Button = ({ label, onClick, className, href, icon: Icon }) => {
  return (
    <button onClick={onClick} className={`${className} text-base rounded-lg font-inter`}>
      <a href={href} className="flex items-center justify-center gap-1">
        {Icon && <Icon />}
        {label}
      </a>
    </button>
  );
};

export default Button;