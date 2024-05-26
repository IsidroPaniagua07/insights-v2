import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import MenuButtons from './MenuButtons';
import TrackCurrentUrl from '../TrackCurrentUrl/TrackCurrentUrl';

const Sidebar = () => {
  // const { isAuthenticated, login, logout } = useAuth();
  // if (!isAuthenticated) {
  //   return (
  //   <>
  //       <nav>
  //     <div className="flex flex-col gap-2 items-center">
  //     </div>
  //   </nav>
  //   </>
  //   )
  // }



  return (
    <nav className='bg-white h-full w-full min-w-[230px] max-w-[230px] text-black border-r border-gray-200'>
      <TrackCurrentUrl />
      <div className="flex flex-col w-full items-center">
        <span className='w-full italic font-semibold text-gray-700 text-[1.1em] text-center h-[24px] bg-slate-100 border-b border-gray-200'>
          Navigation
        </span>
          <MenuButtons />

      </div>
    </nav>
  );
};

export default Sidebar;
