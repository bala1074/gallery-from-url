import React, { useState } from "react";
function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  return (
    <button className={`btn-${variant} btn-${size}`}>MY BUTTON</button>
  );
}
export default Button;
