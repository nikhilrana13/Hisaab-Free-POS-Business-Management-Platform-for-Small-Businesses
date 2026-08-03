import WelcomeSection from '@/components/dashboard/WelcomeSection';
import React from 'react';
import { GiDonut } from 'react-icons/gi';
import { MdOutlineDonutSmall } from 'react-icons/md';

const page = () => {
  return (
    <div className='flex flex-col p-5 space-y-6'>
      {/* heading */}
      <WelcomeSection />
      {/* stats card */}
      <div className='flex flex-col border'>
        <span className='flex items-center py-5 gap-5'>
          <MdOutlineDonutSmall size={24} className='text-[#074FC8]' />
          <span className='text-[1.1rem] font-semibold'>Aaj ka Snapshot</span>
        </span>
        {/* cards  */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          
        </div>
      </div>

    </div>
  );
}

export default page;
