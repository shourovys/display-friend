import React, { useState, useEffect } from 'react';
import sampleData from '../../fake-data/FakeData';
import './ShowFriend.css'
import AddFriend from '../AddFriend/AddFriend';
import './ShowFriend.css'
import FriendsAdded from '../FriendsAdded/FriendsAdded';



const ShowFriend = () => {

    const [data, setData] = useState(sampleData)



    const AddBtn = (user) => {
        const newFriend = [user, ...addedFriend]

        setAddedFriend(newFriend);
    }
    const [addedFriend, setAddedFriend] = useState([]);




    return (
        <div className="show-container">
            <div className="add-friend">
                {data.map(user => <AddFriend
                    user={user}
                    AddBtn={AddBtn}
                >

                </AddFriend>)}
            </div>
            <div className="friends-added">
                <FriendsAdded addedFriend={addedFriend}></FriendsAdded>
            </div>
        </div>
    );
};

export default ShowFriend;