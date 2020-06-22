import React from 'react';
import './AddFriend.css'

const AddFriend = props => {

    const { id, name, username, email, phone, salary, img } = props.user;
    // console.log(props);


    return (
        <div className="container">

            <div className="img-container">
                <img src={img} alt="" />
            </div>

            <div className="info-container">
                <div className="left-side">
                    <h4>Name : {name}</h4>
                    <p><small>Email : {email}</small></p>
                    <p><small>Phone : {phone}</small></p>
                </div>

                <div className="right-side">
                    <h6> User Name : {username}</h6>
                    <h6>User Salary : {salary}</h6>
                    <button className="add-friend-btn" onClick={() => props.AddBtn(props.user)}>Add Friend</button>
                </div>
            </div>

        </div>
    );
};

export default AddFriend;


