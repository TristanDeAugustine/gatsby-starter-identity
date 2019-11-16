import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <a
        href="../assets/files/resume.pdf"
        download
        style={{ textAlign: 'center', fontSize: '1.5rem', margin: '1rem' }}
      >
        Click to download my resume
      </a>
    </footer>
  );
}
