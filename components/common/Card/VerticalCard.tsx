import React from 'react';
import { VerticalCardBox } from './styles';

export default function VerticalCard() {
  return (
    <VerticalCardBox>
      {/* <img className="card_bg" src="https://picsum.photos/1200" /> */}
      <img
        alt=""
        className="card_bg"
        src="https://cdn.wallpapersafari.com/20/1/lKyZvD.jpg"
      />
      <div className="content">
        <span className="tag">테크</span>
        <h3>
          반도체의&nbsp;제왕<div className="br"></div> 인텔은&nbsp;왜&nbsp;몰락하는가
        </h3>
        <p className="date">2020.03.22</p>
      </div>
    </VerticalCardBox>
  );
}
