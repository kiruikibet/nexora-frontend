function Icon({
  icon: IconComponent,
  size = 20,
  strokeWidth = 2,
  className = "",
  ...props
}) {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export default Icon;
