/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect, useState } from 'react';

export default function useHeadAnchor(deps: DependencyList = []) {
  const [idList, setIdList] = useState<
    { idx: number; level: number; id: string; offset: number; active: boolean }[]
  >([]);
  useEffect(() => {
    const list = document.querySelector('.markdown-body');
    const arr = list?.querySelectorAll(
      'h1,h2,h3,h4,h5'
    ) as NodeListOf<HTMLHeadingElement>;
    if (arr) {
      let res: {
        idx: number;
        level: number;
        id: string;
        offset: number;
        active: boolean;
      }[] = [];
      arr.forEach((v, i) => {
        const position = v.offsetTop + window.innerHeight;
        res = [
          ...res,
          {
            idx: i,
            level: +v.tagName.charAt(1),
            id: v.id,
            offset: position,
            active: false,
          },
        ];
      });
      setIdList(res);
    }
  }, deps);
  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;
      idList.forEach((v, i) => {
        if (scrollY > v.offset) {
          setIdList(prev =>
            prev.map((v, idx) => {
              if (idx === i) return { ...v, active: true };
              return { ...v, active: false };
            })
          );
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [idList]);

  return { idList };
}
