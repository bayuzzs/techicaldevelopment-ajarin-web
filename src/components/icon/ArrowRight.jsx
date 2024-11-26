import React from 'react';

const ArrowRight = ({ className, onClick }) => {
  return (
    <svg
      width="24"
      height="12"
      viewBox="0 0 24 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className + ' -rotate-90'}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_297_2682)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2884 10.1571L5.63137 4.50012L7.04537 3.08612L11.9954 8.03612L16.9454 3.08612L18.3594 4.50012L12.7024 10.1571C12.5148 10.3446 12.2605 10.4499 11.9954 10.4499C11.7302 10.4499 11.4759 10.3446 11.2884 10.1571Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_297_2682">
          <rect
            width="12"
            height="24"
            fill="white"
            transform="translate(24 0.00012207) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowRight;
