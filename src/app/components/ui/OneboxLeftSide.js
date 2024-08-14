'use client'
import React from 'react'
import {useState} from 'react'
const OneboxLeftSide = ({emails, handleDeleteEmail, handleEmailClick, stripHtmlTags}) => {

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);


//  Handler to open the confirmation dialog
  const handleOpenConfirmDialog = (email) => {
    setSelectedEmail(email);
    setShowConfirmDialog(true);
  };

  // Handler to confirm deletion
  const handleConfirmDelete = () => {
    if (selectedEmail) {
      handleDeleteEmail(selectedEmail.threadId);
      setSelectedEmail(null);
      setShowConfirmDialog(false);
    }
  };

  // Handler to cancel deletion
  const handleCancelDelete = () => {
    setSelectedEmail(null);
    setShowConfirmDialog(false);
  };
  return (
    <div>
        {/* List of Emails */}
      <div style={{
  width: "278px", 
  height: "100vh", 
  position: "fixed",  // Keep the fixed position for layout
  zIndex: 10, // Set a lower z-index for the email list
  top: "67px", 
  left: "56px", 
  borderRight: "2px solid #33383F", 
  borderRadius: "4px", 
  gap: "8px", border: "0px 1px 0px 0px"
}}>

     <p className='w-[160px] h-[47px] text-blue-400 text-2xl font-bold'>All Inbox</p>

     <div className="relative w-[275px]">
        <input
          type="text"
          className="w-full h-[44px] pl-10 pr-4 bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-500"
          placeholder="Search..."
        />
        <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 dark:text-gray-500">
          search
        </span>
      </div>

{emails.map((email) => (
  <div 
    key={email.id} 
    className="w-[278px] h-[130px] shadow-sm p-4 mb-4 cursor-pointer  border-b-2 border-gray-500 pr-2 mt-6 py-3 px-2" 
    onClick={() => handleEmailClick(email.threadId)}
  >
    {/* <h3 className="font-semibold text-lg mb-1 text-gray-500">{email.subject}</h3> */}
    <p className="text-sm dark:text-white text-black mb-1">{email.fromEmail}</p>
    <p className="text-sm text-custom-text mb-2 flex-nowrap">{stripHtmlTags(email.body).slice(0, 100)}...</p>
    <button 
      className="text-xs text-red-500 hover:text-red-700"
      onClick={(e) => {
        e.stopPropagation();  // Prevents the click from triggering the handleEmailClick
        handleOpenConfirmDialog(email);
      }}
    >
      Delete
    </button>
  </div>
))}


{showConfirmDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-black text-white p-8 rounded-lg w-1/3 ">
            <p className="mb-4">Are you sure you want to delete this email?</p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

        </div>

    </div>
  )
}

export default OneboxLeftSide