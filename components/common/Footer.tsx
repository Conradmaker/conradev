import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FooterCT } from './styles';

export default function Footer() {
  return (
    <FooterCT className="inner">
      <ul>
        <li>Won Geun Yoo &copy; 2022</li>
        <li>
          <a
            href="https://github.com/Conradmaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Github
          </a>
        </li>
        <li>Developed by 유원근</li>
      </ul>
    </FooterCT>
  );
}
