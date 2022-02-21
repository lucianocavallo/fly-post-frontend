import { useContext, useEffect } from 'react';
import { Context } from '../context';
import { PostItem } from './PostItem';

import { Loading } from './Loading';
import { usePosts } from '../hooks/usePosts';

import '../styles/PostList.scss';

export const PostList: React.FC = () => {
  const { data, loading, error, refetch } = usePosts('10', '0');
  const { user, addUser } = useContext(Context);

  return (
    <div className="PostList">
      {/* <button onClick={() => refetch()}>refetch</button> */}
      <header className="PostList__header">
        <span>Home</span>
        <span>{user && user.username}</span>
      </header>
      {loading && <Loading />}
      {data &&
        data.posts.map((post: any) => (
          <PostItem {...post} key={post.id} loggedUser={user} />
        ))}
    </div>
  );
};
