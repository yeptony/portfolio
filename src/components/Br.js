import React from 'react';
import { uniqid } from 'uniqid';

const Br = () => (
  <span key={uniqid()}>
    <br />
  </span>
);

export default Br;
