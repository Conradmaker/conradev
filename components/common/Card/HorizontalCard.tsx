import React from 'react';
import { HorizontalCardBox } from './styles';

export default function HorizontalCard() {
  return (
    <HorizontalCardBox>
      <img className="card_bg" src="https://picsum.photos/1200" />
      <div className="content">
        <p className="date">2020.03.22</p>
        <h3>
          반도체의&nbsp;제왕<div className="br"></div> 인텔은&nbsp;왜&nbsp;몰락하는가
        </h3>
        <ul className="tag_list">
          <li className="tag">Nextjs</li>
        </ul>
      </div>
    </HorizontalCardBox>
  );
}
