import HorizontalCard from 'components/common/Card/HorizontalCard';
import { postQ } from 'modules/query/post';
import React from 'react';
import { FcCommandLine } from 'react-icons/fc';
import { DevPostCT } from './styles';
//
// function DevPostSubmit() {
//   return (
//     <HorizontalCardBox type="submit">
//       <img
//         alt="E-BOOK 보러가기"
//         title="E-BOOK 보러가기"
//         className="card_bg"
//         src="https://genki.fueko.net/content/images/size/w800/2021/06/mymind-tZCrFpSNiIQ-unsplash.jpg"
//       />
//       <div className="content">
//         <h3>
//           전체 키워드 <FcReading />
//         </h3>
//         <CategoryList />
//       </div>
//     </HorizontalCardBox>
//   );
// }

export default function DevPostList() {
  const { data: devPosts } = postQ.getPostList({ type: 'dev', limit: 12, page: 1 });
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
        {/* <li>
          <DevPostSubmit />
        </li> */}
        {devPosts?.map(devPost => (
          <li key={devPost.id}>
            <HorizontalCard data={devPost} />
          </li>
        ))}
      </ul>
    </DevPostCT>
  );
}
