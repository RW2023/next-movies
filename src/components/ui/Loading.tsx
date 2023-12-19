import { FC } from 'react';

interface Props {}

const Loading: FC<Props> = (props): JSX.Element => {
  return (
    <div
      className="h-screen flex items-center justify-center text-center"
      style={{ height: '75vh' }}
    >
      <p className="text-lg md:text-xl lg:text-2xl sm:-mx-4">
        Loading movies. Please wait it might be a big dump
        <span className="loading loading-bars loading-lg"></span>.........💩
      </p>
    </div>
  );
};

export default Loading;
