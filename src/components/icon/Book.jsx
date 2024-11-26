import React from 'react';

const Book = ({ className }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.5007 2.16653H6.50065C5.30898 2.16653 4.33398 3.14153 4.33398 4.3332V21.6665C4.33398 22.8582 5.30898 23.8332 6.50065 23.8332H19.5007C20.6923 23.8332 21.6673 22.8582 21.6673 21.6665V4.3332C21.6673 3.14153 20.6923 2.16653 19.5007 2.16653ZM6.50065 4.3332H11.9173V12.9999L9.20898 11.3749L6.50065 12.9999V4.3332Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Book;
