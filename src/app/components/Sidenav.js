import React from 'react'

const Sidenav = () => {
    const icons = ["home", "person_search", "email", "send", "view_list", "info", "bar_chart"];
  return (
    <div style={{
        "width": "56px",
        "height": "696px",
        'border': "0px 1px 0px 0px ",
        "padding": "0px 4px 0px 4px",
        "backgroundColor": "#101113", 
        position: "fixed"
    }}>

        <div style={{"width": "48px", "height": "70px", "borderRadius": "2px", "padding": "8px 12px 12px 12px"}}>
            <div style={{"width": "26px", "height": "24px", "borderRadius": "2px", "backgroundColor": "white", "marginTop": "10px"}}></div>
        </div>

 {/* logo */}
      

<div style={{ width: "48px", height: "560px", }}>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", gap:"46px"}}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* Map through the icons array to render each icon */}
      {icons.map((icon, index) => (
        <span key={index} className="material-symbols-outlined" style={{ width: "28px", height: "28px" , color: "white", fontSize: "30px", display: "inline-block"}}>
          {icon}
        </span>
      ))}
      </div>
    </div>
   
{/* logo */}



        <div style={{"width": "48px", "height": "56px", "gap": "10px", "display": "flex", "justifyContent": "center", "alignContent": "center", "marginTop": "15px"}}>
            <div style={{"width": "32px", "height": "32px", "backgroundColor": "green"}}></div>
        </div>
    </div>
  )
}

export default Sidenav