import { useState } from 'react';

const Togglable = props => {
  const [visible, setVisible] = useState(false);
  const hideWhenVisible = { display: visible ? 'none' : 'block' };
  const showWhenVisible = { display: visible ? 'block' : 'none' };
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </>
  );
};

export default Togglable;
