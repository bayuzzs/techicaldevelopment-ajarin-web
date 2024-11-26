import React from 'react';
import FinishedLearnCard from './FinishedLearnCard';

export const FinishedLearn = () => {
  return (
    <div className="space-y-5 animate-fade-in">
      <FinishedLearnCard
        title={'Dasar-Dasar Manajemen Proyek dengan Metodologi Agile'}
      />
      <FinishedLearnCard
        title={'Mendesain UI dengan Pendekatan Design System'}
      />
      <FinishedLearnCard
        title={'Optimalisasi Aplikasi Mobile dengan Kotlin Multiplatform'}
      />
      <FinishedLearnCard
        title={'Flutter untk pengembangan Aplikasi Mobile Multi-Platform'}
      />
      <FinishedLearnCard
        title={'Menguasai React.js untuk Frontend Development'}
      />
      <FinishedLearnCard
        title={'Analitik Digital untuk keputusan marketing yang tepat'}
      />
    </div>
  );
};
