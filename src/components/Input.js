import React from 'react';

const Input = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <span className="name">anon@portfolio</span>
      <span>:</span>
      <span className="loc">~/HOME</span>
      <span>$ </span>
      <input type="text" onChange={props.onChange} value={props.value} autofocus="true" />
    </form>
  )
}

export default Input;
