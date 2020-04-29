import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Friend from "./Friend";


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    // const getData = () => {
    //     axiosWithAuth()
    //         .get('/friends')
    //         .then(res => res.data.map((f) => {
    //             setFriends(...friends, res.data);
    //             return (
    //                 <div>
    //                     <Friend props={f} />
    //                 </div>
    //             )
    //         }))
    //         .catch(err => console.log(err))
    // };

    const getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    };


    return (
            <div>
                <button onClick={getData()} >Get Friends</button>
                    
                    {friends.map((item) => (
                    <div key={item.id}>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>Email: {item.email}</p>
                    </div>
                    ))}
                
            </div>
            
    )

}

export default FriendsList;
