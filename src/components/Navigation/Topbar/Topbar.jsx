import { useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import jamulLogo from '/jamul-logo.png';
import { useDispatch } from 'react-redux';
import { searchPatron } from '../../store/patronSlice';

const Topbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, login, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  console.log('Form submitted:', searchTerm);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', searchTerm);
    dispatch(searchPatron(searchTerm));

    // For example, you can use fetch or axios to send the data to the server
  };

  return (
    <>
      <nav className='flex justify-between items-center gap-4 h-full w-full bg-[#203A45] text-white px-4 pb-2'>
        <div className='flex w-full'>
          <img src={jamulLogo} alt="Jamul Tear Drop Logo" className='h-[25px] w-[15.6px] mr-3'/>
          <span className="w-fit text-center mr-6">Insights</span>
          <form onSubmit={handleSubmit} className='h-full w-full'>
            <input
              type="text"
              placeholder="Search by account number, name, e-mail address or machine location"
              className="w-max-[1371px] w-full bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             />
          </form>
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
