import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FooterCT } from './styles';

export default function Footer() {
  return (
    <FooterCT className="inner">
      <p>Won Geun Yoo &copy; 2022</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/%EA%B7%BC-%EC%9B%90-166874201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </li>
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
