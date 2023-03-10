import React from 'react';
import { Form, Input, Modal } from 'antd';

type CategoryModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function CategoryModal({ open, onClose }: CategoryModalProps) {
  return (
    <>
      <Modal
        destroyOnClose
        title="Basic Modal"
        open={open}
        onOk={() => null}
        onCancel={onClose}
        bodyStyle={{ padding: '12px 0 0' }}
      >
        <Form layout="vertical">
          <Form.Item label="이름" name="name">
            <Input type="text" placeholder="이름" />
          </Form.Item>
          <Form.Item label="SLUG" name="slug">
            <Input type="text" placeholder="SLUG" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
