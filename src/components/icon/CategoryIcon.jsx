import React from 'react';

const CategoryIcon = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1H7.75V7.75H1V1ZM12.25 1H19V7.75H12.25V1ZM1 12.25H7.75V19H1V12.25ZM12.25 15.625C12.25 16.5201 12.6056 17.3786 13.2385 18.0115C13.8714 18.6444 14.7299 19 15.625 19C16.5201 19 17.3786 18.6444 18.0115 18.0115C18.6444 17.3786 19 16.5201 19 15.625C19 14.7299 18.6444 13.8714 18.0115 13.2385C17.3786 12.6056 16.5201 12.25 15.625 12.25C14.7299 12.25 13.8714 12.6056 13.2385 13.2385C12.6056 13.8714 12.25 14.7299 12.25 15.625Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CategoryIcon;
