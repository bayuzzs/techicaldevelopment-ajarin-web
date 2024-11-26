import React, { Fragment } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import welcomeIllustration from '../assets/images/welcome_illustration.png';
import belajarTailwind from '../assets/images/kelas/belajar_tailwind.png';
import figma from '../assets/images/kelas/figma.png';
import jetpackCompose from '../assets/images/kelas/jetpack_compose.png';
import manajemenProyek from '../assets/images/kelas/manajemen_proyek.jpg';
import ClassCard from '../components/ClassCard';
import AssignmentCard from '../components/AssignmentCard';
import CourseTitleCard from '../components/CourseTitleCard';

const Dashboard = () => {
  return (
    <Fragment>
      <Sidebar />
      <TopBar />
      <div className="ml-[270px] mt-[110px] mb-20 mr-5 animate-fade-in">
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
          <div className="bg-white p-5 rounded-lg space-y-5">
            <div className="flex gap-5 w-full">
              <AssignmentCard
                type={'quiz'}
                title={'QUIZ 1: Class TailwindCSS'}
                desc={'15 Soal / 90 Syarat Lulus'}
              />
              <CourseTitleCard
                title={'Belajar TailwindCSS untuk Pemula'}
                color={'text-secondary'}
                category={'Pengembangan Web'}
              />
            </div>
            <div className="flex gap-5 w-full">
              <AssignmentCard
                type={'task'}
                title={'TUGAS 2: Sintaks Kotlin'}
                desc={'Kumpul format .ZIP file'}
              />
              <CourseTitleCard
                title={'Android Studio dengan Jetpack Compose'}
                color={'text-primary'}
                category={'Pengembangan Mobile'}
              />
            </div>
            <div className="flex gap-5 w-full">
              <AssignmentCard
                type={'quiz'}
                title={'QUIZ 3: Seputar Teknik SCRUM'}
                desc={'30 Soal / 80 Syarat Lulus'}
              />
              <CourseTitleCard
                title={'Belajar Teknik SCRUM Master'}
                color={'text-primary'}
                category={'Manajemen Proyek'}
              />
            </div>
          </div>
        </div>
        <div className="px-8 ">
          <h2 className="font-bold text-2xl py-5">Lanjutin Kelas Yuk!</h2>
          <div className="grid no-scrollbar grid-flow-col gap-5 overflow-x-auto auto-rows-auto">
            <ClassCard
              category={'Pengembangan Website'}
              name={'Belajar TailwindCSS untuk Pemula'}
              picture={belajarTailwind}
              color={'text-secondary'}
              percentage={90}
            />
            <ClassCard
              category={'Design UI/UX'}
              name={'Belajar Fundamental UI Menggunakan Figma'}
              picture={figma}
              color={'text-secondary'}
              percentage={50}
            />
            <ClassCard
              category={'Manajemen Proyek'}
              name={'Belajar Teknik Pengembangan SCRUM'}
              picture={manajemenProyek}
              color={'text-primary'}
              percentage={30}
            />
            <ClassCard
              category={'Pengembangan Mobile'}
              name={'Android Studio Dengan Jetpack Compose'}
              picture={jetpackCompose}
              color={'text-primary'}
              percentage={30}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
