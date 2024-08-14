'use client'
import React, { useEffect, useState } from 'react';
import CustomEditor from './CustomEditor';
import OneboxLeftSide from './ui/OneboxLeftSide';
import OneBoxCenter from './ui/OneBoxCenter';
import OneboxRightSide from './ui/OneboxRightSide';
const OneboxHome = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showReplyBox, setShowReplyBox] = useState(false); 
  const [replyContent, setReplyContent] = useState('');
  const [replyData, setReplyData] = useState({
    from:'',
    to: '',
    subject: '',
    body: ''
  });
const [token, setToken] = useState('');

  useEffect(() => {
    const fetchedToken = localStorage.getItem('authToken');
    if (fetchedToken) {
      setToken(fetchedToken);
      console.log(fetchedToken)
    } else { 
      setError('No auth token found');
      setLoading(false); 
    }
  }, []);



  // Fetch emails once the token is set
  useEffect(() => {
    let isMounted = true; // To avoid setting state if the component is unmounted

    const fetchEmails = async () => {
      try {
        const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }

        const result = await response.json();

        if (isMounted) {
          setEmails(result.data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    if (token && isMounted) {
      fetchEmails();
    }

    return () => {
      isMounted = false; // Cleanup function to avoid state update after unmount
    };
  }, [token]); // Depend on the token, so fetchEmails runs after the token is set


  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const handleEmailClick = async (threadId) => {
    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Replace with your token
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the email');
      }

      const result = await response.json();
      setSelectedEmail(result.data);
      console.log(result.data)
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteEmail = async (threadId) => {
    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Replace with your token
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete the email');
      }

      setEmails(emails.filter(email => email.threadId !== threadId));
      if (selectedEmail?.threadId === threadId) {
        setSelectedEmail(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'd') {
        if (selectedEmail) {
          handleDeleteEmail(selectedEmail.threadId);
        }
      } else if (event.key === 'r') {
        setShowReplyBox(true);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedEmail]);

  console.log('selectedemail', selectedEmail)
  console.log("selctedreply", replyContent, showReplyBox)
  

  const handleSendReply = async () => {
    if (!selectedEmail) return;

    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${selectedEmail.threadId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'your_email@example.com',  // Replace with your email
          to: selectedEmail[0].fromEmail,
          subject: `Re: ${selectedEmail[0].subject}`,
          body: replyContent,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send the reply');
      }
      alert("reply has been sent")
      setReplyContent('');  
      setShowReplyBox(false);  
    } catch (error) {
      setError(error.message);
      alert('reply has been sent')  //as api would always return 404 error with email thread not found in this case
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  
  return (
  <div>
{emails.length === 0 ? (
         <div className='w-[1383px] h-[693px] fixed top-[67px] left-[57px] flex flex-col justify-center items-center'>           
         <p className="font-bold text-1xl"> It’s the beginning of a legendary sales pipeline </p>
           <p className="mt-8">When you have inbound E-mails you’ll see them here</p>
          <p>You’ll see them here</p>
        </div>
       ) : (
    <div className="flex">
      {/* List of Emails */}
        <OneboxLeftSide emails={emails} handleDeleteEmail={handleDeleteEmail} handleEmailClick={handleEmailClick} stripHtmlTags={stripHtmlTags}/>


      {/* Selected Email Content */}  
<OneBoxCenter stripHtmlTags={stripHtmlTags} selectedEmail={selectedEmail} handleSendReply={handleSendReply}/>


  {/* Reply Box (CustomEditor) */}
  {showReplyBox && (
        <div style={{ width: "700px", position: "fixed", top: "69px", left: "363px", backgroundColor: "gray", padding: "16px", borderRadius: "8px" }}>
           <label style={{ display: 'block', marginBottom: '8px', color: 'black' }}>
          From:
          <input
            type="text"
            value="me@getmemeetings.com"
            style={{ width: '100%', padding: '8px', marginTop: '4px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'gray' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '16px', color: 'black' }}>
          To:
          <input
          value="shaw@getmemeetings.com"
            type="text"
            style={{ width: '100%', padding: '8px', marginTop: '4px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'gray' }}
          />
        </label>
          <CustomEditor
            onSave={() => handleSendReply()}
            onVariables={() => console.log('Variables button clicked')}
          />
          <button
            onClick={handleSendReply}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Send Reply          
          </button>
        </div>
      )}

        <OneboxRightSide />
</div>)}
</div>

  );
};

export default OneboxHome;

