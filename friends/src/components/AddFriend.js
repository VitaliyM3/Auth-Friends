import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { withRouter } from 'react-router';


const AddFriend = (props) => {
    const [friend, setFriend] = useState(
        {
            name: "",
            age: "",
            email: ""
        }
    );

    const newFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", friend)
            // .then(res => props.history.push('/'))
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setFriend({
            name: "",
            age: "",
            email: ""
        });
    };

    const changeHandler = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div>
            <form onSubmit={newFriend}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={friend.name}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={friend.age}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={friend.email}
                    onChange={changeHandler}
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
};

export default AddFriend;