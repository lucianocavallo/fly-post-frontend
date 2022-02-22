import '../styles/Error.scss';

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="Error">
      <p>{error}</p>
    </div>
  );
};

type ErrorProps = {
  error: string;
};
