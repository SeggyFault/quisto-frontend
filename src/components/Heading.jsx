const Heading = ({ children, className, level }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={`font-urbanist font-bold ${className}`}>
      {children}
    </Tag>
  );
};


export default Heading;