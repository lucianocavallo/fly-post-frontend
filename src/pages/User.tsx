import { useState } from 'react';
import { PostItem } from '../components/PostItem';
import { usePostsByUser } from '../hooks/usePostsByUser';
import { Layout } from '../components/Layout';
import { MenuBar } from '../components/MenuBar';
import { Loading } from '../components/Loading';

import '../styles/User.scss';

export const User: React.FC<UserProps> = ({ user, removeUser }) => {
  const userId = (user && user.id) as string;

  const { data, loading, error } = usePostsByUser(userId);
  const [showPosts, setShowPosts] = useState(false);

  return (
    <Layout>
      <MenuBar />
      <div className="User">
        <header className="User__header">
          <span>User</span>
          <span>{user && user.username}</span>
        </header>
        <div className="User__info">
          <p>
            Hello <span>{user && user.username}</span>
          </p>
          <div className="User__info-buttons">
            <button onClick={() => removeUser()}>Logout</button>
            <button onClick={() => setShowPosts(!showPosts)}>
              Show my posts
            </button>
          </div>
        </div>
        {loading && <Loading />}
        {data &&
          showPosts &&
          data.postsById.map((post: any) => (
            <PostItem {...post} key={post.id} loggedUser={user} />
          ))}
      </div>
    </Layout>
  );
};

type UserProps = {
  user:
    | {
        id: string;
        token: string;
        username: string;
      }
    | undefined;
  removeUser: () => void;
};
