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
        <Alert>{props.handleName}</Alert>
      
        </div>

    )
};
Profile.defaultProps = {
    fullName: 'No name',
    bio: 'No bio provided',
    profession: 'No profession provided',
    handleName:'Default Name',
  };
export default Profile;
