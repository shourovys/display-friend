import React from 'react';
import './FriendsAdded.css'


const FriendsAdded = (props) => {

    const addedFriend = props.addedFriend;
    console.log(addedFriend);

    let total = 0;
    for (let i = 0; i < addedFriend.length; i++) {
        const friend = addedFriend[i];
        total = total + friend.salary;
    }


    return (
        <div>
            <h2>Friends added :<span className="right">{addedFriend.length}</span></h2>
            <h6>Friends Salary : <span className="right">{total}</span></h6>
        </div>
    );
};

export default FriendsAdded;