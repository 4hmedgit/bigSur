function Button(props) {
  const baseClasses =
    "min-w-40 text-xl leading-[32px] transition-colors duration-300 lg:px-5 lg:py-3 md:px-5 md:py-3 sm:px-5 sm:py-5  rounded w-auto";
  const outlineClasses =
    "border border-green-500 text-black hover:bg-green-500";
  const filledClasses = "bg-green-500 text-black";
  const widthClass = props.width ? `w-${props.width}` : '';

  const classes =
    props.variant === "filled"
      ? `${baseClasses} ${filledClasses} ${widthClass}`
      : `${baseClasses} ${outlineClasses} ${widthClass}`;
  return <button className={classes}>{props.text}</button>;
}

export default Button;
