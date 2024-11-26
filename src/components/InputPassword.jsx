import React, { useState } from 'react';
import lock from '../assets/icon/lock.svg';
import eye from '../assets/icon/eye.svg';
import eye_slashed from '../assets/icon/eye_slashed.svg';

const InputPassword = () => {
  const [showToggle, setShowToggle] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <label className="name mb-5 block">
      Password
      <div className="relative">
        <input
          className="mt-[10px] w-full rounded-xl border border-solid border-dark p-[10px_35px_10px_15px] focus:border-main focus:outline-1 focus:outline-main"
          type={togglePassword ? 'password' : 'text'}
          name="password"
          required
          onInput={(e) =>
            e.target.value ? setShowToggle(true) : setShowToggle(false)
          }
        />
        <span className="user absolute right-[10px] top-[20px] w-4">
          <img src={lock} />
        </span>
        <button
          type="button"
          className={
            'toggle-password-register absolute right-8 top-4 cursor-pointer p-[5px] hover:bg-[#e4dbdb] ' +
            (showToggle ? '' : 'hidden')
          }
          onClick={() => setTogglePassword(!togglePassword)}
        >
          <img src={togglePassword ? eye : eye_slashed} />
        </button>
      </div>
    </label>
  );
};

export default InputPassword;
