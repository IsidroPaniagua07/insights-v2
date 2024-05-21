import { useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faClockRotateLeft, faTicket, faClone, faPeopleGroup, faDiamond } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();
    if (!isAuthenticated) {
      return (
      <>
          <nav>
        <div className="flex flex-col gap-2 items-center">

        </div>
      </nav>
      </>
      )
    }

  const options = [
    {label: 'Home', link: '/home', icon: faHouse},
    {label: 'Account History', link: '/history', icon: faClockRotateLeft },
    {label: 'Patron', link: '/Patron', icon: faUser },
    {label: 'Redeem', link: '/redeem', icon: faTicket},
    {label: 'Reports', link: '/Reports', icon: faClone},
    {label: 'Group Manager', link: '/group-manager', icon: faPeopleGroup },
    {label: 'Poker', link: '/Poker', icon: faDiamond},
  ];

  return (
    <nav className='bg-white h-full'>
      <div className="flex flex-col items-center">

        {options.map((option, index) => (
              <button
              key={index}
              onClick={() => navigate(option.link)}
              className={`w-full flex flex-row items-center bg-transparent text-black text-left px-4 gap-2 py-2 rounded-lg font-normal h-[43px]`}
              >
                <span className='w-[20px]'>
                  <FontAwesomeIcon icon={option.icon} />
                  </span>
                  {option.label}
              </button>
          ))}
      </div>
    </nav>
  );
};

export default Sidebar;
