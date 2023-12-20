import React, { useRef } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import MdView from 'src/components/Post/MdView';
import { MdEditorCT } from './styles';
import { InsightPostPage, PostCT } from 'src/styles/postStyles';
import { supaStorage } from 'src/libs/storage';
import PostInfoForm from './PostInfoForm';
import { FloatButton, notification } from 'antd';
import { HiPencil, HiUpload } from 'react-icons/hi';
import { usePostFormStore } from 'src/modules/zustand/PostForm';
import { useMutation } from '@tanstack/react-query';
import { createPostFetcher, updatePostFetcher } from 'src/modules/query/post';
import { useParams } from 'next/navigation';

export default function MdEditer() {
  const { slug } = useParams<{ slug: string }>() as { slug: string };
  const input = useRef<HTMLInputElement>(null);
  const { mutateAsync: submitMutate } = useMutation({ mutationFn: createPostFetcher });
  const { mutateAsync: updateMutate } = useMutation({ mutationFn: updatePostFetcher });
  const postForm = usePostFormStore();
  const { type, content, updateState } = postForm;

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
  const onSubmit = async () => {
    const payload = {
      slug: postForm.slug,
      title: postForm.title,
      description: postForm.description,
      content: content,
      cover_horizontal: postForm.cover_horizontal,
      cover_vertical: postForm.cover_vertical || '',
      published_at: postForm.published_at,
      read_time: postForm.read_time,
      type: postForm.type === 'dev' ? 2 : 1,
      keywords: postForm.keywords,
      categories: postForm.categories,
    };
    if (slug && slug !== 'new') {
      const res = await updateMutate(payload);
      if (res) {
        notification.open({
          type: 'success',
          message: '수정완료',
          description: '수정이 완료되었습니다..',
        });
      }
    } else {
      const res = await submitMutate(payload);
      if (res) {
        notification.open({
          type: 'success',
          message: '작성 완료',
          description: '작성이 완료되었습니다..',
        });
      }
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
        icon={slug && slug !== 'new' ? <HiPencil /> : <HiUpload />}
        onClick={onSubmit}
      />
    </MdEditorCT>
  );
}
