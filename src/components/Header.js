import React from 'react';

import config from '../../config';
const pic = require('../assets/images/Headshot.jpg');

export default function Footer() {
  return (
    <header>
      <span className="avatar">
        <img height="280rem" src={pic} alt="" />
      </span>
      <h1>{config.authorName}</h1>
      <p>{config.heading}</p>
    </header>
  );
}
