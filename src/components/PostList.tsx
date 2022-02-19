import { PostItem } from './PostItem';

import '../styles/PostList.scss';

const posts = [{ body: '1' }, { body: '2' }, { body: '3' }, { body: '4' }];

export const PostList: React.FC = () => {
  return (
    <div className="PostList">
      <h2>PostList</h2>
      {posts.map((item) => (
        <PostItem key={item.body}>item.body</PostItem>
      ))}
    </div>
  );
};
