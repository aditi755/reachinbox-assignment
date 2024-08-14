
//'use client'
// import React, { useEffect, useState } from 'react';

// const OneboxHome = () => {
//   const [emails, setEmails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEmails = async () => {
//       try {
//         const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
//           headers: {
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYmhhZG9yaXlhYWRpdGkwNDNAZ21haWwuY29tIiwiaWQiOjc4MCwiZmlyc3ROYW1lIjoiQWRpdGkiLCJsYXN0TmFtZSI6IkJoYWRvcml5YSJ9LCJpYXQiOjE3MjM1NzQ1ODcsImV4cCI6MTc1NTExMDU4N30.eHdZr1zwudV9TFDNbH1B7nqmy7mo7A7qcBMphEg1LPo', // Replace YOUR_TOKEN_HERE with the actual token
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch emails');
//         }

//         const result = await response.json();
//         setEmails(result.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchEmails();
//   }, []);

//   const stripHtmlTags = (html) => {
//     const tempDiv = document.createElement('div');
//     tempDiv.innerHTML = html;
//     return tempDiv.textContent || tempDiv.innerText || '';
//   };


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {emails.length === 0 ? (
//         <div className='w-[1383px] h-[693px] fixed top-[67px] left-[57px] flex flex-col justify-center items-center'>
//           <p className="font-bold text-1xl"> It’s the beginning of a legendary sales pipeline </p>
//           <p className="mt-8">When you have inbound E-mails you’ll see them here</p>
//           <p>You’ll see them here</p>
//         </div>
//       ) : (
//         <div className="flex">
//           <div style={{width: "278px", height: "821px", position: "fixed", top:"67px", left:"71px", border: "0px 1px 0px 1px", gap: "8px", backgroundColor:"red", height:"100vh"}}>
//             {/* You can map through emails to display them here */}
//             {emails.map((email) => (
//               <div key={email.id}>
//                 <p>{email.subject}</p>
//                 <p>{email.fromName}</p>
//                 <p>{stripHtmlTags(email.body)}</p>
//               </div>
//             ))}
//           </div>

//           <div style={{width:"700px", position:"fixed", top:"69px", left:"363px"}}>
//             <div style={{width:"700px", height:"70px"}}>Header</div>
//             <div style={{width:"752px", height:"534px", position:"fixed", top:"201px", left:"384px", gap:"32px"}}>Main</div>
//           </div>

//           <div style={{width: "278px", height: "821px", position: "fixed", top:"67px", left:"1260px", border: "0px 1px 0px 1px", gap: "8px", backgroundColor:"red", height:"100vh"}}>
//             Side
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OneboxHome;

'use client'
import React, { useEffect, useState } from 'react';
import CustomEditor from './CustomEditor';
const OneboxHome = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showReplyBox, setShowReplyBox] = useState(false); //make ot truw to see reply box
  const [replyContent, setReplyContent] = useState('');
  const [replyData, setReplyData] = useState({
    from: '',
    to: '',
    subject: '',
    body: ''
  });
 const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYmhhZG9yaXlhYWRpdGkwNDNAZ21haWwuY29tIiwiaWQiOjc4MCwiZmlyc3ROYW1lIjoiQWRpdGkiLCJsYXN0TmFtZSI6IkJoYWRvcml5YSJ9LCJpYXQiOjE3MjM1NzQ1ODcsImV4cCI6MTc1NTExMDU4N30.eHdZr1zwudV9TFDNbH1B7nqmy7mo7A7qcBMphEg1LPo'


  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          headers: {
            'Authorization': `Bearer ${token}`, // Replace with your token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }

        const result = await response.json();
        setEmails(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

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
        // Open reply box
        // Set state to show the reply component or modal
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

      setReplyContent('');  // Clear the reply content
      setShowReplyBox(false);  // Close the reply box
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  
  return (
    <div className="flex">
      {/* List of Emails */}
      <div style={{width: "278px", height: "821px", position: "fixed", top:"67px", left:"71px", border: "0px 1px 0px 1px",  border: `1px solid #33383F`, // Set the border color
    // padding: '0 10px 0 0', 
    borderRadius: '4px', gap: "8px", height:"100vh"}}>

     <p className='w-[160px] h-[47px] text-blue-400 text-2xl font-bold'>All Inbox</p>

     <input className="w-[275px] h-[44px] bg-gray-500"/>

{emails.map((email) => (
  <div 
    key={email.id} 
    className="w-[255px] h-[100px]shadow-md p-4 rounded-lg mb-4 cursor-pointer hover:bg-gray-100 border border-gray-800 pr-2 mt-6 ml-3" 
    onClick={() => handleEmailClick(email.threadId)}
  >
    {/* <h3 className="font-semibold text-lg mb-1 text-gray-500">{email.subject}</h3> */}
    <p className="text-sm text-gray-700 mb-1">{email.fromName}</p>
    <p className="text-sm text-gray-600 mb-2 flex-nowrap">{stripHtmlTags(email.body).slice(0, 100)}...</p>
    <button 
      className="text-xs text-red-500 hover:text-red-700"
      onClick={(e) => {
        e.stopPropagation();  // Prevents the click from triggering the handleEmailClick
        handleDeleteEmail(email.threadId);
      }}
    >
      Delete
    </button>
  </div>
))}

        </div>


      {/* Selected Email Content */}  

<div style={{ width: "700px", position: "fixed", top: "69px", left: "363px" }}>
  <div   style={{
    width: "799px",
    height: "70px",
    position: "fixed",
    top: "69px",
    left: "363px",
    // borderRadius: "7px 7px 0px 0px",
    border: "0px 0px 1px 0px",
    padding: "0px 8px 0px 17px",
    display: "flex",
    justifyContent: "space-between",
    gap: "8px"
  }}>
    <div>  <p>Orlando</p>
    <p>orlando@email.com</p>
     </div>
    <div style={{width:"180px", height:"33px", borderRadius:"0px", border:"1px", padding:"6px 8px 6px 8px", gap:"6px", backgroundColor:"#1F1F1F", textAlign:"center"}}>Meeting completed</div>
  </div>
  <div style={{ width: "752px", height: "534px", position: "fixed", top: "201px", left: "384px", gap: "32px" }}>
    {selectedEmail && selectedEmail.length > 0 ? (
      selectedEmail.map((email, index) => (
        <div
          key={index}
          className="w-[753px] h-[236px] bg-gray-600 p-4  mb-4"
        >
          <h2>{email.subject}</h2>
          <p>From: {email.fromEmail}</p>
          <p>To: {email.toEmail}</p>
          <div>{stripHtmlTags(email.body)}</div>
          
        </div>
      ))
    ) : (
      <div>Select an email to view its content</div>
    )}
  </div>
</div>


  {/* Reply Box (CustomEditor) */}
  {showReplyBox && (
        <div style={{ width: "700px", position: "fixed", top: "69px", left: "363px", backgroundColor: "#f9f9f9", padding: "16px", borderRadius: "8px" }}>
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

          <div style={{width: "278px", height: "821px", position: "fixed", top:"67px", left:"1260px", border: "0px 1px 0px 1px", gap: "8px", backgroundColor:"red", height:"100vh"}}>
           Side
           </div>

</div>

  );
};

export default OneboxHome;

