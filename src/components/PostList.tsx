import { PostItem } from './PostItem';

import { Loading } from './Loading';
import { usePosts } from '../hooks/usePosts';

import '../styles/PostList.scss';

export const PostList: React.FC = () => {
  const { data, loading, error, refetch } = usePosts('10', '0');

  console.log('data: ', data);
  console.log('loading: ', loading);
  console.log('error: ', error);

  return (
    <div className="PostList">
      <header className="PostList__header">
        <span>Home</span>
        <span>luciano</span>
      </header>
      {loading && <Loading />}
      {data &&
        data.posts.map((post: any) => <PostItem {...post} key={post.id} />)}
    </div>
  );
};
