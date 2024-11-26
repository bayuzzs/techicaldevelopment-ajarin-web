import React from 'react';

const AssignmentCard = ({ type, title, desc }) => {
  return (
    <div className="flex gap-5 items-center w-[350px]">
      {type == 'task' && (
        <div className="size-14 rounded-xl grid place-items-center font-bold text-3xl text-[#A855F7] bg-[#E9D5FF]">
          !
        </div>
      )}
      {type == 'quiz' && (
        <div className="size-14 rounded-xl grid place-items-center font-bold text-3xl text-[#14B8A6] bg-[#99F6E4]">
          ?
        </div>
      )}
      <div>
        <p className="text-gray-800 font-bold text-lg">{title}</p>
        <p className="text-sm text-gray-300 ">{desc}</p>
      </div>
    </div>
  );
};

export default AssignmentCard;
