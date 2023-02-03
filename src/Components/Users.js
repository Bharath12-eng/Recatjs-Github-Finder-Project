import React from "react";
import UserItem from "./UserItem";

const Users = (props) =>{
    console.log(props.users)
    console.log(props.user)
    return(
        <>
       <div style={gridStyle}>
        {props.users.map((user) =>(
           
          <UserItem useritem={user} />
        ))}

       </div>
        </>
    )
    

}


const gridStyle = {
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridgap: "1rem"
}


export default Users;