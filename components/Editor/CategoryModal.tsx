import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { categoryQ } from 'modules/query/category';

type CategoryModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function CategoryModal({ open, onClose }: CategoryModalProps) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const { mutate } = categoryQ.addCategory();
  const onSubmit = async () => {
    mutate({ name, slug });
    onClose();
  };

  return (
    <>
      <Modal
        destroyOnClose
        title="Basic Modal"
        open={open}
        onOk={onSubmit}
        onCancel={onClose}
        bodyStyle={{ padding: '12px 0 0' }}
      >
        <Form layout="vertical">
          <Form.Item label="이름" name="name">
            <Input
              type="text"
              placeholder="이름"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="SLUG" name="slug">
            <Input
              type="text"
              placeholder="SLUG"
              value={slug}
              onChange={e => setSlug(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
