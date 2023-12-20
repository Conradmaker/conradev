import { MainPage } from '../styles/mainStyles';
import ArticleList from 'src/components/Main/ArticleList';
import DevPostList from 'src/components/Main/DevPostList';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { postKeys, postListFetcher } from 'src/modules/query/post';
import { categoryKeys, categoryListFetcher } from 'src/modules/query/category';

async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: postKeys.list({ type: 'insight' }),
    queryFn: postListFetcher,
  });
  await queryClient.prefetchQuery({
    queryKey: postKeys.list({ type: 'dev' }),
    queryFn: postListFetcher,
  });
  await queryClient.prefetchQuery({
    queryKey: categoryKeys.list({ type: 'all' }),
    queryFn: categoryListFetcher,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainPage className="inner">
        <ArticleList />
        <DevPostList />
      </MainPage>
    </HydrationBoundary>
  );
}

export default Home;
