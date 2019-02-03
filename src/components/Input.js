import React from 'react';

const Input = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <span>anon@portfolio:~/HOME$ </span>
      <input type="text" onChange={props.onChange} value={props.value} autofocus="true" />
    </form>
  )
}

export default Input;
