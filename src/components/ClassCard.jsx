import React from 'react';
import CategoryIcon from '../components/icon/CategoryIcon';

const ClassCard = ({ picture, name, color }) => {
  return (
    <div className="rounded-xl bg-white p-3 max-w-fit">
      <img src={picture} alt="" className="rounded-xl mb-3" />
      <div className="flex gap-4 px-3 items-center">
        <CategoryIcon className={`size-5 ${color}`} />
        <p className={`text-sm ${color}`}>{name}</p>
      </div>
    </div>
  );
};

export default ClassCard;
