import Image from 'next/image';
import React from 'react';
import { MdFace, MdLocationOn, MdOutlineMail } from 'react-icons/md';
import { AboutMeCT } from './styles';

export default function AboutMe() {
  return (
    <AboutMeCT className="about_me">
      <Image src="/images/logo1.png" alt="conradev" width={300} height={56} />
      <p>개발자 생활을 통해 보고 배우고 깨우치고 &nbsp;느낀것들.</p>
      <ul>
        <li>
          <MdFace />
          HOD, 라이즈 이엔엠
        </li>
        <li>
          <MdOutlineMail />
          yhg0337@gmail.com
        </li>
        <li>
          <MdLocationOn />
          Seoul, South Korea
        </li>
      </ul>
    </AboutMeCT>
  );
}
