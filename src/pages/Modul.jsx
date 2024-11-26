import { Link, NavLink } from 'react-router-dom';
import userImg from '../assets/images/ibnu.png';
import BellFilled from '../components/icon/BellFilled';
import ArrowRight from '../components/icon/ArrowRight';
import ArrowUp from '../components/icon/ArrowUp';

export const Modul = () => {
  return (
    <div>
      <div className="bg-white p-5 rounded-xl flex fixed top-5 right-5 left-5 items-center">
        <div className="space-x-28 grow pl-5">
          <Link
            to={'/dashboard'}
            className="flex gap-5 items-center text-gray-500 hover:bg-gray-300 py-1 cursor-pointer w-fit rounded-lg pr-10 pl-5"
          >
            <ArrowRight className={'!rotate-90 size-8'} />
            <p>Dasar Fundamental Android Studio Menggunakan Jetpack Compose</p>
          </Link>
        </div>
        <div className="flex flex-row gap-7 items-center px-5">
          <BellFilled
            className={
              'size-6 cursor-pointer hover:text-orange-500 text-[#9696BB] transition duration-200'
            }
          />
          <img
            src={userImg}
            alt="user"
            className="size-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
      <div className="fixed top-28  right-5 rounded-lg bottom-0 p-5 bg-white w-[200px]">
        <p className="font-bold text-lg text-gray-800">Daftar Unit</p>
        <div className="w-full overflow-hidden rounded-full h-2` bg-[#BFDBFE] mt-3">
          <div className="rounded-full w-[75%] bg-primary h-full"></div>
        </div>
        <p className="text-gray-800 text-sm mt-3">75% Selesai</p>
        <div className="space-y-3 mt-5">
          <Link
            to={'/dashboard'}
            className="flex hover:bg-gray-300 rounded-lg p-1 gap-3 items-center"
          >
            <ArrowUp className={''} />
            <p className="text-sm text-gray-700">Instalasi Aplikasi</p>
          </Link>
          <Link
            to={'/dashboard'}
            className="flex hover:bg-gray-300 rounded-lg p-1 gap-3 items-center"
          >
            <ArrowUp className={''} />
            <p className="text-sm text-gray-700">Pengenalan Bahasa Kotlin</p>
          </Link>
          <Link
            to={'/dashboard'}
            className="flex hover:bg-gray-300 rounded-lg p-1 gap-3 items-center"
          >
            <ArrowUp className={''} />
            <p className="text-sm text-gray-700">
              Tutorial WebView Android Studio
            </p>
          </Link>
          <Link
            to={'/dashboard'}
            className="flex hover:bg-gray-300 rounded-lg p-1 gap-3 items-center"
          >
            <ArrowUp className={''} />
            <p className="text-sm text-gray-700">Tugas 1: Fundamental Kotlin</p>
          </Link>
        </div>
      </div>
      <div className="ml-5 mt-28 rounded-lg bg-white p-5 mr-60">
        <p className="text-lg font-bold text-gray-700">
          Tutorial WebView dengan Android Studio
        </p>
        <div className="p-3 rounded-lg overflow-hidden ">
          <iframe
            src="https://www.youtube.com/embed/hjfc08aR38I?si=ONGhSPi2gYk3DPeE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full aspect-video rounded-xl"
          ></iframe>
        </div>
        <div>
          <p className="text-gray-600 px-5 py-3 indent-7 text-justify">
            1. Apa itu WebView? WebView adalah komponen Android yang digunakan
            untuk menampilkan konten web di dalam aplikasi Android. Dengan
            WebView, pengembang dapat menyematkan halaman web atau aplikasi
            berbasis web langsung ke dalam aplikasi Android, sehingga pengguna
            tidak perlu membuka browser eksternal. WebView mendukung HTML, CSS,
            JavaScript, dan berbagai teknologi web lainnya, sehingga
            memungkinkan integrasi yang fleksibel antara aplikasi native dan
            konten web.
          </p>
          <p className="text-gray-600 px-5 py-3 indent-7 text-justify">
            2. Bagaimana WebView Bekerja? WebView bekerja seperti browser mini
            yang dapat diatur sepenuhnya di dalam aplikasi. Untuk
            menggunakannya, pengembang hanya perlu menambahkan elemen WebView ke
            tata letak aplikasi dan memuat URL atau konten HTML secara langsung
            melalui kode Java/Kotlin. WebView juga memungkinkan pengembang untuk
            mengontrol interaksi pengguna, seperti menangani navigasi halaman,
            menangkap klik tautan, dan menjalankan skrip JavaScript. Dengan ini,
            aplikasi dapat memiliki pengalaman pengguna yang lebih terintegrasi.
          </p>
          <p className="text-gray-600 px-5 py-3 indent-7 text-justify">
            3. Kapan WebView Digunakan? WebView biasanya digunakan untuk
            menampilkan konten web yang relevan dengan aplikasi, seperti
            dokumentasi, halaman login berbasis web, atau aplikasi hybrid yang
            menggabungkan komponen native dan web. Meskipun WebView praktis,
            penggunaannya sebaiknya dibatasi untuk kasus tertentu, karena
            performanya bisa lebih lambat dibandingkan elemen native dan
            memerlukan kontrol keamanan yang lebih ketat, seperti menghindari
            skrip berbahaya atau melindungi data pengguna. Pengetahuan tentang
            WebView sangat berguna bagi pengembang aplikasi yang ingin
            mengintegrasikan pengalaman web secara seamless ke dalam aplikasi
            Android mereka.
          </p>
        </div>
      </div>
    </div>
  );
};
