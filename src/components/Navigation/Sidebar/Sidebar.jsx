import { useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faClockRotateLeft, faTicket, faClone, faPeopleGroup, faDiamond, faGear } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  console.log(currentPath)
  const { isAuthenticated, login, logout } = useAuth();
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

  const options = [
    {label: 'Home', link: '/', icon: faHouse},
    {label: 'Account History', link: '/history', icon: faClockRotateLeft },
    {label: 'Patron', link: '/patron', icon: faUser },
    {label: 'Redeem', link: '/redeem', icon: faTicket},
    {label: 'Reports', link: '/reports', icon: faClone},
    {label: 'Group Manager', link: '/group-manager', icon: faPeopleGroup },
    {label: 'Poker', link: '/poker', icon: faDiamond},
    {label: 'Admin', link: '/admin', icon: faGear},
  ];

  return (
    <nav className='bg-white h-full text-black border-r border-gray-200'>
      <div className="flex flex-col items-center">
        <span className='w-full italic font-semibold text-gray-700 text-[1.1em] text-center h-[24px] bg-slate-100 border-b border-gray-200'>
          Navigation
        </span>
        {options.map((option, index) => (
              <button
              key={index}
              onClick={() => navigate(option.link)}
              className={`
                ${currentPath === option.link ? 'bg-[#203A45] text-white' : 'hover:bg-[#ececec] hover:text-black text-gray-500 bg-white'}
                w-full flex flex-row items-center text-left rounded-none px-4 gap-2 py-2 font-normal h-[43px]  transition-colors duration-200
                `}
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
