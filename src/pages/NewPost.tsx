import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Error } from '../components/Error';
import { useCreatePost } from '../hooks/useCreatePost';
import { createPostSchema } from '../utils/yupSchemas';

import '../styles/NewPost.scss';

export const NewPost: React.FC<NewPostProps> = ({ user }) => {
  const [error, setError] = useState('');
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
      createPostSchema
        .validate({ body })
        .then(() => createPost({ variables: { userId, body } }))
        .catch((e) => setError(e.message));
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const handleOnChange = () => {
    if (error) setError('');
  };

  return (
    <div className="NewPost_container">
      <div className="NewPost">
        <Link className="NewPost__back" to="/">
          <FaArrowLeft size={18} color="black" />
        </Link>
        <form onSubmit={handleCreatePost} ref={form} className="NewPost__form">
          <label htmlFor="body">Fly your post: </label>
          <textarea id="body" name="body" onChange={handleOnChange} />
          {error && <Error error={error} />}
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
