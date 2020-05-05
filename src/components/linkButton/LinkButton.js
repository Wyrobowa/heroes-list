import React from 'react';

const LinkButton = WrappedComponent => ({
  type, color, font, to, className, children, history,
}) => {
  const handleOnClick = () => {
    history.push(to);
  };

  return (
    <WrappedComponent
      type={type}
      color={color}
      font={font}
      className={className}
      onClick={handleOnClick}
    >
      {children}
    </WrappedComponent>
  );
};


export default LinkButton;
