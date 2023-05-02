import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';
import { useRouter } from 'next/router';
import {useState} from 'react';

interface TNavProps {
  title: string;
}

const TopNavigation = ({ title }: TNavProps) => {
  
  return (
    <div className='top-navigation'>
      <HashtagIcon />
      <Title title={title} />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const router = useRouter();
    const handleLogout = () => {
        // Clear the session or token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // Redirect the user to the login page
        router.push('/Login');
      };
  
    return (
      <div className="relative">
        <FaUserCircle
          size="24"
          className="top-navigation-icon cursor-pointer"
          onClick={() => setShowOverlay(true)}
        />
        {showOverlay && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <div className="py-1">
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = ({ title }: TNavProps) => <h5 className='title-text'>{title}</h5>;

const Logout = ({ handleLogout }: { handleLogout: () => void }) => (
  <button onClick={handleLogout}>Logout</button>
);

export default TopNavigation;
