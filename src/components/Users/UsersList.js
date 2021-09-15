import React from "react";
import Card from "../UI/Card";
import style from "./UserList.module.css";

const UsersList = props => {
    
    return (
        <Card className={style.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>{user.username} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    );
}

export default UsersList;