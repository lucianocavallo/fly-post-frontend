import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { MenuBar } from '../components/MenuBar';

export const Home = () => {
  return (
    <Layout>
      <MenuBar />
      <PostList />
    </Layout>
  );
};
