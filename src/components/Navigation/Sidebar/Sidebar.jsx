import { useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { faHouse, faUser, faClockRotateLeft, faTicket, faClone, faPeopleGroup, faDiamond, faGear } from '@fortawesome/free-solid-svg-icons'
import MenuButton from './MenuButton';

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

  const options = [
    {label: 'Home', link: '/', icon: faHouse},
    {label: 'Account History', link: '/history', icon: faClockRotateLeft },
    {label: 'Patron', link: false, icon: faUser, nested: [
      {label: 'Comp', link: '/patron/comp'},
      {label: 'Kiosk Swipe Log', link: '/patron/swipelog'}
      ]},
    {label: 'Redeem', link: '/redeem', icon: faTicket},
    {label: 'Reports', link: '/reports', icon: faClone},
    {label: 'Group Manager', link: '/group-manager', icon: faPeopleGroup },
    {label: 'Poker', link: '/poker', icon: faDiamond},
    {label: 'Admin', link: false, icon: faGear, nested: [
      {label: 'Users', link: '/admin/users'},
      {label: 'Roles', link: '/admin/roles'},
      {label: 'Users', link: '/admin/users'},
      {label: 'Roles', link: '/admin/roles'},
      {label: 'Users', link: '/admin/users'},
      {label: 'Roles', link: '/admin/roles'},
    ]},
    {label: 'Poker', link: '/poker', icon: faDiamond},
  ];

  const collapseAll = () => {

  }

  return (
    <nav className='bg-white h-full text-black border-r border-gray-200'>
      <div className="flex flex-col items-center">
        <span className='w-full italic font-semibold text-gray-700 text-[1.1em] text-center h-[24px] bg-slate-100 border-b border-gray-200'>
          Navigation
        </span>
        {options.map((option, index) => (
            <MenuButton option={option} key={index} />
          ))}
          {/* <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="true">E-commerce</span>
                  <svg sidebar-toggle-item="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Products</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Billing</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Invoice</a>
						</li>
					</ul> */}
      </div>
    </nav>
  );
};

export default Sidebar;
