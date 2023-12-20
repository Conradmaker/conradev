import { AutoComplete, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import _debounce from 'lodash/debounce';
import { OmniBarCT } from './styles';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { keywordSearchFetcher, searchKeys } from 'src/modules/query/search';
const renderTitle = (title: string) => <span>{title}</span>;

type OmniBarProps = {
  open: boolean;
  onClose: () => void;
};
export default function OmniBar({ open, onClose }: OmniBarProps) {
  const [options, setOptions] = useState<
    {
      label: JSX.Element;
      options: {
        value: string;
        label: JSX.Element;
      }[];
    }[]
  >([]);
  const [keyword, setKeyword] = useState('');
  const [startEl, setStartEl] = useState<EventTarget | null>(null);
  const { data, isFetching } = useQuery({
    queryKey: searchKeys.keyword({ keyword }),
    queryFn: keywordSearchFetcher,
    enabled: !!keyword,
  });
  useEffect(() => {
    if (!data) return;
    setOptions(
      Object.entries(data)
        .map(([key, value]) => ({
          label: renderTitle(key),
          options: value.map(v => ({
            value: v.slug + '',
            label: (
              <Link
                href={v.slug ? `/${key}/${v.slug}` : ''}
                title={v.title || ''}
                onClick={onClose}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 16,
                    padding: '4px 0',
                  }}
                >
                  {v.title || ''}
                </div>
              </Link>
            ),
          })),
        }))
        .filter(v => v.options.length)
    );
  }, [data, onClose]);

  const onClickBG = (e: React.MouseEvent) => {
    if (e.currentTarget === startEl) {
      e.stopPropagation();
      onClose();
    }
  };
  const onChangeKeyword = _debounce((value: string) => {
    setKeyword(value);
  }, 500);

  useEffect(() => {
    if (!open) {
      setKeyword('');
    }
  }, [open]);

  if (!open) return null;
  return (
    <OmniBarCT onClick={onClickBG} onMouseDown={e => setStartEl(e.target)}>
      <AutoComplete
        popupClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={600}
        style={{ width: 600 }}
        options={options}
        size="large"
      >
        <Input.Search
          loading={isFetching}
          onChange={e => onChangeKeyword(e.target.value)}
          size="large"
          placeholder="검색어를 입력해주세요."
        />
      </AutoComplete>
    </OmniBarCT>
  );
}
