import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import CurrentLearn from '../components/CurrentLearn';
import { FinishedLearn } from '../components/FinishedLearn';

const Kelasku = () => {
  const [tabActive, setTabActive] = useState('progress');

  return (
    <div>
      <Sidebar />
      <TopBar />
      <div className="ml-[270px] mt-[110px] mb-20 mr-5">
        <h2 className="text-2xl text-gray-800 font-bold">Kelasku</h2>
        <div className="flex gap-10 mt-5">
          <button
            onClick={() => setTabActive('progress')}
            className={`px-28 rounded-xl py-2 ${
              tabActive == 'progress'
                ? 'bg-white text-gray-500'
                : 'bg-gray-400 text-gray-800'
            }`}
          >
            Sedang Dipelajari
          </button>
          <button
            onClick={() => setTabActive('done')}
            className={`px-28 rounded-xl py-2 ${
              tabActive == 'done'
                ? 'bg-white text-gray-500'
                : 'bg-gray-400 text-gray-800'
            }`}
          >
            Selesai Dipelajari
          </button>
        </div>
        <div className="mt-10 ">
          {tabActive === 'progress' && <CurrentLearn />}
          {tabActive === 'done' && <FinishedLearn />}
        </div>
      </div>
    </div>
  );
};

export default Kelasku;
