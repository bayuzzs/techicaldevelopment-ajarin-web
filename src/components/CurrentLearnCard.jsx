import React from 'react';
import CategoryIcon from './icon/CategoryIcon';
import { Link } from 'react-router-dom';
import ArrowRight from './icon/ArrowRight';
import discussion from '../assets/icon/discussion.svg';

const CurrentLearnCard = ({
  picture,
  color,
  category,
  name,
  nextButton,
  completed,
  onGoing,
}) => {
  return (
    <div className="bg-white p-5 rounded-xl ">
      <div className="flex justify-between pr-5">
        <div className="flex gap-5">
          <img
            src={picture}
            className="w-56 aspect-[5/6] rounded-xl object-cover"
          />
          <div className="p-3 flex flex-col justify-between max-w-[400px]">
            <div className="space-y-3">
              <div className="flex gap-4 items-center">
                <CategoryIcon className={`size-5 ${color}`} />
                <p className={`text-sm ${color}`}>{category}</p>
              </div>
              <p className="text-2xl font-bold text-gray-800">{name}</p>
              <div className="flex gap-5">
                <div className="flex rounded-xl gap-5 bg-secondary text-white px-5 py-3 items-center">
                  <p className="text-4xl">{completed}</p>
                  <p className="max-w-[60px] text-sm">Unit Selesai</p>
                </div>
                <div className="flex rounded-xl gap-5 bg-[#FDE68A]  px-5 py-3 items-center">
                  <p className="text-4xl text-[#D97706]">{onGoing}</p>
                  <p className="max-w-[60px] text-sm text-[#D97706] ">
                    Unit Sedang Berjalan
                  </p>
                </div>
              </div>
            </div>
            <Link
              to={'/modul'}
              className="mt-10 text-xl bg-primary rounded-lg hover:opacity-80 transition duration-200 text-white px-5 py-1 flex justify-between items-center"
            >
              {nextButton}
              <ArrowRight className={'size-8'} />
            </Link>
          </div>
        </div>
        <div className="justify-self-stretch rounded-lg w-2 bg-gray-300"></div>
        <div className="space-y-3 flex flex-col justify-center ">
          <img src={discussion} alt="" />
          <p className="text-gray-500">Punya Pertanyaan?</p>
          <Link
            to={'/forum'}
            className="px-3 py-2 bg-primary w-full flex items-center justify-between rounded-lg text-white"
          >
            Forum
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentLearnCard;
