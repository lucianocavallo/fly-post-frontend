import { FormEventHandler, useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useCreatePost } from '../hooks/useCreatePost';
import { usePosts } from '../hooks/usePosts';
import '../styles/NewPost.scss';

export const NewPost: React.FC<NewPostProps> = ({ user }) => {
  const form = useRef(null);
  const { createPost, data, loading } = useCreatePost();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data]);

  const handleCreatePost: FormEventHandler = (e) => {
    e.preventDefault();
    try {
      const userId = user?.id;
      const formData = new FormData(form.current as unknown as HTMLFormElement);
      const body = formData.get('body');
      createPost({ variables: { userId, body } });
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div className="NewPost_container">
      <div className="NewPost">
        <Link className="NewPost__back" to="/">
          <FaArrowLeft size={18} color="black" />
        </Link>
        <form onSubmit={handleCreatePost} ref={form} className="NewPost__form">
          <label htmlFor="body">Fly your post: </label>
          <textarea id="body" name="body" />
          <button>post it</button>
        </form>
      </div>
    </div>
  );
};

type NewPostProps = {
  user:
    | {
        id: string;
        token: string;
        username: string;
      }
    | undefined;
};
