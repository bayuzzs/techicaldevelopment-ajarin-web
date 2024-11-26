import React from 'react';
import CategoryIcon from './icon/CategoryIcon';
import ArrowRight from './icon/ArrowRight';
import { Link } from 'react-router-dom';

const CourseTitleCard = ({ title, color, category }) => {
  return (
    <div className="flex justify-between grow items-center ">
      <div className="space-y-1">
        <p className="text-xl font-bold text-gray-700">{title}</p>
        <div className="flex gap-4 items-center">
          <CategoryIcon className={`size-4 ${color}`} />
          <p className={`text-sm ${color}`}>{category}</p>
        </div>
      </div>
      <Link
        to={'/course-detail'}
        className="p-2 size-fit hover:opacity-80 transition duration-100 rounded-xl bg-primary"
      >
        <ArrowRight className={'text-white size-5 '} />
      </Link>
    </div>
  );
};

export default CourseTitleCard;
