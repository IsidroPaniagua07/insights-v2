import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import MenuButtons from './MenuButtons';
import TrackCurrentUrl from '../TrackCurrentUrl/TrackCurrentUrl';
import rubyCard from '/patron-cards/ruby.jpg';
import amberCard from '/patron-cards/amber.jpg';
import aquaCard from '/patron-cards/aqua.jpg';
import pearlCard from '/patron-cards/pearl.jpg';
import onyxCard from '/patron-cards/onyx.jpg';
import { useSelector } from 'react-redux';

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

  const renderCard = () => {
    let { firstName, lastName, tier, account, birthday, address, email, phoneNumber, validID, licensePlates, pointDetails, host} = patronData.patron
    return (
      <>
        <img src={amberCard} alt='Amber' className='w-[85%] aspect-auto'/>
        <span>Clark Test Kent</span>
        <span>1000000554</span>
        <span className='text-center'>Patron ID data is not on file or ID is expired</span>
        <span>Patron Image not saved</span>
        <div className='flex w-full justify-evenly items-center'>
          <button className='bg-blue-500 hover:bg-white hover:text-black hover:border
                             border-black transition-all text-white min-w-[45%] h-[28px] text-sm rounded-md'>Notes</button>
          <button className='bg-blue-500 hover:bg-white hover:text-black hover:border
                            border-black transition-all text-white min-w-[45%] h-[28px] text-sm rounded-md'>Clear Player</button>
        </div>
      </>
    )
  }

  return (
    <>
      {patronData.patron !== null
      ?renderCard()
      :null}

    <nav className='bg-white min-w max-h-full w-full min-w-[230px] max-w-[230px] text-black border-r border-gray-200 '>
      <TrackCurrentUrl />
      <div className="flex flex-col w-full items-center">
        <span className='w-full italic font-semibold text-gray-700 text-[.9em] text-center h-[24px] border-b border-t border-black'>
          Navigation
        </span>
          <MenuButtons />

      </div>
    </nav>
    </>
  );
};

export default Sidebar;
