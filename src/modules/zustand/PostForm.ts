import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface FormState {
  type: 'insight' | 'dev';
  title: string;
  description: string;
  slug: string;
  categories: number[];
  content: string;
  cover_horizontal: string;
  cover_vertical: string | null;
  keywords: string;
  published_at: Date;
  read_time: number;
  updateState: (value: Partial<FormState>) => void;
}
const initialState: Omit<FormState, 'updateState'> = {
  type: 'insight',
  title: '',
  description: '',
  slug: '',
  categories: [],
  content: '',
  cover_horizontal: '',
  cover_vertical: null,
  keywords: '',
  published_at: new Date(),
  read_time: 0,
};
export const usePostFormStore = create(
  immer<FormState>(set => ({
    ...initialState,
    updateState: value => {
      set(state => (state = { ...state, ...value }));
    },
  }))
);
