'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HandleAuth = () => {
  const router = useRouter();

  useEffect(() => {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      // Save the token to localStorage
      localStorage.setItem('authToken', token);

      // Redirect to the OneBox page or desired route
      router.push('/Onebox'); // Change '/onebox' to the path of your OneBox page
    }
  }, [router]);

  return (
    <div>
      <p>Processing authentication...</p>
    </div>
  );
};

export default HandleAuth;
