import { useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import jamulLogo from '/jamul-logo.png';

const Topbar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const handleLogin = () => {
    const userData = { name: "John Doe", email: "john.doe@example.com" };
    login(userData);
  };

  // if (!isAuthenticated) {
  //   return (
  //     <>
  //       <nav className='flex flex-row bg-[#203A45]'>
  //         <p>
  //         Please Login to Search for Patrons
  //         </p>
  //           <button onClick={handleLogin}>Login</button>
  //       </nav>
  //     </>
  //   )
  // }


  const options = [
    { id: 0, label: 'home', link: '/home' },
    { id: 1, label: 'login', link: '/login' },
    { id: 2, label: 'Option 3', link: '/option3' },
  ];

  return (
    <>
      <nav className='flex justify-between items-center gap-4 h-full w-full bg-[#203A45] text-white px-4 pb-2'>
        <div className='flex w-full'>
          <img src={jamulLogo} alt="Jamul Tear Drop Logo" className='h-[25px] w-[15.6px] mr-3'/>
          <span className="w-fit text-center mr-6">Intuition</span>
        <input type="text" placeholder="Search by account number, name, e-mail address or machine location" className=" w-max-[1371px] w-full bg-transparent"/>
        </div>
        <div className=" w-fit">
          <select className="text-[0.9em] py-[4px]">
            {/* Render 'Forms & Apps' as the default selected option */}
            <option value={0}  style={{display: 'none'}}>Forms & Apps</option>
            {/* Render the rest of the options, excluding 'Forms & Apps' */}
            {options
              .map(option => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
