import React from 'react';
import CategoryIcon from '../components/icon/CategoryIcon';
import { Link } from 'react-router-dom';
import ArrowRight from './icon/ArrowRight';

const ClassCard = ({ picture, name, category, color, percentage }) => {
  return (
    <div className="rounded-xl bg-white p-3 w-[300px]">
      <img src={picture} alt="" className="rounded-xl mb-3" />
      <div className="px-3 space-y-3">
        <div className="flex gap-4 items-center">
          <CategoryIcon className={`size-5 ${color}`} />
          <p className={`text-sm ${color}`}>{category}</p>
        </div>
        <p className="font-bold text-lg">{name}</p>
        <div className="space-y-2">
          <div className="w-full h-2.5 rounded-full bg-[#BFDBFE] overflow-hidden">
            <div
              className={`h-full bg-primary rounded-full`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-gray-600 text-sm">{percentage}% Selesai</p>
          <Link
            to={'/detail-course'}
            className="bg-primary ml-auto hover:opacity-80 duration-100 transition rounded-lg py-1.5 px-3 text-white flex max-w-fit gap-3 items-center"
          >
            Lihat
            <ArrowRight className={'text-white size-5'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
