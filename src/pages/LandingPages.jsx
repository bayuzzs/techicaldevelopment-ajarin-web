import { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import productivity from '../assets/icon/productivity.svg';
import success from '../assets/icon/success.svg';
import time from '../assets/icon/time.svg';
import mainLeft from '../assets/images/blob/main_left.svg';
import mainRightOne from '../assets/images/blob/main_right_1.svg';
import mainRightTwo from '../assets/images/blob/main_right_2.svg';
import mainIllustration from '../assets/images/main_illustration.webp';
import FeatureCard from '../components/FeatureCard';
import ActivityListing from '../components/icon/ActivityListing';
import Quiz from '../components/icon/Quiz';
import ReminderNotification from '../components/icon/ReminderNotification';
import Discussion from '../components/icon/Discussion';
import TimeVisualization from '../components/icon/TimeVisualization';
import Trophy from '../components/icon/Trophy';
import LandingNavbar from '../components/LandingNavbar';
import TeamCard from '../components/TeamCard';
import aldy from '../assets/team/aldy.jpg';
import alia from '../assets/team/alia.jpg';
import bagas from '../assets/team/bagas.jpg';
import ibnu from '../assets/team/ibnu.jpg';
import rizqi from '../assets/team/rizqi.jpg';
import bayu from '../assets/team/bayu.jpg';

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const alertRef = useRef(null);

  async function formSubmit(e) {
    e.preventDefault();
    const body = new FormData(e.target);
    alertRef.current.classList.remove('flex');
    alertRef.current.classList.add('hidden');
    setLoading(true);
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyQSapm3WEF4HQYwBaP8hIA6gq7Q1WDCRIM3tgLdlFmuce4KW8ggVWe18HELWnRjFzr/exec',
        {
          method: 'POST',
          body,
        }
      );
      e.target.reset();
      alertRef.current.classList.remove('hidden');
      alertRef.current.classList.add('flex');
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Fragment>
      <LandingNavbar />
      <main id="home" className="  relative p-10">
        <img
          src={mainLeft}
          className="floating left absolute left-[-30px] top-[-100px] md:left-0"
        />
        <img
          src={mainRightOne}
          className="floating absolute right-1 hidden md:right-0 md:top-0 md:block md:w-[500px]"
        />
        <img
          src={mainRightTwo}
          className="floating absolute right-2 hidden md:right-0 md:top-0 md:block md:w-[600px]"
        />
        <div className="container-main container mx-auto flex flex-col p-5 md:flex-row md:flex-nowrap ">
          <section className="main-content md:w-1/2">
            <div className="description animate-fade-in px-5">
              <p className="title mb-5 text-sm font-bold tracking-[3px] text-primary md:text-base md:tracking-[5px] md:text-primary">
                MULAI PERJALANAN BELAJARMU
              </p>
              <h1 className="mb-5 text-4xl font-extrabold text-dark md:max-w-[400px] md:text-5xl xl:text-[3.5rem]">
                Mari Belajar Bersama{' '}
                <span className="text-primary">Ajarin</span>
              </h1>
              <p className="description-text mb-7 text-base leading-6 tracking-normal text-dark md:max-w-[450px] md:text-justify md:text-base md:text-dark">
                Ajarin adalah platform belajar kolaboratif untuk pelajar
                meningkatkan kemampuan mereka. Tingkatkan efektivitas
                pembelajaran anda melalui pengalaman digital yang fleksibel dan
                menyenangkan
              </p>
              <div className="h-10 w-[230px] overflow-hidden rounded-[20px] border-[1px] border-solid border-primary after:ml-[5%] after:animate-move-right after:content-[url('/images/icon/arrow-big.svg')] md:h-10 md:max-w-[380px] md:rounded-[30px] xl:h-[50px] xl:min-w-[380px]">
                <Link
                  to="/auth"
                  className="inline-block h-full w-3/4 rounded-[20px] bg-primary text-center text-xs leading-10 text-white transition-[width] duration-500 hover:w-full hover:opacity-80 md:rounded-[30px] md:text-[0.8rem] md:leading-10 xl:text-[1rem] xl:leading-[50px]"
                >
                  Mulai Belajar!
                </Link>
              </div>
            </div>
          </section>
          <aside className="illustration animate-fade-in px-[30px] py-5 md:w-1/2 md:p-0 ">
            <div className="img-container relative">
              <img
                src={mainIllustration}
                alt="illustration"
                className="md:mx-auto md:max-w-[90%] xl:max-w-[85%]"
              />
              <div className="floating success md xl:left=[280px] absolute bottom-[-30px] left-[140px] flex size-[70px] scale-[0.7] items-center justify-center rounded-[10px] bg-[#fdd527] shadow-md md:bottom-[-75px] md:left-[calc((50%-40px))] md:scale-[0.8] xl:bottom-[-75px] xl:scale-100">
                <img src={success} className="size-10 text-white" />
              </div>
              <div className="floating productivity absolute top-5 flex size-[70px] scale-[0.7] items-center justify-center rounded-[10px] bg-[#ff635e] shadow-md md:left-[60px] md:top-0 md:scale-[0.7] xl:left-[60px] xl:top-[20px] xl:scale-[0.9]">
                <img src={productivity} className="mx-[15px] size-10" />
              </div>
              <div className="floating time absolute right-0 top-0 flex size-[70px] scale-50 items-center justify-center rounded-[10px] bg-[#6f41f1] shadow-md md:right-0 md:top-0 md:scale-[0.6] xl:right-[90px] xl:top-[20px] xl:scale-[0.7]">
                <img src={time} className="size-10 text-white" />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <section id="features" className="relative px-3">
        <img
          src="/images/blob/feature-left.svg"
          className="absolute top-0 -z-10 md:left-[-200px] md:top-[50px]"
        />
        <div className="mx-auto flex flex-col px-[20px] py-[30px]">
          <div className="text-center text-dark md:p-[20px_40px] md:text-left">
            <h2 className="mb-3 text-3xl font-bold md:text-[3rem]">
              Fitur <span className="text-primary">Ajarin</span>
            </h2>
            <p className="text-[0.9rem] leading-6 md:max-w-[500px] md:text-[1rem]">
              Kami ingin mengubah cara orang belajar dan berbagi ilmu,
              menghadirkan kolaborasi, interaktivitas, dan kemudahan dalam
              setiap proses pembelajaran!
            </p>
          </div>
          <div className="mx-auto flex max-w-[1000px] flex-wrap justify-center p-7 text-dark md:gap-3">
            <FeatureCard
              cardStyle="hover:border-[#fdd527] hover:shadow-[0_0_20px_0_#fdd527]"
              Icon={ActivityListing}
              iconStyle="bg-[#fff9df] text-[#fdd527] group-hover/card:bg-[#fdd527]"
              title="Materi Pembelajaran"
              titleStyle="group-hover/card:text-[#fdd527]"
              featureDetail="Pelajar bisa membaca materi apa  pun kapan saja sesuai kebutuhan."
            />
            <FeatureCard
              cardStyle="hover:border-[#6f41f1] hover:shadow-[0_0_20px_0_#6f41f1]"
              Icon={Quiz}
              iconStyle="bg-[#f2e9ff] text-[#6f41f1] group-hover/card:bg-[#6f41f1]"
              title="Kuis dan Tugas Interaktif"
              titleStyle="group-hover/card:text-[#6f41f1]"
              featureDetail="Pelajar dapat mengikuti kuis dan tugas, memotivasi untuk memahami materi."
            />
            <FeatureCard
              cardStyle="hover:border-[#ff5436] hover:shadow-[0_0_20px_0_#ff5436]"
              Icon={Trophy}
              iconStyle="bg-[#ffdcdb] text-[#ff5436] group-hover/card:bg-[#ff5436]"
              title="Kejuaraan Ajarin"
              titleStyle="group-hover/card:text-[#ff5436]"
              featureDetail="Pelajar bersaing dalam kuis dengan teman-teman untuk meraih skor tertinggi."
            />
            <FeatureCard
              cardStyle="hover:border-[#50e3c2] hover:shadow-[0_0_20px_0_#50e3c2]"
              Icon={ReminderNotification}
              iconStyle="bg-[#d7fff6] text-[#50e3c2] group-hover/card:bg-[#50e3c2]"
              title="Notifikasi Pengingat"
              titleStyle="group-hover/card:text-[#50e3c2]"
              featureDetail="Pelajar akan mendapat pengingat untuk tugas, kuis, atau aktivitas belajar lainnya."
            />
            <FeatureCard
              cardStyle="hover:border-[#008fff] hover:shadow-[0_0_20px_0_#008fff]"
              Icon={Discussion}
              iconStyle="bg-[#d4ecff] text-[#008fff] group-hover/card:bg-[#008fff]"
              title="Forum Diskusi"
              titleStyle="group-hover/card:text-[#008fff]"
              featureDetail="Pelajar dapat berdiskusi, bertanya, dan berbagi pandangan sesama pelajar."
            />
          </div>
        </div>
      </section>
      <section id="team" className="px-3">
        <div className="mx-auto flex flex-col p-[30px_20px]">
          <div className="ml-10 text-center md:text-left ">
            <h2 className="mb-3 text-4xl font-bold md:text-5xl">
              <span className="text-primary">Ajarin</span> Team
            </h2>
            <p className="text-[0.9rem] leading-6  md:max-w-[700px] md:text-justify md:text-[1rem]">
              Selamat Datang di tim Ajarin! Di sini. anda dapat mengenal
              orang-orang hebat yang berdedikasi untuk menjadikan pembelajaran
              lebih mudah, interaktif dan menyenangkan bersama Ajarin.
            </p>
          </div>
          <div className="flex flex-wrap justify-center p-[30px_10px] md:mx-auto md:max-w-[800px]">
            <TeamCard name="Bagas Satrio" role="Hacker" imgUrl={bagas} />
            <TeamCard name="Ibnu Hanif" role="Hipster" imgUrl={ibnu} />
            <TeamCard name="Bayu Maulana" role="Hacker" imgUrl={bayu} />
            <TeamCard name="Aldy Jhonatan" role="Hipster" imgUrl={aldy} />
            <TeamCard name="Rizqi Vela" role="Hipster" imgUrl={rizqi} />
            <TeamCard name="Alia Pramestia" role="Hipster" imgUrl={alia} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default LandingPage;
