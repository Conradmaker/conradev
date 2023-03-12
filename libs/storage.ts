import { supabase } from './supabaseClient';

const getFileName = (fileName: string) => {
  return new Date().getTime() + '.' + fileName.split('.')[fileName.split('.').length - 1];
};

const saveCoverImage = async (file: File) => {
  const { data, error } = await supabase.storage
    .from('cover')
    .upload(getFileName(file.name), file);
  if (error) throw new Error('이미지 업로드 실패');
  return `https://${process.env.NEXT_PUBLIC_SPB_APP_ID}.supabase.co/storage/v1/object/public/cover/${data.path}`;
};

const savePostImage = async (file: File) => {
  const { data, error } = await supabase.storage
    .from('post-image')
    .upload(getFileName(file.name), file);
  if (error) throw new Error('이미지 업로드 실패');
  return `https://${process.env.NEXT_PUBLIC_SPB_APP_ID}.supabase.co/storage/v1/object/public/post-image/${data.path}`;
};

export const supaStorage = {
  saveCoverImage,
  savePostImage,
};
