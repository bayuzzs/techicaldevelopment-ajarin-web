import React from 'react';
import CurrentLearnCard from './CurrentLearnCard';
import belajarTailwind from '../assets/images/kelas/belajar_tailwind.png';
import jetpackCompose from '../assets/images/kelas/jetpack_compose.png';
import manajemenProyek from '../assets/images/kelas/manajemen_proyek.jpg';

const CurrentLearn = () => {
  return (
    <div className="space-y-5 animate-fade-in">
      <CurrentLearnCard
        picture={belajarTailwind}
        color={'text-secondary'}
        category={'Pengembangan Web'}
        name={'Belajar TailwindCSS Untuk Pemula'}
        nextButton={'Lanjut Belajar: TUGAS 1'}
        completed={5}
        onGoing={8}
      />
      <CurrentLearnCard
        picture={jetpackCompose}
        color={'text-primary'}
        category={'Pengembangan Mobile'}
        name={'Android Studio dengan Jetpack Compose'}
        nextButton={'Lanjut Belajar: Unit 2'}
        completed={2}
        onGoing={5}
      />
      <CurrentLearnCard
        picture={manajemenProyek}
        color={'text-primary'}
        category={'Pengembangan Mobile'}
        name={'Belajar Teknik Pengembangan SCRUM'}
        nextButton={'Lanjut Belajar: QUIZ 2'}
        completed={4}
        onGoing={6}
      />
    </div>
  );
};

export default CurrentLearn;
