import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FooterCT } from './styles';

export default function Footer() {
  return (
    <FooterCT className="inner">
      <p>Won Geun Yoo &copy; 2022</p>
      <ul>
        <li>
          <a
            href="https://github.com/Conradmaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Github
          </a>
        </li>
      </ul>
    </FooterCT>
  );
}
