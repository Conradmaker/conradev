import React, { useRef } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import MdView from 'components/Post/MdView';
import { MdEditorCT } from './styles';
import { InsightPostPage, PostCT } from 'styles/postStyles';
import { supaStorage } from 'libs/storage';
import PostInfoForm from './PostInfoForm';
import { FloatButton } from 'antd';
import { HiUpload } from 'react-icons/hi';
import { usePostFormStore } from 'modules/zustand/PostForm';

export default function MdEditer() {
  const input = useRef<HTMLInputElement>(null);
  const { type, content, updateState } = usePostFormStore();

  const img: commands.ICommand<string> = {
    name: 'image',
    keyCommand: 'image',
    buttonProps: { 'aria-label': 'Insert image' },
    icon: commands.image.icon,
    execute: async (_, api) => {
      input.current?.click();
      const modifyText = `![alt](이미지 업로드중...)`;

      api.replaceSelection(modifyText);
    },
  };
  const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = await supaStorage.savePostImage(e.target.files[0]);
      updateState({ content: content.replace('이미지 업로드중...', data) });
    }
  };

  return (
    <MdEditorCT>
      <input ref={input} type="file" multiple={false} hidden onChange={onChangeImg} />
      <div>
        <MDEditor
          className="md_editor"
          toolbarHeight={40}
          height={window.innerHeight}
          commands={[
            commands.title2,
            commands.title3,
            commands.title4,
            commands.title5,
            commands.divider,
            commands.bold,
            commands.italic,
            commands.strikethrough,
            commands.hr,
            commands.quote,
            commands.divider,
            commands.unorderedListCommand,
            commands.checkedListCommand,
            commands.orderedListCommand,
            commands.divider,
            commands.code,
            img,
            commands.link,
          ]}
          preview="edit"
          value={content}
          onChange={v => {
            updateState({ content: v });
          }}
        />
      </div>
      <div>
        <InsightPostPage>
          <PostInfoForm />
        </InsightPostPage>
        {type === 'dev' ? (
          <PostCT>
            <MdView content={content} type={type} />
          </PostCT>
        ) : (
          <InsightPostPage>
            <MdView content={content} type={type} />
          </InsightPostPage>
        )}
      </div>
      <FloatButton
        style={{ width: 52, height: 52 }}
        shape="circle"
        type="primary"
        icon={<HiUpload />}
      />
    </MdEditorCT>
  );
}
