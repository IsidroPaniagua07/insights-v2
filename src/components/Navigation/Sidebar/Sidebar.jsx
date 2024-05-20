import { useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';

const Sidebar = () => {
const { isAuthenticated, login, logout } = useAuth();
  // const router = useRouter(); // Get router instance
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

  const [selectedOption, setSelectedOption] = useState(0); // Track the selected option

  // Define a function to handle button click
  const handleButtonClick = (path, index) => {
    // setSelectedOption(index); // Update selected option
    // router.push(path); // Navigate to the specified path
  };

  // Define sidebar options
  const options = [
    { id: 0, label: 'Home', link: '/home' },
    { id: 1, label: 'Login', link: '/login' },
    { id: 2, label: 'Option 3', link: '/option3' },
  ];

  return (
    <nav>
      <div className="flex flex-col gap-2 items-center">
        {options.map((option, index) => (
          <button
            key={option.id}
            className={`${selectedOption === index ? "bg-green-400" : ''}`}
            onClick={() => handleButtonClick(option.link, index)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
