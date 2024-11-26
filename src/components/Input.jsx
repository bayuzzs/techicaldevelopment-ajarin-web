import React from 'react';

const Input = ({ inputTitle, inputName, iconUrl, inputType }) => {
  return (
    <label className="mb-5 block">
      {inputTitle}
      <div className="relative">
        <input
          className="mt-[10px] w-full rounded-xl border border-solid border-dark p-[10px_35px_10px_15px] focus:border-primary focus:outline-1 focus:outline-primary"
          type={inputType}
          name={inputName}
          required
        />
        <span className="absolute right-[10px] top-[20px] w-5">
          <img src={iconUrl} />
        </span>
      </div>
    </label>
  );
};

export default Input;
