import React, { Fragment } from 'react';
import Sidebar from '../components/Sidebar';
import user from '../assets/images/ibnu.png';
import TopBar from '../components/TopBar';
import welcomeIllustration from '../assets/images/welcome_illustration.png';
import belajarTailwind from '../assets/images/kelas/belajar_tailwind.png';
import ClassCard from '../components/ClassCard';

const Dashboard = () => {
  return (
    <Fragment>
      <Sidebar />
      <TopBar userImg={user} />
      <div className="ml-[270px] mt-[110px] h-[20000px] mr-5">
        <div className="bg-[#BFDBFE] py-5 px-10 gap-10 rounded-xl flex justify-between">
          <div className="space-y-5">
            <h1 className="text-3xl text-primary font-bold">
              Selamat Datang, Ibnu Hanif!
            </h1>
            <p className="text-dark">
              Ayo teruskan belajarmu dan tingkatkan pengetahuanmu, dengan
              menggunakan <b>Ajarin</b> :)
            </p>
          </div>
          <img
            src={welcomeIllustration}
            alt="Welcome Banner"
            className="max-w-sm"
          />
        </div>
        <div className="px-8 ">
          <h2 className="font-bold text-2xl py-5">Tugas Kamu</h2>
          <div className="bg-white p-3 rounded-lg"></div>
        </div>
        <div className="px-8 ">
          <h2 className="font-bold text-2xl py-5">Lanjutin Kelas Yuk!</h2>
          <div className="grid no-scrollbar grid-flow-col gap-5 overflow-x-auto auto-rows-auto">
            <ClassCard />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
