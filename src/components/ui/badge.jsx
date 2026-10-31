const Badge = ({ children, variant = "default" }) => (
  <span className={`ui-badge ui-badge-${variant}`}>{children}</span>
);

export default Badge;
