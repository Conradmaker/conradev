import { Button, DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';
import dayjs from 'dayjs';
import { supaStorage } from 'libs/storage';
import { categoryQ } from 'modules/query/category';
import { usePostFormStore } from 'modules/zustand/PostForm';
import React, { useRef, useState } from 'react';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import CategoryModal from './CategoryModal';
export default function InsightForm() {
  const {
    type,
    title,
    updateState,
    description,
    read_time,
    published_at,
    cover_horizontal,
    cover_vertical,
    categories,
  } = usePostFormStore();
  const vCover = useRef<HTMLInputElement>(null);
  const hCover = useRef<HTMLInputElement>(null);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const { data: categoryList } = categoryQ.getCategoryList({ type });

  return (
    <>
      <div
        style={{
          marginBottom: 52,
          maxWidth: 660,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} style={{ width: 660 }}>
          <Form.Item label="타입" valuePropName="checked">
            <Radio.Group
              value={type}
              defaultValue="insight"
              onChange={e => updateState({ type: e.target.value })}
            >
              <Radio.Button value="insight">인사이트</Radio.Button>
              <Radio.Button value="dev">개발포스트</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="제목">
            <Input
              type="text"
              placeholder="제목"
              value={title}
              onChange={e => updateState({ title: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="설명">
            <Input.TextArea
              rows={4}
              placeholder="설명"
              value={description}
              onChange={e => updateState({ description: e.target.value })}
            />
          </Form.Item>

          <Form.Item label="SLUG">
            <Input type="text" placeholder="slug" />
          </Form.Item>
          <Form.Item label="출간일 & 시간">
            <Input.Group compact>
              <DatePicker
                style={{ width: '70%' }}
                value={dayjs(published_at)}
                onChange={e =>
                  updateState({ published_at: new Date(e?.toDate() || new Date()) })
                }
              />
              <InputNumber
                style={{ width: '30%' }}
                value={read_time}
                onChange={e => updateState({ read_time: e || 0 })}
              />
            </Input.Group>
          </Form.Item>
          {type === 'insight' && (
            <Form.Item label="커버(세로)">
              <Input.Search
                placeholder=""
                value={cover_vertical || ''}
                enterButton="업로드"
                onSearch={() => vCover.current?.click()}
              />
              <input
                hidden
                ref={vCover}
                type="file"
                className="detail"
                onChange={async e => {
                  if (e.target.files) {
                    const data = await supaStorage.saveCoverImage(e.target.files[0]);
                    updateState({ cover_vertical: data });
                  }
                }}
              />
            </Form.Item>
          )}
          <Form.Item label="커버(가로)">
            <Input.Search
              placeholder=""
              value={cover_horizontal || ''}
              enterButton="업로드"
              onSearch={() => hCover.current?.click()}
            />
            <input
              hidden
              ref={hCover}
              type="file"
              className="detail"
              onChange={async e => {
                if (e.target.files) {
                  const data = await supaStorage.saveCoverImage(e.target.files[0]);
                  updateState({ cover_horizontal: data });
                }
              }}
            />
          </Form.Item>
          <Form.Item label="카테고리">
            <Select
              style={{ width: '80%' }}
              mode="multiple"
              allowClear
              placeholder="카테고리 선택"
              defaultValue={categories}
              onChange={v => updateState({ categories: v })}
              options={categoryList?.map(v => ({
                value: v.id,
                label: v.name + `(${v.count || 0})`,
              }))}
            />
            <Button style={{ width: '20%' }} onClick={() => setCategoryOpen(true)}>
              추가
            </Button>
          </Form.Item>
          <Form.Item label="키워드">
            <Select
              mode="tags"
              style={{ width: '100%' }}
              placeholder="Tags Mode"
              onChange={v => updateState({ keywords: v.join('|') })}
              options={[]}
            />
          </Form.Item>
        </Form>
      </div>

      <div className="inner edit insight">
        <h1 className="title">{title}</h1>
        <ul className="detail">
          <li>
            <HiOutlineClock />
            <span>{read_time}분 분량</span>
          </li>
          <li>
            <HiOutlineCalendar />
            <span>{dayjs(published_at).format('YYYY년 MM월 DD일')}</span>
          </li>
        </ul>
        {cover_vertical && <img src={cover_vertical} alt="s" className="thumb" />}
      </div>
      <CategoryModal open={categoryOpen} onClose={() => setCategoryOpen(false)} />
    </>
  );
}
