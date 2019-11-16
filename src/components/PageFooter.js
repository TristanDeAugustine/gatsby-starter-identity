import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; 2019 {config.authorName}</li>
      </ul>
    </footer>
  );
}
