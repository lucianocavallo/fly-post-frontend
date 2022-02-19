import { PostItem } from './PostItem';

import '../styles/PostList.scss';

export const PostList: React.FC = () => {
  return (
    <div className="PostList">
      <header className="PostList__header">
        <span>Home</span>
        <span>luciano</span>
      </header>
      {posts.map((post) => (
        <PostItem {...post} key={post.body} />
      ))}
    </div>
  );
};

const posts = [
  {
    username: 'luciano',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde magni ipsam culpa eos velit obcaecati fugit, quam modi, saepe iure minus aperiam numquam deleniti.',
    createdAt: '2022-02-19T18:41:20.901Z',
  },
  {
    username: 'rabufety',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem pariatur facere repellendus ipsam quos velit est, provident rem vitae.',
    createdAt: '2022-02-19T18:41:20.901Z',
  },
  {
    username: 'varela',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laboriosam vero delectus doloribus optio assumenda rerum error, omnis illo ex odio nobis, ea saepe sequi!',
    createdAt: '2022-02-19T18:41:20.901Z',
  },
  {
    username: 'quintana',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quidem doloremque voluptate magni, accusantium delectus assumenda, voluptatibus qui rerum, maxime ipsa? Cum nobis deleniti provident.',
    createdAt: '2022-02-19T18:41:20.901Z',
  },
];
