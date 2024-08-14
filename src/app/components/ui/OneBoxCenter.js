import React from 'react'

const OneBoxCenter = ({selectedEmail, stripHtmlTags, handleSendReply}) => {
  return (
   
<div style={{ width: "700px", position: "fixed", top: "69px", left: "363px" }}>
  <div   style={{
    width: "920px",
    height: "70px",
    position: "fixed",
    top: "69px",
    left: "333px",
    border: "0px 0px 1px 0px",
    padding: "0px 8px 0px 17px",
    display: "flex",
    justifyContent: "space-between",
    gap: "8px", 
    borderBottom: "2px solid #33383F",  
  }}>
    <div>  <p>Orlando</p>
    <p>orlando@email.com</p>
     </div>
    <div style={{width:"180px", height:"33px" , border:"1px solid #33383F", padding:"6px 8px 6px 8px", gap:"6px", backgroundColor:"#1F1F1F", textAlign:"center", color:"white"}}>Meeting completed</div>
  </div>
  <div style={{ width: "752px", height: "534px", position: "fixed", top: "161px", left: "384px", gap: "32px" }}>
    {selectedEmail && selectedEmail.length > 0 ? (
      selectedEmail.map((email, index) => (
        <div
          key={index}
          className="w-[753px] h-[220px] bg-custom-dark p-4  mb-4"
        >
          <h2>{email.subject}</h2>
          <p className='text-custom-text mt-2'>from: {email.fromEmail}</p>
          <p className="text-custom-text">to: {email.toEmail}</p>
          <div className="mt-4">{stripHtmlTags(email.body)}</div>

        </div>
      ))
    ) : (
      <div>Select an email to view its content</div>
    )}
  <button onClick={handleSendReply}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
             Reply          
          </button>
  </div>
</div>
  )
}

export default OneBoxCenter