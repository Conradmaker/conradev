import dynamic from 'next/dynamic';
import React from 'react';

const MDEditor = dynamic(() => import('../../components/Editor/MdEditer'), {
  ssr: false,
  suspense: true,
});

export default function Index() {
  return (
    <div style={{ height: '100vh' }}>
      <MDEditor />
    </div>
  );
}
