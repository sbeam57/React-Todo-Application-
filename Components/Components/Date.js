import React from "react"

/*
AddDate()
Description:Functional component to retrieve the current date and add it to the top of the todo list
*/
function AddDate(){
    const theDate = new Date();
    // Logic to format the date to Month/Day/Year  
    const dateStr = (theDate.getMonth() +1 ) + "/" + theDate.getDate() + "/" + theDate.getFullYear()
    return(
        <p className = "topcorner"> {dateStr} </p>
    )   
}

export default AddDate