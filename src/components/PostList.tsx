import { useContext, useEffect } from 'react';
import { Context } from '../context';
import { PostItem } from './PostItem';

import { Loading } from './Loading';
import { usePosts } from '../hooks/usePosts';

import '../styles/PostList.scss';

const limit = '5';

export const PostList: React.FC = () => {
  const { data, loading, error, fetchMore } = usePosts(limit, '0');
  const { user, addUser } = useContext(Context);

  data && console.log(data.posts.length);

  const handleShowMore = () => {
    fetchMore({
      variables: {
        offset: String(data.posts.length),
      },
    });
  };

  return (
    <div className="PostList">
      <header className="PostList__header">
        <span>Home</span>
        <span>{user && user.username}</span>
      </header>
      {loading && <Loading />}
      {data &&
        data.posts.map((post: any) => (
          <PostItem {...post} key={post.id} loggedUser={user} />
        ))}
      <button className="PostList__fetch_more" onClick={handleShowMore}>
        Show more posts
      </button>
    </div>
  );
};
