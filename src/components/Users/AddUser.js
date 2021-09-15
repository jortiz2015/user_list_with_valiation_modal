import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import style from "./AddUser.module.css";

const AddUser = props => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(18);
    const [error, setError] = useState();

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }
    
    const ageChangeHandler = event => {
        setAge(event.target.value);
    }
    
    const addUserHandler = event => {
        event.preventDefault();
        if (username.trim().length === 0) {
            setError({
                title : "Invalid Name",
                message: "Please enter name"
            });
            return;
        }

        if(+age < 1) {
            setError({
                title : "Invalid Age",
                message: "Please enter valid age"
            });
            return;
        }

        const userData = {
            username: username,
            age: age,
            id: Math.random().toString()
        };

        setUsername("");
        setAge(18);
        console.log(userData);
        props.onAddUser(userData);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && 
                <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>
            }
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler}/>
                    <Button type="submit" onClick={addUserHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;