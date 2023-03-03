import HorizontalCard from 'components/common/Card/HorizontalCard';
import { HorizontalCardBox } from 'components/common/Card/styles';
import React from 'react';
import { FcCommandLine, FcReading, FcTemplate } from 'react-icons/fc';
import { RiArrowRightSLine } from 'react-icons/ri';
import { DevPostCT } from './styles';
//
function DevPostSubmit() {
  return (
    <HorizontalCardBox type="submit">
      <img
        className="card_bg"
        src="https://genki.fueko.net/content/images/size/w800/2021/06/mymind-tZCrFpSNiIQ-unsplash.jpg"
      />
      <div className="content">
        <h3>
          공부를 하고 싶다면 <br />
          E-BOOK이 있어요 <FcReading />
        </h3>
        <button>
          E-BOOK 보러가기 <RiArrowRightSLine />
        </button>
      </div>
    </HorizontalCardBox>
  );
}
function DevPostSeries() {
  return (
    <HorizontalCardBox type="submit">
      <img
        className="card_bg"
        src="https://genki.fueko.net/content/images/size/w800/2021/05/photo-1604079628040-94301bb21b91.jpeg"
      />
      <div className="content">
        <h3>
          흐름으로 볼 수있게 <br />
          시리즈로 모아놨어요
          <FcTemplate />
        </h3>
        <button>
          시리즈 보러가기 <RiArrowRightSLine />
        </button>
      </div>
    </HorizontalCardBox>
  );
}

export default function DevPostList() {
  return (
    <DevPostCT>
      <h2>
        조금은 집중해서 읽는
        <strong>
          개발 포스트
          <FcCommandLine />
        </strong>
      </h2>
      <ul>
        <li>
          <DevPostSubmit />
        </li>
        <li>
          <HorizontalCard />
        </li>
        <li>
          <HorizontalCard />
        </li>
        <li>
          <HorizontalCard />
        </li>
        <li>
          <HorizontalCard />
        </li>
        <li>
          <HorizontalCard />
        </li>
        <li>
          <DevPostSeries />
        </li>
        <li>
          <HorizontalCard />
        </li>
        <li>
          <HorizontalCard />
        </li>
      </ul>
    </DevPostCT>
  );
}
