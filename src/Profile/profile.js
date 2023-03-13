import React from "react";

function Profile (props) {
    
    return (
        <div>
            <div>
        <h2>{props.fullName}</h2>
        <p>{props.bio}</p>
        <p>{props.profession}</p>
            </div>
        <div >{props.children}</div>
        <button onClick={() => props.handleName(props.fullName)}>Show Name</button>
      
        </div>

    )
};
Profile.defaultProps = {
    fullName: 'No name',
    bio: 'No bio provided',
    profession: 'No profession provided',
    
  };
export default Profile;
