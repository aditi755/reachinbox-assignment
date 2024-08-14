import React from 'react'

const OneBoxCenter = ({selectedEmail, stripHtmlTags}) => {
  return (
   
<div style={{ width: "700px", position: "fixed", top: "69px", left: "363px" }}>
  <div   style={{
    width: "900px",
    height: "70px",
    position: "fixed",
    top: "69px",
    left: "353px",
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
    <div style={{width:"180px", height:"33px" , border:"1px solid #33383F", padding:"6px 8px 6px 8px", gap:"6px", backgroundColor:"#1F1F1F", textAlign:"center"}}>Meeting completed</div>
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
  )
}

export default OneBoxCenter