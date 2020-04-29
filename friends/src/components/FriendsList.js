import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Friend from "./Friend";


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    // componentDidMount() {
    //     this.getData();
    // }


    const getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => res.data.map((f) => {
                console.log("this is logged for getdata", f)
                return (
                    <div>
                        <Friend props={f} />
                    </div>
                )
            }))
            .catch(err => console.log(err))
    };

    // console.log(friends);
    return (
            <div>
                <button onClick={getData()} >Get Friends</button>
                <div>
                    <ul>
                        {friends.map(() => <li/>)}
                        {/* {friends.map((friend) => <li
                        key={friend.id}
                        value={friend}
                        
                        />)} */}
                    </ul>
                </div>
            </div>
            
    )

}

export default FriendsList;
