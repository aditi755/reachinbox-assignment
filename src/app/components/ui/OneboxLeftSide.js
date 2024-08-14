import React from 'react'

const OneboxLeftSide = ({emails, handleDeleteEmail, handleEmailClick, stripHtmlTags}) => {
  return (
    <div>
        {/* List of Emails */}
      <div style={{
  width: "278px", 
  height: "100vh", 
  position: "fixed", 
  top: "67px", 
  left: "71px", 
  borderRight: "2px solid #33383F", 
  borderRadius: "4px", 
  gap: "8px", border: "0px 1px 0px 0px"
}}>

     <p className='w-[160px] h-[47px] text-blue-400 text-2xl font-bold'>All Inbox</p>

     <input className="w-[275px] h-[44px] bg-gray-500"/>

{emails.map((email) => (
  <div 
    key={email.id} 
    className="w-[276px] h-[130px] shadow-md p-4 mb-4 cursor-pointer hover:bg-gray-100 border-b-2 border-gray-500 pr-2 mt-6 py-3 px-2" 
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

    </div>
  )
}

export default OneboxLeftSide