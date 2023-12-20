//src/Components/UI/Heading.tsx
import React from 'react';

interface Props {
  title: string;
  iconClass?: string;
}

const Heading = ({ title , iconClass}: Props): JSX.Element => {
  const toTitleCase = (text: string): string =>
    text.replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
    );

  const titleCaseText = toTitleCase(title);

  return (
    <div>
      <h1 className="text-center font-sans text-4xl m-8">
        {iconClass && <i className={`${iconClass} mr-2`}></i>}
        {titleCaseText}
      </h1>
    </div>
  );
};

export default Heading;