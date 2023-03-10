import dynamic from 'next/dynamic';
import React from 'react';

const MDEditor = dynamic(() => import('../../components/Editor/MdEditer'), {
  ssr: false,
  suspense: true,
});

export default function Index() {
  // const imageHandler = async () => {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();
  //   input.onchange = async () => {
  //     const file: any = input && input.files ? input.files[0] : null;
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     const quillObj = editor.current.getEditor();
  //   };
  // };
  return (
    <div style={{ height: '100vh' }}>
      <MDEditor />
    </div>
  );
}
