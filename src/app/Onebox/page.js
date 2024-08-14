
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidenav from '../components/Sidenav';
import Header from '../components/Header';
import OneboxHome from '../components/OneboxHome';

const OneBox = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode by default

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      // Redirect to login if no token is found
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [router]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Apply the mode to the document body for global styles
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <div className="flex flex-row" style={{ }}>
        <Sidenav isDarkMode={isDarkMode} />

        {/* Ensure OneboxHome takes the remaining space */}
        <div className="flex-grow mt-20 ml-18">
          <OneboxHome />
        </div>
      </div>
   
    </div>
  );
};

export default OneBox;


