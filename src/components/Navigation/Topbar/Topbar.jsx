import { useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import jamulLogo from '/jamul-logo.png';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';

const fetchPatron = async (searchTerm) => {
  console.log('searching')
  const response = await fetch(`http://localhost:8484/api/search/patron/${searchTerm}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Topbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, login, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTrigger, setSearchTrigger] = useState(false);

  const { data, error, isLoading, refetch } = useQuery(
    ['patron', searchTerm],
    () => fetchPatron(searchTerm),
    {
      enabled: searchTrigger, // Only run the query when searchTrigger is true
      onSuccess: (data) => {
        // Handle successful data fetching here if needed
        setSearchTrigger(false); // Reset the trigger after the search is complete
      }
    }
  );

  const handleLogin = () => {
    const userData = { name: "John Doe", email: "john.doe@example.com" };
    login(userData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTrigger(true);
    refetch(); // Manually refetch the data when form is submitted
  };
  const options = [
    { id: 0, label: 'home', link: '/home' },
    { id: 1, label: 'login', link: '/login' },
    { id: 2, label: 'Option 3', link: '/option3' },
  ];

  return (
    <>
      <nav className='flex justify-between items-center gap-4 h-full w-full bg-[#203A45] text-white px-4 pb-2'>
        <div className='flex w-full'>
          <img src={jamulLogo} alt="Jamul Tear Drop Logo" className='h-[25px] w-[15.6px] mr-3' />
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
        <div className="w-fit">
          <select className="text-[0.9em] py-[4px]">
            {/* Render 'Forms & Apps' as the default selected option */}
            <option value={0} style={{ display: 'none' }}>Forms & Apps</option>
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
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h2>Patron Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Topbar;
