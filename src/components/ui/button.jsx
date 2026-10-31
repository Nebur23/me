const Button = ({
  children,
  variant = "default",
  className = "",
  href,
  type = "button",
  ...props
}) => {
  const classes = `ui-button ui-button-${variant} ${className}`.trim();

  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>;
  }

  return <button className={classes} type={type} {...props}>{children}</button>;
};

export default Button;
