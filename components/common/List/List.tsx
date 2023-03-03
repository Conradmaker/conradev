import React from 'react';
import { SimpleListItem } from './styles';

export default function ListItem() {
  return (
    <SimpleListItem>
      <article>
        <h2>
          반도체의&nbsp;제왕<div className="br"></div> 인텔은&nbsp;왜&nbsp;몰락하는가
          {/* Start here for a quick overview of everything you need to know */}
        </h2>
        <p>
          <span className="date">2022년 3월 1주</span>
          <div className="dot"></div>
          <span className="cnt">13분 분량</span>
        </p>
      </article>
      <div className="img_wrapper">
        <img
          src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI4fHwzZCUyMHNoYXBlfGVufDB8fHx8MTY2MTY4MDA2Ng&ixlib=rb-1.2.1&q=80&w=2000"
          alt=""
        />
      </div>
    </SimpleListItem>
  );
}
