import { render } from 'react-dom';
import React from 'react';

import Landing from './app/components/landing.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  render(<Landing />, root);
});
