function Button({ content,className= "" }) {
    const defaultClasses = "py-2 px-7 rounded-full   bg-primary  font-medium  hover:shadow-xl   transition-all duration-300 hover:scale-105";
    const classNames = `${defaultClasses} ${className}`.trim()
    return (
      <button className={classNames}>
        {content}
      </button>
  
    );
  }
  
  export default Button;