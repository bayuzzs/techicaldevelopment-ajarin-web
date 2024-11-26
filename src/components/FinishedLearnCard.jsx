import React from 'react';
import { Link } from 'react-router-dom';

const FinishedLearnCard = ({ title }) => {
  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex gap-5 items-center">
        <div className="size-20 bg-gray-500 rounded-lg "></div>
        <div className="grow">
          <p className="text-lg font-bold max-w-[500px]">{title}</p>
        </div>
        <Link
          to={'/cetak'}
          className="bg-primary text-gray-50 rounded-lg py-2 px-10"
        >
          Cetak Sertifikat
        </Link>
      </div>
    </div>
  );
};

export default FinishedLearnCard;
