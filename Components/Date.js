import React from "react"

function AddDate(){
    const theDate = new Date();
    const dateStr = (theDate.getMonth() +1 ) + "/" + theDate.getDate() + "/" + theDate.getFullYear()
    return(
        <p className = "topcorner"> {dateStr} </p>
    )   
}

export default AddDate